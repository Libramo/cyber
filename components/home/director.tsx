"use client";

import { motion } from "motion/react";
import { Quote, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const nameDG = "Ibrahim Yonis Omar";
export default function Director() {
  return (
    <section className="bg-slate-950 py-24 px-6 sm:px-12 lg:px-24 xl:px-36 border-t border-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — photo placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Photo frame */}
          <div className="relative w-full max-w-sm mx-auto lg:mx-0">
            {/* Corner accents */}
            <span className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-sky-500/50" />
            <span className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-sky-500/50" />
            <span className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-sky-500/50" />
            <span className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-sky-500/50" />

            {/* Photo placeholder */}
            <div className="aspect-3/4 bg-slate-800 border border-slate-700 flex flex-col items-center justify-center gap-3">
              {/* <div className="w-20 h-20 rounded-full bg-slate-700 border border-slate-600" />
              <div className="w-24 h-2 bg-slate-700 rounded" />
              <div className="w-16 h-2 bg-slate-700/60 rounded" /> */}
              <Image
                src="/images/dg.jpg"
                alt="Directeur Général"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top"
              />
            </div>

            {/* Name badge */}
            <div className="absolute -bottom-5 left-6 right-6 bg-slate-900 border border-slate-700 px-5 py-3 flex items-center justify-between">
              <div>
                <p
                  className="text-sm font-semibold text-white"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {nameDG}
                </p>
                <p
                  className="text-xs text-sky-400 mt-0.5"
                  style={{ fontFamily: "var(--font-ibm)" }}
                >
                  Directeur Général
                </p>
              </div>
              <div className="h-8 w-px bg-slate-700" />
              <div
                className="text-xs text-slate-500 tracking-widest uppercase"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                CyberAgency
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right — quote */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-8 lg:pt-0 pt-8"
        >
          <p
            className="text-xs tracking-widest uppercase text-sky-500"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Mot du Directeur Général
          </p>

          {/* Quote icon */}
          <Quote className="h-8 w-8 text-sky-500/30" />

          <blockquote
            className="text-xl sm:text-2xl font-semibold text-white leading-snug"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            "La cybersécurité n'est plus une option, mais le pilier de notre
            souveraineté nationale."
          </blockquote>

          <p
            className="text-sm text-slate-400 leading-relaxed"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Dans un contexte où les menaces numériques évoluent à une vitesse
            sans précédent, notre agence s'engage à maintenir un niveau de
            vigilance et de réactivité à la hauteur des enjeux stratégiques
            nationaux.
          </p>

          {/* Divider */}
          <div className="h-px bg-slate-800 w-full" />

          <Link
            href="/mot-du-directeur"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-sky-400 hover:text-sky-300 transition-colors group"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Lire le message complet
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
