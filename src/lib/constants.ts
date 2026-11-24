/**
 * Portfolio Constants & Data Configuration
 * 
 * Tailored for:
 * - "Build and Deploy a Modern Personal Portfolio with ReactJS and TailwindCSS"
 * - Future Interns: Full Stack Web Development – Task 1 (2026)
 */

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiBookOpen, FiFolder, FiHome, FiMail, FiUser } from "react-icons/fi";
import type { IconType } from "react-icons";

// ==========================================
// TypeScript types & Types
// ==========================================

export type NavLink = {
   id: string;
   label: string;
   href: string;
   icon: IconType;
}

export type PersonalInfo = {
   name: string;
   typedText: string[];
   tagline: string;
   shortBio: string;
   fullBio:  string[];
   mission: string;
   email: string;
   phone: string;
   location: string;
   resumeUrl: string;
   avatarUrl: string;
   github: string;
   linkedin: string;
   twitter: string; 
}

export type Skills = {
   name: string;
   icon: string;
}

export type Project = {
   id: string;
   title: string;
   subtitle: string;
   description: string;
   highlights:  string[];
   tags:  string[];
   image: string;
   liveUrl: string;
   githubUrl: string;
   featured: boolean;
   category: "Full Stack" | "Frontend" | "Backend";
}


export type SocialLink = {
   name: string;
   platform: "github" | "linkedin" | "twitter" | "email" | "discord";
   url: string;
   iconName: IconType;
}

export type ContactFormField = {
   name: string;
   label: string;
   type: "text" | "email" | "textarea";
   placeholder: string;
   required: boolean;
}

// ==========================================
// 1. Personal & Brand Information
// ==========================================

export const PERSONAL_INFO: PersonalInfo = {
  name: "Natnael Shumet",
  tagline: "Full Stack Web Developer",
  typedText: ["robust", "performant", "scalable", "secure"],
  shortBio:
    "— A self-driven Full Stack Developer Specializing in React, Next.js, Typescript and Node.js. I make Performant, Scalable, and Robust web applications and APIs.",
  fullBio: [
    "Hello! I am a Full Stack Developer with over 2 years of experience focusing on modern frontend and backend development using React, Tailwind CSS, TypeScript, Node.js, Next.js and PostgreSQL.",
    "I prioritize writing clean, maintainable code, everything from designing responsive component architectures, and delivering fluid user experiences to building complex enterprise application.",
    "Even though, my journey began with a curiosity for how things work, it has evolved into a deep expertise in modern web technologies.",
  ],
  mission:
    "Objective — Creating robust digital experiences, which are not just functional, but truly delightful - products that users enjoy using",
  email: "nattyshumet1627@gmail.com",
  phone: "+251 974 269 898",
  location: "Addis Ababa, Ethiopia",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/profile-photo.png",
  github: "https://github.com/bigchill273",
  linkedin: "https://www.linkedin.com/in/natnael-shumet-953420434/",
  twitter: "https://x.com/atomix_238",
} as const;

// ==========================================
// 2. Navigation Configuration
// ==========================================

export const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home", href: "/", icon: FiHome },
  { id: "about", label: "About", href: "/#about", icon: FiUser },
  { id: "blogs", label: "Blogs", href: "/#blog", icon: FiBookOpen },
  { id: "projects", label: "Projects", href: "/#projects", icon: FiFolder },
  { id: "contact", label: "Contact", href: "/#contact", icon: FiMail },
] as const;



// ==========================================
// 3. Skills & Tech Stack
// ==========================================

export const SKILL_CATEGORIES:  Skills[] = [
  { name: "React.js", icon: "react"},
  { name: "TypeScript", icon: "FileCode"},
  { name: "JavaScript (ES6+)", icon: "Zap"},
  { name: "Next.js", icon: "Nextjs"},
  { name: "Tailwind CSS", icon: "Palette"},
  { name: "Node.js", icon: "Server"},
  { name: "Express.js", icon: "Layers"},
  { name: "RESTful APIs", icon: "Network"},
  { name: "MongoDB", icon: "Database"},
  { name: "Supabase", icon: "supabase"},
  { name: "PostgreSQL", icon: "Boxes"},
  { name: "Git & GitHub", icon: "GitBranch"},
  { name: "Vite", icon: "Cpu"},
  {name: "Bun", icon: "Bun"},
] as const;


