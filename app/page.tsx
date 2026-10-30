import HeroSection from "@/components/hero-section";
import WorkshopsSection from "@/components/workshops-section";
import EventsSection from "@/components/events-section";
import DataDigestSection from "@/components/data-digest-section";
import AboutSection from "@/components/about-section";
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

// Order follows what visitors come for: who we are, what we run, then reading
// material and the longer story.
export default function Home() {
  return (
    <div className="bg-background text-off-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HeroSection />
      <WorkshopsSection />
      <EventsSection />
      <DataDigestSection />
      <AboutSection />
    </div>
  );
}
