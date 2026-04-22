"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const categories = [
  "Tous",
  "Alerte",
  "Communiqué",
  "Publication",
  "Événement",
] as const;
type Category = (typeof categories)[number];

const articles = [
  {
    id: 1,
    category: "Alerte",
    title: "Campagne de phishing ciblant les administrations publiques",
    excerpt:
      "Une campagne de phishing sophistiquée visant les adresses email gouvernementales a été détectée. Les organisations sont invitées à renforcer leur vigilance.",
    date: "18 avril 2026",
    readTime: "3 min",
    urgent: true,
  },
  {
    id: 2,
    category: "Communiqué",
    title: "Signature d'un accord de coopération avec l'ITU",
    excerpt:
      "L'agence a officialisé un partenariat stratégique avec l'Union Internationale des Télécommunications pour le renforcement des capacités nationales.",
    date: "14 avril 2026",
    readTime: "2 min",
    urgent: false,
  },
  {
    id: 3,
    category: "Publication",
    title: "Guide national de sécurité des infrastructures critiques",
    excerpt:
      "Publication du référentiel national de sécurité destiné aux opérateurs d'importance vitale. Document téléchargeable en format PDF.",
    date: "10 avril 2026",
    readTime: "5 min",
    urgent: false,
  },
  {
    id: 4,
    category: "Alerte",
    title:
      "Vulnérabilité critique détectée dans plusieurs routeurs industriels",
    excerpt:
      "Une faille de sécurité de niveau critique a été identifiée sur des équipements réseau largement déployés. Un correctif est disponible.",
    date: "7 avril 2026",
    readTime: "4 min",
    urgent: true,
  },
  {
    id: 5,
    category: "Événement",
    title: "Cyber Forum Djibouti 2026 — Appel à participation",
    excerpt:
      "La deuxième édition du forum national de cybersécurité aura lieu en juin 2026. Les inscriptions sont ouvertes pour les organisations publiques et privées.",
    date: "3 avril 2026",
    readTime: "2 min",
    urgent: false,
  },
  {
    id: 6,
    category: "Publication",
    title: "Rapport annuel sur l'état de la cybersécurité nationale 2025",
    excerpt:
      "L'agence publie son rapport annuel présentant les tendances, statistiques et perspectives du cyberespace national pour l'année 2025.",
    date: "28 mars 2026",
    readTime: "8 min",
    urgent: false,
  },
  {
    id: 7,
    category: "Communiqué",
    title: "Résultats de l'exercice national de gestion de crise cyber",
    excerpt:
      "Bilan de l'exercice CyberDJ-2026 ayant mobilisé 24 organisations publiques autour d'un scénario d'attaque coordonnée sur les infrastructures.",
    date: "21 mars 2026",
    readTime: "3 min",
    urgent: false,
  },
  {
    id: 8,
    category: "Alerte",
    title: "Recrudescence des attaques par rançongiciel dans la région",
    excerpt:
      "Une hausse significative des attaques par ransomware a été observée dans la région. Les entreprises sont appelées à mettre à jour leurs systèmes.",
    date: "15 mars 2026",
    readTime: "4 min",
    urgent: true,
  },
  {
    id: 9,
    category: "Événement",
    title: "Formation certifiante en cybersécurité pour les agents publics",
    excerpt:
      "L'agence lance un programme de formation intensive destiné aux responsables informatiques des ministères et établissements publics.",
    date: "10 mars 2026",
    readTime: "2 min",
    urgent: false,
  },
];

const categoryColors: Record<
  string,
  { text: string; border: string; bg: string }
> = {
  Alerte: {
    text: "text-red-400",
    border: "border-red-500/30",
    bg: "bg-red-500/10",
  },
  Communiqué: {
    text: "text-sky-400",
    border: "border-sky-500/30",
    bg: "bg-sky-500/10",
  },
  Publication: {
    text: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/10",
  },
  Événement: {
    text: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-amber-500/10",
  },
};

export default function ActualitesGrid() {
  const [active, setActive] = useState<Category>("Tous");

  const filtered =
    active === "Tous"
      ? articles
      : articles.filter((a) => a.category === active);

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-24 xl:px-32">
      {/* Filter bar */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap gap-2 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-200 border",
              active === cat
                ? "bg-sky-600 border-sky-600 text-white"
                : "border-slate-700 text-slate-500 hover:border-slate-500 hover:text-slate-300",
            )}
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800/40"
        >
          {filtered.map((article, i) => {
            const colors = categoryColors[article.category];
            return (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="group bg-slate-950 p-7 flex flex-col justify-between gap-6 hover:bg-slate-900 transition-colors duration-300"
              >
                <div className="flex flex-col gap-4">
                  {/* Category + urgent */}
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "text-xs font-semibold tracking-widest uppercase px-2.5 py-1 border",
                        colors.text,
                        colors.border,
                        colors.bg,
                      )}
                      style={{ fontFamily: "var(--font-ibm)" }}
                    >
                      {article.category}
                    </span>
                    {article.urgent && (
                      <span className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                        <span
                          className="text-xs text-red-400 tracking-widest uppercase"
                          style={{ fontFamily: "var(--font-ibm)" }}
                        >
                          Urgent
                        </span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2
                    className="text-base font-bold text-white leading-snug group-hover:text-sky-400 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    className="text-xs text-slate-500 leading-relaxed"
                    style={{ fontFamily: "var(--font-ibm)" }}
                  >
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div
                    className="flex items-center gap-2 text-xs text-slate-600"
                    style={{ fontFamily: "var(--font-ibm)" }}
                  >
                    <Calendar className="h-3 w-3" />
                    {article.date}
                    <span className="text-slate-700">·</span>
                    {article.readTime}
                  </div>
                  <Link
                    href={`/actualites/${article.id}`}
                    className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-slate-600 group-hover:text-sky-400 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-ibm)" }}
                  >
                    Lire
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="py-24 text-center">
          <p
            className="text-slate-600 text-sm"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Aucun article dans cette catégorie.
          </p>
        </div>
      )}
    </section>
  );
}
