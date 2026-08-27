// All site content lives here so copy edits never touch component code.

export type NavLink = { label: string; href: string };
export type SocialLink = { label: string; href: string; icon: string };
export type Stat = { value: string; suffix: string; label: string };
export type ImageItem = { src: string; alt: string };
export type Event = {
  id: number;
  title: string;
  date: string;
  description: string;
  images: ImageItem[];
};
export type Reference = { label: string; href?: string };
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

export const PAST_EVENTS: Event[] = [
  {
    id: 1,
    title: "Data Horizons 2024 Symposium",
    date: "May 6, 2024",
    description:
      "Guild members and participants gathered for the Data Horizons 2024 symposium.",
    images: [
      {
        src: "/events/data-horizons-symposium-1.webp",
        alt: "Participants and organizers posing inside the Data Horizons 2024 venue",
      },
      {
        src: "/events/data-horizons-symposium-2.webp",
        alt: "Data Horizons 2024 organizers posing in front of the symposium screen",
      },
    ],
  },
  {
    id: 2,
    title: "Data in Borderland",
    date: "November 5, 2025",
    description:
      "Students competed in Data in Borderland, an interactive general knowledge quizcon.",
    images: [
      {
        src: "/events/data-in-borderland.webp",
        alt: "Students smiling during the Data in Borderland general knowledge quizcon",
      },
    ],
  },
  {
    id: 3,
    title: "Dataverse at UP Rural High School",
    date: "April 4, 11, and 26, 2025",
    description:
      "A three-day series exploring the future of data and AI with students from UP Rural High School.",
    images: [
      {
        src: "/events/dataverse-april-4.webp",
        alt: "Students working at computers during Dataverse day one on April 4, 2025",
      },
      {
        src: "/events/dataverse-april-11.webp",
        alt: "Dataverse participants posing in a classroom on April 11, 2025",
      },
      {
        src: "/events/dataverse-april-26.webp",
        alt: "Dataverse participants posing outside UP Rural High School on April 26, 2025",
      },
    ],
  },
  {
    id: 5,
    title: "UPLB DSG Workshop on Bioinformatics",
    date: "2026",
    description:
      "A hands-on workshop introducing members to bioinformatics and its data science applications.",
    images: [],
  },
  {
    id: 6,
    title: "UPLB DSG Fireside Chats",
    date: "2026",
    description:
      "An informal conversation series where members and guests share experiences in data science.",
    images: [],
  },
  {
    id: 4,
    title: "Data Horizons 2026 Workshop",
    date: "2026",
    description:
      "A three-day intensive Python and R workshop for professionals.",
    images: [
      {
        src: "/events/data-horizons-graduate-school.webp",
        alt: "Professionals attending the Data Horizons 2026 Python and R workshop",
      },
    ],
  },
];

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
