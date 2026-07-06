/* ============================================================================
   ZEEKOLACHI — Central content / single source of truth
   ----------------------------------------------------------------------------
   Populated from Zeeshan Ahmed Kolachi's CV. All content here is real and
   verifiable. To enrich projects later, add a `repo` (GitHub) and/or `demo`
   (live) URL to any project below — the cards reveal the links automatically.
   ============================================================================ */

export type SocialKey =
  | "linkedin"
  | "github"
  | "whatsapp"
  | "facebook"
  | "x"
  | "instagram"
  | "youtube"
  | "email";

export interface SocialLink {
  key: SocialKey;
  label: string;
  href: string;
  handle: string;
  metric?: string;
  active: boolean;
}

export interface Role {
  title: string;
  org: string;
  period: string;
  summary: string;
  highlights: string[];
  current?: boolean;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  role: string;
  tagline: string;
  challenge: string;
  process: string;
  result: string;
  outcome: string;
  tags: string[];
  /** Optional GitHub repo URL — shows a "View code" button when set. */
  repo?: string;
  /** Optional live demo URL — shows a "Live demo" button when set. */
  demo?: string;
}

export interface Achievement {
  year: string;
  title: string;
  detail: string;
}

/** A single animated credential stat (honest, CV-backed numbers). */
export interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  hint?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationItem {
  title: string;
  org: string;
  period: string;
  detail?: string;
  result?: string;
}

export interface CertItem {
  course: string;
  provider: string;
  score: string;
  year: string;
}

/* -------------------------------------------------------------------------- */
/*  IDENTITY                                                                   */
/* -------------------------------------------------------------------------- */

export const identity = {
  fullName: "Zeeshan Ahmed Kolachi",
  brand: "ZEEKOLACHI",
  roles: [
    "Agentic AI Architect",
    "Data Science & AI Automation Expert",
    "Primary School Teacher",
    "AI-Native Builder",
  ],
  headline:
    "I turn six years of operational discipline into AI-native systems that deliver measurable impact.",
  bio: "Aspiring Agentic AI Architect and Data Science practitioner with 6+ years of cross-sector experience across finance, administration, customer relations and education. I'm advancing through NED University's Postgraduate Diploma in Data Science & AI and Panaversity's Certified Agentic AI Architect program — building hands-on command of Python, Machine Learning, Deep Learning, and Generative/Agentic AI. I pair disciplined record-keeping with an automation-first mindset and a toolkit of 40+ AI tools.",
  location: "District Ghotki, Sindh, Pakistan",
  availability: "Open to data & AI roles · collaboration",
  cvPath: "/cv/Zeeshan_Ahmed_Kolachi_CV.pdf",
  // TODO (optional): drop a headshot at /public/profile.jpg — falls back to a monogram
  photo: "/profile.jpg",
} as const;

/* -------------------------------------------------------------------------- */
/*  SOCIAL — "active orbit"                                                    */
/*  `metric` is a short honest descriptor (not a follower count).              */
/* -------------------------------------------------------------------------- */

export const socials: SocialLink[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zeeshankolachi",
    handle: "in/zeeshankolachi",
    metric: "Career & updates",
    active: true,
  },
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/ZEEKOLACHI",
    handle: "@ZEEKOLACHI",
    metric: "Code & projects",
    active: true,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/923003118917",
    handle: "+92 300 3118917",
    metric: "Usually replies fast",
    active: true,
  },
  {
    key: "email",
    label: "Email",
    href: "mailto:zeekolachi@outlook.com",
    handle: "zeekolachi@outlook.com",
    metric: "Direct line",
    active: true,
  },
  {
    key: "facebook",
    label: "Facebook",
    href: "#", // TODO: your Facebook profile URL
    handle: "Facebook",
    metric: "Community",
    active: false,
  },
  {
    key: "x",
    label: "X",
    href: "#", // TODO: your X profile URL
    handle: "@zeekolachi",
    metric: "Signal & ideas",
    active: false,
  },
  {
    key: "youtube",
    label: "YouTube",
    href: "#", // TODO: your YouTube channel URL
    handle: "@zeekolachi",
    metric: "Talks & demos",
    active: false,
  },
];

/* -------------------------------------------------------------------------- */
/*  CREDENTIAL STATS — honest, CV-backed numbers (animate on scroll)           */
/* -------------------------------------------------------------------------- */

export const credentialStats: Stat[] = [
  { value: 6, suffix: "+", label: "Years Experience", hint: "cross-sector" },
  {
    value: 90,
    suffix: "%",
    label: "Top AI Module",
    hint: "Generative AI · Grade A",
  },
  { value: 40, suffix: "+", label: "AI Tools", hint: "automation toolkit" },
  { value: 5, label: "Certifications", hint: "+ PGD in progress" },
];

