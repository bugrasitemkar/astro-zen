import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Bugra Sitemkar — Software Developer",
  author: "Bugra Sitemkar",
  description:
    "Hi, my name is Bugra Sitemkar, I'm a Software Developer.",
    lang: "en",
  siteLogo: "/bugra-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "About", href: "#about" },
    { text: "Contact Me", href: "#contact" },
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
    specialty: "<br />Hi, my name is Bugra Sitemkar. <br />I'm a Software Developer.<br />",
    summary: "",
    email: "bugrasitemkar@gmail.com",
  },
  experience: [
    {
      company: "Zartis",
      position: "Senior Software Engineer",
      startDate: "",
      endDate: "",
      summary: [
        "Zartis is a software consulting company that provides individuals/teams for high level expertise to companies.",
        "Projects:",
        "DIFC Leap: Developing a LinkedIn-inspired web application for DIFC Companies.",
        "Apex: Assisted company to transition to micro-services architecture.",
        "Ding: Provided consultation on modernizing tech-stack."
      ],
    },
    {
      company: "Accupoint",
      position: "Senior Software Engineer",
      startDate: "",
      endDate: "",
      summary: [
        "Accupoint provides practice management software for ABA therapy clinics.",
        "Projects:",
        "Practice Management: ERP management product with for therapy and homecare clinics.",
        "Single Sign On: SSO integration with the other products, Accupoints' parent company owns.",
        "Electronic Visit Verification: State mandated integration project with government agencies."
      ],
    },
    {
      company: "Aygaz",
      position: "Software Consultant",
      startDate: "",
      endDate: "",
      summary: [
        "Aygaz is biggest liquid petrol gas seller in Turkey, both commercial and corporate sales.",
        "Projects:",
        "API Endpoints: Developed API endpoints for Aygaz E-commerce site and mobile application.",
        "Internal Portals: Development for company's internal portals."
      ],
    },
    {
      company: "Logo",
      position: "Senior Software Developer",
      startDate: "",
      endDate: "",
      summary: [
        "Logo is one of the largest software house in Turkey.",
        "Projects:",
        "HR ERP Products (Tiger HR / Netsis HR): HR ERP web application development having over thousands of corporate users.",
        "Integration Tool: Authored a software to help integration teams setting up ad-hoc application setups."
      ],
    },
    {
      company: "Morhipo",
      position: "Software Engineer",
      startDate: "",
      endDate: "",
      summary: [
        "Morhipo was one of the biggest fashion e-commerce sites in Turkey which has now merged with its parent company Boyner.",
        "Projects:",
        "Morhipo.com web application: Main morhipo.com web application development.",
        "Ad-hoc integration services: Developed and maintained data integrations, both CRM related data integrations of user activity and back-end data integrations with product suppliers.",
        "Morhipo manager application: Developed manager application that decreases daily operational/ad-hoc requests and reporting needs significantly."
      ],
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
   Experienced software developer skilled in web application development with a proven track record. Demonstrates exceptional communication skills alongside proficient analytical and problem-solving abilities. Shows effectiveness in both independent and collaborative environments. Enthusiastic about staying updated with the latest technologies and tools in the field.
  `,
    image: "/bugra-big.jpg",
  },
};

// #5755ff