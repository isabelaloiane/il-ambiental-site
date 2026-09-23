import { useState } from "react";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { label: "Início", href: "/" },
    { label: "Gestão Ambiental", href: "/gestao-ambiental" },
    { label: "Serviços", href: "/servicos" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#fff",
        borderBottom: "1px solid rgba(181,137,94,0.2)",
        boxShadow: "0 1px 8px rgba(69,40,22,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="IL Ambiental, engenharia e consultoria ambiental"
          style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          <img
            src="/logo.png"
            alt="IL Ambiental, engenharia e consultoria ambiental"
            style={{ height: 40, width: "auto" }}
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const fallback = target.nextElementSibling as HTMLElement | null;
              if (fallback) fallback.style.display = "block";
            }}
          />
          <span
            style={{
              display: "none",
              fontFamily: "'Comfortaa', cursive",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "#452816",
            }}
          >
            IL Ambiental
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul
          style={{
            display: "flex",
            gap: 28,
            listStyle: "none",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: location === link.href ? 600 : 400,
                  color: location === link.href ? "#452816" : "#6B5443",
                  borderBottom: location === link.href ? "2px solid #B5895E" : "2px solid transparent",
                  paddingBottom: 2,
                  transition: "color 0.15s, border-color 0.15s",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contato?assunto=vertice"
          className="btn-primary"
          style={{
            fontSize: "0.82rem",
            padding: "9px 20px",
            whiteSpace: "nowrap",
            display: "inline-flex",
          }}
        >
          Diagnóstico Vértice
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#452816" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#452816" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "#fff",
            borderTop: "1px solid rgba(181,137,94,0.2)",
            padding: "16px 24px 24px",
          }}
          className="mobile-nav"
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    fontWeight: location === link.href ? 600 : 400,
                    color: location === link.href ? "#452816" : "#6B5443",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contato?assunto=vertice"
            className="btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{ display: "block", textAlign: "center", marginTop: 20 }}
          >
            Diagnóstico Vértice
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
