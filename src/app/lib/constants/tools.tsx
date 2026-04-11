import { StackItem } from '@/app/components/ui'
import {
  SiReact,
  SiNextdotjs,
  SiSpringboot,
  SiNestjs,
  SiExpress,
  SiLaravel,
  SiTailwindcss,
  SiBootstrap,
  SiFramer,
  SiMui,
  SiJquery,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiPython,
  SiSharp,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiGithub,
  SiFigma,
  SiAndroidstudio,
  SiPostman,
  SiVercel,
  SiGooglecloud,
  SiCanva,
} from 'react-icons/si'
import { FaJava, FaCpanel } from 'react-icons/fa'
import { TbBrandReactNative } from 'react-icons/tb'
import { JSX } from 'react'

import { IconType } from 'react-icons'

const icon = (Icon: IconType) => <Icon size={15} className="text-[#8A8A82]" />

export const frameworks: StackItem[] = [
  { name: 'React', type: 'Framework', icon: icon(SiReact) },
  { name: 'Next.js', type: 'Framework', icon: icon(SiNextdotjs) },
  { name: 'React Native', type: 'Framework', icon: icon(TbBrandReactNative) },
  { name: 'Spring Boot', type: 'Framework', icon: icon(SiSpringboot) },
  { name: 'NestJS', type: 'Framework', icon: icon(SiNestjs) },
  { name: 'ExpressJS', type: 'Framework', icon: icon(SiExpress) },
  { name: 'Laravel', type: 'Framework', icon: icon(SiLaravel) },
  { name: 'Tailwind CSS', type: 'Styles', icon: icon(SiTailwindcss) },
  { name: 'Bootstrap', type: 'Styles', icon: icon(SiBootstrap) },
  { name: 'Framer Motion', type: 'Animation', icon: icon(SiFramer) },
  { name: 'Material UI', type: 'UI lib', icon: icon(SiMui) },
  { name: 'JQuery', type: 'Library', icon: icon(SiJquery) },
  { name: 'NodeJS', type: 'Runtime', icon: icon(SiNodedotjs) },
]

export const languages: StackItem[] = [
  { name: 'TypeScript', type: 'Language', icon: icon(SiTypescript) },
  { name: 'JavaScript', type: 'Language', icon: icon(SiJavascript) },
  { name: 'Java', type: 'Language', icon: icon(FaJava) },
  { name: 'PHP', type: 'Language', icon: icon(SiPhp) },
  { name: 'Python', type: 'Language', icon: icon(SiPython) },
  { name: 'C#', type: 'Language', icon: icon(SiSharp) },
  { name: 'C++', type: 'Language', icon: icon(FaCpanel) },
  { name: 'SQL', type: 'Language', icon: icon(SiPostgresql) },
]

export const databases: StackItem[] = [
  { name: 'PostgreSQL', type: 'Database', icon: icon(SiPostgresql) },
  { name: 'MongoDB', type: 'Database', icon: icon(SiMongodb) },
  { name: 'MySQL', type: 'Database', icon: icon(SiMysql) },
  { name: 'SQLite', type: 'Database', icon: icon(SiSqlite) },
  { name: 'Firebase', type: 'Database', icon: icon(SiFirebase) },
]

export const tools: StackItem[] = [
  { name: 'GitHub', type: 'Version control', icon: icon(SiGithub) },
  { name: 'Figma', type: 'Design', icon: icon(SiFigma) },
  { name: 'Android Studio', type: 'IDE', icon: icon(SiAndroidstudio) },
  { name: 'Postman', type: 'API testing', icon: icon(SiPostman) },
  { name: 'Vercel', type: 'Deploy', icon: icon(SiVercel) },
  { name: 'Google Cloud', type: 'Infra', icon: icon(SiGooglecloud) },
  { name: 'XAMPP', type: 'Dev server', icon: icon(FaCpanel) },
  { name: 'Canva', type: 'Design', icon: icon(SiCanva) },
]
