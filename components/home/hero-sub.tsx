"use client";
import { motion } from "motion/react";

export default function HeroSub() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-base text-slate-400 leading-relaxed max-w-xl mb-10"
      style={{ fontFamily: "var(--font-ibm)" }}
    >
      Garant de la souveraineté numérique nationale. Nous protégeons les
      infrastructures critiques, les administrations et les citoyens face aux
      menaces du cyberespace.
    </motion.p>
  );
}
