import UnitesGrid from "@/components/organisations/unites/unites-grid";
import UnitesHeader from "@/components/organisations/unites/unites-header";

export const metadata = {
  title: "Unités Opérationnelles — CyberAgency",
  description:
    "Les unités spécialisées de l'agence nationale de cybersécurité.",
};

export default function UnitesPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <UnitesHeader />
      <UnitesGrid />
    </main>
  );
}
