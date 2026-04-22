import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center px-6 sm:px-12 lg:px-24 xl:px-32">
      <div className="flex flex-col gap-6">
        <div className="p-3 border border-red-500/20 bg-red-500/5 w-fit">
          <ShieldAlert className="h-6 w-6 text-red-400" />
        </div>

        <div>
          <p
            className="text-xs tracking-widest uppercase text-red-400 mb-3"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            Erreur 404
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Page introuvable.
          </h1>
          <p
            className="text-sm text-slate-400 max-w-md leading-relaxed"
            style={{ fontFamily: "var(--font-ibm)" }}
          >
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 border border-slate-700 hover:border-sky-500 text-slate-400 hover:text-sky-400 transition-colors px-5 py-3 text-xs font-semibold tracking-widest uppercase w-fit"
          style={{ fontFamily: "var(--font-ibm)" }}
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Retour à l'accueil
        </Link>
      </div>
    </main>
  );
}
