/**
 * Portfolio Constants & Data Configuration
 * 
 * Tailored for:
 * - "Build and Deploy a Modern Personal Portfolio with ReactJS and TailwindCSS"
 * - Future Interns: Full Stack Web Development – Task 1 (2026)
 */

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFolder, FiHome, FiMail, FiUser } from "react-icons/fi";
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
  mission: "Objective — Creating robust digital experiences, which are not just functional, but truly delightful - products that users enjoy using",
  email: "nattyshumet1627@gmail.com",
  phone: "+251 974 269 898",
  location: "Addis Ababa, Ethiopia",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/profile-photo.png",
  github: "https://github.com/bigchill273",
  linkedin: "https://www.linkedin.com/in/natnael-shumet-953420434/",
  twitter: "https://twitter.com/stuff",
} as const;

// ==========================================
// 2. Navigation Configuration
// ==========================================

export const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home", href: "#", icon: FiHome },
  { id: "about", label: "About", href: "#about", icon: FiUser },
  { id: "projects", label: "Projects", href: "#projects", icon: FiFolder },
  { id: "contact", label: "Contact", href: "#contact", icon: FiMail },
] as const;



// ==========================================
// 4. Skills & Tech Stack
// ==========================================

export const SKILL_CATEGORIES:  Skills[] = [
  { name: "React.js", icon: "react"},
  { name: "TypeScript", icon: "FileCode"},
  { name: "JavaScript (ES6+)", icon: "Zap"},
  { name: "Tailwind CSS", icon: "Palette"},
  { name: "Node.js", icon: "Server"},
  { name: "Express.js", icon: "Layers"},
  { name: "RESTful APIs", icon: "Network"},
  { name: "MongoDB", icon: "Database"},
  { name: "MySQL", icon: "Table"},
  { name: "PostgreSQL", icon: "Boxes"},
  { name: "Git & GitHub", icon: "GitBranch"},
  { name: "Vite", icon: "Cpu"},
  {name: "Bun", icon: "Bun"},
] as const;

// Flattened list for quick access or skill tag clouds
//export const ALL_SKILLS = SKILL_CATEGORIES.flatMap((category) => category.skills);

// ==========================================
// 5. Featured Projects
// ==========================================

export const PROJECTS:  Project[] = [
  {
    id: "shopverse-ecommerce",
    title: "ShopVerse - Full Stack E-Commerce",
    subtitle: "Complete Online Storefront with Cart & Payment Flow",
    description:
      "A responsive e-commerce web platform featuring product catalog filtering, real-time cart state management, user authentication, and checkout simulation.",
    highlights: [
      "Custom product filtering & category navigation",
      "Persistent shopping cart with local storage & state management",
      "Stripe payment gateway sandbox integration",
      "RESTful API endpoints for inventory and orders",
    ],
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://shopverse-demo.example.com",
    githubUrl: "https://github.com/alexmorgan-dev/shopverse-ecommerce",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "taskflow-kanban",
    title: "TaskFlow - Agile Kanban SaaS",
    subtitle: "Collaborative Project Management & Productivity Tool",
    description:
      "A sleek productivity dashboard enabling agile teams to organize tasks across sprints, track deadlines, assign priorities, and visualize progress in real-time.",
    highlights: [
      "Fluid drag-and-drop task workflow with status progression",
      "Interactive data charts and completion velocity metrics",
      "Form validation with Zod and clean modal dialogs",
      "Responsive glassmorphism UI with dark theme support",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Zod", "React Icons"],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://taskflow-demo.example.com",
    githubUrl: "https://github.com/alexmorgan-dev/taskflow-kanban",
    featured: true,
    category: "Frontend",
  },
  {
    id: "dev-portfolio",
    title: "Modern Interactive Portfolio",
    subtitle: "Personal Digital Resume & Showcase Website",
    description:
      "The exact portfolio application you are browsing, engineered with React 19, Tailwind CSS v4, React Icons, responsive navigation, and EmailJS contact delivery.",
    highlights: [
      "Tailwind v4 styling with custom CSS variables & glass effects",
      "Interactive contact form with automated email validation",
      "Smooth scroll sections with sticky navigation header",
      "100% responsive across desktop, tablet, and mobile displays",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "EmailJS"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://alexmorgan-portfolio.example.com",
    githubUrl: "https://github.com/alexmorgan-dev/personal-portfolio",
    featured: true,
    category: "Frontend",
  },
  {
    id: "devpulse-community-blog",
    title: "DevPulse - Tech Community & Blog",
    subtitle: "Markdown Publishing & Developer Discussion Engine",
    description:
      "A full-stack publishing platform allowing developers to create technical tutorials, comment on articles, bookmark resources, and explore trending tech topics.",
    highlights: [
      "Markdown editor with live preview and code syntax highlighting",
      "Relational SQL schema for users, articles, tags, and comments",
      "Search and tag indexing for quick discoverability",
      "Secure session handling and role-based permissions",
    ],
    tags: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://devpulse-demo.example.com",
    githubUrl: "https://github.com/alexmorgan-dev/devpulse-blog",
    featured: false,
    category: "Full Stack",
  },
] as const;

// ==========================================
// 8. Social Links & Contact Details
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
    placeholder: "Hi Alex, I came across your portfolio and would like to discuss...",
    required: true,
  },
] as const;

// ==========================================
// 9. Task 1 (Future Interns) Specific Metadata
// ==========================================



// ==========================================
// 10. Footer Information
// ==========================================

export const FOOTER_INFO = {
  copyrightText: `© ${new Date().getFullYear()} Natnael Shumet. All rights reserved.`,
  tagline: "Designed & Built with ReactJS, TailwindCSS, and Passion.",
  quickLinks: NAV_LINKS,
} as const;