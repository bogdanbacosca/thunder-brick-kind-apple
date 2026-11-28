import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/**
 * ChromaShift
 *
 * A subtle, full-bleed background layer that cycles the brand's CMYK-ish
 * ink tones as the user scrolls down the page. It sits behind the content
 * (z-index -1, pointer-events none) so it never blocks interaction, and it
 * respects prefers-reduced-motion by rendering nothing.
 *
 * Colors: magenta → cyan → yellow → ink → back to magenta.
 */
const SHIFT_STOPS = [
  [0, "rgba(225, 6, 107, 0.09)"],
  [0.24, "rgba(0, 181, 212, 0.09)"],
  [0.48, "rgba(255, 208, 0, 0.09)"],
  [0.72, "rgba(20, 18, 16, 0.07)"],
  [1, "rgba(225, 6, 107, 0.09)"],
] as const;

export function ChromaShift() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  const { scrollYProgress } = useScroll();

  const background = useTransform(
    scrollYProgress,
    SHIFT_STOPS.map(([t]) => t),
    SHIFT_STOPS.map(([, color]) => color)
  );

  return (
    <motion.div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100dvh",
        background,
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
}
