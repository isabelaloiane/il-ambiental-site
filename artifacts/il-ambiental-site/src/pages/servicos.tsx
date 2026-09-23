import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const WA_NUMBER = "5591992723570";
const wa = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const WA_AGUA = wa("Olá! Vim pelo site e preciso de ajuda com outorga ou uso de água da minha empresa.");
const WA_LICENCA = wa("Olá! Vim pelo site e preciso de ajuda com licença de operação ou renovação.");
const WA_RELATORIOS = wa("Olá! Vim pelo site e preciso de ajuda com relatórios ambientais, RIAA ou PGRS.");
const WA_PGRS = wa("Olá! Vim pelo site e preciso de ajuda com relatórios ambientais, RIAA ou PGRS.");
const WA_NOTIFICACAO = wa("Olá! Vim pelo site e recebi uma notificação ou exigência de órgão ambiental.");
const WA_VERTICE = wa("Olá, Isabela! Vim pelo site e gostaria de solicitar o Diagnóstico Vértice para a minha empresa.");

export function Servicos() {
  useEffect(() => {
    document.title = "Outorga, Licença de Operação, PGRS e RIAA | IL Ambiental";
    return () => { document.title = "IL Ambiental | Engenharia e consultoria ambiental em Belém"; };
  }, []);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh" }}>
      <Navbar />

      {/* SV-01 TOPO */}
      <section className="page-hero" style={{ textAlign: "center", background: "linear-gradient(135deg, rgb(238, 231, 220) 0%, rgb(245, 240, 232) 45%, rgb(240, 234, 225) 100%)", borderBottom: "1px solid rgba(181, 137, 94, 0.18)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span className="section-caption">Nossos Serviços</span>
          <h1
            style={{
              fontFamily: "'Comfortaa', cursive",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              lineHeight: 1.15,
              color: "#2C1A0E",
              margin: 0,
            }}
          >
            Serviços ambientais para empresas da Região Metropolitana de Belém.
          </h1>
          <p className="fade-2" style={{ fontSize: "1.05rem", color: "#6B5443", maxWidth: 560, margin: "18px auto 0", lineHeight: 1.75 }}>
            Recursos hídricos, licenciamento, relatórios e planos ambientais conduzidos pela responsável técnica, do levantamento ao protocolo no órgão.
          </p>
          <div className="fade-3 hero-cta-group" style={{ marginTop: 32, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contato?assunto=vertice" className="btn-primary">Solicitar Diagnóstico Vértice</Link>
            <a href={WA_VERTICE} target="_blank" rel="noopener noreferrer" className="btn-outline">Falar pelo WhatsApp</a>
          </div>
          <p style={{ fontSize: "0.78rem", color: "#8C7B6B", marginTop: 12, textAlign: "center" }}>
            Não sabe qual serviço sua empresa precisa? O Diagnóstico Vértice identifica isso, sem custo.
          </p>
        </div>
      </section>

      {/* SV-02 FAIXA DE FATOS */}
      <div style={{ background: "#fff", borderTop: "1px solid rgba(181,137,94,0.25)", borderBottom: "1px solid rgba(181,137,94,0.25)", padding: "16px 0", overflowX: "auto" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-around", gap: 12, padding: "0 24px" }}>
          {[
            "SEMAS-PA e secretarias municipais",
            "Belém e região metropolitana até Castanhal",
            "Retorno em até 1 dia útil",
          ].map((label, i) => (
            <span key={i} data-aos="fade-in" data-aos-delay={i * 60} style={{ fontSize: "0.82rem", fontWeight: 500, color: "#6B5443", display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
              <span style={{ color: "#B5895E", fontSize: "0.7rem" }}>●</span> {label}
            </span>
          ))}
        </div>
      </div>

      {/* SV-03 BLOCOS DE SERVIÇO */}
      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>

          {/* Card destaque: Programa Sentinela */}
          <div
            data-aos="fade-up"
            style={{
              background: "#452816",
              borderRadius: 14,
              padding: "36px 40px",
              marginBottom: 48,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 32,
              alignItems: "center",
            }}
          >
            <div>
              <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#B5895E", fontWeight: 600, display: "block", marginBottom: 10 }}>
                Programa Sentinela · gestão ambiental contínua
              </span>
              <h2 style={{ fontFamily: "'Comfortaa', cursive", fontWeight: 700, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", color: "#DFC49F", margin: "0 0 14px" }}>
                Gestão ambiental contínua para empresas que querem tirar esse assunto da rotina.
              </h2>
              <p style={{ color: "rgba(223,196,159,0.78)", lineHeight: 1.75, fontSize: "0.9rem", margin: 0 }}>
                Um contrato anual em que a IL Ambiental acompanha licenças, prazos, condicionantes e documentos da sua empresa e organiza o que precisa ser feito ao longo do ano.
              </p>
            </div>
            <div>
              <Link href="/gestao-ambiental" className="btn-light" style={{ display: "block", textAlign: "center", marginBottom: 10 }}>
                Conhecer o Programa Sentinela
              </Link>
              <p style={{ fontSize: "0.75rem", color: "rgba(223,196,159,0.4)", margin: 0, textAlign: "center" }}>
                Começa pelo Diagnóstico Vértice, sem custo.
              </p>
            </div>
          </div>

          {/* Serviços pontuais */}
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-caption" data-aos="fade-up">Serviços pontuais</span>
            <h2
              data-aos="fade-up"
              style={{
                fontFamily: "'Comfortaa', cursive",
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                color: "#2C1A0E",
                margin: 0,
              }}
            >
              Para quando a necessidade é específica
            </h2>
            <span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 18px" }} />
          </div>

          {/* Bloco 1: Outorga */}
          <div id="agua" data-aos="fade-up" style={{ marginBottom: 40, border: "1px solid rgba(181,137,94,0.2)", borderRadius: 12, padding: "32px 36px", background: "#F5F0E8" }}>
            <h3 style={{ fontFamily: "'Comfortaa', cursive", fontWeight: 700, fontSize: "1.3rem", color: "#2C1A0E", marginBottom: 8 }}>Outorga e uso da água</h3>
            <p style={{ color: "#6B5443", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 16 }}>
              <strong>Para quem é:</strong> Empresas que captam água de poço ou rio, ou que lançam efluentes em corpo hídrico.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "Outorga de captação de água subberrânea ou superficial.",
                "Outorga de lançamento de efluentes.",
                "Renovação de outorgas e cumprimento das condicionantes da outorga.",
                "Autorização e regularização de uso de recursos hídricos junto à SEMAS-PA.",
              ].map((item, j) => (
                <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.875rem", color: "#2C1A0E" }}>
                  <span style={{ color: "#B5895E", flexShrink: 0, marginTop: 2 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a href={WA_AGUA} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-flex", padding: "10px 24px", fontSize: "0.875rem" }}>
              Falar sobre outorga
            </a>
          </div>

          {/* Bloco 2: Licenciamento */}
          <div id="licenciamento" data-aos="fade-up" style={{ marginBottom: 40, border: "1px solid rgba(181,137,94,0.2)", borderRadius: 12, padding: "32px 36px", background: "#fff" }}>
            <h3 style={{ fontFamily: "'Comfortaa', cursive", fontWeight: 700, fontSize: "1.3rem", color: "#2C1A0E", marginBottom: 8 }}>Licenciamento ambiental</h3>
            <p style={{ color: "#6B5443", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 16 }}>
              <strong>Para quem é:</strong> Empresas que vão iniciar, ampliar ou manter uma atividade sujeita a licenciamento.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "Licença de Operação e renovação dentro do prazo legal.",
                "Licença Prévia e Licença de Instalação.",
                "Licença de Regularização (LAR) e dispensa de licenciamento (DLA).",
                "Enquadramento da atividade e definição do órgão competente.",
              ].map((item, j) => (
                <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.875rem", color: "#2C1A0E" }}>
                  <span style={{ color: "#B5895E", flexShrink: 0, marginTop: 2 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a href={WA_LICENCA} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-flex", padding: "10px 24px", fontSize: "0.875rem" }}>
              Falar sobre licença
            </a>
          </div>

          {/* Bloco 3: Relatórios */}
          <div id="relatorios" data-aos="fade-up" style={{ marginBottom: 40, border: "1px solid rgba(181,137,94,0.2)", borderRadius: 12, padding: "32px 36px", background: "#F5F0E8" }}>
            <h3 style={{ fontFamily: "'Comfortaa', cursive", fontWeight: 700, fontSize: "1.3rem", color: "#2C1A0E", marginBottom: 8 }}>Relatórios ambientais</h3>
            <p style={{ color: "#6B5443", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 16 }}>
              <strong>Para quem é:</strong> Empresas licenciadas com relatórios periódicos ou condicionantes a comprovar.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "Relatório de Informação Ambiental Anual (RIAA).",
                "Relatórios de cumprimento de condicionantes.",
                "Relatório de Controle Ambiental (RCA) e outros relatórios técnicos exigidos pelo órgão.",
              ].map((item, j) => (
                <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.875rem", color: "#2C1A0E" }}>
                  <span style={{ color: "#B5895E", flexShrink: 0, marginTop: 2 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a href={WA_RELATORIOS} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-flex", padding: "10px 24px", fontSize: "0.875rem" }}>
              Falar sobre relatórios
            </a>
          </div>

          {/* Bloco 4: PGRS */}
          <div id="pgrs" data-aos="fade-up" style={{ marginBottom: 40, border: "1px solid rgba(181,137,94,0.2)", borderRadius: 12, padding: "32px 36px", background: "#fff" }}>
            <h3 style={{ fontFamily: "'Comfortaa', cursive", fontWeight: 700, fontSize: "1.3rem", color: "#2C1A0E", marginBottom: 8 }}>PGRS e gestão de resíduos</h3>
            <p style={{ color: "#6B5443", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 16 }}>
              <strong>Para quem é:</strong> Empresas que geram resíduos e precisam do plano como condicionante de licença.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "Elaboração e atualização do PGRS conforme a operação atual.",
                "Orientação sobre armazenamento, destinação e registros (MTR).",
                "Verificação das licenças de transportadores e destinadores.",
              ].map((item, j) => (
                <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.875rem", color: "#2C1A0E" }}>
                  <span style={{ color: "#B5895E", flexShrink: 0, marginTop: 2 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a href={WA_PGRS} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-flex", padding: "10px 24px", fontSize: "0.875rem" }}>
              Falar sobre PGRS
            </a>
          </div>

          {/* PENDENTE 6: Bloco de Notificações - confirmar com Isabela se deve aparecer */}
          <div id="notificacoes" data-aos="fade-up" style={{ marginBottom: 40, border: "1px dashed rgba(181,137,94,0.4)", borderRadius: 12, padding: "32px 36px", background: "#F5F0E8" }}>
            <h3 style={{ fontFamily: "'Comfortaa', cursive", fontWeight: 700, fontSize: "1.3rem", color: "#2C1A0E", marginBottom: 8 }}>Notificações e exigências de órgão</h3>
            <p style={{ color: "#6B5443", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 16 }}>
              <strong>Para quem é:</strong> Empresas que receberam notificação, exigência ou auto de infração de órgão ambiental.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "Análise técnica do documento recebido.",
                "Levantamento do que precisa ser apresentado ou corrigido.",
                "Resposta técnica dentro do prazo.",
              ].map((item, j) => (
                <li key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.875rem", color: "#2C1A0E" }}>
                  <span style={{ color: "#B5895E", flexShrink: 0, marginTop: 2 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a href={WA_NOTIFICACAO} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-flex", padding: "10px 24px", fontSize: "0.875rem" }}>
              Recebi uma notificação
            </a>
          </div>
        </div>
      </section>

      {/* SV-04 O CUSTO DE NÃO ACOMPANHAR */}
      <section className="cta-section" style={{ background: "#452816", padding: "80px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
          <span className="section-caption" data-aos="fade-up">Por que isso importa</span>
          <h2
            data-aos="fade-up"
            style={{
              fontFamily: "'Comfortaa', cursive",
              fontWeight: 700,
              fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
              color: "#DFC49F",
              margin: 0,
            }}
          >
            O custo de não acompanhar.
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" style={{ color: "rgba(223,196,159,0.72)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 560, margin: "16px auto 32px" }}>
            A irregularidade ambiental não gera só multa. Pode gerar embargo, suspensão de atividades e responsabilidade pessoal do gestor. Prevenir custa menos e dá previsibilidade à operação.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16, marginBottom: 32 }}>
            {[
              { icon: "⚠", text: "Multas de R$ 50 a R$ 50 milhões (Lei 9.605/1998, art. 75)." },
              { icon: "⛔", text: "Embargo e suspensão de atividades (Decreto 6.514/2008, art. 3º)." },
              { icon: "⚖", text: "Responsabilidade penal de dirigentes (Lei 9.605/1998, art. 2º)." },
            ].map((r, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 80} style={{ background: "rgba(26,15,8,0.4)", border: "1px solid rgba(223,196,159,0.12)", borderRadius: 10, padding: "16px 20px", maxWidth: 260, textAlign: "left" }}>
                <p style={{ color: "rgba(223,196,159,0.75)", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{r.text}</p>
              </div>
            ))}
          </div>
          <Link href="/contato?assunto=vertice" className="btn-light" data-aos="fade-up">
            Solicitar Diagnóstico Vértice
          </Link>
        </div>
      </section>

      {/* SV-05 CTA FINAL */}
      <section className="cta-section" style={{ background: "#F5F0E8", padding: "72px 24px", textAlign: "center" }}>
        <h2
          data-aos="fade-up"
          style={{
            fontFamily: "'Comfortaa', cursive",
            fontWeight: 700,
            fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
            color: "#2C1A0E",
            margin: 0,
          }}
        >
          Sua empresa está regularizada?
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#6B5443", maxWidth: 500, margin: "14px auto 0", lineHeight: 1.7 }}>
          Se a resposta não é "sim, com certeza", o Diagnóstico Vértice mostra exatamente o que falta. Sem custo e sem compromisso.
        </p>
        <div data-aos="fade-up" data-aos-delay="200">
          <Link href="/contato?assunto=vertice" className="btn-primary" style={{ marginTop: 28, display: "inline-flex" }}>
            Solicitar Diagnóstico Vértice
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
