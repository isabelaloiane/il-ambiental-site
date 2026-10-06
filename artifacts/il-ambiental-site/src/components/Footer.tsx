import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      style={{
        background: "#452816",
        color: "rgba(223,196,159,0.72)",
        paddingTop: 72,
        paddingBottom: 36,
        borderTop: "1px solid rgba(223,196,159,0.12)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div
          className="footer-cols"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
            marginBottom: 48,
          }}
        >

          {/* Branding */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <img
                src="/Logo_rodape.png"
                alt="IL Ambiental, engenharia e consultoria ambiental"
                className="footer-logo-img"
                loading="lazy"
              />
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.6,
                color: "rgba(223,196,159,0.65)",
              }}
            >
              Gestão ambiental e consultoria técnica para empresas da Região
              Metropolitana de Belém.
            </p>
            <p
              style={{
                fontSize: "0.78rem",
                lineHeight: 1.5,
                color: "rgba(223,196,159,0.45)",
                marginTop: 10,
              }}
            >
              Isabela Loiane · Engenheira Florestal · CREA-PA 1521301735
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                color: "#DFC49F",
                fontSize: "0.95rem",
                marginBottom: 16,
              }}
            >
              Contato
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <li
                style={{
                  fontSize: "0.85rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Phone size={14} color="#B5895E" aria-hidden="true" style={{ flexShrink: 0 }} />
                <a
                  href="tel:+5591992723570"
                  style={{ color: "rgba(223,196,159,0.72)", textDecoration: "none" }}
                  onMouseOver={e => (e.currentTarget.style.color = "#DFC49F")}
                  onMouseOut={e => (e.currentTarget.style.color = "rgba(223,196,159,0.72)")}
                >
                  +55 91 99272-3570
                </a>
              </li>
              <li
                style={{
                  fontSize: "0.85rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Mail size={14} color="#B5895E" aria-hidden="true" style={{ flexShrink: 0 }} />
                <a
                  href="mailto:contato@ilambiental.com.br"
                  style={{ color: "rgba(223,196,159,0.72)", textDecoration: "none" }}
                  onMouseOver={e => (e.currentTarget.style.color = "#DFC49F")}
                  onMouseOut={e => (e.currentTarget.style.color = "rgba(223,196,159,0.72)")}
                >
                  contato@ilambiental.com.br
                </a>
              </li>
              <li
                style={{
                  fontSize: "0.85rem",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <MapPin size={14} color="#B5895E" aria-hidden="true" style={{ flexShrink: 0 }} />
                <span>Belém, Pará, Brasil</span>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                color: "#DFC49F",
                fontSize: "0.95rem",
                marginBottom: 16,
              }}
            >
              Serviços
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {[
                { href: "/gestao-ambiental", label: "Gestão ambiental contínua" },
                { href: "/servicos#licenciamento", label: "Licenciamento ambiental" },
                { href: "/servicos#agua", label: "Outorga de recursos hídricos" },
                { href: "/servicos#relatorios", label: "Relatórios técnicos" },
                { href: "/servicos#pgrs", label: "PGRS" },
                { href: "/servicos#condicionantes", label: "Condicionantes" },
                { href: "/servicos#notificacoes", label: "Autos de infração e notificações" },
              ].map(item => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(223,196,159,0.65)",
                      textDecoration: "none",
                    }}
                    onMouseOver={e => (e.currentTarget.style.color = "#DFC49F")}
                    onMouseOut={e =>
                      (e.currentTarget.style.color = "rgba(223,196,159,0.65)")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                color: "#DFC49F",
                fontSize: "0.95rem",
                marginBottom: 16,
              }}
            >
              Links Rápidos
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {[
                { href: "/", label: "Início" },
                { href: "/gestao-ambiental", label: "Gestão Ambiental" },
                { href: "/servicos", label: "Serviços" },
                { href: "/sobre", label: "Sobre" },
                { href: "/contato", label: "Contato" },
                { href: "/privacidade", label: "Política de Privacidade" },
              ].map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(223,196,159,0.65)",
                      textDecoration: "none",
                    }}
                    onMouseOver={e => (e.currentTarget.style.color = "#DFC49F")}
                    onMouseOut={e =>
                      (e.currentTarget.style.color = "rgba(223,196,159,0.65)")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h4
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                color: "#DFC49F",
                fontSize: "0.95rem",
                marginBottom: 16,
              }}
            >
              Horário de Atendimento
            </h4>
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "rgba(223,196,159,0.65)",
              }}
            >
              Segunda a sexta-feira,
              <br />
              das 08h às 18h
            </p>
          </div>

        </div>

        <div className="footer-bottom-bar">
          <p style={{ fontSize: "0.78rem", color: "rgba(223,196,159,0.5)" }}>
            © {new Date().getFullYear()} IL Ambiental. Todos os direitos reservados.
          </p>
          <div className="footer-social" style={{ display: "flex", gap: 16 }}>
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/il-engenharia-e-consultoria-ambiental/about/",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/ilambiental/",
              },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(223,196,159,0.5)",
                  textDecoration: "none",
                }}
                onMouseOver={e => (e.currentTarget.style.color = "#DFC49F")}
                onMouseOut={e =>
                  (e.currentTarget.style.color = "rgba(223,196,159,0.5)")
                }
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
