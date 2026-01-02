/* eslint-disable react/no-unescaped-entities */
import { memo, useMemo, useEffect, useState } from "react";
import "./hero.css";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { motion, useAnimate, stagger, AnimatePresence } from "motion/react";
import { IconType } from "react-icons";

const words = `Front-End Developer | Computer Science Student

Specializing in building scalable, performant web applications with React, Next.js, and React Native. Expert in TypeScript, modern state management (Redux Toolkit, RTK Query, TanStack Query, Zustand), and creating pixel-perfect UIs with Shadcn UI and Tailwind CSS. Committed to writing clean, maintainable code and following Git/GitHub workflows. Driven by continuous learning and real-world project experience.`;

interface social {
  href: string;
  Icon: IconType;
  label: string;
  className: string;
  delay: number;
}

// TextGenerateEffect Component
interface TextGenerateEffectProps {
  words: string;
  className?: string;
  duration?: number;
}

const TextGenerateEffect = memo(
  ({ words, className = "", duration = 0.005 }: TextGenerateEffectProps) => {
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
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            |
          </motion.span>
        )}
      </div>
    );
  }
);
TextGenerateEffect.displayName = "TextGenerateEffect";

// Memoized social icon component
const SocialIcon = memo(({ href, Icon, label, className, delay }: social) => (
  <motion.div
    className={`social ${className}`}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{
      scale: 1.09,
      y: -10,
      transition: { duration: 0 },
    }}
    whileTap={{ scale: 0.9 }}
  >
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <motion.div
        whileHover={{ rotate: className === "hover2" ? -360 : 360 }}
        transition={{ duration: 0.5 }}
      >
        <Icon
          className={`${Icon.name.toLowerCase().replace("fa", "icon-")} front`}
        />
      </motion.div>
    </a>
  </motion.div>
));

SocialIcon.displayName = "SocialIcon";

// Memoized particles component
const FloatingParticles = memo(() => (
  <div className="hero-particles">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="hero-particle"></div>
    ))}
  </div>
));

FloatingParticles.displayName = "FloatingParticles";

// Memoized floating shapes
const FloatingShapes = memo(() => (
  <>
    <div className="hero-floating-shape shape-1"></div>
    <div className="hero-floating-shape shape-2"></div>
    <div className="hero-floating-shape shape-3"></div>
  </>
));

FloatingShapes.displayName = "FloatingShapes";

// Animated Code Visualization Component
const AnimatedCodeVisualization = memo(() => {
  const codeLines = useMemo(
    () => [
      { text: "const developer = {", delay: 0 },
      { text: "  name: 'Mahmoud Mohamed',", delay: 0.1 },
      { text: "  role: 'Frontend Developer',", delay: 0.2 },
      { text: "  stack: ['React', 'Next.js', 'TypeScript'],", delay: 0.3 },
      { text: "  stateManagement: ['Redux Toolkit', 'Zustand'],", delay: 0.4 },
      { text: "  styling: ['Tailwind', 'Shadcn UI'],", delay: 0.5 },
      { text: "  passion: 'Building Amazing UIs',", delay: 0.6 },
      { text: "  status: 'Available for Work 🚀'", delay: 0.7 },
      { text: "};", delay: 0.8 },
    ],
    []
  );

  const techIcons = useMemo(
    () => [
      { name: "React", symbol: "⚛️", delay: 0.9 },
      { name: "TS", symbol: "TS", delay: 1.0 },
      { name: "Next", symbol: "▲", delay: 1.1 },
      { name: "Redux", symbol: "🔄", delay: 1.2 },
      { name: "TailwindCSS", symbol: "🎨", delay: 1.3 },
      { name: "Git", symbol: "{ }", delay: 1.4 },
    ],
    []
  );

  return (
    <div className="code-visualization">
      {/* Animated Terminal Window */}
      <motion.div
        className="terminal-window"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="terminal-btn close"></span>
            <span className="terminal-btn minimize"></span>
            <span className="terminal-btn maximize"></span>
          </div>
          <span className="terminal-title">developer.tsx</span>
        </div>

        {/* Code Lines */}
        <div className="terminal-body">
          {codeLines.map((line, index) => (
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

          {/* Blinking Cursor */}
          <motion.span
            className="cursor"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        </div>
      </motion.div>

      {/* Floating Tech Icons */}
      <div className="floating-tech-icons">
        {techIcons.map((tech, index) => (
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

      {/* Animated Code Brackets */}
      <motion.div
        className="bracket bracket-left"
        animate={{
          rotateY: [0, 180, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {"<"}
      </motion.div>
      <motion.div
        className="bracket bracket-right"
        animate={{
          rotateY: [0, -180, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {">"}
      </motion.div>
    </div>
  );
});

AnimatedCodeVisualization.displayName = "AnimatedCodeVisualization";

const Hero = () => {
  const [showSurprise, setShowSurprise] = useState(false);

  const socialIcons = useMemo(
    () => [
      // {
      //   href: "https://x.com/MahmudSurvives",
      //   Icon: FaXTwitter,
      //   label: "Twitter Profile",
      //   className: "hover1",
      //   delay: 1,
      // },
      {
        href: "https://github.com/mahmou9d",
        Icon: FaGithub,
        label: "GitHub Profile",
        className: "hover2",
        delay: 1.15,
      },
      {
        href: "https://www.linkedin.com/in/mahmoud-mohammed-901327336/",
        Icon: BiLogoLinkedin,
        label: "LinkedIn Profile",
        className: "hover3",
        delay: 1.3,
      },
    ],
    []
  );

  const handleDownloadCV = (e: any) => {
    e.preventDefault();
    setShowSurprise(true);

    // Download CV immediately
    setTimeout(() => {
      // Create a temporary link to download CV
      const link = document.createElement("a");
      link.href = "/Mahmoud_Mohammed_FrontEnd_Developer.pdf";
      link.download = "Mahmoud_Mohammed_FrontEnd_Developer.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 100);

    // Hide surprise after 5 seconds
    setTimeout(() => {
      setShowSurprise(false);
    }, 10000);
  };

  return (
    <motion.section className="hero fixedd">
      {/* Floating Effects - Memoized */}
      <FloatingParticles />
      <FloatingShapes />

      {/* Scan Line */}
      <motion.div className="hero-scan-line" />

      {/* Confetti Effect - خارج الـ wrapper علشان يظهر في المنتصف */}

      <div className="borderr left-section">
        <motion.div className="parent-avater">
          <motion.img
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
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Frontend Developer
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="sub-title">
            <TextGenerateEffect words={words} />
          </p>
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
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
            <AnimatePresence>
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
          className="all-icons fixedd flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            ease: "easeOut",
          }}
        >
          {socialIcons.map((icon, index) => (
            <SocialIcon key={index} {...icon} />
          ))}
        </motion.div>
      </div>

      <motion.div
        className="right-section borderr"
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
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
