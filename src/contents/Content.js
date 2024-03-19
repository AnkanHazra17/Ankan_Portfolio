import {
  mobile,
  backend,
  creator,
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
  docker,
  studyNotion,
  threejs,
  razorpay,
  discord,
  figma_Clone,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Programer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Development and Java Language",
    // company_name: "Starbucks",
    icon: tailwind,
    iconBg: "#383E56",
    date: "December 2022 - July 2023",
    points: [
      "Developing and maintaining web applications using HTML, Vanila CSS, Tailwind CSS.",
      "Learning basics of Java Programing Language",
    ],
  },
  {
    title: "React Js Development and DSA",
    // company_name: "Tesla",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Understanding different Data Structurs and Algorithm and solving problem on different platform like Leetcode, code studio using DSA concepts",
    ],
  },
  // {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#383E56",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //         "Developing and maintaining web applications using React.js and other related technologies.",
  //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //         "Implementing responsive design and ensuring cross-browser compatibility.",
  //         "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  // },
  // {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2023 - Present",
  //     points: [
  //         "Developing and maintaining web applications using React.js and other related technologies.",
  //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //         "Implementing responsive design and ensuring cross-browser compatibility.",
  //         "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ankan proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ankan does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ankan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "RazorPay Clone",
    description:
      "Razorpay Clone is a meticulously crafted frontend project designed to replicate the seamless user interface and a visually accurate representation of Razorpay, without backend functionality.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: razorpay,
    source_code_link: "https://github.com/AnkanHazra17/RazorPay-Clone",
    project_link: "https://razor-pay-clone-17.netlify.app",
  },
  {
    name: "Discord Clone",
    description:
      "Introducing the Discord Frontend Replica – a frontend-only recreation of the Discord messaging platform's user interface. While our project does not include any backend functionality.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: discord,
    source_code_link: "https://github.com/AnkanHazra17/Discord_Clone",
    project_link: "https://discord-clone-17.netlify.app",
  },
  {
    name: "StudyNotion",
    description:
      "StudyNotion: Revolutionize your learning. All-in-one platform for seamless note-taking, collaboration, and organization. Elevate your study game effortlessly.",
    tags: [
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: studyNotion,
    source_code_link: "https://github.com/AnkanHazra17/StudyNotion",
    project_link: "https://study-notion-e-learning.vercel.app/",
  },
  {
    name: "Figma Clone",
    description:
      "Introducing the Figma Replica – a recreation of the fully functional figma platform.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "liveBlocks",
        color: "green-text-gradient",
      },
      {
        name: "Shadcn",
        color: "orange-text-gradient",
      },
    ],
    image: figma_Clone,
    source_code_link: "https://github.com/AnkanHazra17/Figma_Clone_LiveBlocks",
    project_link: "https://figma-pro-phi.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
