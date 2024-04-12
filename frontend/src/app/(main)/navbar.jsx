import React from 'react'

const navbar = () => {
  return (
    <div>
     <div className="bg-gray-900">
  <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div className="relative flex items-center justify-between">
      <a
        href="/"
        aria-label="Learn Palette"
        title="Learn Palette"
        className="inline-flex items-center"
      >
        <svg
          className="w-8 text-teal-accent-400"
          viewBox="0 0 24 24"
          strokeLinejoin="round"
          strokeWidth={2}
          strokeLinecap="round"
          strokeMiterlimit={10}
          stroke="currentColor"
          fill="none"
        >
          <rect x={3} y={1} width={7} height={12} />
          <rect x={3} y={17} width={7} height={6} />
          <rect x={14} y={1} width={7} height={6} />
          <rect x={14} y={11} width={7} height={12} />
        </svg>
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
          Learn Palette
        </span>
      </a>
      <ul className="flex items-center hidden space-x-8 lg:flex">
        <li>
          <a
            href="/"
            aria-label="Home Page"
            title="Home Page"
            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
          >
           Home
          </a>
        </li>
        <li>
          <a
            href="/"
            aria-label="Our product"
            title="Feature"
            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="/"
            aria-label="Product pricing"
            title="Product pricing"
            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="/"
            aria-label="Solutions"
            title="Solutions"
            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
          >
            Solutions
          </a>
        </li>
        <li>
          <a
            href="/"
            aria-label="our support"
            title="our support"
            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
          >
            Support
          </a>
        </li>
      </ul>
      <ul className="flex items-center hidden space-x-8 lg:flex">
        <li>
          <a
            href="/"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
            title="Sign up"
          >
            Sign up
          </a>
        </li>
      </ul>
      {/* Mobile menu */}
      <div className="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
        >
          <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            />
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            />
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            />
          </svg>
        </button>
        
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default navbar