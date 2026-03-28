import React from "react";
import { 
  Leaf, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  ShieldCheck, 
  BarChart3, 
  FileText, 
  Briefcase, 
  CheckCircle2,
  TreePine,
  Building2
} from "lucide-react";

const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full bg-[#1A4D2E] text-white shadow-md border-b border-[#2E7D52]/30">
    <div className="container mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded bg-[#D4A853] text-[#1A4D2E] font-['Comfortaa'] font-bold text-xl">
          IL
        </div>
        <div className="hidden md:flex flex-col">
          <span className="font-['Poppins'] font-bold text-lg leading-tight tracking-wide">Engenharia e</span>
          <span className="font-['Poppins'] text-xs font-medium text-[#D4A853] uppercase tracking-widest">Consultoria Ambiental</span>
        </div>
      </div>
      
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/90">
        <a href="#sobre" className="hover:text-[#D4A853] transition-colors">Sobre</a>
        <a href="#servicos" className="hover:text-[#D4A853] transition-colors">Serviços</a>
        <a href="#contato" className="hover:text-[#D4A853] transition-colors">Contato</a>
      </div>

      <button className="bg-[#D4A853] hover:bg-[#c59a45] text-[#1A3A2A] font-semibold py-2.5 px-6 rounded-sm transition-all shadow-sm hover:shadow-md text-sm">
        Fale Conosco
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section
    className="hero-animated-bg relative w-full overflow-hidden flex items-center"
    style={{
      minHeight: "90vh",
      padding: "120px 0 100px",
    }}
  >
    <style>{`
      @keyframes fadeUpIn {
        from { opacity: 0; transform: translateY(24px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes heroShift {
        0%   { background-position: 0% 50%; }
        50%  { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .hero-animated-bg {
        background:
          radial-gradient(ellipse at 20% 70%, rgba(30, 80, 40, 0.55) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 30%, rgba(15, 50, 25, 0.6) 0%, transparent 55%),
          linear-gradient(160deg, #071a0c 0%, #0f2a14 50%, #071a0c 100%);
        background-size: 200% 200%;
        animation: heroShift 12s ease-in-out infinite alternate;
      }
      .hero-headline { animation: fadeUpIn 0.7s ease-out both; }
      .hero-sub      { animation: fadeUpIn 0.7s ease-out 0.15s both; }
      .hero-ctas     { animation: fadeUpIn 0.7s ease-out 0.3s both; }
      .btn-primary-hero {
        background: #2D6A4F;
        color: #fff;
        padding: 15px 36px;
        border-radius: 4px;
        font-weight: 700;
        font-size: 1rem;
        letter-spacing: 0.01em;
        border: none;
        cursor: pointer;
        transition: filter 200ms ease, transform 200ms ease;
        white-space: nowrap;
      }
      .btn-primary-hero:hover { filter: brightness(1.12); transform: scale(1.02); }
      .btn-primary-hero:focus-visible { outline: 2px solid #5AE082; outline-offset: 3px; }
      .btn-secondary-hero {
        background: transparent;
        color: #fff;
        padding: 15px 36px;
        border-radius: 4px;
        font-weight: 500;
        font-size: 1rem;
        border: 1.5px solid rgba(255, 255, 255, 0.55);
        cursor: pointer;
        transition: border-color 200ms ease, background 200ms ease;
        white-space: nowrap;
      }
      .btn-secondary-hero:hover { border-color: #fff; background: rgba(255,255,255,0.08); }
      .btn-secondary-hero:focus-visible { outline: 2px solid #5AE082; outline-offset: 3px; }
    `}</style>

    {/* Dark overlay */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "rgba(10, 20, 12, 0.62)" }}
    />

    {/* Content */}
    <div
      className="relative z-10 w-full"
      style={{ maxWidth: "760px", paddingLeft: "clamp(24px, 8vw, 120px)" }}
    >
      <h1
        className="hero-headline font-['Poppins'] text-white"
        style={{
          fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          maxWidth: "680px",
          margin: 0,
        }}
      >
        Sua empresa em conformidade ambiental, com quem conhece o{" "}
        <span style={{ color: "#5AE082" }}>Pará</span>.
      </h1>

      <p
        className="hero-sub font-['Poppins'] text-white/[0.78]"
        style={{
          fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
          fontWeight: 400,
          maxWidth: "560px",
          lineHeight: 1.75,
          marginTop: "20px",
        }}
      >
        A IL Ambiental cuida de todo o processo de licenciamento, gestão e
        documentação ambiental para que você opere com segurança jurídica e
        eficiência, sem burocracia desnecessária.
      </p>

      <div
        className="hero-ctas flex flex-wrap items-center"
        style={{ gap: "14px", marginTop: "36px" }}
      >
        <button className="btn-primary-hero" aria-label="Fale com um especialista da IL Ambiental">
          Fale com um especialista
        </button>
        <button className="btn-secondary-hero" aria-label="Conheça os serviços da IL Ambiental">
          Conheça nossos serviços
        </button>
      </div>
    </div>
  </section>
);

