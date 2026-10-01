import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function NotFound() {
  useEffect(() => {
    document.title = "Página não encontrada | IL Ambiental";
    // S6: add noindex for 404 page
    let meta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta") as HTMLMetaElement;
      meta.name = "robots";
      document.head.appendChild(meta);
    }
    meta.content = "noindex";
    return () => {
      document.title = "IL Ambiental | Engenharia e consultoria ambiental em Belém";
      if (meta) meta.content = "index, follow";
    };
  }, []);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", minHeight: "100vh" }}>
      <Navbar />
      <section
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px",
          background: "linear-gradient(135deg, rgb(238,231,220) 0%, rgb(245,240,232) 100%)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 480 }}>
          <p
            style={{
              fontFamily: "'Comfortaa', cursive",
              fontWeight: 700,
              fontSize: "5rem",
              color: "#B5895E",
              margin: 0,
              lineHeight: 1,
            }}
          >
            404
          </p>
          <h1
            style={{
              fontFamily: "'Comfortaa', cursive",
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "#2C1A0E",
              margin: "16px 0 12px",
            }}
          >
            Página não encontrada
          </h1>
          <p style={{ color: "#6B5443", lineHeight: 1.7, marginBottom: 32 }}>
            A página que você está procurando não existe ou foi movida.
          </p>
          <Link href="/" className="btn-primary">
            Voltar ao início
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default NotFound;
