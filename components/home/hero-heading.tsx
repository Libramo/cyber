"use client";
import { motion } from "motion/react";

export default function HeroHeading() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
      style={{ fontFamily: "var(--font-syne)" }}
    >
      Protéger le
      <br />
      <span className="text-sky-400">cyberespace</span>
      <br />
      national.
    </motion.h1>
  );
}
