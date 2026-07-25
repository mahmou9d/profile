import { memo, useCallback } from "react";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub, FaWhatsapp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import "./hero.css";

const SOCIAL_ITEMS = [
  {
    href: "https://github.com/mahmou9d",
    Icon: FaGithub,
    label: "GitHub Profile",
  },
  {
    href: "https://www.linkedin.com/in/mahmoud-mohammed-901327336/",
    Icon: BiLogoLinkedin,
    label: "LinkedIn Profile",
  },
  {
    href: "https://wa.me/201009014597",
    Icon: FaWhatsapp,
    label: "WhatsApp Contact",
  },
];

const SocialIcon = memo(
  ({ href, Icon, label }: { href: string; Icon: IconType; label: string }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="social"
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="social-icon" />
    </motion.a>
  ),
);

SocialIcon.displayName = "SocialIcon";

const AnimatedCodeVisualization = memo(() => (
  <div className="code-visualization">
    {/* Static subtle background glow */}
    <div className="terminal-glow-bg"></div>

    <motion.div
      className="terminal-window"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-btn close"></span>
          <span className="terminal-btn minimize"></span>
          <span className="terminal-btn maximize"></span>
        </div>
        <span className="terminal-title">developer.ts</span>
      </div>

      <div className="terminal-body">
        {/* Line 1 */}
        <div className="code-line">
          <span className="line-number">1</span>
          <span className="code-text">
            <span className="token keyword">import</span> &#123;{" "}
            <span className="token type">Developer</span> &#125;{" "}
            <span className="token keyword">from</span>{" "}
            <span className="token string">'./types'</span>;
          </span>
        </div>
        {/* Line 2 */}
        <div className="code-line">
          <span className="line-number">2</span>
          <span className="code-text"></span>
        </div>
        {/* Line 3 */}
        <div className="code-line">
          <span className="line-number">3</span>
          <span className="code-text">
            <span className="token keyword">export</span>{" "}
            <span className="token keyword">const</span>{" "}
            <span className="token variable">mahmoud</span>:{" "}
            <span className="token type">Developer</span> = &#123;
          </span>
        </div>
        {/* Line 4 */}
        <div className="code-line">
          <span className="line-number">4</span>
          <span className="code-text">
            &nbsp;&nbsp;<span className="token property">name</span>:{" "}
            <span className="token string">'Mahmoud Mohamed'</span>,
          </span>
        </div>
        {/* Line 5 */}
        <div className="code-line">
          <span className="line-number">5</span>
          <span className="code-text">
            &nbsp;&nbsp;<span className="token property">role</span>:{" "}
            <span className="token string">'Full Stack Engineer'</span>,
          </span>
        </div>
        {/* Line 6 */}
        <div className="code-line">
          <span className="line-number">6</span>
          <span className="code-text">
            &nbsp;&nbsp;<span className="token property">skills</span>: &#123;
          </span>
        </div>
        {/* Line 7 */}
        <div className="code-line">
          <span className="line-number">7</span>
          <span className="code-text">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="token property">frontend</span>: [
            <span className="token string">'React'</span>,{" "}
            <span className="token string">'Next.js'</span>,{" "}
            <span className="token string">'Tailwind'</span>,{" "}
            <span className="token string">'Redux'</span>],
          </span>
        </div>
        {/* Line 8 */}
        <div className="code-line">
          <span className="line-number">8</span>
          <span className="code-text">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="token property">backend</span>: [
            <span className="token string">'Node.js'</span>,{" "}
            <span className="token string">'Express'</span>],
          </span>
        </div>
        {/* Line 9 */}
        <div className="code-line">
          <span className="line-number">9</span>
          <span className="code-text">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="token property">database</span>: [
            <span className="token string">'MongoDB'</span>],
          </span>
        </div>
        {/* Line 10 */}
        <div className="code-line">
          <span className="line-number">10</span>
          <span className="code-text">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="token property">devops</span>: [
            <span className="token string">'Docker'</span>,{" "}
            <span className="token string">'Git & GitHub'</span>]
          </span>
        </div>
        {/* Line 11 */}
        <div className="code-line">
          <span className="line-number">11</span>
          <span className="code-text">&nbsp;&nbsp;&#125;,</span>
        </div>
        {/* Line 12 */}
        <div className="code-line">
          <span className="line-number">12</span>
          <span className="code-text">
            &nbsp;&nbsp;<span className="token property">hireable</span>:{" "}
            <span className="token boolean">true</span>
          </span>
        </div>
        {/* Line 13 */}
        <div className="code-line">
          <span className="line-number">13</span>
          <span className="code-text">
            &#125;;
            <motion.span
              className="cursor"
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              |
            </motion.span>
          </span>
        </div>
      </div>
    </motion.div>
  </div>
));

AnimatedCodeVisualization.displayName = "AnimatedCodeVisualization";

const Hero = () => {
  const handleDownloadCV = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "/Mahmoud_Mohammed_FrontEnd_Developer.pdf";
    link.download = "Mahmoud_Mohammed_FrontEnd_Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="hero-split-grid">
        {/* Left Column: Info & Actions */}
        <div className="hero-left-content">
          {/* ────────── STATUS CHIP ────────── */}
          <div className="status-chip">
            <span className="status-dot"></span>
            <span className="status-text">available for work</span>
          </div>

          <motion.h1
            className="title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full-Stack Developer{" "}
            <span className="title-muted">end to end.</span>
          </motion.h1>

          <motion.p
            className="sub-title"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I am a Computer Science student and a Full-Stack Developer. I enjoy
            designing and building high-quality websites and web applications.
            My goal is to create clean user interfaces that are easy to use,
            while building fast and secure systems behind the scenes. I handle
            everything from pixel-perfect designs to database setups and server
            APIs.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="#contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>

            <motion.a
              href="#"
              onClick={handleDownloadCV}
              className="btn btn-secondary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Download CV
            </motion.a>
          </motion.div>

          <motion.div
            className="social-icons"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {SOCIAL_ITEMS.map((item, index) => (
              <SocialIcon key={index} {...item} />
            ))}
          </motion.div>
        </div>

        {/* Right Column: Code Editor Mockup */}
        <motion.div
          className="hero-right-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AnimatedCodeVisualization />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(Hero);
