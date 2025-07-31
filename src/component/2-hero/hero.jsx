/* eslint-disable react/no-unescaped-entities */
import  './Hero.css';
import { BiLogoLinkedin } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "motion/react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Hero =() =>  {
    return (
      <section className="hero fixed">
        <div className="left-section border ">
          <div className="parent-avater">
            <motion.img
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1.1)" }}
              transition={{ damping: 6, type: "spring", stiffness: "100" }}
              className="avater"
              src="./images/WhatsApp Image 2025-07-29 at 1.48.11 AM.jpeg"
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
            I'm Mahmoud Mohamed, a Front-End Developer and second-year Computer
            and Information student. I build responsive web apps using HTML,
            CSS, JavaScript, React, and Next.js. I'm experienced with
            TypeScript, Redux, React Router, Material UI, and Bootstrap. I
            follow best practices using Git/GitHub and constantly work on real
            projects to sharpen my skills.
          </p>
          <div className="all-icons fixed">
            <div className='social hover1'>
              <a href="https://x.com/MahmudSurvives">
                <FaXTwitter className="icon-twitter" />
              </a>
            </div>
            <div className='social hover2'>
              <a href="https://github.com/mahmou9d" className="icon-github"></a>
            </div>
            {/* <a className="icon-instagram"></a> */}
            <div  className='social hover3'>
               <a  href="https://www.linkedin.com/in/mahmoud-mohammed-901327336/">
              <BiLogoLinkedin className="icon-linkedin-square" />
            </a>
            </div>
           
          </div>
        </div>
        <div className="right-section border">
          <DotLottieReact
            src="https://lottie.host/aec0b31f-ac29-49aa-a17c-298cda397082/L2CcFp3k9U.lottie"
            loop
            autoplay
          />
        </div>
      </section>
    );
    
}

export default Hero;