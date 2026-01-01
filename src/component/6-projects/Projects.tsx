import { motion, useScroll, useTransform } from "framer-motion";
import { myProjects } from "./myProjects";
import "./Projects.css";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub, FaCode } from "react-icons/fa";
import { useRef, useState } from "react";
import { Radio } from "lucide-react";

// Enhanced Project Card Component
const ProjectCard = ({ item, index }: { item: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      className="project-card-item"
      style={{ y, opacity }}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="project-card-wrapper">
        {/* Animated Border */}
        <div className="project-border-gradient"></div>

        {/* Card Content */}
        <div className="project-card-inner">
          {/* Image Section */}
          <div className="project-image-area">
            {/* Background with overlay */}
            <div className="image-background">
              <img
                src={item.imgPath}
                alt={item.projectTitle}
                loading="lazy"
                className="bg-image"
              />
              <div className="image-overlay-gradient"></div>
            </div>

            {/* Main Image */}
            <motion.div
              className="main-image-container"
              animate={isHovered ? { y: -8, scale: 1.02 } : { y: 0, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={item.imgPath}
                alt={item.projectTitle}
                loading="lazy"
                className="main-image"
              />
            </motion.div>
            <motion.div
              className="status-badge"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.3,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true }}
            >
              <span className="status-dot"></span>
              <span className="status-text">Live</span>
            </motion.div>
            {/* Project Number Badge */}
            <motion.div
              className="project-num-badge"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {String(index + 1).padStart(2, "0")}
            </motion.div>

            {/* Hover Overlay */}
            <motion.div
              className="hover-layer"
              animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="view-icon"
                animate={
                  isHovered
                    ? { scale: 1, rotate: 0 }
                    : { scale: 0, rotate: -180 }
                }
                transition={{ duration: 0.4, type: "spring" }}
              >
                <Radio />
              </motion.div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="project-info-area">
            {/* Category Tag */}
            <motion.div
              className="project-category"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Web Application
            </motion.div>
            {/* Title */}
            <motion.h3
              className="project-card-title"
              animate={isHovered ? { x: 5 } : { x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.projectTitle}
            </motion.h3>

            {/* Description */}
            <p className="project-card-desc">{item.desc}</p>

            {/* Tech Stack */}
            <div className="tech-stack-container">
              <div className="tech-stack-icons">
                {item.iconLists
                  ?.slice(0, 5)
                  .map((icon: string, idx: number) => (
                    <motion.div
                      key={idx}
                      className="tech-icon-item"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.3 + idx * 0.05,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, y: -5 }}
                    >
                      <img src={icon} alt={`tech-${idx}`} />
                    </motion.div>
                  ))}
                {item.iconLists?.length > 5 && (
                  <div className="tech-more-badge">
                    +{item.iconLists.length - 5}
                  </div>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="card-divider"></div>

            {/* Action Buttons */}
            <div className="project-actions">
              <Link
                to={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn primary-btn"
              >
                <span className="btn-bg"></span>
                <span className="btn-content">
                  <FaExternalLinkAlt />
                  <span>Live Demo</span>
                </span>
              </Link>

              <Link
                to={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn secondary-btn"
              >
                <FaGithub />
                <span>GitHub</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Corner Decorations */}
        <div className="card-corners">
          <div className="corner-line corner-tl"></div>
          <div className="corner-line corner-tr"></div>
          <div className="corner-line corner-bl"></div>
          <div className="corner-line corner-br"></div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="projects-page" ref={containerRef}>
      {/* Animated Background */}
      <motion.div className="projects-background" style={{ y: backgroundY }}>
        <div className="bg-orb-1"></div>
        <div className="bg-orb-2"></div>
        <div className="bg-orb-3"></div>
        {/* <div className="bg-grid-pattern"></div> */}
      </motion.div>

      {/* Header Section */}
      <div className="projects-header">
        {/* Title & Subtitle */}
        <motion.div
          className="header-content-wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="header-tag-badge">
            <span className="tag-badge-icon">💼</span>
            <span className="tag-badge-text">Portfolio</span>
          </div>

          <div className="title-icons">
            <span>🚀</span>
            <h1 className="projects-main-title">My Projects</h1>
          </div>

          <p className="projects-main-subtitle">
            A collection of my recent work - built with modern technologies
          </p>
        </motion.div>{" "}
        {/* Decorative Top Line */}
        <motion.div
          className="header-decoration-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </div>

      {/* Projects Grid */}
      <div className="projects-grid-container">
        {myProjects.map((item, i) => (
          <ProjectCard key={i} item={item} index={i} />
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        className="projects-stats"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="stat-item">
          <motion.div
            className="stat-number"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {myProjects.length}+
          </motion.div>
          <div className="stat-label">Projects</div>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <motion.div
            className="stat-number"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            viewport={{ once: true }}
          >
            10+
          </motion.div>
          <div className="stat-label">Technologies</div>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-item">
          <motion.div
            className="stat-number"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
            viewport={{ once: true }}
          >
            100%
          </motion.div>
          <div className="stat-label">Responsive</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
