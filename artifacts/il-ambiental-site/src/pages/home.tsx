import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const WA_NUMBER = "5591992723570";
const WA_GENERAL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site da IL Ambiental e gostaria de falar sobre a situação ambiental da minha empresa.")}`;

export function Home() {
return (
<div style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh" }}>
<Navbar />

{/* ═══ H-01 HERO ═══ */}
<section className="hero-animated-bg">
<div style={{ position: "absolute", inset: 0, background: "rgba(26,15,8,0.60)", pointerEvents: "none" }} />
<div
className="hero-content-inner"
style={{
position: "relative",
zIndex: 1,
maxWidth: 760,
margin: "0 auto",
textAlign: "center",
}}
>
<span className="fade-1" style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "#B5895E", fontWeight: 600, display: "block", marginBottom: 14 }}>
Gestão ambiental contínua · Região Metropolitana de Belém
</span>
<h1
className="fade-1"
style={{
fontFamily: "'Comfortaa', cursive",
fontWeight: 700,
fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
lineHeight: 1.1,
color: "#fff",
margin: 0,
}}
>
As obrigações ambientais da sua empresa em dia,{" "}
<span style={{ color: "#DFC49F" }}>o ano inteiro.</span>
</h1>
<p
className="fade-2"
style={{
fontSize: "clamp(0.95rem, 1.7vw, 1.1rem)",
color: "rgba(223,196,159,0.82)",
fontWeight: 400,
maxWidth: 580,
margin: "20px auto 0",
lineHeight: 1.8,
}}
>
A IL Ambiental assume a gestão das obrigações ambientais da sua empresa: licenças, condicionantes, outorgas, relatórios e processos junto aos órgãos, com acompanhamento contínuo, coordenação técnica e visão jurídica.
</p>
<div className="fade-3 hero-cta-group" style={{ marginTop: 36, flexWrap: "wrap", justifyContent: "center" }}>
<Link href="/contato?assunto=vertice" className="btn-primary">
Solicitar Diagnóstico Vértice
</Link>
<Link href="/gestao-ambiental" className="btn-outline">
Conhecer a gestão ambiental contínua
</Link>
</div>
<p
className="fade-3"
style={{ fontSize: "0.78rem", color: "rgba(223,196,159,0.45)", marginTop: 14 }}
>
Diagnóstico inicial sem custo e sem compromisso de contratação.
</p>
</div>
</section>

{/* ═══ H-02 FAIXA DE CREDIBILIDADE ═══ */}
<div style={{ background: "#F5F0E8", borderBottom: "1px solid rgba(181,137,94,0.25)", padding: "20px 0" }}>
<div className="trust-bar-grid">
{[
{ value: "Registro profissional", label: "CREA-PA 1521301735" },
{ value: "Cerca de 50", label: "processos protocolados em diferentes órgãos ambientais e tipos de processo" },
{ value: "Órgãos ambientais", label: "SEMAS-PA e secretarias municipais de meio ambiente" },
{ value: "1 dia útil", label: "Retorno em até 1 dia útil" },
].map((item, i, arr) => (
<div
key={i}
data-aos="fade-up"
data-aos-delay={i * 80}
style={{
textAlign: "center",
borderRight: i < arr.length - 1 ? "1px solid rgba(181,137,94,0.25)" : "none",
padding: "8px 12px",
}}
>
<div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#734120", lineHeight: 1 }}>{item.value}</div>
<div style={{ fontSize: "0.72rem", color: "#6B5443", marginTop: 6, lineHeight: 1.4 }}>{item.label}</div>
</div>
))}
</div>
{/* S17: faixa simples de clientes logo abaixo dos números */}
<p
className="trust-clients-strip"
style={{
maxWidth: 1100,
margin: "14px auto 0",
padding: "12px 24px 0",
borderTop: "1px solid rgba(181,137,94,0.2)",
textAlign: "center",
fontSize: "0.85rem",
fontWeight: 600,
letterSpacing: "0.02em",
color: "#734120",
}}
>
Tropoc · Fruta Pronta · Transzilli
</p>
</div>

