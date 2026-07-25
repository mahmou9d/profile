import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../Title/Title";
import "./contact.css";

/* ── Social data ────────────────────────────────────── */
const SOCIALS = [
  {
    id: "gh",
    label: "GitHub",
    href: "https://github.com/mahmou9d",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
      </svg>
    ),
  },
  {
    id: "li",
    label: "LinkedIn",
    href: "https://linkedin.com/in/mahmou9d",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: "wa",
    label: "WhatsApp",
    href: "https://wa.me/201009014597",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
];

/* ── Bento card wrapper ─────────────────────────────── */
const BentoCard = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={`ct-bento ${className}`}
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

/* ── Main ───────────────────────────────────────────── */
const Contact = () => {
  const [state, handleSubmit] = useForm("xwpvkwwp");
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="ct-section">
      {/* noise grain texture */}
      <div className="ct-noise" aria-hidden />
      {/* soft glow orbs */}
      <div className="ct-orb ct-orb-1" aria-hidden />
      <div className="ct-orb ct-orb-2" aria-hidden />

      {/* ── Section heading ── */}
      <Title
        className="ct-head"
        titleClassName="ct-heading"
        accentClassName="ct-heading-accent"
        subtitleClassName="ct-desc"
        title={
          <>
            Let's build something
            <br />
          </>
        }
        accentText="great together."
        subtitle="Open to full-stack roles, freelance contracts, and exciting collaborations. Drop a message — I reply within 24 hours."
        tag="h2"
        animate={true}
        titleDelay={0.07}
        subtitleDelay={0.13}
        yOffset={18}
      />

      {/* ── Bento grid ── */}
      <div className="ct-bento-grid">
        {/* ① availability card */}
        <BentoCard className="ct-bento-avail" delay={0.1}>
          <div className="ct-avail-pulse">
            <span className="ct-pulse-ring" />
            <span className="ct-pulse-dot" />
          </div>
          <div>
            <p className="ct-avail-title">Currently Available</p>
            <p className="ct-avail-sub">Cairo, Egypt · Full-stack</p>
          </div>
        </BentoCard>

        {/* ② quick info card */}
        <BentoCard className="ct-bento-info" delay={0.14}>
          {/* macOS chrome */}
          <div className="ct-chrome">
            <span className="ct-dot r" />
            <span className="ct-dot y" />
            <span className="ct-dot g" />
            <span className="ct-chrome-name">contact.json</span>
          </div>
          <pre className="ct-json">
            <span className="j-p">{"{"}</span>
            {"\n"}
            {"  "}
            <span className="j-k">"stack"</span>
            {": "}
            <span className="j-s">"full-stack"</span>
            {",\n"}
            {"  "}
            <span className="j-k">"response"</span>
            {": "}
            <span className="j-s">"24h"</span>
            {",\n"}
            {"  "}
            <span className="j-k">"available"</span>
            {": "}
            <span className="j-b">true</span>
            {"\n"}
            <span className="j-p">{"}"}</span>
          </pre>
          <div className="ct-info-rows">
            {[
              { i: "✉", v: "mahmoud.mohamed.jsx@gmail.com" },
              { i: "📍", v: "Cairo, Egypt" },
              { i: "⏱", v: "Replies within 24h" },
            ].map((r) => (
              <div key={r.v} className="ct-irow">
                <span className="ct-irow-icon">{r.i}</span>
                <span className="ct-irow-val">{r.v}</span>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* ③ socials card */}
        <BentoCard className="ct-bento-social" delay={0.18}>
          <p className="ct-socials-title">Find me online</p>
          <div className="ct-socials">
            {SOCIALS.map((s) => (
              <motion.a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className={`ct-soc-btn ct-soc-${s.id}`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
              >
                {s.icon}
                <span>{s.label}</span>
                <svg
                  className="ct-ext"
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </motion.a>
            ))}
          </div>
        </BentoCard>

        {/* ④ form card — spans right column */}
        <BentoCard className="ct-bento-form" delay={0.12}>
          {/* glowing top edge */}
          <div className="ct-edge-glow" aria-hidden />

          <AnimatePresence mode="wait">
            {state.succeeded ? (
              <motion.div
                key="done"
                className="ct-success"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28 }}
              >
                <motion.div
                  className="ct-ok-ring"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
                <h3 className="ct-ok-title">Message Sent!</h3>
                <p className="ct-ok-sub">
                  I'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="ct-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <div className="ct-form-header">
                  <p className="ct-form-title">Send a message</p>
                  <p className="ct-form-hint">All fields required</p>
                </div>

                <div className="ct-fields">
                  {/* name */}
                  <div className="ct-field">
                    <label htmlFor="ct-name" className="ct-fl">
                      Name
                    </label>
                    <input
                      type="text"
                      id="ct-name"
                      name="name"
                      required
                      autoComplete="off"
                      placeholder="Mahmoud "
                      className={`ct-inp${focused === "name" ? " on" : ""}`}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>

                  {/* email */}
                  <div className="ct-field">
                    <label htmlFor="ct-email" className="ct-fl">
                      Email
                    </label>
                    <input
                      type="email"
                      id="ct-email"
                      name="email"
                      required
                      autoComplete="off"
                      placeholder="name@example.com"
                      className={`ct-inp${focused === "email" ? " on" : ""}`}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="ct-err"
                    />
                  </div>

                  {/* message */}
                  <div className="ct-field">
                    <label htmlFor="ct-msg" className="ct-fl">
                      Message
                    </label>
                    <textarea
                      id="ct-msg"
                      name="message"
                      required
                      placeholder="Tell me about your project or opportunity…"
                      className={`ct-ta${focused === "msg" ? " on" : ""}`}
                      onFocus={() => setFocused("msg")}
                      onBlur={() => setFocused(null)}
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="ct-err"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  className="ct-submit"
                  whileHover={{ scale: 1.012 }}
                  whileTap={{ scale: 0.988 }}
                >
                  <span>{state.submitting ? "Sending…" : "Send Message"}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ct-arrow"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </BentoCard>
      </div>
    </section>
  );
};

export default Contact;
