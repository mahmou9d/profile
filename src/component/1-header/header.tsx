import { useState, useEffect, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import "./header.css";

const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/about", label: "About" },
];

const Logo = memo(() => (
  <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="logo-container">
    <div className="header-logo-text">
      MAHMOUD <span className="header-logo-accent">MOHAMED</span>
    </div>
  </Link>
));

Logo.displayName = "Logo";

const NavItem = memo(
  ({ item, isActive }: { item: (typeof NAV_ITEMS)[0]; isActive: boolean }) => {
    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
      <Link
        to={item.path}
        onClick={handleClick}
        className={`nav-link ${isActive ? "active" : ""}`}
      >
        <span className="nav-link-text">{item.label}</span>
        {isActive && (
          <motion.div
            layoutId="activeUnderline"
            className="nav-link-underline"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    );
  },
);

NavItem.displayName = "NavItem";



const MobileMenu = memo(
  ({ showModal, setShowModal, location }: any) => (
    <AnimatePresence>
      {showModal && (
        <>
          <motion.div
            className="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowModal(false)}
          />

          <motion.div
            className="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
          >
            <div className="mobile-menu-header">
              <Logo />
              <button
                className="mobile-close"
                onClick={() => setShowModal(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="mobile-nav-list">
              {NAV_ITEMS.map((item, index) => {
                const isActive =
                  location.pathname.toLowerCase() === item.path.toLowerCase();
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`mobile-nav-link ${isActive ? "active" : ""}`}
                    onClick={() => setShowModal(false)}
                  >
                    <span className="mobile-nav-number">0{index + 1}</span>
                    <span className="mobile-nav-label">{item.label}</span>
                  </Link>
                );
              })}
            </nav>


          </motion.div>
        </>
      )}
    </AnimatePresence>
  ),
);

MobileMenu.displayName = "MobileMenu";

const Header = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }, []);

  useEffect(() => {
    setShowModal(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`creative-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-wrapper">
          <Logo />

          <nav className="creative-nav">
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.path}
                item={item}
                isActive={
                  location.pathname.toLowerCase() === item.path.toLowerCase()
                }
              />
            ))}
          </nav>

          <div className="header-actions">

            <button
              onClick={() => setShowModal(true)}
              className="mobile-toggle"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        showModal={showModal}
        setShowModal={setShowModal}
        location={location}
      />
    </>
  );
};

export default memo(Header);
