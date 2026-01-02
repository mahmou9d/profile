import "./main.css";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { myProjects } from "../6-projects/myProjects";
import { memo, useRef, useState, useCallback } from "react";
import { Radio } from "lucide-react";

// Optimized animations configurations
const CARD_TRANSITION = {
  duration: 0.7,
  ease: [0.22, 1, 0.36, 1],
};

const HOVER_TRANSITION = {
  duration: 0.3,
  ease: "easeOut" as const,
};

// Memoized ProjectCard Component
const ProjectCard = memo(({ item, index }: { item: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // Simplified scroll animations
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <motion.div
      ref={cardRef}
      className="project-card-container"
      style={{ y, opacity }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.3 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card-link"
      >
        <div className="project-card">
          {/* Animated Border - only visible on hover */}
          <div className="card-border-gradient"></div>

          <div className="card-inner">
            {/* Image Section */}
            <div className="project-image-section">
              <div className="image-bg-layer">
                {/* <img src="/images/bg.png" alt="" loading="lazy" /> */}
                <div className="image-overlay"></div>
              </div>

              {/* Simplified screenshot animation */}
              <motion.div
                className="project-screenshot"
                animate={
                  isHovered ? { y: -6, scale: 1.015 } : { y: 0, scale: 1 }
                }
                transition={HOVER_TRANSITION}
              >
                <img
                  src={item.imgPath}
                  alt={item.projectTitle}
                  loading="lazy"
                />
              </motion.div>

              {/* Status Badge */}
              <div className="status-badge">
                <span className="status-dot"></span>
                <span className="status-text">Live</span>
              </div>

              {/* Project Number */}
              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="hover-overlay"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={HOVER_TRANSITION}
              >
                <motion.div
                  className="view-project-icon"
                  animate={{
                    scale: isHovered ? 1 : 0,
                    rotate: isHovered ? 0 : -180,
                  }}
                  transition={HOVER_TRANSITION}
                >
                  <Radio />
                </motion.div>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="project-content-section">
              {/* Category Tag */}
              <div className="project-category">Web Application</div>

              {/* Title */}
              <motion.h3
                className="project-title-text"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={HOVER_TRANSITION}
              >
                {item.projectTitle}
              </motion.h3>

              {/* Description */}
              <p className="project-desc-text">{item.desc}</p>

              {/* Divider */}
              <div className="content-divider"></div>

              {/* Footer */}
              <div className="project-card-footer">
                {/* Tech Stack */}
                <div className="tech-stack-list">
                  {item.iconLists
                    ?.slice(0, 4)
                    .map((icon: string, idx: number) => (
                      <div key={idx} className="tech-badge">
                        <img src={icon} alt="" loading="lazy" />
                      </div>
                    ))}
                  {item.iconLists?.length > 4 && (
                    <div className="tech-badge-more">
                      +{item.iconLists.length - 4}
                    </div>
                  )}
                </div>

                {/* CTA */}
                <motion.div
                  className="view-project-cta"
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={HOVER_TRANSITION}
                >
                  <span className="cta-label">View Project</span>
                  <motion.div
                    animate={{
                      x: isHovered ? 5 : 0,
                      rotate: isHovered ? -45 : 0,
                    }}
                    transition={HOVER_TRANSITION}
                  >
                    <FaLocationArrow />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Corner Decorations - only on hover */}
          <div className="corner-decorations">
            <div className="corner corner-tl"></div>
            <div className="corner corner-tr"></div>
            <div className="corner corner-bl"></div>
            <div className="corner corner-br"></div>
          </div>
        </div>
      </a>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

// Memoized Background Component
const AnimatedBackground = memo(() => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div
      ref={containerRef}
      className="main-background"
      style={{ y: backgroundY }}
    >
      <div className="bg-gradient-orb orb-1"></div>
      <div className="bg-gradient-orb orb-2"></div>
      <div className="bg-gradient-orb orb-3"></div>
    </motion.div>
  );
});

AnimatedBackground.displayName = "AnimatedBackground";

// Memoized Header Component
const MainHeader = memo(() => (
  <div className="main-header-section">
    <motion.div
      className="header-content"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="header-tag">
        <span className="tag-icon">✨</span>
        <span className="tag-text">Portfolio</span>
      </div>

      <h2 className="main-heading">Featured Projects</h2>

      <p className="main-subheading">
        Explore my latest work - crafted with precision and passion
      </p>
    </motion.div>

    <motion.div
      className="header-top-line"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
    />
  </div>
));

MainHeader.displayName = "MainHeader";

// Main Component
const Main = () => {
  const projects = myProjects.slice(0, 3);

  const handleViewAll = useCallback(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  }, []);

  return (
    <main id="artical" className="main-section">
      {/* Background */}
      <AnimatedBackground />

      {/* Header */}
      <MainHeader />

      {/* Projects Grid */}
      <div className="projects-showcase">
        {projects.map((item, i) => (
          <ProjectCard key={i} item={item} index={i} />
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        className="view-all-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Link to="projects" onClick={handleViewAll}>
          <motion.button
            className="view-all-button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="button-bg-layer"></span>
            <span className="button-content-layer">
              <span className="button-label">View All Projects</span>
              <motion.span
                className="button-arrow"
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </Link>
      </motion.div>
    </main>
  );
};

export default memo(Main);
