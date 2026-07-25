import React from "react";
import { useNavigate, useLocation } from "react-router";

import "./footer.css";

interface FooterLink {
  title: string;
  link: string;
  type: "route" | "hash";
}

const FOOTER_LINKS: FooterLink[] = [
  { title: "Home", link: "/", type: "route" },
  { title: "Projects", link: "/projects", type: "route" },
  { title: "About", link: "/about", type: "route" },
  { title: "Skills", link: "#skills", type: "hash" },
  { title: "Contact", link: "#contact", type: "hash" },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (link: FooterLink) => {
    if (link.type === "hash") {
      if (location.pathname !== "/") {
        navigate(`/${link.link}`);
      } else {
        const element = document.querySelector(link.link);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    } else {
      navigate(link.link);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="ft-section">
      <div className="ft-glow-reflector" aria-hidden />

      <div className="ft-container">
        {/* Top: Brand Header */}
        <div className="ft-brand-hero">
          <h2 className="ft-display-name">
            MAHMOUD <span className="ft-name-accent">MOHAMED</span>
          </h2>
        </div>

        {/* Middle: Clean Horizontal Navigation */}
        <div className="ft-navigation">
          {FOOTER_LINKS.map((link, index) => (
            <React.Fragment key={link.title}>
              {index > 0 && <span className="ft-nav-separator">/</span>}
              <a
                href={link.link}
                className="ft-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link);
                }}
              >
                {link.title}
              </a>
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Meta Row */}
        <div className="ft-meta-row">
          <p className="ft-copyright">
            &copy; {currentYear}{" "}
            <span className="ft-copy-name">Mahmoud Mohamed</span>. All rights
            reserved.
          </p>
          <div className="ft-status-line">
            <span className="ft-status-dot"></span>
            <span className="ft-status-text">available for work</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
