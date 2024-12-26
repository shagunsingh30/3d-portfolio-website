import {
  mobile,
  backend,
  creator,
  c_icon,
  java,
  python,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Development",
    icon: web,
  },
  {
    title: "API integration & Backend Services",
    icon: mobile,
  },
  {
    title: "Efficient State Management",
    icon: backend,
  },
  {
    title: "UI/UX Designing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    shadowColor: "rgba(255,102,0,0.7)", // Orange
  },
  {
    name: "CSS 3",
    icon: css,
    shadowColor: "rgba(0,114,188,0.7)", // Blue
  },
  {
    name: "JavaScript",
    icon: javascript,
    shadowColor: "rgba(247,223,30,0.7)", // Yellow
  },
  {
    name: "TypeScript",
    icon: typescript,
    shadowColor: "rgba(0,122,204,0.7)", // Light Blue
  },
  {
    name: "React JS",
    icon: reactjs,
    shadowColor: "rgba(97,218,251,0.7)", // Cyan
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    shadowColor: "rgba(118,74,188,0.7)", // Purple
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    shadowColor: "rgba(56,189,248,0.7)", // Light Cyan
  },
  {
    name: "Node JS",
    icon: nodejs,
    shadowColor: "rgba(128,189,66,0.7)", // Green
  },
  {
    name: "MongoDB",
    icon: mongodb,
    shadowColor: "rgba(51,160,44,0.7)", // Dark Green
  },
  {
    name: "Three JS",
    icon: threejs,
    shadowColor: "rgba(14,98,133,0.7)", // Teal
  },
  {
    name: "git",
    icon: git,
    shadowColor: "rgba(255, 255, 255, 0.9)", // Red
  },
  {
    name: "figma",
    icon: figma,
    shadowColor: "rgba(244,68,58,0.7)", // Reddish Orange
  },
  {
    name: "C/C++",
    icon: c_icon,
    shadowColor: "rgba(43,133,192,0.7)", // Deep Blue
  },
  {
    name: "Java",
    icon: java,
    shadowColor: "rgba(244,100,35,0.7)", // Orange-Red
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
const MyProjects = [
  {
    title: "File System Organizer",
    icon: javascript,
    description: [
      "Created a JavaScript CLI tool using Node.js deployed locally on my PC.",
      "Organizes files by type, displays directory structure as a tree, and provides command help.",
    ],
    technologies: ["JavaScript", "Node.js"],
    date: "October 2022",
  },
  {
    title: "Front-End Instagram Clone",
    icon: meta,
    description: [
      "Created a front-end Instagram clone using only HTML and CSS.",
    ],
    technologies: ["HTML", "CSS"],
    date: "December 2022",
    demoLink:
      "https://codesandbox.io/s/flamboyant-snow-1f3f1i?file=/index.html",
  },
  {
    title: "Meta Drive - Decentralized Storage using IPFS",
    icon: reactjs,
    description: [
      "Developed an application for storing and viewing files on IPFS.",
      "Managed backend operations with a smart contract for network transactions.",
    ],
    technologies: ["Vite-React", "Ethers", "Hardhat", "IPFS", "Solidity"],
    date: "May 2023",
    repoLink: "https://github.com/iamaditiray/Meta-Drive",
  },
  {
    title: "Google Drive Clone using Firebase",
    icon: reactjs,
    description: [
      "Developed a web application mimicking Google Drive with user authentication.",
      "Implemented file upload, sharing, viewing, and deletion features.",
      "Utilized Firebase for storage, database, authentication, and hosting.",
    ],
    technologies: ["Firebase", "Vite-React", "Material UI"],
    date: "June 2023",
    demoLink: "https://drive-clone-2d3f5.web.app/",
  },
  {
    title: "AI Assistant for Data Visualization",
    icon: python,
    description: [
      "Built an AI assistant that allows users to upload CSV files for dataset analysis.",
      "Features include data cleaning, correlation analysis, and graph plotting.",
      "Provided machine learning algorithm suggestions based on dataset characteristics.",
    ],
    technologies: ["Streamlit", "Langchain", "Python", "Google Palm API"],
    date: "January 2024",
  },
  {
    title: "SaaS Landing Page UI Clone",
    icon: reactjs,
    description: [
      "Deployed a responsive SaaS landing page using Netlify.",
      "Built with Vite-ReactJS and styled with Tailwind CSS.",
      "Features include dynamic styling with clsx, animated metrics using react-countup, smooth navigation with react-scroll, and slide animations with react-slidedown.",
    ],
    technologies: [
      "Vite-ReactJS",
      "Tailwind CSS",
      "clsx",
      "react-scroll",
      "react-slidedown",
    ],
    date: "October 2024",
    demoLink: "https://saas-landing-webpage.netlify.app/",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  MyProjects,
};
