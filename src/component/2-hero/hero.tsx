import { memo, useCallback } from "react";
import { motion, Variants } from "framer-motion";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaGithub, FaWhatsapp } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import "./hero.css";

const CONTAINER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const ITEM: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "React Native",
];

const Hero = () => {
  const handleCV = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const a = document.createElement("a");
    a.href = "/Mahmoud_Mohammed_.pdf";
    a.download = "Mahmoud_Mohammed_.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, []);

  return (
    <section className="hero">
      {/* ── Left ── */}
      <motion.div
        className="hero__left"
        variants={CONTAINER}
        initial="hidden"
        animate="show"
      >
        {/* Heading */}
        <motion.h1 className="hero__title" variants={ITEM}>
          Hi, I'm
          <span className="hero__title-name">
            <span style={{ color: "var(--accent)" }}>Mahmoud</span> Mohamed{" "}
            <span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p className="hero__subtitle" variants={ITEM}>
          Full-Stack Developer specializing in React, React Native, Next.js, and
          Node.js. I build fast, clean, and scalable web and mobile applications
          — from pixel-perfect interfaces to powerful APIs.{" "}
          <span style={{ color: "var(--accent)", fontWeight: 600 }}>
            AI-augmented workflow
          </span>{" "}
          — leveraging tools like ChatGPT, Claude, Gemini, Antigravity to ship
          faster.
        </motion.p>

        {/* Stack pills */}
        <motion.div className="hero__stack" variants={ITEM}>
          {STACK.map((s) => (
            <span key={s} className="hero__stack-pill">
              {s}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div className="hero__actions" variants={ITEM}>
          <motion.a
            href="#contact"
            className="hero__btn-main"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Get In Touch →
          </motion.a>
          <motion.a
            href="#"
            onClick={handleCV}
            className="hero__btn-sec"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Socials */}
        <motion.div className="hero__socials" variants={ITEM}>
          <motion.a
            href="https://github.com/mahmou9d"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hero__soc"
            whileHover={{ y: -3, scale: 1.08 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mahmoud-mohammed-901327336/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hero__soc"
            whileHover={{ y: -3, scale: 1.08 }}
          >
            <BiLogoLinkedin />
          </motion.a>
          <motion.a
            href="https://wa.me/201009014597"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="hero__soc"
            whileHover={{ y: -3, scale: 1.08 }}
          >
            <FaWhatsapp />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ── Right: Photo ── */}
      <motion.div
        className="hero__right"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hero__photo-wrap">
          <img
            src="/images/WhatsApp Image 2025-07-29 at 1.48.11 AM.webp"
            alt="Mahmoud Mohamed"
            className="hero__photo"
            fetchPriority="high"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default memo(Hero);
