import { withBaseUrl } from "../utils/withBaseUrl"

export const projects = [
   {
    id: "shivanya-dealer",
    title: "Shivanya - Bajaj Auto Dealer Showroom",
    description: "A complete dealership management system built for Bajaj Auto showroom.",
    image: withBaseUrl("/projects/shivanya5.png"),
    tech: ["React" , "Electronjs" , "Node.js" , "Express" , "MongoDB" , "Google Sheets API"],
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
        content: "React , Electronjs , Node.js , Express , MongoDB , Google Sheets API"
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
    id: "portfolio-site",
    title: "Portfolio Website",
    description: "A modern responsive portfolio built with React.",
    image: withBaseUrl("/projects/portfollio1.png"),
    link: "/",
    tech: ["React", "TailwindCSS", "Vite"],
    details: [
      {
        heading: "Overview",
        content: "This project showcases my personal portfolio with animations and blog-style details."
      },
      {
        heading: "Features",
        content: "Dark mode, animations, blog section, project showcase, and contact form."
      },
    ],
    gallery: [
      withBaseUrl("/projects/portfollio2.png"),
      withBaseUrl("/projects/portfollio3.png"),
      withBaseUrl("/projects/portfollio4.png"),
    ]
  },
];
