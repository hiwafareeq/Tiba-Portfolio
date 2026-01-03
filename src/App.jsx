import "./App.css";
import Navbar from "./components/navbar";
import LandingPage from "./pages/LandingPage";
import AboutMe from "./pages/AboutMe";
import InfoPage from "./pages/InfoPage";
import Skills from "./pages/Skills";
import Experiences from "./pages/Experience";
import Footer from "./components/Footer";
import Label from "./components/ScrollingXLabels";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    window.lenis = lenis; // 🔴 expose globally

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.lenis = null;
    };
  }, []);

  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutMe />
      <InfoPage />
      <Skills />
      <Experiences />
      <Label />
      <Footer />
    </div>
  );
}

export default App;
