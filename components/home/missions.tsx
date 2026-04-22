"use client";

import { motion } from "motion/react";
import {
  ShieldCheck,
  ScanSearch,
  Siren,
  BookOpen,
  Scale,
  Globe,
} from "lucide-react";

const missions = [
  {
    icon: ShieldCheck,
    label: "Gouvernance & Stratégie",
    desc: "Définition de la politique nationale de sécurité des systèmes d'information et coordination interministérielle. Pilotage stratégique de l'ensemble des actions de cybersécurité au niveau national.",
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
    glow: "bg-emerald-500/10",
  },
  {
    icon: ScanSearch,
    label: "Coopération Internationale",
    desc: "Représentation de Djibouti dans les instances internationales et partenariats bilatéraux pour renforcer la cybersécurité régionale.",
    color: "text-sky-400",
    border: "border-sky-500/20",
    bg: "bg-sky-500/5",
    glow: "bg-sky-500/10",
  },
  {
    icon: Siren,
    label: "Protection des OIV",
    desc: "Accompagnement et contrôle de la sécurité des Opérateurs d'Importance Vitale.",
    color: "text-red-400",
    border: "border-red-500/20",
    bg: "bg-red-500/5",
    glow: "bg-red-500/10",
  },
  {
    icon: BookOpen,
    label: "Audit & Qualification",
    desc: "Labellisation des produits et qualification des prestataires de confiance.",
    color: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/5",
    glow: "bg-amber-500/10",
  },
  {
    icon: Scale,
    label: "Culture Cyber",
    desc: "Programmes de sensibilisation et développement des filières de formation.",
    color: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/5",
    glow: "bg-violet-500/10",
  },
  {
    icon: Globe,
    label: "Cyberdéfense Active",
    desc: "Détection des intrusions et pilotage des crises cybernétiques majeures.",
    color: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/5",
    glow: "bg-cyan-500/10",
  },
];

export default function Missions() {
  return (
    <section className="bg-slate-950 py-24 px-6 sm:px-12 lg:px-24 xl:px-36">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p
          className="text-xs tracking-widest uppercase text-sky-500 mb-3"
          style={{ fontFamily: "var(--font-ibm)" }}
        >
          Missions stratégiques
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-white"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Une approche globale pour{" "}
          <span className="text-sky-400">sécuriser</span> les actifs vitaux de
          la <span className="text-sky-400">nation</span>
        </h2>
      </motion.div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-3">
        {/* Card 0 — wide hero card, spans 2 cols */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative lg:col-span-2 bg-slate-900 border border-slate-800 p-10 group overflow-hidden flex flex-col justify-between min-h-70 hover:border-emerald-500/40 transition-all duration-500"
        >
          {/* Animated glow on hover */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/15 transition-all duration-700 pointer-events-none" />

          {/* Scan line animation */}
          <motion.div
            className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-400/40 to-transparent pointer-events-none"
            initial={{ top: "0%" }}
            animate={{ top: "100%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 2,
            }}
          />

          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex p-3 border border-emerald-500/20 bg-emerald-500/5">
                <ShieldCheck className="h-6 w-6 text-emerald-400" />
              </div>
              <span
                className="text-xs text-slate-600 tracking-widest uppercase"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                Mission principale
              </span>
            </div>
            <h3
              className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {missions[0].label}
            </h3>
            <p
              className="text-sm text-slate-400 leading-relaxed max-w-lg"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              {missions[0].desc}
            </p>
          </div>

          <motion.div
            className="h-px bg-emerald-400/30 mt-8"
            initial={{ width: "2rem" }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Card 1 — tall right card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative bg-slate-900 border border-slate-800 p-8 group overflow-hidden flex flex-col justify-between hover:border-sky-500/40 transition-all duration-500 row-span-1 lg:row-span-2"
        >
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-sky-500/5 rounded-full blur-2xl group-hover:bg-sky-500/15 transition-all duration-700 pointer-events-none" />

          <div className="relative flex flex-col gap-6 h-full">
            <div className="flex items-start justify-between">
              <div className="inline-flex p-3 border border-sky-500/20 bg-sky-500/5">
                <ScanSearch className="h-5 w-5 text-sky-400" />
              </div>
              <span
                className="text-xs text-slate-700 tracking-widest"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                02
              </span>
            </div>

            <div className="flex-1">
              <h3
                className="text-lg font-bold text-white mb-3 group-hover:text-sky-400 transition-colors duration-300"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {missions[1].label}
              </h3>
              <p
                className="text-sm text-slate-400 leading-relaxed"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                {missions[1].desc}
              </p>
            </div>

            {/* Animated pulse dot */}
            <div className="flex items-center gap-2">
              <motion.div
                className="h-2 w-2 rounded-full bg-sky-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span
                className="text-xs text-slate-600 tracking-widest uppercase"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                Surveillance active
              </span>
            </div>
          </div>
        </motion.div>

        {/* Cards 2–5 — small cards */}
        {missions.slice(2).map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 * (i + 2) }}
            className={`relative bg-slate-900 border border-slate-800 p-7 group overflow-hidden flex flex-col justify-between hover:${m.border} transition-all duration-500`}
          >
            <div
              className={`absolute -bottom-8 -right-8 w-32 h-32 ${m.glow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none`}
            />

            <div className="relative">
              <div className="flex items-start justify-between mb-5">
                <div className={`inline-flex p-2.5 border ${m.border} ${m.bg}`}>
                  <m.icon className={`h-4 w-4 ${m.color}`} />
                </div>
                <span
                  className="text-xs text-slate-700 tracking-widest"
                  style={{ fontFamily: "var(--font-ibm)" }}
                >
                  0{i + 3}
                </span>
              </div>
              <h3
                className={`text-base font-bold text-white mb-2.5 group-hover:${m.color} transition-colors duration-300`}
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {m.label}
              </h3>
              <p
                className="text-xs text-slate-500 leading-relaxed"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                {m.desc}
              </p>
            </div>

            <motion.div
              className={`h-px ${m.color} bg-current opacity-20 mt-6`}
              initial={{ width: "1.5rem" }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
