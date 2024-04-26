interface Education {
  year: string;
  name: string;
  link: string;
  content: string;
}

interface Playlist {
  name: string;
  link: string;
  content: string;
}

interface Hobby {
  name: string;
  content: string;
}

export const education: Education[] = [
  {
    name: "Sampaguita Daycare (Kinder)",
    year: "2006 - 2007",
    link: "/",
    content:
      "This is the school where I entered first. It is located at 27 Lotus St, San Antonio, City of San Pedro, Laguna. This is where I learned how to draw and use crayons if I can recall correctly as well as read, speak properly, and play with other children.",
  },
  {
    name: "Mater Ecclesiae School (Prepatory)",
    year: "2007 - 2008",
    link: "https://www.materecclesiaeschool.edu.ph/",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ex massa, consequat et efficitur a, mattis laoreet nulla. Sed iaculis placerat erat id scelerisque. Sed a tristique velit. Quisque faucibus lectus ut lorem dapibus, a imperdiet augue semper. Morbi vitae tempor tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. In in odio sem. Sed vitae mollis urna, quis mattis justo. Integer tempus tellus est. Mauris ante mauris, scelerisque at vestibulum consequat, scelerisque sit amet nisi. Ut malesuada consequat ex sed suscipit.",
  },
  {
    name: "Mater Ecclesiae School (Primary)",
    year: "2008 - 2018",
    link: "https://www.materecclesiaeschool.edu.ph/",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ex massa, consequat et efficitur a, mattis laoreet nulla. Sed iaculis placerat erat id scelerisque. Sed a tristique velit. Quisque faucibus lectus ut lorem dapibus, a imperdiet augue semper. Morbi vitae tempor tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. In in odio sem. Sed vitae mollis urna, quis mattis justo. Integer tempus tellus est. Mauris ante mauris, scelerisque at vestibulum consequat, scelerisque sit amet nisi. Ut malesuada consequat ex sed suscipit.",
  },
  {
    name: "Far Eastern University Alabang (Senior High School)",
    year: "2018 - 2020",
    link: "https://feualabang.edu.ph/",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ex massa, consequat et efficitur a, mattis laoreet nulla. Sed iaculis placerat erat id scelerisque. Sed a tristique velit. Quisque faucibus lectus ut lorem dapibus, a imperdiet augue semper. Morbi vitae tempor tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. In in odio sem. Sed vitae mollis urna, quis mattis justo. Integer tempus tellus est. Mauris ante mauris, scelerisque at vestibulum consequat, scelerisque sit amet nisi. Ut malesuada consequat ex sed suscipit.",
  },
  {
    name: "Pamantasan ng Lungsod ng Muntinlupa (Tertiary)",
    year: "2020 - Present",
    link: "https://www.plmun.edu.ph/",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ex massa, consequat et efficitur a, mattis laoreet nulla. Sed iaculis placerat erat id scelerisque. Sed a tristique velit. Quisque faucibus lectus ut lorem dapibus, a imperdiet augue semper. Morbi vitae tempor tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. In in odio sem. Sed vitae mollis urna, quis mattis justo. Integer tempus tellus est. Mauris ante mauris, scelerisque at vestibulum consequat, scelerisque sit amet nisi. Ut malesuada consequat ex sed suscipit.",
  },
];

export const playlist: Playlist[] = [
  {
    name: "Fresh & Chill",
    link: "https://open.spotify.com/playlist/37i9dQZF1DX5CdVP4rz81C?si=b295abfdc9d348ea",
    content: "Discover your new chill pop songs. Cover: Luke Hemmings",
  },
  {
    name: "Today's Top Hits",

    link: "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M?si=1e6ed584512a44c0",
    content: "Hozier is on the Hottest 50!",
  },
  {
    name: "Chill Mix",
    link: "https://open.spotify.com/playlist/37i9dQZF1EVHGWrwldPRtj?si=cfc72f6f878c4e55",
    content: "lullaboy, JHIN, Henrik and more",
  },
];

export const hobbies: Hobby[] = [
  {
    name: "Gaming",
    content:
      "When I have nothing to do, you might catch me playing Honkai Star Rail, Genshin Impact, Valheim, Valorant, or Chess",
  },
  {
    name: "Sports",
    content: "I like playing basketball and badminton",
  },
  {
    name: "Trying concepts through programming",
    content:
      "When I become curious on how something works, I try to visualize it and implement it using programming languages. But I frequently use Java or C++ for it.",
  },
];
