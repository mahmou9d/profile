import { memo, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { FaLocationArrow, FaGithub } from "react-icons/fa6";
import { myProjects } from "../6-projects/myProjects";
import "./main.css";

const CARD_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const ProjectCard = memo(({ item, index }: { item: any; index: number }) => (
  <motion.article
    className="work__card"
    custom={index}
    variants={CARD_VARIANTS}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    {/* Image */}
    <div className="work__card-img-wrap">
      <img
        src={item.imgPath}
        alt={item.projectTitle}
        className="work__card-img"
        loading="lazy"
      />
    </div>

    {/* Body */}
    <div className="work__card-body">
      <h3 className="work__card-title">{item.projectTitle}</h3>
      <p className="work__card-desc">{item.desc}</p>

      {/* Tech icons */}
      {item.iconLists?.length > 0 && (
        <div className="work__card-icons">
          {item.iconLists.slice(0, 5).map((icon: string, idx: number) => (
            <img
              key={idx}
              src={icon}
              alt=""
              className="work__card-icon"
              loading="lazy"
            />
          ))}
        </div>
      )}

      {/* Links */}
      <div className="work__card-links">
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="work__card-btn work__card-btn-primary"
          >
            Live <FaLocationArrow size={11} />
          </a>
        )}
        {item.href && (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="work__card-btn work__card-btn-secondary"
          >
            Code <FaGithub size={12} />
          </a>
        )}
      </div>
    </div>
  </motion.article>
));

ProjectCard.displayName = "ProjectCard";

const Main = () => {
  const handleViewAll = useCallback(() => {
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 80);
  }, []);

  const featured = myProjects.slice(0, 4);

  return (
    <section id="artical" className="work">
      <div className="work__inner">
        {/* Header */}
        <div className="work__head">
          <div>
            <h2 className="work__title">
              Featured <span className="work__title-accent">Projects</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="work__view-all"
            onClick={handleViewAll}
          >
            View all ({myProjects.length}) →
          </Link>
        </div>

        {/* Grid */}
        <div className="work__grid">
          {featured.map((item, i) => (
            <ProjectCard key={item.projectTitle} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Main);
