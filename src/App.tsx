import { lazy, useEffect, useState, Suspense } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import Header from "./component/1-header/header";
import Hero from "./component/2-hero/hero";
import Main from "./component/3-main/main";
import Contact from "./component/4-contact/contact";
import Footer from "./component/5-footer/footer";

const Projects = lazy(() => import("./component/6-projects/Projects"));
const Skills = lazy(() => import("./component/skills/Skills"));
const About = lazy(() => import("./component/about/About"));

// Premium Loading Spinner fallback for lazy loaded components
const PageLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "60vh",
      width: "100%",
    }}
  >
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "3px solid rgba(0, 245, 255, 0.1)",
        borderTopColor: "#00f5ff",
        animation: "spin 1s infinite linear",
        boxShadow: "0 0 15px rgba(0, 245, 255, 0.2)",
      }}
    />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

// Component جديد للـ scroll handling
const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  return null;
};

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <div id="up" className="containerr">
        <Header />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Hero />

                  <motion.div
                    className="divider"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />

                  <Skills />

                  <motion.div
                    className="divider"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />

                  <Main />

                  <motion.div
                    className="divider"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />

                  <Contact />
                </motion.div>
              }
            />
            <Route
              path="/projects"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Projects />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <About />
                </motion.div>
              }
            />
          </Routes>
        </Suspense>

        <Footer />
      </div>
      {/* Enhanced Scroll to Top Button */}
      <AnimatePresence>
        {showScrollBTN && (
          <motion.button
            onClick={scrollToTop}
            className="scroll"
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 180 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            whileHover={{
              scale: 1.15,
              rotate: [0, -10, 10, 0],
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
