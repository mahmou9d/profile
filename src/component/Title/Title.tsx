import { ReactNode } from "react";
import { motion } from "framer-motion";

interface TitleProps {
  title: ReactNode;
  accentText?: string;
  subtitle?: ReactNode;
  
  className?: string;
  titleClassName?: string;
  accentClassName?: string;
  subtitleClassName?: string;

  tag?: "h1" | "h2" | "h3";
  
  animate?: boolean;
  titleDelay?: number;
  subtitleDelay?: number;
  duration?: number;
  yOffset?: number;

  titleStyle?: React.CSSProperties;
  accentStyle?: React.CSSProperties;
  subtitleStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

export const Title = ({
  title,
  accentText,
  subtitle,
  className = "",
  titleClassName = "",
  accentClassName = "",
  subtitleClassName = "",
  tag = "h2",
  animate = true,
  titleDelay = 0.07,
  subtitleDelay = 0.13,
  duration = 0.5,
  yOffset = 18,
  titleStyle,
  accentStyle,
  subtitleStyle,
  containerStyle,
}: TitleProps) => {
  const TitleTag = tag;

  if (animate) {
    // Dynamically choose correct tag for motion
    const MotionTag = motion[TitleTag] as any;
    return (
      <div className={className} style={containerStyle}>
        <MotionTag
          className={titleClassName}
          style={titleStyle}
          initial={{ opacity: 0, y: yOffset }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration, delay: titleDelay }}
        >
          {title}
          {accentText && (
            <>
              {" "}
              <span className={accentClassName} style={accentStyle}>
                {accentText}
              </span>
            </>
          )}
        </MotionTag>
        {subtitle && (
          <motion.p
            className={subtitleClassName}
            style={subtitleStyle}
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration, delay: subtitleDelay }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    );
  }

  return (
    <div className={className} style={containerStyle}>
      <TitleTag className={titleClassName} style={titleStyle}>
        {title}
        {accentText && (
          <>
            {" "}
            <span className={accentClassName} style={accentStyle}>
              {accentText}
            </span>
          </>
        )}
      </TitleTag>
      {subtitle && (
        <p className={subtitleClassName} style={subtitleStyle}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Title;
