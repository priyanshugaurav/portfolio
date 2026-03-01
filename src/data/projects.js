import { withBaseUrl } from "../utils/withBaseUrl";

export const projects = [
  {
    id: "shivanya-dealer",
    title: "Shivanya - Bajaj Auto Dealer Showroom",
    description: "A complete dealership management system built for Bajaj Auto showroom.",
    image: withBaseUrl("/projects/shivanya5.png"),
    tech: ["React", "Electronjs", "Node.js", "Express", "MongoDB", "Google Sheets API"],
    details: [
      {
        heading: "Overview",
        content: "Shivanya is a full-fledged showroom management solution designed for Bajaj Auto dealers. It helps in managing vehicles, sales, customers, and services efficiently."
      },
      {
        heading: "Features",
        content: "• Dealer & customer management\n• Vehicle stock & sales tracking\n• Service records\n• Reports & analytics\n• Secure authentication"
      },
      {
        heading: "Impact",
        content: "This project streamlined showroom operations, reducing manual work and improving customer handling speed by 40%."
      },
      {
        heading: "Technologies Used",
        content: "React, Electronjs, Node.js, Express, MongoDB, Google Sheets API"
      }
    ],
    gallery: [
      withBaseUrl("/projects/shivanya1.png"),
      withBaseUrl("/projects/shivanya2.png"),
      withBaseUrl("/projects/shivanya3.png"),
      withBaseUrl("/projects/shivanya4.png"),
    ],
  },
  {
    id: "zenith-js",
    title: "Zenith-JS (NanoJS) Runtime",
    description: "A custom JavaScript engine built from scratch in C++ featuring a recursive descent parser.",
    image: withBaseUrl("/projects/nanojs-cover.png"), // Update with your actual image path
    link: "https://github.com/yourusername/zenith-js", // Optional: link to repo
    tech: ["C++", "Compilers", "AST Parsing", "Systems Engineering"],
    details: [
      {
        heading: "Overview",
        content: "To deeply understand how languages work under the hood, I built my own JavaScript engine from scratch. Reaching over 1,000 lines of C++, it evaluates JS code without relying on external browser engines."
      },
      {
        heading: "Technical Architecture",
        content: "• Custom Lexer and Tokenizer\n• Recursive Descent Parser\n• Abstract Syntax Tree (AST) Evaluator\n• Manual Scope Chain & Memory Management\n• Basic support for async/await and Promises"
      },
      {
        heading: "Impact",
        content: "Building this provided a profound, low-level understanding of systems engineering, memory management, and the inner workings of production engines like V8."
      }
    ],
  },
  {
    id: "maildev",
    title: "MailDev Infrastructure",
    description: "An API-first email delivery and infrastructure service modeled after Resend.",
    image: withBaseUrl("/projects/maildev.png"), // Update with your actual image path
    link: "https://github.com/priyanshugaurav/maildev", // Optional
    tech: ["Node.js", "Express", "React", "AWS SES", "API Design"],
    details: [
      {
        heading: "Overview",
        content: "MailDev is a scalable backend service designed to simplify transactional emails for developers. It abstracts complex cloud email infrastructure into a clean, developer-friendly REST API."
      },
      {
        heading: "Features",
        content: "• Custom API key generation and secure management\n• Core delivery logic wrapped around AWS Simple Email Service (SES)\n• Developer dashboard for tracking email delivery metrics\n• High-conversion, modern SaaS landing page"
      },
      {
        heading: "Impact",
        content: "Successfully architected a robust microservice that handles secure payload validation and cloud delivery, drastically reducing the boilerplate required to send automated emails."
      }
    ],
    gallery: [
      withBaseUrl("/projects/maildev-1.png"),
      withBaseUrl("/projects/maildev-2.png"),
    ]
  },
  {
    id: "math-mock-engine",
    title: "Math Mock Test Engine",
    description: "An interactive educational platform that parses math equations into readable UI tests.",
    image: withBaseUrl("/projects/math1.png"), // Update with your actual image path
    tech: ["JavaScript", "React", "Algorithm Design", "Regex"],
    details: [
      {
        heading: "Overview",
        content: "Built during my student days, this engine was designed to take raw 9th-grade mathematical equations and dynamically render them into a clean, interactive mock test interface."
      },
      {
        heading: "Features",
        content: "• Dynamic string parsing for complex mathematical notations\n• Automated scoring and feedback loops\n• Clean, distraction-free user interface designed for focus\n• State management for tracking user test progress"
      },
      {
        heading: "Impact",
        content: "This project served as a highly useful study tool while simultaneously sparking my initial passion for parsing algorithms and complex string manipulation."
      }
    ],
    gallery: [
      withBaseUrl("/projects/math2.png"),
      withBaseUrl("/projects/math3.png"),
    ]
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    description: "A modern responsive portfolio built with React and Matter.js.",
    image: withBaseUrl("/projects/portfollio1.png"),
    link: "/",
    tech: ["React", "TailwindCSS", "Matter.js", "Vite"],
    details: [
      {
        heading: "Overview",
        content: "A highly interactive, developer-centric portfolio designed with a brutalist, monospace aesthetic. It features a unique 2D physics engine integration."
      },
      {
        heading: "Features",
        content: "• 'Wrecking Ball Bug Wall' powered by Matter.js to sync DOM elements to physics\n• Seamless Light/Dark mode toggling\n• Active log timeline for real-time status updates\n• Fully responsive, minimal Gen-Z inspired UI"
      },
    ],
    gallery: [
      withBaseUrl("/projects/portfollio2.png"),
      withBaseUrl("/projects/portfollio3.png"),
      withBaseUrl("/projects/portfollio4.png"),
    ]
  }
];