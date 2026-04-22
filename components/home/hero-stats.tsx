"use client";
import { motion } from "motion/react";

const stats = [
  { value: "24/7", label: "Surveillance active" },
  { value: "360+", label: "Incidents traités" },
  { value: "48h", label: "Délai de réponse moyen" },
  { value: "120+", label: "Organisations protégées" },
];

export default function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-700/50"
    >
      {stats.map(({ value, label }) => (
        <div key={label} className="bg-slate-900 px-6 py-5">
          <div
            className="text-2xl font-bold text-sky-400 mb-1"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {value}
          </div>
          <div
            className="text-xs text-slate-500 tracking-wide uppercase"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            {label}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
