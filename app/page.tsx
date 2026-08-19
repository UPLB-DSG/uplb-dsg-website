import HeroSection from "@/components/hero-section";
import WhoAreWeSection from "@/components/who-are-we-section";
import AboutUsSection from "@/components/about-us-section";
import DataDigestSection from "@/components/data-digest-section";
import EventsSection from "@/components/events-section";
import { COPY, SITE_URL, SOCIAL_LINKS } from "@/lib/data";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: COPY.orgName,
      description: COPY.tagline,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      sameAs: SOCIAL_LINKS.map((social) => social.href),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: COPY.orgName,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-PH",
    },
  ],
};

export default function Home() {
  return (
    <div className="bg-background text-off-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <WhoAreWeSection />
      <AboutUsSection />
      <DataDigestSection />
      <EventsSection />
    </div>
  );
}
