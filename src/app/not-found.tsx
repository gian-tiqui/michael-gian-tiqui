import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="mb-32 grid place-items-center px-7 pt-40 md:px-44 md:pt-60">
      <div className="container flex flex-col items-center">
        <h1 className="mb-6 text-7xl font-bold text-white dark:text-black">
          404
        </h1>
        <p className="mb-3 text-center text-3xl text-white dark:text-black">
          Oops something went{' '}
          <span className="font-extrabold text-red-700">wrong</span>
        </p>
        <p className="mb-10 text-center text-lg text-gray-400 dark:text-neutral-800">
          Maybe this page did not exist in the first place...
        </p>
        <Link
          href={'/'}
          className="rounded-xl border border-white px-4 py-2 font-bold text-white hover:border-gray-400 hover:text-gray-400 md:text-xl dark:border-black dark:text-black dark:hover:border-neutral-800 dark:hover:text-neutral-800"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