{/* ═══ H-03 O QUE COSTUMA PASSAR DESPERCEBIDO ═══ */}
<section style={{ padding: "80px 24px", background: "#fff" }}>
<div style={{ maxWidth: 1100, margin: "0 auto" }}>
<div style={{ textAlign: "center", marginBottom: 48 }}>
<span className="section-caption" data-aos="fade-up">PONTOS DE ATENÇÃO</span>
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
O que a fiscalização{" "}
<span style={{ color: "#734120" }}>costuma verificar</span>
</h2>
<span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 18px" }} />
<p
data-aos="fade-up"
data-aos-delay="100"
style={{ color: "#6B5443", fontSize: "1.05rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}
>
A conformidade ambiental não termina na emissão da licença. Estes são os pontos que mais geram pendências em empresas já licenciadas.
</p>
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
{[
{ title: "Licença vencida ou prestes a vencer", desc: "A renovação deve ser pedida com antecedência mínima de 120 dias do vencimento (Lei Complementar 140/2011, art. 14, § 4º)." },
{ title: "Outorga de uso de recursos hídricos", desc: "Captar água de poço ou rio, ou lançar efluentes, exige outorga própria, independente da licença ambiental." },
{ title: "PGRS obrigatório para a sua atividade", desc: "Muitas atividades licenciadas têm o PGRS como condicionante. O plano precisa refletir a operação atual." },
{ title: "Condicionantes não cumpridas", desc: "Cada licença traz condicionantes com prazo e forma de comprovação. Cumprida e não registrada, para o órgão a obrigação não foi cumprida." },
].map((item, i) => (
<div
key={i}
data-aos="fade-up"
data-aos-delay={i * 80}
style={{ background: "#F5F0E8", padding: 28, borderRadius: 12, border: "1px solid rgba(181,137,94,0.18)" }}
>
<h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#2C1A0E", marginBottom: 8 }}>{item.title}</h3>
<p style={{ color: "#6B5443", lineHeight: 1.65, fontSize: "0.875rem", margin: 0 }}>{item.desc}</p>
</div>
))}
</div>
</div>
</section>

{/* ═══ H-04 SERVIÇOS ═══ */}
<section style={{ padding: "80px 24px", background: "#F5F0E8" }}>
<div style={{ maxWidth: 1100, margin: "0 auto" }}>
<div style={{ textAlign: "center", marginBottom: 48 }}>
<span className="section-caption" data-aos="fade-up">COMO ATUAMOS</span>
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
Gestão ambiental contínua para empresas que precisam de{" "}
<span style={{ color: "#734120" }}>conformidade permanente.</span>
</h2>
<span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 18px" }} />
</div>

{/* Destaque Programa Sentinela — cartão largo, largura inteira */}
<div
data-aos="fade-up"
className="sentinela-wide-card"
style={{
background: "#452816",
borderRadius: 14,
padding: "clamp(28px, 4vw, 44px) clamp(24px, 4vw, 48px)",
marginBottom: 56,
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
gap: 36,
alignItems: "center",
boxShadow: "0 8px 32px rgba(69,40,22,0.18)",
}}
>
<div>
<span style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#B5895E", fontWeight: 600, display: "block", marginBottom: 10 }}>
Programa Sentinela · gestão ambiental contínua
</span>
<h3 style={{ fontFamily: "'Comfortaa', cursive", fontWeight: 700, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", color: "#DFC49F", margin: "0 0 14px" }}>
Gestão ambiental contínua
</h3>
<p style={{ color: "rgba(223,196,159,0.78)", lineHeight: 1.75, fontSize: "0.95rem", margin: 0 }}>
Por meio de contrato anual, a IL Ambiental assume a gestão das demandas ambientais da empresa: licenciamento e acompanhamento de licenças, atendimento de condicionantes, relatórios, processos junto aos órgãos, resposta a autos de infração e serviços técnicos específicos, conforme o escopo definido.
</p>
</div>
<div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "stretch", maxWidth: 360, width: "100%", justifySelf: "center" }}>
<Link
href="/gestao-ambiental"
className="btn-light"
style={{ alignSelf: "stretch", textAlign: "center" }}
>
Conhecer o Programa Sentinela
</Link>
<p style={{ fontSize: "0.78rem", color: "rgba(223,196,159,0.6)", margin: 0, textAlign: "center" }}>
O ponto de partida é o Diagnóstico Vértice.
</p>
</div>
</div>

{/* Demandas específicas — grade de 6 serviços */}
<h3
data-aos="fade-up"
style={{
fontFamily: "'Comfortaa', cursive",
fontWeight: 700,
fontSize: "clamp(1.2rem, 2.2vw, 1.5rem)",
color: "#2C1A0E",
textAlign: "center",
margin: "0 0 28px",
}}
>
Também atuamos em demandas específicas
</h3>
<div className="grid-6-services">
{[
{
icon: (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#734120" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v6l4 2"/></svg>
),
title: "Outorga e uso da água",
desc: "Outorga de captação em poço ou rio, outorga de lançamento de efluentes, renovações e autorização de uso de recursos hídricos.",
anchor: "/servicos#agua",
},
{
icon: (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#734120" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
),
title: "Licenciamento ambiental",
desc: "Licença de Operação e renovações, além de LP, LI e dispensa de licenciamento, do enquadramento à emissão.",
anchor: "/servicos#licenciamento",
},
{
icon: (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#734120" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
),
title: "Relatórios ambientais",
desc: "RIAA, relatórios de cumprimento de condicionantes e demais relatórios técnicos exigidos pelos órgãos.",
anchor: "/servicos#relatorios",
},
{
icon: (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#734120" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/><circle cx="7" cy="6" r="1" fill="#734120"/><circle cx="7" cy="12" r="1" fill="#734120"/><circle cx="7" cy="18" r="1" fill="#734120"/></svg>
),
title: "PGRS e resíduos",
desc: "Elaboração e atualização do Plano de Gerenciamento de Resíduos Sólidos, com orientação para manter os registros de destinação em dia.",
anchor: "/servicos#pgrs",
},
{
icon: (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#734120" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v2h6V3"/><path d="M9 11l2 2 4-4"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
),
title: "Condicionantes",
desc: "Levantamento, cumprimento e comprovação das condicionantes de licenças e outorgas, com protocolo dentro dos prazos.",
anchor: "/servicos#condicionantes",
},
{
icon: (
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#734120" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
),
title: "Autos de infração e notificações",
desc: "Análise técnica do documento recebido e resposta fundamentada dentro do prazo.",
anchor: "/servicos#notificacoes",
},
].map((svc, i) => (
<div
key={i}
className="hover-card"
data-aos="fade-up"
data-aos-delay={i * 80}
style={{
background: "#fff",
padding: 28,
borderRadius: 12,
boxShadow: "0 2px 8px rgba(69,40,22,0.07)",
border: "1px solid rgba(181,137,94,0.18)",
borderTop: "4px solid #B5895E",
}}
>
<div style={{ marginBottom: 14 }}>{svc.icon}</div>
<h3 style={{ fontWeight: 700, fontSize: "1.05rem", color: "#2C1A0E", marginBottom: 10 }}>{svc.title}</h3>
<p style={{ color: "#6B5443", lineHeight: 1.65, fontSize: "0.875rem", margin: "0 0 16px" }}>{svc.desc}</p>
<Link href={svc.anchor} style={{ fontSize: "0.8rem", color: "#734120", fontWeight: 600, textDecoration: "none" }}>
Ver detalhes →
</Link>
</div>
))}
</div>
</div>
</section>

{/* ═══ H-05 COMO COMEÇAMOS ═══ */}
<section style={{ padding: "80px 24px", background: "#fff" }}>
<div style={{ maxWidth: 1000, margin: "0 auto" }}>
<div style={{ textAlign: "center", marginBottom: 48 }}>
<span className="section-caption" data-aos="fade-up">Como começamos</span>
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
O primeiro passo é entender onde sua empresa está.
</h2>
<span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 18px" }} />
</div>
<div
style={{
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
gap: 28,
}}
>
{[
{
num: "1",
title: "Conversa inicial",
desc: "Você conta a atividade da empresa e a situação atual. Retorno em até 1 dia útil.",
},
{
num: "2",
title: "Diagnóstico Vértice",
desc: "Analisamos licenças, outorgas, condicionantes, prazos e obrigações e entregamos um documento com o que a empresa precisa cumprir nos próximos 12 meses. Sem custo.",
highlight: true,
},
{
num: "3",
title: "Proposta",
desc: "Com o diagnóstico em mãos, você decide: contratar serviços pontuais, contratar o Programa Sentinela ou executar por conta própria.",
},
{
num: "4",
title: "Execução e acompanhamento",
desc: "No Programa Sentinela, a IL Ambiental acompanha as obrigações da empresa durante todo o contrato anual.",
},
].map((step, i) => (
<div
key={i}
data-aos="fade-up"
data-aos-delay={i * 80}
style={{
background: step.highlight ? "#452816" : "#F5F0E8",
borderRadius: 12,
padding: "28px 24px",
borderTop: step.highlight ? "4px solid #DFC49F" : "4px solid #B5895E",
}}
>
<div
style={{
width: 36,
height: 36,
borderRadius: "50%",
background: step.highlight ? "#DFC49F" : "#734120",
color: step.highlight ? "#452816" : "#DFC49F",
display: "flex",
alignItems: "center",
justifyContent: "center",
fontWeight: 700,
fontSize: "0.9rem",
marginBottom: 14,
fontFamily: "'Comfortaa', cursive",
}}
>
{step.num}
</div>
<h3 style={{ fontWeight: 700, fontSize: "1rem", color: step.highlight ? "#DFC49F" : "#2C1A0E", marginBottom: 10 }}>
{step.title}
</h3>
<p style={{ color: step.highlight ? "rgba(223,196,159,0.75)" : "#6B5443", lineHeight: 1.65, fontSize: "0.875rem", margin: 0 }}>
{step.desc}
</p>
</div>
))}
</div>

{/* Nota de custo */}
<div
data-aos="fade-up"
style={{
background: "#F5F0E8",
border: "1px solid rgba(181,137,94,0.35)",
borderRadius: 10,
padding: "16px 24px",
marginTop: 28,
fontSize: "0.85rem",
color: "#6B5443",
lineHeight: 1.6,
}}
>
<strong style={{ color: "#734120" }}>Importante:</strong> O Diagnóstico Vértice não tem custo e não obriga à contratação. O Programa Sentinela é um serviço pago, contratado por período anual.
</div>

<div data-aos="fade-up" data-aos-delay="100" style={{ textAlign: "center", marginTop: 36 }}>
<Link href="/contato?assunto=vertice" className="btn-primary">
Solicitar Diagnóstico Vértice
</Link>
</div>
</div>
</section>

{/* ═══ H-06 QUEM CONDUZ ═══ */}
<section style={{ padding: "80px 24px", background: "#452816" }}>
<div
style={{
maxWidth: 1000,
margin: "0 auto",
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
gap: 52,
alignItems: "center",
}}
>
<div data-aos="fade-right" style={{ display: "flex", justifyContent: "center" }}>
<img
src="/isabela-loiane.jpg"
alt="Isabela Loiane, responsável técnica da IL Ambiental"
style={{
width: "100%",
maxWidth: 320,
borderRadius: 12,
objectFit: "cover",
filter: "grayscale(20%)",
boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
}}
onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
/>
</div>
<div data-aos="fade-left">
<span style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#B5895E", fontWeight: 600, display: "block", marginBottom: 12 }}>
Coordenação técnica
</span>
<h2
style={{
fontFamily: "'Comfortaa', cursive",
fontWeight: 700,
fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
color: "#DFC49F",
margin: "0 0 8px",
}}
>
Isabela Loiane, responsável técnica da IL Ambiental
</h2>
<p style={{ color: "#B5895E", fontSize: "0.9rem", marginBottom: 20 }}>
Engenheira Florestal · Pós-graduação em Direito Ambiental (CESUPA) · CREA-PA 1521301735
</p>
<p style={{ color: "rgba(223,196,159,0.78)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: 24 }}>
Os projetos da IL Ambiental têm coordenação técnica da engenheira florestal Isabela Loiane, formada pela Universidade do Estado do Pará (UEPA) e pós-graduada em Direito Ambiental pelo CESUPA. Com atuação no mercado ambiental desde 2022, reúne experiência em órgãos públicos, como a SEMMA e a Emater, e no setor privado. Essa combinação permite conduzir cada processo considerando, ao mesmo tempo, a exigência técnica, o enquadramento legal e a realidade da operação.
</p>
<div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
{["Engenharia Florestal", "Direito Ambiental (CESUPA)", "CREA-PA 1521301735"].map((tag, i) => (
<span
key={i}
style={{
background: "rgba(223,196,159,0.12)",
border: "1px solid rgba(223,196,159,0.25)",
borderRadius: 6,
padding: "4px 12px",
fontSize: "0.78rem",
color: "#DFC49F",
}}
>
{tag}
</span>
))}
</div>
<Link href="/sobre" className="btn-light">
Conhecer a trajetória
</Link>
</div>
</div>
</section>

{/* ═══ H-07 POR QUE A IL AMBIENTAL (diferenciais) ═══ */}
<section style={{ padding: "80px 24px", background: "#F5F0E8" }}>
<div style={{ maxWidth: 1100, margin: "0 auto" }}>
<div style={{ textAlign: "center", marginBottom: 48 }}>
<span className="section-caption" data-aos="fade-up">Diferenciais</span>
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
Por que empresas escolhem a IL Ambiental
</h2>
<span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 18px" }} />
</div>
<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
{[
{
title: "Técnica e jurídica no mesmo ponto de contato",
desc: "Engenharia e Direito Ambiental integrados na condução de cada processo. As decisões técnicas já consideram o respaldo legal.",
},
{
title: "Conhecimento local",
desc: "Conhecemos os procedimentos da SEMAS-PA e das secretarias municipais da região. Isso reduz idas e vindas no processo.",
},
{
title: "Diálogo técnico com os órgãos",
desc: "Respondemos exigências e acompanhamos a tramitação com linguagem técnica, dentro dos canais formais.",
},
{
title: "Visão do empreendimento como um todo",
desc: "Licença, água, resíduos e condicionantes analisados em conjunto, para que nada fique de fora do calendário da empresa.",
},
].map((item, i) => (
<div
key={i}
className="hover-card"
data-aos="fade-up"
data-aos-delay={i * 80}
style={{
background: "#fff",
padding: 28,
borderRadius: 12,
boxShadow: "0 2px 8px rgba(69,40,22,0.07)",
border: "1px solid rgba(181,137,94,0.18)",
}}
>
<div style={{ width: 36, height: 36, borderRadius: "50%", background: "#734120", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DFC49F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
<polyline points="20 6 9 17 4 12" />
</svg>
</div>
<h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#2C1A0E", marginBottom: 10 }}>{item.title}</h3>
<p style={{ color: "#6B5443", lineHeight: 1.65, fontSize: "0.875rem", margin: 0 }}>{item.desc}</p>
</div>
))}
</div>
</div>
</section>

{/* ═══ H-09 CLIENTES — formato sóbrio ═══ */}
<section style={{ padding: "72px 24px", background: "#fff" }}>
<div style={{ maxWidth: 960, margin: "0 auto" }}>
<div style={{ textAlign: "center", marginBottom: 40 }}>
<span className="section-caption" data-aos="fade-up">EXPERIÊNCIA</span>
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
Empresas que já contaram com a IL Ambiental
</h2>
<span className="section-title-line" data-aos="fade-up" style={{ margin: "14px auto 18px" }} />
<p data-aos="fade-up" data-aos-delay="100" style={{ color: "#6B5443", fontSize: "0.95rem", lineHeight: 1.6, marginTop: 0 }}>
Experiência com empresas da agroindústria, de alimentos e de logística.
</p>
</div>
<ul className="client-list" data-aos="fade-up">
{[
{ name: "Tropoc", desc: "Multinacional do beneficiamento de pimenta-do-reino" },
{ name: "Fruta Pronta", desc: "Produção de polpa de açaí, Portel (PA)" },
{ name: "Transzilli", desc: "Transporte, armazenagem e distribuição" },
].map((c, i) => (
<li key={i} className="client-item">
<span className="client-name">{c.name}</span>
<span className="client-sector">{c.desc}</span>
</li>
))}
</ul>
</div>
</section>

{/* ═══ H-10 CTA FINAL ═══ */}
<section className="cta-section" style={{ background: "#452816", padding: "72px 24px", textAlign: "center" }}>
<h2
data-aos="fade-up"
style={{
fontFamily: "'Comfortaa', cursive",
fontWeight: 700,
fontSize: "clamp(1.7rem, 3.5vw, 2.8rem)",
color: "#DFC49F",
margin: 0,
maxWidth: 680,
marginLeft: "auto",
marginRight: "auto",
}}
>
Comece por um diagnóstico técnico da situação ambiental da sua empresa.
</h2>
<p data-aos="fade-up" data-aos-delay="100" style={{ color: "rgba(223,196,159,0.72)", fontSize: "1rem", maxWidth: 520, margin: "16px auto 0", lineHeight: 1.7 }}>
O Diagnóstico Vértice mapeia licenças, condicionantes, outorgas e prazos, e indica o que precisa ser feito nos próximos 12 meses.
</p>
<div data-aos="fade-up" data-aos-delay="200" style={{ marginTop: 32 }}>
<Link href="/contato?assunto=vertice" className="btn-light" style={{ fontSize: "1rem", padding: "15px 36px" }}>
Solicitar Diagnóstico Vértice
</Link>
<p style={{ fontSize: "0.78rem", color: "rgba(223,196,159,0.4)", marginTop: 14 }}>
Sem compromisso de contratação. Retorno em até 1 dia útil.
</p>
<a
href={WA_GENERAL}
onClick={() => { window.gtag && window.gtag("event","whatsapp_click",{event_category:"contato"}); window.fbq && window.fbq("track","Lead"); }}target="_blank"
rel="noopener noreferrer"
style={{ fontSize: "0.85rem", color: "rgba(223,196,159,0.55)", textDecoration: "underline", display: "block", marginTop: 8 }}
>
ou fale com a IL Ambiental
</a>
</div>
</section>

<Footer />
<WhatsAppButton />
</div>
);
}
