import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const WA_NUMBER = "5591992723570";
const WA_VERTICE = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Olá, Isabela! Vim pelo site e gostaria de solicitar o Diagnóstico Vértice para a minha empresa.")}`;

export function Sobre() {
  const [photoVisible, setPhotoVisible] = useState(true);

  useEffect(() => {
    document.title = "Sobre | IL Ambiental";
    return () => { document.title = "IL Ambiental | Engenharia e consultoria ambiental em Belém"; };
  }, []);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh" }}>
      <Navbar />

      {/* Topo */}
      <section
        className="page-hero"
        style={{
          textAlign: "center",
          background: "linear-gradient(135deg, rgb(238,231,220) 0%, rgb(245,240,232) 45%, rgb(240,234,225) 100%)",
          borderBottom: "1px solid rgba(181,137,94,0.18)",
          padding: "72px 24px",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <span className="section-caption">Sobre a IL Ambiental</span>
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
            Especialista em conformidade ambiental para empresas da Região Metropolitana de Belém.
          </h1>
        </div>
      </section>

      {/* Quem conduz */}
      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: photoVisible ? "repeat(auto-fit, minmax(280px, 1fr))" : "1fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          {/* Foto */}
          {photoVisible && (
            <div data-aos="fade-right" style={{ textAlign: "center" }}>
              <img
                src="/isabela-sobre.jpg"
                alt="Isabela Loiane, engenheira florestal e responsável técnica da IL Ambiental"
                style={{
                  width: "100%",
                  maxWidth: 300,
                  height: "auto",
                  borderRadius: 14,
                  display: "block",
                  margin: "0 auto",
                  boxShadow: "0 4px 24px rgba(69,40,22,0.15)",
                }}
                onError={() => setPhotoVisible(false)}
              />
            </div>
          )}

          {/* Texto */}
          <div data-aos="fade-left">
            <span className="section-caption">Responsável técnica</span>
            <h2
              style={{
                fontFamily: "'Comfortaa', cursive",
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                color: "#2C1A0E",
                margin: "0 0 6px",
              }}
            >
              Isabela Loiane
            </h2>
            <p style={{ color: "#B5895E", fontSize: "0.85rem", fontWeight: 600, marginBottom: 20 }}>
              Engenheira Florestal · CREA-PA 1521301735
            </p>
            <p style={{ color: "#4B3728", lineHeight: 1.8, marginBottom: 16 }}>
              Formada em Engenharia Florestal pela UFPA (2021), com atuação no mercado ambiental desde 2022. Antes de fundar a IL Ambiental, atuou na SEMMA e na Emater, além de empresas privadas do setor. Essa trajetória entre órgãos públicos e iniciativa privada permite enxergar o processo ambiental pelos dois lados — o da exigência técnica e o da realidade de quem opera.
            </p>
            <p style={{ color: "#4B3728", lineHeight: 1.8, marginBottom: 16 }}>
              Palestrante em eventos da área, com facilidade de comunicação para traduzir a complexidade da legislação ambiental em linguagem objetiva para gestores e empresários.
            </p>
            <p style={{ color: "#4B3728", lineHeight: 1.8, marginBottom: 0 }}>
              A IL Ambiental foi fundada com foco exclusivo nas empresas da Região Metropolitana de Belém e Castanhal. Cada processo é analisado e conduzido diretamente por Isabela, sem intermediários, do primeiro levantamento ao protocolo no órgão.
            </p>
          </div>
        </div>
      </section>

      {/* Órgãos e atuação */}
      <section style={{ padding: "64px 24px", background: "#F5F0E8" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-caption" data-aos="fade-up">Atuação</span>
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
              Órgãos e área geográfica
            </h2>
            <span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 0" }} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                titulo: "Órgãos ambientais",
                itens: ["SEMAS-PA", "IBAMA", "SEMMA Municipal", "SESPA"],
              },
              {
                titulo: "Área geográfica",
                itens: ["Belém", "Ananindeua", "Marituba", "Benevides", "Santa Isabel do Pará", "Castanhal"],
              },
              {
                titulo: "Atividades atendidas",
                itens: ["Comércio e varejo", "Postos de combustível", "Frigoríficos e alimentício", "Mineração", "Construção civil", "Transportes e logística", "Serviços e pequenas indústrias"],
              },
              {
                titulo: "Registro e habilitação",
                itens: ["CREA-PA 1521301735", "Engenharia Florestal", "Habilitada para outorga e licenciamento", "Atuação desde Belém"],
              },
            ].map((bloco, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                style={{
                  background: "#fff",
                  borderRadius: 10,
                  padding: "22px 20px",
                  border: "1px solid rgba(181,137,94,0.2)",
                }}
              >
                <h4 style={{ fontFamily: "'Comfortaa', cursive", fontWeight: 700, fontSize: "0.95rem", color: "#452816", marginBottom: 12 }}>
                  {bloco.titulo}
                </h4>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                  {bloco.itens.map((item, j) => (
                    <li key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: "0.83rem", color: "#4B3728" }}>
                      <span style={{ color: "#B5895E", flexShrink: 0 }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que diferencia */}
      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-caption" data-aos="fade-up">O que diferencia</span>
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
              Por que a IL Ambiental
            </h2>
            <span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 0" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              {
                num: "01",
                title: "Responsável técnica com atuação em órgão público",
                desc: "Antes de fundar a IL, Isabela atuou diretamente em secretarias de meio ambiente. Conhece o processo de dentro — os formulários, os prazos reais, os critérios de análise.",
              },
              {
                num: "02",
                title: "Foco exclusivo na Região Metropolitana de Belém",
                desc: "Não atendemos todo o Pará. O foco geográfico garante conhecimento real dos órgãos locais, dos técnicos, das exigências e dos prazos praticados.",
              },
              {
                num: "03",
                title: "Acompanhamento direto — sem terceirizar",
                desc: "Cada processo é conduzido pela Isabela, do levantamento ao protocolo. O cliente fala diretamente com quem analisa e assina tecnicamente.",
              },
              {
                num: "04",
                title: "Transparência de processo e prazo",
                desc: "O cliente sabe em que etapa está o processo, o que falta e o que está pendente no órgão. Nada fica sem explicação.",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px 1fr",
                  gap: 20,
                  alignItems: "flex-start",
                  padding: "20px 0",
                  borderBottom: i < 3 ? "1px solid rgba(181,137,94,0.15)" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Comfortaa', cursive",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    color: "#DFC49F",
                    lineHeight: 1,
                  }}
                >
                  {item.num}
                </span>
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#2C1A0E", margin: "0 0 8px" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "#6B5443", lineHeight: 1.7, fontSize: "0.9rem", margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section style={{ padding: "72px 24px", background: "#452816", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "#B5895E", fontWeight: 600, display: "block", marginBottom: 14 }}>
            Próximo passo
          </span>
          <h2
            data-aos="fade-up"
            style={{
              fontFamily: "'Comfortaa', cursive",
              fontWeight: 700,
              fontSize: "clamp(1.7rem, 3vw, 2.3rem)",
              color: "#DFC49F",
              margin: "0 0 20px",
            }}
          >
            Pronto para regularizar sua empresa?
          </h2>
          <p data-aos="fade-up" style={{ color: "rgba(223,196,159,0.78)", lineHeight: 1.75, marginBottom: 32 }}>
            Comece pelo Diagnóstico Vértice — um levantamento da situação ambiental da sua empresa, sem custo e sem compromisso.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contato?assunto=vertice" className="btn-light">
              Solicitar Diagnóstico Vértice
            </Link>
            <a href={WA_VERTICE} target="_blank" rel="noopener noreferrer" className="btn-outline-light">
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
