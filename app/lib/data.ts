// All site content lives here so copy edits never touch component code.

export type NavLink = { label: string; href: string };
export type SocialLink = { label: string; href: string; icon: string };
export type Stat = { value: string; suffix: string; label: string };
export type ImageItem = { src: string; alt: string };
export type Reference = { label: string; href?: string };
export type Event = {
  id: number;
  slug: string;
  kind: "event" | "workshop";
  title: string;
  date: string;
  publishedAt?: string;
  venue?: string;
  audience?: string;
  description: string;
  writeup: string[];
  source?: Reference;
  images: ImageItem[];
};
export type DigestEntry = {
  slug: string;
  title: string;
  date: string;
  publishedAt?: string;
  description: string;
  body: string[];
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
    { label: "Events", href: "/#events" },
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
    links: [
      { label: "Workshops", href: "/#workshops" },
      { label: "Events", href: "/#events" },
      { label: "Data Digest", href: "/digest" },
    ],
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
  { value: "150", suffix: "+", label: "members" },
  { value: "12", suffix: "+", label: "workshops conducted" },
  { value: "3", suffix: "", label: "years in existence" },
];

export const COPY = {
  orgName: "UPLB Data Science Guild",
  tagline: SITE_DESCRIPTION,
  whoAreWe:
    "The UPLB Data Science Guild (DSG) is the pioneer data science organization of the University of the Philippines Los Baños. We are a socio-civic organization of students who learn and practice data science together through workshops, projects, and community events, guided by three values: integrity, interdependence, and innovation.",
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
};

export const FACEBOOK_URL = "https://www.facebook.com/dsguplb";

const eventImages = (slug: string, alts: string[]): ImageItem[] =>
  alts.map((alt, index) => ({
    src: `/events/${slug}/${String(index + 1).padStart(2, "0")}.webp`,
    alt,
  }));

const fbPost = (id: string) => `https://www.facebook.com/dsguplb/posts/${id}`;

