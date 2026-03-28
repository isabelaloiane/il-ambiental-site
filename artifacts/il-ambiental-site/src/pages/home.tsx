import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Home() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section
        className="hero-animated-bg"
        style={{ minHeight: "90vh", padding: "120px 24px 100px", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,20,12,0.62)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 720, marginLeft: "clamp(24px, 8vw, 120px)" }}>
          <h1 className="fade-1" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(2.4rem, 5.5vw, 4rem)", lineHeight: 1.1, color: "#fff", margin: 0 }}>
            Sua empresa em conformidade ambiental, com quem conhece o{" "}
            <span style={{ color: "#5AE082" }}>Pará</span>.
          </h1>
          <p className="fade-2" style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)", color: "rgba(255,255,255,0.78)", fontWeight: 400, maxWidth: 560, lineHeight: 1.75, marginTop: 20 }}>
            A IL Ambiental cuida de todo o processo de licenciamento, gestão e documentação ambiental para que você opere com segurança jurídica e eficiência, sem burocracia desnecessária.
          </p>
          <div className="fade-3" style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
            <Link href="/contato" className="btn-primary">Fale com um especialista</Link>
            <Link href="/servicos" className="btn-outline">Conheça nossos serviços</Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "20px 0" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", padding: "0 24px" }}>
          {[
            { stat: "+30", label: "Empresas atendidas" },
            { stat: "100%", label: "Atuação no Pará" },
            { stat: "5", label: "Órgãos: SEMAS-PA, IBAMA, SEMMA, SESPA, INCRA" },
            { stat: "24h", label: "Tempo de resposta" },
          ].map((item, i, arr) => (
            <div key={i} style={{ textAlign: "center", borderRight: i < arr.length - 1 ? "1px solid #E5E7EB" : "none", padding: "8px 12px" }}>
              <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "#2D6A4F", lineHeight: 1 }}>{item.stat}</div>
              <div style={{ fontSize: "0.72rem", color: "#6B7280", marginTop: 6, lineHeight: 1.3 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES OVERVIEW */}
      <section style={{ padding: "80px 24px", background: "#F8F5F0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#C5714B", fontWeight: 600, display: "block", marginBottom: 8 }}>Expertise Técnica</span>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#1A1A1A", margin: 0 }}>
              Soluções Integradas em <span style={{ color: "#1A4D2E" }}>Meio Ambiente</span>
            </h2>
            <p style={{ color: "#555", fontSize: "1.05rem", maxWidth: 580, margin: "12px auto 0", lineHeight: 1.7 }}>
              Atuamos em todas as fases do empreendimento, da concepção à operação.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { icon: "📄", title: "Licenciamento Ambiental", desc: "Gestão completa de processos junto à SEMAS-PA, IBAMA e SEMMA, garantindo agilidade na emissão de LP, LI e LO." },
              { icon: "📊", title: "Gestão Ambiental", desc: "Implementação e operação de Sistemas de Gestão Ambiental (SGA) robustos para indústrias e grandes empreendimentos." },
              { icon: "🌿", title: "Consultoria Estratégica", desc: "Assessoria executiva para mitigação de riscos socioambientais e adequação a práticas ESG e padrões internacionais." },
              { icon: "🔬", title: "Monitoramento Ambiental", desc: "Programas de monitoramento de fauna, flora, qualidade da água e do ar com emissão de relatórios técnicos periódicos." },
              { icon: "📋", title: "Estudos de Impacto", desc: "Elaboração de EIA/RIMA, PCA, RCA, PRAD e demais estudos para viabilidade de projetos complexos." },
              { icon: "✅", title: "Conformidade Regulatória", desc: "Auditorias preventivas e acompanhamento contínuo de condicionantes para manutenção da regularidade das operações." },
            ].map((svc, i) => (
              <div key={i} className="hover-card" style={{ background: "#fff", padding: 28, borderRadius: 4, borderTop: "4px solid transparent", boxShadow: "0 2px 8px rgba(0,0,0,0.05)", cursor: "default" }}
                onMouseOver={e => (e.currentTarget.style.borderTopColor = "#2E7D52")}
                onMouseOut={e => (e.currentTarget.style.borderTopColor = "transparent")}
              >
                <div style={{ fontSize: "2rem", marginBottom: 16 }}>{svc.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "#1A1A1A", marginBottom: 10 }}>{svc.title}</h3>
                <p style={{ color: "#555", lineHeight: 1.65, fontSize: "0.9rem", margin: 0 }}>{svc.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/servicos" className="btn-primary">Ver todos os serviços</Link>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 400px", background: "#1A4D2E", color: "#fff", padding: "72px clamp(24px, 5vw, 80px)", display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: 480 }}>
            <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#D4A853", fontWeight: 600, display: "block", marginBottom: 12 }}>Nossa História</span>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.15, margin: 0 }}>
              Autoridade Ambiental no Coração da Amazônia
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", lineHeight: 1.75, marginTop: 20, marginBottom: 24 }}>
              A IL Engenharia e Consultoria Ambiental nasceu com a missão de harmonizar o desenvolvimento industrial com a vasta biodiversidade da região amazônica.
            </p>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 28px 0" }}>
              Nossa equipe multidisciplinar traz o rigor técnico necessário para viabilizar projetos com segurança jurídica e responsabilidade socioambiental.
            </p>
            <Link href="/sobre" className="btn-gold">Conheça nossa história</Link>
          </div>
        </div>
        <div style={{ flex: "1 1 400px", background: "#fff", padding: "72px clamp(24px, 5vw, 80px)", display: "flex", alignItems: "center" }}>
          <div style={{ maxWidth: 480 }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.3rem", color: "#1A1A1A", borderBottom: "1px solid #E5E7EB", paddingBottom: 16, marginBottom: 28 }}>Nossos Diferenciais</h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { title: "Conhecimento Local Profundo", desc: "Expertise nas especificidades ecológicas e regulatórias dos biomas amazônicos." },
                { title: "Diálogo Técnico Institucional", desc: "Histórico de respeito e transparência junto aos órgãos fiscalizadores." },
                { title: "Gestão Integrada", desc: "Visão sistêmica que abrange desde o meio físico e biótico até o socioeconômico." },
                { title: "Foco em Resolução", desc: "Abordagem pragmática para destravamento de processos com embasamento técnico." },
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ color: "#2E7D52", fontSize: "1.2rem", marginTop: 1, flexShrink: 0 }}>✓</span>
                  <div>
                    <strong style={{ color: "#1A1A1A", display: "block", marginBottom: 2 }}>{item.title}</strong>
                    <span style={{ color: "#555", fontSize: "0.9rem", lineHeight: 1.5 }}>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#1A1A1A", margin: 0 }}>Clientes que atendemos</h2>
            <p style={{ color: "#555", fontSize: "1rem", marginTop: 10, lineHeight: 1.6 }}>Empresas que confiam na IL Ambiental para sua gestão e conformidade ambiental.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, maxWidth: 680, margin: "0 auto" }}>
            {[
              { initials: "TR", name: "Tropoc", desc: "Multinacional atuante no beneficiamento da pimenta-do-reino" },
              { initials: "FP", name: "Fruta Pronta", desc: "Empresa de Portel, Pará, produtora de açaí em polpa" },
            ].map((c, i) => (
              <div key={i} className="hover-card" style={{ background: "#F8F5F0", padding: "36px 28px", borderRadius: 4, border: "1px solid #eee", display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 52, height: 52, background: "#1A4D2E", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "'Comfortaa', cursive", fontWeight: 700, fontSize: "1rem", flexShrink: 0 }}>{c.initials}</div>
                <div>
                  <h4 style={{ fontWeight: 700, color: "#1A1A1A", fontSize: "1.1rem", marginBottom: 6 }}>{c.name}</h4>
                  <p style={{ color: "#555", fontSize: "0.875rem", lineHeight: 1.55, margin: 0 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: "#2E7D52", padding: "72px 24px", textAlign: "center" }}>
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 3rem)", color: "#fff", margin: 0 }}>
          Pronto para regularizar seu empreendimento?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.1rem", maxWidth: 600, margin: "16px auto 32px", lineHeight: 1.7 }}>
          Fale com nossos especialistas e descubra como podemos garantir a segurança jurídica e ambiental do seu projeto.
        </p>
        <Link href="/contato" className="btn-gold" style={{ fontSize: "1.05rem", padding: "16px 40px" }}>
          Agendar Consulta Técnica →
        </Link>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
