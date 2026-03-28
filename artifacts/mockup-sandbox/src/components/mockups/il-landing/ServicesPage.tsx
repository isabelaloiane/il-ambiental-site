import React from "react";
import { 
  Landmark, 
  ClipboardList, 
  MapPin, 
  Users, 
  Zap, 
  FileText, 
  BarChart3, 
  Leaf, 
  AlertTriangle, 
  Lock, 
  FileWarning,
  Building2
} from "lucide-react";

export function ServicesPage() {
  return (
    <div className="font-['Poppins'] w-full min-h-screen bg-white">
      <style>{`
        @keyframes fadeUpIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .srv-fade-1 { animation: fadeUpIn 0.6s ease-out both; }
        .srv-fade-2 { animation: fadeUpIn 0.6s ease-out 0.15s both; }
        .srv-fade-3 { animation: fadeUpIn 0.6s ease-out 0.3s both; }

        .srv-card-fade-1 { animation: fadeUpIn 0.6s ease-out 0.1s both; }
        .srv-card-fade-2 { animation: fadeUpIn 0.6s ease-out 0.25s both; }
        .srv-card-fade-3 { animation: fadeUpIn 0.6s ease-out 0.4s both; }

        .srv-cta-btn {
          background-color: #2D6A4F;
          color: white;
          padding: 15px 40px;
          border-radius: 4px;
          font-weight: 700;
          transition: filter 200ms ease, transform 200ms ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
        }
        .srv-cta-btn:hover {
          filter: brightness(1.1);
          transform: scale(1.02);
        }

        .srv-card {
          background: white;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          transition: box-shadow 250ms ease, transform 250ms ease;
          height: 100%;
        }
        .srv-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          transform: translateY(-4px);
        }

        .srv-card-special {
          background: rgba(45, 106, 79, 0.04);
          border-left: 3px solid #2D6A4F;
        }
      `}</style>

      {/* SECTION 1 — Hero */}
      <section className="bg-white flex flex-col items-center text-center" style={{ padding: "100px 24px 60px" }}>
        <div style={{ maxWidth: "700px", width: "100%" }}>
          <h1 
            className="srv-fade-1 font-['Poppins']" 
            style={{ 
              fontWeight: 800, 
              fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)", 
              lineHeight: 1.12, 
              color: "#1A1A1A",
              margin: 0
            }}
          >
            Sua conformidade ambiental no Pará, do início ao fim.
          </h1>
          <p 
            className="srv-fade-2"
            style={{ 
              fontSize: "1.1rem", 
              color: "#6B7280", 
              maxWidth: "580px", 
              margin: "18px auto 0", 
              lineHeight: 1.7 
            }}
          >
            Do licenciamento à gestão de resíduos e ESG: a IL assume a burocracia ambiental para que você foque no seu negócio, com segurança jurídica e sem imprevistos.
          </p>
          <div className="srv-fade-3" style={{ marginTop: "32px" }}>
            <button className="srv-cta-btn">
              Solicite uma avaliação gratuita
            </button>
            <p style={{ fontSize: "0.8rem", color: "#6B7280", marginTop: "10px", textAlign: "center", margin: "10px 0 0 0" }}>
              Sem compromisso. Resposta em até 24h.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Trust Bar */}
      <section style={{ width: "100%", background: "#F7F8F7", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB", padding: "20px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", padding: "0 24px" }}>
          {[
            { icon: Landmark, label: "SEMAS-PA credenciada" },
            { icon: ClipboardList, label: "IBAMA certificada" },
            { icon: Building2, label: "SEMMA Municipal" },
            { icon: Building2, label: "SESPA" },
            { icon: Building2, label: "INCRA" },
            { icon: MapPin, label: "Atuação em todo o Pará" },
            { icon: Users, label: "+30 empresas atendidas" },
            { icon: Zap, label: "Resposta em 24h" }
          ].map((item, i, arr) => (
            <div 
              key={i} 
              style={{ 
                flex: "1 1 auto", 
                display: "flex", 
                flexDirection: "row", 
                alignItems: "center", 
                justifyContent: "center",
                gap: "8px", 
                padding: "0 10px",
                borderRight: i !== arr.length - 1 ? "1px solid #E5E7EB" : "none",
                minWidth: "max-content"
              }}
            >
              <item.icon size={16} color="#2D6A4F" />
              <span style={{ fontSize: "0.82rem", fontWeight: 500, color: "#6B7280" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — Service Cards */}
      <section style={{ background: "white", padding: "80px 24px 60px" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#2D6A4F", fontWeight: 600 }}>
            Nossos Serviços
          </div>
          <h2 
            className="font-['Poppins']"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#1A1A1A", margin: "12px 0 0 0" }}
          >
            O que a IL faz pela sua empresa
          </h2>
          <p style={{ fontSize: "1rem", color: "#6B7280", maxWidth: "560px", margin: "12px auto 0", lineHeight: 1.6 }}>
            Cada serviço foi desenhado para eliminar riscos, reduzir burocracia e garantir que sua empresa opere em conformidade.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px", maxWidth: "1040px", margin: "48px auto 0" }}>
          
          {/* Card 1 */}
          <div className="srv-card srv-card-fade-1">
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(45, 106, 79, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FileText size={20} color="#2D6A4F" />
            </div>
            <h3 className="font-['Poppins']" style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1A1A1A", marginTop: "16px", marginBottom: 0 }}>
              Licenciamento Ambiental
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.65, marginTop: "10px", marginBottom: 0 }}>
              Obtenha sua licença com agilidade e sem erros. Cuidamos de cada etapa junto à SEMAS-PA e ao IBAMA para que sua empresa opere dentro da lei, da licença prévia até a regularização.
            </p>
            <ul style={{ listStyleType: "none", padding: 0, marginTop: "12px", marginBottom: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
              {[
                "Dispensa de Licenciamento (DLA)",
                "Licença Prévia (LP)",
                "Licença de Instalação (LI)",
                "Licença de Operação (LO)",
                "Licença de Regularização Ambiental (LAR)"
              ].map((li, i) => (
                <li key={i} style={{ fontSize: "0.85rem", color: "#1A1A1A", lineHeight: 1.7, display: "flex", gap: "6px" }}>
                  <span style={{ color: "#2D6A4F" }}>•</span> {li}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="srv-card srv-card-fade-2">
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(45, 106, 79, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BarChart3 size={20} color="#2D6A4F" />
            </div>
            <h3 className="font-['Poppins']" style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1A1A1A", marginTop: "16px", marginBottom: 0 }}>
              Estudos e Relatórios Técnicos
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.65, marginTop: "10px", marginBottom: 0 }}>
              Documentação técnica rigorosa para atender condicionantes, auditorias e exigências dos órgãos fiscalizadores, elaborada por especialistas que conhecem cada detalhe da legislação ambiental do estado.
            </p>
            <ul style={{ listStyleType: "none", padding: 0, marginTop: "12px", marginBottom: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
              {[
                "Relatório de Informação Ambiental Anual (RIAA)",
                "PDITS: Plano de Turismo Sustentável",
                "Relatório de Controle Ambiental (RCA)",
                "Relatório Ambiental Preliminar (RAP)",
                "Relatório de Caracterização do Empreendimento (RCE)",
                "Plano de Gestão de Riscos (PGR)",
                "Condicionantes Ambientais",
                "Certificação Ambiental"
              ].map((li, i) => (
                <li key={i} style={{ fontSize: "0.85rem", color: "#1A1A1A", lineHeight: 1.7, display: "flex", gap: "6px" }}>
                  <span style={{ color: "#2D6A4F" }}>•</span> {li}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 */}
          <div className="srv-card srv-card-special srv-card-fade-3">
            <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(45, 106, 79, 0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Leaf size={20} color="#2D6A4F" />
            </div>
            <h3 className="font-['Poppins']" style={{ fontSize: "1.25rem", fontWeight: 700, color: "#1A1A1A", marginTop: "16px", marginBottom: 0 }}>
              Consultoria e Gestão Ambiental
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.65, marginTop: "10px", marginBottom: 0 }}>
              Estruture a gestão ambiental da sua empresa com ESG, planos de resíduos, monitoramento de áreas e regularização fundiária, do planejamento à execução.
            </p>
            <ul style={{ listStyleType: "none", padding: 0, marginTop: "12px", marginBottom: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
              {[
                "Implantação de práticas de ESG",
                "Plano de Gerenciamento de Resíduos Sólidos (PGRS)",
                "Cadastro Ambiental Rural (CAR) e regularização fundiária",
                "Monitoramento e recuperação de áreas degradadas"
              ].map((li, i) => (
                <li key={i} style={{ fontSize: "0.85rem", color: "#1A1A1A", lineHeight: 1.7, display: "flex", gap: "6px" }}>
                  <span style={{ color: "#2D6A4F" }}>•</span> {li}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* SECTION 4 — Urgency / Risk Section (DARK) */}
      <section style={{ width: "100%", background: "#0d1f14", padding: "100px 40px" }}>
        <div style={{ maxWidth: "1040px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "60px", alignItems: "center" }}>
          
          {/* Left Text */}
          <div>
            <div style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#4CAF82", fontWeight: 600 }}>
              Por que isso importa
            </div>
            <h2 
              className="font-['Poppins']"
              style={{ color: "white", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, lineHeight: 1.15, marginTop: "12px", marginBottom: 0 }}
            >
              Empresa sem licença ambiental é empresa em risco.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "480px", marginTop: "16px", marginBottom: 0 }}>
              Empresas sem licença ambiental estão sujeitas a multas, embargo e paralisação das atividades. Não espere a notificação chegar. Regularize agora.
            </p>
            <button className="srv-cta-btn" style={{ marginTop: "32px" }}>
              Quero regularizar minha empresa
            </button>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}>
                <AlertTriangle size={14} color="#EF4444" /> Multas de até R$ 50 milhões
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}>
                <Lock size={14} color="#F59E0B" /> Paralisação imediata das obras
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}>
                <FileWarning size={14} color="#EF4444" /> Processo criminal para gestores
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div style={{ background: "#0a1a0d", border: "1px solid #1E3A2A", borderRadius: "8px", padding: "28px 32px", fontFamily: "monospace", width: "100%", maxWidth: "400px", margin: "0 auto" }}>
            <div style={{ background: "rgba(220, 38, 38, 0.2)", borderBottom: "1px solid rgba(220, 38, 38, 0.3)", padding: "10px 16px", margin: "-28px -32px 20px -32px", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
              <span style={{ color: "#EF4444", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em" }}>
                ⚠ NOTIFICAÇÃO AMBIENTAL
              </span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #1E3A2A" }}>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>Órgão:</span>
              <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.8rem", fontWeight: 600 }}>SEMAS-PA</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #1E3A2A" }}>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>Situação:</span>
              <span style={{ color: "#EF4444", fontSize: "0.8rem", fontWeight: 600 }}>Licença vencida</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #1E3A2A" }}>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>Prazo para regularização:</span>
              <span style={{ color: "#F59E0B", fontSize: "0.8rem", fontWeight: 600 }}>30 dias</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #1E3A2A" }}>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>Penalidade prevista:</span>
              <span style={{ color: "#EF4444", fontSize: "0.8rem", fontWeight: 600 }}>R$ 50.000+</span>
            </div>

            <div style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "24px" }}>
              <div className="animate-pulse" style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#EF4444" }}></div>
              <span style={{ color: "#EF4444", fontSize: "0.75rem", fontWeight: 700 }}>PENDENTE</span>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 5 — Final CTA */}
      <section style={{ background: "#F7F8F7", padding: "100px 24px", textAlign: "center" }}>
        <h2 
          className="font-['Poppins']"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#1A1A1A", margin: 0 }}
        >
          Pronto para operar sem preocupações?
        </h2>
        <p style={{ fontSize: "1rem", color: "#6B7280", maxWidth: "500px", margin: "16px auto 0", lineHeight: 1.6 }}>
          Fale com a nossa equipe e descubra como a IL pode assumir a gestão ambiental da sua empresa, do licenciamento à regularização.
        </p>
        <button className="srv-cta-btn" style={{ marginTop: "28px" }}>
          Solicite uma avaliação gratuita
        </button>
        <p style={{ fontSize: "0.8rem", color: "#6B7280", marginTop: "12px", margin: "12px 0 0 0" }}>
          Sem compromisso. Nossa equipe responde em até 24 horas.
        </p>
      </section>

    </div>
  );
}
