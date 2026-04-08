import { SectionLabel, ProjectGrid } from '../ui'
import { Project } from '../ui/ProjectGrid/ProjectGrid'

const projects: Project[] = [
  {
    name: 'City Government of Tanauan',
    description:
      'Designed in Figma and developed the official city government website. Re-developed using Next.js with WordPress plugins exposing REST endpoints.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'WordPress'],
    year: '2024',
  },
  {
    name: 'GeoFacia',
    description:
      'Events attendance tracker using biometric facial recognition. Built on Android with TensorFlow for face detection and Firebase as the backend.',
    tags: ['Android Studio', 'Java', 'TensorFlow', 'Firebase'],
    year: '2024',
  },
  {
    name: 'GeoFacia Dashboard',
    description:
      'Web dashboard designed to monitor and track all GeoFacia activity logs and attendance reports in real time.',
    tags: ['React', 'TypeScript', 'Bootstrap', 'Firebase'],
    year: '2024',
  },
  {
    name: 'Batangas.net',
    description:
      'News website for Batangas. Built the frontend with Next.js and the CMS backend with Laravel, deployed via Vercel and Hostinger.',
    tags: ['Next.js', 'Laravel', 'PHP', 'TypeScript', 'SQLite'],
    year: '2024',
  },
  {
    name: 'Batangas.net CMS',
    description:
      'Content management system powering Batangas.net. Full CRUD for articles, categories, authors, and media. Same stack as the public site.',
    tags: ['Next.js', 'Laravel', 'PHP', 'TypeScript', 'SQLite'],
    year: '2024',
  },
  {
    name: 'WMC Intranet',
    description:
      'Internal intranet for Westlake Medical Center. Designed the UI and developed with Next.js on the frontend and NestJS + PostgreSQL on the backend.',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript'],
    year: '2024 — present',
  },
  {
    name: 'Dunkin Ordering App',
    description:
      'Mobile ordering application for Dunkin built in React Native, backed by a custom Express + MongoDB API.',
    tags: ['React Native', 'ExpressJS', 'MongoDB', 'Node.js'],
    year: '2023',
  },
  {
    name: 'Dunkin App CMS',
    description:
      'CMS for managing the Dunkin mobile app — menu items, promotions, and orders — built with React and Tailwind.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    year: '2023',
  },
  {
    name: 'Booklist CMS',
    description:
      'Library management website for cataloguing and borrowing books, built with ASP.NET and a PHP/MySQL backend.',
    tags: ['ASP.NET', 'C#', 'PHP', 'MySQL', 'Bootstrap'],
    year: '2023',
  },
  {
    name: 'Urban Bistro',
    description:
      'Android ordering application for a restaurant, with a local SQLite database for offline order management.',
    tags: ['Android Studio', 'Java', 'SQLite', 'XML'],
    year: '2023',
  },
]

export function Work() {
  return (
    <section id="work" className="mb-14">
      <SectionLabel>Projects</SectionLabel>
      <p className="-mt-2 mb-5 text-[13px] leading-relaxed text-[#8A8A82]">
        Most repos and live deployments are private — shown here for reference.
      </p>
      <ProjectGrid projects={projects} />
    </section>
  )
}
