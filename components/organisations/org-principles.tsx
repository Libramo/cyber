"use client";

import { motion } from "motion/react";
import { ShieldCheck, Eye, Zap, Scale, Globe, Lock } from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    label: "Souveraineté numérique",
    desc: "Garantir l'indépendance et la maîtrise nationale des infrastructures et des données stratégiques de l'État.",
    color: "text-sky-400",
    border: "border-sky-500/20",
    bg: "bg-sky-500/5",
  },
  {
    icon: Eye,
    label: "Transparence",
    desc: "Informer le public et les organisations des menaces identifiées, dans le respect des impératifs de sécurité nationale.",
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
  },
  {
    icon: Zap,
    label: "Réactivité",
    desc: "Intervenir avec célérité face aux incidents cyber pour limiter leur impact sur les systèmes et les services publics.",
    color: "text-amber-400",
    border: "border-amber-500/20",
    bg: "bg-amber-500/5",
  },
  {
    icon: Scale,
    label: "Légalité",
    desc: "Agir en stricte conformité avec le cadre juridique national et les engagements internationaux de la République.",
    color: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/5",
  },
  {
    icon: Globe,
    label: "Coopération",
    desc: "Renforcer les partenariats régionaux et internationaux pour une cybersécurité collective et solidaire.",
    color: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/5",
  },
  {
    icon: Lock,
    label: "Résilience",
    desc: "Assurer la continuité des services critiques en toutes circonstances et renforcer la robustesse des systèmes nationaux.",
    color: "text-red-400",
    border: "border-red-500/20",
    bg: "bg-red-500/5",
  },
];

export default function OrgPrinciples() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 xl:px-32 border-b border-slate-800">
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
          Gouvernance
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-white"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Principes <span className="text-sky-400">directeurs</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800/40">
        {principles.map(({ icon: Icon, label, desc, color, border, bg }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="bg-slate-950 p-8 group hover:bg-slate-900 transition-colors duration-300 flex flex-col gap-5"
          >
            <div className={`inline-flex p-3 border ${border} ${bg} w-fit`}>
              <Icon className={`h-5 w-5 ${color}`} />
            </div>

            <div>
              <h3
                className="text-base font-bold text-white mb-2 group-hover:text-sky-400 transition-colors duration-300"
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
            </div>

            <motion.div
              className={`h-px ${color} bg-current opacity-20 mt-auto`}
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
