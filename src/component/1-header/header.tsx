import { useState, useEffect, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./header.css";

const NAV = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Blur on scroll
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isActive = (path: string) =>
    location.pathname.toLowerCase() === path.toLowerCase();

  return (
    <>
      <header className={`hdr${scrolled ? " scrolled" : ""}`}>
        <div className="hdr__inner">
          {/* Logo */}
          <Link
            to="/"
            className="hdr__logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span style={{ color: "var(--accent)" }}>Mahmoud</span> Mohamed{" "}
            <span className="hdr__logo-dot">.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hdr__nav">
            {NAV.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hdr__link${isActive(item.path) ? " active" : ""}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {item.label}
                {isActive(item.path) && <span className="hdr__active-pill" />}
              </Link>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            className={`hdr__burger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="hdr__burger-bar" style={{ width: "100%" }} />
            <span className="hdr__burger-bar" style={{ width: "70%" }} />
            <span className="hdr__burger-bar" style={{ width: "50%" }} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="hdr__drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="hdr__drawer-backdrop"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="hdr__drawer-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
            >
              <div className="hdr__drawer-top">
                <button
                  className="hdr__drawer-close"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <nav className="hdr__drawer-nav">
                {NAV.map((item, i) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`hdr__drawer-link${isActive(item.path) ? " active" : ""}`}
                    onClick={() => {
                      setMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {item.label}
                    <span className="hdr__drawer-link-num">0{i + 1}</span>
                  </Link>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Header);
