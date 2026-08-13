import HeroSection from "@/components/hero-section";
import WhoAreWeSection from "@/components/who-are-we-section";
import AboutUsSection from "@/components/about-us-section";
import EventsSection from "@/components/events-section";
import { COPY, SOCIAL_LINKS } from "@/lib/data";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COPY.orgName,
  description: COPY.tagline,
  url: "https://dsg-website.vercel.app",
  logo: "https://dsg-website.vercel.app/logo.png",
  sameAs: SOCIAL_LINKS.map((social) => social.href),
};

export default function Home() {
  return (
    <div className="bg-background text-off-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HeroSection />
      <WhoAreWeSection />
      <AboutUsSection />
      <EventsSection />
    </div>
  );
}