// Newest first. Writeups are adapted from the guild's Facebook captions; each
// entry links back to the original post as the source.
export const EVENTS: Event[] = [
  {
    id: 14,
    slug: "room-tba-workshop",
    kind: "workshop",
    title: "Breaking Down Room TBA: Visualizing Campus Realities with Python",
    date: "September 4, 2026",
    publishedAt: "2026-09-04",
    venue: "Online, 5:00 to 6:00 PM",
    audience: "Open to all UPLB students, zero coding experience required",
    description:
      "A one-hour online session that untangles raw class schedule exports and turns them into campus insights with Python.",
    writeup: [
      "Is your class schedule locked away behind tower walls? You scroll through course listings, check building codes, and count open slots. This session asks participants to grab a laptop, step beyond the ordinary, and look at UPLB through a whole new lens.",
      "Breaking Down Room TBA walks through the real Room TBA project, a community-maintained campus map, and shows how raw schedule exports become visualizations of campus realities using Python. No complex setup is needed, and slots are limited.",
    ],
    source: { label: "Facebook post, August 31, 2026", href: fbPost("122259233714119873") },
    images: [
      { src: "/events/workshops/room-tba.webp", alt: "Tangled-themed poster for Breaking Down Room TBA: Visualizing Campus Realities with Python" },
    ],
  },
  {
    id: 13,
    slug: "bioinformatics-tools-workshop",
    kind: "workshop",
    title: "Decoding Life's Data: A Hands-On Intro to Bioinformatics Tools",
    date: "May 9, 2026",
    publishedAt: "2026-05-09",
    venue: "Online, 9:00 AM to 12:00 NN",
    audience: "Fully online, open to all",
    description:
      "The first session of the 2026 Workshop Series: where DNA sequences, computational tools, and real-world applications come together.",
    writeup: [
      "How does biology become data, and how can data science help make sense of it? This session on bioinformatics brings DNA sequences, computational tools, and real-world applications together in a hands-on introduction.",
      "Participants get a glimpse of how biological data can be analyzed through tools used for sequence identification, comparison, and basic data-driven discovery.",
    ],
    source: { label: "Facebook post, May 7, 2026", href: fbPost("122246736140119873") },
    images: [
      { src: "/events/workshops/bioinformatics-tools.webp", alt: "UPLB DSG Workshop Series 2026 poster: Introduction to Bioinformatics Tools, fully online and open to all" },
    ],
  },
  {
    id: 4,
    slug: "data-horizons-2026",
    kind: "event",
    title: "Data Horizons 2026",
    date: "April 2026",
    publishedAt: "2026-04-30",
    venue: "UPLB Graduate School International Student and Cultural Center",
    audience: "Professionals and students, with a UPLB Graduate School Certificate of Completion",
    description:
      "A two-phase Python and R training program with the UPLB Graduate School, capped by a hackathon.",
    writeup: [
      "Data Horizons 2026 ran as two three-day phases in partnership with the UPLB Graduate School. Phase 1 covered Python; Phase 2, held April 28 to 30 and guided by Prof. Jomar F. Rabajante, was built for those ready to master R. Each day ran from 8:00 AM to 5:00 PM at the UPLB GS ISSC.",
      "Phase 1 moved participants from technical foundations to actionable insights, turning complex concepts into practical solutions over three days and closing with a hackathon that put problem-solving to the test.",
      "On the final day of Phase 2, participants used linear regression, data visualization, and other machine learning models to analyze datasets of their choice, bridging the gap between knowledge and practical application. Completers received a verifiable Certificate of Completion from the UPLB Graduate School.",
    ],
    source: { label: "Facebook posts, April 2026", href: fbPost("122246152616119873") },
    images: [
      { src: "/events/data-horizons-graduate-school.webp", alt: "Professionals attending the Data Horizons 2026 Python and R workshop" },
      ...eventImages("data-horizons-2026", [
        "Data Horizons 2026 Day 1 poster with the UPLB Graduate School",
        "A speaker presenting a chart to Data Horizons 2026 participants",
        "Participants working through the Python training",
        "Facilitators guiding a hands-on exercise",
        "Participants presenting hackathon output",
      ]),
      ...eventImages("dh2026-hackathon", [
        "Data Horizons 2026 hackathon day poster",
        "Teams analyzing their chosen datasets during the hackathon",
        "A team presenting regression results",
        "Participants and organizers at the close of Data Horizons 2026",
      ]),
    ],
  },
  {
    id: 2,
    slug: "data-in-borderland",
    kind: "event",
    title: "Data in Borderland QuizCon",
    date: "November 5, 2025",
    publishedAt: "2025-11-05",
    venue: "MMM Lecture Hall, Physical Sciences Building, UPLB",
    description:
      "An interactive general knowledge quizcon where teams played through rounds of strategy, teamwork, and determination.",
    writeup: [
      "The game has officially come to an end. Data in Borderland wrapped up with full tables, sharp minds, and moments worth remembering. From the first question drawn to the final card played, everyone brought the energy and focus that made the night a meaningful experience.",
      "Held at the MMM Lecture Hall of the Physical Sciences Building, teams worked through each round with strategy, teamwork, and determination, from the opening briefing to the awarding of the winners.",
      "The quizcon was held in partnership with UP Euyeomuyeo, the UPLB Society of Electrical Engineering Students, the UPLB College Youth Club, the Society of Applied Mathematics of UPLB, and Mokape Coffee Los Banos, and brought to you by the Alliance of Computer Science Students UPLB, UP Engineering Radio Guild Los Banos, and partner organizations.",
    ],
    source: { label: "Facebook post, November 24, 2025", href: fbPost("122226704084119873") },
    images: [
      { src: "/events/data-in-borderland.webp", alt: "Students smiling during the Data in Borderland general knowledge quizcon" },
      ...eventImages("data-in-borderland", [
        "Thank you poster for the Data in Borderland QuizCon 2025 with participants",
        "Teams seated at full tables during the opening briefing",
        "A team conferring over a quiz round",
        "Host reading a question to the crowd",
        "Participants reacting during a round",
        "Winners receiving their awards",
      ]),
    ],
  },
  {
    id: 12,
    slug: "ai-literacy-training",
    kind: "workshop",
    title: "Hour of Code and AI Literacy Training",
    date: "October 11 and 18, 2025",
    publishedAt: "2025-10-18",
    venue: "Online, 1:00 PM onwards",
    audience: "Open to all, in partnership with AI Ready ASEAN Philippines",
    description:
      "A two-part AI literacy workshop with AI Ready ASEAN Master Trainer Keith Tidon, from Hour of Code to computer vision and RAG pipelines.",
    writeup: [
      "The guild geared up to become AI-ready through the Hour of Code and AI Literacy Training with guildsman and AI Ready ASEAN Master Trainer Keith Tidon. The AI Ready ASEAN Philippines program seeks to empower 5.5 million individuals across Southeast Asia with essential AI skills, led by the ASEAN Foundation, supported by Google.org, with Limitless Lab as the local implementing partner.",
      "Part 1 on October 11 covered AI literacy and awareness. Part 2 on October 18 continued into AI architectures and applications: the practical implementation of AI systems, from computer vision models for image recognition to Retrieval-Augmented Generation pipelines in large language models.",
    ],
    source: { label: "Facebook posts, October 2025", href: fbPost("122221988930119873") },
    images: [
      { src: "/events/ai-literacy/01.webp", alt: "AI Ready ASEAN Hour of Code poster with speaker Keith Tidon, October 11, 2025" },
    ],
  },
  {
    id: 11,
    slug: "edgerunners-orientation",
    kind: "event",
    title: "Signal in the Static: Edgerunners Breaking In",
    date: "September 10, 2025",
    publishedAt: "2025-09-10",
    venue: "IC's Bar and Cafe, Los Banos, 7:00 to 9:00 PM",
    description:
      "The first semester orientation for AY 2025 to 2026, where new members joined the network.",
    writeup: [
      "Patterns hide in the noise. Systems are designed to mislead. But Edgerunners see the lines others miss. The guild called all Edgerunners to the frontlines to intercept the signals, decode the hidden flows, and turn raw data into disruption.",
      "Props to all the runners who tapped the frequency and joined Signal in the Static. Together they proved that when the right signals sync, the static does not stand a chance. This was just the first breach, and the guild got a bigger crew out of it. Welcome to the network, edgerunners.",
    ],
    source: { label: "Facebook post, September 20, 2025", href: fbPost("122218577612119873") },
    images: eventImages("edgerunners", [
      "Thank you Edgerunners poster in cyberpunk style",
      "New members and officers gathered at IC's Bar and Cafe",
      "Participants listening during the orientation program",
      "Members playing an icebreaker game",
      "Group photo of the Edgerunners orientation crowd",
      "Officers welcoming new members",
    ]),
  },
  {
    id: 10,
    slug: "dataverse-blockchain",
    kind: "event",
    title: "Dataverse: Bridging Data Science and Blockchain",
    date: "May 3, 2025",
    publishedAt: "2025-05-03",
    venue: "UPLB Graduate School",
    description:
      "A session with Hiraya Network on blockchain and data science, capped by hands-on extraction and analysis of blockchain data.",
    writeup: [
      "On May 3, 2025, the guild gathered at the UPLB Graduate School for Dataverse: Bridging Data Science and Blockchain for a Secure Digital Future. In partnership with the Junior Blockchain Education Consortium of the Philippines Dangals, the event brought together data enthusiasts and blockchain innovators for a session led by Jerome Monte and Renzo Cabarios of Hiraya Network.",
      "From real-world applications to key issues, attendees explored the evolving landscape of blockchain and its integration with data science. The day was capped off with a hands-on coding session where participants extracted and analyzed blockchain data in action.",
    ],
    source: { label: "Facebook post, May 19, 2025", href: fbPost("122202757046119873") },
    images: eventImages("dataverse-blockchain", [
      "Dataverse: Bridging Data Science and Blockchain poster",
      "Speakers from Hiraya Network presenting at the UPLB Graduate School",
      "Participants following the blockchain session",
      "Hands-on coding session extracting blockchain data",
      "Participants asking questions during the open forum",
      "Group photo of Dataverse participants and organizers",
    ]),
  },
  {
    id: 3,
    slug: "dataverse-up-rural",
    kind: "event",
    title: "Dataverse at UP Rural High School",
    date: "April 4, 11, and 26, 2025",
    publishedAt: "2025-04-26",
    venue: "UP Rural High School Computer Laboratory",
    description:
      "A three-day series exploring the future of data and AI with CodeIT senior high school students.",
    writeup: [
      "Dataverse: Exploring the Future of Data and AI took the guild to UP Rural High School for three Saturdays in April 2025, in partnership with the CodeIT senior high school program.",
      "The final day on April 26 went deep into AI, machine learning, and Python, and the participants from CodeIT absolutely crushed it. Special thanks to Aljon and Galvin for lighting up the UPRHS Computer Lab with knowledge and passion, and to everyone who took on the challenges and made the Dataverse journey a success.",
    ],
    source: { label: "Facebook post, April 28, 2025", href: fbPost("122199934388119873") },
    images: [
      { src: "/events/dataverse-april-4.webp", alt: "Students working at computers during Dataverse day one on April 4, 2025" },
      { src: "/events/dataverse-april-11.webp", alt: "Dataverse participants posing in a classroom on April 11, 2025" },
      { src: "/events/dataverse-april-26.webp", alt: "Dataverse participants posing outside UP Rural High School on April 26, 2025" },
      ...eventImages("dataverse-uprhs", [
        "Dataverse Day 3 poster with participants in front of UP Rural High School",
        "Students coding in Python at the UPRHS computer laboratory",
        "A facilitator explaining machine learning to the class",
        "Students and facilitators at the close of Dataverse Day 3",
      ]),
    ],
  },
  {
    id: 9,
    slug: "bytecamp-2025",
    kind: "workshop",
    title: "ByteCamp: Data Science and Machine Learning",
    date: "February 28, 2025",
    publishedAt: "2025-02-28",
    venue: "UPLB Graduate School",
    audience: "Internal workshop for guild members",
    description:
      "A face-to-face hands-on session on Python, pandas, regression, classification, and clustering with Aljon Gerard De Leon.",
    writeup: [
      "At the UPLB Data Science Guild, members do not just keep up with data science; they explore, innovate, and master it together. On February 28, 2025, the guild held the second part of its internal workshop, ByteCamp: Data Science and Machine Learning, at the UPLB Graduate School.",
      "With Aljon Gerard De Leon sharing his expertise, members worked through an overview of Python as a data science tool with Jupyter notebooks, an introduction to Python and pandas, regression with scikit-learn, classification with logistic regression and decision trees, and clustering with k-means.",
    ],
    source: { label: "Facebook post, March 6, 2025", href: fbPost("122191634174119873") },
    images: eventImages("bytecamp", [
      "ByteCamp face-to-face hands-on session poster listing the five modules",
      "Members following the ByteCamp session at the UPLB Graduate School",
      "Aljon Gerard De Leon presenting a machine learning module",
      "Members coding along during ByteCamp",
    ]),
  },
  {
    id: 8,
    slug: "red-light-green-light",
    kind: "event",
    title: "Red Light, Green Light: Step into the Data Science Spotlight",
    date: "February 19, 2025",
    publishedAt: "2025-02-19",
    venue: "Makiling Ballroom, UPLB, 7:00 PM",
    audience: "Open to all programs",
    description:
      "The second semester orientation: a game-themed night of workshops, activities, and a test of strategy.",
    writeup: [
      "The moment arrived, the countdown ended, and the game officially started. Red Light, Green Light invited students from every program to step into the spotlight and begin a journey into the world of data science, with exciting workshops, fun activities, and a test of strategy along the way.",
      "The challenge was set, the stakes were high, and only those who chose the right path moved forward. The right door opened on February 19, 2025, at 7:00 PM in Makiling Ballroom.",
    ],
    source: { label: "Facebook post, February 19, 2025", href: fbPost("122189008748119873") },
    images: [
      { src: "/events/red-light-green-light/01.webp", alt: "D-Day poster for Red Light, Green Light at Makiling Ballroom, February 19, 2025" },
    ],
  },
  {
    id: 1,
    slug: "data-horizons-2024",
    kind: "event",
    title: "Data Horizons 2024 Symposium",
    date: "May 6, 2024",
    publishedAt: "2024-05-06",
    venue: "UPLB Rural Economic Development and Renewable Energy Center (REDREC), 12:00 to 5:00 PM",
    audience: "Free and open to all UPLB students",
    description:
      "The guild's pioneering symposium on machine learning, data journalism, analytics, AI, and unmanned aerial vehicles.",
    writeup: [
      "Under the expansive skies of The UPLB Data Horizon, held on May 6, 2024, participants embarked on a journey across the frontiers of machine learning, finance journalism, analytics, AI, and unmanned aerial vehicles. Each session revealed new perspectives in these fields and sparked a collective vision for the future of innovation.",
      "The symposium explored trends and insights shaping the future of the country while drawing lessons from the past, covering the development of AI, data journalism, and data analytics in healthcare and agriculture, with experts from different fields.",
      "Data Horizons 2024 was brought to you by the UPLB Graduate School and Tau Alpha, endorsed by the Analytics and Artificial Intelligence Association of the Philippines, co-presented by CodeHappy, supported by BizKit Technologies, and held courtesy of the UP Data Science Society, the UPLB Society of Electrical Engineering Students, and the Society of Applied Mathematics of UPLB.",
    ],
    source: { label: "Facebook post, June 19, 2024", href: fbPost("122151379418119873") },
    images: [
      { src: "/events/data-horizons-symposium-1.webp", alt: "Participants and organizers posing inside the Data Horizons 2024 venue" },
      { src: "/events/data-horizons-symposium-2.webp", alt: "Data Horizons 2024 organizers posing in front of the symposium screen" },
      ...eventImages("data-horizons-2024", [
        "Data Horizons 2024 stage at REDREC before the program",
        "A speaker presenting to the Data Horizons 2024 audience",
        "Participants listening to a symposium session",
        "Speakers and organizers on stage",
        "The audience during a question and answer segment",
        "Group photo of Data Horizons 2024 speakers, organizers, and participants",
      ]),
    ],
  },
  {
    id: 7,
    slug: "no-code-beta-2024",
    kind: "workshop",
    title: "No Code Beta 2024",
    date: "March 4 and 5, 2024",
    publishedAt: "2024-03-05",
    venue: "UPLB Graduate School",
    audience: "Internal workshop for resident members and applicants",
    description:
      "The guild's first internal workshop: basic data preparation, dashboarding, data mining, and statistical analysis.",
    writeup: [
      "Data transfer completed. The UPLB Data Science Guild conducted its first internal workshop, No Code Beta 2024, at the UPLB Graduate School on March 4 and 5, 2024, for resident members and applicants.",
      "The two-day workshop was a knowledge transfer based on the UPLB Graduate School's Data Analytics for the Future (DAF) X program, built to establish foundational data analytics skills and designed for participants with zero to beginner-level experience. Training covered basic data preparation, dashboarding, data mining, and statistical analysis.",
    ],
    source: { label: "Facebook post, March 23, 2024", href: fbPost("122135010770119873") },
    images: eventImages("no-code-beta", [
      "Members at the No Code Beta 2024 workshop at the UPLB Graduate School",
      "A facilitator presenting a dashboarding module",
      "Participants working through a data preparation exercise",
      "Members collaborating on a statistical analysis task",
      "Group photo at the end of No Code Beta 2024",
    ]),
  },
];

