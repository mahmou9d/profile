import { motion, useScroll } from "framer-motion";
import "./Skills.css";
import { memo, useRef, useCallback } from "react";

// Static skills data
const SKILLS = [
  {
    img: "/images/speed.png",
    icon: "⚡",
    text: "Fast Performance",
    desc: "Our websites are engineered for lightning-fast load times and seamless navigation. Every line of code and every image is optimized to deliver exceptional performance.",
    gradient: "from-cyan-500 via-blue-500 to-purple-600",
    accentColor: "#00f5ff",
  },
  {
    img: "/images/cleancode.png",
    icon: "✨",
    text: "Clean Code",
    desc: "We believe that great design starts with clean code. Our development standards emphasize readability, reusability, and maintainability.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    accentColor: "#10b981",
  },
  {
    img: "/images/seo.png",
    icon: "🎯",
    text: "SEO Friendly",
    desc: "Your website is built with search visibility in mind from day one. We implement SEO-friendly structures, clean URLs, and optimized meta tags.",
    gradient: "from-orange-500 via-pink-500 to-rose-600",
    accentColor: "#f97316",
  },
  {
    img: "/images/responsive.png",
    icon: "📱",
    text: "Responsive Design",
    desc: "Whether on desktop, tablet, or smartphone, your website will look pixel-perfect and perform flawlessly across all devices.",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-600",
    accentColor: "#8b5cf6",
  },
];

// Memoized Background Component
const SkillsBackground = memo(() => (
  <div className="skills-bg-effects">
    <div className="bg-gradient-1"></div>
    <div className="bg-gradient-2"></div>
  </div>
));
SkillsBackground.displayName = "SkillsBackground";

// Memoized Header Component
const SkillsHeader = memo(() => (
  <div className="projects-header">
    <motion.div
      className="header-content-wrapper"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="header-tag-badge">
        <span className="tag-badge-text">Skills</span>
      </div>

      <h2 className="projects-main-title">Core Skills</h2>

      <p className="projects-main-subtitle">
        Excellence in every pixel, precision in every line of code
      </p>
    </motion.div>

    <motion.div
      className="header-decoration-line"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
    />
  </div>
));
SkillsHeader.displayName = "SkillsHeader";

// Optimized SkillCard Component
const SkillCard = memo(
  ({ item, index }: { item: (typeof SKILLS)[0]; index: number }) => {
    const isEven = index % 2 === 0;

    return (
      <motion.div
        className="skill-item"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Content */}
        <motion.div
          className="skill-content-wrapper"
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="skill-icon-badge">
            <span className="skill-icon">{item.icon}</span>
          </div>

          <h3 className="skill-title">{item.text}</h3>

          <p className="skill-description">{item.desc}</p>

          <div className="skill-number">
            {String(index + 1).padStart(2, "0")}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="skill-image-wrapper"
          initial={{ opacity: 0, x: isEven ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.div
            className="skill-card"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated gradient border */}
            <div
              className={`skill-card-border bg-gradient-to-br ${item.gradient}`}
            ></div>

            {/* Image container */}
            <div className="skill-card-content">
              <img
                src={item.img}
                alt={item.text}
                loading="lazy"
                className="skill-image"
              />

              {/* Overlay effects */}
              <div className="skill-card-overlay"></div>
            </div>

            {/* Corner decorations */}
            <div className="skill-card-corners">
              <div className="corner corner-tl"></div>
              <div className="corner corner-tr"></div>
              <div className="corner corner-bl"></div>
              <div className="corner corner-br"></div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }
);
SkillCard.displayName = "SkillCard";

// Main Skills Component
const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      {/* Background effects */}
      <SkillsBackground />

      {/* Header Section */}
      <SkillsHeader />

      {/* Skills section */}
      <section className="skills-section">
        {SKILLS.map((item, i) => (
          <SkillCard key={item.text} item={item} index={i} />
        ))}
      </section>
    </div>
  );
};

export default memo(Skills);
