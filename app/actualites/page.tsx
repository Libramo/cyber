import ActualitesGrid from "@/components/actualites/actualites-grid";
import ActualitesHeader from "@/components/actualites/actualites-header";

export const metadata = {
  title: "Actualités — CyberAgency",
  description:
    "Dernières actualités, alertes et communiqués de l'agence nationale de cybersécurité.",
};

export default function ActualitesPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <ActualitesHeader />
      <ActualitesGrid />
    </main>
  );
}
