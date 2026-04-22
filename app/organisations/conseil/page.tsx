import ConseilAttributions from "@/components/organisations/conseil/conseil-attributions";
import ConseilDescription from "@/components/organisations/conseil/conseil-description";
import ConseilHeader from "@/components/organisations/conseil/conseil-header";
import ConseilMembers from "@/components/organisations/conseil/conseil-members";

export const metadata = {
  title: "Conseil de Gouvernance — CyberAgency",
  description:
    "Organe de gouvernance et de supervision de l'agence nationale de cybersécurité.",
};

export default function ConseilPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <ConseilHeader />
      <ConseilDescription />
      <ConseilAttributions />
      <ConseilMembers />
    </main>
  );
}
