import { ArrowUpRightIcon, DownloadIcon } from '../icons'
import { Badge, Button } from '../ui'

export function Hero() {
  return (
    <section className="mb-16">
      <p className="mb-2 text-[13px] text-[#8A8A82]">
        Hello there 👋, my name is
      </p>
      <h1 className="mb-4 text-[40px] leading-[1.15] font-medium tracking-[-0.02em] text-[#F2F2EE]">
        Gian.
      </h1>

      <p className="mb-7 max-w-125 text-[15px] leading-relaxed text-[#8A8A82]">
        I create things on the web and mobile. I find it fun learning new
        concepts, libraries, and frameworks which I can utilize in developing
        different applications.
      </p>

      <div className="flex flex-wrap gap-2.5">
        <Button
          as="a"
          href="#work"
          variant="primary"
          iconRight={<ArrowUpRightIcon className="h-3.5 w-3.5" />}
        >
          View projects
        </Button>
        <Button
          as="a"
          href="/cv.pdf"
          variant="secondary"
          iconRight={<DownloadIcon className="h-3.5 w-3.5" />}
        >
          Download CV
        </Button>
      </div>
    </section>
  )
}
