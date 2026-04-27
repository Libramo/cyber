import CtaBand from "@/components/home/cta-band";
import Director from "@/components/home/director";
import HeroCtas from "@/components/home/hero-ctas";
import HeroHeading from "@/components/home/hero-heading";
import HeroLogo from "@/components/home/hero-logo";
import HeroStats from "@/components/home/hero-stats";
import HeroSub from "@/components/home/hero-sub";
import HeroTag from "@/components/home/hero-tag";
import Missions from "@/components/home/missions";
import Partners from "@/components/home/partners";

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-900 min-h-screen flex items-center">
        {/* Binary background */}
        <HeroLogo />

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-225 h-125 bg-sky-600/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-100 h-100 bg-emerald-600/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative w-full px-6 sm:px-12 lg:px-24 xl:px-36 py-24 sm:py-28 lg:py-36">
          <div className="w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl">
            <HeroTag />
            <HeroHeading />
            <HeroSub />
            <HeroCtas />
          </div>
          {/* <HeroStats /> */}
        </div>
      </section>

      <Missions />
      <Partners />
      <Director />
      <CtaBand />
    </main>
  );
}
