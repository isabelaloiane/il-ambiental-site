import { useState } from "react";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/sobre", label: "Sobre" },
    { href: "/servicos", label: "Serviços" },
    { href: "/contato", label: "Contato" },
  ];

  const close = () => setMenuOpen(false);

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <Link href="/" className="site-logo" aria-label="IL Engenharia e Consultoria Ambiental" onClick={close}>
          <img
            src="/Logo_principal.png"
            alt="IL Engenharia e Consultoria Ambiental"
            className="site-logo-img"
            loading="eager"
          />
        </Link>

        <div className="nav-desktop-links">
          <div style={{ display: "flex", gap: "28px" }}>
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link${location === link.href ? " nav-link-active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/contato" className="nav-cta-btn">Fale Conosco</Link>
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="nav-mobile-menu">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-mobile-link${location === link.href ? " nav-mobile-link-active" : ""}`}
              onClick={close}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contato" className="nav-cta-btn nav-mobile-cta" onClick={close}>
            Fale Conosco
          </Link>
        </div>
      )}
    </nav>
  );
}
