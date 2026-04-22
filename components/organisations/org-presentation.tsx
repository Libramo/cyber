"use client";

import { motion } from "motion/react";

export default function OrgPresentation() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 xl:px-32 border-b border-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="text-xs tracking-widest uppercase text-sky-500 mb-3"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            À propos
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Qu'est-ce que
            <br />
            <span className="text-sky-400">CyberAgency ?</span>
          </h2>
          <div
            className="flex flex-col gap-4 text-sm text-slate-400 leading-relaxed"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            <p>
              CyberAgency est l'autorité nationale chargée de la protection des
              systèmes d'information de l'État et des infrastructures numériques
              critiques de la République de Djibouti.
            </p>
            <p>
              Créée par décret, elle dispose d'une autonomie opérationnelle lui
              permettant d'agir avec réactivité face aux menaces cyber, tout en
              rendant compte aux autorités compétentes de l'État.
            </p>
            <p>
              Elle coordonne l'ensemble des acteurs publics et privés dans le
              domaine de la cybersécurité nationale et représente Djibouti au
              sein des instances régionales et internationales spécialisées.
            </p>
          </div>
        </motion.div>

        {/* Right — ministry */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          <p
            className="text-xs tracking-widest uppercase text-sky-500"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Tutelle ministérielle
          </p>

          <div className="border border-slate-700 bg-slate-900 p-8 relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-600" />

            <div className="pl-4">
              <p
                className="text-xs text-slate-600 tracking-widest uppercase mb-2"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                Placée sous l'autorité de
              </p>
              <h3
                className="text-lg font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Ministère du Numérique
              </h3>
              <p
                className="text-sm text-slate-400"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                Chargé des postes et des télécommunications
              </p>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <p
                  className="text-xs text-slate-500 leading-relaxed"
                  style={{ fontFamily: "var(--font-ibm)" }}
                >
                  L'agence opère sous la tutelle du ministère compétent en
                  matière de numérique, qui définit les orientations
                  stratégiques nationales en matière de cybersécurité.
                </p>
              </div>
            </div>
          </div>

          {/* Legal basis */}
          <div className="border border-slate-800 bg-slate-900/50 p-6 flex items-start gap-4">
            <div className="shrink-0 border border-slate-700 px-2 py-1">
              <p
                className="text-xs font-bold text-slate-500 tracking-widest uppercase"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                Décret
              </p>
            </div>
            <p
              className="text-xs text-slate-500 leading-relaxed"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              Instituée par décret présidentiel n° XX-XXXX, l'agence dispose
              d'une personnalité juridique et d'une autonomie financière lui
              permettant d'exercer ses missions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
