"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ScanSearch,
  Siren,
  Scale,
  BookOpen,
  Globe,
  ShieldCheck,
  ChevronRight,
  User,
} from "lucide-react";

const unites = [
  {
    id: "detection",
    number: "01",
    icon: ScanSearch,
    label: "Unité de Détection",
    mission:
      "Surveillance continue du cyberespace national et identification proactive des menaces.",
    head: "Chef d'unité — Placeholder",
    color: "text-sky-400",
    border: "border-sky-500/30",
    bg: "bg-sky-500/5",
    glow: "bg-sky-500/10",
    accent: "bg-sky-500",
    responsibilities: [
      "Opération du centre de surveillance national 24h/24",
      "Analyse des flux réseau et détection d'anomalies",
      "Veille sur les vulnérabilités et menaces émergentes",
      "Production de rapports de renseignement cyber",
    ],
  },
  {
    id: "reponse",
    number: "02",
    icon: Siren,
    label: "Unité de Réponse aux Incidents",
    mission:
      "Coordination et gestion opérationnelle de la réponse aux cyberattaques.",
    head: "Chef d'unité — Placeholder",
    color: "text-red-400",
    border: "border-red-500/30",
    bg: "bg-red-500/5",
    glow: "bg-red-500/10",
    accent: "bg-red-500",
    responsibilities: [
      "Intervention rapide sur les incidents signalés",
      "Coordination avec les organismes affectés",
      "Analyse forensique post-incident",
      "Rédaction des recommandations de remédiation",
    ],
  },
  {
    id: "juridique",
    number: "03",
    icon: Scale,
    label: "Unité Juridique",
    mission:
      "Élaboration du cadre légal et veille à la conformité réglementaire nationale.",
    head: "Chef d'unité — Placeholder",
    color: "text-violet-400",
    border: "border-violet-500/30",
    bg: "bg-violet-500/5",
    glow: "bg-violet-500/10",
    accent: "bg-violet-500",
    responsibilities: [
      "Élaboration des textes législatifs et réglementaires",
      "Délivrance des certifications et accréditations",
      "Veille juridique internationale",
      "Conseil aux entités publiques en matière de conformité",
    ],
  },
  {
    id: "sensibilisation",
    number: "04",
    icon: BookOpen,
    label: "Unité de Sensibilisation",
    mission:
      "Formation et éducation des acteurs publics et privés aux enjeux cyber.",
    head: "Chef d'unité — Placeholder",
    color: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-amber-500/5",
    glow: "bg-amber-500/10",
    accent: "bg-amber-500",
    responsibilities: [
      "Conception et déploiement des programmes de formation",
      "Organisation de campagnes de sensibilisation nationales",
      "Publication de guides et bonnes pratiques",
      "Partenariats avec les établissements d'enseignement",
    ],
  },
  {
    id: "cooperation",
    number: "05",
    icon: Globe,
    label: "Unité de Coopération",
    mission:
      "Gestion des partenariats stratégiques et représentation internationale.",
    head: "Chef d'unité — Placeholder",
    color: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/5",
    glow: "bg-cyan-500/10",
    accent: "bg-cyan-500",
    responsibilities: [
      "Négociation des accords bilatéraux et multilatéraux",
      "Représentation aux forums internationaux",
      "Partage de renseignement avec les agences partenaires",
      "Coordination des exercices cyber régionaux",
    ],
  },
  {
    id: "prevention",
    number: "06",
    icon: ShieldCheck,
    label: "Unité de Prévention",
    mission:
      "Audit des systèmes critiques et renforcement de la posture défensive nationale.",
    head: "Chef d'unité — Placeholder",
    color: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/5",
    glow: "bg-emerald-500/10",
    accent: "bg-emerald-500",
    responsibilities: [
      "Audit et évaluation des systèmes d'information publics",
      "Tests d'intrusion et analyses de vulnérabilité",
      "Élaboration des référentiels de sécurité nationaux",
      "Accompagnement des organismes dans leur mise en conformité",
    ],
  },
];

