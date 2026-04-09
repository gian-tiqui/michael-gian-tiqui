import { ExperienceItem } from '@/app/types'

export const experience: ExperienceItem[] = [
  {
    date: '2025 — present',
    title: 'Front-end Developer',
    company: 'Eplayment',
    companyHref: 'https://www.eplayment.co/',
    current: true,
    bullets: [],
  },
  {
    date: '2024 — 2025',
    title: 'IT Programmer',
    company: 'Westlake Medical Center',
    companyHref: 'https://westlakemed.com.ph/',
    bullets: [
      'Built an internal HR/QM portal for publishing memos, guidelines, and procedure documents with commenting, threaded replies, and real-time notifications',
      'Implemented dashboard for IT, user and post management, account deactivation for HR, secure login, and forgot password flow',
      'Built a folder-based document system with public/private post access restricted by department or employee level',
      'Developed a ticketing platform with automated escalation via cron jobs — overdue tickets notify supervisors, then escalate to managers and executives if unresolved',
      'Added department-specific dashboards, searchable ticket knowledge base, Excel export, real-time notifications, and comment threads per ticket',
      'Built a self-service patient kiosk with a cart system and sub-carts per department for ordering diagnostics and medicines',
      'Integrated hospital directory with room lookup and full queueing system integration to redirect patients to the appropriate queue',
    ],
  },
  {
    date: 'Feb 2024 — Apr 2024',
    title: 'Web Developer Intern',
    company: 'Avietho Digital',
    companyHref: 'https://aviethodigital.com/',
    bullets: [
      'Designed and developed the City Government of Tanauan website in Figma then Next.js',
      'Integrated WordPress REST endpoints into the web application',
      'Designed the layout of Batangas.net',
      'Developed Batangas.net CMS and public website in Next.js',
      'Used GitHub for version control, Vercel and Hostinger for deployment',
    ],
  },
  {
    date: 'Apr 2023 — May 2024',
    title: 'Freelance Developer',
    company: 'Self-employed',
    bullets: [
      'Built a barber appointment web application',
      'Designed and developed an employee management website and desktop app',
      'Developed an ordering mobile application (Urban Bistro)',
      'Designed and built GeoFacia — biometric events attendance tracker',
      'Built GeoFacia Dashboard to monitor tracker activity',
      'Contributed features to a salon web app and an e-Lawyer management system',
      'Built a contact list app, a toys info management app, and a Dunkin ordering suite',
      'Contributed to an LMS mobile and web application',
    ],
  },
]
