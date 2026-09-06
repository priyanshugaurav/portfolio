// src/data/posts.js

const avatarUrl = "https://pbs.twimg.com/profile_images/2096511699386064896/vjZQhGQj_400x400.jpg";

export const posts = [
  {
    id: 1,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Project Launch",
    },
    date: "Sep 1",
    content: `OrbitForm crossed 160 active users and honestly still can't believe it.\n\nBasic idea is you drop a URL in your form's action and we take care of everything. Email delivery, spam filtering, webhooks, analytics. No backend needed. Glad people are finding it useful.`,
    image: null,
  },
  {
    id: 2,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Systems Programming",
    },
    date: "Aug 22",
    content: `NanoJS, my JS runtime built in C++, is now running this portfolio in production.\n\nBuilt the parser, AST engine and event loop from scratch. Getting async to work without V8 was properly humbling. Took a while but it works.`,
    image: null,
  },
  {
    id: 3,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Deep Dive",
    },
    date: "Aug 15",
    content: `Async/await is finally working in NanoJS.\n\nWriting an event loop from scratch makes you realize how much V8 and libuv are silently doing. Three nights of debugging memory leaks on pure caffeine. Totally worth it.`,
    image: null,
  },
  {
    id: 4,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Milestone",
    },
    date: "Aug 5",
    content: `Maths Mock Test Engine crossed 1000 visits.\n\nBuilt with React Native and Python. Timed sessions, live scoring, instant analytics. Kept it simple and mobile friendly. Good to see students actually using it.`,
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
    date: "Jul 28",
    content: `Been working on OrbitForm's email infrastructure this week.\n\nAWS SES sounds easy until you get into bounce handling, spam validation and webhook reliability. Node.js and Express holding it together pretty well.`,
    image: null,
  },
  {
    id: 6,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Freelance",
    },
    date: "Jul 18",
    content: `Shipped a CRM and business management system for an automotive client.\n\nDid everything from requirements to design, backend and deployment. React, Node.js, PostgreSQL. Seeing them actually use it for daily operations is a good feeling.`,
    image: null,
  },
  {
    id: 7,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "UI / UX",
    },
    date: "Jul 5",
    content: `Enterprise dashboards do not have to be ugly.\n\nGoing minimal and high contrast on recent React projects. Less clutter, data does the talking. Dark mode always comes first.`,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 8,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Currently Building",
    },
    date: "Mar 1",
    content: `Added a Wrecking Ball Bug Wall to the portfolio using Matter.js.\n\nSyncing DOM elements to a 2D physics engine is more annoying than it looks but watching UI components get destroyed makes it all worth it.`,
    image: null,
  },
  {
    id: 9,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Open Source",
    },
    date: "Feb 20",
    content: `NanoJS is open source now, up on GitHub.\n\nBuilt to understand how JS actually runs under the hood. If interpreters or runtime mechanics interest you, go check it out. PRs welcome.`,
    image: null,
  },
  {
    id: 10,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "College Achievement",
    },
    date: "Jan 15",
    content: `Got the College Excellence Award at St. Xavier's, Patna.\n\nFor building software that automated student result generation via web scraping. Really proud of this one. BCA 2021 to 2024 was a good ride.`,
    image: null,
  },
  {
    id: 11,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Learning",
    },
    date: "Jan 5",
    content: `Read through the Express.js source code this weekend.\n\nIf you want to actually understand middleware, skip the tutorials and read the repo. Everything made sense once I saw how the request pipeline is put together.`,
    image: null,
  },
  {
    id: 12,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Origins",
    },
    date: "Dec 15",
    content: `The Maths Mock Test Engine is what got me into algorithms in the first place.\n\nTrying to parse math questions into a proper UI during college was when coding started feeling fun. That project kind of shaped everything that came after.`,
    image: null,
  },
  {
    id: 13,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Automation",
    },
    date: "Nov 28",
    content: `Wrote a Python script to automate some painful data entry for a client.\n\nFifty lines replaced five hours of manual work every week. Best effort to value ratio I have had all year.`,
    image: null,
  },
  {
    id: 14,
    user: {
      name: "Gaurav",
      handle: "@Priyanshugrv",
      avatar: avatarUrl,
      tag: "Dev Life",
    },
    date: "Nov 10",
    content: `Finally fixed a bug that was living in my head for three days.\n\nTurns out it was a hydration mismatch in Next.js the whole time. Of course it was. Need a nap.`,
    image: null,
  }
];