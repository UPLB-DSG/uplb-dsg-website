// All site content lives here so copy edits never touch component code.

export type NavLink = { label: string; href: string };
export type SocialLink = { label: string; href: string; icon: string };
export type Stat = { value: string; suffix: string; label: string };
export type Event = {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
};

export const NAV_LINKS: { left: NavLink[]; right: NavLink[] } = {
  left: [
    { label: "Home", href: "/" },
    { label: "Events", href: "/#events" },
  ],
  right: [
    { label: "About Us", href: "/#about" },
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

export const FOOTER_LINK_GROUPS: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Guild",
    links: [
      { label: "Who We Are", href: "/#about" },
      { label: "Mission & Vision", href: "/#mission" },
    ],
  },
  {
    heading: "Activities",
    links: [{ label: "Events", href: "/#events" }],
  },
  {
    heading: "Connect",
    links: [
      { label: "Facebook", href: "https://www.facebook.com/dsguplb" },
      { label: "Instagram", href: "https://www.instagram.com/uplbdsg/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/uplbdsg/" },
    ],
  },
];

export const STATS: Stat[] = [
  { value: "100", suffix: "+", label: "members" },
  { value: "100", suffix: "+", label: "alumni" },
  { value: "100", suffix: "+", label: "partnerships" },
];

export const COPY = {
  orgName: "UPLB Data Science Guild",
  tagline: "The UPLB Data Science Guild is a socio-civic, and pioneer organization of UPLB for data science.",
  whoAreWe:
    "The UPLB Data Science Guild (DSG) is the pioneer data science organization of the University of the Philippines Los Baños. We are a socio-civic organization of students who learn and practice data science together through workshops, projects, and community events, guided by three values: integrity, interdependence, and innovation.",
  mission:
    "To foster a data-driven culture in the Nation and beyond.",
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
};

export const FACEBOOK_URL = "https://www.facebook.com/dsguplb";

export const UPCOMING_EVENT = {
  title: "Upcoming Event Title",
  date: "Date of Upcoming Event",
  description:
    "Details for our next event will be posted here. Follow our Facebook page for announcements in the meantime.",
  // Swap for the event's registration form when registration opens.
  registrationUrl: "https://www.facebook.com/dsguplb",
};

export const PAST_EVENTS: Event[] = [
  {
    id: 1,
    title: "Event Title 1",
    date: "Date of Event 1",
    description:
      "A recap of this event will be posted here once the guild publishes its event archive.",
    image: "gradient-1",
  },
  {
    id: 2,
    title: "Event Title 2",
    date: "Date of Event 2",
    description:
      "A recap of this event will be posted here once the guild publishes its event archive.",
    image: "gradient-2",
  },
  {
    id: 3,
    title: "Event Title 3",
    date: "Date of Event 3",
    description:
      "A recap of this event will be posted here once the guild publishes its event archive.",
    image: "gradient-3",
  },
  {
    id: 4,
    title: "Event Title 4",
    date: "Date of Event 4",
    description:
      "A recap of this event will be posted here once the guild publishes its event archive.",
    image: "gradient-4",
  },
];
