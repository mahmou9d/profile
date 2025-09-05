import { useEffect, useState } from "react";
import Header from "./component/1-header/header";
import Hero from "./component/2-hero/hero";
import Main from "./component/3-main/main";
import Contact from "./component/4-contact/contact";
import Footer from "./component/5-footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./component/6-projects/Projects";
import About from "./component/about/About";

const App = () => {
  const [showScrollBTN, setShowScrollBTN] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollBTN(true);
      } else {
        setShowScrollBTN(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <div id="up" className="containerr">
        <Header />
        <div className="divider" />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <div className="divider" />
                <Main />
                <div className="divider" />
                <Contact />
              </div>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div className="divider" />
        <Footer />
        <a
          style={{ opacity: showScrollBTN ? 1 : 0, transition: "1s" }}
          href="#up"
        >
          <button className="scroll icon-keyboard_arrow_up"></button>
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;
