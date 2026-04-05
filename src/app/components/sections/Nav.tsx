import Link from 'next/link'

const links = [
  { label: 'work', href: '#work' },
  { label: 'stack', href: '#stack' },
  { label: 'experience', href: '#experience' },
  { label: 'education', href: '#education' },
  { label: 'contact', href: '#contact' },
]

export function Nav() {
  return (
    <nav className="mb-16 flex items-center justify-between">
      <span className="text-[13px] font-medium tracking-widest text-[#8A8A82] uppercase">
        gian
      </span>
      <div className="flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[13px] text-[#8A8A82] transition-colors duration-150 hover:text-[#EEEEE9]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
