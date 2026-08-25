import { lazy, useEffect, useState, Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import Header from "./component/1-header/header";
import Hero from "./component/2-hero/hero";
import Main from "./component/3-main/main";
import Contact from "./component/4-contact/contact";
import Footer from "./component/5-footer/footer";

const Skills   = lazy(() => import("./component/skills/Skills"));
const Projects = lazy(() => import("./component/6-projects/Projects"));
const About    = lazy(() => import("./component/about/About"));

const PageLoader = () => (
  <div className="page-loader"><div className="page-loader-ring" /></div>
);

const ScrollToHash = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        document.querySelector(location.hash)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    }
  }, [location]);
  return null;
};

const App = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setShowBtn(window.scrollY > 300);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setProgress((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const r = 20;
  const circ = 2 * Math.PI * r;

  return (
    <BrowserRouter>
      <ScrollToHash />
      <div id="up" className="containerr">
        <Header />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route
              path="/"
              element={
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                  <Hero />
                  <Skills />
                  <Main />
                  <Contact />
                </motion.div>
              }
            />
            <Route
              path="/projects"
              element={
                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                  <Projects />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                  <About />
                </motion.div>
              }
            />
          </Routes>
        </Suspense>
        <Footer />
      </div>

      {/* Scroll to top */}
      <AnimatePresence>
        {showBtn && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="scroll-to-top"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Scroll to top"
          >
            <svg className="progress-ring" width="44" height="44">
              <circle
                className="progress-ring__circle"
                stroke="#3B82F6"
                strokeWidth="2"
                fill="transparent"
                r={r}
                cx="22"
                cy="22"
                style={{
                  strokeDasharray: circ,
                  strokeDashoffset: circ - (progress / 100) * circ,
                }}
              />
            </svg>
            <ArrowUp size={15} className="scroll-arrow-icon" />
          </motion.button>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
