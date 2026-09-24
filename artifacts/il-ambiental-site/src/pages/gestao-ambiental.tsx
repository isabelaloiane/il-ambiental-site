import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const WA_NUMBER = "5591992723570";
const WA_VERTICE = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Olá, Isabela! Vim pelo site e gostaria de solicitar o Diagnóstico Vértice para a minha empresa.")}`;
const WA_SENTINELA = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Olá, Isabela! Vim pelo site e gostaria de conhecer o Programa Sentinela de gestão ambiental contínua.")}`;

export function GestaoAmbiental() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh" }}>
      <Navbar />

      {/* BLOCO 1 · TOPO */}
      <section className="page-hero" style={{ textAlign: "center", background: "linear-gradient(135deg, #2C1A0E 0%, #452816 50%, #734120 100%)", borderBottom: "1px solid rgba(181,137,94,0.18)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <span className="section-caption" style={{ color: "#B5895E" }}>Programa Sentinela · gestão ambiental contínua</span>
          <h1
            style={{
              fontFamily: "'Comfortaa', cursive",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              lineHeight: 1.15,
              color: "#DFC49F",
              margin: "0 0 18px",
            }}
          >
            As obrigações ambientais da sua empresa acompanhadas o ano inteiro.
          </h1>
          <p className="fade-2" style={{ fontSize: "1.05rem", color: "rgba(223,196,159,0.78)", maxWidth: 560, margin: "0 auto 28px", lineHeight: 1.75 }}>
            Um contrato anual em que a IL Ambiental acompanha licenças, condicionantes, prazos e documentos da sua empresa e organiza, ao longo do ano, o que precisa ser feito.
          </p>
          <div className="fade-3 hero-cta-group" style={{ justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contato?assunto=vertice" className="btn-light">
              Começar pelo Diagnóstico Vértice
            </Link>
            <a
              href={WA_SENTINELA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ borderColor: "rgba(223,196,159,0.4)", color: "rgba(223,196,159,0.8)" }}
            >
              Falar sobre o Sentinela
            </a>
          </div>
        </div>
      </section>

      {/* BLOCO 2 · PARA QUEM É */}
      <section style={{ padding: "72px 24px", background: "#F5F0E8" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-caption" data-aos="fade-up">Para quem é</span>
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
              Para empresas que
            </h2>
            <span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 18px" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              "Têm Licença de Operação ativa, com condicionantes a cumprir.",
              "Captam água de poço ou rio, ou lançam efluentes.",
              "Precisam entregar RIAA, PGRS ou outros relatórios periódicos.",
              "Não têm um profissional ambiental na equipe.",
              "Precisam comprovar regularidade a bancos, clientes ou compradores.",
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                style={{
                  background: "#fff",
                  borderRadius: 10,
                  padding: "20px 24px",
                  border: "1px solid rgba(181,137,94,0.2)",
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                }}
              >
                <span style={{ color: "#734120", fontWeight: 700, fontSize: "1.1rem", flexShrink: 0 }}>✓</span>
                <p style={{ color: "#2C1A0E", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 3 · O QUE ESTA INCLUÍDO */}
      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-caption" data-aos="fade-up">O que está incluído</span>
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
              O que o Programa Sentinela cobre
            </h2>
            <span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 18px" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}>
            {[
              "Identificação de todas as obrigações ambientais da empresa.",
              "Calendário de prazos de licenças, outorgas e relatórios.",
              "Acompanhamento das condicionantes e de sua comprovação.",
              "Planejamento das ações necessárias no período.",
              "Organização e acompanhamento documental.",
              "Orientação ao empreendimento sempre que surgir uma dúvida ou demanda.",
              "Relatório de acompanhamento periódico.",
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 50}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(181,137,94,0.15)",
                }}
              >
                <span style={{ color: "#B5895E", flexShrink: 0, marginTop: 2 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 112"/></svg>
                </span>
                <p style={{ color: "#2C1A0E", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
          {/* PENDENTE 4: Confirmar se serviços específicos como renovações são incluídos ou orçados à parte */}
          <div
            data-aos="fade-up"
            style={{
              background: "#F5F0E8",
              border: "1px solid rgba(181,137,94,0.25)",
              borderRadius: 8,
              padding: "14px 20px",
              marginTop: 24,
              fontSize: "0.85rem",
              color: "#6B5443",
            }}
          >
            <strong style={{ color: "#734120" }}>Observação:</strong> Serviços específicos que surgirem no período, como renovação de licença ou novas outorgas, são avaliados conforme a demanda.
          </div>
        </div>
      </section>

      {/* BLOCO 4 · COMO FUNCIONA */}
      <section style={{ padding: "72px 24px", background: "#F5F0E8" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-caption" data-aos="fade-up">Como funciona</span>
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
              Da conversa inicial à gestão contínua
            </h2>
            <span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 18px" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, maxWidth: 680, margin: "0 auto" }}>
            {[
              { step: "01", title: "Diagnóstico Vértice", desc: "Levantamento da situação e das obrigações dos próximos 12 meses. Sem custo.", highlight: true },
              { step: "02", title: "Proposta anual", desc: "Escopo e valor definidos a partir do diagnóstico." },
              { step: "03", title: "Início do acompanhamento", desc: "Calendário montado e documentos organizados." },
              { step: "04", title: "Acompanhamento ao longo do ano", desc: "Com relatórios periódicos de situação." },
              { step: "05", title: "Revisão ao fim do ciclo", desc: "Planejamento do ano seguinte." },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                style={{
                  display: "flex",
                  gap: 24,
                  padding: "20px 0",
                  borderBottom: i < 4 ? "1px solid rgba(181,137,94,0.2)" : "none",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: item.highlight ? "#734120" : "#E8DDD0",
                    color: item.highlight ? "#DFC49F" : "#734120",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    flexShrink: 0,
                    fontFamily: "'Comfortaa', cursive",
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: "1rem", color: "#2C1A0E", margin: "0 0 4px" }}>
                    {item.title}{item.highlight && <span style={{ color: "#734120", fontSize: "0.78rem", fontWeight: 600, marginLeft: 8 }}>sem custo</span>}
                  </h4>
                  <p style={{ color: "#6B5443", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 5 · TABELA VÉRTICE x SENTINELA */}
      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-caption" data-aos="fade-up">Diagnóstico Vértice e Programa Sentinela</span>
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
              Qual é a diferença entre os dois?
            </h2>
            <span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 18px" }} />
          </div>
          <div
            data-aos="fade-up"
            style={{
              border: "1px solid rgba(181,137,94,0.25)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#452816" }}>
              <div style={{ padding: "14px 20px", fontSize: "0.78rem", fontWeight: 700, color: "rgba(223,196,159,0.6)", textTransform: "uppercase", letterSpacing: "0.08em" }}></div>
              <div style={{ padding: "14px 20px", fontSize: "0.85rem", fontWeight: 700, color: "#DFC49F", borderLeft: "1px solid rgba(223,196,159,0.12)", textAlign: "center" }}>Diagnóstico Vértice</div>
              <div style={{ padding: "14px 20px", fontSize: "0.85rem", fontWeight: 700, color: "#DFC49F", borderLeft: "1px solid rgba(223,196,159,0.12)", textAlign: "center" }}>Programa Sentinela</div>
            </div>
            {[
              { label: "O que é", vertice: "Diagnóstico inicial da situação ambiental", sentinela: "Gestão ambiental contínua" },
              { label: "Custo", vertice: "Sem custo", sentinela: "Contrato anual pago, sob proposta" },
              { label: "Duração", vertice: "Até 10 dias úteis após envio dos documentos", sentinela: "12 meses, renováveis" },
              { label: "Entrega", vertice: "Documento com as obrigações e demandas do próximo ciclo", sentinela: "Acompanhamento, calendário, orientação e relatórios ao longo do ano" },
              { label: "Compromisso", vertice: "Nenhum", sentinela: "Contrato anual" },
            ].map((row, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  borderTop: "1px solid rgba(181,137,94,0.15)",
                  background: i % 2 === 0 ? "#F5F0E8" : "#fff",
                }}
              >
                <div style={{ padding: "14px 20px", fontSize: "0.82rem", fontWeight: 600, color: "#734120" }}>{row.label}</div>
                <div style={{ padding: "14px 20px", fontSize: "0.82rem", color: "#2C1A0E", borderLeft: "1px solid rgba(181,137,94,0.15)" }}>{row.vertice}</div>
                <div style={{ padding: "14px 20px", fontSize: "0.82rem", color: "#2C1A0E", borderLeft: "1px solid rgba(181,137,94,0.15)" }}>{row.sentinela}</div>
              </div>
            ))}
          </div>
          <div data-aos="fade-up" data-aos-delay="100" style={{ textAlign: "center", marginTop: 32 }}>
            <Link href="/contato?assunto=vertice" className="btn-primary">
              Solicitar Diagnóstico Vértice
            </Link>
          </div>
        </div>
      </section>

      {/* BLOCO 6 · QUEM CONDUZ */}
      <section style={{ padding: "56px 24px", background: "#F5F0E8", borderTop: "1px solid rgba(181,137,94,0.2)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <p
            data-aos="fade-up"
            style={{ color: "#6B5443", fontSize: "0.95rem", lineHeight: 1.8, margin: "0 0 16px" }}
          >
            O Programa Sentinela é conduzido pela{" "}
            <strong style={{ color: "#2C1A0E" }}>Isabela Loiane</strong>, engenheira florestal com especialização em Direito Agroambiental (CREA-PA 1521301735).
          </p>
          <Link href="/sobre" style={{ fontSize: "0.85rem", color: "#734120", fontWeight: 600, textDecoration: "none" }}>
            Conhecer a trajetória →
          </Link>
        </div>
      </section>

      {/* BLOCO 7 · PERGUNTAS FREQUENTES */}
      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-caption" data-aos="fade-up">Dúvidas frequentes</span>
            <h2
              data-aos="fade-up"
              style={{
                fontFamily: "'Comfortaa', cursive",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                color: "#2C1A0E",
                margin: 0,
              }}
            >
              Perguntas sobre o Vértice e o Sentinela
            </h2>
            <span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 18px" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              {
                q: "Quanto custa o Programa Sentinela?",
                a: "O valor é definido em proposta, conforme a atividade, o porte e a quantidade de obrigações da empresa. Por isso o ponto de partida é o Diagnóstico Vértice.",
              },
              {
                q: "O Diagnóstico Vértice tem custo?",
                a: "Não. Ele é sem custo e não obriga à contratação de nenhum serviço.",
              },
              {
                q: "Posso contratar apenas um serviço pontual?",
                a: "Sim. Depois do diagnóstico, você pode contratar só o que precisa, como uma renovação de licença ou uma outorga.",
              },
              {
                q: "A IL Ambiental substitui um profissional ambiental interno?",
                a: "Para boa parte das empresas da região, sim. A IL assume o acompanhamento técnico e orienta a equipe interna no que for necessário.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                style={{
                  padding: "24px 0",
                  borderBottom: "1px solid rgba(181,137,94,0.18)",
                }}
              >
                <h4 style={{ fontWeight: 700, fontSize: "1rem", color: "#2C1A0E", margin: "0 0 10px" }}>{faq.q}</h4>
                <p style={{ color: "#6B5443", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 8 · CTA FINAL */}
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
          Comece sabendo exatamente onde sua empresa está.
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" style={{ color: "rgba(223,196,159,0.7)", fontSize: "0.9rem", maxWidth: 520, margin: "12px auto 28px", lineHeight: 1.7 }}>
          Sem custo e sem compromisso. Atendimento para empresas de Belém, Ananindeua, Marituba, Benevides, Santa Isabel do Pará e Castanhal.
        </p>
        <div data-aos="fade-up" data-aos-delay="200">
          <Link href="/contato?assunto=vertice" className="btn-light">
            Solicitar Diagnóstico Vértice
          </Link>
          <p style={{ marginTop: 14 }}>
            <a
              href={WA_VERTICE}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.85rem", color: "rgba(223,196,159,0.5)", textDecoration: "underline" }}
            >
              ou fale pelo WhatsApp
            </a>
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
