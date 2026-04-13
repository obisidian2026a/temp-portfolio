export type SocialLink = {
  label: string;
  url: string;
};

export type Skill = {
  name: string;
  icon: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  details: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  year: string;
  details: string;
};

export type Project = {
  slug: string;
  name: string;
  image: string;
  shortDescription: string;
  description: string;
  stack: string[];
  liveUrl: string | null;
  githubUrl: string;
  challenges: string[];
  improvements: string[];
};

export const profile = {
  name: "Imran Bin Hasan",
  designation: "Full Stack Engineer",
  intro:
    "A Full Stack Engineer with a passion for building engaging, scalable, and intuitive web applications.",
  photo: "/profile.jpg",
  resumeUrl: "#",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/imran-binhasan" },
  { label: "LinkedIn", url: "https://linkedin.com/in/imran-binhasan" },
  { label: "Twitter", url: "https://x.com/imran-binhasan" },
];

export const aboutMe = [
  "My programming journey started with curiosity about how websites work under the hood. I began with HTML, CSS, and JavaScript, then gradually moved into React, Next.js, Node.js, and databases to build complete end-to-end products.",
  "I enjoy building products that solve real problems: dashboards, e-commerce flows, automation features, and performance-focused interfaces. I particularly love turning complex requirements into simple user experiences.",
  "Outside of programming, I enjoy playing football, reading about product design, and exploring photography. These interests help me stay creative and think from both technical and human perspectives.",
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "React.js", icon: "/icons/react.svg" },
      { name: "React Native", icon: "/icons/react.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
      { name: "Redux Toolkit", icon: "/icons/redux.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "NestJS", icon: "/icons/nestjs.svg" },
      { name: "Express.js", icon: "/icons/express.svg" },
      { name: "FastAPI", icon: "/icons/python.svg" },
      { name: "GraphQL", icon: "/icons/graphql.svg" },
      { name: "Socket.io", icon: "/icons/socket.svg" },
      { name: "RabbitMQ", icon: "/icons/rabbitmq.svg" },
    ],
  },
  {
    title: "Database & DevOps",
    skills: [
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "MySQL", icon: "/icons/mysql.svg" },
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "Redis", icon: "/icons/redis.svg" },
      { name: "AWS", icon: "/icons/aws.svg" },
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "GitHub Actions", icon: "/icons/githubactions.svg" },
      { name: "CI/CD", icon: "/icons/ci-cd.svg" },
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "BS in CSE (CGPA 3.63)",
    institution: "Presidency University",
    period: "2024 - 2027",
    details:
      "Focused on software engineering, data structures, backend systems, and full-stack application architecture.",
  },
  {
    degree: "Higher Secondary",
    institution: "Shaheed Ziaur Rahman College",
    period: "2019 - 2020",
    details:
      "Built strong analytical and mathematical fundamentals that later supported my software engineering journey.",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Fullstack AI Developer",
    company: "Coredevs Ltd",
    location: "Dhaka, Bangladesh",
    period: "Jan 2026 - Present",
    year: "2026",
    details:
      "Building AI-powered full-stack products with scalable backend architecture, automation-first workflows, and polished user-facing interfaces.",
  },
  {
    role: "Software Engineer (Backend)",
    company: "Appifydevs",
    location: "Dhaka, Bangladesh",
    period: "Mar 2025 - Dec 2025",
    year: "2025",
    details:
      "Developed backend services and APIs with strong emphasis on authentication, authorization, and performance optimization.",
  },
  {
    role: "Jr. Fullstack Developer",
    company: "Qwik IT Services",
    location: "NB, Canada (Remote)",
    period: "Jun 2024 - Feb 2025",
    year: "2024",
    details:
      "Delivered production-ready frontend and backend features while collaborating remotely with distributed teams.",
  },
];

