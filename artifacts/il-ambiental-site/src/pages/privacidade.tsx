import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Privacidade() {
  useEffect(() => {
    document.title = "Política de Privacidade | IL Ambiental";
    return () => { document.title = "IL Ambiental | Engenharia e consultoria ambiental em Belém"; };
  }, []);

  const section = (titulo: string, conteudo: React.ReactNode) => (
    <div style={{ marginBottom: 36 }}>
      <h2
        style={{
          fontFamily: "'Comfortaa', cursive",
          fontWeight: 700,
          fontSize: "1.2rem",
          color: "#2C1A0E",
          marginBottom: 12,
        }}
      >
        {titulo}
      </h2>
      {conteudo}
    </div>
  );

  const p = (text: string) => (
    <p style={{ color: "#4B3728", lineHeight: 1.8, fontSize: "0.9rem", margin: "0 0 10px" }}>{text}</p>
  );

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh" }}>
      <Navbar />

      <section
        style={{
          background: "linear-gradient(135deg, rgb(238,231,220) 0%, rgb(245,240,232) 45%, rgb(240,234,225) 100%)",
          padding: "56px 24px 40px",
          borderBottom: "1px solid rgba(181,137,94,0.18)",
          textAlign: "center",
        }}
      >
        <span className="section-caption">Legal</span>
        <h1
          style={{
            fontFamily: "'Comfortaa', cursive",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            color: "#2C1A0E",
            margin: 0,
          }}
        >
          Política de Privacidade
        </h1>
        <p style={{ color: "#6B5443", fontSize: "0.85rem", marginTop: 10 }}>
          Última atualização: setembro de 2025
        </p>
      </section>

      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>

          {section("1. Quem somos",
            <>
              {p("IL Ambiental (razão social: IL Engenharia e Consultoria Ambiental). Este site é operado por Isabela Loiane, responsável técnica e titular da empresa, com sede em Belém, Pará.")}
              {p("Contato: contato@ilambiental.com.br")}
            </>
          )}

          {section("2. Quais dados coletamos",
            <>
              {p("Ao preencher o formulário de contato neste site, coletamos: nome, nome da empresa, município, endereço de e-mail, número de telefone/WhatsApp, assunto selecionado e mensagem livre.")}
              {p("Dados de navegação como endereço IP, páginas visitadas e tempo de sessão podem ser coletados por ferramentas analíticas (Google Analytics ou similar), quando ativas.")}
            </>
          )}

          {section("3. Para que usamos os dados",
            <>
              {p("Os dados enviados pelo formulário são usados exclusivamente para responder à sua mensagem e dar continuidade ao atendimento solicitado.")}
              {p("Não utilizamos seus dados para envio de comunicações não solicitadas (spam), e não vendemos nem repassamos suas informações a terceiros.")}
            </>
          )}

          {section("4. Base legal (LGPD)",
            <>
              {p("O tratamento dos dados coletados pelo formulário tem como base legal o legítimo interesse e o consentimento do titular, nos termos do art. 7º da Lei 13.709/2018 (LGPD).")}
            </>
          )}

          {section("5. Por quanto tempo guardamos os dados",
            <>
              {p("Guardamos os dados do formulário pelo tempo necessário ao atendimento e, quando aplicável, pelo prazo exigido por obrigação legal ou contratual.")}
            </>
          )}

          {section("6. Cookies e rastreamento",
            <>
              {p("Este site pode utilizar cookies para fins de análise de tráfego. Você pode configurar seu navegador para recusar cookies, mas algumas funcionalidades podem ser afetadas.")}
            </>
          )}

          {section("7. Seus direitos",
            <>
              {p("De acordo com a LGPD, você tem direito a: confirmar a existência de tratamento, acessar seus dados, corrigir dados incorretos, solicitar exclusão, revogar consentimento e obter informações sobre o compartilhamento.")}
              {p("Para exercer esses direitos, entre em contato: contato@ilambiental.com.br")}
            </>
          )}

          {section("8. Links externos",
            <>
              {p("Este site pode conter links para sites de terceiros (redes sociais, órgãos ambientais). A IL Ambiental não se responsabiliza pelas práticas de privacidade desses sites.")}
            </>
          )}

          {section("9. Alterações nesta política",
            <>
              {p("Esta política pode ser atualizada periodicamente. A data da última revisão está indicada no topo desta página.")}
            </>
          )}

          {section("10. Contato",
            <>
              {p("Dúvidas sobre esta política: contato@ilambiental.com.br ou pelo formulário em /contato.")}
            </>
          )}

          <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid rgba(181,137,94,0.2)" }}>
            <Link href="/" style={{ color: "#B5895E", textDecoration: "none", fontSize: "0.85rem", fontWeight: 600 }}>
              ← Voltar ao início
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
