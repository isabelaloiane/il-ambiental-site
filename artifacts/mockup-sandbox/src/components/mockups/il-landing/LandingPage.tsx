import React from "react";
import { 
  Leaf, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Award, 
  ShieldCheck, 
  BarChart3, 
  FileText, 
  Briefcase, 
  CheckCircle2,
  TreePine,
  Quote
} from "lucide-react";

const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full bg-[#1A4D2E] text-white shadow-md border-b border-[#2E7D52]/30">
    <div className="container mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded bg-[#D4A853] text-[#1A4D2E] font-['Playfair_Display'] font-bold text-xl">
          IL
        </div>
        <div className="hidden md:flex flex-col">
          <span className="font-['Playfair_Display'] font-bold text-lg leading-tight tracking-wide">Engenharia e</span>
          <span className="font-['Inter'] text-xs font-medium text-[#4CAF82] uppercase tracking-widest">Consultoria Ambiental</span>
        </div>
      </div>
      
      <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/90">
        <a href="#sobre" className="hover:text-[#D4A853] transition-colors">Sobre</a>
        <a href="#servicos" className="hover:text-[#D4A853] transition-colors">Serviços</a>
        <a href="#projetos" className="hover:text-[#D4A853] transition-colors">Projetos</a>
        <a href="#contato" className="hover:text-[#D4A853] transition-colors">Contato</a>
      </div>

      <button className="bg-[#D4A853] hover:bg-[#c59a45] text-[#1A3A2A] font-semibold py-2.5 px-6 rounded-sm transition-all shadow-sm hover:shadow-md text-sm">
        Fale Conosco
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative w-full bg-[#0F2B1A] overflow-hidden min-h-[90vh] flex items-center pt-20 pb-24">
    {/* Decorative abstract elements */}
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#1A4D2E]/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#2E7D52]/20 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
    
    <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
      <div className="flex flex-col gap-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4CAF82]/30 bg-[#1A4D2E]/40 backdrop-blur-sm w-fit">
          <Leaf className="w-4 h-4 text-[#4CAF82]" />
          <span className="text-sm font-medium text-[#4CAF82] tracking-wide">Referência na Amazônia</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display'] font-bold text-white leading-[1.1] tracking-tight">
          Excelência Técnica para o <span className="text-[#D4A853] italic">Meio Ambiente</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 font-light max-w-xl leading-relaxed">
          Soluções estratégicas em licenciamento e gestão ambiental para corporações que buscam sustentabilidade e segurança jurídica na região Norte do Brasil.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="bg-[#D4A853] hover:bg-[#c59a45] text-[#1A3A2A] font-semibold py-4 px-8 rounded-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
            Nossos Serviços <ChevronRight className="w-4 h-4" />
          </button>
          <button className="bg-transparent border border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-sm transition-all flex items-center justify-center gap-2">
            Conheça a IL
          </button>
        </div>
      </div>
      
      <div className="relative hidden lg:block h-full min-h-[500px]">
        {/* Artistic nature illustration using pure CSS/SVG */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-[500px]">
            <div className="absolute inset-0 border border-[#D4A853]/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute inset-4 border border-[#4CAF82]/20 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-[80%] h-[80%] text-[#1A4D2E] drop-shadow-2xl opacity-90">
                <path fill="currentColor" d="M100 0 C120 40 160 60 180 100 C160 140 120 160 100 200 C80 160 40 140 20 100 C40 60 80 40 100 0 Z" />
                <path fill="#2E7D52" d="M100 20 C115 50 140 70 160 100 C140 130 115 150 100 180 C85 150 60 130 40 100 C60 70 85 50 100 20 Z" />
                <path fill="#4CAF82" d="M100 40 C110 60 125 80 140 100 C125 120 110 140 100 160 C90 140 75 120 60 100 C75 80 90 60 100 40 Z" />
              </svg>
            </div>
            
            {/* Floating badges */}
            <div className="absolute top-[15%] -left-[10%] bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg flex items-center gap-3 shadow-xl">
              <div className="bg-[#D4A853] p-2 rounded-full text-[#1A3A2A]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold font-['Playfair_Display']">100%</div>
                <div className="text-white/70 text-xs">Conformidade</div>
              </div>
            </div>
            
            <div className="absolute bottom-[20%] -right-[5%] bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg flex items-center gap-3 shadow-xl">
              <div className="bg-[#4CAF82] p-2 rounded-full text-white">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold font-['Playfair_Display']">ISO 14001</div>
                <div className="text-white/70 text-xs">Certificação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <div className="bg-white border-b border-gray-100 relative z-20 -mt-10 mx-6 lg:mx-auto lg:max-w-6xl rounded-lg shadow-xl overflow-hidden">
    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-100 divide-y lg:divide-y-0">
      {[
        { number: "25+", label: "Anos de Experiência" },
        { number: "300+", label: "Licenças Aprovadas" },
        { number: "50+", label: "Municípios Atendidos" },
        { number: "100%", label: "Conformidade Legal" },
      ].map((stat, idx) => (
        <div key={idx} className="p-8 text-center flex flex-col items-center justify-center group hover:bg-[#F8F5F0] transition-colors">
          <div className="text-3xl lg:text-4xl font-['Playfair_Display'] font-bold text-[#1A4D2E] group-hover:scale-105 transition-transform duration-300">
            {stat.number}
          </div>
          <div className="text-sm font-medium text-[#555555] mt-2 uppercase tracking-wide">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Licenciamento Ambiental",
      desc: "Gestão completa de processos junto aos órgãos ambientais (SEMAS, IBAMA), garantindo agilidade na emissão de LP, LI e LO."
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
          <h2 className="text-4xl lg:text-5xl font-['Playfair_Display'] font-bold text-[#1A1A1A] mb-6">
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
              <h3 className="text-xl font-['Playfair_Display'] font-bold text-[#1A1A1A] mb-4 group-hover:text-[#1A4D2E] transition-colors">
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
        <h2 className="text-4xl lg:text-5xl font-['Playfair_Display'] font-bold mb-8 leading-tight">
          Autoridade Ambiental no <span className="italic text-[#4CAF82]">Coração da Amazônia</span>
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-6 font-light">
          Fundada há mais de duas décadas em Belém do Pará, a IL Engenharia e Consultoria Ambiental nasceu com a missão de harmonizar o desenvolvimento industrial com a vasta biodiversidade da região amazônica.
        </p>
        <p className="text-white/80 text-lg leading-relaxed font-light">
          Nossa equipe multidisciplinar de biólogos, engenheiros ambientais e florestais, e especialistas em regulação traz o rigor técnico necessário para viabilizar projetos com segurança jurídica e responsabilidade socioambiental.
        </p>
      </div>
    </div>
    
    <div className="lg:w-1/2 bg-white p-12 lg:p-24 flex items-center">
      <div className="max-w-xl">
        <h3 className="text-2xl font-['Playfair_Display'] font-bold text-[#1A1A1A] mb-8 border-b pb-4">
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

const Testimonials = () => {
  const reviews = [
    {
      text: "A IL transformou nosso processo de licenciamento da planta industrial em Marabá. A precisão técnica dos estudos e a habilidade na condução com a SEMAS foram fundamentais para cumprirmos nosso cronograma.",
      author: "Carlos Silveira",
      role: "Diretor de Operações",
      company: "Mineração Norte-Sul S.A."
    },
    {
      text: "Ter a IL como parceira na gestão ambiental de nossos portos tem nos garantido não apenas a manutenção de todas as licenças em dia, mas uma verdadeira evolução em nossos indicadores ESG.",
      author: "Amanda Costa",
      role: "Gerente de Sustentabilidade",
      company: "Logística Amazônica Integrada"
    },
    {
      text: "O EIA/RIMA desenvolvido pela IL para nosso projeto hidrelétrico foi elogiado até mesmo pelos técnicos do órgão licenciador pela profundidade e clareza das medidas mitigadoras propostas.",
      author: "Roberto Mendes",
      role: "CEO",
      company: "Energia do Pará Holding"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F8F5F0] rounded-bl-full -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-['Playfair_Display'] font-bold text-[#1A1A1A] mb-6">
            Confiança de Grandes <span className="text-[#1A4D2E]">Corporações</span>
          </h2>
          <p className="text-[#555555] text-lg">
            O impacto do nosso trabalho é refletido no sucesso dos nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-[#F8F5F0] p-10 rounded-sm relative border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-[#1A4D2E]/10" />
              <div className="relative z-10">
                <p className="text-[#555555] italic leading-relaxed mb-8 h-40">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1A4D2E] rounded-full flex items-center justify-center text-white font-bold font-['Playfair_Display']">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A]">{review.author}</h4>
                    <p className="text-xs text-[#555555]">{review.role}</p>
                    <p className="text-xs font-semibold text-[#C5714B] mt-0.5">{review.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsMap = () => (
  <section id="projetos" className="py-24 bg-[#0F2B1A] text-white relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#D4A853] font-bold tracking-widest uppercase text-sm mb-3 block">Abrangência Territorial</span>
          <h2 className="text-4xl lg:text-5xl font-['Playfair_Display'] font-bold mb-6">
            Presença Consolidada na Região Norte
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8 font-light">
            Atuamos em projetos de alta complexidade nos estados do Pará, Amapá, Maranhão e Tocantins, compreendendo as dinâmicas socioambientais de cada região, desde áreas litorâneas até o denso interior amazônico.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="border-t border-[#2E7D52] pt-4">
              <div className="text-3xl font-['Playfair_Display'] font-bold text-[#D4A853]">Pará</div>
              <div className="text-white/70 text-sm mt-1">Sede em Belém, atuação em mais de 40 municípios.</div>
            </div>
            <div className="border-t border-[#2E7D52] pt-4">
              <div className="text-3xl font-['Playfair_Display'] font-bold text-[#D4A853]">Amapá</div>
              <div className="text-white/70 text-sm mt-1">Forte atuação no setor portuário e de mineração.</div>
            </div>
          </div>
        </div>
        
        <div className="relative h-[400px] bg-[#1A4D2E]/40 rounded-xl border border-[#2E7D52] p-8 flex items-center justify-center">
           <div className="absolute inset-0 flex items-center justify-center opacity-30">
             {/* Abstract Map Representation */}
             <svg viewBox="0 0 400 400" className="w-full h-full text-white">
                <path fill="currentColor" d="M150,50 Q200,80 250,60 T350,120 Q380,180 340,240 T280,320 Q200,380 120,310 T40,200 Q20,100 150,50 Z" />
             </svg>
           </div>
           
           {/* Pin Points */}
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
      <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-white mb-6">
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
            <div className="flex items-center justify-center w-10 h-10 rounded bg-[#D4A853] text-[#1A4D2E] font-['Playfair_Display'] font-bold text-xl">
              IL
            </div>
            <div className="flex flex-col">
              <span className="font-['Playfair_Display'] font-bold text-lg leading-tight tracking-wide text-white">Engenharia e</span>
              <span className="font-['Inter'] text-[10px] font-medium text-[#4CAF82] uppercase tracking-widest">Consultoria Ambiental</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Excelência técnica em gestão e licenciamento ambiental para empreendimentos na região amazônica.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold font-['Playfair_Display'] text-lg mb-6">Contato</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#4CAF82] shrink-0 mt-0.5" />
              <span>Av. Visconde de Souza Franco, 500<br/>Ed. Connext Office, Sala 1205<br/>Reduto, Belém - PA, 66053-000</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#4CAF82] shrink-0" />
              <span>+55 (91) 3222-0000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#4CAF82] shrink-0" />
              <span>contato@ilengenharia.com.br</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold font-['Playfair_Display'] text-lg mb-6">Links Rápidos</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#sobre" className="hover:text-white transition-colors">Quem Somos</a></li>
            <li><a href="#servicos" className="hover:text-white transition-colors">Nossos Serviços</a></li>
            <li><a href="#projetos" className="hover:text-white transition-colors">Área de Atuação</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold font-['Playfair_Display'] text-lg mb-6">Horário de Atendimento</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between border-b border-[#1A4D2E] pb-2">
              <span>Segunda - Sexta:</span>
              <span className="text-white">08:00 - 18:00</span>
            </li>
            <li className="flex justify-between pb-2 text-[#555555]">
              <span>Sábado e Domingo:</span>
              <span>Fechado</span>
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
    <div className="min-h-screen bg-white font-['Inter'] scroll-smooth selection:bg-[#2E7D52] selection:text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Testimonials />
      <ProjectsMap />
      <CTABanner />
      <Footer />
    </div>
  );
}