export const projects: Project[] = [
  {
    slug: "cursor-kit",
    name: "Cursor Kit",
    image: "/project_images/cursor-kit.png",
    shortDescription:
      "Open-source collection of custom CSS & JS cursor effects, ready to drop into any web project.",
    description:
      "Cursor Kit is a curated library of creative cursor interactions — magnetic pull, trail effects, spotlight cursors, morphing blobs, and more. Each effect ships as a self-contained snippet with zero dependencies, live previews, and one-click copy. Built for designers and developers who want polished micro-interactions without the overhead.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "CSS Custom Properties",
    ],
    liveUrl: "https://cursor-kit-landing.vercel.app/",
    githubUrl: "https://github.com/obisidian2026a/cursor-kit",
    challenges: [
      "Achieving 60 fps on complex cursor trail effects without layout thrashing.",
      "Making effects accessible — respecting prefers-reduced-motion across all snippets.",
      "Designing an embeddable sandbox that isolates each snippet's CSS scope.",
    ],
    improvements: [
      "Add a visual builder so non-coders can customise and export effects.",
      "Publish as an npm package with tree-shakeable exports.",
      "Expand the library with touch/pointer-based mobile equivalents.",
    ],
  },
  {
    slug: "info-labs",
    name: "Info Labs",
    image: "/project_images/info-labs.png",
    shortDescription:
      "Interactive knowledge-sharing platform with structured learning paths, quizzes, and community discussions.",
    description:
      "Info Labs is a learning and knowledge-sharing web application where users can publish articles, follow structured topic paths, take quizzes, and discuss ideas in threaded comment sections. It supports rich-text editing, bookmarking, and personalised content feeds based on user interests.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Firebase Auth",
    ],
    liveUrl: "https://infolabs.vercel.app/",
    githubUrl: "https://github.com/obisidian2026a/infolabs",
    challenges: [
      "Implementing a performant personalised feed algorithm for diverse content types.",
      "Handling nested comment threads with efficient data modelling.",
      "Building a rich-text editor that renders consistently across devices.",
    ],
    improvements: [
      "Add AI-powered article summarisation and topic tagging.",
      "Introduce collaborative writing and peer-review workflows.",
      "Build native mobile apps for offline reading and note-taking.",
    ],
  },
  {
    slug: "inventory-management",
    name: "Inventory Management",
    image: "/project_images/inventory-management.png",
    shortDescription:
      "Full-stack inventory system with real-time stock tracking, order workflows, and role-based access control.",
    description:
      "A comprehensive inventory management platform built for small-to-mid-scale businesses. Supports product cataloging, stock-level monitoring, purchase orders, sales tracking, and multi-role access for admins and staff. Features real-time dashboards, low-stock alerts, and exportable reports.",
    stack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "Redis",
      "Tailwind CSS",
      "JWT",
      "Docker",
    ],
    liveUrl: "https://invenmt.vercel.app/",
    githubUrl: "https://github.com/obisidian2026a/inventory-management",
    challenges: [
      "Keeping stock counts consistent under concurrent write operations.",
      "Designing a flexible category and variant system for diverse product types.",
      "Building real-time low-stock notifications without polling overhead.",
    ],
    improvements: [
      "Add barcode/QR scanner integration for physical stock-taking.",
      "Introduce demand forecasting using historical sales data.",
      "Build a mobile-first warehouse companion app.",
    ],
  },
  {
    slug: "megamart",
    name: "Megamart",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    shortDescription:
      "Multi-vendor e-commerce platform with product discovery, cart management, and order tracking.",
    description:
      "Megamart is a full-featured multi-vendor e-commerce platform. Shoppers can browse categories, filter by price and rating, manage wishlists and carts, and track orders end-to-end. Vendors get a dedicated dashboard for product and inventory management. Admins oversee platform-wide analytics and order fulfillment.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Stripe",
      "JWT",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/obisidian2026a/megamart-backend",
    challenges: [
      "Synchronising inventory counts across concurrent buyer sessions.",
      "Designing a flexible multi-vendor permission model without data leakage.",
      "Building a responsive product grid that performs well on low-end devices.",
    ],
    improvements: [
      "Add AI-driven product recommendations based on browsing history.",
      "Integrate real-time order tracking with delivery partner APIs.",
      "Build a native mobile app for on-the-go vendor management.",
    ],
  },
  {
    slug: "hivecrm",
    name: "HiveCRM",
    image: "/project_images/crm.png",
    shortDescription:
      "Sales-focused CRM with pipeline management, contact tracking, and team collaboration tools.",
    description:
      "HiveCRM is a lightweight but powerful customer relationship management system built for sales teams. It features a visual Kanban pipeline, contact and deal management, activity logging, team notes, and email integration. Designed for fast onboarding with sensible defaults and customisable stages.",
    stack: [
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Drizzle ORM",
      "Tailwind CSS",
      "Socket.io",
      "Docker",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/obisidian2026a/hivecrm-backend",
    challenges: [
      "Designing a real-time Kanban board that stays in sync across team members.",
      "Modelling flexible deal stages and custom fields without schema bloat.",
      "Building efficient search and filter across large contact datasets.",
    ],
    improvements: [
      "Add AI-powered deal scoring and follow-up suggestions.",
      "Integrate two-way email sync with Gmail and Outlook.",
      "Build a mobile app for field sales reps.",
    ],
  },
];

export const contact = {
  email: "imran.dev@example.com",
  phone: "+880 1234-567890",
  whatsapp: "+880 1234-567890",
};

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
