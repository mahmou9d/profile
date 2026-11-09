import { useState, memo } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FiMail, FiMapPin, FiZap, FiCheck } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xwpvkwwp");
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="ct">
      <div className="ct__inner">
        {/* Left info */}
        <div className="ct__info">
          <h2 className="ct__title">
            Let's work
            <br />
            <span className="ct__title-accent">together.</span>
          </h2>
          <p className="ct__desc">
            Open to full-stack roles, freelance contracts, and exciting
            collaborations. I typically reply within 24 hours.
          </p>

          <div className="ct__details">
            <div className="ct__detail">
              <div className="ct__detail-icon">
                <FiMail />
              </div>
              <div className="ct__detail-text">
                <span className="ct__detail-label">Email</span>
                <span className="ct__detail-val">
                  mahmoud.mohamed.jsx@gmail.com
                </span>
              </div>
            </div>
            <div className="ct__detail">
              <div className="ct__detail-icon">
                <FiMapPin />
              </div>
              <div className="ct__detail-text">
                <span className="ct__detail-label">Location</span>
                <span className="ct__detail-val">Cairo, Egypt</span>
              </div>
            </div>
            <div className="ct__detail">
              <div className="ct__detail-icon">
                <FiZap />
              </div>
              <div className="ct__detail-text">
                <span className="ct__detail-label">Response Time</span>
                <span className="ct__detail-val">Within 24 hours</span>
              </div>
            </div>
          </div>

          <div className="ct__socials">
            <a
              href="https://github.com/mahmou9d"
              target="_blank"
              rel="noreferrer"
              className="ct__soc"
            >
              <SiGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mahmoud-mohammed-901327336/"
              target="_blank"
              rel="noreferrer"
              className="ct__soc"
            >
              <SiLinkedin /> LinkedIn
            </a>
            <a
              href="https://wa.me/201009014597"
              target="_blank"
              rel="noreferrer"
              className="ct__soc"
            >
              <SiWhatsapp /> WhatsApp
            </a>
          </div>
        </div>

        {/* Right form */}
        <div className="ct__form-wrap">
          {state.succeeded ? (
            <motion.div
              key="ok"
              className="ct__success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="ct__success-check">
                <FiCheck />
              </div>
              <h3 className="ct__success-title">Message Sent!</h3>
              <p className="ct__success-sub">
                I'll get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className="ct__form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div>
                <p className="ct__form-title">Send a message</p>
                <p className="ct__form-sub">All fields are required</p>
              </div>

              <div className="ct__field">
                <label htmlFor="ct-name" className="ct__lbl">
                  Name
                </label>
                <input
                  id="ct-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="off"
                  placeholder="Mahmoud Mohamed"
                  className="ct__inp"
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div className="ct__field">
                <label htmlFor="ct-email" className="ct__lbl">
                  Email
                </label>
                <input
                  id="ct-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="off"
                  placeholder="name@example.com"
                  className="ct__inp"
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="ct__err"
                />
              </div>

              <div className="ct__field">
                <label htmlFor="ct-msg" className="ct__lbl">
                  Message
                </label>
                <textarea
                  id="ct-msg"
                  name="message"
                  required
                  placeholder="Tell me about your project or opportunity…"
                  className="ct__ta"
                  onFocus={() => setFocused("msg")}
                  onBlur={() => setFocused(null)}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="ct__err"
                />
              </div>

              <motion.button
                type="submit"
                disabled={state.submitting}
                className="ct__submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {state.submitting ? "Sending…" : "Send Message →"}
              </motion.button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