const TrustBar = () => {
  const items = [
    { stat: "+30",  label: "Empresas atendidas" },
    { stat: "100%", label: "Atuação no Pará" },
    { stat: "5",    label: "Órgãos: SEMAS-PA, IBAMA, SEMMA, SESPA, INCRA" },
    { stat: "24h",  label: "Tempo de resposta" },
  ];
  return (
    <div
      className="w-full bg-white font-['Poppins']"
      style={{ borderBottom: "1px solid #E5E7EB", padding: "24px 0" }}
    >
      <div
        className="mx-auto grid"
        style={{
          maxWidth: "900px",
          gridTemplateColumns: "repeat(4, 1fr)",
          padding: "0 24px",
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center"
            style={{
              borderRight: idx < items.length - 1 ? "1px solid #E5E7EB" : "none",
              padding: "8px 16px",
            }}
          >
            <span
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#2D6A4F",
                lineHeight: 1,
              }}
            >
              {item.stat}
            </span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "#6B7280",
                fontWeight: 400,
                marginTop: "6px",
                lineHeight: 1.3,
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Licenciamento Ambiental",
      desc: "Gestão completa de processos junto aos órgãos ambientais (SEMAS-PA, IBAMA, SEMMA), garantindo agilidade na emissão de LP, LI e LO."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Gestão Ambiental",
      desc: "Implementação e operação de Sistemas de Gestão Ambiental (SGA) robustos para indústrias e grandes empreendimentos."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Consultoria Estratégica",
      desc: "Assessoria executiva para mitigação de riscos socioambientais e adequação a práticas ESG e padrões internacionais."
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      title: "Monitoramento Ambiental",
      desc: "Programas de monitoramento de fauna, flora, qualidade da água e do ar com emissão de relatórios técnicos periódicos."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Estudos de Impacto",
      desc: "Elaboração de EIA/RIMA, PCA, RCA, PRAD e demais estudos necessários para viabilidade de projetos complexos."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Conformidade Regulatória",
      desc: "Auditorias preventivas e acompanhamento contínuo de condicionantes para manutenção da regularidade das operações."
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-[#F8F5F0]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#C5714B] font-bold tracking-widest uppercase text-sm mb-3 block">Expertise Técnica</span>
          <h2 className="text-4xl lg:text-5xl font-['Poppins'] font-bold text-[#1A1A1A] mb-6">
            Soluções Integradas em <br/><span className="text-[#1A4D2E]">Meio Ambiente</span>
          </h2>
          <p className="text-[#555555] text-lg">
            Atuamos em todas as fases do empreendimento, da concepção à operação, garantindo que o desenvolvimento econômico caminhe junto com a preservação ambiental.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <div key={idx} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-[#2E7D52] group">
              <div className="w-14 h-14 bg-[#F8F5F0] group-hover:bg-[#1A4D2E] group-hover:text-white text-[#2E7D52] rounded flex items-center justify-center mb-6 transition-colors duration-300">
                {svc.icon}
              </div>
              <h3 className="text-xl font-['Poppins'] font-bold text-[#1A1A1A] mb-4 group-hover:text-[#1A4D2E] transition-colors">
                {svc.title}
              </h3>
              <p className="text-[#555555] leading-relaxed">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="sobre" className="flex flex-col lg:flex-row min-h-[80vh]">
    <div className="lg:w-1/2 bg-[#1A4D2E] text-white p-12 lg:p-24 flex items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="leaf" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0 C70 30 90 50 100 80 C80 90 60 100 50 100 C30 80 10 70 0 40 C20 30 40 10 50 0 Z" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leaf)" />
        </svg>
      </div>
      
      <div className="relative z-10 max-w-xl">
        <span className="text-[#D4A853] font-bold tracking-widest uppercase text-sm mb-3 block">Nossa História</span>
        <h2 className="text-4xl lg:text-5xl font-['Poppins'] font-bold mb-8 leading-tight">
          Autoridade Ambiental no <span className="italic text-[#4CAF82]">Coração da Amazônia</span>
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-6 font-light">
          A IL Engenharia e Consultoria Ambiental nasceu com a missão de harmonizar o desenvolvimento industrial com a vasta biodiversidade da região amazônica.
        </p>
        <p className="text-white/80 text-lg leading-relaxed font-light">
          Nossa equipe multidisciplinar de biólogos, engenheiros ambientais e florestais, e especialistas em regulação traz o rigor técnico necessário para viabilizar projetos com segurança jurídica e responsabilidade socioambiental.
        </p>
      </div>
    </div>
    
    <div className="lg:w-1/2 bg-white p-12 lg:p-24 flex items-center">
      <div className="max-w-xl">
        <h3 className="text-2xl font-['Poppins'] font-bold text-[#1A1A1A] mb-8 border-b pb-4">
          Nossos Diferenciais
        </h3>
        
        <ul className="space-y-6">
          {[
            { title: "Profundo Conhecimento Local", desc: "Expertise nas especificidades ecológicas e regulatórias dos biomas amazônicos." },
            { title: "Diálogo Técnico Institucional", desc: "Histórico de respeito e transparência junto aos órgãos fiscalizadores." },
            { title: "Gestão Integrada", desc: "Visão sistêmica que abrange desde o meio físico e biótico até o socioeconômico." },
            { title: "Foco em Resolução", desc: "Abordagem pragmática focada em destracionar processos com embasamento técnico inquestionável." }
          ].map((item, idx) => (
            <li key={idx} className="flex gap-4">
              <div className="mt-1 flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#2E7D52]" />
              </div>
              <div>
                <h4 className="font-bold text-[#1A1A1A] text-lg mb-1">{item.title}</h4>
                <p className="text-[#555555] leading-relaxed">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        
        <div className="mt-12 p-6 bg-[#F8F5F0] border-l-4 border-[#C5714B] rounded-r-sm">
          <p className="text-[#1A1A1A] font-medium italic">
            "Na IL, não enxergamos a regulação ambiental como um obstáculo, mas como o alicerce para empreendimentos duradouros e rentáveis."
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Clients = () => {
  const clients = [
    {
      name: "Tropoc",
      desc: "Multinacional atuante no beneficiamento da pimenta-do-reino",
      initials: "TR"
    },
    {
      name: "Fruta Pronta",
      desc: "Empresa de Portel, Pará, produtora de açaí em polpa",
      initials: "FP"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F8F5F0] rounded-bl-full -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-['Poppins'] font-bold text-[#1A1A1A] mb-6">
            Clientes que atendemos
          </h2>
          <p className="text-[#555555] text-lg">
            Empresas que confiam na IL Ambiental para sua gestão e conformidade ambiental.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {clients.map((client, idx) => (
            <div key={idx} className="bg-[#F8F5F0] p-10 rounded-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex gap-6 items-start">
              <div className="w-14 h-14 bg-[#1A4D2E] rounded flex-shrink-0 flex items-center justify-center text-white font-bold font-['Comfortaa'] text-lg">
                {client.initials}
              </div>
              <div>
                <h4 className="font-bold text-[#1A1A1A] text-xl mb-2 font-['Poppins']">{client.name}</h4>
                <p className="text-[#555555] text-sm leading-relaxed">{client.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RegionalPresence = () => (
  <section id="atuacao" className="py-24 bg-[#0F2B1A] text-white relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#D4A853] font-bold tracking-widest uppercase text-sm mb-3 block">Abrangência Territorial</span>
          <h2 className="text-4xl lg:text-5xl font-['Poppins'] font-bold mb-6">
            Presença no Estado do Pará
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8 font-light">
            Atuamos em projetos de alta complexidade no estado do Pará, compreendendo as dinâmicas socioambientais de cada região, desde áreas litorâneas até o denso interior amazônico.
          </p>
          
          <div className="grid grid-cols-1 gap-6 max-w-xs">
            <div className="border-t border-[#2E7D52] pt-4">
              <div className="text-3xl font-['Poppins'] font-bold text-[#D4A853]">Pará</div>
              <div className="text-white/70 text-sm mt-1">Sede em Belém, atuação em mais de 40 municípios.</div>
            </div>
          </div>
        </div>
        
        <div className="relative h-[400px] bg-[#1A4D2E]/40 rounded-xl border border-[#2E7D52] p-8 flex items-center justify-center">
           <div className="absolute inset-0 flex items-center justify-center opacity-30">
             <svg viewBox="0 0 400 400" className="w-full h-full text-white">
                <path fill="currentColor" d="M150,50 Q200,80 250,60 T350,120 Q380,180 340,240 T280,320 Q200,380 120,310 T40,200 Q20,100 150,50 Z" />
             </svg>
           </div>
           
           <div className="absolute top-[30%] left-[40%] animate-pulse">
             <MapPin className="text-[#D4A853] w-8 h-8 -mt-8 -ml-4" />
             <span className="absolute top-2 left-6 text-xs font-bold bg-[#D4A853] text-[#0F2B1A] px-2 py-0.5 rounded">Belém (Sede)</span>
           </div>
           <div className="absolute top-[50%] left-[60%] animate-pulse" style={{ animationDelay: '1s' }}>
             <MapPin className="text-white w-5 h-5 -mt-5 -ml-2.5" />
           </div>
           <div className="absolute top-[70%] left-[30%] animate-pulse" style={{ animationDelay: '0.5s' }}>
             <MapPin className="text-white w-5 h-5 -mt-5 -ml-2.5" />
           </div>
           <div className="absolute top-[20%] left-[70%] animate-pulse" style={{ animationDelay: '1.5s' }}>
             <MapPin className="text-white w-5 h-5 -mt-5 -ml-2.5" />
           </div>
        </div>
      </div>
    </div>
  </section>
);

const CTABanner = () => (
  <section className="bg-[#2E7D52] py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMkU3RDUyIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlPSIjMUE0RDJFIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
    <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
      <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold text-white mb-6">
        Pronto para regularizar seu empreendimento?
      </h2>
      <p className="text-white/90 text-xl mb-10 max-w-2xl font-light">
        Fale com nossos especialistas e descubra como podemos garantir a segurança jurídica e ambiental do seu projeto.
      </p>
      <button className="bg-[#D4A853] hover:bg-[#c59a45] text-[#1A3A2A] font-bold py-4 px-10 rounded-sm transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg flex items-center gap-3">
        Agendar Consulta Técnica <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contato" className="bg-[#0F2B1A] text-white/70 pt-20 pb-10 border-t border-[#1A4D2E]">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded bg-[#D4A853] text-[#1A4D2E] font-['Comfortaa'] font-bold text-xl">
              IL
            </div>
            <div className="flex flex-col">
              <span className="font-['Poppins'] font-bold text-lg leading-tight tracking-wide text-white">Engenharia e</span>
              <span className="font-['Poppins'] text-[10px] font-medium text-[#D4A853] uppercase tracking-widest">Consultoria Ambiental</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Excelência técnica em gestão e licenciamento ambiental para empreendimentos na região amazônica.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold font-['Poppins'] text-lg mb-6">Contato</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#4CAF82] shrink-0" />
              <a href="tel:+5591992503317" className="hover:text-white transition-colors">+55 91 99250-3317</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#4CAF82] shrink-0" />
              <a href="mailto:contate.ilambiental@gmail.com" className="hover:text-white transition-colors">contate.ilambiental@gmail.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold font-['Poppins'] text-lg mb-6">Links Rápidos</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#sobre" className="hover:text-white transition-colors">Quem Somos</a></li>
            <li><a href="#servicos" className="hover:text-white transition-colors">Nossos Serviços</a></li>
            <li><a href="#atuacao" className="hover:text-white transition-colors">Área de Atuação</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold font-['Poppins'] text-lg mb-6">Horário de Atendimento</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between border-b border-[#1A4D2E] pb-2">
              <span>Segunda a sexta-feira, das 08h às 18h</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#1A4D2E] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>&copy; {new Date().getFullYear()} IL Engenharia e Consultoria Ambiental. Todos os direitos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
);

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-['Poppins'] scroll-smooth">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Clients />
      <RegionalPresence />
      <CTABanner />
      <Footer />
    </div>
  );
}
