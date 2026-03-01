// src/data/posts.js

const avatarUrl = "https://pbs.twimg.com/profile_images/1925208423529943040/tILDmOtW_400x400.jpg";

export const posts = [
  {
    id: 1,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Currently Building",
    },
    date: "Mar 1",
    content: `Added a "Wrecking Ball Bug Wall" to my portfolio using Matter.js.\n\nSyncing DOM elements to a 2D physics engine is a headache, but smashing UI components with a virtual wrecking ball makes it worth it. 🔨`,
    image: null,
  },
  {
    id: 2,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Deep Dive",
    },
    date: "Feb 27",
    content: `Zenith-JS (my custom JS engine) just hit 1,000 lines of C++ 🚀\n\nHandling scope chains manually gives you a whole new level of respect for what the V8 engine does under the hood.`,
    image: null,
  },
  {
    id: 3,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Late Night Hacks",
    },
    date: "Feb 25",
    content: `Finally got async/await working in my C++ runtime.\n\nWriting an event loop from scratch is humbling. Currently debugging a memory leak, running on 3 hours of sleep and pure caffeine. ☕`,
    image: null,
  },
  {
    id: 4,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Freelance",
    },
    date: "Feb 18",
    content: `Just shipped a massive update for an automotive client.\n\nBuilt a custom CRM to track electric rickshaws. Handling the real-time vehicle data pipelines in Node.js was wild.`,
    image: null,
  },
  {
    id: 5,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Backend",
    },
    date: "Feb 10",
    content: `Building MailDev has been a crash course in infrastructure.\n\nWrapping AWS SES with custom API key management. Sending emails is easy. Making the API simple for other devs? Not so much.`,
    image: null,
  },
  {
    id: 6,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "UI / UX",
    },
    date: "Feb 2",
    content: `Enterprise dashboards don't have to be ugly.\n\nBeen pushing a minimal, high-contrast aesthetic in my recent React projects. Less visual noise, more actual data.`,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop", 
  },
  {
    id: 7,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Open to Work",
    },
    date: "Jan 25",
    content: `Looking for my next full-stack role! \n\nIf you need someone who can jump from Next.js UI components to writing C++ parsers or managing AWS, let's talk. DMs are open.`,
    image: null,
  },
  {
    id: 8,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Automation",
    },
    date: "Jan 18",
    content: `Wrote a quick Python script to automate some brutal data entry for a client's sales pipeline.\n\nA 50-line script just saved 5 hours of manual clicking. Best feeling ever.`,
    image: null,
  },
  {
    id: 9,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Throwback",
    },
    date: "Jan 10",
    content: `Looking back at the codebase for 'Trekkersoul', my first React Native app.\n\nIt is entirely spaghetti code, but we all have to start somewhere. Wild to see how much my architecture has improved.`,
    image: null,
  },
  {
    id: 10,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Design Concept",
    },
    date: "Dec 28",
    content: `Mocking up a new UI concept for a train booking app.\n\nTravel sites are usually a mess of ads and pop-ups. Trying to see how clean I can make the booking flow.`,
    image: null,
  },
  {
    id: 11,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Origins",
    },
    date: "Dec 15",
    content: `Found the old repo for the Math Mock Test Engine I built in school.\n\nFiguring out how to parse 9th-grade math equations into a UI is actually what got me hooked on algorithms in the first place.`,
    image: null,
  },
  {
    id: 12,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Game Dev",
    },
    date: "Nov 30",
    content: `Started building a Slither.io clone 🐍\n\nOptimizing the WebSocket payloads so the server doesn't crash with 100+ players on screen is the real boss fight here.`,
    image: "https://cdn.dribbble.com/userupload/43779220/file/original-26a32680681c639008df8af78efdf35c.png?resize=1504x1128&vertical=center",
  },
  {
    id: 13,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Hardware",
    },
    date: "Nov 15",
    content: `Messing around with controlling physical motors directly via USB from my laptop ⚡\n\nLow-level serial communication is tricky, but making physical things move with code is magic.`,
    image: null,
  },
  {
    id: 14,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Learning",
    },
    date: "Nov 2",
    content: `Spent the weekend reading the Express.js source code.\n\nIf you want to understand how middleware actually works, stop watching tutorials and just go read the repo. It clarifies so much.`,
    image: null,
  },
  {
    id: 15,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Dev Life",
    },
    date: "Oct 20",
    content: `Nothing beats the high of finally fixing a bug that has been haunting you for 3 days.\n\nTurns out it was just a hydration mismatch in Next.js. I need a nap.`,
    image: null,
  }
];