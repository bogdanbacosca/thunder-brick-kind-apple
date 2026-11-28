import { motion, useReducedMotion, useScroll, useTransform, useMotionTemplate } from "motion/react";

/**
 * Full-viewport paper tint. Two CMYK blooms drift and trade color with
 * scroll, sitting behind the page so solid sections stay readable.
 */
export function ChromaShift() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const bloomA = useTransform(scrollYProgress, [0, 0.28, 0.55, 0.8, 1], [
    "rgba(0, 181, 212, 0.55)",
    "rgba(225, 6, 107, 0.48)",
    "rgba(255, 208, 0, 0.62)",
    "rgba(225, 6, 107, 0.42)",
    "rgba(0, 181, 212, 0.5)",
  ]);
  const bloomB = useTransform(scrollYProgress, [0, 0.35, 0.68, 1], [
    "rgba(225, 6, 107, 0.38)",
    "rgba(255, 208, 0, 0.5)",
    "rgba(0, 181, 212, 0.46)",
    "rgba(255, 208, 0, 0.4)",
  ]);
  const xA = useTransform(scrollYProgress, [0, 1], ["12%", "32%"]);
  const yA = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const xB = useTransform(scrollYProgress, [0, 1], ["90%", "58%"]);
  const yB = useTransform(scrollYProgress, [0, 1], ["92%", "48%"]);

  const background = useMotionTemplate`radial-gradient(ellipse 72% 56% at ${xA} ${yA}, ${bloomA}, transparent 64%), radial-gradient(ellipse 64% 52% at ${xB} ${yB}, ${bloomB}, transparent 62%), #fff6ea`;

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{ background }}
    />
  );
}
