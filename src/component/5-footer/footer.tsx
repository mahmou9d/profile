import React from 'react';
import './footer.css';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaHeart, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Link,useNavigate, useLocation } from 'react-router';
const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: FaLinkedin, 
      href: "https://www.linkedin.com/in/mahmoud-mohammed-901327336/",
      label: "LinkedIn",
      color: "#0077b5"
    },
    { 
      icon: FaGithub, 
      href: "https://github.com/mahmou9d",
      label: "GitHub",
      color: "#333"
    },
    { 
      icon: FaTwitter, 
      href: "https://x.com/MahmudSurvives",
      label: "Twitter",
      color: "#1da1f2"
    },
  ];
  interface links{
    title:string
    link:string
    type:string
  }
const links: links[] = [
  {
    title: "Home",
    link: "/",
    type: "route",
  },
  {
    title: "Projects",
    link: "/projects",
    type: "route",
  },
  {
    title: "About",
    link: "/about",
    type: "route",
  },
  {
    title: "Skills",
    link: "#skills",
    type: "hash",
  },
  {
    title: "Contact",
    link: "#contact",
    type: "hash",
  },
];
 const handleLinkClick = (link: links) => {
   if (link.type === "hash") {
     if (location.pathname !== "/") {
       navigate(`/${link.link}`);
     } else {
       const element = document.querySelector(link.link);
       if (element) {
         element.scrollIntoView({ behavior: "smooth", block: "start" });
       }
     }
   } else {
     navigate(link.link);
     window.scrollTo({ top: 0, behavior: "smooth" });
   }
 };
  return (
    <footer className="footer-section">
      {/* Background Effects */}
      <div className="footer-background">
        <div className="footer-gradient-1"></div>
        <div className="footer-gradient-2"></div>
        <div className="footer-mesh"></div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-container">
        {/* Top Section */}
        <motion.div
          className="footer-top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand Section */}
          <div className="footer-brand">
            <motion.div
              className="brand-logo"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <span className="logo-text">MM</span>
              <div className="logo-ring"></div>
            </motion.div>
            <div className="brand-info">
              <h3 className="brand-name">Mahmoud Mohamed</h3>
              <p className="brand-tagline">Front-End Developer</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="links-list">
              {links.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  {link.type === "hash" ? (
                    <a
                      href={link.link}
                      className="footer-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link);
                      }}
                    >
                      <span className="link-icon">→</span>
                      {link.title}
                    </a>
                  ) : (
                    <a
                      href={link.link}
                      className="footer-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link);
                      }}
                    >
                      <span className="link-icon">→</span>
                      {link.title}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-section-title">Get in Touch</h4>
            <div className="contact-items">
              <motion.a
                href="mailto:mohnud0987@gmail.com"
                className="contact-item"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <span className="contact-text">mohnud0987@gmail.com</span>
              </motion.a>
              <motion.a
                href="tel:01009014597"
                className="contact-item"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="contact-icon">
                  <FaPhone className='rotate-90'/>
                </div>
                <span className="contact-text">01009014597</span>
              </motion.a>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4 className="footer-section-title">Connect</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.2 + index * 0.1,
                  }}
                  whileHover={{
                    scale: 1.15,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <social.icon />
                  <div
                    className="social-glow"
                    style={{
                      background: `radial-gradient(circle, ${social.color}40, transparent)`,
                    }}
                  ></div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="footer-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="copyright-text">
            © {currentYear}{" "}
            <span className="highlight-name">Mahmoud Mohamed</span>. All rights
            reserved.
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="footer-decorations">
        <motion.div
          className="deco-circle deco-1"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="deco-circle deco-2"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;