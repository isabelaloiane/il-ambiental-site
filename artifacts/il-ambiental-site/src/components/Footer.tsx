import { Link } from "wouter";

export function Footer() {
  return (
    <footer style={{ background: "#452816", color: "rgba(223,196,159,0.72)", paddingTop: 72, paddingBottom: 36, borderTop: "1px solid rgba(223,196,159,0.12)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 48 }}>

          <div>
            <div style={{ marginBottom: 16 }}>
              <img
                src="/logo-horizontal.png"
                alt="IL Engenharia e Consultoria Ambiental"
                className="footer-logo-img"
                height={36}
                style={{ height: 36, width: "auto", display: "block", objectFit: "contain", borderRadius: 6 }}
                loading="lazy"
              />
            </div>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "rgba(223,196,159,0.65)" }}>
              Consultoria ambiental especializada no Pará. Licenciamento, gestão e ESG para empresas de todos os portes.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#DFC49F", fontSize: "0.95rem", marginBottom: 16 }}>Contato</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              <li style={{ fontSize: "0.85rem", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#B5895E" }}>✆</span>
                <a href="tel:+5591992503317" style={{ color: "rgba(223,196,159,0.72)", textDecoration: "none" }}
                  onMouseOver={e => (e.currentTarget.style.color = "#DFC49F")}
                  onMouseOut={e => (e.currentTarget.style.color = "rgba(223,196,159,0.72)")}
                >+55 91 99250-3317</a>
              </li>
              <li style={{ fontSize: "0.85rem", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#B5895E" }}>✉</span>
                <a href="mailto:contate.ilambiental@gmail.com" style={{ color: "rgba(223,196,159,0.72)", textDecoration: "none" }}
                  onMouseOver={e => (e.currentTarget.style.color = "#DFC49F")}
                  onMouseOut={e => (e.currentTarget.style.color = "rgba(223,196,159,0.72)")}
                >contate.ilambiental@gmail.com</a>
              </li>
              <li style={{ fontSize: "0.85rem", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#B5895E" }}>⚲</span>
                <span>Belém, Pará, Brasil</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#DFC49F", fontSize: "0.95rem", marginBottom: 16 }}>Links Rápidos</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { href: "/sobre", label: "Quem Somos" },
                { href: "/servicos", label: "Nossos Serviços" },
                { href: "/contato", label: "Fale Conosco" },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} style={{ fontSize: "0.85rem", color: "rgba(223,196,159,0.65)", textDecoration: "none" }}
                    onMouseOver={e => (e.currentTarget.style.color = "#DFC49F")}
                    onMouseOut={e => (e.currentTarget.style.color = "rgba(223,196,159,0.65)")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#DFC49F", fontSize: "0.95rem", marginBottom: 16 }}>Horário de Atendimento</h4>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "rgba(223,196,159,0.65)" }}>
              Segunda a sexta-feira,<br />das 08h às 18h
            </p>
          </div>

        </div>

        <div style={{ borderTop: "1px solid rgba(223,196,159,0.12)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: "0.78rem", color: "rgba(223,196,159,0.5)" }}>© {new Date().getFullYear()} IL Engenharia e Consultoria Ambiental. Todos os direitos reservados.</p>
          <div style={{ display: "flex", gap: 16 }}>
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/company/il-engenharia-e-consultoria-ambiental/about/?viewAsMember=true" },
              { label: "Instagram", href: "https://www.instagram.com/ilambiental/" },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.78rem", color: "rgba(223,196,159,0.5)", textDecoration: "none" }}
                onMouseOver={e => (e.currentTarget.style.color = "#DFC49F")}
                onMouseOut={e => (e.currentTarget.style.color = "rgba(223,196,159,0.5)")}
              >{s.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
