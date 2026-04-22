"use client";

import { motion } from "motion/react";
import { ShieldCheck, Vote, FileSearch } from "lucide-react";

const roles = [
  {
    icon: ShieldCheck,
    label: "Orientation stratégique",
    desc: "Définit les grandes orientations de la politique nationale de cybersécurité et valide le plan d'action annuel de l'agence.",
  },
  {
    icon: Vote,
    label: "Supervision & contrôle",
    desc: "Supervise les activités de l'agence, approuve le budget et évalue les performances des unités opérationnelles.",
  },
  {
    icon: FileSearch,
    label: "Conformité & éthique",
    desc: "Veille à la légalité des actions de l'agence et au respect des droits fondamentaux dans l'exercice de ses missions.",
  },
];

export default function ConseilDescription() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 xl:px-32 border-b border-slate-800">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-slate-800/40">
        {roles.map(({ icon: Icon, label, desc }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="bg-slate-950 p-8 flex flex-col gap-4 group hover:bg-slate-900 transition-colors duration-300"
          >
            <div className="p-3 border border-violet-500/20 bg-violet-500/5 w-fit">
              <Icon className="h-5 w-5 text-violet-400" />
            </div>
            <h3
              className="text-base font-bold text-white"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {label}
            </h3>
            <p
              className="text-sm text-slate-500 leading-relaxed"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              {desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