/* -------------------------------------------------------------------------- */
/*  CORE SKILLS                                                                */
/* -------------------------------------------------------------------------- */

export const skillGroups: SkillGroup[] = [
  {
    label: "AI & Data Science",
    items: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Generative & Agentic AI",
      "Ai Agent Automation Expert",
      "Data Analysis",
      "Business Intelligence",
    ],
  },
  {
    label: "AI Development",
    items: [
      "Claude Code",
      "OpenAI Agent SDK",
      "OpenClaw",
      "MCP Servers",
      "AI Agents Automation",
      "Prompt & Context Engineering",
      "Spec-Driven Development",
      "40+ AI productivity tools",
    ],
  },
  {
    label: "Office & Operations",
    items: [
      "MS Office (Word, Excel)",
      "Accounts & Budgeting",
      "Estimates & Reconciliation",
      "Record Management",
      "Sindhi/Urdu Composing",
    ],
  },
  {
    label: "Strengths",
    items: [
      "Analytical Thinking",
      "Problem Solving",
      "Attention to Detail",
      "Adaptability",
      "Clear Communication",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  PROFESSIONAL EXPERIENCE                                                    */
/* -------------------------------------------------------------------------- */

export const roles: Role[] = [
  {
    title: "Agentic AI Teacher",
    org: "Syllani Welfare Trust",
    period: "Jun 2026 – Present",
    current: true,
    summary:
      "Teaching Agentic AI fundamentals and hands-on tooling to learners at Syllani Welfare Trust.",
    highlights: [
      "Deliver Agentic AI lessons and hands-on tooling sessions",
      "Translate technical AI concepts for a general audience",
    ],
  },
  {
    title: "Project Management Student",
    org: "Syllani Welfare Trust",
    period: "Jun 2026 – Present",
    current: true,
    summary:
      "Building project-management fundamentals alongside the Agentic AI curriculum — planning, scoping, and delivering AI-native work end-to-end.",
    highlights: [
      "Studying project management fundamentals within Panaversity's Agentic AI Architect track",
      "Applying planning and delivery discipline to AI-native project work",
    ],
  },
  {
    title: "Primary School Teacher (Permanent)",
    org: "Sindh Education & Literacy Department, Govt. of Sindh",
    period: "Jun 2025 – Present",
    current: true,
    summary:
      "Delivering foundational education and integrating basic digital literacy into everyday classroom learning.",
    highlights: [
      "Deliver foundational education to primary-level students",
      "Maintain academic and attendance records",
      "Track student progress and integrate digital literacy",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  EDUCATION (technical + academic)                                          */
/* -------------------------------------------------------------------------- */

export const education: EducationItem[] = [
  {
    title: "Certified Agentic AI Architect Program (Level 1)",
    org: "Panaversity.org",
    period: "May 2025 – Present (Ongoing)",
    detail:
      "Agentic AI foundations: AI-driven development, Claude Code & OpenClaw fundamentals, context & prompt engineering, spec-driven development.",
  },
  {
    title: "Postgraduate Diploma in Data Science & Artificial Intelligence",
    org: "NED University, Karachi — Batch 8 (Weekend)",
    period: "2024",
    detail:
      "Modules: Generative AI (Agentic AI) 90% A · Machine Learning 88% A · Deep Learning 84% A · Python for Data Science 75% B+ · Fundamentals of AI 75% B.",
  },
];

export const certifications: CertItem[] = [
  {
    course: "Machine Learning, AI & Data Science",
    provider: "eHunar.org",
    score: "84%",
    year: "2024",
  },
  {
    course: "Data Analysis & Business Intelligence",
    provider: "DigiSkills.pk",
    score: "85%",
    year: "2023",
  },
  {
    course: "Digital Literacy",
    provider: "DigiSkills.pk",
    score: "79%",
    year: "2020",
  },
  {
    course: "Diploma in MS Office 2010",
    provider: "Alison.com",
    score: "86%",
    year: "2016",
  },
  {
    course: "Diploma in Information Technology",
    provider: "SBTE, Karachi",
    score: "60%",
    year: "2010",
  },
];

export const languages: string[] = [
  "Sindhi (Native)",
  "Urdu (Fluent)",
  "English (Professional Working)",
  "Seraiki (Fluent)",
  "Punjabi (Conversational)",
];

/* -------------------------------------------------------------------------- */
/*  PROJECTS — interactive case studies (real work & training projects)        */
/*  Add a `repo` and/or `demo` URL to any card to reveal its links.            */
/* -------------------------------------------------------------------------- */

export const projects: Project[] = [
  {
    id: "p1",
    name: "Portfolio AI Assistant",
    category: "Generative & Agentic AI",
    role: "Designer & Builder",
    tagline: "The grounded AI assistant live in the corner of this very site.",
    challenge:
      "Visitors and recruiters want quick, accurate answers about my background without reading every section — and a generic chatbot would risk inventing facts.",
    process:
      "Built a server-side route on Google Gemini, grounded with a system prompt and knowledge base compiled from my CV so it answers only from verified facts. Added a keyword-matched scripted fallback so it still helps even when the API is unavailable, and section-jump CTAs to guide visitors.",
    result:
      "A fast, on-brand assistant that answers questions about my skills, experience, and education, points people to the right section, and never leaks its instructions or fabricates details.",
    outcome: "Live on this site",
    tags: ["Gemini", "Next.js", "Prompt Engineering", "Context Engineering"],
  },
  {
    id: "p2",
    name: "Data Analysis & BI Dashboard",
    category: "Data Science",
    role: "Data Practitioner",
    tagline: "Turning a raw dataset into a clear, decision-ready dashboard.",
    challenge:
      "As part of NED's PGD and DigiSkills BI training, transform messy real-world data into a view a non-technical stakeholder can act on at a glance.",
    process:
      "Cleaned and explored the data in Python (pandas), engineered the metrics that mattered, and designed a focused dashboard that surfaces the few numbers that drive a decision — not every number available.",
    result:
      "A compact BI view that answers the core business question immediately, built to the standard certified at 85% (DigiSkills) and applied in NED coursework.",
    outcome: "DigiSkills BI · 85%",
    tags: ["Python", "Pandas", "Data Analysis", "Business Intelligence"],
  },
  {
    id: "p3",
    name: "Machine Learning Model",
    category: "Machine Learning",
    role: "ML Practitioner",
    tagline: "An end-to-end supervised model, from data prep to evaluation.",
    challenge:
      "Build, train, and honestly evaluate a predictive model for NED's Machine Learning module — avoiding the over-fitting trap that flatters training scores.",
    process:
      "Prepared and split the data, engineered features, trained and compared models in Python (scikit-learn), and evaluated with the right metrics rather than accuracy alone.",
    result:
      "A working, properly validated model that demonstrates the full ML workflow — graded 88% (Grade A) in the program.",
    outcome: "ML module — 88% (Grade A)",
    tags: ["Machine Learning", "scikit-learn", "Python", "Deep Learning"],
  },
];

/* -------------------------------------------------------------------------- */
/*  ACHIEVEMENTS — intelligence dossier timeline (real, from CV)              */
/* -------------------------------------------------------------------------- */

export const achievements: Achievement[] = [
  {
    year: "2025",
    title: "Permanent Primary School Teacher — Govt. of Sindh",
    detail:
      "Appointed to a permanent teaching post with the Sindh Education & Literacy Department.",
  },
  {
    year: "2025",
    title: "Certified Agentic AI Architect Program (Level 1)",
    detail:
      "Enrolled and advancing through Panaversity's flagship Agentic AI program.",
  },
  {
    year: "2024",
    title: "Generative AI (Agentic AI) — 90%, Grade A",
    detail:
      "Top module result in NED University's Postgraduate Diploma in Data Science & AI.",
  },
  {
    year: "2024",
    title: "Machine Learning — 88% (A) · Deep Learning — 84% (A)",
    detail: "Strong distinctions across core AI modules at NED University.",
  },
  {
    year: "2023",
    title: "Data Analysis & Business Intelligence — 85%",
    detail: "Certified through DigiSkills.pk.",
  },
];

/* -------------------------------------------------------------------------- */
/*  CONTACT                                                                    */
/* -------------------------------------------------------------------------- */

export const contact = {
  email: "zeekolachi@outlook.com",
  phone: "+92 300 3118917",
  whatsapp: "923003118917", // wa.me format (no +, no spaces)
  ctaTitle: "Let's build something intelligent.",
  ctaSubtitle:
    "Whether it's an AI project, a data problem, or a role where analytical rigor matters — I'm one message away.",
} as const;

/* -------------------------------------------------------------------------- */
/*  SEO                                                                        */
/* -------------------------------------------------------------------------- */

export const seo = {
  title:
    "ZEEKOLACHI — Zeeshan Ahmed Kolachi · Agentic AI Architect & Data Science Practitioner",
  description:
    "The personal operating system of Zeeshan Ahmed Kolachi (ZEEKOLACHI): Agentic AI architect in training, data science practitioner, and primary school teacher. Projects, achievements, and a live mission dashboard.",
  // TODO: set this to your final domain once purchased
  url: "https://zeekolachi.com",
  keywords: [
    "ZEEKOLACHI",
    "Zeeshan Ahmed Kolachi",
    "Agentic AI Architect",
    "Data Science",
    "AI engineer portfolio",
    "Machine Learning",
    "Ghotki",
    "Sindh",
    "Pakistan",
  ],
} as const;
