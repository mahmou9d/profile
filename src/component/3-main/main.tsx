import { memo, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationArrow, FaGithub } from "react-icons/fa6";
import { myProjects } from "../6-projects/myProjects";
import Title from "../Title/Title";
import "./main.css";

// Header Component
const MainHeader = memo(() => (
  <div className="main-header-section">
    <Title
      className="header-content"
      titleClassName="main-heading"
      accentClassName="main-heading-accent"
      subtitleClassName="main-subheading"
      title="Featured"
      accentText="Projects"
      subtitle="An interactive catalog of full-stack applications and frontend interfaces built with precision."
      tag="h2"
      yOffset={20}
      titleDelay={0}
      subtitleDelay={0.1}
    />
  </div>
));

MainHeader.displayName = "MainHeader";

const Main = () => {
  const projects = myProjects.slice(0, 3);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleViewAll = useCallback(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <main id="artical" className="main-section">
      {/* ambient glow orbs */}
      <div className="main-orb main-orb-1" aria-hidden />
      <div className="main-orb main-orb-2" aria-hidden />

      <MainHeader />

      {/* Interactive Split Showcase Container */}
      <div className="projects-interactive-split">
        {/* Left Side: Interactive Catalog Directory */}
        <div className="projects-directory">
          {projects.map((item, i) => {
            const isActive = activeIdx === i;
            return (
              <div
                key={item.projectTitle}
                className={`directory-row ${isActive ? "active" : ""}`}
                onMouseEnter={() => setActiveIdx(i)}
              >
                {/* Directory Item Header */}
                <div className="directory-header-row">
                  <span className="directory-index">0{i + 1}</span>
                  <h3 className="directory-title">{item.projectTitle}</h3>
                </div>

                {/* Collapsible details block for active item */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      className="directory-details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <p className="directory-desc">{item.desc}</p>

                      {/* Tech stack badges */}
                      <div className="directory-tech-list">
                        {item.iconLists
                          ?.slice(0, 4)
                          .map((icon: string, idx: number) => (
                            <div key={idx} className="directory-tech-badge">
                              <img src={icon} alt="" loading="lazy" />
                            </div>
                          ))}
                      </div>

                      {/* Links Row */}
                      <div className="directory-links">
                        <motion.a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="directory-btn directory-btn-primary"
                          whileHover={{ y: -1 }}
                          whileTap={{ y: 0 }}
                        >
                          Visit Live <FaLocationArrow size={15} />
                        </motion.a>

                        {item.href && (
                          <motion.a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="directory-btn directory-btn-secondary"
                            whileHover={{ y: -1 }}
                            whileTap={{ y: 0 }}
                          >
                            GitHub <FaGithub size={15} />
                          </motion.a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right Side: Showcase Viewport Screen */}
        <div className="projects-viewport">
          <div className="viewport-glow-bg"></div>

          <div className="browser-mockup-frame">
            {/* Mockup header */}
            <div className="browser-header">
              <div className="browser-circles">
                <span className="b-dot close"></span>
                <span className="b-dot minimize"></span>
                <span className="b-dot maximize"></span>
              </div>
              <span className="browser-url">
                {projects[activeIdx].link.replace("https://", "")}
              </span>
            </div>

            {/* Mockup body with image transition */}
            <div className="browser-body">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIdx}
                  src={projects[activeIdx].imgPath}
                  alt={projects[activeIdx].projectTitle}
                  loading="lazy"
                  className="browser-screenshot"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* View All CTA */}
      <motion.div
        className="view-all-section"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Link to="projects" className="view-all-link">
          <motion.span
            className="view-all-btn"
            onClick={handleViewAll}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore All Projects →
          </motion.span>
        </Link>
      </motion.div>
    </main>
  );
};

export default memo(Main);
