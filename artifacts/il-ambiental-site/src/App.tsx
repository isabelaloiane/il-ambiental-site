import { useEffect } from "react";
import { Route, Switch } from "wouter";
import { Router as WouterRouter } from "wouter";
import AOS from "aos";
import "aos/dist/aos.css";

import { Home } from "@/pages/home";
import { Servicos } from "@/pages/servicos";
import { Contato } from "@/pages/contato";
import { Sobre } from "@/pages/sobre";
import { GestaoAmbiental } from "@/pages/gestao-ambiental";
import { Privacidade } from "@/pages/privacidade";

function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Poppins', sans-serif",
        background: "#F5F0E8",
        textAlign: "center",
        padding: "0 24px",
      }}
    >
      <h1
        style={{
          fontFamily: "'Comfortaa', cursive",
          fontSize: "5rem",
          color: "#DFC49F",
          margin: 0,
          lineHeight: 1,
        }}
      >
        404
      </h1>
      <p style={{ color: "#6B5443", margin: "16px 0 28px", fontSize: "1.1rem" }}>
        Página não encontrada.
      </p>
      <a
        href="/"
        style={{
          background: "#452816",
          color: "#DFC49F",
          borderRadius: 8,
          padding: "11px 28px",
          textDecoration: "none",
          fontWeight: 600,
          fontSize: "0.9rem",
        }}
      >
        Voltar ao início
      </a>
    </div>
  );
}

export function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
      offset: 60,
    });
  }, []);

  return (
    <WouterRouter base={import.meta.env.BASE_URL}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/contato" component={Contato} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/gestao-ambiental" component={GestaoAmbiental} />
        <Route path="/privacidade" component={Privacidade} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}
