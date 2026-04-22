import ContactContent from "@/components/contact/contact-content";
import ContactHeader from "@/components/contact/contact-header";

export const metadata = {
  title: "Contact — CyberAgency",
  description: "Contactez l'agence nationale de cybersécurité.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <ContactHeader />
      <ContactContent />
    </main>
  );
}
