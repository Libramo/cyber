"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-red-950/40 border-y border-red-900/30 py-20 px-6 sm:px-12 lg:px-24 xl:px-36">
      {/* Glow */}
      <div className="absolute inset-0 bg-linear-to-r from-red-950/60 via-slate-900 to-slate-900 pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600" />

      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-linear-to-r from-red-600/60 via-red-400/20 to-transparent pointer-events-none"
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 3,
        }}
      />

      <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-start gap-5"
        >
          <div className="shrink-0 mt-1 p-3 border border-red-500/30 bg-red-500/10">
            <AlertTriangle className="h-5 w-5 text-red-400" />
          </div>
          <div>
            <p
              className="text-xs tracking-widest uppercase text-red-400 mb-2"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              Vous êtes victime d'une cyberattaque ?
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Signalez l'incident
              <br />
              <span className="text-red-400">immédiatement.</span>
            </h2>
            <p
              className="mt-3 text-sm text-slate-400 max-w-md leading-relaxed"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              Notre équipe d'intervention est disponible 24h/24, 7j/7. Plus vous
              signalez tôt, plus nous pouvons limiter l'impact.
            </p>
          </div>
        </motion.div>

        {/* Right — CTAs */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0"
        >
          <a
            href="https://cert.gouv.dj/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors px-4 h-14 text-xs font-semibold tracking-widest uppercase text-white"
          >
            <AlertTriangle className="h-3.5 w-3.5" />
            Signaler un incident
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white transition-colors px-6 py-3 text-xs font-semibold tracking-widest uppercase"
          >
            Nous contacter
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
