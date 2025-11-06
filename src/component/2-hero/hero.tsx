/* eslint-disable react/no-unescaped-entities */
import "./hero.css";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "motion/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import { FaGithub } from "react-icons/fa6";

const words = `I'm Mahmoud Mohamed, a Front-End Developer and second-year Computer
            and Information student. I build responsive web apps using HTML,
            CSS, JavaScript, React, Next.js and React Native. I'm experienced with
            TypeScript, Redux, React Router, Shadcn UI, and Tailwind. I
            follow best practices using Git/GitHub and constantly work on real
            projects to sharpen my skills.`;
const Hero = () => {
  return (
    <section className="hero fixedd">
      <div className=" borderr left-section">
        <div className="parent-avater">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            className="avater"
            src="/images/WhatsApp Image 2025-07-29 at 1.48.11 AM.webp"
            alt=""
          />
          <div className="icon-verified_user"></div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
          className="title"
        >
          Junior Front End Developer
        </motion.h1>
        <p className="sub-title">
          <TextGenerateEffect words={words} />
        </p>
        <div className="all-icons fixedd flex">
          <div className="social hover1">
            <a href="https://x.com/MahmudSurvives">
              <FaXTwitter className="icon-twitter front" />
            </a>
          </div>
          <div className="social hover2 ">
            <a href="https://github.com/mahmou9d">
              <FaGithub className="icon-github front" />
            </a>
          </div>
          {/* <a className="icon-instagram"></a> */}
          <div className="social hover3 ">
            <a href="https://www.linkedin.com/in/mahmoud-mohammed-901327336/">
              <BiLogoLinkedin className="icon-linkedin-square front" />
            </a>
          </div>
        </div>
      </div>
      <div className="right-section borderr">
        <DotLottieReact
          src="https://lottie.host/aec0b31f-ac29-49aa-a17c-298cda397082/L2CcFp3k9U.lottie"
          loop
          autoplay
        />
      </div>
    </section>
  );
};

export default Hero;
