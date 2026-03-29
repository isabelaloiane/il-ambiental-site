import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Servicos() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section style={{ padding: "100px 24px 60px", textAlign: "center", background: "#F5F0E8" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h1 className="fade-1" style={{ fontWeight: 800, fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", lineHeight: 1.12, color: "#2C1A0E", margin: 0 }}>
            Sua conformidade ambiental no Pará, do início ao fim.
          </h1>
          <p className="fade-2" style={{ fontSize: "1.05rem", color: "#8C7B6B", maxWidth: 560, margin: "18px auto 0", lineHeight: 1.7 }}>
            Do licenciamento à gestão de resíduos e ESG: a IL assume a burocracia ambiental para que você foque no seu negócio, com segurança jurídica e sem imprevistos.
          </p>
          <div className="fade-3" style={{ marginTop: 32 }}>
            <Link href="/contato" className="btn-primary">Solicite uma avaliação gratuita</Link>
            <p style={{ fontSize: "0.78rem", color: "#8C7B6B", marginTop: 10 }}>Sem compromisso. Resposta em até 24h.</p>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: "#fff", borderTop: "1px solid rgba(181,137,94,0.25)", borderBottom: "1px solid rgba(181,137,94,0.25)", padding: "16px 0", overflowX: "auto" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: 12, padding: "0 24px" }}>
          {[
            "SEMAS-PA credenciada",
            "IBAMA certificada",
            "SEMMA Municipal",
            "SESPA",
            "INCRA",
            "Atuação em todo o Pará",
            "+30 empresas atendidas",
            "Resposta em 24h"
          ].map((label, i) => (
            <span key={i} style={{ fontSize: "0.82rem", fontWeight: 500, color: "#8C7B6B", display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
              <span style={{ color: "#B5895E", fontSize: "0.7rem" }}>●</span> {label}
            </span>
          ))}
        </div>
      </div>

      {/* SERVICE CARDS */}
      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#B5895E", fontWeight: 600, display: "block", marginBottom: 8 }}>Nossos Serviços</span>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#2C1A0E", margin: 0 }}>O que a IL faz pela sua empresa</h2>
            <p style={{ color: "#8C7B6B", maxWidth: 520, margin: "12px auto 0", lineHeight: 1.65 }}>Cada serviço foi desenhado para eliminar riscos, reduzir burocracia e garantir que sua empresa opere em conformidade.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              {
                title: "Licenciamento Ambiental",
                desc: "Obtenha sua licença com agilidade e sem erros. Cuidamos de cada etapa junto à SEMAS-PA e ao IBAMA para que sua empresa opere dentro da lei, da licença prévia até a regularização.",
                items: ["Dispensa de Licenciamento (DLA)", "Licença Prévia (LP)", "Licença de Instalação (LI)", "Licença de Operação (LO)", "Licença de Regularização Ambiental (LAR)"],
                highlight: false
              },
              {
                title: "Estudos e Relatórios Técnicos",
                desc: "Documentação técnica rigorosa para atender condicionantes, auditorias e exigências dos órgãos fiscalizadores, elaborada por especialistas.",
                items: ["Relatório de Informação Ambiental Anual (RIAA)", "PDITS: Plano de Turismo Sustentável", "Relatório de Controle Ambiental (RCA)", "Relatório Ambiental Preliminar (RAP)", "Condicionantes Ambientais", "Certificação Ambiental"],
                highlight: false
              },
              {
                title: "Consultoria e Gestão Ambiental",
                desc: "Estruture a gestão ambiental da sua empresa com ESG, planos de resíduos, monitoramento de áreas e regularização fundiária, do planejamento à execução.",
                items: ["Implantação de práticas de ESG", "Plano de Gerenciamento de Resíduos Sólidos (PGRS)", "Cadastro Ambiental Rural (CAR) e regularização fundiária", "Monitoramento e recuperação de áreas degradadas"],
                highlight: true
              },
            ].map((svc, i) => (
              <div key={i} className="hover-card" style={{
                background: svc.highlight ? "rgba(115,65,32,0.04)" : "#fff",
                border: `1px solid ${svc.highlight ? "#734120" : "rgba(181,137,94,0.25)"}`,
                borderLeft: svc.highlight ? "3px solid #734120" : "1px solid rgba(181,137,94,0.25)",
                borderRadius: 12,
                padding: 32,
                boxShadow: "0 2px 12px rgba(69,40,22,0.07)"
              }}>
                <h3 style={{ fontWeight: 700, fontSize: "1.2rem", color: "#2C1A0E", marginBottom: 12, marginTop: 0 }}>{svc.title}</h3>
                <p style={{ color: "#8C7B6B", lineHeight: 1.65, fontSize: "0.9rem", marginBottom: 14, marginTop: 0 }}>{svc.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                  {svc.items.map((item, j) => (
                    <li key={j} style={{ fontSize: "0.85rem", color: "#2C1A0E", display: "flex", gap: 8 }}>
                      <span style={{ color: "#B5895E" }}>•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* URGENCY SECTION */}
      <section style={{ background: "#452816", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 60, alignItems: "center" }}>
          <div>
            <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#B5895E", fontWeight: 600, display: "block", marginBottom: 12 }}>Por que isso importa</span>
            <h2 style={{ color: "#DFC49F", fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.15, margin: 0 }}>
              Empresa sem licença ambiental é empresa em risco.
            </h2>
            <p style={{ color: "rgba(223,196,159,0.72)", fontSize: "1rem", lineHeight: 1.75, maxWidth: 480, marginTop: 16, marginBottom: 0 }}>
              Empresas sem licença ambiental estão sujeitas a multas, embargo e paralisação das atividades. Não espere a notificação chegar. Regularize agora.
            </p>
            <Link href="/contato" className="btn-light" style={{ marginTop: 28, display: "inline-flex" }}>
              Quero regularizar minha empresa
            </Link>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 18 }}>
              {["⚠ Multas de até R$ 50 milhões", "🔒 Paralisação imediata", "⚖ Processo criminal para gestores"].map((r, i) => (
                <span key={i} style={{ fontSize: "0.8rem", color: "rgba(223,196,159,0.72)", display: "flex", alignItems: "center", gap: 4 }}>{r}</span>
              ))}
            </div>
          </div>
          <div style={{ background: "rgba(26,15,8,0.5)", border: "1px solid rgba(223,196,159,0.15)", borderRadius: 12, padding: "28px 32px", maxWidth: 400, margin: "0 auto", width: "100%" }}>
            <div style={{ background: "rgba(181,137,94,0.2)", borderBottom: "1px solid rgba(181,137,94,0.25)", padding: "10px 0", marginBottom: 20 }}>
              <span style={{ color: "#DFC49F", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em" }}>⚠ NOTIFICAÇÃO AMBIENTAL</span>
            </div>
            {[
              { key: "Órgão:", val: "SEMAS-PA", valColor: "#DFC49F" },
              { key: "Situação:", val: "Licença vencida", valColor: "#B5895E" },
              { key: "Prazo para regularização:", val: "30 dias", valColor: "#DFC49F" },
              { key: "Penalidade prevista:", val: "R$ 50.000+", valColor: "#B5895E" },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid rgba(223,196,159,0.12)" }}>
                <span style={{ color: "rgba(223,196,159,0.5)", fontSize: "0.8rem" }}>{row.key}</span>
                <span style={{ color: row.valColor, fontSize: "0.8rem", fontWeight: 600 }}>{row.val}</span>
              </div>
            ))}
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 20 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#B5895E" }} />
              <span style={{ color: "#B5895E", fontSize: "0.75rem", fontWeight: 700 }}>PENDENTE</span>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: "#F5F0E8", padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#2C1A0E", margin: 0 }}>Pronto para operar sem preocupações?</h2>
        <p style={{ color: "#8C7B6B", maxWidth: 500, margin: "14px auto 0", lineHeight: 1.6 }}>
          Fale com a nossa equipe e descubra como a IL pode assumir a gestão ambiental da sua empresa, do licenciamento à regularização.
        </p>
        <Link href="/contato" className="btn-primary" style={{ marginTop: 28, display: "inline-flex" }}>
          Solicite uma avaliação gratuita
        </Link>
        <p style={{ fontSize: "0.78rem", color: "#8C7B6B", marginTop: 12 }}>Sem compromisso. Nossa equipe responde em até 24 horas.</p>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
