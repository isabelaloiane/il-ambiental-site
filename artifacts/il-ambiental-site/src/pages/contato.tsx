import { useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Contato() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh" }}>
      <Navbar />

      {/* HERO */}
      <section className="contact-hero-section" style={{
        height: 320,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "80px 24px",
        background: "linear-gradient(to bottom, rgba(26,15,8,0.55) 0%, rgba(26,15,8,0.72) 100%), radial-gradient(ellipse at 60% 50%, rgba(115,65,32,0.35) 0%, transparent 65%), linear-gradient(135deg, #2e1a0e 0%, #1a0f08 100%)"
      }}>
        <div style={{ maxWidth: 640, textAlign: "center" }}>
          <h1 className="fade-1" style={{ fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#DFC49F", lineHeight: 1.15, margin: 0 }}>
            Fale com quem entende de licenciamento no Pará.
          </h1>
          <p className="fade-2" style={{ fontSize: "1.05rem", color: "rgba(223,196,159,0.75)", maxWidth: 500, margin: "16px auto 0", lineHeight: 1.7 }}>
            Tire suas dúvidas, peça um orçamento ou solicite uma avaliação gratuita. Respondemos em até 24 horas.
          </p>
        </div>
      </section>

      {/* FLOATING ACTION CARD */}
      <section style={{ padding: "0 24px" }}>
        <div className="contact-float-card" style={{
          maxWidth: 720, margin: "-64px auto 0", position: "relative", zIndex: 10,
          background: "#fff", borderRadius: 16, boxShadow: "0 16px 48px rgba(69,40,22,0.14)",
          padding: "48px 40px", textAlign: "center"
        }}>
          <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#B5895E", fontWeight: 600, display: "block", marginBottom: 8 }}>Fale Conosco</span>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", color: "#2C1A0E", margin: 0 }}>Como prefere entrar em contato?</h2>
          <p style={{ fontSize: "0.95rem", color: "#8C7B6B", maxWidth: 480, margin: "10px auto 0", lineHeight: 1.65 }}>
            Escolha a opção mais cômoda. Nossa equipe está pronta para responder: seja por formulário, e-mail ou WhatsApp.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 24, flexWrap: "wrap" }}>
            <button className="btn-primary">Enviar mensagem</button>
            <a
              href="https://wa.me/5591992503317?text=Olá! Gostaria de saber mais sobre os serviços da IL Ambiental."
              target="_blank" rel="noopener noreferrer"
              style={{ background: "#fff", border: "1.5px solid rgba(181,137,94,0.4)", color: "#2C1A0E", padding: "14px 28px", borderRadius: 8, fontWeight: 500, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Poppins', sans-serif", fontSize: "1rem", textDecoration: "none" }}
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
          <div style={{ background: "#452816", borderRadius: 16, padding: 36, color: "#DFC49F" }}>
            {!submitted ? (
              <>
                <h3 style={{ fontWeight: 700, fontSize: "1.3rem", margin: 0, color: "#DFC49F" }}>Envie uma mensagem</h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(223,196,159,0.7)", marginTop: 8, lineHeight: 1.6, marginBottom: 24 }}>
                  Preencha o formulário e nossa equipe responderá em até 24 horas.
                </p>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { label: "Nome completo", type: "text", required: true },
                    { label: "Empresa", type: "text", required: false },
                    { label: "Telefone / WhatsApp", type: "tel", required: true },
                  ].map((field, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <label style={{ fontSize: "0.78rem", color: "rgba(223,196,159,0.65)", fontWeight: 500 }}>{field.label}</label>
                      <input required={field.required} type={field.type} style={{
                        background: "rgba(255,255,255,0.06)", border: "1px solid rgba(223,196,159,0.25)",
                        color: "#DFC49F", borderRadius: 8, padding: "11px 14px", fontSize: "0.9rem",
                        outline: "none", fontFamily: "'Poppins', sans-serif", width: "100%"
                      }} />
                    </div>
                  ))}
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: "0.78rem", color: "rgba(223,196,159,0.65)", fontWeight: 500 }}>Conte brevemente sua necessidade</label>
                    <textarea required rows={4} style={{
                      background: "rgba(255,255,255,0.06)", border: "1px solid rgba(223,196,159,0.25)",
                      color: "#DFC49F", borderRadius: 8, padding: "11px 14px", fontSize: "0.9rem",
                      outline: "none", fontFamily: "'Poppins', sans-serif", width: "100%", resize: "vertical"
                    }} />
                  </div>
                  <button type="submit" style={{
                    background: "#DFC49F", color: "#452816", fontWeight: 700, padding: 14,
                    borderRadius: 8, width: "100%", cursor: "pointer", border: "none",
                    fontFamily: "'Poppins', sans-serif", fontSize: "0.95rem", marginTop: 4
                  }}>
                    Enviar e receber retorno em 24h
                  </button>
                </form>
              </>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", minHeight: 300 }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>✓</div>
                <h3 style={{ fontWeight: 700, fontSize: "1.3rem", margin: 0, color: "#DFC49F" }}>Mensagem enviada!</h3>
                <p style={{ color: "rgba(223,196,159,0.7)", fontSize: "0.9rem", marginTop: 8 }}>Nossa equipe responderá em até 24 horas.</p>
              </div>
            )}
          </div>

          {/* Info Card */}
          <div style={{ background: "#452816", borderRadius: 16, padding: 36, color: "#DFC49F", display: "flex", flexDirection: "column" }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.3rem", margin: 0, color: "#DFC49F" }}>Informações de Contato</h3>
            <p style={{ fontSize: "0.9rem", color: "rgba(223,196,159,0.7)", marginTop: 8, marginBottom: 28, lineHeight: 1.6 }}>
              Prefere falar diretamente? Aqui estão todos os nossos canais.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, flex: 1 }}>
              {[
                {
                  icon: "📞", label: "WhatsApp",
                  main: <a href="tel:+5591992503317" style={{ color: "#DFC49F", textDecoration: "none" }}>+55 91 99250-3317</a>,
                  sub: "Atendimento preferencial"
                },
                {
                  icon: "✉", label: "E-mail",
                  main: <a href="mailto:contate.ilambiental@gmail.com" style={{ color: "#DFC49F", textDecoration: "none" }}>contate.ilambiental@gmail.com</a>,
                  sub: null
                },
                {
                  icon: "📍", label: "Localização",
                  main: <span>Belém, Pará, Brasil</span>,
                  sub: "Belém, PA. Atendimento em todo o estado"
                },
                {
                  icon: "🕐", label: "Horário",
                  main: <span>Segunda a sexta-feira, das 08h às 18h</span>,
                  sub: null
                },
              ].map((info, i, arr) => (
                <div key={i} style={{ display: "flex", gap: 14, paddingBottom: i < arr.length - 1 ? 20 : 0, borderBottom: i < arr.length - 1 ? "1px solid rgba(223,196,159,0.12)" : "none" }}>
                  <span style={{ fontSize: "1.1rem", flexShrink: 0, marginTop: 1 }}>{info.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(223,196,159,0.45)", fontWeight: 600, marginBottom: 4 }}>{info.label}</div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 500 }}>{info.main}</div>
                    {info.sub && <div style={{ fontSize: "0.78rem", color: "rgba(223,196,159,0.5)", marginTop: 2 }}>{info.sub}</div>}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/5591992503317?text=Olá! Gostaria de saber mais sobre os serviços da IL Ambiental."
              target="_blank" rel="noopener noreferrer"
              style={{ background: "transparent", border: "1.5px solid rgba(223,196,159,0.3)", color: "#DFC49F", padding: "12px", borderRadius: 8, width: "100%", fontWeight: 500, cursor: "pointer", display: "block", textAlign: "center", fontFamily: "'Poppins', sans-serif", textDecoration: "none", marginTop: 28 }}
            >
              Abrir WhatsApp agora
            </a>
          </div>

        </div>
      </section>

      {/* REGIONAL CARD */}
      <section style={{ maxWidth: 900, margin: "20px auto 0", padding: "0 24px" }}>
        <div style={{ background: "#452816", borderRadius: 16, padding: "48px clamp(28px, 5vw, 56px)", display: "flex", flexWrap: "wrap", gap: 40, alignItems: "center" }}>
          <div style={{ flex: "1 1 280px" }}>
            <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#B5895E", fontWeight: 600, display: "block", marginBottom: 10 }}>Atuação regional</span>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#DFC49F", fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
              Da capital ao interior: presença em todo o Pará
            </h2>
            <p style={{ fontSize: "0.95rem", color: "rgba(223,196,159,0.7)", lineHeight: 1.7, marginTop: 14, maxWidth: 400, marginBottom: 0 }}>
              Atendemos empresas em mais de 40 municípios do Pará. Conhecemos o contexto regulatório de cada região, da zona metropolitana de Belém aos polos industriais e agropecuários do interior.
            </p>
          </div>
          <div style={{ flex: "1 1 160px", textAlign: "center" }}>
            <div style={{ fontSize: "4rem", lineHeight: 1 }}>🌿</div>
            <div style={{ color: "#DFC49F", fontWeight: 700, fontSize: "1.1rem", marginTop: 8 }}>Pará</div>
            <div style={{ color: "rgba(223,196,159,0.5)", fontSize: "0.8rem", marginTop: 4 }}>+40 municípios atendidos</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "72px 24px 60px", background: "#F5F0E8", marginTop: 20 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#B5895E", fontWeight: 600, display: "block", marginBottom: 8 }}>Dúvidas frequentes</span>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#2C1A0E", margin: 0 }}>Perguntas que recebemos com frequência</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 720, margin: "0 auto" }}>
          {[
            { q: "Quanto tempo leva um licenciamento ambiental?", a: "O prazo varia conforme o tipo de licença, o órgão ambiental responsável e a complexidade do empreendimento. Com a documentação correta desde o início, é possível evitar atrasos e retrabalhos. Nossa equipe orienta cada caso de forma personalizada para garantir o andamento mais ágil possível." },
            { q: "Minha empresa pode ser multada sem licença?", a: "Sim. Empresas sem licença ambiental estão sujeitas a multas de até R$ 50 milhões, embargo e paralisação imediata das atividades. A regularização preventiva é sempre mais barata que a correção." },
            { q: "Vocês atendem fora de Belém?", a: "Sim. Atendemos em todo o estado do Pará, de forma presencial ou remota, dependendo da necessidade do projeto." },
            { q: "O que é ESG e por que minha empresa precisa?", a: "ESG (Environmental, Social and Governance) é um conjunto de práticas que grandes empresas e investidores exigem dos seus fornecedores e parceiros. A IL ajuda sua empresa a se adequar." },
            { q: "Quais documentos preciso para iniciar o licenciamento?", a: "Em geral: contrato social, matrícula do imóvel, projeto de implantação e documentos do responsável técnico. Nossa equipe avalia seu caso e orienta sobre tudo que é necessário." },
            { q: "Como funciona a avaliação gratuita?", a: "Você entra em contato pelo formulário ou WhatsApp, descreve sua situação e nossa equipe retorna em até 24h com uma orientação técnica inicial, sem custo e sem compromisso." },
          ].map((faq, i) => (
            <div key={i} className="faq-accordion-item animate-on-scroll">
              <button
                className="faq-accordion-trigger"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                {faq.q}
                <span className={`faq-accordion-arrow${openFaq === i ? " open" : ""}`}>▼</span>
              </button>
              <div className={`faq-accordion-body${openFaq === i ? " open" : ""}`}>
                <div className="faq-accordion-body-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-section" style={{ background: "#452816", padding: "72px 24px", textAlign: "center" }}>
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#DFC49F", margin: 0 }}>
          Sua empresa está regularizada?
        </h2>
        <p style={{ color: "rgba(223,196,159,0.68)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 560, margin: "16px auto 0" }}>
          Se a resposta não é "sim com certeza", fale com a IL. Avaliamos sua situação gratuitamente em até 24 horas.
        </p>
        <Link href="/contato" className="btn-light" style={{ marginTop: 32, display: "inline-flex" }}>
          Solicitar avaliação gratuita →
        </Link>
        <p style={{ fontSize: "0.78rem", color: "rgba(223,196,159,0.4)", marginTop: 14 }}>Sem compromisso. Resposta em até 24 horas.</p>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
