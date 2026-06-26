import { Link } from "wouter";

export function Footer() {
  return (
    <footer style={{ background: "#452816", color: "rgba(223,196,159,0.72)", paddingTop: 72, paddingBottom: 36, borderTop: "1px solid rgba(223,196,159,0.12)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div className="footer-cols" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 48 }}>

          <div>
            <div style={{ marginBottom: 16 }}>
              <img
                src="/Logo_rodape.png"
                alt="IL Engenharia e Consultoria Ambiental"
                className="footer-logo-img"
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
                <a href="mailto:contato@ilambiental.com.br" style={{ color: "rgba(223,196,159,0.72)", textDecoration: "none" }}
                  onMouseOver={e => (e.currentTarget.style.color = "#DFC49F")}
