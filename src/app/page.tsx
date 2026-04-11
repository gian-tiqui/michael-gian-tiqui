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
        <FadeIn delay={0}>
          <Nav />
        </FadeIn>
        <FadeIn delay={0.1}>
          <Hero />
        </FadeIn>
        <FadeIn delay={0.2}>
          <Work />
        </FadeIn>
        <FadeIn delay={0.3}>
          <Stack />
        </FadeIn>
        <FadeIn delay={0.4}>
          <Experience />
        </FadeIn>
        <FadeIn delay={0.5}>
          <Education />
        </FadeIn>
        <FadeIn delay={0.6}>
          <Contact />
        </FadeIn>
      </main>
    </>
  )
}

export default Page
