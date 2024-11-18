interface Education {
  year: string;
  name: string;
  link: string;
  content: string[];
}

interface Experience extends Education {}

export const education: Education[] = [
  {
    name: "Sampaguita Daycare (Kinder)",
    year: "2006 - 2007",
    link: "/",
    content: ["General Academics."],
  },
  {
    name: "Mater Ecclesiae School (Prepatory)",
    year: "2007 - 2008",
    link: "https://www.materecclesiaeschool.edu.ph/",
    content: ["General Academics."],
  },
  {
    name: "Mater Ecclesiae School (Primary)",
    year: "2008 - 2018",
    link: "https://www.materecclesiaeschool.edu.ph/",
    content: ["General Academics."],
  },
  {
    name: "Far Eastern University Alabang (Senior High School)",
    year: "2018 - 2020",
    link: "https://feualabang.edu.ph/",
    content: ["General Academics."],
  },
  {
    name: "Pamantasan ng Lungsod ng Muntinlupa (Tertiary)",
    year: "2020 - 2024",
    link: "https://www.plmun.edu.ph/",
    content: ["General Academics."],
  },
];

export const experience: Experience[] = [
  {
    name: "Freelance Developer",
    year: "April 2023 - May 2024",
    link: "/",
    content: [
      "Designed and developed a Barber Appointer Web Application",
      "Designed and developed a Employee Management Website for managing employee details",
      "Developed an Ordering Mobile Application",
      "Designed and Developed the Events Attendance Tracker App using Biometrics",
      "Designed and developed Dashboard Application to track activities in the Events Attendance Tracker App",
      "Contributed to a Salon Web Application to add new features",
      "Designed and developed a Contact list app that manages contact info",
      "Designed and Developed a Employee Management Desktop App",
      "Contributed to a LMS Mobile and Web Application",
      "Designed and developed a toys info management web application",
      "Contribnuted to a E-lawyer ManagementSystem to add new features (chat feature)",
    ],
  },
  {
    name: "Avietho Digital - Web Developer Intern",
    content: [
      "Designed the new website of City Government of Tanauan using figma",
      "Developed and implemented the design of the City Government of Tanauan",
      "Utilized wordpress plugins to expose the required endpoints to be integrated to the web application",
      "Re-developed the City Government of Tanauan using NextJs",
      "Desigend the layout of BATANGAS.NET",
      "Developed BATNAGAS.NET CMS and Website using NextJs",
      "Utilized github for version controlof the project",
      "Used vercel and hostinger for deployment",
    ],
    year: "Feb 2024 - April 2024",
    link: "https://aviethodigital.com/",
  },
  {
    name: "Westlake Medical Center - IT Programmer",
    content: [
      "Designed the WMC Intranet",
      "Developed the WMC Intranet using NextJs, NestJs, and PostgreSQL",
    ],
    year: "2024 - Present",
    link: "https://westlakemed.com.ph/",
  },
];
