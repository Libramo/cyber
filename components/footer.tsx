import Link from "next/link";
import { ShieldAlert, MapPin, Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil", desc: "Page principale de l'agence" },
  {
    href: "/organisations",
    label: "Organisations",
    desc: "Structure et gouvernance de l'agence",
  },
  {
    href: "/actualites",
    label: "Actualités",
    desc: "Dernières nouvelles et communiqués",
  },
  { href: "/contact", label: "Contact", desc: "Nous contacter directement" },
];

const socials = [
  { href: "#", label: "X" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      <div className="px-6 sm:px-12 lg:px-24 xl:px-32 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <ShieldAlert className="h-5 w-5 text-sky-400" />
              <span
                className="text-sm font-bold tracking-widest uppercase text-white"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Cyber<span className="text-sky-400">Agency</span>
              </span>
            </Link>

            <p
              className="text-sm leading-relaxed text-slate-500"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              L'agence nationale de cybersécurité œuvre à la protection des
              infrastructures numériques critiques et à la résilience du
              cyberespace national.
            </p>

            <div className="flex items-center gap-1 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="px-2 py-1 text-xs font-semibold text-slate-600 hover:text-sky-400 hover:bg-slate-800 transition-colors tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-ibm)" }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h3
              className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-600"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              Navigation
            </h3>
            <ul className="flex flex-col gap-4">
              {navLinks.map(({ href, label, desc }) => (
                <li key={href}>
                  <Link href={href} className="group flex flex-col gap-0.5">
                    <span
                      className="text-sm font-semibold text-slate-300 transition-colors group-hover:text-sky-400"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-xs text-slate-600"
                      style={{ fontFamily: "var(--font-ibm)" }}
                    >
                      {desc}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-600"
              style={{ fontFamily: "var(--font-ibm)" }}
            >
              Contact
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-500" />
                <span
                  className="text-sm text-slate-500 leading-relaxed"
                  style={{ fontFamily: "var(--font-ibm)" }}
                >
                  Avenue de la République, BP 1234
                  <br />
                  Djibouti, République de Djibouti
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-sky-500" />
                <a
                  href="tel:+25321000000"
                  className="text-sm text-slate-500 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-ibm)" }}
                >
                  +253 21 44 44 44
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-sky-500" />
                <a
                  href="mailto:contact@cyberagency.dj"
                  className="text-sm text-slate-500 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-ibm)" }}
                >
                  contact@cyberagency.dj
                </a>
              </li>
            </ul>

            {/* Emergency */}
            <div className="mt-8 border border-red-500/20 bg-red-500/5 p-4">
              <p
                className="text-xs tracking-widest uppercase text-red-400 mb-1"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                Urgence cyber
              </p>
              <a
                href="https://cert.gouv.dj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 hover:text-red-400 transition-colors"
                style={{ fontFamily: "var(--font-ibm)" }}
              >
                → Signaler un incident
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 sm:flex-row">
          <p
            className="text-xs text-slate-700"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            © {new Date().getFullYear()} CyberAgency. Tous droits réservés.
          </p>
          <div
            className="flex gap-6 text-xs text-slate-700"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            <Link
              href="/mentions-legales"
              className="hover:text-slate-400 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="hover:text-slate-400 transition-colors"
            >
              Confidentialité
            </Link>
            <Link
              href="/accessibilite"
              className="hover:text-slate-400 transition-colors"
            >
              Accessibilité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
