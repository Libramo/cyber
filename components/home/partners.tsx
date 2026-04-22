"use client";

import { motion } from "motion/react";

const partners = [
  { abbr: "ARTT", name: "Autorité de Régulation des Télécommunications" },
  { abbr: "MIN-INT", name: "Ministère de l'Intérieur" },
  { abbr: "MIN-NUM", name: "Ministère du Numérique" },
  {
    abbr: "INTERPOL",
    name: "Organisation Internationale de Police Criminelle",
  },
  { abbr: "ITU", name: "Union Internationale des Télécommunications" },
  { abbr: "AFRIPOL", name: "Mécanisme Africain de Police" },
  { abbr: "AN-DSI", name: "Agence Nationale des Systèmes d'Information" },
  { abbr: "DJICEL", name: "Djibouti Télécom" },
];

export default function Partners() {
  return (
    <section className="bg-slate-900 py-24 px-6 sm:px-12 lg:px-24 xl:px-36 border-t border-slate-800">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
      >
        <div>
          <p
            className="text-xs tracking-widest uppercase text-sky-500 mb-3"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Écosystème de confiance
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Nos partenaires
            <br />
            <span className="text-sky-400">institutionnels</span>
          </h2>
        </div>
        <p
          className="text-sm text-slate-500 max-w-sm leading-relaxed"
          style={{ fontFamily: "var(--font-ibm)" }}
        >
          L'agence opère en étroite collaboration avec les institutions
          nationales et les organisations internationales spécialisées.
        </p>
      </motion.div>

      {/* Partners grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-slate-800/50">
        {partners.map((p, i) => (
          <motion.div
            key={p.abbr}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group bg-slate-900 px-8 py-10 flex flex-col items-center justify-center gap-3 hover:bg-slate-800 transition-colors duration-300 cursor-default"
          >
            {/* Logo placeholder */}
            <div className="relative flex items-center justify-center w-full">
              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-700 group-hover:border-sky-500/50 transition-colors duration-300" />
              <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-slate-700 group-hover:border-sky-500/50 transition-colors duration-300" />
              <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-slate-700 group-hover:border-sky-500/50 transition-colors duration-300" />
              <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-700 group-hover:border-sky-500/50 transition-colors duration-300" />

              <span
                className="text-lg font-bold text-slate-500 group-hover:text-sky-400 transition-colors duration-300 tracking-widest px-4 py-3"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {p.abbr}
              </span>
            </div>

            {/* Name */}
            <p
              className="text-xs text-slate-600 group-hover:text-slate-400 transition-colors duration-300 text-center leading-relaxed"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              {p.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 text-xs text-slate-700 tracking-widest uppercase text-center"
        style={{ fontFamily: "var(--font-ibm)" }}
      >
        Et de nombreux autres partenaires nationaux et internationaux
      </motion.p>
    </section>
  );
}
