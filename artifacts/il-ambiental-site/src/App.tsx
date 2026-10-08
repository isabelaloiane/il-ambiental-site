import { Route, Switch, useLocation } from "wouter";
import { Router as WouterRouter } from "wouter";
import { Home } from "./pages/home";
import { Servicos } from "./pages/servicos";
import { Contato } from "./pages/contato";
import { Sobre } from "./pages/sobre";
import { GestaoAmbiental } from "./pages/gestao-ambiental";
import { Privacidade } from "./pages/privacidade";
import { NotFound } from "./pages/not-found";
import { CookieBanner } from "./components/CookieBanner";
import { useEffect } from "react";
import { captureTracking } from "./lib/tracking";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const PAGE_META: Record<string, { title: string; description: string; canonical: string }> = {
  "/": {
    title: "IL Ambiental | Gestão e Licenciamento Ambiental em Belém",
    description: "Licenças, outorga de água, PGRS, RIAA e gestão ambiental contínua para empresas de Belém e região metropolitana. Responsável técnica: Eng. Florestal Isabela Loiane, CREA-PA.",
    canonical: "https://ilambiental.com.br/",
  },
  "/servicos": {
    title: "Serviços | IL Ambiental",
    description: "Outorga, licença de operação, relatórios, PGRS, condicionantes e autos de infração para empresas da Região Metropolitana de Belém.",
    canonical: "https://ilambiental.com.br/servicos",
  },
  "/contato": {
    title: "Contato | IL Ambiental",
    description: "Fale com a IL Ambiental pelo WhatsApp (91) 99272-3570 ou pelo formulário. Retorno em até 1 dia útil.",
    canonical: "https://ilambiental.com.br/contato",
  },
  "/sobre": {
    title: "Sobre | IL Ambiental",
    description: "Conheça a IL Ambiental e sua responsável técnica, engenheira florestal com especialização em Direito Agroambiental.",
    canonical: "https://ilambiental.com.br/sobre",
  },
  "/gestao-ambiental": {
    title: "Gestão Ambiental | IL Ambiental",
    description: "Programa Sentinela: acompanhamento anual de licenças, prazos e condicionantes da sua empresa. Comece pelo Diagnóstico Vértice, sem custo.",
    canonical: "https://ilambiental.com.br/gestao-ambiental",
  },
  "/privacidade": {
    title: "Política de Privacidade | IL Ambiental",
    description: "Política de privacidade da IL Ambiental.",
    canonical: "https://ilambiental.com.br/privacidade",
  },
};

// S2: rolagem até a âncora (#agua, #pgrs etc.) depois que a página monta.
// Desconta o menu fixo (90px). Repete algumas vezes porque imagens e fontes
// carregadas depois podem deslocar o layout.
const ANCHOR_OFFSET = 90;

function scrollToHash(hash: string): boolean {
  const id = decodeURIComponent(hash.replace(/^#/, ""));
  if (!id) return false;
  const el = document.getElementById(id);
  if (!el) return false;
  const top = el.getBoundingClientRect().top + window.scrollY - ANCHOR_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: "instant" as ScrollBehavior });
  return true;
}

function scheduleHashScroll(): boolean {
  const hash = window.location.hash;
  if (!hash || hash === "#") return false;
  [0, 150, 450, 900].forEach(delay =>
    window.setTimeout(() => {
      if (window.location.hash === hash) scrollToHash(hash);
    }, delay),
  );
  return true;
}

function HashScroll() {
  useEffect(() => {
    // Navegação para a mesma página com outra âncora (ex.: links do rodapé em /servicos)
    const onNav = () => { scheduleHashScroll(); };
    const events = ["pushState", "replaceState", "hashchange"];
    events.forEach(ev => window.addEventListener(ev, onNav));
    return () => events.forEach(ev => window.removeEventListener(ev, onNav));
  }, []);
  return null;
}

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    captureTracking();
    if (!scheduleHashScroll()) {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }

    const meta = PAGE_META[location] ?? {
      title: "IL Ambiental | Consultoria e Licenciamento Ambiental em Belém",
      description: "IL Ambiental – Engenharia e consultoria ambiental em Belém, Pará.",
      canonical: "https://ilambiental.com.br" + location,
    };

    // SC-08: update page title
    document.title = meta.title;

    // SC-10: canonical per page
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link") as HTMLLinkElement;
      canonicalEl.rel = "canonical";
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = meta.canonical;

    // SC-11: meta description per page
    let descEl = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!descEl) {
      descEl = document.createElement("meta") as HTMLMetaElement;
      descEl.name = "description";
      document.head.appendChild(descEl);
    }
    descEl.content = meta.description;

    // SC-07: Pixel PageView on each route change
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }

    // SC-08: GA4 page_view with correct title
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_title: meta.title,
        page_location: window.location.href,
      });
    }
  }, [location]);
  return null;
}

export function App() {
  return (
    <WouterRouter>
      <ScrollToTop />
      <HashScroll />
      <CookieBanner />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/contato" component={Contato} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/gestao-ambiental" component={GestaoAmbiental} />
        <Route path="/privacidade" component={Privacidade} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

export default App;
