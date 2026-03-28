import { Link, useLocation } from "wouter";

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { href: "/sobre", label: "Sobre" },
    { href: "/servicos", label: "Serviços" },
    { href: "/contato", label: "Contato" },
  ];

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      width: "100%",
      background: "#1A4D2E",
      borderBottom: "1px solid rgba(46,125,82,0.3)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 24px",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: 40, height: 40, borderRadius: 4,
            background: "#D4A853",
            color: "#1A4D2E",
            fontFamily: "'Comfortaa', cursive",
            fontWeight: 700,
            fontSize: "1.2rem",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0
          }}>
            IL
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff", lineHeight: 1.2 }}>
              Engenharia e
            </span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "0.65rem", color: "#D4A853", textTransform: "uppercase", letterSpacing: "0.14em" }}>
              Consultoria Ambiental
            </span>
          </div>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <div style={{ display: "flex", gap: "28px" }}>
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: location === link.href ? "#D4A853" : "rgba(255,255,255,0.85)",
                  textDecoration: "none",
                  transition: "color 200ms ease"
                }}
                onMouseOver={e => (e.currentTarget.style.color = "#D4A853")}
                onMouseOut={e => (e.currentTarget.style.color = location === link.href ? "#D4A853" : "rgba(255,255,255,0.85)")}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contato"
            style={{
              background: "#D4A853",
              color: "#1A3A2A",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "0.875rem",
              padding: "10px 22px",
              borderRadius: 4,
              textDecoration: "none",
              transition: "background 200ms ease"
            }}
            onMouseOver={e => (e.currentTarget.style.background = "#c59a45")}
            onMouseOut={e => (e.currentTarget.style.background = "#D4A853")}
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </nav>
  );
}
