import React from 'react';
import { Leaf, FileText, Zap, Users, BarChart3, Scale, Heart, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <style>{`
        @keyframes fadeUpIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .about-h1    { animation: fadeUpIn 0.6s ease-out both; }
        .about-sub   { animation: fadeUpIn 0.6s ease-out 0.15s both; }
        .about-cta   { animation: fadeUpIn 0.6s ease-out 0.28s both; }
        .about-card  { transition: box-shadow 250ms ease, transform 250ms ease; }
        .about-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.11); transform: translateY(-3px); }
        .about-hero-cta { transition: background 200ms ease; }
        .about-hero-cta:hover { background: rgb(235,235,235) !important; }
        .about-final-cta { transition: background 200ms ease; }
        .about-final-cta:hover { background: rgba(240,240,240,1) !important; }
        
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .diff-grid-top { grid-template-columns: 1fr !important; }
          .diff-grid-bottom { grid-template-columns: 1fr !important; }
          .mission-vision-grid { grid-template-columns: 1fr !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* SECTION 1 — Hero */}
      <section style={{ minHeight: '380px', background: '#1a3322', display: 'flex', alignItems: 'center', padding: '80px 0' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)', width: '100%' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '48px', alignItems: 'center' }}>
            
            {/* Left Column */}
            <div>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.55)', fontWeight: 500, marginBottom: '16px' }}>
                Quem Somos
              </div>
              <h1 className="about-h1 font-['Playfair_Display']" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, color: 'white', lineHeight: 1.1, maxWidth: '540px', margin: 0 }}>
                Rigor técnico. Atendimento humano. Resultado garantido.
              </h1>
              <p className="about-sub" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, maxWidth: '440px', marginTop: '18px', marginBottom: 0 }}>
                A consultoria ambiental que nasceu no Pará — e conhece o Pará como ninguém.
              </p>
              <button className="about-hero-cta about-cta" style={{ background: 'white', color: '#1a3322', padding: '12px 28px', borderRadius: '6px', fontWeight: 600, fontSize: '0.9rem', border: 'none', cursor: 'pointer', marginTop: '28px', display: 'inline-block' }}>
                Conheça nossa história
              </button>
            </div>

            {/* Right Column */}
            <div style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Leaf size={48} color="white" style={{ display: 'block', margin: '0 auto 8px' }} />
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: 'center' }}>
                  Est. 2020
                </div>
                <hr style={{ width: '100%', border: 'none', borderTop: '1px solid rgba(255,255,255,0.12)', margin: '16px 0' }} />
                <div style={{ width: '100%' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center', marginBottom: '14px' }}>
                    <MapPin size={16} color="rgba(255,255,255,0.55)" />
                    <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>Belém, Pará</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center', marginBottom: '14px' }}>
                    <Leaf size={16} color="rgba(255,255,255,0.55)" />
                    <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>Licenciamento & ESG</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center', marginBottom: '0' }}>
                    <ShieldCheck size={16} color="rgba(255,255,255,0.55)" />
                    <span style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>SEMAS-PA · IBAMA</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — Intro */}
      <section style={{ background: 'white', maxWidth: '720px', margin: '0 auto', padding: '80px 24px 40px', textAlign: 'left' }}>
        <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#2D6A4F', fontWeight: 600, marginBottom: '14px' }}>
          Nossa História
        </div>
        <h2 className="font-['Playfair_Display']" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#1A1A1A', lineHeight: 1.2, marginBottom: '28px', marginTop: 0 }}>
          A IL nasceu no Pará com uma missão clara.
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#6B7280', lineHeight: 1.8, marginBottom: '20px', marginTop: 0 }}>
          A IL nasceu no Pará com uma missão clara: tornar a conformidade ambiental acessível, ágil e sem burocracia desnecessária para empresas de todos os portes. Combinamos expertise em licenciamento, gestão ambiental e relatórios técnicos com um atendimento que entende as particularidades de cada empreendimento — porque cada empresa tem uma história e um processo próprio.
        </p>
        <p style={{ fontSize: '1.05rem', color: '#6B7280', lineHeight: 1.8, marginBottom: 0, marginTop: 0 }}>
          Com foco no estado do Pará, a IL conhece em profundidade o contexto regulatório local: as exigências da SEMAS-PA, os prazos do IBAMA e as especificidades de cada setor produtivo na região. Isso significa menos erros, mais agilidade e um caminho mais curto até a sua licença.
        </p>
        <hr style={{ maxWidth: '120px', margin: '48px auto 0', border: 'none', borderTop: '1px solid #E5E7EB' }} />
      </section>

      {/* SECTION 3 — Differentials Grid */}
      <section style={{ background: 'white', padding: '48px 24px 80px', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#2D6A4F', fontWeight: 600 }}>
            Por que a IL
          </div>
          <h2 className="font-['Playfair_Display']" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#1A1A1A', marginTop: '8px', marginBottom: 0 }}>
            O que nos diferencia
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#6B7280', marginTop: '10px', marginBottom: '32px' }}>
            Consultoria ambiental com expertise local, rigor técnico e compromisso real com cada cliente.
          </p>
        </div>

        <div className="diff-grid-top" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '20px' }}>
          
          {/* LEFT: Featured Card */}
          <div className="about-card" style={{ background: '#F3F7F4', borderRadius: '16px', padding: '40px', minHeight: '280px', display: 'flex', flexDirection: 'column' }}>
            <Leaf size={48} color="#2D6A4F" style={{ marginBottom: '16px' }} />
            <h3 className="font-['Playfair_Display']" style={{ fontSize: '1.3rem', fontWeight: 800, color: '#1A1A1A', margin: 0 }}>
              Especialização Regional
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.65, marginTop: '10px', marginBottom: 0 }}>
              Conhecemos as exigências da SEMAS-PA e do IBAMA regional em profundidade. Isso significa menos atrasos, menos erros e um processo mais ágil para sua empresa.
            </p>
            <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
              <span style={{ display: 'inline-flex', background: 'rgba(45,106,79,0.1)', color: '#2D6A4F', padding: '4px 12px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 500 }}>
                📍 Atuação em todo o Pará
              </span>
            </div>
          </div>

          {/* RIGHT side: Flex column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Small Card 1 */}
            <div className="about-card" style={{ background: '#1a3322', borderRadius: '16px', padding: '28px', color: 'white' }}>
              <FileText size={28} color="rgba(255,255,255,0.8)" style={{ marginBottom: '10px' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'white', margin: 0 }}>
                Conformidade Garantida
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginTop: '8px', marginBottom: 0 }}>
                Acompanhamos cada etapa do processo para que sua empresa opere dentro da lei — sem surpresas.
              </p>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', marginTop: '12px' }}>
                LP · LI · LO · LAR
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="about-card" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '28px' }}>
              <Zap size={28} color="#2D6A4F" style={{ marginBottom: '10px' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1A1A', margin: 0 }}>
                Agilidade no Processo
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#6B7280', lineHeight: 1.6, marginTop: '8px', marginBottom: 0 }}>
                Documentação correta desde o início = menos idas e vindas ao órgão ambiental.
              </p>
              <div style={{ marginTop: '12px' }}>
                <span style={{ display: 'inline-flex', background: 'rgba(45,106,79,0.1)', color: '#2D6A4F', padding: '4px 12px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: 500 }}>
                  Resposta em 24h
                </span>
              </div>
            </div>
            
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="diff-grid-bottom" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
          
          {/* Card 3 */}
          <div className="about-card" style={{ background: '#F3F7F4', borderRadius: '16px', padding: '32px' }}>
            <Users size={36} color="#2D6A4F" />
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1A1A', marginTop: '14px', marginBottom: 0 }}>
              Atendimento Personalizado
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.65, marginTop: '10px', marginBottom: 0 }}>
              Cada cliente tem uma realidade diferente. Nós estudamos seu empreendimento antes de propor qualquer solução.
            </p>
          </div>

          {/* Card 4 */}
          <div className="about-card" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '32px' }}>
            <BarChart3 size={36} color="#2D6A4F" />
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1A1A', marginTop: '14px', marginBottom: 0 }}>
              Rigor Técnico
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.65, marginTop: '10px', marginBottom: 0 }}>
              Laudos, relatórios e estudos elaborados com metodologia rigorosa — para atender qualquer exigência dos órgãos fiscalizadores.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 4 — Mission & Vision Cards */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div className="mission-vision-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignItems: 'stretch' }}>
          
          {/* Card Missão */}
          <div style={{ background: '#1a3322', borderRadius: '16px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10px', left: '16px', fontSize: '120px', color: 'rgba(255,255,255,0.06)', fontFamily: 'serif', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
              ❝
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
                Nossa Missão
              </div>
              <p style={{ fontSize: '1.05rem', color: 'white', lineHeight: 1.75, marginTop: '16px', marginBottom: 0 }}>
                Garantir que empresas de todos os portes operem em conformidade ambiental com eficiência, segurança e tranquilidade — eliminando a burocracia e conduzindo cada cliente a um caminho sólido e sustentável.
              </p>
            </div>
          </div>

          {/* Card Visão */}
          <div style={{ background: '#F3F7F4', borderRadius: '16px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-10px', left: '16px', fontSize: '120px', color: 'rgba(45,106,79,0.12)', fontFamily: 'serif', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
              ❝
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#2D6A4F', fontWeight: 600 }}>
                Nossa Visão
              </div>
              <p style={{ fontSize: '1.05rem', color: '#1A1A1A', lineHeight: 1.75, marginTop: '16px', marginBottom: 0 }}>
                Ser a referência em consultoria ambiental no Pará, tornando o conhecimento ambiental acessível e presente no dia a dia das empresas e da sociedade.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5 — Values */}
      <section style={{ background: 'white', padding: '0 24px 80px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#2D6A4F', fontWeight: 600, textAlign: 'center' }}>
            Nossos Valores
          </div>
          <h2 className="font-['Playfair_Display']" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 800, color: '#1A1A1A', textAlign: 'center', marginTop: '10px', marginBottom: '40px' }}>
            O que guia cada decisão que tomamos
          </h2>
        </div>

        <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Value 1 */}
          <div className="about-card" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '32px' }}>
            <div style={{ width: '48px', height: '48px', background: 'rgba(45,106,79,0.1)', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Scale size={24} color="#2D6A4F" />
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1A1A1A', marginTop: '18px', marginBottom: 0 }}>
              Rigor Técnico
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.65, marginTop: '10px', marginBottom: 0 }}>
              Cada laudo, relatório e estudo é elaborado com precisão e fundamentação. Entregamos documentação que resiste a qualquer auditoria ou questionamento.
            </p>
          </div>

          {/* Value 2 */}
          <div className="about-card" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '32px' }}>
            <div style={{ width: '48px', height: '48px', background: 'rgba(45,106,79,0.1)', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Heart size={24} color="#2D6A4F" />
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1A1A1A', marginTop: '18px', marginBottom: 0 }}>
              Atendimento Humano
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.65, marginTop: '10px', marginBottom: 0 }}>
              Sabemos que processos ambientais geram ansiedade. Por isso, mantemos comunicação clara, transparente e próxima em cada etapa.
            </p>
          </div>

          {/* Value 3 */}
          <div className="about-card" style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '32px' }}>
            <div style={{ width: '48px', height: '48px', background: 'rgba(45,106,79,0.1)', borderRadius: '99px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Leaf size={24} color="#2D6A4F" />
            </div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1A1A1A', marginTop: '18px', marginBottom: 0 }}>
              Compromisso Ambiental
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: 1.65, marginTop: '10px', marginBottom: 0 }}>
              Não somos apenas consultores de conformidade — acreditamos no desenvolvimento sustentável como responsabilidade de todos.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 6 — Final CTA */}
      <section style={{ width: '100%', background: '#0d1a0f', padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{
          position: 'absolute', right: '-80px', top: '50%', transform: 'translateY(-50%)',
          width: 400, height: 400, borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
          background: 'rgba(45,106,79,0.12)', pointerEvents: 'none'
        }} />
        
        <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 className="font-['Playfair_Display']" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'white', fontWeight: 800, lineHeight: 1.15, margin: 0 }}>
            Pronta para garantir sua conformidade ambiental?
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.68)', lineHeight: 1.7, marginTop: '16px', marginBottom: 0 }}>
            Fale com a IL Ambiental e descubra como podemos simplificar seu processo — do licenciamento à gestão completa.
          </p>
          <button className="about-final-cta" aria-label="Fale com um especialista da IL Ambiental" style={{ background: 'white', color: '#0d1a0f', padding: '14px 36px', borderRadius: '6px', fontWeight: 700, border: 'none', cursor: 'pointer', marginTop: '32px' }}>
            Fale com um especialista
          </button>
          <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', marginTop: '14px', display: 'block' }}>
            Sem compromisso. Resposta em até 24 horas.
          </span>
        </div>
      </section>

    </div>
  );
}
