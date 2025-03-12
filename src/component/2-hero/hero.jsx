import React from 'react';
import  './Hero.css';
import { motion } from "motion/react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Hero =() =>  {
    return(
        <section className='hero fixed'>
            <div className='left-section border '>
            <div className='parent-avater'>
            <motion.img 
            initial={{transform: "scale(0)"}}
            animate={{transform: "scale(1.1)"}}
            transition={{ damping: 6, type:"spring" ,stiffness:"100"}}
            
            
            
            className='avater' src="./1-modified.png" alt="" />
            <div className='icon-verified_user'></div>
            </div>
            <motion.h1
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:4}}
            
            className='title'>
                Software designer, founder, and amateur astronaut.
            </motion.h1>
            <p className='sub-title'>
                I’m mahmoud mohamed, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their own
            terms.
            </p>
            <div className='all-icons fixed'>
                <div className='icon-twitter'></div>
                <div className='icon-instagram'></div>
                <div className='icon-github'></div>
                <div className='icon-linkedin-square'></div>


            </div>
            </div>
            <div className='right-section border'>
            <DotLottieReact
                src="https://lottie.host/9f35cc36-df6e-4cc0-904f-74b97e1068fe/powvLrNSdL.lottie"
                loop
                autoplay
                />
            </div>

        </section>
    )
    
}

export default Hero;