import { useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Contato() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section style={{
        height: 320,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "80px 24px",
        background: "linear-gradient(to bottom, rgba(10,22,14,0.55) 0%, rgba(10,22,14,0.72) 100%), radial-gradient(ellipse at 60% 50%, rgba(45,106,79,0.35) 0%, transparent 65%), linear-gradient(135deg, #1a2e1c 0%, #0d1a0f 100%)"
      }}>
        <div style={{ maxWidth: 640, textAlign: "center" }}>
          <h1 className="fade-1" style={{ fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#fff", lineHeight: 1.15, margin: 0 }}>
            Resolva sua situação ambiental. Fale com a gente.
          </h1>
          <p className="fade-2" style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", maxWidth: 500, margin: "16px auto 0", lineHeight: 1.7 }}>
            Nossa equipe responde em até 24 horas. Tire suas dúvidas ou solicite uma proposta sem compromisso.
          </p>
        </div>
      </section>

      {/* FLOATING ACTION CARD */}
      <section style={{ padding: "0 24px" }}>
        <div style={{
          maxWidth: 720, margin: "-64px auto 0", position: "relative", zIndex: 10,
          background: "#fff", borderRadius: 16, boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
          padding: "48px 40px", textAlign: "center"
        }}>
          <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#2D6A4F", fontWeight: 600, display: "block", marginBottom: 8 }}>Fale Conosco</span>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", color: "#1A1A1A", margin: 0 }}>Como prefere entrar em contato?</h2>
          <p style={{ fontSize: "0.95rem", color: "#6B7280", maxWidth: 480, margin: "10px auto 0", lineHeight: 1.65 }}>
            Escolha a opção mais cômoda. Nossa equipe está pronta para responder: seja por formulário, e-mail ou WhatsApp.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 24, flexWrap: "wrap" }}>
            <button className="btn-primary" style={{ background: "#1a2e1c" }}>Enviar mensagem</button>
            <a
              href="https://wa.me/5591992503317?text=Olá! Gostaria de saber mais sobre os serviços da IL Ambiental."
              target="_blank" rel="noopener noreferrer"
              style={{ background: "#fff", border: "1.5px solid #E5E7EB", color: "#1A1A1A", padding: "14px 28px", borderRadius: 6, fontWeight: 500, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Poppins', sans-serif", fontSize: "1rem", textDecoration: "none" }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#25D366", display: "inline-block", flexShrink: 0 }} />
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT FORMS & INFO */}
      <section style={{ maxWidth: 900, margin: "40px auto 0", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>

          {/* Form Card */}
          <div style={{ background: "#1a2e1c", borderRadius: 16, padding: 36, color: "#fff" }}>
            {!submitted ? (
              <>
                <h3 style={{ fontWeight: 700, fontSize: "1.3rem", margin: 0 }}>Envie uma mensagem</h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", marginTop: 8, lineHeight: 1.6, marginBottom: 24 }}>
                  Preencha o formulário e nossa equipe responderá em até 24 horas.
                </p>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { label: "Nome completo", type: "text", required: true },
                    { label: "Empresa", type: "text", required: false },
                    { label: "Telefone / WhatsApp", type: "tel", required: true },
                  ].map((field, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <label style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{field.label}</label>
                      <input required={field.required} type={field.type} style={{
                        background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)",
                        color: "#fff", borderRadius: 6, padding: "11px 14px", fontSize: "0.9rem",
                        outline: "none", fontFamily: "'Poppins', sans-serif", width: "100%"
                      }} />
                    </div>
                  ))}
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>Como podemos ajudar?</label>
                    <textarea required rows={4} style={{
                      background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)",
                      color: "#fff", borderRadius: 6, padding: "11px 14px", fontSize: "0.9rem",
                      outline: "none", fontFamily: "'Poppins', sans-serif", width: "100%", resize: "vertical"
                    }} />
                  </div>
                  <button type="submit" style={{
                    background: "#fff", color: "#1a2e1c", fontWeight: 700, padding: 14,
                    borderRadius: 6, width: "100%", cursor: "pointer", border: "none",
                    fontFamily: "'Poppins', sans-serif", fontSize: "0.95rem", marginTop: 4
                  }}>
                    Enviar mensagem
                  </button>
                </form>
              </>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", minHeight: 300 }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>✓</div>
                <h3 style={{ fontWeight: 700, fontSize: "1.3rem", margin: 0 }}>Mensagem enviada!</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", marginTop: 8 }}>Nossa equipe responderá em até 24 horas.</p>
              </div>
            )}
          </div>

          {/* Info Card */}
          <div style={{ background: "#1a2e1c", borderRadius: 16, padding: 36, color: "#fff", display: "flex", flexDirection: "column" }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.3rem", margin: 0 }}>Informações de Contato</h3>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", marginTop: 8, marginBottom: 28, lineHeight: 1.6 }}>
              Prefere falar diretamente? Aqui estão todos os nossos canais.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
              {[
                {
                  icon: "📞", label: "WhatsApp",
                  main: <a href="tel:+5591992503317" style={{ color: "#fff", textDecoration: "none" }}>+55 91 99250-3317</a>,
                  sub: "Atendimento preferencial"
                },
                {
                  icon: "✉", label: "E-mail",
                  main: <a href="mailto:contate.ilambiental@gmail.com" style={{ color: "#fff", textDecoration: "none" }}>contate.ilambiental@gmail.com</a>,
                  sub: null
                },
                {
                  icon: "📍", label: "Localização",
                  main: <span>Belém, Pará, Brasil</span>,
                  sub: "Atendemos em todo o estado do Pará"
                },
                {
                  icon: "🕐", label: "Horário",
                  main: <span>Segunda a sexta-feira, das 08h às 18h</span>,
                  sub: null
                },
              ].map((info, i, arr) => (
                <div key={i} style={{ display: "flex", gap: 14, paddingBottom: i < arr.length - 1 ? 20 : 0, borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none" }}>
                  <span style={{ fontSize: "1.1rem", flexShrink: 0, marginTop: 1 }}>{info.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.45)", fontWeight: 600, marginBottom: 4 }}>{info.label}</div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 500 }}>{info.main}</div>
                    {info.sub && <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", marginTop: 2 }}>{info.sub}</div>}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/5591992503317?text=Olá! Gostaria de saber mais sobre os serviços da IL Ambiental."
              target="_blank" rel="noopener noreferrer"
              style={{ background: "transparent", border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff", padding: "12px", borderRadius: 6, width: "100%", fontWeight: 500, cursor: "pointer", display: "block", textAlign: "center", fontFamily: "'Poppins', sans-serif", textDecoration: "none", marginTop: 28 }}
            >
              Abrir WhatsApp agora
            </a>
          </div>

        </div>
      </section>

      {/* REGIONAL CARD */}
      <section style={{ maxWidth: 900, margin: "20px auto 0", padding: "0 24px" }}>
        <div style={{ background: "#0d1a0f", borderRadius: 16, padding: "48px clamp(28px, 5vw, 56px)", display: "flex", flexWrap: "wrap", gap: 40, alignItems: "center" }}>
          <div style={{ flex: "1 1 280px" }}>
            <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#4CAF82", fontWeight: 600, display: "block", marginBottom: 10 }}>Atuação regional</span>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#fff", fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
              Atendemos empresas em todo o estado do Pará
            </h2>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginTop: 14, maxWidth: 400, marginBottom: 0 }}>
              Da capital Belém ao interior, estamos presentes onde sua empresa precisa de suporte ambiental. Conhecemos o contexto regulatório local, as exigências da SEMAS-PA e os prazos do IBAMA regional.
            </p>
          </div>
          <div style={{ flex: "1 1 160px", textAlign: "center" }}>
            <div style={{ fontSize: "4rem", lineHeight: 1 }}>🌿</div>
            <div style={{ color: "#4CAF82", fontWeight: 700, fontSize: "1.1rem", marginTop: 8 }}>Pará</div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", marginTop: 4 }}>+40 municípios atendidos</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "72px 24px 60px", background: "#fff", marginTop: 20 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#2D6A4F", fontWeight: 600, display: "block", marginBottom: 8 }}>Dúvidas frequentes</span>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#1A1A1A", margin: 0 }}>Perguntas que recebemos com frequência</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, maxWidth: 960, margin: "0 auto" }}>
          {[
            { q: "Quanto tempo leva um licenciamento ambiental?", a: "Depende do tipo de licença e do órgão. Em média, o processo varia de 30 a 180 dias. Com documentação correta e acompanhamento especializado, evitamos atrasos." },
            { q: "Minha empresa pode ser multada sem licença?", a: "Sim. Empresas sem licença ambiental estão sujeitas a multas de R$ 500 a R$ 10 milhões, além de embargo e paralisação. A regularização protege sua operação." },
            { q: "Vocês atendem fora de Belém?", a: "Sim, atendemos empresas em todo o estado do Pará. O atendimento pode ser presencial ou remoto, dependendo da complexidade do projeto." },
            { q: "O que é ESG e por que minha empresa precisa?", a: "ESG é um conjunto de práticas ambientais, sociais e de governança que grandes empresas e investidores exigem dos seus parceiros. A IL estrutura sua empresa para atender essas exigências." },
            { q: "Quais documentos preciso para iniciar o licenciamento?", a: "Em geral: contrato social, matrícula do imóvel, projeto de implantação e documentos do responsável técnico. Nossa equipe avalia seu caso gratuitamente." },
            { q: "Como funciona a avaliação gratuita?", a: "Você entra em contato pelo formulário ou WhatsApp. Nossa equipe analisa sua situação e retorna em até 24h com uma orientação inicial, sem compromisso e sem custo." },
          ].map((faq, i) => (
            <div key={i} className="hover-card" style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 12, padding: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <h3 style={{ fontWeight: 700, color: "#1A1A1A", fontSize: "0.95rem", margin: 0 }}>{faq.q}</h3>
              <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.65, marginTop: 8, marginBottom: 0 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
