"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";

export default function HeroCtas() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-wrap items-center gap-4"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 text-xs font-semibold tracking-widest uppercase text-white"
      >
        <AlertTriangle className="h-3.5 w-3.5" />
        Signaler un incident
      </Link>
      <Link
        href="/actualites"
        className="inline-flex items-center gap-2 border border-slate-600 hover:border-sky-500 text-slate-300 hover:text-sky-400 transition-colors px-6 py-3 text-xs font-semibold tracking-widest uppercase"
      >
        Dernières alertes
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </motion.div>
  );
}
