// Site copy lives here so copy edits never touch component code. Events and
// Data Digest entries are markdown files in content/.

export type NavLink = { label: string; href: string };
export type SocialLink = { label: string; href: string; icon: string };
export type ImageItem = { src: string; alt: string };
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
    { label: "Join", href: "/#join" },
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
  { label: "How to join", href: "/#join" },
  { label: "Workshops", href: "/#workshops" },
  { label: "Events", href: "/events" },
  { label: "Data Digest", href: "/digest" },
  { label: "About", href: "/#about" },
];

export const COPY = {
  orgName: "UPLB Data Science Guild",
  // Confirmed by the guild, October 2026. Update each recruitment cycle.
  memberCount: "100+",
  tagline: SITE_DESCRIPTION,
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
  joinIntro:
    "Recruitment opens at the start of every semester and is announced on our Facebook page. Students from any UPLB program can apply. No data science background needed.",
  // From the guild's recruitment process guidelines, in order.
  joinSteps: [
    {
      title: "Come to the orientation",
      body: "Each recruitment season opens with an orientation night. The date goes up on Facebook first.",
    },
    {
      title: "Meet the members",
      body: "Applicants set short one-on-one sessions with resident members and alumni to get to know the guild.",
    },
    {
      title: "Run a fundraiser with your batch",
      body: "Your applicant batch plans and runs one fundraising activity together.",
    },
    {
      title: "Attend a guild workshop",
      body: "Every applicant joins at least one workshop run by the Training and Skills Committee.",
    },
    {
      title: "Present at finals",
      body: "Your batch presents what it learned, defends its batch name, and joins as members.",
    },
  ],
  // Named in the event writeups below; add to this list as new partners come in.
  partners: [
    "UPLB Graduate School",
    "AI Ready ASEAN Philippines",
    "Hiraya Network",
    "UP Data Science Society",
    "UP Rural High School",
    "Analytics and Artificial Intelligence Association of the Philippines",
  ],
  nothingScheduled:
    "Nothing is scheduled right now. New workshops and events are posted on Facebook first.",
};

export const FACEBOOK_URL = "https://www.facebook.com/dsguplb";
