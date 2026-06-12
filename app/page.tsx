import HeroSection from "./lib/components/hero-section";
import WhoAreWeSection from "./lib/components/who-are-we-section";
import AboutUsSection from "./lib/components/about-us-section";
import EventsSection from "./lib/components/events-section";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <HeroSection />
      <WhoAreWeSection />
      <AboutUsSection />
      <EventsSection />
    </main>
  );
}
