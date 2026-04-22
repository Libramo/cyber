"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

const types = [
  "Demande d'information",
  "Partenariat institutionnel",
  "Signalement (non urgent)",
  "Presse & médias",
  "Autre",
];

const inputClass = cn(
  "w-full bg-slate-900 border border-slate-700 px-4 py-3 text-sm text-white",
  "placeholder:text-slate-600 focus:outline-none focus:border-sky-500",
  "transition-colors duration-200",
);

const labelClass =
  "text-xs font-semibold tracking-widest uppercase text-slate-500 mb-2 block";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return submitted ? (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-900 border border-emerald-500/20 p-10 flex flex-col items-center justify-center gap-4 text-center min-h-100"
    >
      <div className="p-4 border border-emerald-500/20 bg-emerald-500/5">
        <Send className="h-6 w-6 text-emerald-400" />
      </div>
      <h3
        className="text-xl font-bold text-white"
        style={{ fontFamily: "var(--font-syne)" }}
      >
        Message envoyé
      </h3>
      <p
        className="text-sm text-slate-400 max-w-sm leading-relaxed"
        style={{ fontFamily: "var(--font-ibm)" }}
      >
        Votre message a bien été reçu. Notre équipe vous répondra dans les
        meilleurs délais.
      </p>
    </motion.div>
  ) : (
    <div className="flex flex-col gap-5">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            className={labelClass}
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Nom complet <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            placeholder="Votre nom complet"
            className={inputClass}
            style={{ fontFamily: "var(--font-ibm)" }}
          />
        </div>
        <div>
          <label
            className={labelClass}
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Adresse email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            placeholder="votre@email.com"
            className={inputClass}
            style={{ fontFamily: "var(--font-ibm)" }}
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            className={labelClass}
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Téléphone
          </label>
          <input
            type="tel"
            placeholder="+253 00 00 00 00"
            className={inputClass}
            style={{ fontFamily: "var(--font-ibm)" }}
          />
        </div>
        <div>
          <label
            className={labelClass}
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Type de demande <span className="text-red-400">*</span>
          </label>
          <select
            className={cn(inputClass, "cursor-pointer")}
            style={{ fontFamily: "var(--font-ibm)" }}
            defaultValue=""
          >
            <option value="" disabled>
              Sélectionner...
            </option>
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className={labelClass} style={{ fontFamily: "var(--font-ibm)" }}>
          Sujet <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          placeholder="Objet de votre message"
          className={inputClass}
          style={{ fontFamily: "var(--font-ibm)" }}
        />
      </div>

      {/* Message */}
      <div>
        <label className={labelClass} style={{ fontFamily: "var(--font-ibm)" }}>
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          rows={6}
          placeholder="Décrivez votre demande en détail..."
          className={cn(inputClass, "resize-none")}
          style={{ fontFamily: "var(--font-ibm)" }}
        />
      </div>

      {/* Submit */}
      <button
        onClick={() => setSubmitted(true)}
        className="flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 transition-colors px-6 py-3.5 text-xs font-semibold tracking-widest uppercase text-white w-full sm:w-auto"
        style={{ fontFamily: "var(--font-ibm)" }}
      >
        <Send className="h-3.5 w-3.5" />
        Envoyer le message
      </button>
    </div>
  );
}
