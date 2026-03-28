import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Sobre() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section style={{ minHeight: 360, background: "#1a3322", display: "flex", alignItems: "center", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "center", width: "100%" }}>
          <div>
            <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.5)", fontWeight: 500, display: "block", marginBottom: 16 }}>Quem Somos</span>
            <h1 className="fade-1" style={{ fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff", lineHeight: 1.1, margin: 0 }}>
              Rigor técnico. Atendimento humano. Resultado garantido.
            </h1>
            <p className="fade-2" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.65, maxWidth: 440, marginTop: 16, marginBottom: 0 }}>
              A consultoria ambiental que nasceu no Pará, e conhece o Pará como ninguém.
            </p>
            <Link href="/contato" className="fade-3" style={{ background: "#fff", color: "#1a3322", padding: "12px 28px", borderRadius: 6, fontWeight: 600, fontSize: "0.9rem", display: "inline-block", marginTop: 28, textDecoration: "none", transition: "background 200ms ease" }}>
              Conheça nossa história
            </Link>
          </div>
          <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 16, padding: 28 }}>
            <div style={{ textAlign: "center", marginBottom: 16 }}>
              <div style={{ fontSize: "3rem" }}>🌿</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>Est. 2020</div>
            </div>
            <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.12)", margin: "0 0 16px" }} />
            {[
              { icon: "📍", text: "Belém, Pará" },
              { icon: "🌿", text: "Licenciamento & ESG" },
              { icon: "🛡", text: "SEMAS-PA · IBAMA · SEMMA · SESPA · INCRA" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 12 }}>
                <span style={{ flexShrink: 0 }}>{item.icon}</span>
                <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.8)", fontWeight: 500, lineHeight: 1.4 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "72px 24px 40px" }}>
        <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#2D6A4F", fontWeight: 600, display: "block", marginBottom: 14 }}>Nossa História</span>
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)", color: "#1A1A1A", lineHeight: 1.2, margin: 0, marginBottom: 24 }}>A IL nasceu no Pará com uma missão clara.</h2>
        <p style={{ fontSize: "1.05rem", color: "#6B7280", lineHeight: 1.8, marginBottom: 20, marginTop: 0 }}>
          A IL nasceu no Pará com uma missão clara: tornar a conformidade ambiental acessível, ágil e sem burocracia desnecessária para empresas de todos os portes. Combinamos expertise em licenciamento, gestão ambiental e relatórios técnicos com um atendimento que entende as particularidades de cada empreendimento, porque cada empresa tem uma história e um processo próprio.
        </p>
        <p style={{ fontSize: "1.05rem", color: "#6B7280", lineHeight: 1.8, margin: 0 }}>
          Com foco no estado do Pará, a IL conhece em profundidade o contexto regulatório local: as exigências da SEMAS-PA, os prazos do IBAMA e as especificidades de cada setor produtivo na região. Isso significa menos erros, mais agilidade e um caminho mais curto até a sua licença.
        </p>
      </section>

      {/* DIFFERENTIALS */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px 72px" }}>
        <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#2D6A4F", fontWeight: 600, display: "block", marginBottom: 8 }}>Por que a IL</span>
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", color: "#1A1A1A", margin: 0, marginBottom: 32 }}>O que nos diferencia</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
          {[
            { icon: "🌿", title: "Especialização Regional", desc: "Conhecemos as exigências da SEMAS-PA e do IBAMA regional em profundidade. Menos atrasos, menos erros e um processo mais ágil.", featured: true },
            { icon: "📄", title: "Conformidade Garantida", desc: "Acompanhamos cada etapa do processo para que sua empresa opere dentro da lei, sem surpresas.", featured: false, dark: true },
            { icon: "⚡", title: "Agilidade no Processo", desc: "Documentação correta desde o início: menos idas e vindas ao órgão ambiental. Resposta em 24h.", featured: false, dark: false },
            { icon: "👥", title: "Atendimento Personalizado", desc: "Cada cliente tem uma realidade diferente. Nós estudamos seu empreendimento antes de propor qualquer solução.", featured: false, dark: false },
            { icon: "📊", title: "Rigor Técnico", desc: "Laudos, relatórios e estudos elaborados com metodologia rigorosa, para atender qualquer exigência dos órgãos fiscalizadores.", featured: false, dark: false },
          ].map((d, i) => (
            <div key={i} className="hover-card" style={{
              background: d.dark ? "#1a3322" : "#F3F7F4",
              borderRadius: 16, padding: 28, color: d.dark ? "#fff" : "#1A1A1A",
              border: d.dark ? "none" : "1px solid #E5E7EB"
            }}>
              <div style={{ fontSize: "2rem", marginBottom: 12 }}>{d.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", margin: 0, marginBottom: 8 }}>{d.title}</h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: d.dark ? "rgba(255,255,255,0.7)" : "#6B7280", margin: 0 }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION & VISION */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 72px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          <div style={{ background: "#1a3322", borderRadius: 16, padding: 40, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -10, left: 16, fontSize: 120, color: "rgba(255,255,255,0.06)", fontFamily: "serif", lineHeight: 1, pointerEvents: "none" }}>❝</div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>Nossa Missão</span>
              <p style={{ fontSize: "1.05rem", color: "#fff", lineHeight: 1.75, marginTop: 16, marginBottom: 0 }}>
                Garantir que empresas de todos os portes operem em conformidade ambiental com eficiência, segurança e tranquilidade, eliminando a burocracia e conduzindo cada cliente a um caminho sólido e sustentável.
              </p>
            </div>
          </div>
          <div style={{ background: "#F3F7F4", borderRadius: 16, padding: 40, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -10, left: 16, fontSize: 120, color: "rgba(45,106,79,0.12)", fontFamily: "serif", lineHeight: 1, pointerEvents: "none" }}>❝</div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#2D6A4F", fontWeight: 600 }}>Nossa Visão</span>
              <p style={{ fontSize: "1.05rem", color: "#1A1A1A", lineHeight: 1.75, marginTop: 16, marginBottom: 0 }}>
                Ser a referência em consultoria ambiental no Pará, tornando o conhecimento ambiental acessível e presente no dia a dia das empresas e da sociedade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: "0 24px 80px" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#2D6A4F", fontWeight: 600, display: "block", marginBottom: 8 }}>Nossos Valores</span>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#1A1A1A", margin: 0 }}>O que guia cada decisão que tomamos</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, maxWidth: 900, margin: "0 auto" }}>
          {[
            { icon: "⚖", title: "Rigor Técnico", desc: "Cada laudo, relatório e estudo é elaborado com precisão e fundamentação. Entregamos documentação que resiste a qualquer auditoria." },
            { icon: "🤝", title: "Atendimento Humano", desc: "Sabemos que processos ambientais geram ansiedade. Por isso, mantemos comunicação clara, transparente e próxima em cada etapa." },
            { icon: "🌿", title: "Compromisso Ambiental", desc: "Não somos apenas consultores de conformidade; acreditamos no desenvolvimento sustentável como responsabilidade de todos." },
          ].map((v, i) => (
            <div key={i} className="hover-card" style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 16, padding: 32 }}>
              <div style={{ width: 48, height: 48, background: "rgba(45,106,79,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: 16 }}>{v.icon}</div>
              <h3 style={{ fontWeight: 700, color: "#1A1A1A", fontSize: "1.05rem", margin: 0, marginBottom: 10 }}>{v.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: "#0d1a0f", padding: "72px 24px", textAlign: "center" }}>
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#fff", margin: 0 }}>
          Pronta para garantir sua conformidade ambiental?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.68)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 560, margin: "16px auto 0" }}>
          Fale com a IL Ambiental e descubra como podemos simplificar seu processo, do licenciamento à gestão completa.
        </p>
        <Link href="/contato" className="btn-primary" style={{ marginTop: 32, display: "inline-flex" }}>
          Fale com um especialista
        </Link>
        <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginTop: 14 }}>Sem compromisso. Resposta em até 24 horas.</p>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
