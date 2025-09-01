// src/data/posts.js
import { withBaseUrl } from "../utils/withBaseUrl";

export const posts = [
  {
    id: 1,
    user: {
      name: "Priyanshu Gaurav",
      handle: "@Priyanshugrv",
      avatar:
        "https://pbs.twimg.com/profile_images/1925208423529943040/tILDmOtW_400x400.jpg",
    },
    date: "Sep 1",
    content: `Building my own Node.js-like runtime from scratch in C++ \nIt's crazy how much goes into a JS engine , tokenizer, parser, VM, the works.`,
    image: null,
  },
  {
    id: 2,
    user: {
      name: "Priyanshu Gaurav",
      handle: "@Priyanshugrv",
      avatar:
        "https://pbs.twimg.com/profile_images/1925208423529943040/tILDmOtW_400x400.jpg",
      tag: "Build in Public",
    },
    date: "Aug 31",
    content: `Started working on a Slither.io remake 🐍\nThis time with better visuals, smooth gameplay, and a more professional look.`,
    image:
      "https://cdn.dribbble.com/userupload/43779220/file/original-26a32680681c639008df8af78efdf35c.png?resize=1504x1128&vertical=center",
  },
  {
    id: 3,
    user: {
      name: "Priyanshu Gaurav",
      handle: "@Priyanshugrv",
      avatar:
        "https://pbs.twimg.com/profile_images/1925208423529943040/tILDmOtW_400x400.jpg",
      tag: "C and Assembly Developers",
    },
    date: "Aug 30",
    content: `Experimenting with controlling motors directly via USB from my laptop ⚡\nThinking of making some fun DIY videos around this.`,
    image: null,
  },
];
