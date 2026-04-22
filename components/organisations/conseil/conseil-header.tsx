"use client";

import { motion } from "motion/react";

export default function ConseilHeader() {
  return (
    <section className="relative bg-slate-900 border-b border-slate-800 py-20 px-6 sm:px-12 lg:px-24 xl:px-32 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-violet-500" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-violet-600/8 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <p
          className="text-xs tracking-widest uppercase text-violet-400 mb-3"
          style={{ fontFamily: "var(--font-ibm)" }}
        >
          Gouvernance
        </p>
        <h1
          className="text-4xl sm:text-5xl font-bold text-white"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Conseil de <span className="text-violet-400">Gouvernance</span>
        </h1>
        <p
          className="mt-4 text-sm text-slate-400 max-w-xl leading-relaxed"
          style={{ fontFamily: "var(--font-ibm)" }}
        >
          Organe indépendant chargé d'orienter la stratégie de l'agence, de
          superviser ses activités et de veiller à la conformité de ses actions
          avec les orientations nationales.
        </p>
      </motion.div>
    </section>
  );
}
