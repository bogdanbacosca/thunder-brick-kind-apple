import { motion, useReducedMotion } from "motion/react";
import { type ElementType, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Masked word reveal. Each word rises out of its own clip, with a short
 * blur, when the line enters the viewport.
 */
export function TextReveal({
  children,
  className,
  tag = "h2",
  stagger = 0.045,
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
    <Tag className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="inline-block overflow-hidden pb-[0.16em] -mb-[0.16em] align-bottom">
            <motion.span
              className="inline-block"
              initial={{ y: "115%", filter: "blur(4px)" }}
              whileInView={{ y: "0%", filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{
                duration: 0.7,
                delay: delay + index * stagger,
                ease,
              }}
            >
              {word}
            </motion.span>
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
