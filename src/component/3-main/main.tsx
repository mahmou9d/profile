import "./main.css";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { myProjects } from "../6-projects/myProjects";
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
      className="project-card-container"
      style={{ y, opacity }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card-link"
      >
        <div className="project-card">
          {/* Animated Border Gradient */}
          <div className="card-border-gradient"></div>

          {/* Main Content */}
          <div className="card-inner">
            {/* Image Section */}
            <div className="project-image-section">
              {/* Background Layer */}
              <div className="image-bg-layer">
                <img src="/images/bg.png" alt="background" />
                <div className="image-overlay"></div>
              </div>

              {/* Project Screenshot */}
              <motion.div
                className="project-screenshot"
                animate={
                  isHovered ? { y: -8, scale: 1.02 } : { y: 0, scale: 1 }
                }
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <img
                  src={item.imgPath}
                  alt={item.projectTitle}
                  loading="lazy"
                />
              </motion.div>

              {/* Status Badge */}
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

              {/* Project Number */}
              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="hover-overlay"
                animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="view-project-icon"
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
            <div className="project-content-section">
              {/* Category Tag */}
              <motion.div
                className="project-category"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                Web Application
              </motion.div>

              {/* Title */}
              <motion.h3
                className="project-title-text"
                animate={isHovered ? { x: 5 } : { x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.projectTitle}
              </motion.h3>

              {/* Description */}
              <p className="project-desc-text">{item.desc}</p>

              {/* Divider Line */}
              <div className="content-divider"></div>

              {/* Footer - Tech Stack & CTA */}
              <div className="project-card-footer">
                {/* Tech Stack */}
                <div className="tech-stack-list">
                  {item.iconLists
                    ?.slice(0, 4)
                    .map((icon: string, idx: number) => (
                      <motion.div
                        key={idx}
                        className="tech-badge"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.5 + index * 0.1 + idx * 0.05,
                          type: "spring",
                          stiffness: 200,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.15, y: -3 }}
                      >
                        <img src={icon} alt={`tech-${idx}`} />
                      </motion.div>
                    ))}
                  {item.iconLists?.length > 4 && (
                    <div className="tech-badge-more">
                      +{item.iconLists.length - 4}
                    </div>
                  )}
                </div>

                {/* View Project CTA */}
                <motion.div
                  className="view-project-cta"
                  animate={isHovered ? { x: 5 } : { x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="cta-label">View Project</span>
                  <motion.div
                    animate={
                      isHovered ? { x: 5, rotate: -45 } : { x: 0, rotate: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <FaLocationArrow />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Decorative Corner Elements */}
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
};

const Main = () => {
  const projects = myProjects.slice(0, 3);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <main id="artical" className="main-section" ref={containerRef}>
      {/* Animated Background */}
      <motion.div className="main-background" style={{ y: backgroundY }}>
        <div className="bg-gradient-orb orb-1"></div>
        <div className="bg-gradient-orb orb-2"></div>
        <div className="bg-gradient-orb orb-3"></div>
        {/* <div className="bg-mesh-pattern"></div> */}
      </motion.div>

      {/* Header Section */}
      <div className="main-header-section">


        {/* Title & Subtitle */}
        <motion.div
          className="header-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
        </motion.div>        {/* Decorative Top Line */}
        <motion.div
          className="header-top-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </div>

      {/* Projects Grid */}
      <div className="projects-showcase">
        {projects.map((item, i) => (
          <ProjectCard key={i} item={item} index={i} />
        ))}
      </div>

      {/* View All Button */}
      <motion.div
        className="view-all-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Link
          to="projects"
          onClick={() => {
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }, 300);
          }}
        >
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

export default Main;