export const PAST_EVENTS = EVENTS.filter((event) => event.kind === "event");
export const WORKSHOPS = EVENTS.filter((event) => event.kind === "workshop");

const digestPanels = (slug: string, alts: string[]): ImageItem[] =>
  alts.map((alt, index) => ({
    src: `/digest/${slug}/${String(index + 1).padStart(2, "0")}.webp`,
    alt,
  }));

export const DIGEST_ENTRIES: DigestEntry[] = [
  {
    slug: "butterfly-effect",
    title: "The Butterfly Effect",
    date: "2026",
    description:
      "How tiny changes in data can create dramatically different outcomes across complex systems.",
    body: [
      "Scientists long treated tiny numerical approximations as harmless noise. In 1961, Edward Lorenz rounded a weather variable from 0.506127 to 0.506 and produced a completely different two-week forecast.",
      "This sensitivity to initial conditions appears far beyond weather: small inputs can alter outcomes in e-commerce, finance, cybersecurity, and agriculture.",
    ],
    contentBy: "Zo Pelagio and Gab Kalugdan",
    layoutBy: "Julio Ranada and Matt Figueroa",
    references: [
      {
        label: "Metropolis and Ulam, The Monte Carlo Method (1949)",
        href: "https://www.dam.brown.edu/people/geman/Homepage/MetropolisUlamJASA1949.pdf",
      },
      {
        label: "Precision Farming with Smart Sensors",
        href: "https://www.mdpi.com/1424-8220/26/3/882",
      },
    ],
    panels: digestPanels("butterfly-effect", [
      "Butterfly Effect Data Digest cover with nine butterfly forms",
      "Lorenz attractor illustration asking how a small data change can trigger a global storm",
      "Explanation of sensitive dependence on initial conditions and Lorenz's rounded weather variable",
      "Examples of the Butterfly Effect in e-commerce, finance, cybersecurity, and agriculture",
      "Closing panel on the Butterfly Effect's role in risk management and resilient systems",
    ]),
  },
  {
    slug: "loudness-war",
    title: "The Loudness War",
    date: "April 10, 2026",
    publishedAt: "2026-04-10",
    description:
      "What analysis of 4,500 tracks reveals about music loudness, dynamic range, and a long-running audio myth.",
    body: [
      "Audio engineers and listeners have long blamed heavy compression and limiting for stripping songs of their dynamic range. An analysis of 4,500 tracks found a more complicated result.",
      "Music from the loudness-war era became louder, while its measured loudness range stayed remarkably consistent. The study shows how data can test beliefs built on intuition and selective listening.",
    ],
    contentBy: "Joseph Uriel Martin",
    layoutBy: "Justine Ivanne Antonio and AJ De Castro",
    references: [
      {
        label: "Dynamic Range and the Loudness War, Sound On Sound",
        href: "https://www.soundonsound.com/sound-advice/dynamic-range-loudness-war",
      },
      {
        label: "ITU-R BS.1770-3 loudness measurement standard",
        href: "https://www.itu.int/rec/R-REC-BS.1770",
      },
    ],
    panels: digestPanels("loudness-war", [
      "Loudness War cover showing an audio editing workstation",
      "Panel asking whether modern music is destroying listeners' ears or repeating a myth",
      "Examples showing why objective loudness measurement can change conclusions",
      "Methodology for constructing the track corpus and extracting loudness features",
      "Comparison of music loudness from 1990 to 2010",
      "Table comparing RMS level, crest factor, peak density, and loudness range across eras",
    ]),
  },
  {
    slug: "sound-visualized",
    title: "Sound, Visualized",
    date: "2026",
    description:
      "Why spectrograms matter and how visual sound patterns support science, healthcare, and machine learning.",
    body: [
      "A spectrogram turns sound into an image, showing how frequencies change over time. The same idea powers tools for speech, music, healthcare, environmental monitoring, and anomaly detection.",
      "These visual representations make audio useful to both human analysts and machine-learning systems.",
    ],
    references: [
      {
        label: "Chrome Music Lab Spectrogram",
        href: "https://musiclab.chromeexperiments.com/Spectrogram/",
      },
    ],
    panels: digestPanels("sound-visualized", [
      "Sound Visualized cover explaining why spectrograms matter",
      "Minecraft cave sound represented as a spectrogram",
      "Spectrogram uses in speech technology, healthcare, music, and audio intelligence",
      "Spectrogram uses in cybersecurity, scientific research, and autonomous systems",
      "Spectrogram uses in AI and machine learning with a link to an interactive experiment",
    ]),
  },
  {
    slug: "bioinformatics",
    title: "Bioinformatics: Decoding the Code of Life",
    date: "2026",
    description:
      "How biology, computer science, and statistics work together to turn genomes into useful knowledge.",
    body: [
      "Bioinformatics treats DNA, proteins, and cells as complex datasets. Algorithms and statistics help researchers answer biological questions that are too large or intricate for traditional methods.",
      "Applications include personalized medicine, pandemic defense, and climate-resilient agriculture. For data scientists, the field offers a path from code to real-world health and environmental impact.",
    ],
    contentBy: "Howard Mercado",
    layoutBy: "AJ De Castro and Reiner Garcia",
    references: [
      {
        label: "National Human Genome Research Institute: Bioinformatics",
        href: "https://www.genome.gov/genetics-glossary/Bioinformatics",
      },
      {
        label: "The Human Genome Project, NCBI",
        href: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4956268/",
      },
    ],
    panels: digestPanels("bioinformatics", [
      "Bioinformatics Data Digest cover with DNA and computing imagery",
      "Definition of bioinformatics as computational analysis of biological data",
      "Biology, computer science, mathematics, and statistics as the bioinformatics toolset",
      "Bioinformatics applications in medicine, public health, and agriculture",
      "Closing panel on bioinformatics' future potential and the Human Genome Project",
    ]),
  },
  {
    slug: "future-of-data-science",
    title: "The Future of Data Science",
    date: "2026",
    description:
      "Emerging technologies are expanding data science while human judgment remains its essential guardrail.",
    body: [
      "The next decade of data science is moving beyond calculation toward faster, more accessible decision-making through edge computing, quantum computing, deep learning, and AutoML.",
      "Ethical AI, data governance, and data literacy remain the human guardrails. Technology provides speed, but people provide purpose.",
    ],
    contentBy: "Uno Publico",
    layoutBy: "Franz Saragena and Galvin Gonzales",
    references: [
      {
        label: "The Future of Data Science, University of the Cumberlands",
        href: "https://www.ucumberlands.edu/blog/the-future-of-data-science-emerging-technologies-and-trends/",
      },
      {
        label: "Future of Data Science, CCS Learning Academy",
        href: "https://www.ccslearningacademy.com/future-of-data-science/",
      },
    ],
    panels: digestPanels("future-of-data-science", [
      "Future of Data Science cover about empowering human knowledge",
      "Panel describing data science as the new normal",
      "Technology frontier covering AI, deep learning, quantum computing, and edge computing",
      "Human element covering ethical AI, data literacy, automation, and data governance",
    ]),
  },
  {
    slug: "poverty-from-the-sky",
    title: "Can We See Poverty from the Sky?",
    date: "October 13, 2025",
    publishedAt: "2025-10-13",
    description:
      "How satellite imagery and machine learning predict poverty across five African countries where surveys fall short.",
    body: [
      "Between 2000 and 2010, 39 of 59 African countries ran fewer than two economic surveys. Researchers combined freely available daytime and nighttime satellite images with machine learning to estimate poverty where ground data is missing.",
      "A transfer-learning model learns from nighttime light intensity, then reads roads, roofing materials, and farmland in daytime images. It explained 75% of the variation in asset wealth and 55% in household consumption across Nigeria, Tanzania, Uganda, Malawi, and Rwanda, giving policymakers a way to target aid, education, and infrastructure.",
    ],
    contentBy: "Siegfrid Cabuhat, caption by Bea Patricio",
    layoutBy: "Lance Barroso and Cyrus Jade Barilea",
    references: [
      {
        label: "Jean et al., Combining satellite imagery and machine learning to predict poverty, Science (2016)",
        href: "https://doi.org/10.1126/science.aaf7894",
      },
    ],
    panels: digestPanels("poverty-from-the-sky", [
      "Mapping Poverty from the Sky Data Digest cover with a magnifying glass over a globe",
      "The challenge: 39 of 59 African countries ran fewer than two economic surveys, and the vision to combine satellite imagery with machine learning",
      "Three steps: gather day and night satellite images, teach a model to recognize economic indicators, predict poverty levels, plus transfer learning as the secret sauce",
      "Results: 75% of variation in asset wealth and 55% in household consumption explained, validated across five African countries",
      "How policymakers and communities can use the predictions to target aid and interventions",
      "Call to action: transforming images into action starts with you",
    ]),
  },
  {
    slug: "simplex-algorithm",
    title: "Simplex Algorithm for Optimizing Budget",
    date: "August 12, 2025",
    publishedAt: "2025-08-12",
    description:
      "How the Simplex method turns goals and constraints into the best possible plan, from coffee shop menus to financial planning.",
    body: [
      "The Simplex Algorithm solves linear optimization problems under constraints. It searches the feasible combinations within your limits and returns the one that maximizes gains or minimizes costs.",
      "The recipe has four steps: write down the goal and constraints, express scenarios as linear functions, let the Simplex method find the optimal choice, and interpret the result. The worked example finds the drink mix that earns a coffee shop the most profit without exceeding prep time or espresso shot limits.",
    ],
    contentBy: "Yanika Tauro",
    layoutBy: "Yuan Labuguen and Franz Saragena",
    references: [
      {
        label: "Reveillac, Simplex Algorithm, ScienceDirect (2015)",
        href: "https://www.sciencedirect.com/topics/computer-science/simplex-algorithm",
      },
    ],
    panels: digestPanels("simplex-algorithm", [
      "Simplex Algorithm for Optimizing Budget Data Digest cover",
      "Definition of the Simplex Algorithm as a method for solving linear optimization problems under constraints",
      "Four simple steps: write goals and constraints, try scenarios as linear functions, check which choice the Simplex method picks, interpret the answer",
      "Coffee shop example with five drinks, resource constraints, and the profit objective function",
      "Entering the linear equations into an online Simplex calculator or a Python or R library",
      "Interpreting the result: maximum profit of 790 pesos from a mix of latte, mocha, flat white, and cappuccino",
    ]),
  },
  {
    slug: "excel-data-analysis",
    title: "Excel Tools for Data Preprocessing and Visualization",
    date: "March 7, 2025",
    publishedAt: "2025-03-07",
    description:
      "How Excel's built-in tools clean messy datasets and turn them into charts that tell a story.",
    body: [
      "Microsoft Excel covers a surprising share of everyday data work: data tracking, data science, and data engineering. Remove Duplicates, Sort and Filter, CLEAN, and TRIM handle the preprocessing that keeps analysis accurate.",
      "Once the data is clean, line graphs show change over time, pie charts show parts of a whole, and bar graphs compare categories. The right chart makes the dataset readable at a glance.",
    ],
    contentBy: "Yanika Tauro",
    layoutBy: "Franz Saragena",
    references: [
      {
        label: "GeeksforGeeks, How to Perform Data Analysis in Excel: A Beginner's Guide (2025)",
        href: "https://www.geeksforgeeks.org/data-analysis-in-excel/",
      },
      {
        label: "Intellspot, Types of Graphs and Charts and Their Uses (2020)",
        href: "https://www.intellspot.com/types-graphs-charts/",
      },
    ],
    panels: digestPanels("excel-data-analysis", [
      "Excel Tools for Data Preprocessing and Data Visualization Data Digest cover",
      "What is Excel: a tool for storing, organizing, and analyzing data used in data tracking, data science, and data engineering",
      "Tools for data preprocessing: Remove Duplicates, Sort and Filter, CLEAN, and TRIM",
      "Data visualization with line graphs, pie charts, and bar graphs",
    ]),
  },
  {
    slug: "bird-song-recognition",
    title: "Deep Learning for Bird Song Recognition",
    date: "February 28, 2025",
    publishedAt: "2025-02-28",
    description:
      "How spectrograms and convolutional neural networks turn bird calls into conservation insights.",
    body: [
      "Deep learning in frequency recognition turns bird songs into data for wildlife conservation, habitat monitoring, species identification, and bioacoustic research. The same pipeline applies to noise monitoring, speech patterns, and voice-controlled devices.",
      "The workflow runs from data collection (open datasets such as Xeno-canto or field recordings) through preprocessing into spectrograms, training a convolutional neural network, validating on unseen recordings, and deploying the model in a mobile or web app.",
    ],
    contentBy: "Ian Reginio and Victor Emmanuel Ruidera",
    layoutBy: "Ryan Galaban",
    references: [
      {
        label: "Nagy et al., Internet of Birds: Song Based Bird Sensing via Machine Learning in the Cloud, IEEE SENSORS (2020)",
        href: "https://doi.org/10.1109/SENSORS47125.2020.9278714",
      },
      {
        label: "Pellegrini, Densely connected CNNs for bird audio detection, EUSIPCO (2017)",
        href: "https://doi.org/10.23919/EUSIPCO.2017.8081506",
      },
      {
        label: "Sprengel et al., Audio Based Bird Species Identification using Deep Learning Techniques (2017)",
        href: "http://ceur-ws.org/Vol-1609/16090547.pdf",
      },
    ],
    panels: digestPanels("bird-song-recognition", [
      "Deep Learning for Voice-Frequency Recognition Data Digest cover with painted birds",
      "Other audio classification uses: ecological monitoring, noise pollution, speech patterns, and voice-controlled devices",
      "Data collection from open datasets or field recordings, labeled with species names and timestamps",
      "Preprocessing: signal processing, spectrogram normalization, and converting audio chunks into spectrograms",
      "Sample spectrograms of the Yellow-bellied Whistler, Eurasian Tree Sparrow, and Azure-breasted Pitta",
      "Model selection and training with convolutional neural networks and a train, validation, and test split",
      "Validation and testing with precision, recall, and F1 score",
      "Deployment of the trained model in a mobile or web application",
    ]),
  },
  {
    slug: "llm-hallucinations",
    title: "Delulu si Mare: LLM Hallucinations and ROUGE",
    date: "February 14, 2025",
    publishedAt: "2025-02-14",
    description:
      "A Valentine's Day look at why large language models hallucinate and how ROUGE, BLEU, and other metrics measure it.",
    body: [
      "Ask a large language model to write a love letter from a list of shared memories and it may add details that were never there. In evaluation these fabricated outputs are called hallucinations.",
      "Metrics such as ROUGE, BLEU, BERTScore, and perplexity compare generated text against a reference. A worked ROUGE example scores a paraphrased anniversary note at 82% recall and 82% precision, an F1 of 0.82. Fine-tuning and prompt engineering reduce hallucinations further.",
    ],
    contentBy: "Jerome Espina",
    layoutBy: "Rey Isaac Jr.",
    references: [
      {
        label: "Ganesan, An intro to ROUGE, and how to use it to evaluate summaries, freeCodeCamp (2017)",
        href: "https://www.freecodecamp.org/news/what-is-rouge-and-how-it-works-for-evaluation-of-summaries-e059fb8ac840/",
      },
      {
        label: "IBM, What are AI hallucinations? (2023)",
        href: "https://www.ibm.com/think/topics/ai-hallucinations",
      },
    ],
    panels: digestPanels("llm-hallucinations", [
      "Delulu si Mare Data Digest cover on LLM hallucination, metrics, measurement, and mitigation",
      "A love letter example showing how an LLM adds details that were never in its reference",
      "Chat example of an LLM confidently inventing a birthday that does not exist",
      "Evaluation metrics for hallucinations: ROUGE, BLEU, BERTScore, and perplexity",
      "Worked ROUGE example with reference tokens, candidate tokens, and recall, precision, and F1 formulas",
      "Result of the ROUGE calculation: 82% recall, 82% precision, F1 of 0.82",
      "How to reduce hallucinations through fine-tuning and prompt engineering",
    ]),
  },
  {
    slug: "ai-economic-forecasting",
    title: "How Is AI Changing the Economic Landscape?",
    date: "January 24, 2025",
    publishedAt: "2025-01-24",
    description:
      "How neural networks and generative AI are reshaping economic research and interest rate forecasting.",
    body: [
      "Traditional models such as linear and logistic regression struggle with messy, high-volume data from news and social media. Neural networks and large language models pick up patterns in that data and turn them into real-time economic insight.",
      "Generative AI already helps economists brainstorm, analyze data, and solve equations, and an Ateneo de Manila study applies deep learning to predict money market interest rates. The trade-off: bad or incomplete inputs produce wrong predictions, and many AI models are hard to interpret.",
    ],
    contentBy: "John Donel Gaffud",
    layoutBy: "Lance Barroso",
    references: [
      {
        label: "Bata et al., Deep Learning Approaches in Interest Rate Forecasting, Archium Ateneo",
        href: "https://archium.ateneo.edu/mathematics-faculty-pubs/288/",
      },
      {
        label: "Korinek, Generative AI for Economic Research: Use Cases and Implications for Economists, Journal of Economic Literature (2023)",
        href: "https://doi.org/10.1257/jel.20231736",
      },
      {
        label: "Udo, Toromade, and Chiekezie, AI-Powered Economic Forecasting: Challenges and Opportunities in a Data-Driven World (2022)",
        href: "https://doi.org/10.51594/csitrj.v3i3.1452",
      },
    ],
    panels: digestPanels("ai-economic-forecasting", [
      "How Is AI Changing the Economic Landscape Data Digest cover in pixel-art style",
      "Traditional models versus AI models for economic forecasting",
      "Applications of AI in economics research: brainstorming, data analysis, and solving equations",
      "Forecasting market interest rates with deep learning at Ateneo de Manila University",
      "Opportunities and challenges of AI-powered economic forecasting",
    ]),
  },
  {
    slug: "yolov11-object-detection",
    title: "An Ultimate Guide to YOLOv11 Object Detection",
    date: "January 17, 2025",
    publishedAt: "2025-01-17",
    description:
      "A hands-on walkthrough of training a YOLOv11 object detector, from dataset annotation on Roboflow to evaluation on Google Colab.",
    body: [
      "You Only Look Once (YOLO) divides an image into an NxN grid where each cell predicts bounding boxes and class probabilities in a single pass. Introduced in 2015, it remains one of the fastest real-time detection algorithms.",
      "The guide walks through gathering and annotating a dataset on Roboflow, downloading it into a Google Colab notebook, training with the ultralytics package, running the best weights on new images, and reading the precision, recall, and confusion matrix outputs.",
    ],
    contentBy: "Keith Tidon, Research and Development Team, Wizy.io",
    layoutBy: "Franz Saragena",
    references: [
      {
        label: "Keita, YOLO object detection explained, DataCamp (2024)",
        href: "https://www.datacamp.com/blog/yolo-object-detection-explained",
      },
    ],
    panels: digestPanels("yolov11-object-detection", [
      "An Ultimate Guide to YOLOv11 Object Detection Data Digest cover",
      "What YOLO is: a single-pass real-time object detection algorithm introduced in 2015",
      "Datasets and data annotation with Roboflow and Kaggle",
      "Google Colab setup: installing ultralytics and downloading the annotated dataset",
      "Training command for YOLOv11 with image size 640 and a QR code to the Colab notebook",
      "Using the trained model's last weights to run detection on new images",
      "Model evaluation with precision curve, recall curve, confusion matrix, and loss functions",
    ]),
  },
  {
    slug: "occams-razor",
    title: "Occam's Razor: Simplify Life",
    date: "January 4, 2025",
    publishedAt: "2025-01-04",
    description:
      "A relaxed introduction to choosing the simplest explanation or model that fits the evidence.",
    body: [
      "Occam's Razor says to choose simplicity when competing explanations work equally well. Complexity still has a place, but it should earn that place with clear reasoning.",
      "The principle applies to everyday decisions and model selection: if two models produce the same result, start with the simpler one.",
    ],
    contentBy: "Eric Aggarao and Ari Casiño",
    layoutBy: "Rey Isaac Jr.",
    references: [
      {
        label: "How Occam's razor guides human decision-making",
        href: "https://doi.org/10.1101/2023.01.10.523479",
      },
    ],
    panels: digestPanels("occams-razor", [
      "Occam's Razor cover asking why people overcomplicate things",
      "Road-sign illustration advising readers to choose simplicity",
      "Example comparing a neural network and linear regression for the same prediction",
      "Closing panel asking readers for examples of keeping things simple",
    ]),
  },
  {
    slug: "computer-vision-101",
    title: "Computer Vision 101",
    date: "December 27, 2024",
    publishedAt: "2024-12-27",
    description:
      "How machines classify, detect, and segment objects in images—and why those skills matter.",
    body: [
      "Computer vision lets machines interpret visual data. Classification identifies what an image contains, object detection locates multiple objects, and segmentation separates precise shapes or regions.",
      "These techniques support medical imaging, autonomous vehicles, and traffic analysis, alongside familiar tools such as phone face recognition.",
    ],
    contentBy: "Rey Isaac Jr.",
    layoutBy: "Rey Isaac Jr.",
    references: [
      {
        label: "IBM: What is computer vision?",
        href: "https://www.ibm.com/think/topics/computer-vision",
      },
    ],
    panels: digestPanels("computer-vision-101", [
      "Computer Vision 101 Data Digest cover with a camera lens",
      "Comparison between image classification and object detection",
      "Comparison between semantic and instance segmentation",
      "Computer vision applications in medicine, autonomous vehicles, and traffic analysis",
    ]),
  },
  {
    slug: "naive-bayes-text-classification",
    title: "Build a Text Classifier with Naive Bayes",
    date: "December 13, 2024",
    publishedAt: "2024-12-13",
    description:
      "A visual walkthrough of gathering, preprocessing, training, and evaluating text for sentiment classification.",
    body: [
      "Text classification turns documents into useful categories. This example builds a positive, negative, or neutral sentiment classifier using a Naive Bayes model.",
      "The workflow covers data gathering, preprocessing, feature extraction, partitioning, model training, and evaluation.",
    ],
    contentBy: "RD Dolor",
    layoutBy: "Rey Isaac Jr.",
    references: [
      {
        label: "IBM: What are Naive Bayes classifiers?",
        href: "https://www.ibm.com/topics/naive-bayes",
      },
      {
        label: "Speech and Language Processing: Naive Bayes",
        href: "https://web.stanford.edu/~jurafsky/slp3/",
      },
    ],
    panels: digestPanels("naive-bayes-text-classification", [
      "Creating Your Own Text Classifier Data Digest cover",
      "Sentiment-classifier example with positive, negative, and neutral classes",
      "Overview of the six text-classification workflow steps",
      "Step one: gathering labeled text data",
      "Step two: cleaning and preprocessing text",
      "Steps three and five: feature extraction and Naive Bayes model training",
      "Step six: evaluating classifier accuracy, precision, recall, and F1 score",
    ]),
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Like a Pro",
    date: "December 6, 2024",
    publishedAt: "2024-12-06",
    description:
      "Practical strategies for clearer prompts and more useful responses from ChatGPT and other language models.",
    body: [
      "Strong prompts are clear, specific, and broken into manageable tasks. Adding constraints and examples helps a language model understand the desired result.",
      "When an answer falls short, ask for reflection and revise the phrasing. Prompting works best as an iterative conversation.",
    ],
    contentBy: "Norbert John Ibera",
    layoutBy: "Rey Isaac Jr.",
    references: [
      {
        label: "Prompt Engineering Guide",
        href: "https://www.promptingguide.ai/",
      },
      {
        label: "OpenAI prompt engineering guide",
        href: "https://platform.openai.com/docs/guides/prompt-engineering",
      },
      {
        label: "Lil'Log: Prompt Engineering",
        href: "https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/",
      },
    ],
    panels: digestPanels("prompt-engineering", [
      "Prompt Like a Pro Data Digest cover",
      "Examples showing how clear and specific prompts improve responses",
      "Advice to break complex prompts into smaller ordered tasks",
      "Advice to ask for reflection and creatively revise weak prompts",
    ]),
  },
  {
    slug: "data-science-not-just-coding",
    title: "Data Science Is Not Just Coding",
    date: "November 29, 2024",
    publishedAt: "2024-11-29",
    description:
      "Drew Conway's Data Science Venn Diagram shows why coding is only one part of the discipline.",
    body: [
      "Data science combines hacking skills, mathematics and statistics, and substantive expertise. Coding matters, but useful analysis also depends on rigor, context, and sound judgment.",
      "Missing one of those domains creates predictable danger zones, from traditional research without enough computation to machine learning without enough human context.",
    ],
    references: [],
    panels: digestPanels("data-science-not-just-coding", [
      "Data Science Myths Debunked cover challenging the idea that data science is just coding",
      "Explanation that coding is one part of a broader data-science skill set",
      "Drew Conway's Data Science Venn Diagram",
      "Breakdown of hacking skills, mathematics, statistics, substantive expertise, and their danger zones",
    ]),
  },
  {
    slug: "black-hole-primo",
    title: "Reconstructing a Black Hole Image with AI",
    date: "April 4, 2024",
    publishedAt: "2024-04-04",
    description:
      "How the PRIMO machine-learning method sharpens the Event Horizon Telescope's image of the M87 black hole.",
    body: [
      "The Event Horizon Telescope's first image of the M87 black hole was limited by gaps in telescope coverage. Researchers used a machine-learning method called PRIMO to reconstruct a sharper image from observational data and simulated black holes.",
      "The result shows how artificial intelligence can support astronomy while remaining grounded in physical models and real measurements.",
    ],
    references: [
      {
        label: "Medeiros et al., The Image of the M87 Black Hole Reconstructed with PRIMO",
        href: "https://doi.org/10.3847/2041-8213/acc32d",
      },
    ],
    panels: digestPanels("black-hole-primo", [
      "March 2024 Data Digest cover",
      "Comparison of the Event Horizon Telescope black hole image, PRIMO reconstruction, and simulation",
    ]),
  },
];
