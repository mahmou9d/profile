import { memo } from "react";
import { motion, Variants } from "framer-motion";
import { FaLocationArrow, FaGithub } from "react-icons/fa6";
import { myProjects } from "./myProjects";
import "./Projects.css";

const CARD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const ProjectCard = memo(({ item, index }: { item: any; index: number }) => (
  <motion.article
    className="pr-pg__card"
    custom={index}
    variants={CARD_VARIANTS}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
  >
    <div className="pr-pg__card-img-wrap">
      <div className="pr-pg__card-chrome">
        <span className="pr-pg__dot" />
        <span className="pr-pg__dot" />
        <span className="pr-pg__dot" />
      </div>
      <img
        src={item.imgPath}
        alt={item.projectTitle}
        className="pr-pg__card-img"
        loading="lazy"
      />
    </div>

    <div className="pr-pg__card-body">
      <h3 className="pr-pg__card-title">{item.projectTitle}</h3>
      <p className="pr-pg__card-desc">
        {item.desc ||
          "Full-stack web application built with modern technologies focusing on user experience and performance."}
      </p>

      {item.iconLists?.length > 0 && (
        <div className="pr-pg__icons">
          {item.iconLists.map((icon: string, idx: number) => (
            <img
              key={idx}
              src={icon}
              alt=""
              className="pr-pg__icon"
              loading="lazy"
            />
          ))}
        </div>
      )}

      <div className="pr-pg__links">
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="pr-pg__btn pr-pg__btn-primary"
          >
            Live <FaLocationArrow size={11} />
          </a>
        )}
        {item.href && (
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="pr-pg__btn pr-pg__btn-secondary"
          >
            Code <FaGithub size={12} />
          </a>
        )}
      </div>
    </div>
  </motion.article>
));

ProjectCard.displayName = "ProjectCard";

const Projects = () => {
  return (
    <div className="pr-pg">
      <div className="pr-pg__inner">
        <motion.div
          className="pr-pg__head"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="pr-pg__heading">
            All <span className="pr-pg__heading-accent">Projects</span>
          </h1>
          <p className="pr-pg__sub">
            A comprehensive list of my side projects, freelance work, and
            experiments. Built with React, Next.js, Node, and more.
          </p>
        </motion.div>

        <div className="pr-pg__grid">
          {myProjects.map((item, i) => (
            <ProjectCard key={item.projectTitle} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Projects);
