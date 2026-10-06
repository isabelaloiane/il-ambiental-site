import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  Shield, FileText, Droplets, Trash2, ClipboardList, Bell,
  CheckCircle, ArrowRight, AlertTriangle, Calendar, Users, Building2,
} from "lucide-react";

export function GestaoAmbiental() {
  useEffect(() => {
    document.title = "Gestão Ambiental Contínua – Sentinela | IL Ambiental";
    return () => { document.title = "IL Ambiental | Engenharia e Consultoria Ambiental"; };
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="hero-animated-bg"
        style={{ minHeight: "60vh" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(26,15,8,0.60)",
            pointerEvents: "none",
          }}
        />
        <div
          className="hero-content-inner"
          style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto" }}
        >
          <span
            className="fade-1"
            style={{
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "#B5895E",
              fontWeight: 600,
              display: "block",
              marginBottom: 16,
            }}
          >
            Produto principal
          </span>
          <h1
            className="fade-1"
            style={{
              fontFamily: "'Comfortaa', cursive",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              lineHeight: 1.12,
              color: "#fff",
              margin: 0,
            }}
          >
            Sentinela –{" "}
            <span style={{ color: "#DFC49F" }}>Gestão Ambiental Contínua</span>
          </h1>
          <p
            className="fade-2"
            style={{
              fontSize: "clamp(1rem, 1.8vw, 1.12rem)",
              color: "rgba(223,196,159,0.82)",
              maxWidth: 580,
              lineHeight: 1.75,
              marginTop: 20,
            }}
          >
            Por meio de contrato anual, a IL Ambiental assume a gestão das obrigações
            ambientais da sua empresa. Licenças, condicionantes, relatórios, processos e
            demandas técnicas passam a ser acompanhados de forma contínua, com planejamento,
            registro e prazos controlados.
          </p>
          <div className="fade-3 hero-cta-group" style={{ marginTop: 36 }}>
            <Link href="/contato?assunto=vertice" className="btn-primary">
              Solicitar Diagnóstico Vértice
            </Link>
            <a
              href="#como-funciona"
              className="btn-outline"
              onClick={e => {
                e.preventDefault();
                document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Como funciona
            </a>
          </div>
        </div>
      </section>

      {/* ── PARA QUEM É ──────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#F5F0E8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-caption" data-aos="fade-up">
              PARA QUEM É
            </span>
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
              O Sentinela foi feito para{" "}
              <span style={{ color: "#734120" }}>empresas como a sua</span>
            </h2>
            <span
              className="section-title-line"
              data-aos="fade-up"
              style={{ margin: "14px auto 18px" }}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                icon: <Building2 size={22} color="#734120" />,
                title: "Indústrias e agroindústrias",
                desc: "Com múltiplas licenças, condicionantes e relatórios periódicos para controlar.",
              },
              {
                icon: <Droplets size={22} color="#734120" />,
                title: "Usuários de recursos hídricos",
                desc: "Que captam água e precisam manter outorga vigente e renovações em dia.",
              },
              {
                icon: <Trash2 size={22} color="#734120" />,
                title: "Geradores de resíduos",
                desc: "Obrigados por lei a manter PGRS atualizado e comprovantes de destinação.",
              },
              {
                icon: <AlertTriangle size={22} color="#734120" />,
                title: "Quem já foi autuado",
                desc: "Empresas que precisam regularizar a situação e garantir que não se repita.",
              },
              {
                icon: <Users size={22} color="#734120" />,
                title: "Empresas sem equipe ambiental interna",
                desc: "Não contam com uma área ambiental interna, ou precisam de apoio técnico especializado para ela.",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 70}
                style={{
                  background: "#fff",
                  padding: 28,
                  borderRadius: 12,
                  border: "1px solid rgba(181,137,94,0.18)",
                  boxShadow: "0 2px 8px rgba(69,40,22,0.05)",
                }}
              >
                <div style={{ marginBottom: 14 }}>{item.icon}</div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#2C1A0E",
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "#6B5443",
                    lineHeight: 1.65,
                    fontSize: "0.875rem",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── O QUE ESTÁ INCLUÍDO ──────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-caption" data-aos="fade-up">
              O QUE INCLUI
            </span>
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
              Tudo que sua empresa precisa,{" "}
              <span style={{ color: "#734120" }}>sem improviso</span>
            </h2>
            <span
              className="section-title-line"
              data-aos="fade-up"
              style={{ margin: "14px auto 18px" }}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                icon: <Bell size={20} color="#734120" />,
                title: "Monitoramento de prazos",
                desc: "Alertas preventivos para licenças, outorgas, renovações e relatórios periódicos – com antecedência suficiente para agir.",
              },
              {
                icon: <Shield size={20} color="#734120" />,
                title: "Controle de condicionantes",
                desc: "Mapeamento e acompanhamento de todas as condicionantes das licenças vigentes da sua empresa.",
              },
              {
                icon: <FileText size={20} color="#734120" />,
                title: "Relatórios e documentos periódicos",
                desc: "Elaboração e protocolo dos relatórios exigidos pelos órgãos nos prazos corretos.",
              },
              {
                icon: <Droplets size={20} color="#734120" />,
                title: "Gestão de outorgas hídricas",
                desc: "Acompanhamento da validade das outorgas de uso de recursos hídricos e condução das renovações.",
              },
              {
                icon: <Trash2 size={20} color="#734120" />,
                title: "Suporte ao PGRS",
                desc: "Atualização do Plano de Gerenciamento de Resíduos Sólidos e controle dos comprovantes de destinação.",
              },
              {
                icon: <ClipboardList size={20} color="#734120" />,
                title: "Canal direto com a equipe técnica",
                desc: "Acesso direto à nossa equipe para dúvidas, intercorrências e orientação técnica ao longo do mês.",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 70}
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "24px 0",
                  borderBottom: "1px solid rgba(181,137,94,0.15)",
                }}
              >
                <span style={{ flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                <div>
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "#2C1A0E",
                      marginBottom: 6,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "#6B5443",
                      lineHeight: 1.65,
                      fontSize: "0.875rem",
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMANDAS ABRANGIDAS ──────────────────────────────────── */}
      <section style={{ padding: "60px 24px 80px", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "flex-start" }}>
            <div data-aos="fade-right" style={{ flex: "1 1 260px" }}>
              <h3
                style={{
                  fontFamily: "'Comfortaa', cursive",
                  fontWeight: 700,
                  fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                  color: "#2C1A0E",
                  marginBottom: 12,
                }}
              >
                Demandas que a gestão contínua pode abranger
              </h3>
              <p style={{ color: "#6B5443", fontSize: "0.9rem", lineHeight: 1.7 }}>
                Além do acompanhamento contínuo, o contrato pode incluir as demandas
                abaixo, conforme a atividade da empresa.
              </p>
            </div>
            <div data-aos="fade-left" style={{ flex: "1 1 260px" }}>
              <ul
                style={{
                  listStyle: "none",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "10px 24px",
                  padding: 0,
                  margin: 0,
                }}
              >
                {[
                  "Licenciamento ambiental e renovação de licenças",
                  "Acompanhamento de licenças e outorgas",
                  "Atendimento e comprovação de condicionantes",
                  "Elaboração de relatórios ambientais (RIAA, RCA e outros)",
                  "Solicitações e processos junto aos órgãos ambientais",
                  "Resposta a autos de infração e notificações",
                  "Demais obrigações ambientais e serviços técnicos específicos",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "flex-start",
                      fontSize: "0.875rem",
                      color: "#6B5443",
                      lineHeight: 1.5,
                    }}
                  >
                    <CheckCircle
                      size={14}
                      color="#734120"
                      style={{ marginTop: 3, flexShrink: 0 }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(115,65,32,0.7)",
                  marginTop: 16,
                  fontStyle: "italic",
                }}
              >
                O escopo de cada contrato é definido a partir do Diagnóstico Vértice, de acordo com a atividade e as obrigações da empresa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ────────────────────────────────────────── */}
      <section
        id="como-funciona"
        style={{ padding: "80px 24px", background: "#452816" }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span
              className="section-caption"
              data-aos="fade-up"
              style={{ color: "#B5895E" }}
            >
              PROCESSO
            </span>
            <h2
              data-aos="fade-up"
              style={{
                fontFamily: "'Comfortaa', cursive",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                color: "#DFC49F",
                margin: 0,
              }}
            >
              Como funciona o Sentinela
            </h2>
            <span
              className="section-title-line"
              data-aos="fade-up"
              style={{ margin: "14px auto 18px", background: "rgba(223,196,159,0.3)" }}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 32,
            }}
          >
            {[
              {
                step: "01",
                title: "Diagnóstico Vértice",
                tag: "sem custo",
                desc: "Mapeamos todas as suas obrigações ambientais: licenças, outorgas, condicionantes, relatórios e prazos – sem custo inicial.",
              },
              {
                step: "02",
                title: "Plano Personalizado",
                desc: "Criamos um calendário de obrigações e definimos as ações prioritárias para o primeiro mês.",
              },
              {
                step: "03",
                title: "Execução Mensal",
                desc: "Conduzimos os protocolos, elaboramos documentos e realizamos as entregas exigidas pelos órgãos.",
              },
              {
                step: "04",
                title: "Relatório ao Cliente",
                desc: "Ao final de cada ciclo, você recebe um resumo do que foi feito, pendências resolvidas e próximos vencimentos.",
              },
              {
                step: "05",
                title: "Vigília Contínua",
                desc: "Monitoramos mudanças na legislação e novas exigências para que sua empresa esteja sempre um passo à frente.",
              },
            ].map((item, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                <div
                  style={{
                    fontSize: "2.4rem",
                    fontFamily: "'Comfortaa', cursive",
                    fontWeight: 700,
                    color: "rgba(223,196,159,0.15)",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#DFC49F",
                    marginBottom: 8,
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span>{item.title}</span>
                  {"tag" in item && item.tag && (
                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#452816",
                        background: "#DFC49F",
                        borderRadius: 999,
                        padding: "3px 10px",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.tag}
                    </span>
                  )}
                </h3>
                <p
                  style={{
                    color: "rgba(223,196,159,0.7)",
                    lineHeight: 1.65,
                    fontSize: "0.875rem",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARATIVO VÉRTICE x SENTINELA ─────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#F5F0E8" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-caption" data-aos="fade-up">
              COMPARATIVO
            </span>
            <h2
              data-aos="fade-up"
              style={{
                fontFamily: "'Comfortaa', cursive",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                color: "#2C1A0E",
                margin: 0,
              }}
            >
              Por onde começar?
            </h2>
            <span
              className="section-title-line"
              data-aos="fade-up"
              style={{ margin: "14px auto 18px" }}
            />
          </div>
          <div
            data-aos="fade-up"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              border: "1px solid rgba(181,137,94,0.25)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            {/* Cabeçalho */}
            <div
              style={{
                background: "#F5F0E8",
                padding: "20px 28px",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#734120",
                borderRight: "1px solid rgba(181,137,94,0.25)",
                borderBottom: "1px solid rgba(181,137,94,0.25)",
              }}
            >
              Diagnóstico Vértice
            </div>
            <div
              style={{
                background: "#452816",
                padding: "20px 28px",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#DFC49F",
                borderBottom: "1px solid rgba(181,137,94,0.25)",
              }}
            >
              Sentinela Contínuo
            </div>
            {/* Linhas */}
            {[
              ["Serviço pontual", "Serviço mensal recorrente"],
              ["Mapeamento de obrigações e pendências", "Execução e controle das obrigações"],
              ["Plano de ação com prazos e prioridades", "Monitoramento proativo mês a mês"],
              ["Entrega: relatório técnico", "Entrega: tranquilidade e conformidade"],
              ["Ideal para começar", "Ideal para manter"],
            ].map(([a, b], i) => (
              <>
                <div
                  key={`a-${i}`}
                  style={{
                    padding: "14px 28px",
                    background: "#fff",
                    borderRight: "1px solid rgba(181,137,94,0.15)",
                    borderBottom: i < 4 ? "1px solid rgba(181,137,94,0.12)" : "none",
                    fontSize: "0.875rem",
                    color: "#2C1A0E",
                    lineHeight: 1.5,
                  }}
                >
                  {a}
                </div>
                <div
                  key={`b-${i}`}
                  style={{
                    padding: "14px 28px",
                    background: "#fff",
                    borderBottom: i < 4 ? "1px solid rgba(181,137,94,0.12)" : "none",
                    fontSize: "0.875rem",
                    color: "#2C1A0E",
                    lineHeight: 1.5,
                  }}
                >
                  {b}
                </div>
              </>
            ))}
          </div>
          <p
            data-aos="fade-up"
            style={{
              textAlign: "center",
              color: "#6B5443",
              fontSize: "0.9rem",
              marginTop: 20,
              lineHeight: 1.6,
            }}
          >
            O Diagnóstico Vértice é o ponto de partida. Após o diagnóstico, a maioria das
            empresas migra para o Sentinela para manter o que foi conquistado.
          </p>
        </div>
      </section>

      {/* ── QUEM CONDUZ ──────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center" }}>
            <div data-aos="fade-right" style={{ flex: "0 0 auto" }}>
              <img
                src="/isabela-quem-conduz.jpg"
                alt="Isabela Loiane, Engenheira Florestal, CREA-PA 1521301735"
                style={{
                  width: "clamp(180px, 24vw, 260px)",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                  borderRadius: 12,
                  display: "block",
                }}
              />
            </div>
            <div data-aos="fade-left" style={{ flex: "1 1 300px" }}>
              <span className="section-caption">QUEM CONDUZ</span>
              <h2
                style={{
                  fontFamily: "'Comfortaa', cursive",
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  color: "#2C1A0E",
                  margin: "12px 0 6px",
                }}
              >
                Isabela Loiane
              </h2>
              <p
                style={{
                  color: "#734120",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  marginBottom: 4,
                }}
              >
                Engenheira Florestal · CREA-PA 1521301735
              </p>
              <p style={{ color: "#6B5443", fontSize: "0.85rem", marginBottom: 20 }}>
                Especialista em Direito Agroambiental
              </p>
              <p
                style={{
                  color: "#2C1A0E",
                  lineHeight: 1.75,
                  fontSize: "1rem",
                  marginBottom: 20,
                }}
              >
                O Programa Sentinela tem coordenação técnica da engenheira florestal Isabela Loiane (UEPA), pós-graduada em Direito Ambiental pelo CESUPA, CREA-PA 1521301735.
              </p>
              <ul
                style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}
              >
                {[
                  "Você fala diretamente com quem resolve",
                  "Não existe intermediário ou equipe terceirizada",
                  "Relacionamento pessoal com os órgãos competentes",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
                  >
                    <CheckCircle
                      size={16}
                      color="#734120"
                      style={{ marginTop: 3, flexShrink: 0 }}
                    />
                    <span style={{ color: "#6B5443", fontSize: "0.9rem" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section style={{ padding: "72px 24px", background: "#F5F0E8" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-caption" data-aos="fade-up">
              DÚVIDAS
            </span>
            <h2
              data-aos="fade-up"
              style={{
                fontFamily: "'Comfortaa', cursive",
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                color: "#2C1A0E",
                margin: 0,
              }}
            >
              Perguntas frequentes sobre o Sentinela
            </h2>
          </div>
          {[
            {
              q: "O que é o Diagnóstico Vértice e por que é o ponto de partida?",
              a: "O Diagnóstico Vértice é o levantamento completo das obrigações ambientais da sua empresa: licenças vigentes, outorgas, condicionantes, relatórios exigidos e pendências. Sem ele, não é possível montar um plano de gestão realista. É ele que define o escopo do Sentinela para o seu negócio.",
            },
            {
              q: "A empresa precisa ter tudo regularizado antes de contratar o Sentinela?",
              a: "Não. O Sentinela pode começar com uma situação irregular e atuar em paralelo com o processo de regularização. O Diagnóstico Vértice identifica o que há, e o plano de ação define a ordem das prioridades. Regularizar e manter são feitos juntos, não em sequência.",
            },
            {
              q: "Quem cuida da minha empresa no dia a dia?",
              a: "Nossa equipe, diretamente. Não existe equipe terceirizada ou intermediário. Você tem acesso direto à equipe técnica responsável por cada processo, com comunicação direta por WhatsApp e retorno em até 1 dia útil.",
            },
            {
              q: "A IL Ambiental substitui um profissional ambiental interno?",
              a: "Para muitas empresas, sim. Para as que já têm uma área ambiental, a IL Ambiental atua como apoio técnico especializado, assumindo prazos, processos e demandas que exigem dedicação.",
            },
            {
              q: "O que acontece se surgir uma demanda nova durante o contrato?",
              a: "As demandas previstas no escopo são atendidas dentro do contrato. Demandas adicionais são dimensionadas com a empresa e incorporadas ao planejamento do período.",
            },
            {
              q: "O que acontece se surgir uma demanda inesperada – como um auto de infração?",
              a: "Demandas inesperadas fazem parte da gestão ambiental. Nossa equipe analisa o documento recebido, orienta imediatamente e, conforme o escopo do contrato, conduz a resposta técnica dentro do prazo. O Sentinela existe justamente para que você não enfrente isso sozinho.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className={`faq-item${openFaq === i ? " open" : ""}`}
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              <div
                className="faq-question"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                role="button"
                tabIndex={0}
                onKeyDown={e =>
                  e.key === "Enter" && setOpenFaq(openFaq === i ? null : i)
                }
              >
                {faq.q}
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────── */}
      <section
        className="cta-section"
        style={{ background: "#452816", padding: "80px 24px", textAlign: "center" }}
      >
        <h2
          data-aos="fade-up"
          style={{
            fontFamily: "'Comfortaa', cursive",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            color: "#DFC49F",
            margin: 0,
          }}
        >
          Comece pelo Diagnóstico Vértice
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          style={{
            color: "rgba(223,196,159,0.82)",
            fontSize: "1.05rem",
            maxWidth: 560,
            margin: "16px auto 32px",
            lineHeight: 1.7,
          }}
        >
          Um levantamento completo das obrigações ambientais da sua empresa – com plano de
          ação, prazos e prioridades definidos pela nossa equipe.
        </p>
        <div data-aos="fade-up" data-aos-delay="200">
          <Link
            href="/contato?assunto=vertice"
            className="btn-light"
            style={{
              fontSize: "1.05rem",
              padding: "16px 40px",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            Solicitar Diagnóstico Vértice <ArrowRight size={18} />
          </Link>
          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(223,196,159,0.75)",
              marginTop: 14,
            }}
          >
            Retorno em até 1 dia útil.
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
