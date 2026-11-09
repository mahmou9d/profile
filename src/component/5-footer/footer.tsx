import { memo } from "react";
import { useNavigate, useLocation } from "react-router";
import "./footer.css";

const NAV = [
  { label: "Home", path: "/", hash: false },
  { label: "Projects", path: "/projects", hash: false },
  { label: "About", path: "/about", hash: false },
  { label: "Skills", path: "/#skills", hash: true },
  { label: "Contact", path: "/#contact", hash: true },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (item: (typeof NAV)[0]) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (item.hash) {
      const id = item.path.split("#")[1];
      if (location.pathname !== "/") {
        navigate(`/#${id}`);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(item.path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="ft">
      <div className="ft__inner">
        <h2 className="ft__name">
          <span style={{ color: "var(--accent)" }}>Mahmoud</span> Mohamed{" "}
          <span className="ft__name-accent">.</span>
        </h2>

        <div className="ft__bar">
          <p className="ft__copy">
            © {new Date().getFullYear()} Mahmoud Mohamed
          </p>

          <nav className="ft__nav">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.path}
                className="ft__nav-link"
                onClick={handleClick(item)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
