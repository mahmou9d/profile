import { aboutproduct } from "./aboutproduct";
import "./About.css"
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <motion.h2
        className="text-5xl font-extrabold text-center mb-16 maintitle border-b-4 border-blue-700 w-fit pb-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>
      <motion.div
        className="products"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {aboutproduct.map((item, i) => (
          <motion.div
            className="total"
            key={i}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <h1><img className="w-28 hover:scale-105" src={item.icon} alt={item?.title} /></h1>
            {/* <p>{item?.title}</p> */}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
