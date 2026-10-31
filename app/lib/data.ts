// Site copy lives here so copy edits never touch component code. Events and
// Data Digest entries are markdown files in content/.

export type NavLink = { label: string; href: string };
export type SocialLink = { label: string; href: string; icon: string };
// small: the 640 px copy when one exists, else the original (set by app/lib/content.ts).
export type ImageItem = { src: string; alt: string; small?: string };
// srcset for a <picture> source: the 640 px copy for small slots, the full file for
// large or high-density ones (phones are 2x to 3x, so a 640 px file looks soft at full width).
// ponytail: "1600w" only has to be above 640 for the browser to pick correctly.
export const srcSetOf = ({ src, small }: { src: string; small?: string }) =>
  small && small !== src ? `${small} 640w, ${src} 1600w` : src;
export type Reference = { label: string; href?: string };
// Events and Data Digest entries live as markdown in content/; see app/lib/content.ts.
export type Event = {
  slug: string;
  kind: "event" | "workshop";
  title: string;
  date: string;
  publishedAt?: string;
  venue?: string;
  audience?: string;
  description: string;
  html: string;
  source?: Reference;
  images: ImageItem[];
};
export type DigestEntry = {
  slug: string;
  title: string;
  date: string;
  publishedAt?: string;
  description: string;
  html: string;
  contentBy?: string;
  layoutBy?: string;
  references: Reference[];
  panels: ImageItem[];
  cover: string;
};

export const SITE_URL = "https://uplbdsg.org";
export const SITE_DESCRIPTION =
  "UPLB Data Science Guild is a student organization at the University of the Philippines Los Baños that learns, builds, and shares through data science workshops, projects, and community events.";

export const NAV_LINKS: { left: NavLink[]; right: NavLink[] } = {
  left: [
    { label: "Events", href: "/events" },
    { label: "Digest", href: "/digest" },
  ],
  right: [
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/dsguplb",
    icon: "/icons/facebook.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/uplbdsg/",
    icon: "/icons/instagram.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/uplbdsg/",
    icon: "/icons/linkedin.svg",
  },
];

export const CONTACT_EMAIL = "uplbdatascienceguild@gmail.com";

export const FOOTER_LINKS: NavLink[] = [
  { label: "Workshops", href: "/#workshops" },
  { label: "Events", href: "/events" },
  { label: "Data Digest", href: "/digest" },
  { label: "About", href: "/#about" },
];

export const COPY = {
  orgName: "UPLB Data Science Guild",
  // Confirmed by the guild, October 2026. Update each recruitment cycle.
  memberCount: "100+",
  heroTagline:
    "The pioneer data science organization of UPLB. Workshops, visual explainers, and events for students who learn by building.",
  whoAreWe:
    "The UPLB Data Science Guild (DSG) is the pioneer data science organization of the University of the Philippines Los Baños. We are a socio-civic organization of students who learn and practice data science together through workshops, projects, and community events.",
  mission:
    "To foster a data-driven culture in the Nation and beyond.",
  missionImageAlt:
    "UPLB Data Science Guild members gathered outdoors for a shared meal",
  vision: [
    "To bring opportunities and growth by utilizing data science and its tools.",
    "To connect students with companies, stakeholders, and/or end users to provide solutions and gain experience.",
  ],
  coreValues: [
    {
      name: "Integrity",
      description:
        "All members are expected to uphold the highest standards of honesty and ethical conduct in all their endeavors.",
    },
    {
      name: "Innovation",
      description:
        "The organization should continuously adapt to the demands and issues of the rapidly changing world.",
    },
    {
      name: "Interdependence",
      description:
        "All members are expected to work with themselves and their stakeholders to reach their goals with mutual dependence.",
    },
  ],
  // Committee head cards from the guild's ExeCom A.Y. 2026-2027 Facebook post.
  // Names are as printed on the cards. The post has no Internal Affairs card.
  officersTerm: "A.Y. 2026-2027",
  officers: [
    { name: "Yana", role: "Head Chair", image: "/officers/head-chair.webp" },
    { name: "Macs", role: "Secretary and Logistics", image: "/officers/secretary-logistics.webp" },
    { name: "Jae", role: "External Affairs", image: "/officers/externals.webp" },
    { name: "Denise", role: "Membership", image: "/officers/membership.webp" },
    { name: "Galvin", role: "Training and Skills", image: "/officers/training-skills.webp" },
    { name: "Rookie", role: "Finance and Audit", image: "/officers/finance-audit.webp" },
    { name: "Hans", role: "Marketing and Creatives", image: "/officers/marketing-creatives.webp" },
  ],
  // Website team, shown in the footer. Contributors are the members of the
  // "UPLB DSG Website" Messenger chat; update when the team changes.
  credits: {
    lead: { name: "Simonee Ezekiel Mariquit", href: "https://github.com/smmariquit" },
    contributors: [
      "Alyanna Caabay",
      "Franz Saragena",
      "Galvin Gonzales",
      "Hanna Macasarte",
      "Hans Andrie Shi",
      "Jude Padilla",
      "Lance Gabriel Barroso",
    ],
  },
};
