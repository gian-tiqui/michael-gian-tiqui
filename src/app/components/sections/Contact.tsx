import { links } from '@/app/lib/constants'
import { SectionLabel } from '../ui'

const Contact = () => {
  return (
    <section id="contact" className="mb-14">
      <SectionLabel>Contact</SectionLabel>
      <p className="mb-4 max-w-105 text-[13px] leading-relaxed text-[#8A8A82]">
        Feel free to reach out — always open to interesting projects and
        opportunities.
      </p>
      <div className="flex flex-wrap gap-2">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-[#2E2E2B] bg-[#242422] px-3.5 py-2 text-[13px] text-[#8A8A82] transition-all duration-150 hover:border-[#4A4A46] hover:text-[#EEEEE9]"
          >
            <Icon className="h-3.5 w-3.5 shrink-0" />
            {label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
