import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import AOS from "aos";
import { Home } from "@/pages/home";
import { Servicos } from "@/pages/servicos";
import { Contato } from "@/pages/contato";
import { Sobre } from "@/pages/sobre";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // refreshHard re-evaluates all elements (needed after route change)
    setTimeout(() => AOS.refreshHard(), 50);
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/contato" component={Contato} />
        <Route path="/sobre" component={Sobre} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  useEffect(() => {
    // Delay init slightly so React finishes painting before AOS measures elements
    const timer = setTimeout(() => {
      AOS.init({
        duration: 600,
        easing: "ease-out",
        once: true,
        offset: 80,
      });
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;
