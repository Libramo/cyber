"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldAlert, Menu, X, ChevronDown, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Accueil" },
  {
    label: "Organisations",
    children: [
      {
        href: "/organisations/unites",
        label: "Unités",
        desc: "Structures opérationnelles de l'agence",
      },
      {
        href: "/organisations/conseil",
        label: "Conseil",
        desc: "Organe de gouvernance et de supervision",
      },
    ],
  },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isOrgActive = pathname.startsWith("/organisations");

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900 border-b border-slate-800">
      <div className="flex h-14 w-full items-center justify-between px-6 sm:px-12 lg:px-24 xl:px-32">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <ShieldAlert className="h-5 w-5 text-sky-400" />
          <span
            style={{ fontFamily: "var(--font-syne)" }}
            className="text-sm font-bold tracking-widest uppercase text-white"
          >
            Cyber<span className="text-sky-400">Agency</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center">
          {links.map((link) => {
            if ("children" in link) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href="/organisations"
                    className={cn(
                      "flex items-center gap-1 px-4 h-14 text-xs font-medium tracking-widest uppercase transition-colors border-b-2",
                      isOrgActive
                        ? "text-sky-400 border-sky-400"
                        : "text-slate-400 border-transparent hover:text-white",
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-3 w-3 transition-transform",
                        dropdownOpen && "rotate-180",
                      )}
                    />
                  </Link>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full w-64 bg-slate-900 border border-slate-700 shadow-xl"
                      >
                        {link.children?.map(({ href, label, desc }) => (
                          <Link
                            key={href}
                            href={href}
                            className={cn(
                              "flex flex-col gap-0.5 px-4 py-3 border-b border-slate-800 last:border-0 transition-colors",
                              pathname === href
                                ? "bg-slate-800 text-sky-400"
                                : "text-slate-300 hover:bg-slate-800 hover:text-white",
                            )}
                          >
                            <span className="text-xs font-semibold tracking-widest uppercase">
                              {label}
                            </span>
                            <span
                              className="text-xs text-slate-500 font-normal normal-case tracking-normal"
                              style={{ fontFamily: "var(--font-ibm)" }}
                            >
                              {desc}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 h-14 flex items-center text-xs font-medium tracking-widest uppercase transition-colors border-b-2",
                  active
                    ? "text-sky-400 border-sky-400"
                    : "text-slate-400 border-transparent hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="https://cert.gouv.dj/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors px-4 h-14 text-xs font-semibold tracking-widest uppercase text-white"
          >
            <AlertTriangle className="h-3.5 w-3.5" />
            Signaler un incident
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-slate-900 border-t border-slate-800 md:hidden"
          >
            <nav className="flex flex-col">
              {links.map((link) => {
                if ("children" in link) {
                  return (
                    <div key={link.label}>
                      <div className="px-6 py-3 text-xs font-semibold tracking-widest uppercase text-slate-500">
                        {link.label}
                      </div>
                      {link.children?.map(({ href, label }) => (
                        <Link
                          key={href}
                          href={href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "block px-8 py-2.5 text-xs tracking-widest uppercase border-l-2 ml-6",
                            pathname === href
                              ? "text-sky-400 border-sky-400"
                              : "text-slate-400 border-slate-700 hover:text-white",
                          )}
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  );
                }
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-6 py-3 text-xs tracking-widest uppercase border-l-2",
                      active
                        ? "text-sky-400 border-sky-400"
                        : "text-slate-400 border-transparent hover:text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="https://cert.gouv.dj/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mx-4 my-3 flex items-center justify-center gap-2 bg-red-600 px-4 py-3 text-xs font-semibold tracking-widest uppercase text-white"
              >
                <ShieldAlert className="h-3.5 w-3.5" />
                Signaler un incident
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
