"use client";
import { motion } from "motion/react";

export default function HeroTag() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center gap-2 border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 mb-8"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
      <span
        className="text-xs tracking-widest uppercase text-sky-400"
        style={{ fontFamily: "var(--font-ibm)" }}
      >
        Agence Nationale de Cybersécurité
      </span>
    </motion.div>
  );
}
