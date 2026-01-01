import React, { useState } from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

// Success Animation Component
const SuccessAnimation = () => (
  <motion.div className="success-animation">
    <motion.div
      className="success-circle"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.6,
      }}
    >
      <motion.svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        className="success-icon"
      >
        <motion.circle
          cx="40"
          cy="40"
          r="36"
          fill="none"
          stroke="url(#successGradient)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
        <motion.path
          d="M25 40 L35 50 L55 30"
          fill="none"
          stroke="#00f5ff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <defs>
          <linearGradient
            id="successGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00f5ff" />
            <stop offset="100%" stopColor="#00d9ff" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Glow Effect */}
      <motion.div
        className="success-glow"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>

    {/* Confetti Particles */}
    <div className="confetti-container">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="confetti"
          initial={{ scale: 0, x: 0, y: 0 }}
          animate={{
            scale: [0, 1, 0],
            x: Math.cos((i * Math.PI * 2) / 12) * 60,
            y: Math.sin((i * Math.PI * 2) / 12) * 60,
          }}
          transition={{
            duration: 1,
            delay: 0.8 + i * 0.03,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  </motion.div>
);

// // Enhanced Illustration Component
// const ContactVisual = () => {
//   return (
//     <div className="contact-visual">
//       {/* Main Email Card */}
//       <motion.div
//         className="email-card"
//         animate={{
//           y: [0, -15, 0],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         {/* Card Background */}
//         <div className="card-bg">
//           <div className="card-shine"></div>
//         </div>

//         {/* Email Icon */}
//         <motion.div
//           className="email-icon-wrapper"
//           initial={{ scale: 0, rotate: -180 }}
//           animate={{ scale: 1, rotate: 0 }}
//           transition={{
//             type: "spring",
//             stiffness: 100,
//             delay: 0.2,
//           }}
//         >
//           <svg
//             width="100"
//             height="80"
//             viewBox="0 0 100 80"
//             fill="none"
//             className="email-icon"
//           >
//             <motion.rect
//               x="10"
//               y="15"
//               width="80"
//               height="50"
//               rx="6"
//               fill="url(#emailGradient)"
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//             />
//             <motion.path
//               d="M10 15 L50 45 L90 15"
//               stroke="#00f5ff"
//               strokeWidth="2.5"
//               fill="none"
//               initial={{ pathLength: 0 }}
//               animate={{ pathLength: 1 }}
//               transition={{ duration: 1, delay: 0.5 }}
//             />
//             <defs>
//               <linearGradient
//                 id="emailGradient"
//                 x1="0%"
//                 y1="0%"
//                 x2="100%"
//                 y2="100%"
//               >
//                 <stop offset="0%" stopColor="rgba(0, 245, 255, 0.2)" />
//                 <stop offset="100%" stopColor="rgba(0, 217, 255, 0.3)" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </motion.div>

//         {/* Decorative Elements */}
//         <div className="card-decorations">
//           {[...Array(3)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="decoration-line"
//               initial={{ scaleX: 0 }}
//               animate={{ scaleX: 1 }}
//               transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
//             />
//           ))}
//         </div>
//       </motion.div>

//       {/* Floating Orbs */}
//       {[...Array(4)].map((_, i) => (
//         <motion.div
//           key={i}
//           className={`floating-orb orb-${i + 1}`}
//           animate={{
//             y: [0, -25, 0],
//             x: [0, i % 2 === 0 ? 15 : -15, 0],
//             scale: [1, 1.15, 1],
//           }}
//           transition={{
//             duration: 3 + i * 0.5,
//             repeat: Infinity,
//             ease: "easeInOut",
//             delay: i * 0.4,
//           }}
//         />
//       ))}
//     </div>
//   );
// };
// Animated Contact Illustration
const ContactVisual = () => (
  <div className="contact-illustration">
    {/* Floating Email Envelope */}
    <motion.div
      className="floating-envelope"
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg width="200" height="160" viewBox="0 0 200 160" fill="none">
        {/* Envelope Back */}
        <motion.rect
          x="20"
          y="40"
          width="160"
          height="100"
          rx="8"
          fill="url(#envelopeGradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        />

        {/* Envelope Flap */}
        <motion.path
          d="M20 40 L100 90 L180 40"
          stroke="#00f5ff"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Letter Lines */}
        <motion.line
          x1="50"
          y1="70"
          x2="150"
          y2="70"
          stroke="rgba(0, 245, 255, 0.4)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />
        <motion.line
          x1="50"
          y1="90"
          x2="130"
          y2="90"
          stroke="rgba(0, 245, 255, 0.3)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        <motion.line
          x1="50"
          y1="110"
          x2="140"
          y2="110"
          stroke="rgba(0, 245, 255, 0.3)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />

        <defs>
          <linearGradient
            id="envelopeGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(0, 245, 255, 0.15)" />
            <stop offset="100%" stopColor="rgba(0, 217, 255, 0.25)" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>

    {/* Floating Particles Around Envelope */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="illustration-particle"
        style={{
          position: "absolute",
          left: `${30 + i * 15}%`,
          top: `${20 + (i % 3) * 20}%`,
        }}
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 1, 0.3],
          scale: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          delay: i * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}

    {/* Decorative Circles */}
    <motion.div
      className="deco-circle circle-1"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    <motion.div
      className="deco-circle circle-2"
      animate={{
        scale: [1, 1.3, 1],
        rotate: [360, 180, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  </div>
);
const Contact = () => {
  const [state, handleSubmit] = useForm("xwpvkwwp");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section id="contact" className="contact-section">
      {/* Background Effects */}
      <div className="contact-bg">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
        {/* <div className="bg-mesh"></div> */}
      </div>

      {/* Content Container */}
      <div className="contact-container">
        {/* Header Section */}
        <div className="main-header-section">
          {/* Decorative Top Line */}
          {/* Title & Subtitle */}
          <motion.div
            className="header-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="header-tag">
              <span className="tag-icon">✉️</span>
              <span className="tag-text">Get in Touch</span>
            </div>
            <div className="title-icons">
              <span>📬</span>

              <h1 className="contact-title">
                Let's Connect
              </h1>
            </div>

            <p className="main-subheading">
              Have a question or want to work together? Drop me a message!
            </p>
          </motion.div>{" "}
          <motion.div
            className="header-top-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </div>
        {/* Main Content */}
        <div className="contact-content">
          {/* Form Section */}
          <motion.div
            className="form-section"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="contact-form-wrapper">
              {/* Email Field */}
              <motion.div
                className="input-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="email" className="input-label">
                  <span className="label-icon">📧</span>
                  <span>Email Address</span>
                </label>
                <div
                  className={`input-container ${
                    focusedField === "email" ? "focused" : ""
                  }`}
                >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    autoComplete="off"
                    placeholder="your.email@example.com"
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="form-input"
                  />
                  <div className="input-glow"></div>
                </div>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="error-message"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                className="input-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="message" className="input-label">
                  <span className="label-icon">💬</span>
                  <span>Your Message</span>
                </label>
                <div
                  className={`input-container ${
                    focusedField === "message" ? "focused" : ""
                  }`}
                >
                  <textarea
                    name="message"
                    id="message"
                    required
                    placeholder="Tell me about your project..."
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="form-textarea"
                  />
                  <div className="input-glow"></div>
                </div>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="error-message"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  className="submit-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="button-bg-gradient"></span>
                  <span className="button-content">
                    {state.submitting ? (
                      <>
                        <motion.span
                          className="spinner"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span className="button-icon">🚀</span>
                        <span>Send Message</span>
                      </>
                    )}
                  </span>
                </motion.button>
              </motion.div>

              {/* Success Message */}
              {state.succeeded && (
                <motion.div
                  className="success-container"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                >
                  <SuccessAnimation />
                  <motion.div
                    className="success-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3>Message Sent! 🎉</h3>
                    <p>Thanks for reaching out. I'll get back to you soon!</p>
                  </motion.div>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            className="visual-section"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <ContactVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
