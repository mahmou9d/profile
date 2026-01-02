import { aboutproduct } from "./aboutproduct";
import "./About.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const SkillCard = ({ item, index }: { item: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      className="skill-card-container"
      style={{ y, opacity }}
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="skill-card">
        {/* Animated Border Gradient */}
        <div className="skill-border-gradient"></div>

        {/* Card Inner */}
        <div className="skill-card-inner">
          {/* Icon Container */}
          <motion.div
            className="skill-icon-wrapper"
            animate={
              isHovered
                ? {
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                    y: -10,
                  }
                : {
                    scale: 1,
                    rotate: 0,
                    y: 0,
                  }
            }
            transition={{ duration: 0.4 }}
          >
            <img
              src={item.icon}
              alt={item?.title}
              loading="lazy"
              className="skill-icon-image"
            />

            {/* Glow Effect */}
            <motion.div
              className="skill-icon-glow"
              animate={
                isHovered
                  ? {
                      scale: 1.4,
                      opacity: 0.6,
                    }
                  : {
                      scale: 1,
                      opacity: 0.3,
                    }
              }
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          {/* Title (Optional) */}
          {item.title && (
            <motion.div
              className="skill-title-text"
              animate={
                isHovered
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0.7,
                      y: 5,
                    }
              }
              transition={{ duration: 0.3 }}
            >
              {item.title}
            </motion.div>
          )}

          {/* Hover Indicator */}
          <motion.div
            className="hover-indicator"
            animate={
              isHovered
                ? {
                    scaleX: 1,
                    opacity: 1,
                  }
                : {
                    scaleX: 0,
                    opacity: 0,
                  }
            }
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Corner Decorations */}
        <motion.div
          className="skill-corners"
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="skill-corner corner-tl"></div>
          <div className="skill-corner corner-tr"></div>
          <div className="skill-corner corner-bl"></div>
          <div className="skill-corner corner-br"></div>
        </motion.div>

        {/* Skill Number Badge */}
        <motion.div
          className="skill-number-badge"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            delay: 0.2 + index * 0.05,
          }}
          viewport={{ once: true }}
        >
          {String(index + 1).padStart(2, "0")}
        </motion.div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  return (
    <div className="about-section" ref={containerRef}>
      {/* Animated Background */}
      <motion.div className="about-background" style={{ y: backgroundY }}>
        <div className="about-bg-orb orb-1"></div>
        <div className="about-bg-orb orb-2"></div>
        <div className="about-bg-orb orb-3"></div>
        {/* <div className="about-bg-mesh"></div> */}
      </motion.div>

      {/* Header Section */}
      <motion.div className="about-header" style={{ y: titleY }}>
        {/* Tag & Title */}
        <motion.div
          className="about-header-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="about-tag">
            <span className="about-tag-icon">⚡</span>
            <span className="about-tag-text">Expertise</span>
          </div>

          <div className="title-icons">
            <span>🛠️</span>
            <h1 className="about-main-title">My Skills & Tools</h1>
          </div>

          <p className="about-main-subtitle">
            Technologies and frameworks I work with to build amazing projects
          </p>
        </motion.div>{" "}
        {/* Decorative Top Line */}
        <motion.div
          className="about-top-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Skills Grid */}
      <div className="skills-grid-wrapper">
        {aboutproduct.map((item, i) => (
          <SkillCard key={i} item={item} index={i} />
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        className="skills-stats-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="stat-box">
          <motion.div
            className="stat-value"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {aboutproduct.length}+
          </motion.div>
          <div className="stat-label">Technologies</div>
        </div>

        <div className="stat-separator"></div>

        <div className="stat-box">
          <motion.div
            className="stat-value"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            viewport={{ once: true }}
          >
            1+
          </motion.div>
          <div className="stat-label">Years Experience</div>
        </div>

        <div className="stat-separator"></div>

        <div className="stat-box">
          <motion.div
            className="stat-value"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
            viewport={{ once: true }}
          >
            ∞
          </motion.div>
          <div className="stat-label">Always Learning</div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
