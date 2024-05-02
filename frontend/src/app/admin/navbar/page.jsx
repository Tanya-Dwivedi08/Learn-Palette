import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <div>
     <div className="w-full h-0 lg:w-fit flex-wrap justify-end items-center space-y-8 lg:space-y-0 lg:flex lg:h-fit md:flex-nowrap">
            <div className="mt-6 text-gray-600 dark:text-gray-300 md:-ml-4 lg:pr-4 lg:mt-0">
              <ul className="space-y-6 tracking-wide text-base lg:text-sm lg:flex lg:space-y-0">
                <li>
                  <a
                    href="#"
                    className="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <span>Features</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <span>About us</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <span>Solutions</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <span>support</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full space-y-2 gap-2 pt-6 pb-4 lg:pb-0 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] items-center flex flex-col lg:flex-row lg:space-y-0 lg:w-fit lg:border-l lg:border-t-0 lg:pt-0 lg:pl-2">

            <Link href="/teacher-login" className="w-full h-9 lg:w-fit group flex items-center relative border rounded-[--btn-border-radius] *:select-none [&>*:not(.sr-only)]:relative before:rounded-[calc(var(--btn-border-radius)-1px)] before:absolute before:inset-0 before:border before:bg-gradient-to-b *:disabled:opacity-20 disabled:text-gray-950/40 disabled:border-gray-200 disabled:bg-gray-100 disabled:*:text-gray-300 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:before:border-0 dark:before:border-t dark:before:shadow-inner dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 disabled:dark:*:text-gray-700 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none dar k:*:disabled:!text-white text-white border-gray-950 bg-gray-600 before:border-gray-600 before:from-gray-800 hover:bg-gray-900 active:bg-gray-950 dark:text-gray-950 dark:before:border-gray-200 dark:before:from-gray-200 dark:bg-white dark:before:shadow-white/10 dark:hover:bg-gray-100 dark:active:bg-gray-300 dark:active:before:from-gray-200 lg:text-sm lg:h-8 px-3 justify-center">
                <span>Teacher</span>
              </Link>
             <Link href="/student-login" className="w-full h-9 lg:w-fit group flex items-center relative border rounded-[--btn-border-radius] *:select-none [&>*:not(.sr-only)]:relative before:rounded-[calc(var(--btn-border-radius)-1px)] before:absolute before:inset-0 before:border before:bg-gradient-to-b *:disabled:opacity-20 disabled:text-gray-950/40 disabled:border-gray-200 disabled:bg-gray-100 disabled:*:text-gray-300 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:before:border-0 dark:before:border-t dark:before:shadow-inner dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 disabled:dark:*:text-gray-700 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none dar k:*:disabled:!text-white text-white border-gray-950 bg-gray-600 before:border-gray-600 before:from-gray-800 hover:bg-gray-900 active:bg-gray-950 dark:text-gray-950 dark:before:border-gray-200 dark:before:from-gray-200 dark:bg-white dark:before:shadow-white/10 dark:hover:bg-gray-100 dark:active:bg-gray-300 dark:active:before:from-gray-200 lg:text-sm lg:h-8 px-3 justify-center">
                <span>Student</span>
              </Link>
            </div>
          </div>
        </div>
     
   
  )
}

export default navbar