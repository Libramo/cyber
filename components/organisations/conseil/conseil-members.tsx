"use client";

import { motion } from "motion/react";

const members = [
  {
    name: "M. Hassan Said Khaireh",
    title: "Directeur Général de la Sécurité Nationale",
    president: true,
    secretaire: false,
  },
  {
    name: "M. Ibrahim Yonis Omar",
    title: "Directeur Général de l'ANC",
    president: false,
    secretaire: true,
  },
  {
    name: "Membre",
    title: "Ministre de l'Intérieur",
    president: false,
  },
  {
    name: "",
    title:
      "Ministre de la Justice et des Affaires Pénitentiaires Chargé des Droits de l'Homme",
    president: false,
  },
  {
    name: "Ministre de la Défense Chargé des relations avec le Parlement",
    title: "Membre",
    president: false,
  },
  {
    name: "Ministre de l'Économie et des Finances Chargé de l'industrie",
    title: "Membre",
    president: false,
  },
  {
    name: "Ministre Déléguée chargée de l'Économie Numérique et de l'Innovation",
    title: "Membre",
    president: false,
  },

  {
    name: "Directeur Général de l'Autorité de Régulation Multisectorielle",
    title: "Membre",
    president: false,
  },
  {
    name: "Président de la Commission Nationale de Protection des Données",
    title: "Membre",
    president: false,
  },
];

export default function ConseilMembers() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 xl:px-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-14"
      >
        <p
          className="text-xs tracking-widest uppercase text-violet-400 mb-3"
          style={{ fontFamily: "var(--font-ibm)" }}
        >
          Composition
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-white"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Les membres du <span className="text-violet-400">Conseil</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800/40">
        {members.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`group relative bg-slate-950 p-8 flex flex-col gap-5 hover:bg-slate-900 transition-colors duration-300 ${
              member.president ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            {/* President badge */}
            {member.president && (
              <div className="absolute top-4 right-4">
                <span
                  className="text-xs font-semibold tracking-widest uppercase px-2.5 py-1 border border-violet-500/30 bg-violet-500/10 text-violet-400"
                  style={{ fontFamily: "var(--font-ibm)" }}
                >
                  Président
                </span>
              </div>
            )}

            {/* Événement: {
    text: "",
    border: "",
    bg: "",
  }, */}
            {/* President badge */}
            {member.secretaire && (
              <div className="absolute top-4 right-4">
                <span
                  className="text-xs font-semibold tracking-widest uppercase px-2.5 py-1 border border-amber-500/30 bg-amber-500/10 text-amber-400"
                  style={{ fontFamily: "var(--font-ibm)" }}
                >
                  Secrétaire du conseil
                </span>
              </div>
            )}

            {/* Photo placeholder */}
            <div className="relative">
              <div
                className={`w-16 h-16 bg-slate-800 border flex items-center justify-center ${
                  member.president ? "border-violet-500/40" : "border-slate-700"
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-slate-700" />
              </div>
              {/* Corner accents on president */}
              {member.president && (
                <>
                  <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-violet-500/50" />
                  <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-violet-500/50" />
                </>
              )}
            </div>

            {/* Info */}
            <div>
              <h3
                className={`text-base font-bold mb-1 transition-colors duration-300 ${
                  member.president
                    ? "text-violet-400"
                    : "text-white group-hover:text-violet-400"
                }`}
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {member.title}
              </h3>
              <p
                className="text-xs text-slate-500 leading-relaxed"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                {member.name}
              </p>
            </div>

            {/* Bottom accent line */}
            <motion.div
              className="h-px bg-violet-500/20 mt-auto"
              initial={{ width: "1.5rem" }}
              whileInView={{ width: member.president ? "4rem" : "2.5rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.05 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
