import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  FileText, ClipboardList, Droplets, Trash2,
  CheckCircle, ArrowRight, Shield, Clock, MapPin, Bell, AlertTriangle,
} from "lucide-react";

export function Home() {
  useEffect(() => {
    document.title = "IL Ambiental | Gestão Ambiental Contínua no Pará";
  }, []);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO H-01 ─────────────────────────────────────────────── */}
      <section className="hero-animated-bg">
        <div style={{ position: "absolute", inset: 0, background: "rgba(26,15,8,0.55)", pointerEvents: "none" }} />
        <div
          className="hero-content-inner"
          style={{
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "clamp(24px, 5vw, 64px)",
            alignItems: "center",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {/* Left col */}
          <div>
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
              GESTÃO AMBIENTAL CONTÍNUA · REGIÃO METROPOLITANA DE BELÉM
            </span>
            <h1
              className="fade-1"
              style={{
                fontFamily: "'Comfortaa', cursive",
                fontWeight: 700,
                fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                lineHeight: 1.12,
                color: "#fff",
                margin: 0,
              }}
            >
              As obrigações ambientais da sua empresa{" "}
              <span style={{ color: "#DFC49F" }}>em dia, o ano inteiro.</span>
            </h1>
            <p
              className="fade-2"
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.12rem)",
                color: "rgba(223,196,159,0.82)",
                fontWeight: 400,
                maxWidth: 520,
                lineHeight: 1.75,
                marginTop: 20,
              }}
            >
              A IL Ambiental assume a gestão das obrigações ambientais de empresas: licenças,
              condicionantes, outorgas, relatórios e processos junto aos órgãos, acompanhados
              de forma contínua, com coordenação técnica e visão jurídica. Atuação em Belém,
              Ananindeua, Marituba, Benevides, Santa Isabel do Pará e Castanhal.
            </p>
            <div className="fade-3 hero-cta-group" style={{ marginTop: 36 }}>
              <Link href="/contato?assunto=vertice" className="btn-primary">
                Solicitar Diagnóstico Vértice
              </Link>
              <Link href="/gestao-ambiental" className="btn-outline">
                Conhecer a gestão ambiental contínua
              </Link>
            </div>
            <p
              className="fade-3"
              style={{
                fontSize: "0.78rem",
                color: "rgba(223,196,159,0.65)",
                marginTop: 12,
              }}
            >
              Diagnóstico inicial sem custo e sem compromisso de contratação.
            </p>
          </div>

          {/* Right col — Isabela photo */}
          <div className="fade-2 hero-photo-col" style={{ flexShrink: 0 }}>
            <img
              src="/photos/isabela-hero.jpg"
              alt="Isabela Loiane, Engenheira Florestal e consultora ambiental no Pará"
              className="hero-photo"
              style={{
                width: "clamp(160px, 20vw, 300px)",
                aspectRatio: "3/4",
                objectFit: "cover",
                borderRadius: 12,
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── TRUST BAR H-02 ────────────────────────────────────────── */}
      <div
        style={{
          background: "#F5F0E8",
          borderBottom: "1px solid rgba(181,137,94,0.25)",
          padding: "20px 0",
        }}
      >
        <div className="trust-bar-grid">
          {[
            { value: "Registro profissional", label: "CREA-PA 1521301735" },
            { value: "Engenharia Florestal", label: "+ Direito Agroambiental" },
            { value: "Órgãos ambientais", label: "SEMAS-PA e secretarias municipais de meio ambiente" },
            { value: "Retorno", label: "em até 1 dia útil" },
          ].map((item, i, arr) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              style={{
                textAlign: "center",
                borderRight:
                  i < arr.length - 1 ? "1px solid rgba(181,137,94,0.25)" : "none",
                padding: "8px 12px",
              }}
            >
              <div
                style={{ fontSize: "1rem", fontWeight: 700, color: "#734120", lineHeight: 1 }}
              >
                {item.value}
              </div>
              <div
                style={{ fontSize: "0.72rem", color: "#6B5443", marginTop: 6, lineHeight: 1.3 }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── H-03: O QUE A FISCALIZAÇÃO COSTUMA VERIFICAR ─────────── */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-caption" data-aos="fade-up">
              PONTOS DE ATENÇÃO
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
              O que a fiscalização{" "}
              <span style={{ color: "#734120" }}>costuma verificar</span>
            </h2>
            <span
              className="section-title-line"
              data-aos="fade-up"
              style={{ margin: "14px auto 18px" }}
            />
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              style={{
                color: "#6B5443",
                fontSize: "1.05rem",
                maxWidth: 560,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              A conformidade ambiental não termina na emissão da licença. Estes são os pontos
              que mais geram pendências em empresas já licenciadas.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                icon: <Shield size={22} color="#734120" />,
                title: "Licença vencida ou prestes a vencer",
                desc: "A LO tem prazo de validade. Operar com licença vencida equivale a operar sem licença — as multas são as mesmas.",
              },
              {
                icon: <Droplets size={22} color="#734120" />,
                title: "Outorga de uso de recursos hídricos",
                desc: "Captação de água em rios, córregos ou poços sem outorga da SEMAS é infração ambiental, independente do volume.",
              },
              {
                icon: <Trash2 size={22} color="#734120" />,
                title: "PGRS: quem é obrigado não sabe",
                desc: "Muitas atividades exigem Plano de Gerenciamento de Resíduos Sólidos aprovado. A maioria das empresas descobre só quando é autuada.",
              },
              {
                icon: <ClipboardList size={22} color="#734120" />,
                title: "Condicionantes não cumpridas",
                desc: "Cada licença tem condicionantes. Descumprir qualquer uma é causa de cassação — e muitas empresas nem sabem o que precisam fazer.",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                style={{
                  background: "#F5F0E8",
                  padding: 28,
                  borderRadius: 12,
                  border: "1px solid rgba(181,137,94,0.18)",
                }}
              >
                <div style={{ marginBottom: 14 }}>{item.icon}</div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
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

      {/* ── SERVICES OVERVIEW H-04 ────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#F5F0E8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-caption" data-aos="fade-up">
              COMO ATUAMOS
            </span>
            <h2
              data-aos="fade-up"
              style={{
          l
              </spam>
              <h3
                style={{
                  fontFamily: "'Comfortaa', cursive",
                  fontWeight: 700,
                  fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                  color: "#DFC49F",
                  marginBottom: 12,
                }}
              >
                Sentinela — Gestão Ambiental Contínua
              </h3>
              <p
                style={{
                  color: "rgba(223,196,159,0.82)",
                  lineHeight: 1.7,
                  fontSize: "0.95rem",
                  margin: "0 0 12px",
                }}
              >
                Por meio de contrato anual, a IL Ambiental assume a gestão das demandas
                ambientais da empresa: licenciamento e acompanhamento de licenças, atendimento
                de condicionantes, relatórios, processos junto aos órgãos, resposta a autos de
                infração e serviços técnicos específicos, conforme o escopo definido.
              </p>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(181,137,94,0.7)",
                }}
              >
                O ponto de partida é o Diagnóstico Vértice.
              </p>
            </div>
            <div style={{ flex: "0 0 auto" }}>
              <Link
                href="/gestao-ambiental"
                className="btn-light"
                style={{ display: "inline-flex", alignl
              </span>
              <h3
                style={{
                  fontFamily: "'Comfortaa', cursive",
                  fontWeight: 700,
                  fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                  color: "#DFC49F",
                  marginBottom: 12,
                }}
              >
                Sentinela — Gestão Ambiental Contínua
              </h3>
              <p
                style={{
                  color: "rgba(223,196,159,0.82)",
                  lineHeight: 1.7,
                  fontSize: "0.95rem",
                  margin: "0 0 12px",
                }}
              >
                Por meio de contrato anual, a IL Ambiental assume a gestão das demandas
                ambientais da empresa: licenciamento e acompanhamento de licenças, atendimento
                de condicionantes, relatórios, processos junto aos órgãos, resposta a autos de
                infração e serviços técnicos específicos, conforme o escopo definido.
              </p>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(181,137,94,0.7)",
                }}
              >
                O ponto de partida é o Diagnóstico Vértice.
              </p>
            </div>
            <div style={{ flex: "0 0 auto" }}>
              <Link
                href="/gestao-ambiental"
                className="btn-light"
                style={{ display: "inline-flex", align{{
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#2C1A0E",
                    marginBottom: 8,
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    color: "#6B5443",
                    lineHeight: 1.65,
                    fontSize: "0.875rem",
                    margin: 0,
                  }}
                >
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            style={{ textAlign: "center", marginTop: 40 }}
          >
            <Link href="/servicos" className="btn-primary">
              Ver todos os serviços →
            </Link>
          </div>
        </div>
      </section>

      {/* ── H-05: COMO COMEÇAMOS ─────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-caption" data-aos="fade-up">
              PROCESSO
            </span>
            <h2
              data-aos="fade-up"
              style={{
                fontFamily: "'Comfortaa', cursive",
                fontW         desc: "EIA, RIMA, PCA, RCA, PRAD e laudos técnicos aceitos pelos órgãos competentes.",
              },
              {
                icon: <Trash2 size={22} color="#734120" />,
                title: "PGRS",
                desc: "Plano de Gerenciamento de Resíduos Sólidos elaborado e protocolado conforme a legislação vigente.",
              },
              {
                icon: <Bell size={22} color="#734120" />,
                title: "Condicionantes",
                desc: "Levantamento, cumprimento e comprovação das condicionantes de licenças e outorgas, com protocolo dentro dos prazos.",
              },
              {
                icon: <AlertTriangle size={22} color="#734120" />,
                title: "Autos de infração e notificações",
                desc: "Análise técnica do documento recebido e resposta fundamentada dentro do prazo.",
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
                  border: "1px solid rgba(181,137,94,0.18)",
                  boxShadow: "0 2px 8px rgba(69,40,22,0.07)",
                }}
              >
                <div style={{ marginBottom: 14 }}>{svc.icon}</div>
                <h3
                  style=eight: 700,
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                color: "#2C1A0E",
                margin: 0,
              }}
            >
              Como <span style={{ color: "#734120" }}>começamos</span>
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
              gap: 32,
            }}
          >
            {[
              {
                step: "01",
                title: "Diagnóstico",
                desc: "Levantamos a situação regulatória atual da sua empresa: licenças, outorgas, condicionantes e pendências.",
              },
              {
                step: "02",
                title: "Plano de Ação",
                desc: "Definimos o roteiro de regularização com prazos, responsabilidades e estimativa de custos — sem surpresas.",
              },
              {
                step: "03",
                title: "Execução",
                desc: "Conduzimos toda a interface com os órgãos ambientais. Vocà assina o que é necessário e acompanha o andamento.",
              },
              {
                step: "04",
                title: "Sentinela Contínuo",
                desc: "Monitoramos suas obrigações mês a eight: 700,
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                color: "#2C1A0E",
                margin: 0,
              }}
            >
              Como <span style={{ color: "#734120" }}>começamos</span>
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
              gap: 32,
            }}
          >
            {[
              {
                step: "01",
                title: "Diagnóstico",
                desc: "Levantamos a situação regulatória atual da sua empresa: licenças, outorgas, condicionantes e pendências.",
              },
              {
                step: "02",
                title: "Plano de Ação",
                desc: "Definimos o roteiro de regularização com prazos, responsabilidades e estimativa de custos — sem surpresas.",
              },
              {
                step: "03",
                title: "Execução",
                desc: "Conduzimos toda a interface com os órgãos ambientais. Você assina o que é necessário e acompanha o andamento.",
              },
              {
                step: "04",
                title: "Sentinela Contínuo",
                desc: "Monitoramos suas obrigações mês a mês para que nenhum prazo ou condicionante passe em branco.",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div
                  style={{
                    fontSize: "2.8rem",
                    fontFamily: "'Comfortaa', cursive",
                    fontWeight: 700,
                    color: "rgba(115,65,32,0.12)",
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: "1.05rem",
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

      {/* ── ABOUT STRIP H-07 (diferenciais) ──────────────────────── */}
      <section className="about-strip" style={{ display: "flex", flexWrap: "wrap" }}>
        {/* Left — história */}
        <div
          style={{
            flex: "1 1 400px",
            background: "#452816",
            color: "#DFC49F",
            padding: "72px clamp(24px, 5vw, 80px)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div data-aos="fade-right" style={{ maxWidth: 480 }}>
            <span
              style={{
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#B5895E",
                fontWeight: 600,
                display: "block",
                marginBottom: 12,
              }}
            >
              Nossa História
            </span>
            <h2
              style={{
                fontFamily: "'Comfortaa', cursive",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                lineHeight: 1.15,
                margin: 0,
                color: "#DFC49F",
              }}
            >
              Porque quem conhece o contexto regulatório local resolve mais rápido, sem
              retrabalho.
            </h2>
            <p
              style={{
                color: "rgba(223,196,159,0.78)",
                fontSize: "1.05rem",
                lineHeight: 1.75,
                marginTop: 20,
                marginBottom: 24,
              }}
            >
              A IL Ambiental nasceu com a missão de harmonizar o desenvolvimento industrial
              com a vasta biodiversidade da região amazônica.
            </p>
            <p
              style={{
                color: "rgba(223,196,159,0.78)",
                fontSize: "1rem",
                lineHeight: 1.75,
                margin: "0 0 28px 0",
              }}
            >
              Com rigor técnico e relacionamento direto com os órgãos competentes, viabilizamos
              projetos com segurança jurídica e responsabilidade socioambiental.
            </p>
            <Link href="/sobre" className="btn-light">
              Conheça nossa história
            </Link>
          </div>
        </div>

        {/* Right — diferenciais */}
        <div
          style={{
            flex: "1 1 400px",
            background: "#fff",
            padding: "72px clamp(24px, 5vw, 80px)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div data-aos="fade-left" style={{ maxWidth: 480 }}>
            <h3
              style={{
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "#2C1A0E",
                borderBottom: "1px solid rgba(181,137,94,0.25)",
                paddingBottom: 16,
                marginBottom: 28,
              }}
            >
              Por que empresas escolhem a IL Ambiental
            </h3>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              {[
                {
                  title: "Engenharia e Direito Ambiental integrados",
                  desc: "Engenharia e Direito Ambiental integrados na condução de cada processo. As decisões técnicas já consideram o respaldo legal.",
                },
                {
                  title: "Relacionamento Direto com os Órgãos",
                  desc: "Dialogamos tecnicamente com fiscalizadores e analistas. Seu processo tramita com transparência e sem ruído.",
                },
                {
                  title: "Gestão Integrada",
                  desc: "Enxergamos seu empreendimento como um sistema: ambiental, jurídico, social e econômico. Nada fica de fora.",
                },
                {
                  title: "Foco em Resultado",
                  desc: "Entregamos licenças emitidas, condicionantes cumpridas e operações regularizadas — com acompanhamento contínuo.",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
                >
                  <CheckCircle
                    size={18}
                    color="#734120"
                    style={{ marginTop: 2, flexShrink: 0 }}
                  />
                  <div>
                    <strong
                      style={{ color: "#2C1A0E", display: "block", marginBottom: 2 }}
                    >
                      {item.title}
                    </strong>
                    <span
                      style={{ color: "#6B5443", fontSize: "0.9rem", lineHeight: 1.5 }}
                    >
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── H-06: COORDENAÇÃO TÉCNICA ─────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#F5F0E8" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "center" }}>
            <div data-aos="fade-right" style={{ flex: "0 0 auto" }}>
              <img
                src="/photos/isabela-quem-conduz.jpg"
                alt="Isabela Loiane, Engenheira Florestal, CREA-PA 1521301735"
                style={{
                  width: "clamp(180px, 26vw, 280px)",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                  borderRadius: 12,
                  display: "block",
                }}
              />
            </div>
            <div data-aos="fade-left" style={{ flex: "1 1 300px" }}>
              <span className="section-caption">COORDENAÇÃO TÉCNICA</span>
              <h2
                style={{
                  fontFamily: "'Comfortaa', cursive",
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  color: "#2C1A0E",
                  margin: "12px 0 6px",
                }}
              >
                Isabela Loiane, responsável técnica da IL Ambiental
              </h2>
              <p
                style={{
                  color: "#734120",
                  fontWeight: 600,
                  fontSize: "0.92rem",
                  marginBottom: 20,
                }}
              >
                Engenheira Florestal · Pós-graduação em Direito Ambiental (CESUPA) · CREA-PA 1521301735
              </p>
              <p
                style={{
                  color: "#2C1A0E",
                  lineHeight: 1.75,
                  fontSize: "1rem",
                  marginBottom: 20,
                }}
              >
                Os projetos da IL Ambiental têm coordenação técnica da engenheira florestal
                Isabela Loiane, formada pela Universidade do Estado do Pará (UEPA) e
                pós-graduada em Direito Ambiental pelo CESUPA. Com atuação no mercado ambiental
                desde 2022, reúne experiência em órgãos públicos, como a SEMMA e a Emater, e
                no setor privado. Essa combinação permite conduzir cada processo considerando,
                ao mesmo tempo, a exigência técnica, o enquadramento legal e a realidade da
                operação.
              </p>
              <Link
href="/sobre" className="btn-primary">
                Conhecer a trajetória
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLIENTS H-09 ─────────────────────────────────────────── */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-caption" data-aos="fade-up">
              EXPERIÊNCIA
            </span>
            <h2
              data-aos="fade-up"
              style={{
                fontFamily: "'Comfortaa', cursive",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                color: "#2C1A0E",
                margin: 0,
              }}
            >
              Empresas que já contaram com a IL Ambiental
            </h2>
            <span
              className="section-title-line"
              data-aos="fade-up"
              style={{ margin: "14px auto 18px" }}
            />
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              style={{
                color: "#6B5443",
                fontSize: "1rem",
                lineHeight: 1.6,
                marginTop: 0,
              }}
            >
              Experiência com empresas da agroindústria, de alimentos e de logística.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 1,
              maxWidth: 720,
              margin: "0 auto",
              borderTop: "1px solid rgba(181,137,94,0.2)",
            }}
          >
            {[
              {
                name: "Tropoc",
                sector: "Multinacional do beneficiamento de pimenta-do-reino",
              },
              {
                name: "Fruta Pronta",
                sector: "Produção de polpa de açaí, Portel (PA)",
              },
              {
                name: "Transzilli",
                sector: "Transporte, armazenagem e distribuição",
              },
            ].map((c, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                style={{
                  padding: "28px 24px",
                  borderBottom: "1px solid rgba(181,137,94,0.2)",
                }}
              >
                <h4
                  style={{
                    fontWeight: 700,
                    color: "#2C1A0E",
                    fontSize: "1.1rem",
                    marginBottom: 4,
                  }}
                >
                  {c.name}
                </h4>
                <p
                  style={{
                    color: "#6B5443",
                    fontSize: "0.875rem",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {c.sector}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER H-10 ──────────────────────────────────────── */}
      <section
        className="cta-section"
        style={{ background: "#452816", padding: "72px 24px", textAlign: "center" }}
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
          Comece por um diagnóstico técnico da situação ambiental da sua empresa.
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          style={{
            color: "rgba(223,196,159,0.82)",
            fontSize: "1.05rem",
            maxWidth: 600,
            margin: "16px auto 32px",
            lineHeight: 1.7,
          }}
        >
          O Diagnóstico Vértice mapeia licenças, condicionantes, outorgas e prazos, e indica
          o que precisa ser feito nos próximos 12 meses.
        </p>
        <div data-aos="fade-up" data-aos-delay="200">
          <Link
            href="/contato?assunto=vertice"
            className="btn-light"
            style={{ fontSize: "1.05rem", padding: "16px 40px" }}
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
            Sem compromisso de contratação. Retorno em até 1 dia útil.
          </p>
          <p style={{ marginTop: 12 }}>
            <a
              href="https://wa.me/5591992723570"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.9rem",
                color: "rgba(223,196,159,0.6)",
                textDecoration: "underline",
              }}
            >
              ou fale com a IL Ambiental
            </a>
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
