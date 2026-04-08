import {
  Nav,
  Hero,
  Work,
  Stack,
  Experience,
  Education,
  Contact,
} from './components/sections'
import { Background } from './components/ui'

export default function Page() {
  return (
    <main className="mx-auto max-w-170 px-6 py-12">
      <Background />
      <Nav />
      <Hero />
      <Work />
      <Stack />
      <Experience />
      <Education />
      <Contact />
    </main>
  )
}
