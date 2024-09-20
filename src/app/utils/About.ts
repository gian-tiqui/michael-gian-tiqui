interface Education {
  year: string;
  name: string;
  link: string;
  content: string;
}

interface Experience extends Education {}

export const education: Education[] = [
  {
    name: "Sampaguita Daycare (Kinder)",
    year: "2006 - 2007",
    link: "/",
    content: "General Academics.",
  },
  {
    name: "Mater Ecclesiae School (Prepatory)",
    year: "2007 - 2008",
    link: "https://www.materecclesiaeschool.edu.ph/",
    content: "General Academics.",
  },
  {
    name: "Mater Ecclesiae School (Primary)",
    year: "2008 - 2018",
    link: "https://www.materecclesiaeschool.edu.ph/",
    content: "General Academics.",
  },
  {
    name: "Far Eastern University Alabang (Senior High School)",
    year: "2018 - 2020",
    link: "https://feualabang.edu.ph/",
    content: "General Academics.",
  },
  {
    name: "Pamantasan ng Lungsod ng Muntinlupa (Tertiary)",
    year: "2020 - 2024",
    link: "https://www.plmun.edu.ph/",
    content: "General Academics.",
  },
];

export const experience: Experience[] = [
  {
    name: "Freelance Deveoper",
    year: "April 2023 - May 2024",
    link: "/",
    content: "Free lance Programmer",
  },
  {
    name: "Avietho Digital",
    content: "Web Developer Intern",
    year: "Feb 2024 - April 2024",
    link: "https://aviethodigital.com/",
  },
  {
    name: "WestLake Medical Center",
    content: "IT Programmer",
    year: "2024 - Present",
    link: "https://westlakemed.com.ph/",
  },
];