export default function UnitesGrid() {
  const [active, setActive] = useState<string | null>(null);

  const activeUnite = unites.find((u) => u.id === active);

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 xl:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left — unit list */}
        <div className="lg:col-span-1 flex flex-col gap-px bg-slate-800/40">
          {unites.map((unite, i) => (
            <motion.button
              key={unite.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              onClick={() => setActive(active === unite.id ? null : unite.id)}
              className={`group relative text-left bg-slate-950 px-6 py-5 flex items-center gap-4 transition-all duration-300 hover:bg-slate-900 ${
                active === unite.id ? "bg-slate-900" : ""
              }`}
            >
              {/* Active indicator */}
              <motion.div
                className={`absolute left-0 top-0 bottom-0 w-0.5 ${unite.accent}`}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: active === unite.id ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />

              <div
                className={`shrink-0 p-2 border ${unite.border} ${unite.bg}`}
              >
                <unite.icon className={`h-4 w-4 ${unite.color}`} />
              </div>

              <div className="flex-1 min-w-0">
                <p
                  className="text-xs text-slate-600 tracking-widest mb-0.5"
                  style={{ fontFamily: "var(--font-ibm)" }}
                >
                  {unite.number}
                </p>
                <p
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    active === unite.id
                      ? unite.color
                      : "text-slate-300 group-hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {unite.label}
                </p>
              </div>

              <ChevronRight
                className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                  active === unite.id
                    ? `${unite.color} rotate-90`
                    : "text-slate-700 group-hover:text-slate-500"
                }`}
              />
            </motion.button>
          ))}
        </div>

        {/* Right — detail panel */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {activeUnite ? (
              <motion.div
                key={activeUnite.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className={`relative bg-slate-900 border ${activeUnite.border} p-10 overflow-hidden h-full`}
              >
                {/* Glow */}
                <div
                  className={`absolute -top-20 -right-20 w-64 h-64 ${activeUnite.glow} rounded-full blur-3xl pointer-events-none`}
                />

                {/* Scan line */}
                <motion.div
                  className={`absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-current to-transparent ${activeUnite.color} opacity-30 pointer-events-none`}
                  initial={{ top: "0%" }}
                  animate={{ top: "100%" }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 2,
                  }}
                />

                <div className="relative flex flex-col gap-8">
                  {/* Header */}
                  <div className="flex items-start gap-5">
                    <div
                      className={`p-4 border ${activeUnite.border} ${activeUnite.bg}`}
                    >
                      <activeUnite.icon
                        className={`h-6 w-6 ${activeUnite.color}`}
                      />
                    </div>
                    <div>
                      <p
                        className="text-xs text-slate-600 tracking-widest uppercase mb-1"
                        style={{ fontFamily: "var(--font-ibm)" }}
                      >
                        Unité {activeUnite.number}
                      </p>
                      <h2
                        className={`text-2xl font-bold ${activeUnite.color}`}
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {activeUnite.label}
                      </h2>
                    </div>
                  </div>

                  {/* Mission */}
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase text-slate-600 mb-2"
                      style={{ fontFamily: "var(--font-ibm)" }}
                    >
                      Mission
                    </p>
                    <p
                      className="text-sm text-slate-300 leading-relaxed"
                      style={{ fontFamily: "var(--font-ibm)" }}
                    >
                      {activeUnite.mission}
                    </p>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase text-slate-600 mb-4"
                      style={{ fontFamily: "var(--font-ibm)" }}
                    >
                      Responsabilités clés
                    </p>
                    <div className="flex flex-col gap-3">
                      {activeUnite.responsibilities.map((r, i) => (
                        <motion.div
                          key={r}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.07 }}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full ${activeUnite.accent}`}
                          />
                          <p
                            className="text-sm text-slate-400 leading-relaxed"
                            style={{ fontFamily: "var(--font-ibm)" }}
                          >
                            {r}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Head */}
                  <div className="border-t border-slate-800 pt-6 flex items-center gap-3">
                    <div className="p-2 border border-slate-700 bg-slate-800">
                      <User className="h-4 w-4 text-slate-500" />
                    </div>
                    <div>
                      <p
                        className="text-xs text-slate-600 tracking-widest uppercase"
                        style={{ fontFamily: "var(--font-ibm)" }}
                      >
                        Responsable
                      </p>
                      <p
                        className="text-sm text-slate-400"
                        style={{ fontFamily: "var(--font-ibm)" }}
                      >
                        {activeUnite.head}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full min-h-[400px] border border-slate-800 bg-slate-900/30 flex flex-col items-center justify-center gap-4 text-center p-10"
              >
                <div className="p-4 border border-slate-700 bg-slate-900">
                  <ScanSearch className="h-6 w-6 text-slate-600" />
                </div>
                <p
                  className="text-sm text-slate-600"
                  style={{ fontFamily: "var(--font-ibm)" }}
                >
                  Sélectionnez une unité pour afficher les détails
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
