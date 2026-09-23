import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const WA_NUMBER = "5591992723570";
const WA_VERTICE = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Olá, Isabela! Vim pelo site e gostaria de solicitar o Diagnóstico Vértice para a minha empresa.")}`;

export function Sobre() {
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
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 56,
            alignItems: "center",
          }}
        >
          {/* Foto */}
          <div data-aos="fade-right" style={{ textAlign: "center" }}>
            <img
              src="/isabela-loiane.jpg"
              alt="Isabela Loiane, engenheira florestal e responsável técnica da IL Ambiental"
              style={{
                width: "100%",
                maxWidth: 340,
                height: 380,
                objectFit: "cover",
                objectPosition: "top center",
                borderRadius: 14,
                display: "block",
                margin: "0 auto",
              }}
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
          </div>

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
              Isabela é engenheira florestal com atuação em licenciamento ambiental, outorga de recursos hídricos e gestão de conformidade. Trabalha diretamente com cada cliente desde o primeiro diagnóstico até o protocolo junto ao órgão.
            </p>
            <p style={{ color: "#4B3728", lineHeight: 1.8, marginBottom: 16 }}>
              A IL Ambiental foi fundada com foco exclusivo nas empresas da Região Metropolitana de Belém e Castanhal, com atendimento direto pela responsável técnica e sem intermediários.
            </p>
            <p style={{ color: "#4B3728", lineHeight: 1.8, marginBottom: 0 }}>
              Cada empresa tem uma realidade ambiental diferente. O trabalho começa entendendo essa realidade antes de propor qualquer solução.
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
                // PENDENTE 5: confirmar lista de atividades com Isabela
                itens: ["Comércio e varejo", "Postos de combustível", "Frigoríficos e alimentício", "Mineração", "Construção civil", "Outros — verificar com Isabela"],
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
            <span className="section-caption" data-aos="fade-up">Como trabalhamos</span>
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
              Como a IL Ambiental trabalha
            </h2>
            <span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 0" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              {
                n: "01",
                titulo: "Atendimento direto pela responsável técnica",
                texto: "Não há intermediário entre sua empresa e a engenheira responsável. Do diagnóstico ao protocolo, Isabela acompanha cada etapa.",
              },
              {
                n: "02",
                titulo: "Diagnóstico antes de qualquer proposta",
                texto: "Toda relação começa pelo Diagnóstico Vértice: um levantamento da situação ambiental real da empresa antes de qualquer serviço ser proposto.",
              },
              {
                n: "03",
                titulo: "Foco em Belém e região metropolitana",
                texto: "A atuação é concentrada geograficamente para garantir conhecimento profundo dos órgãos, prazos e exigências locais.",
              },
              {
                n: "04",
                titulo: "Clareza sobre o que precisa ser feito e quando",
                texto: "Nenhuma empresa deveria descobrir que está irregular quando já virou autuação. O trabalho é manter a conformidade como parte da rotina operacional.",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                style={{
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                  padding: "20px 0",
                  borderBottom: i < 3 ? "1px solid rgba(181,137,94,0.15)" : "none",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    fontFamily: "'Comfortaa', cursive",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#DFC49F",
                    minWidth: 36,
                  }}
                >
                  {item.n}
                </span>
                <div>
                  <h4 style={{ fontFamily: "'Comfortaa', cursive", fontWeight: 700, fontSize: "1rem", color: "#2C1A0E", marginBottom: 6 }}>
                    {item.titulo}
                  </h4>
                  <p style={{ color: "#6B5443", lineHeight: 1.7, margin: 0, fontSize: "0.9rem" }}>
                    {item.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ background: "#452816", padding: "72px 24px", textAlign: "center" }}>
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
          Pronto para organizar a situação ambiental da sua empresa?
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" style={{ color: "rgba(223,196,159,0.72)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 480, margin: "14px auto 28px" }}>
          Comece pelo Diagnóstico Vértice. Uma conversa com Isabela para entender exatamente o que sua empresa precisa cumprir.
        </p>
        <div data-aos="fade-up" data-aos-delay="200" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contato?assunto=vertice" className="btn-light">
            Solicitar Diagnóstico Vértice
          </Link>
          <a href={WA_VERTICE} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ borderColor: "rgba(223,196,159,0.4)", color: "#DFC49F" }}>
            Falar pelo WhatsApp
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
