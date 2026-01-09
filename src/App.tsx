import { useEffect } from "react";
import Header from "./components/Header";
import { useThemeStore } from "./store/store";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <>
      <Header  />
      <main className="  ">
            <Home />
            <Projects />
            <About />
            <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
