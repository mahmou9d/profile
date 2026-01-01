import { useState, useEffect } from "react";
import "./header.css";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, X, Sparkles } from "lucide-react";

const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("currentMode") ?? "dark"
  );
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    setShowModal(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("currentMode", newTheme);
    setTheme(newTheme);
  };

  const navItems = [
    { path: "/", label: "Home", color: "#00f5ff" },
    { path: "/projects", label: "Projects", color: "#ff00ff" },
    { path: "/About", label: "About", color: "#ffff00" },
  ];

  return (
    <>
      <header className={`creative-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-glow"></div>

        <div className="header-wrapper">
          {/* Logo with Enhanced Glow Effect */}
          <Link to="/" className="logo-container">
            <div className="logo-wrapper">
              <img
                className="logo-img"
                src="./mahmoud-high-resolution-logo-transparent.webp"
                alt="Mahmoud"
                loading="eager"
              />
              <motion.div
                className="logo-sparkle"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 1, 0.4],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles size={18} />
              </motion.div>
            </div>
          </Link>

          {/* Enhanced Navigation */}
          <nav className="creative-nav">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${isActive ? "active" : ""}`}
                    style={{ "--nav-color": item.color } as any}
                  >
                    <span className="nav-link-text">{item.label}</span>
                    <motion.div
                      className="nav-link-underline"
                      initial={false}
                      animate={{
                        scaleX: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                    <div className="nav-link-glow"></div>
                    <div className="nav-link-particles">
                      <span className="particle"></span>
                      <span className="particle"></span>
                      <span className="particle"></span>
                      <span className="particle"></span>
                      <span className="particle"></span>
                      <span className="particle"></span>
                      <span className="particle"></span>
                      <span className="particle"></span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Enhanced Controls Section */}
          <div className="header-actions">
            {/* Enhanced Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="theme-btn"
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
            >
              <motion.div
                className="theme-btn-inner"
                animate={{ rotate: theme === "dark" ? 0 : 360 }}
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <div className="theme-icon-bg"></div>
                <motion.div
                  initial={false}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.3 }}
                  key={theme}
                >
                  {theme === "dark" ? (
                    <Moon className="theme-icon" size={19} />
                  ) : (
                    <Sun className="theme-icon" size={19} />
                  )}
                </motion.div>
              </motion.div>
              <div className="theme-btn-ripple"></div>
              <div className="theme-btn-glow"></div>
            </motion.button>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              onClick={() => setShowModal(true)}
              className="mobile-toggle"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <motion.div className="mobile-toggle-lines">
                <motion.span
                  animate={{ width: showModal ? "0px" : "22px" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={{ width: showModal ? "0px" : "18px" }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                />
                <motion.span
                  animate={{ width: showModal ? "0px" : "22px" }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setShowModal(false)}
            />

            <motion.div
              className="mobile-menu"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 250,
                mass: 0.8,
              }}
            >
              {/* Enhanced Background Effects */}
              <div className="mobile-menu-bg">
                <div className="menu-bg-shape shape-1"></div>
                <div className="menu-bg-shape shape-2"></div>
                <div className="menu-bg-shape shape-3"></div>
              </div>
              <div className="menu-grid-pattern"></div>

              {/* Enhanced Close Button */}
              <motion.button
                className="mobile-close"
                onClick={() => setShowModal(false)}
                whileHover={{ rotate: 90, scale: 1.15 }}
                whileTap={{ scale: 0.88 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <X size={26} />
                <div className="mobile-close-glow"></div>
              </motion.button>

              {/* Enhanced Menu Title */}
              <motion.div
                className="mobile-menu-title"
                initial={{ opacity: 0, y: -30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
              >
                <h2>Navigation</h2>
                <motion.div
                  className="title-line"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                />
              </motion.div>

              {/* Enhanced Navigation Items */}
              <div className="mobile-nav-list">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 60, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{
                        delay: 0.25 + index * 0.08,
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      }}
                    >
                      <Link
                        to={item.path}
                        className={`mobile-nav-link ${
                          isActive ? "active" : ""
                        }`}
                        style={{ "--item-color": item.color } as any}
                        onClick={() => setShowModal(false)}
                      >
                        <motion.div
                          className="mobile-nav-number"
                          animate={
                            isActive
                              ? { scale: [1, 1.2, 1], rotate: [0, 10, 0] }
                              : {}
                          }
                          transition={{ duration: 0.5 }}
                        >
                          0{index + 1}
                        </motion.div>
                        <div className="mobile-nav-content">
                          <span className="mobile-nav-label">{item.label}</span>
                          <motion.div
                            className="mobile-nav-arrow"
                            animate={{ x: isActive ? 8 : 0 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            →
                          </motion.div>
                        </div>
                        <div className="mobile-nav-glow"></div>
                        {isActive && (
                          <motion.div
                            className="active-indicator"
                            layoutId="activeMenuItem"
                            transition={{ type: "spring", stiffness: 300 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Enhanced Theme Toggle in Menu */}
              <motion.div
                className="mobile-theme-section"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <motion.button
                  onClick={toggleTheme}
                  className="mobile-theme-btn"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="mobile-theme-icon"
                    animate={{ rotate: theme === "dark" ? 0 : 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
                  </motion.div>
                  <span>
                    Switch to {theme === "dark" ? "Light" : "Dark"} Mode
                  </span>
                  <motion.div
                    className="mobile-theme-indicator"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
