"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import Image from "next/image";

const nameDG = "Ibrahim Yonis Omar";
const paragraphs = [
  "Sous l'impulsion du Président de la République, l'émergence de Djibouti comme un hub numérique régional s'est accompagnée d'une prise de conscience collective : la transformation de nos services, de nos administrations et de notre économie ne peut pas se concevoir sans une cybersécurité solide et cohérente.",
  "C'est cette confrontation permanente entre développement numérique et impératif de sécurité qui a façonné ma vision : la protection de nos données et infrastructures n'est pas une contrainte, ni une couche technique ajoutée a posteriori. Elle est un fondement, un prérequis à toute initiative numérique durable.",
  "Cette philosophie guide aujourd'hui l'Autorité Nationale de Cybersécurité (ANC). Notre rôle ne se limite pas à définir des normes ou à répondre aux incidents. Nous devons penser la cybersécurité de manière systémique : en anticipant les menaces avant qu'elles ne se matérialisent, en formant les femmes et les hommes qui construiront le Djibouti de demain, en tissant des partenariats qui permettent de mutualiser les forces. L'expérience du terrain et les années de recherche m'ont enseigné que la confiance se construit par la transparence, la compétence et la proximité avec les acteurs terrain.",
  "Le présent et l'avenir de notre cybersécurité s'écrivent aujourd'hui à travers le plan d'action national que nous portons. Il dessine les priorités pour les années à venir : renforcement de notre souveraineté numérique, protection des infrastructures critiques, accompagnement des administrations dans leur transition sécurisée. Ce site est une fenêtre sur cette démarche, une ressource et un espace d'échange. Il témoigne de notre engagement à faire de la sécurité numérique un levier de confiance pour tous.",
];

export default function DirecteurMessage() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 xl:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left — identity */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8"
        >
          {/* Photo */}
          <div className="relative w-full max-w-xs">
            <span className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-sky-500/50" />
            <span className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-sky-500/50" />
            <span className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-sky-500/50" />
            <span className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-sky-500/50" />

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
          </div>

          {/* Identity card */}
          <div className="border border-slate-700 bg-slate-900 p-6 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-600" />
            <div className="pl-4">
              <h2
                className="text-lg font-bold text-white mb-1"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {nameDG}
              </h2>
              <p
                className="text-sm text-sky-400 mb-4"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                Directeur Général
              </p>
              <div className="h-px bg-slate-800 mb-4" />
              <p
                className="text-xs text-slate-500 leading-relaxed"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                Nommé par décret présidentiel, le Directeur Général assure la
                direction opérationnelle et stratégique de l'agence nationale de
                cybersécurité.
              </p>
            </div>
          </div>

          {/* Date */}
          <p
            className="text-xs text-slate-600 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Djibouti, Avril 2026
          </p>
        </motion.div>

        {/* Right — message */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-2 flex flex-col gap-8"
        >
          <Quote className="h-10 w-10 text-sky-500/20" />

          {/* Opening quote */}
          <blockquote
            className="text-xl sm:text-2xl font-semibold text-white leading-snug border-l-2 border-sky-500 pl-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            "La cybersécurité n'est pas une option — c'est le fondement sur
            lequel repose la souveraineté numérique de notre nation."
          </blockquote>

          <div className="h-px bg-slate-800" />

          {/* Body paragraphs */}
          <div className="flex flex-col gap-6">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-sm text-slate-400 leading-relaxed"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div className="h-px bg-slate-800" />

          {/* Signature */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-800 border border-slate-700 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-slate-700" />
            </div>
            <div>
              <p
                className="text-sm font-bold text-white"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {nameDG}
              </p>
              <p
                className="text-xs text-sky-400"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                Directeur Général — CyberAgency
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
