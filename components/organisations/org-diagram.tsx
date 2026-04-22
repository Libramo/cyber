"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function OrgDiagram() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 xl:px-32 border-b border-slate-800">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs tracking-widest uppercase text-sky-500 mb-16"
        style={{ fontFamily: "var(--font-ibm)" }}
      >
        Organigramme
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full border border-slate-800 bg-slate-900 p-6"
      >
        <Image
          src="/images/organigramme.png"
          alt="Organigramme de l'agence"
          width={2400}
          height={1200}
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}
