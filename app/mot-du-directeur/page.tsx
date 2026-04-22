import DirecteurHeader from "@/components/directeur/directeur-header";
import DirecteurMessage from "@/components/directeur/directeur-message";

export const metadata = {
  title: "Mot du Directeur Général — CyberAgency",
  description:
    "Message du Directeur Général de l'agence nationale de cybersécurité.",
};

export default function MotDuDirecteurPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <DirecteurHeader />
      <DirecteurMessage />
    </main>
  );
}
