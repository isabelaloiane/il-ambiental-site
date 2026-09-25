import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const WA_NUMBER = "5591992723570";
const WA_GENERAL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("OlÃ¡! Vim pelo site da IL Ambiental e gostaria de falar sobre a situaÃ§Ã£o ambiental da minha empresa.")}`;
const WA_VERTICE = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("OlÃ¡, Isabela! Vim pelo site e gostaria de solicitar o DiagnÃ³stico VÃ©rtice para a minha empresa.")}`;

export function Home() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh" }}>
      <Navbar />

      {/* âââ H-01 HERO âââ */}
      <section className="hero-animated-bg">
        <div style={{ position: "absolute", inset: 0, background: "rgba(26,15,8,0.60)", pointerEvents: "none" }} />
        <div
          className="hero-content-inner"
          style={{
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Left: text */}
          <div>
            <span className="fade-1" style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "#B5895E", fontWeight: 600, display: "block", marginBottom: 14 }}>
              Engenharia e consultoria ambiental Â· RegiÃ£o Metropolitana de BelÃ©m
            </span>
            <h1
              className="fade-1"
              style={{
                fontFamily: "'Comfortaa', cursive",
                fontWeight: 700,
                fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                lineHeight: 1.1,
                color: "#fff",
                margin: 0,
              }}
            >
              As obrigaÃ§Ãµes ambientais da sua empresa em dia,{" "}
              <span style={{ color: "#DFC49F" }}>o ano inteiro.</span>
            </h1>
            <p
              className="fade-2"
              style={{
                fontSize: "clamp(0.95rem, 1.7vw, 1.1rem)",
                color: "rgba(223,196,159,0.82)",
                fontWeight: 400,
                maxWidth: 540,
                lineHeight: 1.8,
                marginTop: 20,
              }}
            >
              LicenÃ§as, outorga de Ã¡gua, PGRS, relatÃ³rios anuais e condicionantes acompanhados por uma engenheira florestal especialista em Direito Agroambiental. Para empresas de BelÃ©m, Ananindeua, Marituba, Benevides, Santa Isabel do ParÃ¡ e Castanhal.
            </p>
            <div className="fade-3 hero-cta-group" style={{ marginTop: 36, flexWrap: "wrap" }}>
              <Link href="/contato?assunto=vertice" className="btn-primary">
                Solicitar DiagnÃ³stico VÃ©rtice
              </Link>
              <a
                href={WA_VERTICE}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Falar pelo WhatsApp
              </a>
            </div>
            <p
              className="fade-3"
              style={{ fontSize: "0.78rem", color: "rgba(223,196,159,0.45)", marginTop: 14 }}
            >
              DiagnÃ³stico inicial sem custo e sem compromisso de contrataÃ§Ã£o.
            </p>
          </div>

          {/* Right: photo */}
          <div
            className="fade-2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <img
              src="/isabela-quem-conduz.jpg"
              alt="Isabela Loiane, Engenheira Florestal e responsÃ¡vel tÃ©cnica da IL Ambiental"
              style={{
                width: "100%",
                maxWidth: 340,
                borderRadius: 12,
                objectFit: "cover",
                filter: "grayscale(30%)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
              }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
          </div>
        </div>
      </section>

      {/* âââ H-02 FAIXA DE CREDIBILIDADE âââ */}
      <div style={{ background: "#F5F0E8", borderBottom: "1px solid rgba(181,137,94,0.25)", padding: "20px 0" }}>
        <div className="trust-bar-grid">
          {[
            { value: "CREA-PA", label: "ResponsÃ¡vel tÃ©cnica registrada â nÂº 1521301735" },
            { value: "+50 processos", label: "Mais de 50 processos protocolados junto Ã  SEMAS e outros Ã³rgÃ£os" },
            { value: "SEMAS-PA", label: "AtuaÃ§Ã£o junto Ã  SEMAS-PA e secretarias municipais de meio ambiente" },
            { value: "1 dia Ãºtil", label: "Retorno em atÃ© 1 dia Ãºtil" },
          ].map((item, i, arr) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              style={{
                textAlign: "center",
                borderRight: i < arr.length - 1 ? "1px solid rgba(181,137,94,0.25)" : "none",
                padding: "8px 12px",
              }}
            >
              <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#734120", lineHeight: 1 }}>{item.value}</div>
              <div style={{ fontSize: "0.72rem", color: "#6B5443", marginTop: 6, lineHeight: 1.4 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* âââ H-04 SERVIÃOS âââ */}
      <section style={{ padding: "80px 24px", background: "#F5F0E8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-caption" data-aos="fade-up">O QUE FAZEMOS</span>
            <h2
              data-aos="fade-up"
              style={{
                fontFamily: "'Comfortaa', cursive",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                color: "#2C1A0E",
                margin: 0,
              }}
            >
              ServiÃ§os pontuais quando a necessidade Ã© especÃ­fica.{" "}
              <span style={{ color: "#734120" }}>GestÃ£o contÃ­nua quando a empresa quer tirar esse assunto da rotina.</span>
            </h2>
            <span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 18px" }} />
          </div>

          {/* Destaque Programa Sentinela */}
          <div
            data-aos="fade-up"
            style={{
              background: "#452816",
              borderRadius: 14,
              padding: "36px 40px",
              marginBottom: 28,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 32,
              alignItems: "center",
            }}
          >
            <div>
              <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#B5895E", fontWeight: 600, display: "block", marginBottom: 10 }}>
                Programa Sentinela Â· gestÃ£o ambiental contÃ­nua
              </span>
              <h3 style={{ fontFamily: "'Comfortaa', cursive", fontWeight: 700, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", color: "#DFC49F", margin: "0 0 14px" }}>
                GestÃ£o ambiental contÃ­nua
              </h3>
              <p style={{ color: "rgba(223,196,159,0.78)", lineHeight: 1.75, fontSize: "0.95rem", margin: 0 }}>
                Um contrato anual em que a IL Ambiental acompanha licenÃ§as, prazos, condicionantes e documentos da sua empresa e organiza o que precisa ser feito ao longo do ano.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              <Link
                href="/gestao-ambiental"
                className="btn-light"
                style={{ alignSelf: "stretch", textAlign: "center" }}
              >
                Conhecer o Programa Sentinela
              </Link>
              <p style={{ fontSize: "0.75rem", color: "rgba(223,196,159,0.45)", margin: 0 }}>
                ComeÃ§a pelo DiagnÃ³stico VÃ©rtice, sem custo.
              </p>
            </div>
          </div>

          {/* Grade 2x2 de serviÃ§os pontuais */}
          <div className="grid-6-services" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#734120" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v6l4 2"/></svg>
                ),
                title: "Outorga e uso da Ã¡gua",
                desc: "Outorga de captaÃ§Ã£o em poÃ§o ou rio, outorga de lanÃ§amento de efluentes, renovaÃ§Ãµes e autorizaÃ§Ã£o de uso de recursos hÃ­dricos.",
                anchor: "/servicos#agua",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#734120" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                ),
                title: "Licenciamento ambiental",
                desc: "LicenÃ§a de OperaÃ§Ã£o e renovaÃ§Ãµes, alÃ©m de LP, LI, LAR e dispensa de licenciamento, do enquadramento Ã  emissÃ£o.",
                anchor: "/servicos#licenciamento",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#734120" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                ),
                title: "RelatÃ³rios ambientais",
                desc: "RIAA, relatÃ³rios de cumprimento de condicionantes e demais relatÃ³rios tÃ©cnicos exigidos pelos Ã³rgÃ£os.",
                anchor: "/servicos#relatorios",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#734120" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/><circle cx="7" cy="6" r="1" fill="#734120"/><circle cx="7" cy="12" r="1" fill="#734120"/><circle cx="7" cy="18" r="1" fill="#734120"/></svg>
                ),
                title: "PGRS e resÃ­duos",
                desc: "ElaboraÃ§Ã£o e atualizaÃ§Ã£o do Plano de Gerenciamento de ResÃ­duos SÃ³lidos, com orientaÃ§Ã£o para manter os registros de destinaÃ§Ã£o em dia.",
                anchor: "/servicos#pgrs",
              },
            ].map((svc, i) => (
              <div
                key={i}
                className="hover-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
                style={{
                  background: "#fff",
                  padding: 28,
                  borderRadius: 12,
                  boxShadow: "0 2px 8px rgba(69,40,22,0.07)",
                  border: "1px solid rgba(181,137,94,0.18)",
                  borderTop: "4px solid #B5895E",
                }}
              >
                <div style={{ marginBottom: 14 }}>{svc.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "#2C1A0E", marginBottom: 10 }}>{svc.title}</h3>
                <p style={{ color: "#6B5443", lineHeight: 1.65, fontSize: "0.875rem", margin: "0 0 16px" }}>{svc.desc}</p>
                <Link href={svc.anchor} style={{ fontSize: "0.8rem", color: "#734120", fontWeight: 600, textDecoration: "none" }}>
                  Ver detalhes â
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* âââ H-05 COMO COMEÃAMOS âââ */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-caption" data-aos="fade-up">Como comeÃ§amos</span>
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
              O primeiro passo Ã© entender onde sua empresa estÃ¡.
            </h2>
            <span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 18px" }} />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 28,
            }}
          >
            {[
              {
                num: "1",
                title: "Conversa inicial",
                desc: "VocÃª conta a atividade da empresa e a situaÃ§Ã£o atual. Retorno em atÃ© 1 dia Ãºtil.",
              },
              {
                num: "2",
                title: "DiagnÃ³stico VÃ©rtice",
                desc: "Analisamos licenÃ§as, outorgas, condicionantes, prazos e obrigaÃ§Ãµes e entregamos um documento com o que a empresa precisa cumprir nos prÃ³ximos 12 meses. Sem custo.",
                highlight: true,
              },
              {
                num: "3",
                title: "Proposta",
                desc: "Com o diagnÃ³stico em mÃ£os, vocÃª decide: contratar serviÃ§os pontuais, contratar o Programa Sentinela ou executar por conta prÃ³pria.",
              },
              {
                num: "4",
                title: "ExecuÃ§Ã£o e acompanhamento",
                desc: "No Programa Sentinela, a IL Ambiental acompanha as obrigaÃ§Ãµes da empresa durante todo o contrato anual.",
              },
            ].map((step, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                style={{
                  background: step.highlight ? "#452816" : "#F5F0E8",
                  borderRadius: 12,
                  padding: "28px 24px",
                  borderTop: step.highlight ? "4px solid #DFC49F" : "4px solid #B5895E",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: step.highlight ? "#DFC49F" : "#734120",
                    color: step.highlight ? "#452816" : "#DFC49F",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    marginBottom: 14,
                    fontFamily: "'Comfortaa', cursive",
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", color: step.highlight ? "#DFC49F" : "#2C1A0E", marginBottom: 10 }}>
                  {step.title}
                </h3>
                <p style={{ color: step.highlight ? "rgba(223,196,159,0.75)" : "#6B5443", lineHeight: 1.65, fontSize: "0.875rem", margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Nota de custo */}
          <div
            data-aos="fade-up"
            style={{
              background: "#F5F0E8",
              border: "1px solid rgba(181,137,94,0.35)",
              borderRadius: 10,
              padding: "16px 24px",
              marginTop: 28,
              fontSize: "0.85rem",
              color: "#6B5443",
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#734120" }}>Importante:</strong> O DiagnÃ³stico VÃ©rtice nÃ£o tem custo e nÃ£o obriga Ã  contrataÃ§Ã£o. O Programa Sentinela Ã© um serviÃ§o pago, contratado por perÃ­odo anual.
          </div>

          <div data-aos="fade-up" data-aos-delay="100" style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/contato?assunto=vertice" className="btn-primary">
              Solicitar DiagnÃ³stico VÃ©rtice
            </Link>
          </div>
        </div>
      </section>

      {/* âââ H-06 QUEM CONDUZ âââ */}
      <section style={{ padding: "80px 24px", background: "#452816" }}>
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 52,
            alignItems: "center",
          }}
        >
          <div data-aos="fade-right" style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="/isabela-hero.jpg"
              alt="Isabela Loiane, responsÃ¡vel tÃ©cnica da IL Ambiental"
              style={{
                width: "100%",
                maxWidth: 320,
                borderRadius: 12,
                objectFit: "cover",
                filter: "grayscale(20%)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
          </div>
          <div data-aos="fade-left">
            <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#B5895E", fontWeight: 600, display: "block", marginBottom: 12 }}>
              Quem assina o trabalho
            </span>
            <h2
              style={{
                fontFamily: "'Comfortaa', cursive",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                color: "#DFC49F",
                margin: "0 0 8px",
              }}
            >
              Isabela Loiane
            </h2>
            <p style={{ color: "#B5895E", fontSize: "0.9rem", marginBottom: 20 }}>
              Engenheira Florestal Â· Especialista em Direito Agroambiental Â· CREA-PA 1521301735
            </p>
            <p style={{ color: "rgba(223,196,159,0.78)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: 24 }}>
              Formada em Engenharia Florestal pela UFPA (2021), com atuaÃ§Ã£o no mercado ambiental desde 2022. ExperiÃªncia em Ã³rgÃ£os pÃºblicos â SEMMA e Emater â e no setor privado. Fundei a IL Ambiental para oferecer Ã s empresas da regiÃ£o um acompanhamento tÃ©cnico, prÃ³ximo e com visÃ£o jurÃ­dica. Cada processo Ã© analisado e conduzido por mim, do primeiro levantamento ao protocolo no Ã³rgÃ£o.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
              {["Engenharia Florestal", "Direito Agroambiental", "CREA-PA 1521301735"].map((tag, i) => (
                <span
                  key={i}
                  style={{
                    background: "rgba(223,196,159,0.12)",
                    border: "1px solid rgba(223,196,159,0.25)",
                    borderRadius: 6,
                    padding: "4px 12px",
                    fontSize: "0.78rem",
                    color: "#DFC49F",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link href="/sobre" className="btn-light">
              Conhecer a trajetÃ³ria
            </Link>
          </div>
        </div>
      </section>

      {/* âââ H-07 POR QUE A IL AMBIENTAL (diferenciais) âââ */}
      <section style={{ padding: "80px 24px", background: "#F5F0E8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-caption" data-aos="fade-up">Diferenciais</span>
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
              Por que empresas da regiÃ£o escolhem a IL Ambiental
            </h2>
            <span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 18px" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {[
              {
                title: "TÃ©cnica e jurÃ­dica no mesmo ponto de contato",
                desc: "FormaÃ§Ã£o em Engenharia Florestal com especializaÃ§Ã£o em Direito Agroambiental. Cada decisÃ£o tÃ©cnica jÃ¡ considera o respaldo legal.",
              },
              {
                title: "Conhecimento local",
                desc: "Conhecemos os procedimentos da SEMAS-PA e das secretarias municipais da regiÃ£o. Isso reduz idas e vindas no processo.",
              },
              {
                title: "DiÃ¡logo tÃ©cnico com os Ã³rgÃ£os",
                desc: "Respondemos exigÃªncias e acompanhamos a tramitaÃ§Ã£o com linguagem tÃ©cnica, dentro dos canais formais.",
              },
              {
                title: "VisÃ£o do empreendimento como um todo",
                desc: "LicenÃ§a, Ã¡gua, resÃ­duos e condicionantes analisados em conjunto, para que nada fique de fora do calendÃ¡rio da empresa.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="hover-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
                style={{
                  background: "#fff",
                  padding: 28,
                  borderRadius: 12,
                  boxShadow: "0 2px 8px rgba(69,40,22,0.07)",
                  border: "1px solid rgba(181,137,94,0.18)",
                }}
              >
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#734120", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DFC49F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#2C1A0E", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: "#6B5443", lineHeight: 1.65, fontSize: "0.875rem", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* âââ H-09 CLIENTES âââ */}
      {/* PENDENTE 1: Obter autorizaÃ§Ã£o por escrito de Tropoc, Fruta Pronta e Transzilli antes de publicar nomes/logos */}
      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
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
              Empresas que jÃ¡ confiaram seus processos ambientais Ã  IL Ambiental
            </h2>
            <span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 18px" }} />
            <p data-aos="fade-up" data-aos-delay="100" style={{ color: "#6B5443", fontSize: "0.95rem", lineHeight: 1.6, marginTop: 0 }}>
              Alguns dos clientes atendidos pela IL Ambiental.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, maxWidth: 680, margin: "0 auto" }}>
            {[
              { initials: "TR", name: "Tropoc", desc: "Multinacional atuante no beneficiamento da pimenta-do-reino" },
              { initials: "FP", name: "Fruta Pronta", desc: "Empresa de Portel, ParÃ¡, produtora de aÃ§aÃ­ em polpa" },
              { initials: "TZ", name: "Transzilli", desc: "OperaÃ§Ãµes de transporte, armazenagem e distribuiÃ§Ã£o" },
            ].map((c, i) => (
              <div
                key={i}
                className="hover-card"
                data-aos="fade-up"
                data-aos-delay={i * 80}
                style={{
                  background: "#F5F0E8",
                  padding: "32px 24px",
                  borderRadius: 12,
                  border: "1px solid rgba(181,137,94,0.25)",
                  display: "flex",
                  gap: 18,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: "#734120",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#DFC49F",
                    fontFamily: "'Comfortaa', cursive",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    flexShrink: 0,
                  }}
                >
                  {c.initials}
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, color: "#2C1A0E", fontSize: "1rem", marginBottom: 4 }}>{c.name}</h4>
                  <p style={{ color: "#6B5443", fontSize: "0.85rem", lineHeight: 1.55, margin: 0 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* âââ H-10 CTA FINAL âââ */}
      <section className="cta-section" style={{ background: "#452816", padding: "72px 24px", textAlign: "center" }}>
        <h2
          data-aos="fade-up"
          style={{
            fontFamily: "'Comfortaa', cursive",
            fontWeight: 700,
            fontSize: "clamp(1.7rem, 3.5vw, 2.8rem)",
            color: "#DFC49F",
            margin: 0,
            maxWidth: 680,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Quer saber exatamente o que sua empresa precisa cumprir nos prÃ³ximos 12 meses?
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" style={{ color: "rgba(223,196,159,0.72)", fontSize: "1rem", maxWidth: 520, margin: "16px auto 0", lineHeight: 1.7 }}>
          Solicite o DiagnÃ³stico VÃ©rtice. A anÃ¡lise Ã© feita pela responsÃ¡vel tÃ©cnica e nÃ£o tem custo.
        </p>
        <div data-aos="fade-up" data-aos-delay="200" style={{ marginTop: 32 }}>
          <Link href="/contato?assunto=vertice" className="btn-light" style={{ fontSize: "1rem", padding: "15px 36px" }}>
            Solicitar DiagnÃ³stico VÃ©rtice
          </Link>
          <p style={{ fontSize: "0.78rem", color: "rgba(223,196,159,0.4)", marginTop: 14 }}>
            Sem compromisso de contrataÃ§Ã£o. Retorno em atÃ© 1 dia Ãºtil.
          </p>
          <a
            href={WA_VERTICE}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.85rem", color: "rgba(223,196,159,0.55)", textDecoration: "underline", display: "block", marginTop: 8 }}
          >
            ou fale pelo WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
