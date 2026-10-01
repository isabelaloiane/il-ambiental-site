/**
 * Rastreamento de origem do lead (UTMs + página de origem).
 * - captureTracking(): chamado a cada mudança de rota (App.tsx). Guarda as UTMs
 *   da primeira página com UTM da sessão e registra a página anterior.
 * - getTracking(): valores usados nos campos ocultos do formulário de contato.
 */

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;
type UtmKey = (typeof UTM_KEYS)[number];

export type Tracking = Record<UtmKey, string> & { pagina_origem: string };

const SS_UTM = "il_utm";
const SS_PREV = "il_prev_page";
const SS_CURR = "il_curr_page";
const SS_REF = "il_entry_referrer";

function ssGet(key: string): string | null {
  try { return sessionStorage.getItem(key); } catch { return null; }
}
function ssSet(key: string, value: string) {
  try { sessionStorage.setItem(key, value); } catch { /* storage indisponível */ }
}

export function captureTracking() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const fromUrl: Partial<Record<UtmKey, string>> = {};
  UTM_KEYS.forEach(k => {
    const v = params.get(k);
    if (v) fromUrl[k] = v.slice(0, 200);
  });
  if (Object.keys(fromUrl).length > 0) ssSet(SS_UTM, JSON.stringify(fromUrl));

  if (ssGet(SS_REF) === null) {
    const ref = document.referrer && !document.referrer.startsWith(window.location.origin)
      ? document.referrer
      : "";
    ssSet(SS_REF, ref);
  }

  const here = window.location.pathname + window.location.search;
  const curr = ssGet(SS_CURR);
  if (curr !== null && curr !== here) ssSet(SS_PREV, curr);
  ssSet(SS_CURR, here);
}

export function getTracking(): Tracking {
  let stored: Partial<Record<UtmKey, string>> = {};
  try { stored = JSON.parse(ssGet(SS_UTM) || "{}"); } catch { stored = {}; }
  const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : new URLSearchParams();

  const result = {} as Tracking;
  UTM_KEYS.forEach(k => { result[k] = params.get(k) || stored[k] || ""; });

  // O formulário lê os valores durante a renderização, antes de captureTracking()
  // registrar a rota atual: se a página registrada como "atual" não é esta,
  // ela é a página de onde a pessoa veio.
  const here = typeof window !== "undefined" ? window.location.pathname + window.location.search : "";
  const curr = ssGet(SS_CURR);
  const prev = curr !== null && curr !== here ? curr : ssGet(SS_PREV);
  const ref = ssGet(SS_REF);
  const origin = typeof window !== "undefined" ? window.location.origin : "https://ilambiental.com.br";
  result.pagina_origem = prev
    ? origin + prev
    : ref
      ? ref
      : (typeof window !== "undefined" ? window.location.href : "");
  return result;
}
