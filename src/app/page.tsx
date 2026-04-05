import {
  Nav,
  Hero,
  Work,
  Stack,
  Experience,
  Education,
  Contact,
} from './components/sections'

export default function Page() {
  return (
    <main className="mx-auto max-w-170 px-6 py-12">
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
