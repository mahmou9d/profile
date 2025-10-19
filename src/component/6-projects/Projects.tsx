import { motion } from "framer-motion";
import { myProjects } from "./myProjects";
import "./Projects.css"
import { Link } from "react-router-dom";
const Projects = () => {

  return (
    <div className="projects">
      <motion.h2
        className="text-5xl font-extrabold text-center mb-16 maintitle border-b-4 border-blue-700 w-fit pb-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.div className="flex flex-col md:flex-row flex-wrap justify-center gap-10">
        {myProjects.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.3,
              delay: i * 0.04,
              ease: "easeOut",
            }}
            whileHover={{
              // scale: 1.04,
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="group bg-[#01013c] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 max-w-sm cursor-pointer"
          >
            <div className="relative w-full h-56 overflow-hidden group">
              <img
                src={item.imgPath}
                alt={item.projectTitle}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
              />
              <img
                src={item.imgPath}
                alt={item.projectTitle}
                className="absolute inset-0 w-full h-full object-fill opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
              />
            </div>

            <div className="p-5 text-white">
              <h1 className="text-2xl font-semibold mb-2">
                {item.projectTitle}
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>
              <div className="flex items-center">
                {item.iconLists?.map((icon, index) => (
                  <div
                    key={index}
                    className="  rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <img src={icon} alt="icon5" className="p-2" />
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center px-5 py-5">
                <Link
                  to={item.link}
                  target="_blank"
                  className="text-blue-400 hover:text-blue-500 font-medium transition bg-[#000021] w-24 h-10 flex justify-center items-center rounded-xl"
                >
                  Live Demo
                </Link>
                <Link
                  to={item.href}
                  target="_blank"
                  className="text-blue-200 hover:text-white transition"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
