import { motion } from "framer-motion";
import "./Skills.css";
import { useEffect, useState } from "react";

const images = [
  {
    img: "/images/speed.png",
    text: "Fast Performance",
    desc: "Our websites are engineered for lightning-fast load times and seamless navigation. Every line of code and every image is optimized to deliver exceptional performance, ensuring that users experience instant responses and zero lag — even on slower networks. Speed isn’t just a feature; it’s a core principle of our development process.",
  },
  {
    img: "/images/cleancode.png",
    text: "Clean Code",
    desc: "We believe that great design starts with clean code. Our development standards emphasize readability, reusability, and maintainability — making it easier to update, debug, and scale your project in the future. By following modern best practices and patterns, we ensure that your codebase remains efficient, organized, and future-proof.",
  },
  {
    img: "/images/seo.png",
    text: "SEO Friendly",
    desc: "Your website is built with search visibility in mind from day one. We implement SEO-friendly structures, clean URLs, optimized meta tags, and fast-loading pages to help your site rank higher on Google and other search engines. It’s not just about good looks — it’s about making sure people can actually find you online.",
  },
  {
    img: "/images/responsive.png",
    text: "Responsive Design",
    desc: "Whether on desktop, tablet, or smartphone, your website will look pixel-perfect and perform flawlessly. We create fully responsive layouts that automatically adapt to any screen size, ensuring a consistent and engaging user experience across all devices. Accessibility and usability are always at the heart of our design process.",
  },
];
function TypewriterOnView({ text,desc }: { text: string,desc:string }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <motion.div
      className="overflow-hidden xl:w-1/2 py-10 xl:py-0"
      onViewportEnter={() => {
        if (!started) setStarted(true);
      }}
    >
      <motion.h1
        className="text-[33px] xl:text-[60px] font-bold text-blue-600"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.5, once: true }}
      >
        {displayed}
        {started && displayed.length < text.length && (
          <span className="animate-pulse">|</span>
        )}
      </motion.h1>
      <p className="leading-[1.7rem] mb-8 text-[18px] tracking-[0.45px] font-bold opacity-70 text-[color:var(--subtitle)] ">
        {desc}
      </p>
    </motion.div>
  );
}

const Skills = () => {
  return (
    <div className="flex w-full min-h-screen flex-col">
      <div className="flex justify-center">
              <motion.h2
        className="text-5xl font-extrabold text-center mb-16 maintitle border-b-4 border-blue-700 w-fit pb-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Core Skills
      </motion.h2>
      </div>

      <section className="flex flex-col justify-around px-10 w-full">
        {images.map((item, i) => (
          <div className="flex justify-between items-center flex-col xl:flex-row">
            <TypewriterOnView key={i} text={item.text} desc={item.desc} />
            <motion.div
              key={i}
              className="mb-20 xl:w-1/2 flex justify-end"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <img
                src={item.img}
                alt={item.text}
                className=" w-[300px] xl:w-[400px] xl:h-[400px] rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Skills;
