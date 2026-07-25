import { useState, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { myProjects } from "./myProjects";
import { FiGithub, FiExternalLink, FiFilter, FiLayers } from "react-icons/fi";
import Title from "../Title/Title";
import "./Projects.css";

interface ProjectItem {
  projectTitle: string;
  category: string[];
  imgPath: string;
  link: string;
  desc: string;
  href: string;
  iconLists: string[];
}

const ProjectCard = memo(
  ({ item, index }: { item: ProjectItem; index: number }) => {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="p-card"
      >
        {/* Dynamic spot border hover */}
        <div className="p-card-glow" />

        {/* Image container */}
        <div className="p-image-wrap">
          <img
            src={item.imgPath}
            alt={item.projectTitle}
            loading="lazy"
            className="p-image"
          />
          <div className="p-image-overlay" />

          {/* Top badges */}
          <div className="p-badges">
            <span className="p-badge-live">
              <span className="p-live-dot"></span>
              Production
            </span>
          </div>
        </div>

        {/* Project details */}
        <div className="p-info">
          <h3 className="p-title">{item.projectTitle}</h3>
          <p className="p-desc">{item.desc}</p>

          {/* Tech stack */}
          <div className="p-tech-row">
            {item.iconLists?.slice(0, 6).map((icon, idx) => (
              <div key={idx} className="p-tech-icon" title="Technology">
                <img src={icon} alt="tech icon" loading="lazy" />
              </div>
            ))}
            {item.iconLists && item.iconLists.length > 6 && (
              <span className="p-tech-more">+{item.iconLists.length - 6}</span>
            )}
          </div>

          {/* Actions divider */}
          <div className="p-divider" />

          {/* Action Links */}
          <div className="p-actions">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-btn p-btn-primary"
            >
              <span>Live Demo</span>
              <FiExternalLink size={14} />
            </a>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-btn p-btn-secondary"
              title="View Codebase"
            >
              <FiGithub size={15} />
              <span>Code</span>
            </a>
          </div>
        </div>
      </motion.div>
    );
  },
);

ProjectCard.displayName = "ProjectCard";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Next.js", "React", "TypeScript", "Redux"];

  const filteredProjects = myProjects.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Next.js") {
      return project.iconLists.some((icon) => icon.includes("nextjs"));
    }
    if (filter === "React") {
      return project.iconLists.some(
        (icon) => icon.includes("re.svg") || icon.includes("react"),
      );
    }
    if (filter === "TypeScript") {
      return project.iconLists.some(
        (icon) => icon.includes("ts.svg") || icon.includes("typescript"),
      );
    }
    if (filter === "Redux") {
      return project.iconLists.some(
        (icon) => icon.includes("redux") || icon.includes("redux-48"),
      );
    }
    return true;
  });

  return (
    <div className="p-page">
      {/* Background orbs & grain */}
      <div className="p-bg-noise" aria-hidden />
      <div className="p-bg-orb p-orb-cyan" aria-hidden />
      <div className="p-bg-orb p-orb-purple" aria-hidden />

      <div className="p-container">
        {/* Header Title */}
        <Title
          className="p-header"
          titleClassName="p-main-title"
          accentClassName="p-title-accent"
          subtitleClassName="p-subtitle"
          title="Creative"
          accentText="Portfolio"
          subtitle="A curated list of web applications built with modern architectures, performance optimization, and clean styling."
          tag="h1"
          animate={true}
          titleDelay={0.07}
          subtitleDelay={0.13}
        />

        {/* Filter Toolbar */}
        <div className="p-filter-bar">
          <div className="p-filter-lbl">
            <FiFilter className="p-filter-icon" />
            <span>FILTER BY TECH</span>
          </div>
          <div className="p-filter-options">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`p-filter-btn${filter === cat ? " active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Area */}
        <motion.div layout className="p-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.projectTitle}
                item={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
