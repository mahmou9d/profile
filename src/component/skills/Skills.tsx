import { motion, useScroll, useTransform } from "framer-motion";
import "./Skills.css";
import { useRef } from "react";

const skills = [
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

const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div id="skills" ref={containerRef} className="skills-container">
      {/* Background effects */}
      <div className="skills-bg-effects">
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
        {/* <div className="bg-grid"></div> */}
      </div>

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
            {/* <span className="tag-badge-icon">💼</span> */}
            <span className="tag-badge-text">Skills</span>
          </div>

          <h2 className="projects-main-title">Core Skills</h2>

          <p className="projects-main-subtitle">
            Excellence in every pixel, precision in every line of code
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

      {/* Skills section */}
      <section className="skills-section">
        {skills.map((item, i) => (
          <motion.div
            key={item.text}
            className="skill-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Content */}
            <motion.div
              className="skill-content-wrapper"
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="skill-icon-badge"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.3,
                }}
                viewport={{ once: true }}
              >
                <span className="skill-icon">{item.icon}</span>
              </motion.div>

              <h3 className="skill-title">{item.text}</h3>

              <p className="skill-description">{item.desc}</p>

              <div className="skill-number">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              className="skill-image-wrapper"
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="skill-card"
                whileHover={{ scale: 1.05 }}
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

                  {/* Floating particles - REDUCED */}
                  <div className="skill-particles">
                    {[...Array(3)].map((_, particleI) => (
                      <motion.div
                        key={particleI}
                        className="skill-particle"
                        style={{
                          background: item.accentColor,
                          left: `${25 + particleI * 20}%`,
                          top: `${20 + particleI * 20}%`,
                        }}
                        animate={{
                          y: [0, -15, 0],
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: particleI * 0.3,
                        }}
                      />
                    ))}
                  </div>
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
        ))}
      </section>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-progress"
        style={{
          scaleX: scrollYProgress,
        }}
      />
    </div>
  );
};

export default Skills;
