"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Users, Shield } from "lucide-react";

const cards = [
  {
    href: "/organisations/conseil",
    icon: Shield,
    color: "text-violet-400",
    border: "border-violet-500/20",
    bg: "bg-violet-500/5",
    label: "Conseil de Gouvernance",
    desc: "Organe de supervision indépendant chargé d'orienter la stratégie et de veiller à la conformité des actions de l'agence.",
  },
  {
    href: "/organisations/unites",
    icon: Users,
    color: "text-emerald-400",
    border: "border-emerald-500/20",
    bg: "bg-emerald-500/5",
    label: "Unités Opérationnelles",
    desc: "Les unités spécialisées de l'agence qui assurent la détection, la réponse aux incidents et la sensibilisation au quotidien.",
  },
];

export default function OrgCards() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 xl:px-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p
          className="text-xs tracking-widest uppercase text-sky-500 mb-3"
          style={{ fontFamily: "var(--font-ibm)" }}
        >
          Explorer
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-white"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Découvrir notre <span className="text-sky-400">structure</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-800/40">
        {cards.map(
          ({ href, icon: Icon, color, border, bg, label, desc }, i) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <Link
                href={href}
                className="group bg-slate-950 p-10 flex flex-col gap-6 hover:bg-slate-900 transition-colors duration-300 h-full"
              >
                <div className={`inline-flex p-3 border ${border} ${bg} w-fit`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>

                <div>
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {label}
                  </h3>
                  <p
                    className="text-sm text-slate-400 leading-relaxed"
                    style={{ fontFamily: "var(--font-ibm)" }}
                  >
                    {desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-slate-600 group-hover:text-sky-400 transition-colors duration-300 mt-auto">
                  <span style={{ fontFamily: "var(--font-ibm)" }}>
                    En savoir plus
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ),
        )}
      </div>
    </section>
  );
}
