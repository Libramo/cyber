"use client";

import { motion } from "motion/react";
import Image from "next/image";

const members = [
  { id: 1, name: "Nom Prénom", title: "Président du Conseil", president: true },
  {
    id: 2,
    name: "Nom Prénom",
    title: "Représentant — Ministère du Numérique",
    president: false,
  },
  {
    id: 3,
    name: "Nom Prénom",
    title: "Représentant — Ministère de l'Intérieur",
    president: false,
  },
  {
    id: 4,
    name: "Nom Prénom",
    title: "Représentant — Ministère de la Justice",
    president: false,
  },
  {
    id: 5,
    name: "Nom Prénom",
    title: "Représentant — Ministère de la Défense",
    president: false,
  },
  {
    id: 6,
    name: "Nom Prénom",
    title: "Expert indépendant — Cybersécurité",
    president: false,
  },
  {
    id: 7,
    name: "Nom Prénom",
    title: "Expert indépendant — Droit du numérique",
    president: false,
  },
  {
    id: 8,
    name: "Nom Prénom",
    title: "Représentant — Secteur privé",
    president: false,
  },
  {
    id: 9,
    name: "Nom Prénom",
    title: "Représentant — Société civile",
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
            key={member.id}
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
                {member.name}
              </h3>
              <p
                className="text-xs text-slate-500 leading-relaxed"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                {member.title}
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
