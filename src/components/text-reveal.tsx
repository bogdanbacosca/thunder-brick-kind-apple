import { motion, useReducedMotion } from "motion/react";
import type { ElementType, ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * TextReveal
 *
 * Reveals plain-text content word by word on scroll enter, with a small
 * upward drift and a staggered delay per word. Falls back to rendering the
 * children unchanged when reduced motion is preferred, or when children
 * isn't a plain string (e.g. it contains inline markup).
 */
export function TextReveal({
  children,
  className,
  tag = "h2",
  stagger = 0.07,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  tag?: ElementType;
  stagger?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const text = typeof children === "string" ? children : null;
  const Tag = tag;

  if (reduce || !text) {
    return <Tag className={className}>{children}</Tag>;
  }

  const words = text.split(/\s+/).filter(Boolean);

  return (
    <Tag className={className} style={{ display: "block" }}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8% 0px -12% 0px" }}
          transition={{
            duration: 0.55,
            delay: delay + index * stagger,
            ease,
          }}
        >
          {word}
          {index < words.length - 1 && " "}
        </motion.span>
      ))}
    </Tag>
  );
}
