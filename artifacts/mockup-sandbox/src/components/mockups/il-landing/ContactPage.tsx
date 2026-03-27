import React, { useState } from "react";
import { MessageSquare, Phone, Mail, MapPin, Clock, ChevronRight, Check, AlertCircle } from "lucide-react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <style>{`
        @keyframes fadeUpIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .contact-h1   { animation: fadeUpIn 0.6s ease-out both; }
        .contact-sub  { animation: fadeUpIn 0.6s ease-out 0.15s both; }
        .contact-cta-dark:hover    { filter: brightness(1.12); }
        .contact-cta-outline:hover { border-color: #2D6A4F !important; color: #2D6A4F !important; }
        .contact-input:focus { border-color: rgba(255,255,255,0.6) !important; outline: none; }
        .contact-submit:hover { background: rgba(255,255,255,0.88) !important; }
        .contact-wa-btn:hover  { border-color: rgba(255,255,255,1) !important; background: rgba(255,255,255,0.06) !important; }
        .faq-card { transition: box-shadow 250ms ease, transform 250ms ease; }
        .faq-card:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.08); transform: translateY(-2px); }
        .contact-cta-dark { transition: filter 200ms ease; }
        .contact-cta-outline { transition: border-color 200ms ease, color 200ms ease; }
      `}</style>

      {/* SECTION 1 — Hero */}
      <section
        style={{
          width: '100%',
          height: '340px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 24px',
          background: `
            linear-gradient(to bottom, rgba(10, 22, 14, 0.55) 0%, rgba(10, 22, 14, 0.72) 100%),
            radial-gradient(ellipse at 60% 50%, rgba(45, 106, 79, 0.35) 0%, transparent 65%),
            linear-gradient(135deg, #1a2e1c 0%, #0d1a0f 100%)
          `
        }}
      >
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <h1 
            className="contact-h1 font-['Playfair_Display']"
            style={{ fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', lineHeight: 1.15, margin: 0 }}
          >
            Resolva sua situação ambiental. Fale com a gente.
          </h1>
          <p 
            className="contact-sub"
            style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', maxWidth: '500px', margin: '16px auto 0', lineHeight: 1.7 }}
          >
            Nossa equipe responde em até 24 horas. Tire suas dúvidas ou solicite uma proposta sem compromisso.
          </p>
        </div>
      </section>

      {/* SECTION 2 — Quick Action Card */}
      <section style={{ width: '100%', padding: '0 24px' }}>
        <div style={{
          maxWidth: '720px',
          margin: '-64px auto 0',
          position: 'relative',
          zIndex: 10,
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
          padding: '56px 40px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#2D6A4F', fontWeight: 600 }}>
            Fale Conosco
          </div>
          <h2 className="font-['Playfair_Display']" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#1A1A1A', marginTop: '8px' }}>
            Como prefere entrar em contato?
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#6B7280', maxWidth: '480px', margin: '12px auto 0', lineHeight: 1.65 }}>
            Escolha a opção mais cômoda. Nossa equipe está pronta para responder — seja por formulário, e-mail ou WhatsApp.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginTop: '28px', flexWrap: 'wrap' }}>
            <button 
              className="contact-cta-dark"
              style={{ background: '#1a2e1c', color: 'white', padding: '13px 32px', borderRadius: '6px', fontWeight: 600, border: 'none', cursor: 'pointer' }}
              onClick={() => {
                document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Enviar mensagem
            </button>
            <button 
              className="contact-cta-outline"
              style={{ background: 'white', border: '1.5px solid #E5E7EB', color: '#1A1A1A', padding: '13px 32px', borderRadius: '6px', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
              onClick={() => window.open('https://wa.me/5591900000000?text=Olá! Gostaria de saber mais sobre os serviços da IL Ambiental.', '_blank')}
            >
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4" cy="4" r="4" fill="#25D366"/>
              </svg>
              Fale pelo WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Contact Method Cards */}
      <section id="contact-form-section" style={{ maxWidth: '900px', margin: '48px auto 0', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
          
          {/* Card 1 — Contact Form */}
          <div style={{ background: '#1a2e1c', borderRadius: '16px', padding: '36px', color: 'white' }}>
            {!submitted ? (
              <>
                <h3 className="font-['Playfair_Display']" style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>
                  Envie uma mensagem
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginTop: '8px', lineHeight: 1.6, marginBottom: '24px' }}>
                  Preencha o formulário e nossa equipe responderá em até 24 horas com uma análise inicial da sua situação.
                </p>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>Nome completo</label>
                    <input required type="text" className="contact-input" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '6px', padding: '12px 16px', fontSize: '0.95rem', width: '100%' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>Empresa</label>
                    <input type="text" className="contact-input" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '6px', padding: '12px 16px', fontSize: '0.95rem', width: '100%' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>Telefone / WhatsApp</label>
                    <input required type="tel" className="contact-input" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '6px', padding: '12px 16px', fontSize: '0.95rem', width: '100%' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>Como podemos ajudar?</label>
                    <textarea required rows={4} className="contact-input" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '6px', padding: '12px 16px', fontSize: '0.95rem', width: '100%', resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="contact-submit" style={{ background: 'white', color: '#1a2e1c', fontWeight: 700, padding: '14px', borderRadius: '6px', width: '100%', marginTop: '8px', cursor: 'pointer', border: 'none', transition: 'background 200ms ease' }}>
                    Enviar mensagem
                  </button>
                </form>
              </>
            ) : (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '300px' }}>
                <div style={{ width: '40px', height: '40px', background: 'rgba(45, 106, 79, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <Check color="#4CAF82" size={20} />
                </div>
                <h3 className="font-['Playfair_Display']" style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0 }}>
                  ✓ Mensagem enviada!
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '8px' }}>
                  Nossa equipe responderá em até 24 horas.
                </p>
              </div>
            )}
          </div>

          {/* Card 2 — Contact Info */}
          <div style={{ background: '#1a2e1c', borderRadius: '16px', padding: '36px', color: 'white', display: 'flex', flexDirection: 'column' }}>
            <h3 className="font-['Playfair_Display']" style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>
              Informações de Contato
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', marginTop: '8px', lineHeight: 1.6, marginBottom: '32px' }}>
              Prefere falar diretamente? Aqui estão todos os nossos canais.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Block 1 */}
              <div style={{ paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '16px' }}>
                <Phone size={18} color="rgba(255,255,255,0.6)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>WhatsApp</div>
                  <div style={{ fontSize: '0.95rem', color: 'white', fontWeight: 500, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    (91) 9 9999-9999
                    <span style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', padding: '2px 8px', borderRadius: '99px', fontSize: '0.7rem' }}>Atendimento preferencial</span>
                  </div>
                </div>
              </div>

              {/* Block 2 */}
              <div style={{ paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '16px' }}>
                <Mail size={18} color="rgba(255,255,255,0.6)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>E-mail</div>
                  <div style={{ fontSize: '0.95rem', color: 'white', fontWeight: 500, marginTop: '4px' }}>
                    contato@ilambiental.com.br
                  </div>
                </div>
              </div>

              {/* Block 3 */}
              <div style={{ paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '16px' }}>
                <MapPin size={18} color="rgba(255,255,255,0.6)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>Localização</div>
                  <div style={{ fontSize: '0.95rem', color: 'white', fontWeight: 500, marginTop: '4px' }}>
                    Belém, Pará — Brasil
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', marginTop: '2px' }}>
                    Atendemos em todo o estado do Pará
                  </div>
                </div>
              </div>

              {/* Block 4 */}
              <div style={{ display: 'flex', gap: '16px' }}>
                <Clock size={18} color="rgba(255,255,255,0.6)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>Horário</div>
                  <div style={{ fontSize: '0.95rem', color: 'white', fontWeight: 500, marginTop: '4px' }}>
                    Segunda a Sexta, 8h às 18h
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', marginTop: '2px' }}>
                    Emergências ambientais: resposta prioritária
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
              <button 
                className="contact-wa-btn"
                style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.3)', color: 'white', padding: '12px 24px', borderRadius: '6px', width: '100%', fontWeight: 500, cursor: 'pointer', transition: 'border-color 200ms ease, background 200ms ease' }}
                onClick={() => window.open('https://wa.me/5591900000000?text=Olá! Gostaria de saber mais sobre os serviços da IL Ambiental.', '_blank')}
              >
                Abrir WhatsApp agora →
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4 — Wide Dark Card (Pará Regional) */}
      <section style={{ maxWidth: '900px', margin: '20px auto 0', padding: '0 24px' }}>
        <div style={{ background: '#0d1a0f', borderRadius: '16px', padding: '48px 56px', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
          
          <div style={{ flex: '1 1 300px' }}>
            <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#4CAF82', fontWeight: 600 }}>
              Atuação regional
            </div>
            <h2 className="font-['Playfair_Display']" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', color: 'white', fontWeight: 800, marginTop: '10px', lineHeight: 1.2 }}>
              Atendemos empresas em todo o estado do Pará
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginTop: '14px', maxWidth: '420px' }}>
              Da capital Belém ao interior — estamos presentes onde sua empresa precisa de suporte ambiental. Conhecemos o contexto regulatório local, as exigências da SEMAS-PA e os prazos do IBAMA regional.
            </p>
          </div>

          <div style={{ flex: '1 1 200px', display: 'flex', justifyContent: 'center' }}>
            <svg viewBox="0 0 300 280" style={{ width: '100%', maxWidth: '260px', height: 'auto' }}>
              <path
                d="M60,20 L240,10 L270,60 L260,120 L220,160 L240,200 L200,260 L140,270 L80,240 L40,200 L20,140 L30,80 Z"
                fill="rgba(45,106,79,0.15)"
                stroke="rgba(74,175,130,0.5)"
                strokeWidth="1.5"
              />
              <circle cx="200" cy="90" r="6" fill="#4CAF82" />
              <circle cx="200" cy="90" r="12" fill="#4CAF82" fillOpacity="0.2" />
              <text x="215" y="95" fill="rgba(255,255,255,0.7)" fontSize="11" fontFamily="Inter, sans-serif">Belém</text>
              <circle cx="100" cy="180" r="4" fill="rgba(74,175,130,0.6)" />
              <circle cx="160" cy="200" r="4" fill="rgba(74,175,130,0.6)" />
              <circle cx="80" cy="120" r="4" fill="rgba(74,175,130,0.6)" />
            </svg>
          </div>

        </div>
      </section>

      {/* SECTION 5 — FAQ Section */}
      <section style={{ background: 'white', paddingTop: '72px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px', marginTop: '20px' }}>
        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#2D6A4F', fontWeight: 600, textAlign: 'center' }}>
          Dúvidas frequentes
        </div>
        <h2 className="font-['Playfair_Display']" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#1A1A1A', textAlign: 'center', marginTop: '10px' }}>
          Perguntas que recebemos com frequência
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', maxWidth: '960px', margin: '40px auto 0' }}>
          {[
            {
              title: "Quanto tempo leva um licenciamento ambiental?",
              body: "Depende do tipo de licença e do órgão responsável (SEMAS-PA ou IBAMA). Em média, o processo varia de 30 a 180 dias. Com a documentação correta e acompanhamento especializado, evitamos atrasos.",
              link: "Saiba mais →"
            },
            {
              title: "Minha empresa pode ser multada sem licença?",
              body: "Sim. Empresas sem licença ambiental estão sujeitas a multas que variam de R$ 500 a R$ 10 milhões, além de embargo e paralisação das atividades. A regularização protege sua operação.",
              link: "Saiba mais →"
            },
            {
              title: "Vocês atendem fora de Belém?",
              body: "Sim, atendemos empresas em todo o estado do Pará. O atendimento pode ser presencial ou remoto, dependendo da complexidade do projeto e da localidade.",
              link: "Saiba mais →"
            },
            {
              title: "O que é ESG e por que minha empresa precisa?",
              body: "ESG é um conjunto de práticas ambientais, sociais e de governança que grandes empresas e investidores exigem dos seus parceiros. A IL estrutura sua empresa para atender essas exigências.",
              link: "Saiba mais →"
            },
            {
              title: "Quais documentos preciso para iniciar o licenciamento?",
              body: "Depende do tipo de empreendimento. Em geral: contrato social, matrícula do imóvel, projeto de implantação e documentos do responsável técnico. Nossa equipe avalia seu caso gratuitamente.",
              link: "Saiba mais →"
            },
            {
              title: "Como funciona a avaliação gratuita?",
              body: "Você entra em contato pelo formulário ou WhatsApp. Nossa equipe analisa sua situação e retorna em até 24h com uma orientação inicial — sem compromisso e sem custo.",
              link: "Fale conosco →"
            }
          ].map((faq, idx) => (
            <div key={idx} className="faq-card" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1A1A', margin: 0 }}>
                {faq.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#6B7280', lineHeight: 1.65, marginTop: '8px', marginBottom: '12px' }}>
                {faq.body}
              </p>
              <a 
                href="#contact-form-section"
                style={{ fontSize: '0.85rem', color: '#2D6A4F', fontWeight: 500, display: 'inline-block', cursor: 'pointer', textDecoration: 'none' }}
                onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                {faq.link}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6 — Footer Strip */}
      <footer style={{ background: '#0d1f14', padding: '20px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>
            © 2025 IL Ambiental. Todos os direitos reservados.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a 
              href="#" 
              style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 200ms ease' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >
              Serviços
            </a>
            <a 
              href="#" 
              style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 200ms ease' }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
            >
              Licenciamento
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
