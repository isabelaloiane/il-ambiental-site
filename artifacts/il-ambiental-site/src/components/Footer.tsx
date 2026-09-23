import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: "Outorga e uso da água", href: "/servicos#agua" },
    { label: "Licenciamento ambiental", href: "/servicos#licenciamento" },
    { label: "Relatórios ambientais", href: "/servicos#relatorios" },
    { label: "PGRS e resíduos", href: "/servicos#pgrs" },
    { label: "Notificações e exigências", href: "/servicos#notificacoes" },
  ];

  const pages = [
    { label: "Início", href: "/" },
    { label: "Gestão Ambiental", href: "/gestao-ambiental" },
    { label: "Serviços", href: "/servicos" },
    { label: "Sobre", href: "/sobre" },
    { label: "Contato", href: "/contato" },
    { label: "Política de Privacidade", href: "/privacidade" },
  ];

  return (
    <footer
      style={{
        background: "#2C1A0E",
        color: "rgba(223,196,159,0.75)",
        fontFamily: "'Poppins', sans-serif",
        fontSize: "0.84rem",
        lineHeight: 1.6,
      }}
    >
      <div
        className="footer-cols"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "56px 24px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 40,
        }}
      >
        {/* Coluna 1: Identidade */}
        <div>
          <img
            src="/logo.png"
            alt="IL Ambiental"
            style={{ height: 36, marginBottom: 14, filter: "brightness(0) invert(1) opacity(0.85)" }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
          <p style={{ margin: "0 0 10px", color: "rgba(223,196,159,0.6)", fontSize: "0.8rem" }}>
            Engenharia e consultoria ambiental para empresas da Região Metropolitana de Belém.
          </p>
          <p style={{ margin: 0, fontSize: "0.78rem", color: "rgba(223,196,159,0.45)" }}>
            Responsável técnica: Isabela Loiane<br />
            Engenheira Florestal · CREA-PA 1521301735<br />
            CREA-PA · Belém, Pará
          </p>
        </div>

        {/* Coluna 2: Serviços */}
        <div>
          <h4 style={{ fontFamily: "'Comfortaa', cursive", fontWeight: 700, color: "#DFC49F", fontSize: "0.9rem", margin: "0 0 14px" }}>
            Serviços
          </h4>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} style={{ color: "rgba(223,196,159,0.65)", textDecoration: "none", fontSize: "0.83rem", transition: "color 0.15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#DFC49F")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(223,196,159,0.65)")}
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3: Páginas */}
        <div>
          <h4 style={{ fontFamily: "'Comfortaa', cursive", fontWeight: 700, color: "#DFC49F", fontSize: "0.9rem", margin: "0 0 14px" }}>
            Páginas
          </h4>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
            {pages.map((p) => (
              <li key={p.href}>
                <Link href={p.href} style={{ color: "rgba(223,196,159,0.65)", textDecoration: "none", fontSize: "0.83rem", transition: "color 0.15s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#DFC49F")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(223,196,159,0.65)")}
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 4: Contato */}
        <div>
          <h4 style={{ fontFamily: "'Comfortaa', cursive", fontWeight: 700, color: "#DFC49F", fontSize: "0.9rem", margin: "0 0 14px" }}>
            Contato
          </h4>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            <li>
              <a href="https://wa.me/5591992723570" target="_blank" rel="noopener noreferrer"
                style={{ color: "rgba(223,196,159,0.65)", textDecoration: "none", display: "flex", alignItems: "center", gap: 8, fontSize: "0.83rem" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#DFC49F")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(223,196,159,0.65)")}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.116 1.522 5.849L.058 23.5a.5.5 0 0 0 .604.635l5.825-1.527A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.809 9.809 0 0 1-5.005-1.372l-.359-.214-3.723.976.994-3.629-.234-.373A9.818 9.818 0 0 1 2.182 12c0-5.413 4.405-9.818 9.818-9.818 5.413 0 9.818 4.405 9.818 9.818 0 5.413-4.405 9.818-9.818 9.818z"/>
                </svg>
                (91) 99272-3570
              </a>
            </li>
            <li>
              <a href="mailto:contato@ilambiental.com.br"
                style={{ color: "rgba(223,196,159,0.65)", textDecoration: "none", display: "flex", alignItems: "center", gap: 8, fontSize: "0.83rem" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#DFC49F")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(223,196,159,0.65)")}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                contato@ilambiental.com.br
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/il-engenharia-e-consultoria-ambiental/" target="_blank" rel="noopener noreferrer"
                style={{ color: "rgba(223,196,159,0.65)", textDecoration: "none", display: "flex", alignItems: "center", gap: 8, fontSize: "0.83rem" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#DFC49F")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(223,196,159,0.65)")}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zm2-4a2 2 0 0 1 0 4 2 2 0 0 1 0-4z"/>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://instagram.com/il.ambiental" target="_blank" rel="noopener noreferrer"
                style={{ color: "rgba(223,196,159,0.65)", textDecoration: "none", display: "flex", alignItems: "center", gap: 8, fontSize: "0.83rem" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#DFC49F")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(223,196,159,0.65)")}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Instagram
              </a>
            </li>
          </ul>
          <div style={{ marginTop: 20 }}>
            <Link href="/contato?assunto=vertice"
              style={{ display: "inline-block", background: "#B5895E", color: "#fff", borderRadius: 8, padding: "9px 18px", fontSize: "0.8rem", fontWeight: 600, textDecoration: "none" }}
            >
              Diagnóstico Vértice
            </Link>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="footer-bottom-bar"
        style={{ borderTop: "1px solid rgba(223,196,159,0.1)", maxWidth: 1100, margin: "0 auto", padding: "16px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 10 }}
      >
        <p style={{ margin: 0, fontSize: "0.76rem", color: "rgba(223,196,159,0.38)" }}>
          &copy; {currentYear} IL Ambiental. Todos os direitos reservados.
        </p>
        <div style={{ display: "flex", gap: 16 }}>
          <Link href="/privacidade" style={{ color: "rgba(223,196,159,0.38)", textDecoration: "none", fontSize: "0.76rem" }}>
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
