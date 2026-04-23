import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { StatCounter } from "@/components/StatCounter";

export function Home() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section
        className="hero-animated-bg"
        style={{ minHeight: "60vh", padding: "90px 24px 48px", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}
      >
        <div style={{ position: "absolute", inset: 0, background: "rgba(26,15,8,0.55)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 720, marginLeft: "clamp(24px, 8vw, 120px)" }}>
          <h1 className="fade-1" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "clamp(2.4rem, 5.5vw, 4rem)", lineHeight: 1.1, color: "#fff", margin: 0 }}>
            Sem licença ambiental, sua operação no{" "}
            <span style={{ color: "#DFC49F" }}>Pará</span> pode parar amanhã.
          </h1>
          <p className="fade-2" style={{ fontSize: "clamp(1rem, 1.8vw, 1.15rem)", color: "rgba(223,196,159,0.8)", fontWeight: 400, maxWidth: 560, lineHeight: 1.75, marginTop: 20 }}>
            A IL Ambiental conduz seu licenciamento junto à SEMAS-PA, IBAMA, SEMMA e demais órgãos ambientais competentes, do início à emissão da licença, para que sua empresa opere legalmente, sem atrasos e sem surpresas.
          </p>
          <div className="fade-3 hero-cta-group" style={{ marginTop: 36 }}>
            <Link href="/contato" className="btn-primary">Fale com um especialista</Link>
            <Link href="/servicos" className="btn-outline">Ver como funciona</Link>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: "#fff", borderBottom: "1px solid rgba(181,137,94,0.25)", padding: "20px 0" }}>
        <div className="trust-bar-grid">
          {[
            { value: "+30", label: "empresas regularizadas" },
            { value: "100%", label: "focada no Pará" },
            { value: "5", label: "órgãos ambientais" },
            { value: "24h", label: "tempo de resposta" },
          ].map((item, i, arr) => (
            <div key={i} style={{ textAlign: "center", borderRight: i < arr.length - 1 ? "1px solid rgba(181,137,94,0.25)" : "none", padding: "8px 12px" }}>
              <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "#734120", lineHeight: 1 }}>{item.value}</div>
              <div style={{ fontSize: "0.72rem", color: "#8C7B6B", marginTop: 6, lineHeight: 1.3 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES OVERVIEW */}
      <section style={{ padding: "80px 24px", background: "#F5F0E8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-caption" data-aos="fade-up">O QUE FAZEMOS</span>
            <h2 data-aos="fade-up" style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#2C1A0E", margin: 0 }}>
              Do licenciamento à gestão: tudo que sua empresa precisa para <span style={{ color: "#734120" }}>operar legal</span>
            </h2>
            <span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 18px" }} />
            <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#8C7B6B", fontSize: "1.05rem", maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
              Cada serviço foi desenhado para eliminar riscos regulatórios e acelerar sua conformidade.
            </p>
          </div>
          <div className="grid-6-services">
            {[
              { icon: "📄", title: "Licenciamento Ambiental", desc: "Obtemos LP, LI e LO junto à SEMAS-PA, IBAMA e demais órgãos ambientais com agilidade. Você foca no negócio, nós resolvemos a burocracia." },
              { icon: "📊", title: "Gestão Ambiental", desc: "Implantamos e operamos seu SGA para que sua empresa atenda condicionantes sem improvisos e sem multas." },
              { icon: "🌿", title: "Consultoria Estratégica", desc: "Assessoria para adequação a ESG e padrões internacionais. Ideal para empresas que buscam investidores ou certificações." },
              { icon: "🔬", title: "Monitoramento Ambiental", desc: "Monitoramento de fauna, flora, água e ar com relatórios técnicos aceitos pelos órgãos. Periodicidade garantida." },
              { icon: "📋", title: "Estudos de Impacto", desc: "EIA/RIMA, PCA, RCA e PRAD elaborados por especialistas. Documentação que resiste a qualquer auditoria." },
              { icon: "✅", title: "Conformidade Regulatória", desc: "Auditorias preventivas para manter suas licenças em dia e evitar notificações surpresa dos órgãos fiscalizadores." },
            ].map((svc, i) => (
              <div
                key={i}
                className="hover-card"
                data-aos="fade-up"
                data-aos-delay={i * 100}
                style={{ background: "#fff", padding: 28, borderRadius: 12, borderTop: "4px solid transparent", boxShadow: "0 2px 8px rgba(69,40,22,0.07)", cursor: "default", border: "1px solid rgba(181,137,94,0.18)", borderTopWidth: 4 }}
                onMouseOver={e => { (e.currentTarget.style.borderTopColor = "#734120"); }}
                onMouseOut={e => { (e.currentTarget.style.borderTopColor = "transparent"); }}
              >
                <div style={{ fontSize: "2rem", marginBottom: 16 }}>{svc.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "#2C1A0E", marginBottom: 10 }}>{svc.title}</h3>
                <p style={{ color: "#8C7B6B", lineHeight: 1.65, fontSize: "0.9rem", margin: 0 }}>{svc.desc}</p>
              </div>
            ))}
          </div>
          <div data-aos="fade-up" data-aos-delay="100" style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/servicos" className="btn-primary">Ver detalhes de cada serviço →</Link>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="about-strip" style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 400px", background: "#452816", color: "#DFC49F", padding: "72px clamp(24px, 5vw, 80px)", display: "flex", alignItems: "center" }}>
          <div data-aos="fade-right" style={{ maxWidth: 480 }}>
            <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#B5895E", fontWeight: 600, display: "block", marginBottom: 12 }}>Nossa História</span>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.15, margin: 0, color: "#DFC49F" }}>
              Porque quem conhece o contexto regulatório local resolve mais rápido, sem retrabalho.
            </h2>
            <p style={{ color: "rgba(223,196,159,0.78)", fontSize: "1.05rem", lineHeight: 1.75, marginTop: 20, marginBottom: 24 }}>
              A IL Engenharia e Consultoria Ambiental nasceu com a missão de harmonizar o desenvolvimento industrial com a vasta biodiversidade da região amazônica.
            </p>
            <p style={{ color: "rgba(223,196,159,0.78)", fontSize: "1rem", lineHeight: 1.75, margin: "0 0 28px 0" }}>
              Nossa equipe multidisciplinar traz o rigor técnico necessário para viabilizar projetos com segurança jurídica e responsabilidade socioambiental.
            </p>
            <Link href="/sobre" className="btn-light">Conheça nossa história</Link>
          </div>
        </div>
        <div style={{ flex: "1 1 400px", background: "#fff", padding: "72px clamp(24px, 5vw, 80px)", display: "flex", alignItems: "center" }}>
          <div data-aos="fade-left" style={{ maxWidth: 480 }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.3rem", color: "#2C1A0E", borderBottom: "1px solid rgba(181,137,94,0.25)", paddingBottom: 16, marginBottom: 28 }}>Por que empresas no Pará escolhem a IL</h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { title: "Conhecimento Local Profundo", desc: "Conhecemos pessoalmente os processos da SEMAS-PA, IBAMA, SEMMA e demais órgãos competentes. Isso elimina idas e vindas que atrasam seu licenciamento." },
                { title: "Relacionamento Direto com os Órgãos", desc: "Dialogamos tecnicamente com fiscalizadores e analistas. Seu processo tramita com transparência e sem ruído." },
                { title: "Gestão Integrada", desc: "Enxergamos seu empreendimento como um sistema: ambiental, jurídico, social e econômico. Nada fica de fora." },
                { title: "Foco em Resultado", desc: "Não vendemos relatórios. Entregamos licenças emitidas, condicionantes cumpridas e operações regularizadas." },
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ color: "#734120", fontSize: "1.2rem", marginTop: 1, flexShrink: 0 }}>✓</span>
                  <div>
                    <strong style={{ color: "#2C1A0E", display: "block", marginBottom: 2 }}>{item.title}</strong>
                    <span style={{ color: "#8C7B6B", fontSize: "0.9rem", lineHeight: 1.5 }}>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section style={{ background: "#452816", padding: "80px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-caption" data-aos="fade-up" style={{ color: "#B5895E" }}>Nosso Impacto</span>
            <h2 data-aos="fade-up" style={{ fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#DFC49F", margin: 0 }}>
              Números que comprovam nosso resultado
            </h2>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 40 }}
          >
            <StatCounter target={127} label="Projetos concluídos" />
            <StatCounter target={30} prefix="+" label="Empresas regularizadas" />
            <StatCounter target={40} prefix="+" label="Municípios atendidos" />
            <StatCounter target={5} label="Órgãos ambientais" />
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 data-aos="fade-up" style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#2C1A0E", margin: 0 }}>Empresas que confiam na IL</h2>
            <span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 18px" }} />
            <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#8C7B6B", fontSize: "1rem", lineHeight: 1.6, marginTop: 0 }}>De multinacionais a empresas locais, regularizamos operações de todos os portes no Pará.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, maxWidth: 680, margin: "0 auto" }}>
            {[
              { initials: "TR", name: "Tropoc", desc: "Multinacional atuante no beneficiamento da pimenta-do-reino" },
              { initials: "FP", name: "Fruta Pronta", desc: "Empresa de Portel, Pará, produtora de açaí em polpa" },
            ].map((c, i) => (
              <div key={i} className="hover-card" data-aos="fade-up" data-aos-delay={i * 100} style={{ background: "#F5F0E8", padding: "36px 28px", borderRadius: 12, border: "1px solid rgba(181,137,94,0.25)", display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ width: 52, height: 52, background: "#734120", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#DFC49F", fontFamily: "'Comfortaa', cursive", fontWeight: 700, fontSize: "1rem", flexShrink: 0 }}>{c.initials}</div>
                <div>
                  <h4 style={{ fontWeight: 700, color: "#2C1A0E", fontSize: "1.1rem", marginBottom: 6 }}>{c.name}</h4>
                  <p style={{ color: "#8C7B6B", fontSize: "0.875rem", lineHeight: 1.55, margin: 0 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-section" style={{ background: "#452816", padding: "72px 24px", textAlign: "center" }}>
        <h2 data-aos="fade-up" style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 3rem)", color: "#DFC49F", margin: 0 }}>
          Sua empresa precisa de licença ambiental no Pará?
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" style={{ color: "rgba(223,196,159,0.78)", fontSize: "1.1rem", maxWidth: 600, margin: "16px auto 32px", lineHeight: 1.7 }}>
          Conte sua situação e receba uma orientação técnica inicial sem compromisso. Respondemos em até 24 horas.
        </p>
        <div data-aos="fade-up" data-aos-delay="200">
          <Link href="/contato" className="btn-light" style={{ fontSize: "1.05rem", padding: "16px 40px" }}>
            Solicitar orientação gratuita →
          </Link>
          <p style={{ fontSize: "0.78rem", color: "rgba(223,196,159,0.4)", marginTop: 14 }}>Sem compromisso. Resposta em até 24 horas.</p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
