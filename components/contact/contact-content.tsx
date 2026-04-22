"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "./contact-form";

const infos = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "Avenue de la République, BP 1234\nDjibouti, République de Djibouti",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "+253 21 00 00 00",
    href: "tel:+25321000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@cyberagency.dj",
    href: "mailto:contact@cyberagency.dj",
  },
  {
    icon: Clock,
    label: "Disponibilité",
    value: "Dimanche – Jeudi\n07h30 – 14h30",
  },
];

export default function ContactContent() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 xl:px-32">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8"
        >
          <div>
            <p
              className="text-xs tracking-widest uppercase text-sky-500 mb-6"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              Informations
            </p>
            <div className="flex flex-col gap-px bg-slate-800/40">
              {infos.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="bg-slate-900 p-5 flex items-start gap-4 group"
                >
                  <div className="shrink-0 p-2 border border-sky-500/20 bg-sky-500/5 mt-0.5">
                    <Icon className="h-4 w-4 text-sky-400" />
                  </div>
                  <div>
                    <p
                      className="text-xs text-slate-600 tracking-widest uppercase mb-1"
                      style={{ fontFamily: "var(--font-ibm)" }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-slate-300 hover:text-sky-400 transition-colors whitespace-pre-line"
                        style={{ fontFamily: "var(--font-ibm)" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        className="text-sm text-slate-300 whitespace-pre-line"
                        style={{ fontFamily: "var(--font-ibm)" }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency */}
          <div className="border border-red-500/20 bg-red-500/5 p-5">
            <p
              className="text-xs tracking-widest uppercase text-red-400 mb-2"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              Urgence cyber
            </p>
            <p
              className="text-sm text-slate-400 leading-relaxed mb-3"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              Pour signaler une cyberattaque en cours, utilisez notre formulaire
              de signalement dédié.
            </p>
            <a
              href="/signalement"
              className="text-xs font-semibold tracking-widest uppercase text-red-400 hover:text-red-300 transition-colors"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              → Signaler un incident
            </a>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-2"
        >
          <p
            className="text-xs tracking-widest uppercase text-sky-500 mb-6"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Formulaire de contact
          </p>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
