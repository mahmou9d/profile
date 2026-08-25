import { memo } from "react";
import { motion } from "framer-motion";
import { FiCpu } from "react-icons/fi";
import "./About.css";

const About = () => {
  return (
    <div className="ab-pg">
      <div className="ab-pg__inner">
        <motion.div
          className="ab-pg__head"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="ab-pg__heading">
            Building digital
            <br />
            <span className="ab-pg__heading-accent">experiences.</span>
          </h1>
        </motion.div>

        <div className="ab-pg__grid">
          {/* Photo */}
          <motion.div
            className="ab-pg__photo-wrap"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/images/WhatsApp Image 2025-07-29 at 1.48.11 AM.webp"
              alt="Mahmoud Mohamed"
              className="ab-pg__photo"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="ab-pg__content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="ab-pg__prose">
              <p>
                Hello! I'm{" "}
                <strong>
                  <span style={{ color: "var(--accent)" }}>Mahmoud</span>{" "}
                  Mohamed <span style={{ color: "var(--accent)" }}>.</span>
                </strong>{" "}
                I'm a passionate Full-Stack Developer and a third-year student
                at the Faculty of Computers and Information, Fayoum University.
                I enjoy building modern web and mobile applications that are
                fast, clean, and scalable.
              </p>

              <p>
                I'm passionate about creating high-quality digital products that
                combine pixel-perfect design with excellent performance and user
                experience. I continuously develop my skills by working on
                different projects, learning new technologies, and exploring
                both front-end and back-end development.
              </p>

              <p>
                Beyond coding, I'm always looking for new challenges, learning
                modern technologies, and building projects that help me grow as
                a developer.
              </p>

              <div
                style={{
                  margin: "1.5rem 0 0",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "1.3rem",
                    lineHeight: 1,
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <FiCpu style={{ color: "var(--accent)" }} />
                </span>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    color: "var(--text-muted)",
                  }}
                >
                  I actively integrate{" "}
                  <strong style={{ color: "var(--accent)" }}>AI tools</strong> —
                  including ChatGPT, Claude, Gemini, Antigravity — into my daily
                  workflow. I use them to accelerate development, debug smarter,
                  and ship higher-quality code in less time. Knowing how to
                  leverage AI effectively is a skill I consider as important as
                  any framework.
                </p>
              </div>
            </div>
            <div className="ab-pg__stats">
              <div className="ab-pg__stat">
                <span className="ab-pg__stat-num">12+</span>
                <span className="ab-pg__stat-lbl">Projects Built</span>
              </div>
              <div className="ab-pg__stat">
                <span className="ab-pg__stat-num">10+</span>
                <span className="ab-pg__stat-lbl">Tech Mastered</span>
              </div>
              <div className="ab-pg__stat">
                <span className="ab-pg__stat-num">100%</span>
                <span className="ab-pg__stat-lbl">Commitment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default memo(About);
