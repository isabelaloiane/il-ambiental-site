import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Sobre() {
  useEffect(() => {
    document.title = "Sobre a IL | Engenharia e Consultoria Ambiental no Pará";
    return () => { document.title = "IL Ambiental | Engenharia e Consultoria Ambiental"; };
  }, []);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO — photo + credentials */}
      <section className="page-hero" style={{
        background: "#452816",
        display: "flex",
        alignItems: "center",
        minHeight: 400,
      }}>
        <div style={{
          maxWidth: 1040,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 48,
          alignItems: "center",
          width: "100%",
        }}>
          {/* Left: text */}
          <div>
            <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(223,196,159,0.55)", fontWeight: 500, display: "block", marginBottom: 16 }}>Quem Somos</span>
            <h1 className="fade-1" style={{ fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#DFC49F", lineHeight: 1.1, margin: 0 }}>
              Rigor técnico. Atendimento humano. Resultado garantido.
            </h1>
            <p className="fade-2" style={{ fontSize: "1rem", color: "rgba(223,196,159,0.72)", lineHeight: 1.65, maxWidth: 440, marginTop: 16, marginBottom: 0 }}>
              Nascemos em Belém para servir empresas que precisam de conformidade ambiental com agilidade e sem burocracia.
            </p>
            <a href="#historia" className="fade-3" style={{ background: "#DFC49F", color: "#452816", padding: "12px 28px", borderRadius: 8, fontWeight: 600, fontSize: "0.9rem", display: "inline-block", marginTop: 28, textDecoration: "none", transition: "background 200ms ease" }}>
              Conheça a IL ↓
            </a>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section id="historia" style={{ maxWidth: 720, margin: "0 auto", padding: "88px 24px 48px" }}>
        <div data-aos="fade-up">
          <span className="section-caption">Nossa História</span>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)", color: "#2C1A0E", lineHeight: 1.2, margin: 0, marginBottom: 10 }}>Uma consultoria feita por quem vive o Pará.</h2>
          <span className="section-title-line" />
        </div>
        <p data-aos="fade-up" data-aos-delay="80" style={{ fontSize: "1.05rem", color: "#8C7B6B", lineHeight: 1.8, marginBottom: 20, marginTop: 0 }}>
          A IL nasceu com um propósito: tornar o licenciamento ambiental no Pará mais ágil, transparente e acessível. Combinamos rigor técnico com atendimento próximo, porque cada empresa tem suas particularidades e merece uma solução sob medida.
        </p>
        <p data-aos="fade-up" data-aos-delay="160" style={{ fontSize: "1.05rem", color: "#8C7B6B", lineHeight: 1.8, margin: 0 }}>
          Com foco exclusivo no estado do Pará, dominamos o contexto regulatório local: os prazos da SEMAS-PA, as exigências do IBAMA e dos demais órgãos ambientais competentes, e as particularidades de cada setor produtivo. O resultado? Menos erros, menos idas e vindas aos órgãos, e um caminho mais curto até a sua licença.
        </p>
      </section>

      {/* DIFFERENTIALS */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px 80px" }}>
        <div>
          <span className="section-caption" data-aos="fade-up">Por que a IL</span>
          <h2 data-aos="fade-up" style={{ fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", color: "#2C1A0E", margin: 0, marginBottom: 32 }}>O que nos diferencia</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {[
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              ),
              title: "Especialização Regional",
              desc: "Conhecemos as exigências da SEMAS-PA, do IBAMA e dos demais órgãos ambientais em profundidade. O resultado: menos erros, menos atrasos.",
              dark: true,
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              ),
              title: "Agilidade no Processo",
              desc: "Documentação correta desde o início significa menos idas e vindas aos órgãos. Resposta em 24h.",
              dark: true,
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              ),
              title: "Atendimento Personalizado",
              desc: "Cada cliente tem uma realidade diferente. Estudamos seu empreendimento antes de propor qualquer solução.",
              dark: false,
            },
            {
              icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="14"/>
                </svg>
              ),
              title: "Rigor Técnico",
              desc: "Laudos, relatórios e estudos elaborados com metodologia rigorosa, para atender qualquer exigência dos órgãos.",
              dark: false,
            },
          ].map((d, i) => (
            <div
              key={i}
              className="hover-card"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              style={{
                background: d.dark ? "#452816" : "#F5F0E8",
                borderRadius: 16,
                padding: 28,
                color: d.dark ? "#DFC49F" : "#2C1A0E",
                border: d.dark ? "none" : "1px solid rgba(181,137,94,0.25)",
              }}
            >
              <div style={{ color: d.dark ? "#DFC49F" : "#734120", marginBottom: 14, opacity: 0.9 }}>{d.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", margin: 0, marginBottom: 8 }}>{d.title}</h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: d.dark ? "rgba(223,196,159,0.7)" : "#8C7B6B", margin: 0 }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION & VISION */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          <div data-aos="fade-right" style={{ background: "#452816", borderRadius: 16, padding: 40, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -10, left: 16, fontSize: 120, color: "rgba(223,196,159,0.06)", fontFamily: "serif", lineHeight: 1, pointerEvents: "none" }}>❝</div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(223,196,159,0.55)", fontWeight: 600 }}>Nossa Missão</span>
              <p style={{ fontSize: "1.05rem", color: "#DFC49F", lineHeight: 1.75, marginTop: 16, marginBottom: 0 }}>
                Garantir que empresas de todos os portes operem em conformidade ambiental no Pará, com eficiência, segurança jurídica e sem burocracia desnecessária.
              </p>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-delay="100" style={{ background: "#F5F0E8", borderRadius: 16, padding: 40, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -10, left: 16, fontSize: 120, color: "rgba(115,65,32,0.1)", fontFamily: "serif", lineHeight: 1, pointerEvents: "none" }}>❝</div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#B5895E", fontWeight: 600 }}>Nossa Visão</span>
              <p style={{ fontSize: "1.05rem", color: "#2C1A0E", lineHeight: 1.75, marginTop: 16, marginBottom: 0 }}>
                Ser a primeira escolha em consultoria ambiental no Pará, reconhecida pelo rigor técnico, pela agilidade e pelo impacto positivo nas operações dos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: "0 24px 96px" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <span className="section-caption" data-aos="fade-up">Nossos Valores</span>
          <h2 data-aos="fade-up" style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#2C1A0E", margin: 0 }}>O que guia cada decisão que tomamos</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, maxWidth: 900, margin: "0 auto" }}>
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#734120" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              ),
              title: "Rigor Técnico",
              desc: "Cada documento que sai da IL foi elaborado para resistir a qualquer auditoria.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#734120" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              ),
              title: "Atendimento Humano",
              desc: "Processos ambientais geram ansiedade. Mantemos comunicação clara e proativa em cada etapa.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#734120" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              ),
              title: "Compromisso Ambiental",
              desc: "Acreditamos que conformidade e desenvolvimento sustentável caminham juntos.",
            },
          ].map((v, i) => (
            <div
              key={i}
              className="hover-card"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              style={{ background: "#fff", border: "1px solid rgba(181,137,94,0.25)", borderRadius: 16, padding: 32 }}
            >
              <div style={{ width: 48, height: 48, background: "rgba(115,65,32,0.08)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                {v.icon}
              </div>
              <h3 style={{ fontWeight: 700, color: "#2C1A0E", fontSize: "1.05rem", margin: 0, marginBottom: 10 }}>{v.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "#8C7B6B", lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-section" style={{ background: "#452816", padding: "72px 24px", textAlign: "center" }}>
        <h2 data-aos="fade-up" style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#DFC49F", margin: 0 }}>
          Quer conversar sobre a situação ambiental da sua empresa?
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" style={{ color: "rgba(223,196,159,0.68)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 560, margin: "16px auto 0" }}>
          Fale com a IL e receba uma orientação técnica inicial sem custo. Respondemos em até 24 horas.
        </p>
        <div data-aos="fade-up" data-aos-delay="200">
          <Link href="/contato" className="btn-light" style={{ marginTop: 32, display: "inline-flex" }}>
            Fale com um especialista
          </Link>
          <p style={{ fontSize: "0.78rem", color: "rgba(223,196,159,0.4)", marginTop: 14 }}>Sem compromisso. Resposta em até 24 horas.</p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
