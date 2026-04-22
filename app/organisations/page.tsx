import OrganisationsHeader from "@/components/organisations/organisations-header";
import OrgPresentation from "@/components/organisations/org-presentation";
import OrgDiagram from "@/components/organisations/org-diagram";
import OrgPrinciples from "@/components/organisations/org-principles";
import OrgCards from "@/components/organisations/org-cards";

export const metadata = {
  title: "Organisations — CyberAgency",
  description:
    "Structure organisationnelle de l'agence nationale de cybersécurité.",
};

export default function OrganisationsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <OrganisationsHeader />
      <OrgPresentation />
      <OrgDiagram />
      <OrgPrinciples />
      <OrgCards />
    </main>
  );
}
