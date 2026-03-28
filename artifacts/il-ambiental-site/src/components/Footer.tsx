import { Link } from "wouter";

export function Footer() {
  return (
    <footer style={{ background: "#0F2B1A", color: "rgba(255,255,255,0.65)", paddingTop: 72, paddingBottom: 36, borderTop: "1px solid #1A4D2E" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 48 }}>

          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 4,
                background: "#D4A853", color: "#1A4D2E",
                fontFamily: "'Comfortaa', cursive", fontWeight: 700, fontSize: "1.1rem",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>IL</div>
              <div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#fff" }}>Engenharia e</div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.6rem", color: "#D4A853", textTransform: "uppercase", letterSpacing: "0.14em" }}>Consultoria Ambiental</div>
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.6 }}>
              Excelência técnica em gestão e licenciamento ambiental para empreendimentos na região amazônica.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#fff", fontSize: "0.95rem", marginBottom: 16 }}>Contato</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              <li style={{ fontSize: "0.85rem", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#4CAF82" }}>✆</span>
                <a href="tel:+5591992503317" style={{ color: "inherit", textDecoration: "none" }}>+55 91 99250-3317</a>
              </li>
              <li style={{ fontSize: "0.85rem", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#4CAF82" }}>✉</span>
                <a href="mailto:contate.ilambiental@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>contate.ilambiental@gmail.com</a>
              </li>
              <li style={{ fontSize: "0.85rem", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#4CAF82" }}>⚲</span>
                <span>Belém, Pará, Brasil</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#fff", fontSize: "0.95rem", marginBottom: 16 }}>Links Rápidos</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { href: "/sobre", label: "Quem Somos" },
                { href: "/servicos", label: "Nossos Serviços" },
                { href: "/contato", label: "Fale Conosco" },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", textDecoration: "none" }}
                    onMouseOver={e => (e.currentTarget.style.color = "#fff")}
                    onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#fff", fontSize: "0.95rem", marginBottom: 16 }}>Horário de Atendimento</h4>
            <p style={{ fontSize: "0.85rem", lineHeight: 1.7 }}>
              Segunda a sexta-feira,<br />das 08h às 18h
            </p>
          </div>

        </div>

        <div style={{ borderTop: "1px solid #1A4D2E", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: "0.78rem" }}>© {new Date().getFullYear()} IL Engenharia e Consultoria Ambiental. Todos os direitos reservados.</p>
          <div style={{ display: "flex", gap: 16 }}>
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/company/il-engenharia-e-consultoria-ambiental/about/?viewAsMember=true" },
              { label: "Instagram", href: "https://www.instagram.com/ilambiental/" },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                onMouseOver={e => (e.currentTarget.style.color = "#fff")}
                onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >{s.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
