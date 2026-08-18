import HeroSection from "@/components/hero-section";
import WhoAreWeSection from "@/components/who-are-we-section";
import AboutUsSection from "@/components/about-us-section";
import DataDigestSection from "@/components/data-digest-section";
import EventsSection from "@/components/events-section";
import { COPY, SITE_URL, SOCIAL_LINKS } from "@/lib/data";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COPY.orgName,
  description: COPY.tagline,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
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
      <DataDigestSection />
      <EventsSection />
    </div>
  );
}
