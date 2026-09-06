import { withBaseUrl } from "../utils/withBaseUrl";

export const projects = [
  {
    id: "shivanya-dealer",
    title: "Shivanya - Bajaj Auto Dealer Showroom",
    description: "A complete dealership management system built for a real Bajaj Auto showroom, handling sales, stock, and customer ops.",
    image: withBaseUrl("/projects/shivanya5.png"),
    link: "https://github.com/priyanshugaurav/shivanya",
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
    title: "NanoJS Runtime",
    description: "A custom JavaScript runtime built from scratch in C++, with its own parser, AST evaluator, and event loop. Powers this portfolio in production.",
    image: withBaseUrl("/projects/nanojs-cover.png"),
    link: "https://github.com/priyanshugaurav/nanojs",
    tech: ["C++", "Compilers", "AST Parsing", "Systems Engineering"],
    details: [
      {
        heading: "Overview",
        content: "Built to understand how JavaScript actually executes. NanoJS is a working JS runtime written entirely in C++ with no reliance on V8 or any browser engine. It runs real JS code and even powers this portfolio in production."
      },
      {
        heading: "Technical Architecture",
        content: "Custom Lexer and Tokenizer, Recursive Descent Parser, Abstract Syntax Tree Evaluator, Manual Scope Chain and Memory Management, and basic async/await support."
      },
      {
        heading: "Impact",
        content: "Gave me a deep, hands-on understanding of how parsers, evaluators, and event loops actually work at a systems level. The kind of thing no tutorial teaches."
      }
    ],
  },
  {
    id: "orbitform",
    title: "OrbitForm",
    description: "A serverless form backend SaaS. Drop a URL in your form's action and we handle email delivery, spam filtering, webhooks and analytics. 160+ active users.",
    image: withBaseUrl("/projects/maildev.png"),
    link: "https://orbitform.space",
    tech: ["Node.js", "Express", "React", "AWS SES", "PostgreSQL", "API Design"],
    details: [
      {
        heading: "Overview",
        content: "OrbitForm lets developers connect HTML forms to a backend without writing any server code. Drop a single URL into your form's action attribute and get email delivery, spam protection, webhook support, and analytics out of the box."
      },
      {
        heading: "Features",
        content: "Serverless form submission handling, AWS SES for reliable email delivery, spam filtering and validation, webhook support, a developer dashboard for submission analytics, and a clean landing page at orbitform.space."
      },
      {
        heading: "Impact",
        content: "160+ active users since launch. Unlimited emails on the free tier with zero backend setup required. Built and maintained solo as a production SaaS."
      }
    ],
    gallery: [
      withBaseUrl("/projects/maildev-1.png"),
      withBaseUrl("/projects/maildev-2.png"),
    ]
  },
  {
    id: "math-mock-engine",
    title: "Mathematics Mock Test Engine",
    description: "A mobile-first competitive exam prep platform with timed tests, live scoring and instant analytics. Crossed 1000 visits.",
    image: withBaseUrl("/projects/math1.png"),
    link: "https://github.com/priyanshugaurav/math-mock-engine",
    tech: ["React Native", "Python", "JavaScript", "Algorithm Design", "Regex"],
    details: [
      {
        heading: "Overview",
        content: "Built for students preparing for competitive exams. The engine parses math questions and renders them as clean, timed test sessions on mobile. Designed to be distraction-free and fast."
      },
      {
        heading: "Features",
        content: "Timed exam sessions with auto-submit, state-managed scoring system with instant feedback, performance analytics after each session, and a mobile-first UI optimized for low-latency usage."
      },
      {
        heading: "Impact",
        content: "Crossed 1000 user visits. This was also the project that first got me interested in parsing algorithms and string manipulation, which eventually led to building NanoJS."
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