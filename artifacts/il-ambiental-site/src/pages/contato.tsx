import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

const MUNICIPIOS = [
  "Belém",
  "Ananindeua",
  "Marituba",
  "Benevides",
  "Santa Isabel do Pará",
  "Castanhal",
  "Outro município",
];

const ASSUNTOS = [
  "Diagnóstico Vértice",
  "Licenciamento Ambiental",
  "Outorga de Recursos Hídricos",
  "PGRS",
  "Relatório Técnico Ambiental",
  "Gestão Ambiental (Sentinela)",
  "Outro assunto",
];

export function Contato() {
  useEffect(() => {
    document.title = "Contato | IL Ambiental, Belém (PA)";
    return () => { document.title = "IL Ambiental | Engenharia e Consultoria Ambiental"; };
  }, []);

  // Lê parâmetro ?assunto=vertice da URL para pré-selecionar o assunto
  const [assunto, setAssunto] = useState<string>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get("assunto") === "vertice" ? "Diagnóstico Vértice" : "";
    } catch {
      return "";
    }
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!feedback) return;
    const t = setTimeout(() => setFeedback(null), 8000);
    return () => clearTimeout(t);
  }, [feedback]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const company = (data.get("company") as string)?.trim();
    const phone = (data.get("phone") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const municipio = (data.get("municipio") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    // UTM / origem
    const params = new URLSearchParams(window.location.search);
    const utm_source = params.get("utm_source") || "";
    const utm_medium = params.get("utm_medium") || "";
    const utm_campaign = params.get("utm_campaign") || "";
    const origem = "site_formulario";

    const errors: Record<string, boolean> = {};
    if (!name) errors.name = true;
    if (!phone) errors.phone = true;
    if (!message) errors.message = true;

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, phone, email, municipio, assunto, message, utm_source, utm_medium, utm_campaign, origem }),
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
        // GA4 generate_lead event
        try {
          (window as any).gtag?.("event", "generate_lead", {
            event_category: "formulario",
            event_label: assunto || "sem_assunto",
            municipio: municipio || "nao_informado",
          });
        } catch (_) {/* silencia erros se GA4 não estiver carregado */}
      } else {
        setFeedback({ type: "error", message: result.message || "Erro ao enviar. Tente pelo WhatsApp." });
      }
    } catch {
      setFeedback({ type: "error", message: "Erro de conexão. Verifique sua internet e tente novamente." });
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="contact-hero-section"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(to bottom, rgba(26,15,8,0.55) 0%, rgba(26,15,8,0.72) 100%), radial-gradient(ellipse at 60% 50%, rgba(115,65,32,0.35) 0%, transparent 65%), linear-gradient(135deg, #2e1a0e 0%, #1a0f08 100%)",
        }}
      >
        <div style={{ maxWidth: 640, textAlign: "center" }}>
          <h1
            className="fade-1"
            style={{
              fontFamily: "'Comfortaa', cursive",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#DFC49F",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Fale com quem entende de licenciamento no Pará.
          </h1>
          <p
            className="fade-2"
            style={{
              fontSize: "1.05rem",
              color: "rgba(223,196,159,0.82)",
              maxWidth: 500,
              margin: "16px auto 0",
              lineHeight: 1.7,
            }}
          >
            Conte a situação da sua empresa. Nossa equipe técnica retorna em até 1 dia útil.
          </p>
        </div>
      </section>

      {/* ── FLOATING ACTION CARD ─────────────────────────────────── */}
      <section style={{ padding: "0 24px" }}>
        <div
          className="contact-float-card"
          style={{
            maxWidth: 720,
            margin: "-32px auto 0",
            position: "relative",
            zIndex: 10,
            background: "#F5F0E8",
            borderRadius: 16,
            boxShadow: "0 8px 40px rgba(69,40,22,0.15)",
            padding: "48px 40px",
            textAlign: "center",
          }}
        >
          <span className="section-caption" data-aos="fade-up">
            Fale Conosco
          </span>
          <h2
            data-aos="fade-up"
            style={{
              fontFamily: "'Comfortaa', cursive",
              fontWeight: 700,
              fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
              color: "#2C1A0E",
              margin: 0,
            }}
          >
            Como prefere entrar em contato?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            style={{
              fontSize: "0.95rem",
              color: "#6B5443",
              maxWidth: 480,
              margin: "10px auto 0",
              lineHeight: 1.65,
            }}
          >
            Escolha a opção mais cômoda. A Isabela está pronta para responder por formulário,
            e-mail ou WhatsApp.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 14,
              marginTop: 24,
              flexWrap: "wrap",
            }}
          >
            <button
              className="btn-primary"
              onClick={() =>
                document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Enviar mensagem
            </button>
            <a
              href="https://wa.me/5591992723570?text=Olá! Vim pelo site da IL Ambiental e gostaria de falar sobre a situação ambiental da minha empresa."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#fff",
                border: "1.5px solid rgba(181,137,94,0.4)",
                color: "#2C1A0E",
                padding: "14px 28px",
                borderRadius: 8,
                fontWeight: 500,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#25D366",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORMS & INFO ─────────────────────────────────── */}
      <section
        id="formulario"
        className="contact-form-section"
        style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20,
          }}
        >

          {/* Form Card */}
          <div
            data-aos="fade-right"
            style={{
              background: "#452816",
              borderRadius: 16,
              padding: 36,
              color: "#DFC49F",
            }}
          >
            {!submitted ? (
              <>
                <h3
                  style={{ fontWeight: 700, fontSize: "1.3rem", margin: 0, color: "#DFC49F" }}
                >
                  Envie uma mensagem
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(223,196,159,0.7)",
                    marginTop: 8,
                    lineHeight: 1.6,
                    marginBottom: 24,
                  }}
                >
                  Preencha o formulário e a Isabela retorna em até 1 dia útil.
                </p>
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {/* Nome */}
                  <div className="form-group">
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder=" "
                      style={{
                        borderBottomColor: fieldErrors.name ? "#e08080" : undefined,
                      }}
                      onChange={() => {
                        if (fieldErrors.name)
                          setFieldErrors(prev => ({ ...prev, name: false }));
                      }}
                    />
                    <label>
                      Nome completo
                      <span style={{ color: "#e08080", marginLeft: 2 }}>*</span>
                    </label>
                  </div>

                  {/* Empresa */}
                  <div className="form-group">
                    <input type="text" name="company" placeholder=" " />
                    <label>Empresa</label>
                  </div>

                  {/* Município */}
                  <div className="form-group">
                    <select
                      name="municipio"
                      defaultValue=""
                      style={{
                        background: "transparent",
                        border: "none",
                        borderBottom: "1px solid rgba(223,196,159,0.3)",
                        color: "#DFC49F",
                        padding: "16px 0 8px",
                        width: "100%",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.9rem",
                        appearance: "none",
                        cursor: "pointer",
                        outline: "none",
                      }}
                    >
                      <option value="" disabled style={{ color: "#999" }}>
                        Município da empresa
                      </option>
                      {MUNICIPIOS.map(m => (
                        <option key={m} value={m} style={{ color: "#2C1A0E", background: "#fff" }}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Assunto / Como podemos ajudar */}
                  <div className="form-group">
                    <select
                      name="assunto"
                      value={assunto}
                      onChange={e => setAssunto(e.target.value)}
                      style={{
                        background: "transparent",
                        border: "none",
                        borderBottom: "1px solid rgba(223,196,159,0.3)",
                        color: assunto ? "#DFC49F" : "rgba(223,196,159,0.45)",
                        padding: "16px 0 8px",
                        width: "100%",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.9rem",
                        appearance: "none",
                        cursor: "pointer",
                        outline: "none",
                      }}
                    >
                      <option value="" style={{ color: "#999" }}>
                        Como podemos ajudar?
                      </option>
                      {ASSUNTOS.map(a => (
                        <option key={a} value={a} style={{ color: "#2C1A0E", background: "#fff" }}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Telefone */}
                  <div className="form-group">
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder=" "
                      style={{
                        borderBottomColor: fieldErrors.phone ? "#e08080" : undefined,
                      }}
                      onChange={() => {
                        if (fieldErrors.phone)
                          setFieldErrors(prev => ({ ...prev, phone: false }));
                      }}
                    />
                    <label>
                      WhatsApp
                      <span style={{ color: "#e08080", marginLeft: 2 }}>*</span>
                    </label>
                  </div>

                  {/* E-mail corporativo (opcional) */}
                  <div className="form-group">
                    <input type="email" name="email" placeholder=" " />
                    <label>E-mail corporativo (opcional)</label>
                  </div>

                  {/* Mensagem */}
                  <div className="form-group" style={{ marginBottom: 20 }}>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      placeholder=" "
                      style={{
                        borderBottomColor: fieldErrors.message ? "#e08080" : undefined,
                        resize: "vertical",
                      }}
                      onChange={() => {
                        if (fieldErrors.message)
                          setFieldErrors(prev => ({ ...prev, message: false }));
                      }}
                    />
                    <label>
                      Conte brevemente sua necessidade
                      <span style={{ color: "#e08080", marginLeft: 2 }}>*</span>
                    </label>
                  </div>

                  {/* Aviso LGPD */}
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "rgba(223,196,159,0.45)",
                      lineHeight: 1.5,
                      marginBottom: 16,
                    }}
                  >
                    Ao enviar, você concorda com o tratamento dos seus dados para fins de
                    atendimento, conforme nossa{" "}
                    <Link
                      href="/privacidade"
                      style={{ color: "rgba(223,196,159,0.65)", textDecoration: "underline" }}
                    >
                      Política de Privacidade
                    </Link>
                    .
                  </p>

                  <button
                    type="submit"
                    disabled={sending}
                    style={{
                      background: sending ? "rgba(223,196,159,0.55)" : "#DFC49F",
                      color: "#452816",
                      fontWeight: 700,
                      padding: 14,
                      borderRadius: 8,
                      width: "100%",
                      cursor: sending ? "not-allowed" : "pointer",
                      border: "none",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "0.95rem",
                      marginTop: 4,
                      transition: "background 200ms ease",
                    }}
                  >
                    {sending ? "Enviando..." : "Enviar mensagem"}
                  </button>

                  {feedback && (
                    <div
                      style={{
                        padding: "14px 16px",
                        borderRadius: 8,
                        borderLeft: `4px solid ${
                          feedback.type === "error" ? "#e08080" : "#4D5140"
                        }`,
                        background:
                          feedback.type === "error"
                            ? "rgba(224,128,128,0.12)"
                            : "rgba(77,81,64,0.2)",
                        color: "#DFC49F",
                        fontSize: "0.875rem",
                        lineHeight: 1.55,
                        marginTop: 12,
                      }}
                    >
                      {feedback.message}
                    </div>
                  )}
                </form>
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  minHeight: 300,
                }}
              >
                <CheckCircle size={40} color="#DFC49F" style={{ marginBottom: 16 }} />
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    margin: 0,
                    color: "#DFC49F",
                  }}
                >
                  Mensagem enviada!
                </h3>
                <p
                  style={{
                    color: "rgba(223,196,159,0.7)",
                    fontSize: "0.9rem",
                    marginTop: 8,
                  }}
                >
                  A Isabela retorna em até 1 dia útil.
                </p>
              </div>
            )}
          </div>

          {/* Info Card */}
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            style={{
              background: "#452816",
              borderRadius: 16,
              padding: 36,
              color: "#DFC49F",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: "1.3rem",
                margin: 0,
                color: "#DFC49F",
              }}
            >
              Informações de Contato
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(223,196,159,0.7)",
                marginTop: 8,
                marginBottom: 28,
                lineHeight: 1.6,
              }}
            >
              Prefere falar diretamente? Aqui estão todos os nossos canais.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
              {[
                {
                  icon: <Phone size={18} color="#B5895E" />,
                  label: "WhatsApp",
                  main: (
                    <a
                      href="tel:+5591992723570"
                      style={{ color: "#DFC49F", textDecoration: "none" }}
                    >
                      +55 91 99272-3570
                    </a>
                  ),
                  sub: "Atendimento preferencial",
                },
                {
                  icon: <Mail size={18} color="#B5895E" />,
                  label: "E-mail",
                  main: (
                    <a
                      href="mailto:contato@ilambiental.com.br"
                      style={{ color: "#DFC49F", textDecoration: "none" }}
                    >
                      contato@ilambiental.com.br
                    </a>
                  ),
                  sub: null,
                },
                {
                  icon: <MapPin size={18} color="#B5895E" />,
                  label: "Localização",
                  main: <span>Belém, Pará, Brasil</span>,
                  sub: "Região Metropolitana de Belém e entorno",
                },
                {
                  icon: <Clock size={18} color="#B5895E" />,
                  label: "Horário",
                  main: <span>Segunda a sexta-feira, das 08h às 18h</span>,
                  sub: null,
                },
              ].map((info, i, arr) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 14,
                    paddingBottom: i < arr.length - 1 ? 20 : 0,
                    borderBottom:
                      i < arr.length - 1 ? "1px solid rgba(223,196,159,0.12)" : "none",
                  }}
                >
                  <span style={{ flexShrink: 0, marginTop: 1 }}>{info.icon}</span>
                  <div>
                    <div
                      style={{
                        fontSize: "0.68rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "rgba(223,196,159,0.45)",
                        fontWeight: 600,
                        marginBottom: 4,
                      }}
                    >
                      {info.label}
                    </div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 500 }}>{info.main}</div>
                    {info.sub && (
                      <div
                        style={{
                          fontSize: "0.78rem",
                          color: "rgba(223,196,159,0.5)",
                          marginTop: 2,
                        }}
                      >
                        {info.sub}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/5591992723570?text=Olá! Vim pelo site da IL Ambiental e gostaria de falar sobre a situação ambiental da minha empresa."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                border: "1.5px solid rgba(223,196,159,0.3)",
                color: "#DFC49F",
                padding: "12px",
                borderRadius: 8,
                width: "100%",
                fontWeight: 500,
                cursor: "pointer",
                display: "block",
                textAlign: "center",
                fontFamily: "'Poppins', sans-serif",
                textDecoration: "none",
                marginTop: 28,
              }}
            >
              Abrir WhatsApp agora
            </a>
          </div>

        </div>
      </section>

      {/* ── PROCESS STEPS (S38) ─────────────────────────────────── */}
      <section style={{ padding: "56px 24px 0", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 0,
              border: "1px solid rgba(181,137,94,0.2)",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            {[
              {
                step: "01",
                title: "Você entra em contato",
                desc: "Pelo formulário ou WhatsApp. Descrevemos a situação da sua empresa sem precisar de documentos nesse primeiro momento.",
              },
              {
                step: "02",
                title: "Diagnóstico técnico",
                desc: "A Isabela mapeia as obrigações ambientais da empresa e identifica o que está em dia, o que está pendente e o que é urgente.",
              },
              {
                step: "03",
                title: "Plano e execução",
                desc: "Recebe um plano de ação com prazos claros. A IL conduz os processos junto aos órgãos — você acompanha e assina quando necessário.",
              },
            ].map((item, i, arr) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                style={{
                  padding: "32px 28px",
                  borderRight: i < arr.length - 1 ? "1px solid rgba(181,137,94,0.2)" : "none",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontFamily: "'Comfortaa', cursive",
                    fontWeight: 700,
                    color: "rgba(115,65,32,0.1)",
                    lineHeight: 1,
                    marginBottom: 12,
                  }}
                >
                  {item.step}
                </div>
                <h4
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#2C1A0E",
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    color: "#6B5443",
                    fontSize: "0.875rem",
                    lineHeight: 1.65,
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

      {/* ── REGIONAL CARD ────────────────────────────────────────── */}
      <section
        className="contact-regional-section"
        style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 48px" }}
      >
        <div
          style={{
            background: "#452816",
            borderRadius: 16,
            padding: "48px clamp(28px, 5vw, 56px)",
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
            alignItems: "center",
          }}
        >
          <div style={{ flex: "1 1 280px" }}>
            <span className="section-caption" data-aos="fade-up">
              Atuação regional
            </span>
            <h2
              data-aos="fade-up"
              style={{
                fontFamily: "'Comfortaa', cursive",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                color: "#DFC49F",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Região Metropolitana de Belém e entorno
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              style={{
                fontSize: "0.95rem",
                color: "rgba(223,196,159,0.7)",
                lineHeight: 1.7,
                marginTop: 14,
                maxWidth: 400,
                marginBottom: 0,
              }}
            >
              Atendemos empresas em Belém, Ananindeua, Marituba, Benevides, Santa Isabel do
              Pará e Castanhal. Conhecemos o contexto regulatório de cada município, com
              relacionamento direto junto às secretarias municipais de meio ambiente.
            </p>
          </div>
          <div style={{ flex: "1 1 160px", textAlign: "center" }}>
            <MapPin size={48} color="rgba(223,196,159,0.3)" style={{ margin: "0 auto" }} />
            <div
              style={{
                color: "#DFC49F",
                fontWeight: 700,
                fontSize: "1.1rem",
                marginTop: 8,
              }}
            >
              Pará
            </div>
            <div
              style={{
                color: "rgba(223,196,159,0.5)",
                fontSize: "0.8rem",
                marginTop: 4,
              }}
            >
              RMB e municípios vizinhos
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section
        className="contact-faq-section"
        style={{ padding: "48px 24px 60px", background: "#F5F0E8" }}
      >
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="section-caption" data-aos="fade-up">
            Dúvidas frequentes
          </span>
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
            Perguntas que recebemos com frequência
          </h2>
        </div>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          {[
            {
              q: "Qual o prazo médio para o licenciamento no Pará?",
              a: "Depende da modalidade e do porte do empreendimento. A Licença Prévia (LP) costuma levar entre 2 e 6 meses na SEMAS-PA; a Licença de Operação (LO) varia conforme a categoria. Com documentação correta desde a primeira entrada e acompanhamento ativo do processo, evitamos os atrasos mais comuns. A Isabela orienta cada caso individualmente.",
            },
            {
              q: "Minha empresa pode ser multada sem licença?",
              a: "Sim. Operar sem licença ambiental sujeita a empresa a multas de R$ 500 a R$ 10 milhões, embargo e paralisação imediata das atividades. Licença vencida tem o mesmo efeito. A regularização preventiva é sempre mais barata e menos desgastante que responder a um auto de infração.",
            },
            {
              q: "A IL atende empresas fora da Região Metropolitana de Belém?",
              a: "A atuação principal é na Região Metropolitana de Belém (Belém, Ananindeua, Marituba, Benevides, Santa Isabel do Pará e Castanhal). Para outros municípios do estado do Pará, atendemos remotamente ou de forma combinada, dependendo da natureza do serviço. Entre em contato e avaliamos juntos.",
            },
            {
              q: "O que é o Diagnóstico Vértice e qual o custo?",
              a: "O Diagnóstico Vértice é um levantamento técnico das obrigações ambientais da sua empresa: licenças vigentes e vencimentos, outorgas, condicionantes, relatórios exigidos e pendências identificadas. O resultado é um relatório com plano de ação, prazos e prioridades. É o ponto de partida da IL com qualquer empresa — e é realizado sem custo inicial.",
            },
            {
              q: "Minha empresa precisa de outorga de recursos hídricos?",
              a: "Toda atividade que capta água de rios, córregos, lagos ou poços acima dos volumes de isenção exige outorga da SEMAS-PA ou da ANA. Irrigação, abastecimento industrial e atividades agropecuárias costumam ser os casos mais frequentes. A Isabela avalia se a sua atividade se enquadra e orienta o processo completo.",
            },
            {
              q: "Quais documentos preciso para iniciar o licenciamento?",
              a: "Em geral: contrato social, documentos do imóvel (matrícula ou contrato de arrendamento), projeto ou memorial descritivo da atividade e ART assinada pelo responsável técnico. Os requisitos variam conforme o órgão licenciador e a modalidade. A Isabela verifica o seu caso e lista exatamente o que é necessário.",
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

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section
        className="cta-section"
        style={{ background: "#452816", padding: "72px 24px", textAlign: "center" }}
      >
        <h2
          data-aos="fade-up"
          style={{
            fontFamily: "'Comfortaa', cursive",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
            color: "#DFC49F",
            margin: 0,
          }}
        >
          Sua empresa está regularizada?
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          style={{
            color: "rgba(223,196,159,0.82)",
            fontSize: "1rem",
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "16px auto 0",
          }}
        >
          Se a resposta não é "sim, com certeza", fale com a IL. O Diagnóstico Vértice
          mapeia o que sua empresa precisa cumprir e define as prioridades.
        </p>
        <div data-aos="fade-up" data-aos-delay="200">
          <Link
            href="/contato?assunto=vertice"
            className="btn-light"
            style={{ marginTop: 32, display: "inline-flex" }}
          >
            Solicitar Diagnóstico Vértice →
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
