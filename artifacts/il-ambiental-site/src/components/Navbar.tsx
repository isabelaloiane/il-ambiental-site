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
      background: "rgba(245, 240, 232, 0.95)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(181, 137, 94, 0.25)",
      boxShadow: "0 2px 12px rgba(69,40,22,0.07)"
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
            width: 40, height: 40, borderRadius: 6,
            background: "#734120",
            color: "#DFC49F",
            fontFamily: "'Comfortaa', cursive",
            fontWeight: 700,
            fontSize: "1.2rem",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0
          }}>
            IL
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#2C1A0E", lineHeight: 1.2 }}>
              Engenharia e
            </span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500, fontSize: "0.65rem", color: "#B5895E", textTransform: "uppercase", letterSpacing: "0.14em" }}>
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
                  color: location === link.href ? "#734120" : "#2C1A0E",
                  textDecoration: "none",
                  transition: "color 150ms ease"
                }}
                onMouseOver={e => (e.currentTarget.style.color = "#734120")}
                onMouseOut={e => (e.currentTarget.style.color = location === link.href ? "#734120" : "#2C1A0E")}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contato"
            style={{
              background: "#734120",
              color: "#DFC49F",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "0.875rem",
              padding: "10px 22px",
              borderRadius: 8,
              textDecoration: "none",
              transition: "background 150ms ease"
            }}
            onMouseOver={e => (e.currentTarget.style.background = "#452816")}
            onMouseOut={e => (e.currentTarget.style.background = "#734120")}
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </nav>
  );
}
