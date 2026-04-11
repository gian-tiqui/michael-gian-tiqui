import { FadeIn } from './components/motion'
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

const Page = () => {
  return (
    <>
      <Background />
      <main className="relative mx-auto max-w-170 px-6 py-12">
        <FadeIn>
          <Nav />
        </FadeIn>
        <FadeIn>
          <Hero />
        </FadeIn>
        <FadeIn>
          <Work />
        </FadeIn>
        <FadeIn>
          <Stack />
        </FadeIn>
        <FadeIn>
          <Experience />
        </FadeIn>
        <FadeIn>
          <Education />
        </FadeIn>
        <FadeIn>
          <Contact />
        </FadeIn>
      </main>
    </>
  )
}

export default Page
