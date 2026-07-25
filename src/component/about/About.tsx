import React, { memo } from "react";
import { aboutproduct } from "./aboutproduct";
import { motion } from "framer-motion";
import { FiCpu, FiLayout, FiSliders, FiDatabase } from "react-icons/fi";
import Title from "../Title/Title";
import "./About.css";

interface SkillItem {
  icon: string;
  title: string;
}

// Group definitions
const CATEGORIES = [
  {
    id: "core",
    name: "Languages & Frameworks",
    icon: <FiCpu className="category-icon" />,
    skills: [
      "ReactJs",
      "NextJs",
      "ReactNative",
      "Typescript",
      "JS",
      "HTML",
      "CSS",
    ],
  },
  {
    id: "ui",
    name: "Styling & UI Libraries",
    icon: <FiLayout className="category-icon" />,
    skills: ["TailwindCss", "Shadcn", "Scss", "Bootstrap", "Mui"],
  },
  {
    id: "state",
    name: "State & Data Flow",
    icon: <FiSliders className="category-icon" />,
    skills: [
      "RTK Query",
      "TanStack Query",
      "React-Router",
      "React-Hook-Form",
      "stream",
      "Git & GitHup",
    ],
  },
  {
    id: "backend",
    name: "Backend & Database",
    icon: <FiDatabase className="category-icon" />,
    skills: ["Node.js", "Express", "MongoDB", "Docker"],
  },
];

const SkillCard = memo(
  ({ item, index }: { item: SkillItem; index: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.04 }}
        className="ab-skill-card"
      >
        <div className="ab-skill-card-inner">
          <div className="ab-skill-icon-wrap">
            <img
              src={item.icon}
              alt={item.title}
              className="ab-skill-icon"
              loading="lazy"
            />
          </div>
          <span className="ab-skill-title">{item.title}</span>
        </div>
      </motion.div>
    );
  },
);

SkillCard.displayName = "SkillCard";

const About = () => {
  // Map skills to their items for categorized rendering
  const getCategorizedSkills = (skillNames: string[]) => {
    return aboutproduct.filter((prod) => skillNames.includes(prod.title));
  };

  return (
    <div className="ab-page">
      {/* Background aesthetics */}
      <div className="ab-bg-noise" aria-hidden />
      <div className="ab-bg-orb ab-orb-cyan" aria-hidden />
      <div className="ab-bg-orb ab-orb-purple" aria-hidden />

      <div className="ab-container">
        {/* Header Section */}
        <Title
          className="ab-header"
          titleClassName="ab-main-title"
          accentClassName="ab-title-accent"
          subtitleClassName="ab-subtitle"
          title="Skills &"
          accentText="Expertise"
          subtitle="A comprehensive list of frontend technologies, design systems, and state management solutions I leverage daily."
          tag="h1"
          animate={true}
          titleDelay={0.07}
          subtitleDelay={0.13}
        />

        {/* Categorized Bento Sections */}
        <div className="ab-categories-grid">
          {CATEGORIES.map((cat) => {
            const categorizedSkills = getCategorizedSkills(cat.skills);

            return (
              <div key={cat.id} className="ab-category-section">
                <div className="ab-category-header">
                  <div className="ab-category-title-wrap">
                    {cat.icon}
                    <h2 className="ab-category-name">{cat.name}</h2>
                  </div>
                  <span className="ab-category-count">
                    {categorizedSkills.length} tools
                  </span>
                </div>

                <div className="ab-skills-grid">
                  {categorizedSkills.map((skill, index) => (
                    <SkillCard key={skill.title} item={skill} index={index} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
