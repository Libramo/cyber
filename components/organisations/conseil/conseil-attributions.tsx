"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Settings, Compass } from "lucide-react";

const categories = [
  {
    id: "administration",
    icon: Settings,
    type: "Administration",
    color: "text-sky-400",
    border: "border-sky-500/20",
    bg: "bg-sky-500/5",
    accent: "bg-sky-500",
    activeBorder: "border-sky-500",
    items: [
      {
        number: "01",
        label: "Approbation budgétaire",
        desc: "Examine, amende et approuve le budget annuel de l'agence soumis par le Directeur Général.",
      },
      {
        number: "02",
        label: "Contrôle des dépenses",
        desc: "Supervise l'exécution budgétaire et veille à la conformité des engagements financiers de l'agence.",
      },
      {
        number: "03",
        label: "Nomination des cadres",
        desc: "Propose aux autorités compétentes la nomination et la révocation du Directeur Général et des chefs d'unités.",
      },
      {
        number: "04",
        label: "Audit interne",
        desc: "Diligente des missions d'audit interne et examine les rapports produits par les organes de contrôle.",
      },
      {
        number: "05",
        label: "Règlement intérieur",
        desc: "Adopte et révise le règlement intérieur de l'agence ainsi que les procédures administratives applicables.",
      },
      {
        number: "06",
        label: "Rapports d'activité",
        desc: "Examine les rapports d'activité périodiques du Directeur Général et formule des observations.",
      },
      {
        number: "07",
        label: "Reddition de comptes",
        desc: "Produit un rapport annuel transmis aux autorités de tutelle et rendu public dans les délais réglementaires.",
      },
      {
        number: "08",
        label: "Gestion des ressources humaines",
        desc: "Valide la politique RH, les plans de recrutement et les grilles de rémunération du personnel.",
      },
      {
        number: "09",
        label: "Patrimoine & infrastructures",
        desc: "Autorise les acquisitions immobilières, les investissements matériels et les contrats d'une valeur significative.",
      },
    ],
  },
  {
    id: "strategique",
    icon: Compass,
    type: "Organe Stratégique",
    color: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/5",
    accent: "bg-violet-500",
    activeBorder: "border-violet-500",
    items: [
      {
        number: "01",
        label: "Plan stratégique",
        desc: "Approuve le plan stratégique pluriannuel de l'agence et ses révisions en fonction de l'évolution du contexte cyber.",
      },
      {
        number: "02",
        label: "Orientations nationales",
        desc: "Définit les grandes priorités de la politique nationale de cybersécurité en cohérence avec les objectifs de l'État.",
      },
      {
        number: "03",
        label: "Évaluation des performances",
        desc: "Évalue annuellement les résultats de l'agence au regard des objectifs stratégiques fixés.",
      },
      {
        number: "04",
        label: "Veille stratégique",
        desc: "Analyse les évolutions du paysage cyber national et international pour orienter les décisions de l'agence.",
      },
      {
        number: "05",
        label: "Cadre réglementaire",
        desc: "Valide les textes réglementaires et normatifs produits par l'agence avant soumission aux autorités de tutelle.",
      },
      {
        number: "06",
        label: "Coopération internationale",
        desc: "Approuve les accords de coopération bilatéraux et multilatéraux engageant l'agence au niveau international.",
      },
      {
        number: "07",
        label: "Gestion des crises majeures",
        desc: "Statue sur les mesures exceptionnelles à prendre lors de cybercrises d'envergure nationale.",
      },
      {
        number: "08",
        label: "Innovation & recherche",
        desc: "Oriente la stratégie de recherche et d'innovation en matière de cybersécurité et technologies émergentes.",
      },
      {
        number: "09",
        label: "Communication institutionnelle",
        desc: "Valide les prises de position publiques majeures et la stratégie de communication externe de l'agence.",
      },
    ],
  },
];

export default function ConseilAttributions() {
  const [active, setActive] = useState("administration");

  const current = categories.find((c) => c.id === active)!;

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 xl:px-32 border-b border-slate-800">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p
          className="text-xs tracking-widest uppercase text-violet-400 mb-3"
          style={{ fontFamily: "var(--font-ibm)" }}
        >
          Prérogatives
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-white"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Attributions du <span className="text-violet-400">Conseil</span>
        </h2>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-px mb-10 bg-slate-800/40 w-fit">
        {categories.map(
          ({ id, icon: Icon, type, color, border, bg, activeBorder }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-widest uppercase transition-all duration-200 border-b-2 ${
                active === id
                  ? `bg-slate-900 ${color} ${activeBorder}`
                  : "bg-slate-950 text-slate-500 border-transparent hover:text-slate-300 hover:bg-slate-900"
              }`}
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              <Icon className="h-3.5 w-3.5" />
              {type}
            </button>
          ),
        )}
      </div>

      {/* Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800/40"
        >
          {current.items.map(({ number, label, desc }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="group bg-slate-950 hover:bg-slate-900 transition-colors duration-300 p-7 flex flex-col gap-4"
            >
              <span
                className="text-2xl font-bold text-slate-800 group-hover:opacity-60 transition-all duration-300"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {number}
              </span>
              <div>
                <h4
                  className={`text-sm font-bold text-white mb-2 group-hover:${current.color} transition-colors duration-300`}
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {label}
                </h4>
                <p
                  className="text-xs text-slate-500 leading-relaxed"
                  style={{ fontFamily: "var(--font-ibm)" }}
                >
                  {desc}
                </p>
              </div>
              <motion.div
                className={`h-px ${current.accent} opacity-20 mt-auto`}
                initial={{ width: "1.5rem" }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
