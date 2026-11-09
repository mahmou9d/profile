import { memo } from "react";
import { motion } from "framer-motion";
import { FiCode, FiLayout, FiDatabase, FiGitBranch } from "react-icons/fi";
import "./Skills.css";

const CATEGORIES = [
  {
    id: "frontend",
    icon: <FiLayout />,
    name: "Frontend",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Framer Motion",
    ],
  },
  {
    id: "styling",
    icon: <FiCode />,
    name: "Styling & UI",
    skills: [
      "Tailwind CSS",
      "Shadcn/ui",
      "MUI",
      "Bootstrap",
      "SCSS",
      "Radix UI",
    ],
  },
  {
    id: "backend",
    icon: <FiDatabase />,
    name: "Backend & Database",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "REST API",
      "JWT Auth",
      "WebSockets",
    ],
  },
  {
    id: "tools",
    icon: <FiGitBranch />,
    name: "State & Tools",
    skills: [
      "Redux Toolkit",
      "TanStack Query",
      "React Hook Form",
      "Git",
      "Docker",
      "CI/CD",
      "Figma",
    ],
  },
];

const MARQUEE_ICONS = [
  { name: "React", icon: "/images/re.svg" },
  { name: "React Native", icon: "/images/react.svg" },
  { name: "Next.js", icon: "/images/nextjs.svg" },
  { name: "TypeScript", icon: "/images/ts.svg" },
  { name: "Node.js", icon: "/images/nodedotjs.svg" },
  { name: "MongoDB", icon: "/images/mongodb.svg" },
  { name: "Tailwind", icon: "/images/tail.svg" },
  { name: "Docker", icon: "/images/docker.svg" },
  { name: "Git", icon: "/images/git-svgrepo-com.svg" },
  { name: "Redux", icon: "/images/redux-logo-svgrepo-com.svg" },
  { name: "Figma", icon: "/images/figma.svg" },
  { name: "Express", icon: "/images/expressdotjs.svg" },
  { name: "React Hook Form", icon: "/images/hookform.svg" },
  { name: "Redis", icon: "/images/redis.svg" },
  { name: "SCSS", icon: "/images/scss-svgrepo-com.svg" },
  { name: "Shadcn/ui", icon: "/images/shadcn.svg" },
  { name: "TanStack", icon: "/images/tanstack.png" },
  { name: "Socket.io", icon: "/images/socket-io.svg" },
  { name: "MUI", icon: "/images/material-ui.svg" },
];

const DOUBLED = [...MARQUEE_ICONS, ...MARQUEE_ICONS];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        {/* Header */}
        <motion.div
          className="skills__head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="skills__title">
            My Tech <span className="skills__title-accent">Stack</span>
          </h2>
        </motion.div>
        {/* Marquee */}
        <div className="skills__marquee">
          <div className="skills__track">
            {DOUBLED.map((item, i) => (
              <div key={i} className="skills__track-item">
                <img
                  src={item.icon}
                  alt=""
                  className="skills__track-icon"
                  loading="lazy"
                />
                <span className="skills__track-name">{item.name}</span>
              </div>
            ))}
          </div>
          <div
            className="skills__track skills__track--reverse"
            style={{
              marginTop: "0.8rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            {[...DOUBLED].reverse().map((item, i) => (
              <div key={`rev-${i}`} className="skills__track-item">
                <img
                  src={item.icon}
                  alt=""
                  className="skills__track-icon"
                  loading="lazy"
                />
                <span className="skills__track-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Category grid */}
        <div className="skills__grid">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              className="skills__cat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="skills__cat-header">
                <div className="skills__cat-icon">{cat.icon}</div>
                <h3 className="skills__cat-name">{cat.name}</h3>
                <span className="skills__cat-count">{cat.skills.length}</span>
              </div>

              <div className="skills__chips">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skills__chip">
                    <span className="skills__chip-dot" />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Skills);
