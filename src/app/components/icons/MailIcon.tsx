import { type SVGProps } from 'react'

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="1" y="3" width="14" height="10" rx="2" />
      <path d="M1 5l7 5 7-5" />
    </svg>
  )
}
