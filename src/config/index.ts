import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Bugra Sitemkar — Senior Software Engineer",
  author: "Bugra Sitemkar",
  description:
    "Senior Software Engineer | MSc in Business Intelligence and Analytics | Claude Certified Architect",
    lang: "en",
  siteLogo: "/bugra-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Education", href: "#education" },
    { text: "About", href: "#about" },
    { text: "Contact Me", href: "#contact" },
    { text: "Download CV", href: "https://drive.google.com/file/d/1R05JOmihRptE7Lzj3tLgk7DSuJuKtcqo/view" },
  ],
  socialLinks: [
    { text: "Github", href: "https://github.com/bugrasitemkar" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/bugrasitemkar" },
    { text: "Medium", href: "https://hiddenlayerai.medium.com/" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Bugra Sitemkar",
    specialty: "<br />Hi, I am a Software Engineer<br />",
    summary: "",
    email: "bugrasitemkar@gmail.com",
  },
  experience: [
    {
      company: "Zartis",
      companyUrl: "https://www.zartis.com/",
      position: "Senior Software Engineer",
      startDate: "Jan 2022",
      endDate: "Present",
      summary: [
        "Delivering high-impact consulting engagements for enterprise clients through a leading software services company, specializing in full-stack development and architectural modernization.",
        "Projects:",
        "ESW: Shopify system design and Shopify app development for global e-commerce logistics.",
        "AMCS: Provided strategic consultation on tech-stack modernization and migration planning.",
        "DIFC Leap: Architecting and developing a LinkedIn-inspired professional networking application for DIFC-registered companies.",
        "Apex: Contributing to the transition from monolithic architecture to a scalable microservices-based system as part of a cross-functional engineering team.",
        "Ding: Worked on the Payments team, contributing to payment processing features and platform reliability."
      ],
    },
    {
      company: "AccuPoint (Now Ensora Health)",
      companyUrl: "https://ensorahealth.com/",
      position: "Software Developer",
      startDate: "Jul 2018",
      endDate: "Jan 2022",
      summary: [
        "Built and maintained mission-critical healthcare software serving ABA therapy and homecare clinics across the United States.",
        "Projects:",
        "Practice Management: Developed core ERP modules for scheduling, billing, and clinical workflow management across therapy and homecare clinics.",
        "Single Sign-On: Designed and implemented SSO integration unifying authentication across the parent company's product portfolio.",
        "Electronic Visit Verification: Delivered a state-mandated EVV integration with government agencies, ensuring regulatory compliance."
      ],
    },
    {
      company: "Bilge Adam",
      companyUrl: "https://www.bilgeadam.com/services/consultancy",
      position: "Consultant",
      startDate: "Nov 2017",
      endDate: "Jun 2018",
      summary: [
        "Provided software consulting services through one of Turkey's leading technology consultancy and training firms, delivering solutions for major enterprise clients.",
        "Projects:",
        "Aygaz: Engineered RESTful API endpoints powering the e-commerce platform and mobile application for Turkey's largest LPG distributor.",
        "Internal Portals: Developed and deployed internal-facing web portals to streamline operational workflows."
      ],
    },
    {
      company: "LOGO Yazılım",
      companyUrl: "https://www.logo.com.tr/en",
      position: "Senior Software Developer",
      startDate: "Apr 2017",
      endDate: "Sep 2017",
      summary: [
        "Contributed to enterprise-grade ERP products at one of Turkey's largest software companies, serving thousands of corporate users nationwide.",
        "Projects:",
        "HR ERP Products (Tiger HR / Netsis HR): Developed features for the HR ERP web application suite, used by thousands of corporate clients for workforce management.",
        "Integration Tool: Authored a developer tool that automated ad-hoc application setup and configuration for integration teams, significantly reducing onboarding time."
      ],
    },
    {
      company: "morhipo (now Boyner)",
      companyUrl: "https://www.boyner.com.tr/",
      position: "Software Developer",
      startDate: "Oct 2014",
      endDate: "Mar 2017",
      summary: [
        "Full-stack development for one of Turkey's largest fashion e-commerce platforms, which has since merged with its parent company Boyner.",
        "Projects:",
        "morhipo.com: Core web application development for the high-traffic e-commerce platform.",
        "Data Integration Services: Designed and maintained CRM data pipelines and back-end integrations with product suppliers.",
        "Manager Application: Built an internal operations dashboard that significantly reduced daily ad-hoc requests and manual reporting overhead."
      ],
    },
    {
      company: "morhipo (now Boyner)",
      companyUrl: "https://www.boyner.com.tr/",
      position: "Software Developer",
      startDate: "Mar 2012",
      endDate: "Jun 2013",
      summary: [
        "Backend web development, company management software, integration services, scheduled job orchestration, and business reporting."
      ],
    },
  ],
  education: [
    {
      institution: "University of Westminster",
      institutionUrl: "https://www.westminster.ac.uk/",
      degree: "Master of Science (MSc), Business Intelligence and Analytics",
      startDate: "2013",
      endDate: "2014",
      summary: "Grade: Exceptional Student (First Degree)",
    },
    {
      institution: "Yeditepe University",
      institutionUrl: "https://yeditepe.edu.tr/en",
      degree: "Bachelor of Science, Computer Engineering",
      startDate: "2004",
      endDate: "2010",
      summary: "",
    },
  ],
  projects: [
    {
      name: "AI Signals Explorer",
      summary: "A real-time observability tool that extracts and visualizes 18 internal model signals from language models, making hidden confidence, uncertainty, and reasoning patterns visible through interactive charts and AI-generated interpretations. Built with React, FastAPI, Ollama, and Docker.",
      linkSource: "https://github.com/bugrasitemkar/ai-signals",
      image: "/ai-signals.jpg",
    },
    {
      name: "Handoff",
      summary: "A minimalist desktop application built around a daily practice of writing a brief note each evening for your next morning self. Emphasizes intention-setting and reflection through a constraint-based interface. Built with Tauri v2, React, and Rust.",
      linkSource: "https://github.com/bugrasitemkar/handoff-",
      image: "/handoff.png",
    },
    {
      name: "AI File Renamer",
      summary: "A Python application that intelligently renames text files based on their content using local AI models. Analyzes file content and generates descriptive, filesystem-friendly filenames with both CLI and GUI interfaces. Built with Python, Ollama, and tkinter.",
      linkSource: "https://github.com/bugrasitemkar/AI-File-Rename",
      image: "/ai-file-rename.png",
    },
  ],
  about: {
    description: `
   The journey as a Senior Software Engineer is marked by a persistent drive towards innovation and efficiency. With a Master of Science in Business Intelligence and Analytics, I integrate analytical insights into the development process, fostering solutions that propel the industry forward while prioritizing user privacy and data security. Recently, I have expanded my toolkit into the generative AI space, earning the Claude Certified Architect – Foundations credential. I am actively applying these foundational skills to bridge the gap between analytics and AI—focusing on structured data extraction, integrating backend systems using the Model Context Protocol (MCP), and building secure, reliable agentic workflows.
  `,
    image: "/bugra-big.jpg",
  },
};

// #5755ff