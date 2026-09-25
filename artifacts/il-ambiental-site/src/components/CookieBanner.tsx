import { useState, useEffect } from "react";
import { Link } from "wouter";

const STORAGE_KEY = "il_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  const acceptEssential = () => {
    localStorage.setItem(STORAGE_KEY, "essential");
    setVisible(false);
  };

  const acceptAll = () => {
    localStorage.setItem(STORAGE_KEY, "all");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "#1A0F08",
        borderTop: "2px solid rgba(181,137,94,0.35)",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        gap: 20,
        flexWrap: "wrap",
        justifyContent: "space-between",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.4)",
      }}
    >
      <p
        style={{
          color: "#DFC49F",
          fontSize: "0.82rem",
          lineHeight: 1.6,
          margin: 0,
          flex: "1 1 300px",
          maxWidth: 680,
        }}
      >
        Usamos cookies essenciais para o funcionamento do site e, com sua autorização, cookies analíticos para entender como ele é utilizado.
        Ao continuar navegando, você concorda com nossa{" "}
        <Link href="/privacidade" style={{ color: "#B5895E", textDecoration: "underline" }}>
          Política de Privacidade
        </Link>.
      </p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button
          onClick={acceptEssential}
          style={{
            background: "transparent",
            border: "1px solid rgba(181,137,94,0.5)",
            color: "#DFC49F",
            borderRadius: 6,
            padding: "8px 18px",
            fontSize: "0.8rem",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "'Poppins', sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          Apenas essenciais
        </button>
        <button
          onClick={acceptAll}
          style={{
            background: "#734120",
            border: "none",
            color: "#fff",
            borderRadius: 6,
            padding: "8px 18px",
            fontSize: "0.8rem",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "'Poppins', sans-serif",
            whiteSpace: "nowrap",
          }}
        >
          Aceitar todos
        </button>
      </div>
    </div>
  );
}