// ==========================================
// 4. Featured Projects
// ==========================================

export const PROJECTS:  Project[] = [
  {
    id: "future-fs-02",
    title: "LeadLedger CRM",
    subtitle: "Client Lead Management & Sales Pipeline",
    description:
      "A full-stack CRM for capturing client inquiries, tracking leads through a sales pipeline, managing contacts and follow-up tasks, and viewing conversion analytics.",
    highlights: [
      "Capture public inquiries and manage leads through every sales stage",
      "Visual Kanban pipeline with stage counts and revenue totals",
      "Maintain client contacts, categorized notes, and follow-up tasks",
      "Review conversion metrics, lead sources, and pipeline activity",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "SQLite"],
    image: "/projects/leadledger.png",
    liveUrl: "https://leadledger-alpha.vercel.app",
    githubUrl: "https://github.com/bigchill273/FUTURE_FS_02",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "future-fs-03",
    title: "Blaze Addis",
    subtitle: "Restaurant, Café & Bakery Menu and Ordering",
    description:
      "A responsive digital menu for Blaze Addis, where customers can explore Ethiopian dishes, fast food, fresh bakery items, and catering, then place orders through Telegram.",
    highlights: [
      "Browse food categories, dishes, bakery items, and catering services",
      "View item details, portion options, add-ons, and prices",
      "Build an order and review its confirmation and pickup details",
      "Designed to make Blaze Addis easier to discover on mobile",
    ],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Motion"],
    image: "/projects/blaze-addis.png",
    liveUrl: "https://bigchill273.github.io/FUTURE_FS_03/",
    githubUrl: "https://github.com/bigchill273/FUTURE_FS_03",
    featured: true,
    category: "Frontend",
  },
  {
    id: "jemea",
    title: "Jemea",
    subtitle: "Trello-Inspired Collaborative Project Management",
    description:
      "A full-stack project management app for organizing work on collaborative boards, with drag-and-drop tasks, real-time updates, and subscription tiers.",
    highlights: [
      "Create boards and organize work across customizable columns",
      "Manage tasks with drag-and-drop, priorities, assignees, and due dates",
      "Synchronize board changes in real time with Supabase",
      "Sign in with Clerk and access free or premium subscription features",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Clerk", "dnd-kit", "Tailwind CSS"],
    image: "/projects/jemea.png",
    liveUrl: "https://jeme-a-112211294024.europe-west2.run.app",
    githubUrl: "https://github.com/bigchill273/jemea",
    featured: true,
    category: "Full Stack",
  },
] as const;

// ==========================================
// 5. Social Links & Contact Details
// ==========================================

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    platform: "github",
    url: "https://github.com/alexmorgan-dev",
    iconName: FaGithub,
  },
  {
    name: "LinkedIn",
    platform: "linkedin",
    url: "https://www.linkedin.com/in/natnael-shumet-953420434/",
    iconName: FaLinkedin,
  },
  {
    name: "Twitter",
    platform: "twitter",
    url: "https://twitter.com/alexmorgan_dev",
    iconName: FaXTwitter,
  },
  {
    name: "Email",
    platform: "email",
    url: "nattyshumet1627@gmail.com",
    iconName: FaEnvelope,
  },
] as const;

export const CONTACT_INFO = {
  heading: "Let's Connect & Build Something Great",
  subheading:
    "Whether you have an internship opportunity, a freelance project, or simply want to chat about web technology, feel free to drop a message!",
  email: PERSONAL_INFO.email,
  availabilityNotice: "Currently accepting full-time entry roles & internship opportunities for 2026.",
  responseGuarantee: "Usually responds within 24 hours.",
} as const;

export const CONTACT_FORM_FIELDS:  ContactFormField[] = [
  {
    name: "name",
    label: "Your Full Name",
    type: "text",
    placeholder: "John Doe",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "john@example.com",
    required: true,
  },
  {
    name: "message",
    label: "Your Message",
    type: "textarea",
    placeholder: "Hi Natty, I came across your portfolio and would like to discuss...",
    required: true,
  },
] as const;


// ==========================================
// 6. Footer Information
// ==========================================

export const FOOTER_INFO = {
  copyrightText: `© ${new Date().getFullYear()} Natnael Shumet. All rights reserved.`,
  tagline: "Designed & Built with ReactJS, TailwindCSS, and Passion.",
  quickLinks: NAV_LINKS,
} as const;