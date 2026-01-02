/* eslint-disable react/no-unescaped-entities */
import { memo, useMemo, useEffect, useState, useCallback } from "react";
import "./hero.css";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import { motion, AnimatePresence } from "motion/react";
import { IconType } from "react-icons";

const WORDS = `Front-End Developer | Computer Science Student

Specializing in building scalable, performant web applications with React, Next.js, and React Native. Expert in TypeScript, modern state management (Redux Toolkit, RTK Query, TanStack Query, Zustand), and creating pixel-perfect UIs with Shadcn UI and Tailwind CSS. Committed to writing clean, maintainable code and following Git/GitHub workflows. Driven by continuous learning and real-world project experience.`;

interface Social {
  href: string;
  Icon: IconType;
  label: string;
  className: string;
}

// Optimized TextGenerateEffect with debouncing
const TextGenerateEffect = memo(
  ({
    words,
    className = "",
    duration = 0.005,
  }: {
    words: string;
    className?: string;
    duration?: number;
  }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < words.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + words[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, duration * 1000);

        return () => clearTimeout(timeout);
      }
    }, [currentIndex, words, duration]);

    return (
      <div className={className}>
        {displayedText}
        {currentIndex < words.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
          >
            |
          </motion.span>
        )}
      </div>
    );
  }
);
TextGenerateEffect.displayName = "TextGenerateEffect";

// Optimized SocialIcon - reduced animations
const SocialIcon = memo(({ href, Icon, label, className }: Social) => (
  <motion.div
    className={`social ${className}`}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.09, y: -10 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <motion.div
        whileHover={{ rotate: className === "hover2" ? -360 : 360 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="front" />
      </motion.div>
    </a>
  </motion.div>
));
SocialIcon.displayName = "SocialIcon";

// Simplified particles - fewer elements
const FloatingParticles = memo(() => (
  <div className="hero-particles">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="hero-particle"></div>
    ))}
  </div>
));
FloatingParticles.displayName = "FloatingParticles";

// Simplified floating shapes
const FloatingShapes = memo(() => (
  <>
    <div className="hero-floating-shape shape-1"></div>
    <div className="hero-floating-shape shape-2"></div>
  </>
));
FloatingShapes.displayName = "FloatingShapes";

// Optimized Code Lines - static data
const CODE_LINES = [
  { text: "const developer = {", delay: 0 },
  { text: "  name: 'Mahmoud Mohamed',", delay: 0.1 },
  { text: "  role: 'Frontend Developer',", delay: 0.2 },
  { text: "  stack: ['React', 'Next.js', 'TypeScript'],", delay: 0.3 },
  { text: "  stateManagement: ['Redux Toolkit', 'Zustand'],", delay: 0.4 },
  { text: "  styling: ['Tailwind', 'Shadcn UI'],", delay: 0.5 },
  { text: "  passion: 'Building Amazing UIs',", delay: 0.6 },
  { text: "  status: 'Available for Work 🚀'", delay: 0.7 },
  { text: "};", delay: 0.8 },
];

const TECH_ICONS = [
  { name: "React", symbol: "⚛️", delay: 0.9 },
  { name: "TS", symbol: "TS", delay: 1.0 },
  { name: "Next", symbol: "▲", delay: 1.1 },
  { name: "Redux", symbol: "🔄", delay: 1.2 },
  { name: "Tailwind", symbol: "🎨", delay: 1.3 },
  { name: "Git", symbol: "{ }", delay: 1.4 },
];

// Optimized Code Visualization
const AnimatedCodeVisualization = memo(() => (
  <div className="code-visualization">
    <motion.div
      className="terminal-window"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-btn close"></span>
          <span className="terminal-btn minimize"></span>
          <span className="terminal-btn maximize"></span>
        </div>
        <span className="terminal-title">developer.tsx</span>
      </div>

      <div className="terminal-body">
        {CODE_LINES.map((line, index) => (
          <motion.div
            key={index}
            className="code-line"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: line.delay, duration: 0.3 }}
          >
            <span className="line-number">{index + 1}</span>
            <span className="code-text">{line.text}</span>
          </motion.div>
        ))}

        <motion.span
          className="cursor"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        >
          |
        </motion.span>
      </div>
    </motion.div>

    <div className="floating-tech-icons">
      {TECH_ICONS.map((tech, index) => (
        <motion.div
          key={index}
          className="tech-icon"
          initial={{ scale: 0, rotate: -180 }}
          animate={{
            scale: 1,
            rotate: 0,
            y: [0, -15, 0],
          }}
          transition={{
            delay: tech.delay,
            duration: 0.6,
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: tech.delay,
            },
          }}
          whileHover={{
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.5 },
          }}
        >
          <span className="tech-symbol">{tech.symbol}</span>
          <span className="tech-name">{tech.name}</span>
        </motion.div>
      ))}
    </div>

    {/* Simplified brackets - single animation */}
    <div className="bracket bracket-left">{"<"}</div>
    <div className="bracket bracket-right">{">"}</div>
  </div>
));
AnimatedCodeVisualization.displayName = "AnimatedCodeVisualization";

// Main Hero Component
const Hero = () => {
  const [showSurprise, setShowSurprise] = useState(false);

  const socialIcons = useMemo<Social[]>(
    () => [
      {
        href: "https://github.com/mahmou9d",
        Icon: FaGithub,
        label: "GitHub Profile",
        className: "hover2",
      },
      {
        href: "https://www.linkedin.com/in/mahmoud-mohammed-901327336/",
        Icon: BiLogoLinkedin,
        label: "LinkedIn Profile",
        className: "hover3",
      },
    ],
    []
  );

  const handleDownloadCV = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setShowSurprise(true);

    // Download CV immediately
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/Mahmoud_Mohammed_FrontEnd_Developer.pdf";
      link.download = "Mahmoud_Mohammed_FrontEnd_Developer.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 100);

    // Hide surprise after animation
    setTimeout(() => {
      setShowSurprise(false);
    }, 5000);
  }, []);

  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Background Effects */}
      <FloatingParticles />
      <FloatingShapes />
      <div className="hero-scan-line" />

      {/* Left Section */}
      <div className="left-section">
        <motion.div
          className="parent-avater"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            className="avater"
            src="/images/WhatsApp Image 2025-07-29 at 1.48.11 AM.webp"
            alt="Mahmoud Mohamed"
            loading="eager"
            decoding="async"
          />
        </motion.div>

        <motion.h1
          className="title"
          data-text="Frontend Developer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Frontend Developer
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="sub-title">
            <TextGenerateEffect words={WORDS} />
          </p>
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="hero-btns primary-btns"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="btn-text">Contact Me</span>
          </motion.a>

          <motion.a
            href="#"
            onClick={handleDownloadCV}
            className="hero-btns secondary-btns"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="btn-text">Download CV</span>
            <AnimatePresence mode="wait">
              {showSurprise && (
                <motion.img
                  src="/confetti.gif"
                  alt="Celebration"
                  className="confetti-around-btn"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
          </motion.a>
        </motion.div>

        <motion.div
          className="all-icons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {socialIcons.map((icon, index) => (
            <SocialIcon key={index} {...icon} />
          ))}
        </motion.div>
      </div>

      {/* Right Section */}
      <motion.div
        className="right-section"
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4,
          type: "spring",
          stiffness: 100,
        }}
      >
        <AnimatedCodeVisualization />
      </motion.div>
    </motion.section>
  );
};

export default memo(Hero);
