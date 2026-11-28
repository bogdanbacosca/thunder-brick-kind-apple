import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";

const INKS = [
  { name: "Cyan", plate: "#00b5d4", on: "#141210" },
  { name: "Magenta", plate: "#e1066b", on: "#fffdf8" },
  { name: "Galben", plate: "#ffd000", on: "#141210" },
  { name: "Negru", plate: "#141210", on: "#ffd000" },
] as const;

const WORD = "culoare";

/**
 * Sticky press-registration: the word starts as three offset ink plates
 * and pulls into register while the field cycles cyan → magenta → yellow → black.
 */
export function InkField() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const background = useTransform(scrollYProgress, [0, 0.25, 0.48, 0.62, 0.74, 1], [
    "#00b5d4",
    "#e1066b",
    "#ffd000",
    "#ffd000",
    "#141210",
    "#141210",
  ]);
  const color = useTransform(scrollYProgress, (value): string => {
    if (value < 0.16) return "#141210";
    if (value < 0.4) return "#fffdf8";
    if (value < 0.68) return "#141210";
    return "#ffd000";
  });
  const spread = useTransform(scrollYProgress, [0, 0.42], [14, 0]);
  const ghost = useTransform(scrollYProgress, [0, 0.34, 0.58], [0.95, 0.8, 0]);

  if (reduce) {
    return (
      <section className="bg-ink text-yellow">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs tracking-[0.28em] uppercase">Patru cerneluri</p>
          <h2 className="mt-3 font-display text-6xl leading-none sm:text-7xl">{WORD}</h2>
          <p className="mt-4 max-w-xl text-lg text-paper">
            Cyan, magenta, galben, negru. Aceleași patru cerneluri, pe o carte de vizită sau pe fațadă.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {INKS.map((ink) => (
              <li key={ink.name} className="rounded-2xl px-4 py-3 text-sm" style={{ background: ink.plate, color: ink.on }}>
                {ink.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[190vh]" aria-label="Cerneluri de tipar">
      <motion.div
        style={{ background }}
        className="sticky top-0 flex h-dvh flex-col overflow-hidden px-5 pt-32 pb-10 sm:px-10"
      >
        <div className="relative h-6">
          {INKS.map((ink, index) => (
            <InkLabel key={ink.name} name={ink.name} index={index} progress={scrollYProgress} color={color} />
          ))}
        </div>

        <div className="relative my-auto">
          <Plate text={WORD} spread={spread} opacity={ghost} dx={1} dy={-0.35} tint="#00e5ff" />
          <Plate text={WORD} spread={spread} opacity={ghost} dx={-1} dy={0.15} tint="#ff2d8a" />
          <Plate text={WORD} spread={spread} opacity={ghost} dx={0.2} dy={1} tint="#ffe14a" />
          <motion.h2
            style={{ color }}
            className="relative max-w-full font-display text-[clamp(3.6rem,22vw,10.5rem)] leading-[0.82] font-medium tracking-[-0.045em] whitespace-nowrap"
          >
            {WORD}
          </motion.h2>
          <motion.p style={{ color }} className="mt-5 max-w-md text-base sm:text-lg">
            Cyan, magenta, galben, negru. Aceleași patru cerneluri, pe o carte de vizită sau pe fațadă.
          </motion.p>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {INKS.map((ink, index) => (
            <Swatch key={ink.name} name={ink.name} index={index} progress={scrollYProgress} color={color} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function InkLabel({
  name,
  index,
  progress,
  color,
}: {
  name: string;
  index: number;
  progress: MotionValue<number>;
  color: MotionValue<string>;
}) {
  const opacity = useTransform(progress, (value) => {
    const center = index / 3;
    const distance = Math.abs(value - center);
    if (distance < 0.16) return 1;
    return Math.max(0, 1 - (distance - 0.16) / 0.14);
  });

  return (
    <motion.p style={{ opacity, color }} className="absolute text-xs tracking-[0.28em] uppercase">
      {name} · cerneală
    </motion.p>
  );
}

function Plate({
  text,
  spread,
  opacity,
  dx,
  dy,
  tint,
}: {
  text: string;
  spread: MotionValue<number>;
  opacity: MotionValue<number>;
  dx: number;
  dy: number;
  tint: string;
}) {
  const x = useTransform(spread, (value) => value * dx);
  const y = useTransform(spread, (value) => value * dy);

  return (
    <motion.p
      aria-hidden
      style={{ x, y, opacity, color: tint }}
      className="absolute top-0 left-0 font-display text-[clamp(3.6rem,22vw,10.5rem)] leading-[0.82] font-medium tracking-[-0.045em] whitespace-nowrap"
    >
      {text}
    </motion.p>
  );
}

function Swatch({
  name,
  index,
  progress,
  color,
}: {
  name: string;
  index: number;
  progress: MotionValue<number>;
  color: MotionValue<string>;
}) {
  const scaleX = useTransform(progress, (value) => {
    const distance = Math.abs(value * 3 - index);
    return 0.28 + Math.max(0, 1 - distance) * 0.72;
  });

  return (
    <div>
      <motion.div style={{ scaleX, background: color }} className="h-1.5 origin-left rounded-full" />
      <motion.p style={{ color }} className="mt-2 text-[11px] tracking-[0.18em] uppercase sm:text-xs">
        {name}
      </motion.p>
    </div>
  );
}
