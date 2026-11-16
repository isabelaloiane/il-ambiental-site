import { useEffect, useRef, useState } from "react";

/**
 * Controles da faixa arrastável no celular (≤ 600 px).
 *
 * Uso: coloque <CarouselNav /> logo DEPOIS do elemento que tem a classe
 * "m-carousel". No computador o elemento continua sendo a grade original e
 * estes controles ficam ocultos (CSS). No celular o elemento vira uma faixa
 * horizontal com scroll-snap e estes controles mostram setas e pontos.
 *
 * Sem texto visível: apenas ícones SVG com aria-label.
 */
const MOBILE_QUERY = "(max-width: 600px)";

function prefersReducedMotion() {
  return typeof window !== "undefined" &&
    !!window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function CarouselNav({ tone = "light" }: { tone?: "light" | "dark" }) {
  const navRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const getTrack = () =>
    (navRef.current?.previousElementSibling as HTMLElement | null) ?? null;

  useEffect(() => {
    const track = getTrack();
    if (!track) return;
    let raf = 0;

    const update = () => {
      raf = 0;
      const items = Array.from(track.children) as HTMLElement[];
      setCount(items.length);
      if (!items.length) return;
      const trackLeft = track.getBoundingClientRect().left;
      const padLeft = parseFloat(getComputedStyle(track).paddingLeft) || 0;
      let best = 0;
      let bestDist = Infinity;
      items.forEach((el, i) => {
        const d = Math.abs(el.getBoundingClientRect().left - trackLeft - padLeft);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      const max = track.scrollWidth - track.clientWidth;
      const start = track.scrollLeft <= 2;
      const end = max <= 2 || track.scrollLeft >= max - 2;
      setIndex(end ? items.length - 1 : best);
      setAtStart(start);
      setAtEnd(end);
      track.classList.toggle("is-end", end);
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };

    track.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();

    // Dica de arraste: na primeira vez que a faixa aparece no celular,
    // os cards deslizam ~48 px para a esquerda e voltam.
    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window && !prefersReducedMotion()) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            if (!window.matchMedia(MOBILE_QUERY).matches) return;
            io?.disconnect();
            if (track.scrollLeft > 2) return;
            track.classList.add("m-hint");
            window.setTimeout(() => track.classList.remove("m-hint"), 1300);
          });
        },
        { threshold: 0.6 }
      );
      io.observe(track);
    }

    return () => {
      track.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, []);

  const goTo = (i: number) => {
    const track = getTrack();
    if (!track) return;
    const items = Array.from(track.children) as HTMLElement[];
    if (!items.length) return;
    const target = Math.max(0, Math.min(items.length - 1, i));
    const left = items[target].offsetLeft - items[0].offsetLeft;
    track.scrollTo({ left, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  };

  return (
    <div
      ref={navRef}
      className={`m-carousel-nav tone-${tone}`}
      role="group"
      aria-label="Navegação dos cards"
    >
      <button
        type="button"
        className="m-carousel-arrow prev"
        aria-label="Card anterior"
        disabled={atStart}
        onClick={() => goTo(index - 1)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <div className="m-carousel-dots">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            className={`m-carousel-dot${i === index ? " is-active" : ""}`}
            aria-label={`Ir para o card ${i + 1} de ${count}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
      <button
        type="button"
        className={`m-carousel-arrow next${atEnd ? "" : " is-nudging"}`}
        aria-label="Próximo card"
        disabled={atEnd}
        onClick={() => goTo(index + 1)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
