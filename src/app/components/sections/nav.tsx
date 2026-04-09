'use client'
import Link from 'next/link'
import { useState } from 'react'

const links = [
  { label: 'work', href: '#work' },
  { label: 'stack', href: '#stack' },
  { label: 'experience', href: '#experience' },
  { label: 'education', href: '#education' },
  { label: 'contact', href: '#contact' },
]

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="mb-16">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-medium tracking-widest text-[#8A8A82] uppercase">
          gian
        </span>

        <div className="hidden items-center gap-6 md:flex">
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

        <button
          className="flex flex-col items-center justify-center gap-1.25 p-1 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-5 bg-[#8A8A82] transition-all duration-200 ${
              open ? 'translate-y-1.5 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-[#8A8A82] transition-all duration-200 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-[#8A8A82] transition-all duration-200 ${
              open ? '-translate-y-1.5 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="mt-4 flex flex-col gap-1 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-[13px] text-[#8A8A82] transition-colors duration-150 hover:bg-[#242422] hover:text-[#EEEEE9]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Nav
