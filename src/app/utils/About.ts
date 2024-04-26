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
      "The year 2007 was my first year at Mater Ecclesiae School, A Private Catholic School located at Villa Olympia in City of San Pedro, Laguna. The School was founded by Fr. Francesco Piccone and Mother Teresa Vallerga. The thing I could recall in my prepatory year in Mater was the boys scout activities where theres a day where we do scout activities on half day.",
  },
  {
    name: "Mater Ecclesiae School (Primary)",
    year: "2008 - 2018",
    link: "https://www.materecclesiaeschool.edu.ph/",
    content:
      "From the year 2008, That is where grade 1 starts and the teachers taught us how to read, pronounce, write word. The school also gave us diaries to write daily reminders in it. Everyday it will be checked by our Advisers if we copied what is written on the board's reminder section. During my elementary years, I was not that good listener and I always zone out during lessons. I never took subjects seriously until my SHS years. But I met a lot of good friends and built memories during those years.",
  },
  {
    name: "Far Eastern University Alabang (Senior High School)",
    year: "2018 - 2020",
    link: "https://feualabang.edu.ph/",
    content:
      "Before entering the FEU Alabang, I had to take an entrance exam first. But since I hadn't took academics seriously in the previous years, I was kind of nervous. But luckily, I passed and was able to enter FEU Alabang. I took Science, Technology, Engineering, and Mathematics (STEM). I took it because I kept on convincing myself that I want to be an Mechanical Engineer. But I knew I was not that interested in it since I haven't explored other fields. I encountered subjects like physics, chemistry, biology, and subjects related to engineering. I felt interested in physics because from what I understood from it, it can explain every motion in this world. Though I learned some concepts in SHS which I was able to utilize in my college.",
  },
  {
    name: "Pamantasan ng Lungsod ng Muntinlupa (Tertiary)",
    year: "2020 - Present",
    link: "https://www.plmun.edu.ph/",
    content:
      "So this is where everything started for me. In my first year (2020), I was introduced the Programming Subjects specifically Fundamentals of Programming. I had no background of what Programming is and I had no friends in our block. So in our Midterms Exam I didn't do well. But it pushed me to try Programming and I realized that there are a lot of things I can do and that is when I became interested in it. I had a goal in mind to collect a lot of Programming Languages. But in my third year, I realized that it was not a good idea to collect a lot of it due to different learning curves. I had my regrets of doing that and was able to do the proper learning late. But now I know what Tech Stacks to use to create different Applications. But I can also say that learning a lot of languages before helped in improving my Adaptability to different Tech Stacks.",
  },
];

export const playlist: Playlist[] = [
  {
    name: "Fresh & Chill",
    link: "https://open.spotify.com/playlist/37i9dQZF1DX5CdVP4rz81C?si=b295abfdc9d348ea",
    content: "Discover your new chill pop songs. Cover: Luke Hemmings",
  },
  {
    name: "This is Shawn Mendez",
    link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO4mwRSU?si=2be7010fbb854220",
    content: "This is Shawn Mendez. The essential Tracks, all in one playlist.",
  },
  {
    name: "This is TWICE",
    link: "https://open.spotify.com/playlist/37i9dQZF1DWYlCv3D85m6m?si=b513985dd89549ab",
    content: "One in a million! TWICE!",
  },
  {
    name: "This is LE SSERAFIM",
    link: "https://open.spotify.com/playlist/37i9dQZF1DX7pEH2GWGnSP?si=94376cc188e24b48",
    content:
      "Hear all of LE SSERAFIM's biggest and best hits in one playlist.... DODODOK!",
  },
  {
    name: "This is Marshmello",
    link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO3Adu8w?si=cfe6ae8993004214",
    content: "This is Marshmello. The essential Tracks, all in one playlist.",
  },
];

export const hobbies: Hobby[] = [
  {
    name: "Gaming",
    content:
      "When I have nothing to do, you might catch me playing Honkai Star Rail, Genshin Impact, Valheim, Valorant, or Chess.",
  },
  {
    name: "Sports",
    content: "I like playing basketball and badminton.",
  },
  {
    name: "Experiments (Programming)",
    content:
      "When I become curious on how something works, I try to visualize it and implement it using programming languages as well as using Data Structures and Algorithms if necessary. But I frequently use Java or C++ for it.",
  },
];
