import { useEffect, useState, useRef } from "react";
import { useLocation } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const WA_NUMBER = "5591992723570";
const WA_GENERAL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site da IL Ambiental e gostaria de falar sobre a situação ambiental da minha empresa.")}`;

// Municípios da Região Metropolitana de Belém e Castanhal
const MUNICIPIOS = [
  "Belém",
  "Ananindeua",
  "Marituba",
  "Benevides",
  "Santa Isabel do Pará",
  "Castanhal",
  "Outro",
];

const ASSUNTOS = [
  { value: "vertice", label: "Diagnóstico Vértice (gratuito)" },
  { value: "sentinela", label: "Programa Sentinela (gestão contínua)" },
  { value: "outorga", label: "Outorga e uso da água" },
  { value: "licenciamento", label: "Licenciamento ambiental" },
  { value: "relatorios", label: "Relatórios ambientais (RIAA, RCA)" },
  { value: "pgrs", label: "PGRS e gestão de resíduos" },
  { value: "notificacao", label: "Notificação ou exigência de órgão" },
  { value: "outro", label: "Outro assunto" },
];

function useQueryParam(key: string) {
  const [location] = useLocation();
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  return params.get(key) ?? "";
}

export function Contato() {
  const assuntoParam = useQueryParam("assunto");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    municipio: "",
    email: "",
    telefone: "",
    assunto: assuntoParam === "vertice" ? "vertice" : "",
    mensagem: "",
  });

  // Pre-fill assunto from URL param
  useEffect(() => {
    if (assuntoParam) {
      setForm((prev) => ({ ...prev, assunto: assuntoParam }));
    }
  }, [assuntoParam]);

  useEffect(() => {
    document.title = "Contato | IL Ambiental";
    return () => { document.title = "IL Ambiental | Engenharia e consultoria ambiental em Belém"; };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        formRef.current?.reset();
        setForm({ nome: "", empresa: "", municipio: "", email: "", telefone: "", assunto: "", mensagem: "" });
      } else {
        setError("Não foi possível enviar. Tente pelo WhatsApp ou e-mail.");
      }
    } catch {
      setError("Não foi possível enviar. Tente pelo WhatsApp ou e-mail.");
    } finally {
      setSending(false);
    }
  };

  const isVertice = form.assunto === "vertice";

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    border: "1px solid rgba(181,137,94,0.35)",
    borderRadius: 8,
    fontSize: "0.9rem",
    fontFamily: "'Poppins', sans-serif",
    color: "#2C1A0E",
    background: "#fff",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.15s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.8rem",
    fontWeight: 600,
    color: "#452816",
    marginBottom: 5,
  };

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
        }}
      >
        <span className="section-caption">Fale com a IL Ambiental</span>
        <h1
          style={{
            fontFamily: "'Comfortaa', cursive",
            fontWeight: 700,
            fontSize: "clamp(1.9rem, 4vw, 3rem)",
            color: "#2C1A0E",
            margin: 0,
          }}
        >
          {isVertice
            ? "Solicitar o Diagnóstico Vértice"
            : "Fale com a responsável técnica"}
        </h1>
        {isVertice && (
          <p style={{ fontSize: "0.95rem", color: "#6B5443", maxWidth: 520, margin: "14px auto 0", lineHeight: 1.7 }}>
            Preencha o formulário abaixo. Isabela entrará em contato para agendar uma conversa e entender a situação ambiental da sua empresa. Sem custo e sem compromisso.
          </p>
        )}
      </section>

      {/* Formulário + Dados laterais */}
      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* Formulário */}
          <div>
            {submitted ? (
              <div
                style={{
                  background: "#F0F7F0",
                  border: "1px solid #9EC9A0",
                  borderRadius: 12,
                  padding: "32px 28px",
                  textAlign: "center",
                }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#3A7D44" strokeWidth="2" strokeLinecap="round" style={{ marginBottom: 12 }}>
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <h3 style={{ fontFamily: "'Comfortaa', cursive", color: "#2C1A0E", marginBottom: 8 }}>Mensagem recebida</h3>
                <p style={{ color: "#4B6B4E", fontSize: "0.9rem", margin: 0 }}>
                  Isabela retornará em até 1 dia útil. Se precisar falar agora, use o WhatsApp abaixo.
                </p>
                <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-flex", marginTop: 20 }}>
                  Abrir WhatsApp
                </a>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>

                {/* Assunto (CT-03 — dropdown com pré-seleção por param) */}
                <div>
                  <label htmlFor="assunto" style={labelStyle}>Como podemos ajudar? *</label>
                  <select
                    id="assunto"
                    name="assunto"
                    required
                    value={form.assunto}
                    onChange={handleChange}
                    style={{ ...inputStyle, color: form.assunto ? "#2C1A0E" : "#9B8878" }}
                  >
                    <option value="" disabled>Selecione o assunto</option>
                    {ASSUNTOS.map((a) => (
                      <option key={a.value} value={a.value}>{a.label}</option>
                    ))}
                  </select>
                </div>

                {/* Nome */}
                <div>
                  <label htmlFor="nome" style={labelStyle}>Nome *</label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={form.nome}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label htmlFor="empresa" style={labelStyle}>Empresa *</label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    required
                    placeholder="Nome da empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>

                {/* Município (CT-02 — novo campo dropdown) */}
                <div>
                  <label htmlFor="municipio" style={labelStyle}>Município *</label>
                  <select
                    id="municipio"
                    name="municipio"
                    required
                    value={form.municipio}
                    onChange={handleChange}
                    style={{ ...inputStyle, color: form.municipio ? "#2C1A0E" : "#9B8878" }}
                  >
                    <option value="" disabled>Selecione o município</option>
                    {MUNICIPIOS.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                {/* E-mail e Telefone em linha */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label htmlFor="email" style={labelStyle}>E-mail *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="telefone" style={labelStyle}>WhatsApp</label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      placeholder="(91) 9 9999-9999"
                      value={form.telefone}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="mensagem" style={labelStyle}>Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    placeholder={isVertice
                      ? "Descreva brevemente a atividade da sua empresa e sua principal dúvida ambiental."
                      : "Descreva sua necessidade ou dúvida."}
                    value={form.mensagem}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                {error && (
                  <p style={{ color: "#C0392B", fontSize: "0.85rem", margin: 0 }}>{error}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", opacity: sending ? 0.7 : 1 }}
                >
                  {sending ? "Enviando..." : isVertice ? "Solicitar Diagnóstico Vértice" : "Enviar mensagem"}
                </button>

                <p style={{ fontSize: "0.72rem", color: "#9B8878", margin: 0, textAlign: "center", lineHeight: 1.5 }}>
                  Ao enviar este formulário, você concorda com o tratamento dos dados fornecidos para fins de atendimento, conforme nossa{" "}
                  <a href="/privacidade" style={{ color: "#B5895E", textDecoration: "underline" }}>Política de Privacidade</a>.
                  Respondemos em até 1 dia útil.
                </p>
              </form>
            )}
          </div>

          {/* Dados de contato */}
          <div>
            <div
              style={{
                background: "#F5F0E8",
                borderRadius: 12,
                padding: "28px",
                marginBottom: 20,
              }}
            >
              <h3 style={{ fontFamily: "'Comfortaa', cursive", fontWeight: 700, fontSize: "1.1rem", color: "#2C1A0E", margin: "0 0 16px" }}>
                Fale diretamente
              </h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                <li>
                  <a
                    href={WA_GENERAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", gap: 12, alignItems: "flex-start", textDecoration: "none", color: "#2C1A0E" }}
                  >
                    <span style={{ color: "#B5895E", flexShrink: 0, marginTop: 2 }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.116 1.522 5.849L.058 23.5a.5.5 0 0 0 .604.635l5.825-1.527A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.809 9.809 0 0 1-5.005-1.372l-.359-.214-3.723.976.994-3.629-.234-.373A9.818 9.818 0 0 1 2.182 12c0-5.413 4.405-9.818 9.818-9.818 5.413 0 9.818 4.405 9.818 9.818 0 5.413-4.405 9.818-9.818 9.818z"/>
                      </svg>
                    </span>
                    <div>
                      <span style={{ fontWeight: 600, fontSize: "0.85rem", display: "block" }}>(91) 99272-3570</span>
                      <span style={{ fontSize: "0.78rem", color: "#6B5443" }}>WhatsApp</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contato@ilambiental.com.br"
                    style={{ display: "flex", gap: 12, alignItems: "flex-start", textDecoration: "none", color: "#2C1A0E" }}
                  >
                    <span style={{ color: "#B5895E", flexShrink: 0, marginTop: 2 }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </span>
                    <div>
                      <span style={{ fontWeight: 600, fontSize: "0.85rem", display: "block" }}>contato@ilambiental.com.br</span>
                      <span style={{ fontSize: "0.78rem", color: "#6B5443" }}>E-mail</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div
              style={{
                background: "#452816",
                borderRadius: 12,
                padding: "24px",
              }}
            >
              <h4 style={{ fontFamily: "'Comfortaa', cursive", fontWeight: 700, fontSize: "1rem", color: "#DFC49F", margin: "0 0 10px" }}>
                Atendimento
              </h4>
              <p style={{ color: "rgba(223,196,159,0.72)", fontSize: "0.85rem", lineHeight: 1.65, margin: 0 }}>
                Belém, Ananindeua, Marituba, Benevides,<br />
                Santa Isabel do Pará e Castanhal.<br />
                <br />
                Retorno em até 1 dia útil.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
