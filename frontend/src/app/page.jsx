import Link from 'next/link'
import React from 'react'

const  Home = () => {
  return (
    <div>
      <>

  <header>
    <nav className="fixed overflow-hidden z-20 w-full bg-white/80 dark:bg-gray-950/0 dark:shadow-md rounded-b-lg dark:shadow-gray-950/10 border-b border-[--ui-light-border-color] border-x dark:border-[--ui-dark-border-color] backdrop-blur-2xl">
      <div className="px-6 m-auto max-w-6xl 2xl:px-0">
        <div className="flex flex-wrap items-center justify-between py-2 sm:py-4">
          <div className="w-full items-center flex justify-between lg:w-auto">
         
            <div className="flex lg:hidden">
              <button
                aria-label="humburger"
                id="menu"
                className="relative border bordeer-gray-950/30 dark:border-white/20 size-9 rounded-full transition duration-300 active:scale-95"
              >
                <div
                  aria-hidden="true"
                  id="line1"
                  className="m-auto h-[1.5px] w-4 rounded bg-gray-900 transition duration-300 dark:bg-gray-300"
                />
                <div
                  aria-hidden="true"
                  id="line2"
                  className="m-auto mt-1.5 h-[1.5px] w-4 rounded bg-gray-900 transition duration-300 dark:bg-gray-300"
                />
              </button>
            </div>
          </div>
          <div className="w-full h-0 lg:w-fit flex-wrap justify-end items-center space-y-8 lg:space-y-0 lg:flex lg:h-fit md:flex-nowrap">
            <div className="mt-6 text-gray-600 dark:text-gray-300 md:-ml-4 lg:pr-4 lg:mt-0">
              <ul className="space-y-6 tracking-wide text-base lg:text-sm lg:flex lg:space-y-0">
                <li>
                  <a
                    href="/"
                    className="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <span> Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"

                  className="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <span>Contact</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/feedback"
                    className="block md:px-4 transition hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <span>feedback</span>
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
      </div>
    </nav>
  </header>
  <main className="overflow-hidden">
    <section className="relative">
      <div className="relative pt-24 lg:pt-28">
        <div className="mx-auto px-6 max-w-7xl md:px-12">
          <div className="text-center  sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
            <a
              href="/about"
              className="border mb-4 w-fit mx-auto flex justify-between items-center transition duration-200 rounded-[--annonce-border-radius] border-[--ui-light-border-color] hover:border-[--ui-light-border-hover-color] dark:border-[--ui-dark-border-color] dark:hover:border-[--ui-dark-border-hover-color] p-1 group gap-2"
            >
              <span className="block text-sm px-2 py-0.5  rounded-[calc(var(--annonce-border-radius)-0.375rem)] text-white bg-primary-600">
                New
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex gap-6">
                Introducing Learn Palette!
                <div className="flex items-center -space-x-3 group-hover:-translate-x-1 transition-transform duration-300">
                  <span className="w-2.5 translate-y-[-0.3px] -translate-x-px opacity-0 h-[1.5px] rounded bg-gray-950 dark:bg-white origin-left scale-x-0 transition duration-300 group-hover:opacity-100 group-hover:scale-x-100" />
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-950 dark:text-blue-translate-x-2 transition duration-300 group-hover:translate-x-px"
                    fill="none"
                    viewBox="0 0 20 20"
                    stroke="currentColor"
                    strokeWidth={2}
                  
                    

                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </span>
            </a>
            {/* <h1 className="mt-8 text-wrap text-4xl md:text-5xl font-semibold text-gray-950 dark:text-white xl:text-5xl xl:[line-height:1.125]">
              Revolutionizing Collaboration:<br className="hidden sm:block" /> "The Virtual WhiteBoard Experiences."
             
            </h1> */}
            <>
  <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl">
    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-400 from-sky-300">
      LEARN PALETTE
    </span>{" "}</h1>
    <p className="mb-3 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl lg:text-5xl">
    Revolutionizing Collaboration:
    </p>
  
  <p className="text-lg font-normal text-grey-50 lg:text-xl dark:text-white-100">
  "The Virtual WhiteBoard Experiences."
  </p>
</>

            <p className="text-wrap mx-auto mt-8 max-w-2xl text-lg text-gray-700 dark:text-gray-300 hidden sm:block">
              
            </p>
            <p className="text-wrap mx-auto mt-6 max-w-2xl text-gray-700 dark:text-gray-300 sm:hidden">
             
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4">
              <div className="p-1 rounded-[calc(var(--btn-border-radius)+4px)] bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
                <a
                  href="\student-login" 
                  className="*:select-none dark:shadow-primary-500/10 *:disabled:opacity-20 disabled:*:text-gray-300 disabled:dark:*:text-gray-700 dark:*:disabled:!text-white group relative z-[1] flex h-11 items-center justify-center gap-1.5 rounded-[--btn-border-radius] border border-primary-600 bg-primary-500 px-4 text-base text-white shadow-md shadow-primary-200 before:absolute before:inset-0 before:rounded-[calc(var(--btn-border-radius)-1px)] before:border before:border-primary-500 before:bg-gradient-to-b before:from-primary-600 hover:bg-primary-600 active:bg-primary-700 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-950/40 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:bg-primary-600 dark:before:border-0 dark:before:border-t dark:before:border-primary-400 dark:before:shadow-inner dark:before:shadow-white/10 dark:hover:bg-primary-700 dark:active:bg-primary-800 dark:active:before:from-primary-700 dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none [&>*:not(.sr-only)]:relative"
                >
                  <svg
                    className="size-5 relative"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="opacity-20 dark:opacity-50"
                      d="M7.40705 15L5.10627 16.7375C5.0234 16.8039 4.92499 16.848 4.82033 16.8658C4.71567 16.8836 4.6082 16.8744 4.50806 16.8392C4.40793 16.8039 4.31842 16.7437 4.24798 16.6643C4.17755 16.5849 4.12851 16.4888 4.10549 16.3852L3.13986 12.0391C3.11906 11.9458 3.11993 11.8489 3.14241 11.756C3.16489 11.6631 3.20839 11.5766 3.26955 11.5031L5.63752 8.66484C5.5469 10.4883 5.99221 12.6117 7.40705 15ZM16.7305 11.5031L14.3625 8.66484C14.4571 10.4883 14.0078 12.6117 12.593 15L14.8938 16.7375C14.9766 16.8039 15.075 16.848 15.1797 16.8658C15.2844 16.8836 15.3918 16.8744 15.492 16.8392C15.5921 16.8039 15.6816 16.7437 15.7521 16.6643C15.8225 16.5849 15.8715 16.4888 15.8946 16.3852L16.8602 12.0391C16.881 11.9458 16.8801 11.8489 16.8576 11.756C16.8351 11.6631 16.7917 11.5766 16.7305 11.5031Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.875 17.5C11.875 17.6658 11.8092 17.8247 11.6919 17.9419C11.5747 18.0591 11.4158 18.125 11.25 18.125H8.75C8.58424 18.125 8.42527 18.0591 8.30806 17.9419C8.19085 17.8247 8.125 17.6658 8.125 17.5C8.125 17.3342 8.19085 17.1753 8.30806 17.0581C8.42527 16.9408 8.58424 16.875 8.75 16.875H11.25C11.4158 16.875 11.5747 16.9408 11.6919 17.0581C11.8092 17.1753 11.875 17.3342 11.875 17.5ZM10 8.75C10.1854 8.75 10.3667 8.69501 10.5208 8.592C10.675 8.48899 10.7952 8.34257 10.8661 8.17126C10.9371 7.99996 10.9557 7.81146 10.9195 7.6296C10.8833 7.44774 10.794 7.2807 10.6629 7.14959C10.5318 7.01847 10.3648 6.92919 10.1829 6.89301C10.001 6.85684 9.81254 6.8754 9.64123 6.94636C9.46993 7.01732 9.32351 7.13748 9.2205 7.29165C9.11748 7.44582 9.0625 7.62708 9.0625 7.8125C9.0625 8.06114 9.16127 8.2996 9.33709 8.47541C9.5129 8.65123 9.75136 8.75 10 8.75ZM17.4703 12.1742L16.5047 16.5203C16.4589 16.7267 16.3615 16.9181 16.2216 17.0766C16.0817 17.2351 15.9039 17.3555 15.7048 17.4266C15.5057 17.4977 15.2918 17.5172 15.0832 17.4831C14.8745 17.4491 14.6779 17.3627 14.5117 17.232L12.3836 15.625H7.61797L5.48828 17.232C5.3221 17.3627 5.12549 17.4491 4.91684 17.4831C4.70819 17.5172 4.49431 17.4977 4.29522 17.4266C4.09613 17.3555 3.91832 17.2351 3.77842 17.0766C3.63853 16.9181 3.54112 16.7267 3.49531 16.5203L2.52969 12.1742C2.48873 11.9877 2.4908 11.7943 2.53574 11.6087C2.58068 11.4231 2.66731 11.2502 2.78906 11.1031L5.02031 8.42656C5.0952 7.44292 5.32102 6.47666 5.68984 5.56172C6.69766 3.03515 8.50234 1.45 9.23437 0.885935C9.45348 0.716157 9.72281 0.624023 10 0.624023C10.2772 0.624023 10.5465 0.716157 10.7656 0.885935C11.4953 1.45 13.3023 3.03515 14.3102 5.56172C14.679 6.47666 14.9048 7.44292 14.9797 8.42656L17.2109 11.1031C17.3327 11.2502 17.4193 11.4231 17.4643 11.6087C17.5092 11.7943 17.5113 11.9877 17.4703 12.1742ZM7.76797 14.375H12.232C13.882 11.4422 14.1906 8.63437 13.1492 6.025C12.2305 3.72187 10.507 2.26562 10 1.875C9.49141 2.26562 7.76797 3.72187 6.84922 6.025C5.80-937 8.63437 6.11797 11.4422 7.76797 14.375ZM6.59609 14.832C5.75495 13.3034 5.24453 11.801 5.06484 10.325L3.75 11.9031L4.71562 16.25L4.72969 16.2398L6.59609 14.832ZM16.25 11.9031L14.9352 10.325C14.757 11.7979 14.2477 13.3003 13.407 14.832L15.2703 16.2383L15.2844 16.2484L16.25 11.9031Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-nowrap">Start Learning</span>
                </a>
              </div>
              
            </div>
          </div>
          <div className="-mx-6 relative mt-8 sm:mt-12 max-w-xl sm:mx-auto">
            <div className="absolute inset-0 -top-8 left-1/2 -z-20 h-56 w-full -translate-x-1/2 dark:opacity-10 [background-image:linear-gradient(to_bottom,transparent_98%,theme(colors.gray.200/75%)_98%),linear-gradient(to_right,transparent_94%,_theme(colors.gray.200/75%)_94%)] [background-size:16px_35px] [mask:radial-gradient(black,transparent_95%)]" />
            <div className="absolute top-12 inset-x-0 w-2/3 h-1/3 -z-[1] rounded-full bg-primary-300 dark:bg-white/10 mx-auto blur-3xl" />
            <div className="swiper proofSlides pb-6">
           
              <div className="swiper-pagination -mb-3 *:!rounded-lg *:!w-14 *:!h-0.5" />
            </div>
          </div>
        </div>
        <div className="md:block hidden w-1/2">
          <img
            className="rounded-m min-w-[900px] block mx-auto"
            src=""
            alt=""
          />
        </div>
      </div>
    </section>
    <section>
      <div className="pt-36">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="relative">
            <div className="relative z-10 grid gap-3 grid-cols-6">
              <div className="col-span-full lg:col-span-2 overflow-hidden flex relative p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]">
                <div className="size-fit m-auto relative">
                  <div className="relative h-24 w-56 flex items-center">
                    <svg
                      className="absolute inset-0 size-full text-gray-400 dark:text-gray-600 pt-1/2"
                      viewBox="0 0 254 104"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="w-fit block mx-auto text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary-300 to-accent-400 dark:from-primary-300 dark:to-accent-300">
                     
                    </span>
                  </div>
                  <h2 className="mt-6 text-center font-semibold text-gray-950 dark:text-white text-xl">
                    Customizable
                  </h2>
                  
                 
                </div>
              </div>
              <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-[--card-p-4 ] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]">
                <div>
                  <div className="relative aspect-square rounded-full size-32 flex border mx-auto dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                    <svg
                      className="w-24 m-auto p-4 h-fit"
                      viewBox="0 0 212 143"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="text-gray-400 dark:text-gray-600"
                        d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542ZM126.188 142.656C113.91 139.587 103.875 133.476 96.0834 124.325C88.2917 115.173 84.3959 103.988 84.3959 90.7708C84.3959 84.8681 86.5209 79.9097 90.7709 75.8958C95.0209 71.8819 100.156 69.875 106.177 69.875C112.198 69.875 117.333 71.8819 121.583 75.8958C125.833 79.9097 127.958 84.8681 127.958 90.7708C127.958 94.6667 129.434 97.9439 132.385 100.602C135.337 103.261 138.819 104.588 142.833 104.583C146.847 104.583 150.271 103.256 153.104 100.602C155.938 97.9486 157.354 94.6714 157.354 90.7708C157.354 77.0764 152.337 65.566 142.302 56.2396C132.267 46.9132 120.285 42.25 106.354 42.25C92.4237 42.25 80.441 46.9132 70.4063 56.2396C60.3716 65.566 55.3542 77.0174 55.3542 90.5937C55.3542 93.4271 55.621 96.9687 56.1546 101.219C56.6882 105.469 57.9562 110.427 59.9584 116.094C60.3125 117.156 60.2842 118.101 59.8734 118.927C59.4625 119.753 58.7825 120.344 57.8334 120.698C56.8889 121.052 55.9752 121.024 55.0921 120.613C54.2091 120.202 53.5881 119.522 53.2292 118.573C51.4584 113.969 50.1905 109.395 49.4255 104.853C48.6605 100.31 48.2756 95.6158 48.2709 90.7708C48.2709 75.0694 53.9682 61.9062 65.363 51.2812C76.7577 40.6562 90.3624 35.3437 106.177 35.3437C122.115 35.3437 135.809 40.6562 147.26 51.2812C158.712 61.9062 164.438 75.0694 164.438 90.7708C164.438 96.6736 162.343 101.601 158.155 105.554C153.966 109.506 148.859 111.485 142.833 111.49C136.813 111.49 131.649 109.513 127.342 105.561C123.035 101.608 120.88 96.6783 120.875 90.7708C120.875 86.875 119.43 83.5978 116.54 80.9392C113.65 78.2805 110.196 76.9536 106.177 76.9583C102.163 76.9583 98.7089 78.2876 95.8142 80.9462C92.9195 83.6049 91.4745 86.8797 91.4792 90.7708C91.4792 102.222 94.8745 111.785 101.665 119.458C108.456 127.132 117.22 132.503 127.958 135.573C129.021 135.927 129.729 136.517 130.083 137.344C130.438 138.17 130.497 139.056 130.26 140C130.024 140.826 129.552 141.535 128.844 142.125C128.135 142.715 127.25 142.892 126.188 142.656ZM67.0417 18.3437C66.0973 18.934 65.1528 19.0828 64.2084 18.79C63.2639 18.4972 62.5556 17.8762 62.0834 16.9271C61.6112 15.9826 61.4931 15.1279 61.7292 14.3629C61.9653 13.5979 62.5556 12.9179 63.5 12.3229C70.1112 8.78125 77.0174 6.06597 84.2188 4.17708C91.4202 2.28819 98.7396 1.34375 106.177 1.34375C113.733 1.34375 121.111 2.25986 128.313 4.09208C135.514 5.92431 142.479 8.54986 149.208 11.9687C150.271 12.559 150.892 13.2674 151.071 14.0937C151.251 14.9201 151.161 15.7465 150.802 16.5729C150.448 17.3993 149.858 18.0486 149.031 18.5208C148.205 18.9931 147.201 18.934 146.021 18.3437C139.764 15.1563 133.299 12.7078 126.627 10.9983C119.954 9.28889 113.138 8.43181 106.177 8.42708C99.3299 8.42708 92.6007 9.22514 85.9896 10.8212C79.3785 12.4174 73.0625 14.9249 67.0417 18.3437ZM87.9375 140.177C80.9723 132.858 75.6314 125.392 71.915 117.78C68.1987 110.167 66.3381 101.164 66.3334 90.7708C66.3334 80.0278 70.2292 70.9658 78.0209 63.585C85.8125 56.2042 95.198 52.5161 106.177 52.5208C117.156 52.5208 126.601 56.2112 134.51 63.5921C142.42 70.9729 146.375 80.0325 146.375 90.7708C146.375 91.8333 146.052 92.6904 145.405 93.3421C144.758 93.9937 143.901 94.3172 142.833 94.3125C141.889 94.3125 141.063 93.989 140.354 93.3421C139.646 92.6951 139.292 91.8381 139.292 90.7708C139.292 81.9167 136.014 74.5099 129.46 68.5504C122.906 62.591 115.145 59.6089 106.177 59.6042C97.2049 59.6042 89.503 62.5862 83.0713 68.5504C76.6396 74.5146 73.4214 81.9214 73.4167 90.7708C73.4167 100.333 75.0695 108.451 78.375 115.123C81.6806 121.796 86.5209 128.494 92.8959 135.219C93.6042 135.927 93.9584 136.753 93.9584 137.698C93.9584 138.642 93.6042 139.469 92.8959 140.177C92.1875 140.885 91.3612 141.24 90.4167 141.24C89.4723 141.24 88.6459 140.885 87.9375 140.177ZM141.417 128.135C130.91 128.135 121.789 124.594 114.054 117.51C106.319 110.427 102.454 101.514 102.458 90.7708C102.458 89.8264 102.784 89 103.436 88.2917C104.088 87.5833 104.942 87.2292 106 87.2292C107.063 87.2292 107.92 87.5833 108.571 88.2917C109.223 89 109.546 89.8264 109.542 90.7708C109.542 99.625 112.729 106.885 119.104 112.552C125.479 118.219 132.917 121.052 141.417 121.052C142.125 121.052 143.129 120.993 144.427 120.875C145.726 120.757 147.083 120.58 148.5 120.344C149.563 120.108 150.479 120.256 151.248 120.79C152.018 121.324 152.519 122.119 152.75 123.177C152.986 124.122 152.809 124.948 152.219 125.656C151.629 126.365 150.861 126.837 149.917 127.073C147.792 127.663 145.934 127.989 144.342 128.05C142.751 128.112 141.776 128.14 141.417 128.135Z"
                        fill="currentColor"
                      />
                      <g clipPath="url(#clip0_0_1)">
                        <path
                          d="M44.0209 55.3542C43.1945 54.7639 42.6916 54.0272 42.5121 53.1442C42.3327 52.2611 42.5995 51.345 43.3125 50.3958C50.632 40.3611 59.812 32.5694 70.8525 27.0208C81.8931 21.4722 93.668 18.6979 106.177 18.6979C118.691 18.6979 130.497 21.3849 141.594 26.7587C152.691 32.1326 161.958 39.8936 169.396 50.0417C170.222 51.1042 170.489 52.0486 170.196 52.875C169.904 53.7014 169.401 54.4097 168.688 55C167.979 55.5903 167.153 55.8571 166.208 55.8004C165.264 55.7437 164.438 55.2408 163.729 54.2917C157.236 45.0833 148.885 38.0307 138.675 33.1337C128.466 28.2368 117.633 25.786 106.177 25.7812C94.7257 25.7812 83.9827 28.2321 73.948 33.1337C63.9132 38.0354 55.5903 45.0881 48.9792 54.2917C48.2709 55.3542 47.4445 55.9444 46.5 56.0625C45.5556 56.1806 44.7292 55.9444 44.0209 55.3542ZM126.188 142.656C113.91 139.587 103.875 133.476 96.0834 124.325C88.2917 115.173 84.3959 103.988 84.3959 90.7708C84.3959 84.8681 86.5209 79.9097 90.7709 75.8958C95.0209 71.8819 100.156 69.875 106.177 69.875C112.198 69.875 117.333 71.8819 121.583 75.8958C125.833 79.9097 127.958 84.8681 127.958 90.7708C127.958 94.6667 129.434 97.9439 132.385 100.602C135.337 103.261 138.819 104.588 142.833 104.583C146.847 104.583 150.271 103.256 153.104 100.602C155.938 97.9486 157.354 94.6714 157.354 90.7708C157.354 77.0764 152.337 65.566 142.302 56.2396C132.267 46.9132 120.285 42.25 106.354 42.25C92.4237 42.25 80.441 46.9132 70.4063 56.2396C60.3716 65.566 55.3542 77.0174 55.3542 90.5937C55.3542 93.4271 55.621 96.9687 56.1546 101.219C56.6882 105.469 57.9562 110.427 59.9584 116.094C60.3125 117.156 60.2842 118.101 59.8734 118.927C59.4625 119.753 58.7825 120.344 57.8334 120.698C56.8889 121.052 55.9752 121.024 55.0921 120.613C54.2091 120.202 53.5881 119.522 53.2292 118.573C51.4584 113.969 50.1905 109.395 49.4255 104.853C48.6605 100.31 48.2756 95.6158 48.2709 90.7708C48.2709 75.0694 53.9682 61.9062 65.363 51.2812C76.7577 40.6562 90.3624 35.3437 106.177 35.3437C122.115 35.3437 135.809 40.6562 147.26 51.2812C158.712 61.9062 164.438 75.0694 164.438 90.7708C164.438 96.6736 162.343 101.601 158.155 105.554C153.966 109.506 148.859 111.485 142.833 111.49C136.813 111.49 131.649 109.513 127.342 105.561C123.035 101.608 120.88 96.6783 120.875 90.7708C120.875 86.875 119.43 83.5978 116.54 80.9392C113.65 78.2805 110.196 76.9536 106.177 76.9583C102.163 76.9583 98.7089 78.2876 95.8142 80.9462C92.9195 83.6049 91.4745 86.8797 91.4792 90.7708C91.4792 102.222 94.8745 111.785 101.665 119.458C108.456 127.132 117.22 132.503 127.958 135.573C129.021 135.927 129.729 136.517 130.083 137.344C130.438 138.17 130.497 139.056 130.26 140C130.024 140.826 129.552 141.535 128.844 142.125C128.135 142.715 127.25 142.892 126.188 142.656ZM67.0417 18.3437C66.0973 18.934 65.1528 19.0828 64.2084 18.79C63.2639 18.4972 62.5556 17.8762 62.0834 16.9271C61.6112 15.9826 61.4931 15.1279 61.7292 14.3629C61.9653 13.5979 62.5556 12.9179 63.5 12.3229C70.1112 8.78125 77.0174 6.06597 84.2188 4.17708C91.4202 2.28819 98.7396 1.34375 106.177 1.34375C113.733 1.34375 121.111 2.25986 128.313 4.09208C135.514 5.92431 142.479 8.54986 149.208 11.9687C150.271 12.559 150.892 13.2674 151.071 14.0937C151.251 14.9201 151.161 15.7465 150.802 16.5729C150.448 17.3993 149.858 18.0486 149.031 18.5208C148.205 18.9931 147.201 18.934 146.021 18.3437C139.764 15.1563 133.299 12.7078 126.627 10.9983C119.954 9.28889 113.138 8.43181 106.177 8.42708C99.3299 8.42708 92.6007 9.22514 85.9896 10.8212C79.3785 12.4174 73.0625 14.9249 67.0417 18.3437ZM87.9375 140.177C80.9723 132.858 75.6314 125.392 71.915 117.78C68.1987 110.167 66.3381 101.164 66.3334 90.7708C66.3334 80.0278 70.2292 70.9658 78.0209 63.585C85.8125 56.2042 95.198 52.5161 106.177 52.5208C117.156 52.5208 126.601 56.2112 134.51 63.5921C142.42 70.9729 146.375 80.0325 146.375 90.7708C146.375 91.8333 146.052 92.6904 145.405 93.3421C144.758 93.9937 143.901 94.3172 142.833 94.3125C141.889 94.3125 141.063 93.989 140.354 93.3421C139.646 92.6951 139.292 91.8381 139.292 90.7708C139.292 81.9167 136.014 74.5099 129.46 68.5504C122.906 62.591 115.145 59.6089 106.177 59.6042C97.2049 59.6042 89.503 62.5862 83.0713 68.5504C76.6396 74.5146 73.4214 81.9214 73.4167 90.7708C73.4167 100.333 75.0695 108.451 78.375 115.123C81.6806 121.796 86.5209 128.494 92.8959 135.219C93.6042 135.927 93.9584 136.753 93.9584 137.698C93.9584 138.642 93.6042 139.469 92.8959 140.177C92.1875 140.885 91.3612 141.24 90.4167 141.24C89.4723 141.24 88.6459 140.885 87.9375 140.177ZM141.417 128.135C130.91 128.135 121.789 124.594 114.054 117.51C106.319 110.427 102.454 101.514 102.458 90.7708C102.458 89.8264 102.784 89 103.436 88.2917C104.088 87.5833 104.942 87.2292 106 87.2292C107.063 87.2292 107.92 87.5833 108.571 88.2917C109.223 89 109.546 89.8264 109.542 90.7708C109.542 99.625 112.729 106.885 119.104 112.552C125.479 118.219 132.917 121.052 141.417 121.052C142.125 121.052 143.129 120.993 144.427 120.875C145.726 120.757 147.083 120.58 148.5 120.344C149.563 120.108 150.479 120.256 151.248 120.79C152.018 121.324 152.519 122.119 152.75 123.177C152.986 124.122 152.809 124.948 152.219 125.656C151.629 126.365 150.861 126.837 149.917 127.073C147.792 127.663 145.934 127.989 144.342 128.05C142.751 128.112 141.776 128.14 141.417 128.135Z"
                          fill="url(#paint0_linear_0_1)"
                        />
                      </g>
                      <path
                        className="text-primary-600 dark:text-primary-500"
                        d="M3 72H209"
                        stroke="currentColor"
                        strokeWidth={6}
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_1"
                          x1="106.385"
                          y1="1.34375"
                          x2={106}
                          y2={72}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            stopColor="white"
                            stopOpacity={0}
                            style={{ stopColor: "none", stopOpacity: 0 }}
                          />
                          <stop
                            className="text-primary-600 dark:text-primary-500"
                            offset={1}
                            stopColor="currentColor"
                          />
                        </linearGradient>
                        <clipPath id="clip0_0_1">
                          <rect
                            width={129}
                            height={72}
                            fill="white"
                            style={{ fill: "white", fillOpacity: 1 }}
                            transform="translate(41)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="mt-6 text-center relative z-10 space-y-2 p-2">
                    <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white">
                      Secure by default
                    </h2>
                    <p className="dark:text-gray-300 text-gray-700 p-4">
                      We take security seriously. With end-to-end encryption, your data is safe and user-friendliness are evaluated based on the following criteria: simplicity, consistency, and flexibility.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]">
                <div>
                  <div className="pt-6 lg:px-6">
                    <svg
                      className="w-full"
                      viewBox="0 0 386 123"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={386} height={123} rx={10} />
                      <g clipPath="url(#clip0_0_106)">
                        <circle
                          className="text-primary-600 dark:text-primary-500"
                          cx={29}
                          cy={29}
                          r={15}
                          fill="currentColor"
                        />
                        <path
                          d="M29 23V35"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M35 29L29 35L23 29"
                          stroke="white"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M55.2373 32H58.7988C61.7383 32 63.4404 30.1816 63.4404 27.0508V27.0371C63.4404 23.9404 61.7246 22.1357 58.7988 22.1357H55.2373V32ZM56.7686 30.6807V23.4551H58.6279C60.6719 23.4551 61.8818 24.7881 61.8818 27.0576V27.0713C61.8818 29.3613 60.6924 30.6807 58.6279 30.6807H56.7686ZM69.4922 32.1436C71.666 32.1436 72.999 30.6875 72.999 28.2949V28.2812C72.999 25.8887 71.6592 24.4326 69.4922 24.4326C67.3184 24.4326 65.9785 25.8955 65.9785 28.2812V28.2949C65.9785 30.6875 67.3115 32.1436 69.4922 32.1436ZM69.4922 30.9062C68.2139 30.9062 67.4961 29.9424 67.4961 28.2949V28.2812C67.4961 26.6338 68.2139 25.6699 69.4922 25.6699C70.7637 25.6699 71.4883 26.6338 71.4883 28.2812V28.2949C71.4883 29.9355 70.7637 30.9062 69.4922 30.9062ZM76.9111 32H78.4219L79.9531 26.4629H80.0693L81.6074 32H83.1318L85.1758 24.5762H83.7061L82.3799 30.3047H82.2637L80.7324 24.5762H79.3242L77.793 30.3047H77.6836L76.3506 24.5762H74.8604L76.9111 32ZM87.6934 32H89.1768V27.6455C89.1768 26.4492 89.8535 25.7041 90.9404 25.7041C92.0273 25.7041 92.54 26.3125 92.54 27.543V32H94.0166V27.1943C94.0166 25.4238 93.1006 24.4326 91.4395 24.4326C90.3594 24.4326 89.6484 24.9111 89.2861 25.7041H89.1768V24.5762H87.6934V32ZM97.1562 32H98.6396V21.6641H97.1562V32ZM104.992 32.1436C107.166 32.1436 108.499 30.6875 108.499 28.2949V28.2812C108.499 25.8887 107.159 24.4326 104.992 24.4326C102.818 24.4326 101.479 25.8955 101.479 28.2812V28.2949C101.479 30.6875 102.812 32.1436 104.992 32.1436ZM104.992 30.9062C103.714 30.9062 102.996 29.9424 102.996 28.2949V28.2812C102.996 26.6338 103.714 25.6699 104.992 25.6699C106.264 25.6699 106.988 26.6338 106.988 28.2812V28.2949C106.988 29.9355 106.264 30.9062 104.992 30.9062ZM113.307 32.123C114.291 32.123 115.07 31.6992 115.508 30.9473H115.624V32H117.094V26.9209C117.094 25.3623 116.041 24.4326 114.175 24.4326C112.486 24.4326 111.317 25.2461 111.14 26.4629L111.133 26.5107H112.562L112.568 26.4834C112.746 25.957 113.286 25.6562 114.106 25.6562C115.111 25.6562 115.624 26.1074 115.624 26.9209V27.5771L113.614 27.6934C111.844 27.8027 110.846 28.5752 110.846 29.9014V29.915C110.846 31.2617 111.892 32.123 113.307 32.123ZM112.322 29.8535V29.8398C112.322 29.1699 112.787 28.8008 113.812 28.7393L115.624 28.623V29.2588C115.624 30.2158 114.811 30.9404 113.703 30.9404C112.903 30.9404 112.322 30.5371 112.322 29.8535ZM122.893 32.123C123.932 32.123 124.745 31.6445 125.176 30.8311H125.292V32H126.769V21.6641H125.292V25.752H125.176C124.779 24.9521 123.911 24.4463 122.893 24.4463C121.006 24.4463 119.816 25.9297 119.816 28.2812V28.2949C119.816 30.626 121.026 32.123 122.893 32.123ZM123.316 30.8584C122.072 30.8584 121.327 29.8877 121.327 28.2949V28.2812C121.327 26.6885 122.072 25.7178 123.316 25.7178C124.547 25.7178 125.312 26.6953 125.312 28.2812V28.2949C125.312 29.8809 124.554 30.8584 123.316 30.8584Z"
                          fill="currentColor"
                        />
                        <path
                          d="M268.324 34H269.906V21.3174H268.333L264.958 23.7432V25.4131L268.184 23.0752H268.324V34ZM280.363 34H281.91V31.3721H283.712V29.957H281.91V21.3174H279.616C277.841 23.9629 275.898 27.0566 274.185 29.9307V31.3721H280.363V34ZM275.802 29.9658V29.8604C277.182 27.5312 278.843 24.9121 280.267 22.7852H280.372V29.9658H275.802ZM286.162 37.2256H287.296L288.676 32.2246H286.927L286.162 37.2256ZM296.672 34.2109C299.212 34.2109 301.075 32.6465 301.075 30.5283V30.5107C301.075 28.709 299.818 27.5576 297.973 27.3994V27.3643C299.555 27.0303 300.662 25.958 300.662 24.3936V24.376C300.662 22.4512 299.071 21.1064 296.654 21.1064C294.281 21.1064 292.646 22.4863 292.444 24.5518L292.436 24.6396H293.956L293.965 24.5518C294.097 23.2686 295.16 22.4775 296.654 22.4775C298.201 22.4775 299.071 23.2422 299.071 24.5693V24.5869C299.071 25.8525 298.017 26.7842 296.505 26.7842H294.984V28.1201H296.575C298.351 28.1201 299.467 28.9902 299.467 30.5459V30.5635C299.467 31.9082 298.333 32.8398 296.672 32.8398C294.984 32.8398 293.833 31.9785 293.71 30.7305L293.701 30.6426H292.181L292.189 30.748C292.356 32.752 294.053 34.2109 296.672 34.2109ZM310.434 34H311.98V31.3721H313.782V29.957H311.98V21.3174H309.687C307.911 23.9629 305.969 27.0566 304.255 29.9307V31.3721H310.434V34ZM305.872 29.9658V29.8604C307.252 27.5312 308.913 24.9121 310.337 22.7852H310.442V29.9658H305.872ZM323.297 34H324.826V28.1289C324.826 26.793 325.767 25.7119 327.006 25.7119C328.201 25.7119 328.975 26.4414 328.975 27.5664V34H330.504V27.9092C330.504 26.7051 331.374 25.7119 332.692 25.7119C334.028 25.7119 334.67 26.4062 334.67 27.8037V34H336.199V27.4521C336.199 25.4658 335.118 24.3584 333.185 24.3584C331.875 24.3584 330.794 25.0176 330.284 26.0195H330.144C329.704 25.0352 328.808 24.3584 327.524 24.3584C326.285 24.3584 325.389 24.9473 324.967 25.9668H324.826V24.5254H323.297V34ZM344.67 34.167C347.069 34.167 348.643 32.2246 348.643 29.2715V29.2539C348.643 26.2832 347.078 24.3584 344.67 24.3584C343.369 24.3584 342.235 25.0088 341.717 26.0195H341.576V20.7637H340.047V34H341.576V32.4883H341.717C342.297 33.543 343.352 34.167 344.67 34.167ZM344.318 32.8135C342.596 32.8135 341.541 31.46 341.541 29.2715V29.2539C341.541 27.0654 342.596 25.7119 344.318 25.7119C346.05 25.7119 347.078 27.0479 347.078 29.2539V29.2715C347.078 31.4775 346.05 32.8135 344.318 32.8135ZM352.016 37.1641H353.545V32.5059H353.686C354.204 33.5166 355.338 34.167 356.639 34.167C359.047 34.167 360.611 32.2422 360.611 29.2715V29.2539C360.611 26.3008 359.038 24.3584 356.639 24.3584C355.32 24.3584 354.266 24.9824 353.686 26.0371H353.545V24.5254H352.016V37.1641ZM356.287 32.8135C354.564 32.8135 353.51 31.46 353.51 29.2715V29.2539C353.51 27.0654 354.564 25.7119 356.287 25.7119C358.019 25.7119 359.047 27.0479 359.047 29.2539V29.2715C359.047 31.4775 358.019 32.8135 356.287 32.8135ZM367.254 34.167C369.407 34.167 371.051 32.998 371.051 31.3105V31.293C371.051 29.9395 370.189 29.166 368.405 28.7354L366.946 28.3838C365.83 28.1113 365.355 27.707 365.355 27.0654V27.0479C365.355 26.2129 366.182 25.6328 367.307 25.6328C368.449 25.6328 369.188 26.1514 369.39 26.8984H370.893C370.682 25.3516 369.302 24.3584 367.315 24.3584C365.303 24.3584 363.791 25.5449 363.791 27.1182V27.127C363.791 28.4893 364.591 29.2627 366.366 29.6846L367.834 30.0361C369.003 30.3174 369.486 30.7656 369.486 31.4072V31.4248C369.486 32.2861 368.581 32.8926 367.307 32.8926C366.094 32.8926 365.338 32.374 365.083 31.583H363.519C363.694 33.1475 365.145 34.167 367.254 34.167Z"
                          fill="currentColor"
                        />
                      </g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 123C3 123 14.3298 94.153 35.1282 88.0957C55.9266 82.0384 65.9333 80.5508 65.9333 80.5508C65.9333 80.5508 80.699 80.5508 92.1777 80.5508C103.656 80.5508 100.887 63.5348 109.06 63.5348C117.233 63.5348 117.217 91.9728 124.78 91.9728C132.343 91.9728 142.264 78.03 153.831 80.5508C165.398 83.0716 186.825 91.9728 193.761 91.9728C200.697 91.9728 206.296 63.5348 214.07 63.5348C221.844 63.5348 238.653 93.7771 244.234 91.9728C249.814 90.1684 258.8 60 266.19 60C272.075 60 284.1 88.057 286.678 88.0957C294.762 88.2171 300.192 72.9284 305.423 72.9284C312.323 72.9284 323.377 65.2437 335.553 63.5348C347.729 61.8259 348.218 82.07 363.639 80.5508C367.875 80.1335 372.949 82.2017 376.437 87.1008C379.446 91.3274 381.054 97.4325 382.521 104.647C383.479 109.364 382.521 123 382.521 123"
                        fill="url(#paint0_linear_0_106)"
                        style={{}}
                      />
                      <path
                        className="text-primary-600 dark:text-primary-500"
                        d="M3 121.077C3 121.077 15.3041 93.6691 36.0195 87.756C56.7349 81.8429 66.6632 80.9723 66.6632 80.9723C66.6632 80.9723 80.0327 80.9723 91.4656 80.9723C102.898 80.9723 100.415 64.2824 108.556 64.2824C116.696 64.2824 117.693 92.1332 125.226 92.1332C132.759 92.1332 142.07 78.5115 153.591 80.9723C165.113 83.433 186.092 92.1332 193 92.1332C199.908 92.1332 205.274 64.2824 213.017 64.2824C220.76 64.2824 237.832 93.8946 243.39 92.1332C248.948 90.3718 257.923 60.5 265.284 60.5C271.145 60.5 283.204 87.7182 285.772 87.756C293.823 87.8746 299.2 73.0802 304.411 73.0802C311.283 73.0802 321.425 65.9506 333.552 64.2824C345.68 62.6141 346.91 82.4553 362.27 80.9723C377.629 79.4892 383 106.605 383 106.605"
                        stroke="currentColor"
                        strokeWidth={3}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_106"
                          x1={3}
                          y1={60}
                          x2={3}
                          y2={123}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            className="text-primary-300 dark:text-primary-600/30"
                            stopColor="currentColor"
                          />
                          <stop
                            className="text-white dark:text-transparent"
                            offset={1}
                            stopColor="currentColor"
                            stopOpacity="0.103775"
                          />
                        </linearGradient>
                        <clipPath id="clip0_0_106">
                          <rect
                            width={358}
                            height={30}
                            fill="white"
                            style={{ fill: "white", fillOpacity: 1 }}
                            transform="translate(14 14)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="mt-14 text-center relative z-10 space-y-2">
                    <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white">
                     Import and export system
                    </h2>
                    <p className="dark:text-gray-300 text-gray-700 p-4 p-2">
                      We provide a simple and easy way to import and export your data. You can easily import your data from other platforms and export your data to other platforms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-full lg:col-span-3 overflow-hidden relative p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]">
                <div className="grid sm:grid-cols-2">
                  <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                    <div className="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                      <svg
                        className="size-6 m-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinejoin="round"
                          d="M5.5 7c2 0 6.5-3 6.5-3s4.5 3 6.5 3v4.5C18.5 18 12 20 12 20s-6.5-2-6.5-8.5z"
                        />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white p-4">
                        Tool selection system
                      </h2>
                      <p className="dark:text-gray-300 text-gray-700 p-4">
                        We provide a tool selection system that allows you to easily select the tools you need for your work. You can easily select the tools you need and use them in your work.
                      </p>
                    </div>
                  </div>
                  <div className="relative mt-6 sm:mt-auto h-fit -mb-[calc(var(--card-padding)+1px)] -mr-[calc(var(--card-padding)+1px)] sm:ml-6 py-6 p-6 border rounded-tl-[calc(var(--card-border-radius)-0.5rem)] dark:bg-white/5 dark:border-white/10">
                    <div className="absolute flex gap-1 top-2 left-3">
                      <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10" />
                      <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10" />
                      <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10" />
                    </div>
                    <svg
                      className="w-full sm:w-[150%]"
                      viewBox="0 0 366 231"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.148438 231V179.394L1.92188 180.322L2.94482 177.73L4.05663 183.933L6.77197 178.991L7.42505 184.284L9.42944 187.985L11.1128 191.306V155.455L13.6438 153.03V145.122L14.2197 142.829V150.454V154.842L15.5923 160.829L17.0793 172.215H19.2031V158.182L20.7441 153.03L22.426 148.111V142.407L24.7471 146.86V128.414L26.7725 129.918V120.916L28.1492 118.521L28.4653 127.438L29.1801 123.822L31.0426 120.525V130.26L32.3559 134.71L34.406 145.122V137.548L35.8982 130.26L37.1871 126.049L38.6578 134.71L40.659 138.977V130.26V126.049L43.7557 130.26V123.822L45.972 112.407L47.3391 103.407V92.4726L49.2133 98.4651V106.053L52.5797 89.7556L54.4559 82.7747L56.1181 87.9656L58.9383 89.7556V98.4651L60.7617 103.407L62.0545 123.822L63.8789 118.066L65.631 122.082L68.5479 114.229L70.299 109.729L71.8899 118.066L73.5785 123.822V130.26L74.9446 134.861L76.9243 127.87L78.352 134.71V138.977L80.0787 142.407V152.613L83.0415 142.407V130.26L86.791 123.822L89.0121 116.645V122.082L90.6059 127.87L92.3541 131.77L93.7104 123.822L95.4635 118.066L96.7553 122.082V137.548L99.7094 140.988V131.77L101.711 120.525L103.036 116.645V133.348L104.893 136.218L106.951 140.988L108.933 134.71L110.797 130.26L112.856 140.988V148.111L115.711 152.613L117.941 145.122L119.999 140.988V148.111L123.4 152.613L125.401 158.182L130.547 150.454V156.566L131.578 155.455L134.143 158.182L135.594 168.136L138.329 158.182L140.612 160.829L144.681 169.5L147.011 155.455L148.478 151.787L151.02 152.613L154.886 145.122L158 143.412L159.406 140.637L159.496 133.348L162.295 127.87V122.082L163.855 116.645V109.729L164.83 104.407L166.894 109.729L176.249 98.4651L178.254 106.169L180.77 98.4651V81.045L182.906 69.1641L184.8 56.8669L186.477 62.8428L187.848 79.7483L188.849 106.169L191.351 79.7483L193.485 75.645V98.4651L196.622 94.4523L198.623 87.4228V79.7483L200.717 75.645L202.276 81.045V89.3966L203.638 113.023L205.334 99.8037L207.164 94.4523L208.982 98.4651V102.176L211.267 107.64L212.788 81.045L214.437 66.0083L216.19 62.8428L217.941 56.8669V73.676V79.7483L220.28 75.645L222.516 66.0083V73.676H226.174V84.8662L228.566 98.4651L230.316 75.645L233.61 94.4523V104.25L236.882 102.176L239.543 113.023L241.057 98.4651L243.604 94.4523L244.975 106.169L245.975 87.4228L247.272 89.3966L250.732 84.8662L251.733 96.7549L254.644 94.4523L257.452 99.8037L259.853 91.3111L261.193 84.8662L264.162 75.645L265.808 87.4228L267.247 58.4895L269.757 66.0083L276.625 13.5146L273.33 58.4895L276.25 67.6563L282.377 20.1968L281.37 58.4895V66.0083L283.579 75.645L286.033 56.8669L287.436 73.676L290.628 77.6636L292.414 84.8662L294.214 61.3904L296.215 18.9623L300.826 0.947876L297.531 56.8669L299.973 62.8428L305.548 22.0598L299.755 114.956L301.907 105.378L304.192 112.688V94.9932L308.009 80.0829L310.003 94.9932L311.004 102.127L312.386 105.378L315.007 112.688L316.853 98.004L318.895 105.378L321.257 94.9932L324.349 100.81L325.032 80.0829L327.604 61.5733L329.308 82.3223L333.525 52.7986L334.097 52.145L334.735 55.6812L337.369 59.8108V73.676L340.743 87.9656L343.843 96.3728L348.594 82.7747L349.607 81.045L351 89.7556L352.611 96.3728L355.149 94.9932L356.688 102.176L359.396 108.784L360.684 111.757L365 95.7607V231H148.478H0.148438Z"
                        fill="url(#paint0_linear_0_705)"
                      />
                      <path
                        className="text-primary-600 dark:text-primary-500"
                        d="M1 179.796L4.05663 172.195V183.933L7.20122 174.398L8.45592 183.933L10.0546 186.948V155.455L12.6353 152.613V145.122L15.3021 134.71V149.804V155.455L16.6916 160.829L18.1222 172.195V158.182L19.8001 152.613L21.4105 148.111V137.548L23.6863 142.407V126.049L25.7658 127.87V120.525L27.2755 118.066L29.1801 112.407V123.822L31.0426 120.525V130.26L32.3559 134.71L34.406 145.122V137.548L35.8982 130.26L37.1871 126.049L38.6578 134.71L40.659 138.977V130.26V126.049L43.7557 130.26V123.822L45.972 112.407L47.3391 103.407V92.4726L49.2133 98.4651V106.053L52.5797 89.7556L54.4559 82.7747L56.1181 87.9656L58.9383 89.7556V98.4651L60.7617 103.407L62.0545 123.822L63.8789 118.066L65.631 122.082L68.5479 114.229L70.299 109.729L71.8899 118.066L73.5785 123.822V130.26L74.9446 134.861L76.9243 127.87L78.352 134.71V138.977L80.0787 142.407V152.613L83.0415 142.407V130.26L86.791 123.822L89.0121 116.645V122.082L90.6059 127.87L92.3541 131.77L93.7104 123.822L95.4635 118.066L96.7553 122.082V137.548L99.7094 140.988V131.77L101.711 120.525L103.036 116.645V133.348L104.893 136.218L106.951 140.988L108.933 134.71L110.797 130.26L112.856 140.988V148.111L115.711 152.613L117.941 145.122L119.999 140.988L121.501 148.111L123.4 152.613L125.401 158.182L127.992 152.613L131.578 146.76V155.455L134.143 158.182L135.818 164.629L138.329 158.182L140.612 160.829L144.117 166.757L146.118 155.455L147.823 149.804L151.02 152.613L154.886 145.122L158.496 140.988V133.348L161.295 127.87V122.082L162.855 116.645V109.729L164.83 103.407L166.894 109.729L176.249 98.4651L178.254 106.169L180.77 98.4651V81.045L182.906 69.1641L184.8 56.8669L186.477 62.8428L187.848 79.7483L188.849 106.169L191.351 79.7483L193.485 75.645V98.4651L196.622 94.4523L198.623 87.4228V79.7483L200.717 75.645L202.276 81.045V89.3966L203.638 113.023L205.334 99.8037L207.164 94.4523L208.982 98.4651V102.176L211.267 107.64L212.788 81.045L214.437 66.0083L216.19 62.8428L217.941 56.8669V73.676V79.7483L220.28 75.645L222.516 66.0083V73.676H226.174V84.8662L228.566 98.4651L230.316 75.645L233.61 94.4523V104.25L236.882 102.176L239.543 113.023L241.057 98.4651L243.604 94.4523L244.975 106.169L245.975 87.4228L247.272 89.3966L250.732 84.8662L251.733 96.7549L254.644 94.4523L257.452 99.8037L259.853 91.3111L261.193 84.8662L264.162 75.645L265.808 87.4228L267.247 58.4895L269.757 66.0083L276.625 13.5146L273.33 58.4895L276.25 67.6563L282.377 20.1968L281.37 58.4895V66.0083L283.579 75.645L286.033 56.8669L287.436 73.676L290.628 77.6636L292.414 84.8662L294.214 61.3904L296.215 18.9623L300.826 0.947876L297.531 56.8669L299.973 62.8428L305.548 22.0598L299.755 114.956L301.907 105.378L304.192 112.688V94.9932L308.009 80.0829L310.003 94.9932L311.004 102.127L312.386 105.378L315.007 112.688L316.853 98.004L318.895 105.378L321.257 94.9932L324.349 100.81L325.032 80.0829L327.604 61.5733L329.357 74.9864L332.611 52.6565L334.352 48.5552L335.785 55.2637L338.377 59.5888V73.426L341.699 87.5181L343.843 93.4347L347.714 82.1171L350.229 78.6821L351.974 89.7556L353.323 94.9932L355.821 93.4347L357.799 102.127L360.684 108.794L363.219 98.004L365 89.7556"
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_705"
                          x1="0.85108"
                          y1="0.947876"
                          x2="0.85108"
                          y2="230.114"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            className="text-primary-500/20 dark:text-primary-500/50"
                            stopColor="currentColor"
                          />
                          <stop
                            className="text-transparent"
                            offset={1}
                            stopColor="currentColor"
                            stopOpacity="0.01"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-span-full lg:col-span-3 overflow-hidden relative p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]">
                <div className="h-full grid sm:grid-cols-2">
                  <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                    <div className="relative aspect-square rounded-full size-12 flex border dark:bg-white/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-white/5 before:rounded-full">
                      <svg
                        className="size-6 m-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none">
                          <path
                            stroke="currentColor"
                            d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0zm-4.562 7.902a3 3 0 1 0 3 5.195a3 3 0 0 0-3-5.196zm15.124 0a2.999 2.999 0 1 1-2.998 5.194a2.999 2.999 0 0 1 2.998-5.194z"
                          />
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M9.003 6.125a2.993 2.993 0 0 1 .175-1.143a8.507 8.507 0 0 0-5.031 4.766a8.5 8.5 0 0 0-.502 4.817a3 3 0 0 1 .902-.723a7.498 7.498 0 0 1 4.456-7.717m5.994 0a7.499 7.499 0 0 1 4.456 7.717a2.998 2.998 0 0 1 .902.723a8.5 8.5 0 0 0-5.533-9.583a3 3 0 0 1 .175 1.143m2.536 13.328a3.002 3.002 0 0 1-1.078-.42a7.501 7.501 0 0 1-8.91 0l-.107.065a3 3 0 0 1-.971.355a8.5 8.5 0 0 0 11.066 0"
                            clipRule="evenodd"
                          />
                        </g>
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-secondary-950 dark:text-white p-4">
                        Real-time collaboration
                      </h2>
                      <p className="dark:text-gray-300 text-gray-700 p-4">
                        We provide a real-time collaboration system that allows you to collaborate with your team in real-time. You can easily collaborate with your team and work together on your projects.
                        </p>
                    </div>
                  </div>
                  <div className="mt-6 relative sm:-mr-[--card-padding] sm:-my-[--card-padding] before:absolute before:w-px before:inset-0 before:mx-auto before:bg-[--ui-light-border-color] dark:before:bg-[--ui-dark-border-color]">
                    <div className="relative space-y-6 py-6 flex flex-col justify-center h-full">
                      <div className="flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative">
                        <span className="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">
                          H.rai
                        </span>
                        <div className="size-7 ring-4 ring-white dark:ring-[--card-dark-bg]">
                          <img
                            className="rounded-full  border border-gray-950/5 dark:border-white/5 size-full"
                            src="https://pbs.twimg.com/profile_images/1585976646468763648/OlbJkLL0_400x400.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-[calc(50%-1rem)] relative">
                        <div className="size-8 ring-4 ring-white dark:ring-[--card-dark-bg]">
                          <img
                            className="rounded-full  border border-gray-950/5 dark:border-white/5 size-full"
                            src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/124.jpg"
                            alt=""
                          />
                        </div>
                        <span className="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">
                          Mr.Dixit
                        </span>
                      </div>
                      <div className="flex items-center justify-end gap-2 w-[calc(50%+0.875rem)] relative">
                        <span className="h-fit text-xs block px-2 py-1 shadow-sm border rounded-md dark:bg-gray-800 dark:border-white/5 dark:text-white">
                          B.Negi
                        </span>
                        <div className="size-7 ring-4 ring-white dark:ring-[--card-dark-bg]">
                          <img
                            className="rounded-full  border border-gray-950/5 dark:border-white/5 size-full"
                            src="https://pbs.twimg.com/profile_images/1585976646468763648/OlbJkLL0_400x400.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section>
      <div className="pt-36">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="grid gap-12 md:gap-0 md:grid-cols-2 lg:grid-cols-5 items-center lg:gap-24">
            <div className="lg:col-span-2">
              <div className="md:pr-6 lg:pr-0">
                <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">
                  All your favorite dev tools work with Mern
                </h2>
                <p className="mt-6 text-gray-700 dark:text-gray-300">
                  Mern is built to work with all your favorite development tools. Whether you're using Visual Studio Code, Git, or any other tool, Mern is designed to work seamlessly with them all. With Mern, you can focus on building great software without having to worry about compatibility issues.
                </p>
              </div>
              <ul className="mt-8 divide-y border-y border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] divide-[--ui-light-border-color] dark:divide-[--ui-dark-border-color] *:py-3 *:flex *:items-center *:gap-3 text-gray-700 dark:text-gray-300">
              <li>
                  <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m7 9l5 3.5L17 9"
                      />
                      <path d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
                    </g>
                  </svg>
                  Email and web support
                </li>
                <li>
                  <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"
                    />
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M16.1 4.593a50.577 50.577 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252zM8.116 6.049a49.078 49.078 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.165 19.165 0 0 1-.09 6.339a.843.843 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Fast response time
                </li>
                <li>
                  <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 14 14"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M.5 7.08h2.19a.52.52 0 0 0 .45-.27l1.8-3.6a.49.49 0 0 1 .49-.27a.48.48 0 0 1 .43.35l2.23 7.42a.5.5 0 0 0 .46.36a.5.5 0 0 0 .45-.32l1.37-3.35a.51.51 0 0 1 .47-.32h2.66"
                    />
                  </svg>
                  Menitoring and analytics
                </li>
                <li>
                  <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m6.75 21l-.25-2.2l2.85-7.85q.375.35.813.588t.937.362l-2.75 7.55zm10.5 0l-1.6-1.55l-2.75-7.55q.5-.125.938-.363t.812-.587l2.85 7.85zM12 11q-1.25 0-2.125-.875T9 8q0-.975.563-1.737T11 5.2V3h2v2.2q.875.3 1.438 1.063T15 8q0 1.25-.875 2.125T12 11m0-2q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9"
                    />
                  </svg>
                  Architectural review
                </li>
              </ul>
            </div>
            <div className="overflow-hidden lg:col-span-3 border bg-white dark:bg-[--card-dark-bg] rounded-[--card-border-radius] border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
              <div className="flex gap-2 py-6 *:size-2.5 *:rounded-full px-[--card-padding]">
                <div className="bg-[#f87171]" />
                <div className="bg-[#fbbf24]" />
                <div className="bg-[#a3e635]" />
              </div>
              <div className="flex gap-3 px-[--card-padding] text-gray-600 dark:text-gray-400 *:aspect-square *:border *:p-4 *:rounded-[calc(var(--card-border-radius)/2)] *:border-[--ui-light-border-color] dark:*:border-[--ui-dark-border-color]">
                <div>
                  <svg
                    className="size-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944c.856 1.026 2.043 1.352 3.272 1.535c1.897.283 3.76.177 5.522-.678c.202-.098.388-.229.608-.36c.166.473.209.95.151 1.437c-.14 1.185-.738 2.1-1.688 2.794c-.38.277-.782.525-1.175.787c-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.158 3.158 0 0 1-1.407-1.188a3.31 3.31 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958c-.106-.769-.472-1.113-1.161-1.133c-.707-.02-1.267.411-1.415 1.09c-.012.053-.028.104-.045.165zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614c.302 0 .57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727z"
                    />
                  </svg>
                </div>
                <div className="bg-gray-950 text-white dark:bg-white dark:text-gray-950">
                  <svg
                    className="size-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="currentColor"
                      d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    className="size-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.53em"
                    height="1em"
                    viewBox="0 0 256 168"
                  >
                    <path
                      fill="currentColor"
                      d="M143.618 167.029h95.166c3.023 0 5.992-.771 8.61-2.237a16.963 16.963 0 0 0 6.302-6.115a16.324 16.324 0 0 0 2.304-8.352c0-2.932-.799-5.811-2.312-8.35L189.778 34.6a16.966 16.966 0 0 0-6.301-6.113a17.626 17.626 0 0 0-8.608-2.238c-3.023 0-5.991.772-8.609 2.238a16.964 16.964 0 0 0-6.3 6.113l-16.342 27.473l-31.95-53.724a16.973 16.973 0 0 0-6.304-6.112A17.638 17.638 0 0 0 96.754 0c-3.022 0-5.992.772-8.61 2.237a16.973 16.973 0 0 0-6.303 6.112L2.31 141.975a16.302 16.302 0 0 0-2.31 8.35c0 2.932.793 5.813 2.304 8.352a16.964 16.964 0 0 0 6.302 6.115a17.628 17.628 0 0 0 8.61 2.237h59.737c23.669 0 41.123-10.084 53.134-29.758l29.159-48.983l15.618-26.215l46.874 78.742h-62.492zm-67.64-26.24l-41.688-.01L96.782 35.796l31.181 52.492l-20.877 35.084c-7.976 12.765-17.037 17.416-31.107 17.416"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    className="size-7"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M10.99 1.974c2.92-1.86 6.957-.992 9.001 1.934a6.268 6.268 0 0 1 1.072 4.74a5.9 5.9 0 0 1-.88 2.198c.64 1.221.855 2.62.61 3.977a5.882 5.882 0 0 1-2.657 3.94l-5.127 3.268c-2.92 1.86-6.957.993-9.002-1.933a6.269 6.269 0 0 1-1.07-4.741a5.9 5.9 0 0 1 .88-2.198a6.195 6.195 0 0 1-.611-3.977a5.881 5.881 0 0 1 2.658-3.94zM8.049 20.25c.782.29 1.633.332 2.44.123c.369-.099.72-.253 1.042-.458l5.128-3.267a3.538 3.538 0 0 0 1.598-2.37a3.769 3.769 0 0 0-.645-2.85a4.072 4.072 0 0 0-4.37-1.62c-.369.099-.72.253-1.042.458l-1.957 1.246a1.131 1.131 0 0 1-.314.138a1.227 1.227 0 0 1-1.5-.899a1.138 1.138 0 0 1-.01-.45a1.066 1.066 0 0 1 .48-.713l5.129-3.268a1.13 1.13 0 0 1 .314-.138a1.227 1.227 0 0 1 1.317.489c.157.222.23.492.207.762l-.018.19l.191.058a6.62 6.62 0 0 1 2.005 1.003l.263.192l.096-.295c.052-.156.093-.316.123-.478a3.769 3.769 0 0 0-.644-2.85a4.073 4.073 0 0 0-4.371-1.621a3.74 3.74 0 0 0-1.042.458L7.34 7.357a3.537 3.537 0 0 0-1.6 2.37a3.768 3.768 0 0 0 .645 2.85a4.073 4.073 0 0 0 4.371 1.62c.369-.099.72-.253 1.042-.457l1.956-1.248c.098-.061.204-.108.315-.137a1.228 1.228 0 0 1 1.5.899c.034.147.037.3.011.449a1.067 1.067 0 0 1-.482.713l-5.127 3.269a1.125 1.125 0 0 1-.314.137a1.226 1.226 0 0 1-1.317-.488a1.149 1.149 0 0 1-.207-.762l.017-.19l-.19-.058a6.613 6.613 0 0 1-2.005-1.003l-.263-.192l-.096.295a3.568 3.568 0 0 0-.123.478a3.77 3.77 0 0 0 .644 2.85a4.073 4.073 0 0 0 1.93 1.498"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div>
                  <pre className="px-[--card-padding]">
                    {"                                        "}
                    <code className="text-sm font-mono">
                    
                    </code>
                    {"\n"}
                    {"                                    "}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="pt-36">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="text-center">
            <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">
              Quickstart with boilerplates
            </h2>
            <p className="mt-6 text-gray-700 dark:text-gray-300">
              Harum quae dolore inventore repudiandae? orrupti aut temporibus
              ariatur.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="relative group overflow-hidden p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]">
              <div
                aria-hidden="true"
                className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-warning-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5"
              />
              <div className="relative">
                <div className="border border-warning-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[calc(var(--card-border-radius)/2)] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc((var(--card-border-radius)/2)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-warning-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                  <svg
                    className="text-[#000014] dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 128 128"
                  >
                    <defs>
                      <linearGradient
                        id="deviconAstro0"
                        x1="882.997"
                        x2="638.955"
                        y1="27.113"
                        y2="866.902"
                        gradientTransform="scale(.1)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset={0} stopColor="currentColor" />
                        <stop offset={1} stopColor="currentColor" />
                      </linearGradient>
                      <linearGradient
                        id="deviconAstro1"
                        x1="1001.68"
                        x2="790.326"
                        y1="652.45"
                        y2="1094.91"
                        gradientTransform="scale(.1)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset={0} stopColor="#ff1639" />
                        <stop offset={1} stopColor="#ff1639" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#deviconAstro0)"
                      d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm0 0"
                    />
                    <path
                      fill="#ff5d01"
                      d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"
                    />
                    <path
                      fill="url(#deviconAstro1)"
                      d="M84.094 90.074c-3.57 3.055-10.696 5.137-18.903 5.137c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735m0 0"
                    />
                  </svg>
                </div>
                <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <p className="text-gray-700 dark:text-gray-300">
                    Amet praesentium deserunt ex commodi tempore fuga
                    voluptatem. Sit, sapiente.
                  </p>
                </div>
                <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
                  <a
                    href="#"
                    download="/"
                    className="group rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                  >
                    <span>Download</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m17 13l-5 5m0 0l-5-5m5 5V6"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/tailus-ui"
                    className="group flex items-center rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center"
                  >
                    <span className="sr-only">Source Code</span>
                    <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div
              href="#"
              className="relative group overflow-hidden p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]"
            >
              <div
                aria-hidden="true"
                className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-success-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5"
              />
              <div className="relative">
                <div className="border border-success-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[calc(var(--card-border-radius)/2)] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc((var(--card-border-radius)/2)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.98em"
                    height="1em"
                    viewBox="0 0 256 263"
                  >
                    <defs>
                      <linearGradient
                        id="logosSupabaseIcon0"
                        x1="20.862%"
                        x2="63.426%"
                        y1="20.687%"
                        y2="44.071%"
                      >
                        <stop offset="0%" stopColor="#249361" />
                        <stop offset="100%" stopColor="#3ecf8e" />
                      </linearGradient>
                      <linearGradient
                        id="logosSupabaseIcon1"
                        x1="1.991%"
                        x2="21.403%"
                        y1="-13.158%"
                        y2="34.708%"
                      >
                        <stop offset="0%" />
                        <stop offset="100%" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#logosSupabaseIcon0)"
                      d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                    />
                    <path
                      fill="url(#logosSupabaseIcon1)"
                      fillOpacity="0.2"
                      d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                    />
                    <path
                      fill="#3ecf8e"
                      d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
                    />
                  </svg>
                </div>
                <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <p className="text-gray-700 dark:text-gray-300">
                    Amet praesentium deserunt ex commodi tempore fuga
                    voluptatem. Sit, sapiente.
                  </p>
                </div>
                <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
                  <a
                    href="#"
                    download="/"
                    className="group rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                  >
                    <span>Download</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m17 13l-5 5m0 0l-5-5m5 5V6"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/tailus-ui"
                    className="group flex items-center rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center"
                  >
                    <span className="sr-only">Source Code</span>
                    <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]">
              <div
                aria-hidden="true"
                className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-danger-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5"
              />
              <div className="relative">
                <div className="border border-danger-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[calc(var(--card-border-radius)/2)] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc((var(--card-border-radius)/2)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-danger-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.95em"
                    height="1em"
                    viewBox="0 0 256 271"
                  >
                    <defs>
                      <linearGradient
                        id="logosAngularIcon0"
                        x1="25.071%"
                        x2="96.132%"
                        y1="90.929%"
                        y2="55.184%"
                      >
                        <stop offset="0%" stopColor="#e40035" />
                        <stop offset="24%" stopColor="#f60a48" />
                        <stop offset="35.2%" stopColor="#f20755" />
                        <stop offset="49.4%" stopColor="#dc087d" />
                        <stop offset="74.5%" stopColor="#9717e7" />
                        <stop offset="100%" stopColor="#6c00f5" />
                      </linearGradient>
                      <linearGradient
                        id="logosAngularIcon1"
                        x1="21.863%"
                        x2="68.367%"
                        y1="12.058%"
                        y2="68.21%"
                      >
                        <stop offset="0%" stopColor="#ff31d9" />
                        <stop
                          offset="100%"
                          stopColor="#ff5be1"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#logosAngularIcon0)"
                      d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"
                    />
                    <path
                      fill="url(#logosAngularIcon1)"
                      d="m256 45.179l-9.244 145.158L158.373 0zm-61.217 187.697l-66.782 38.105l-66.784-38.105L74.8 199.958h106.4zM128.001 72.249l34.994 85.076h-69.99zM9.149 190.337L0 45.179L97.627 0z"
                    />
                  </svg>
                </div>
                <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <p className="text-gray-700 dark:text-gray-300">
                    Amet praesentium deserunt ex commodi tempore fuga
                    voluptatem. Sit, sapiente.
                  </p>
                </div>
                <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
                  <a
                    href="#"
                    download="/"
                    className="group rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                  >
                    <span>Download</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m17 13l-5 5m0 0l-5-5m5 5V6"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/tailus-ui"
                    className="group flex items-center rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center"
                  >
                    <span className="sr-only">Source Code</span>
                    <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]">
              <div
                aria-hidden="true"
                className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-gray-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5"
              />
              <div className="relative">
                <div className="border border-gray-500/10 flex relative *:relative *:size-6 *:m-auto  text-gray-950 dark:text-white size-12 rounded-[calc(var(--card-border-radius)/2)] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc((var(--card-border-radius)/2)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-gray-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="currentColor"
                      d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z"
                    />
                  </svg>
                </div>
                <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <p className="text-gray-700 dark:text-gray-300">
                    Amet praesentium deserunt ex commodi tempore fuga
                    voluptatem. Sit, sapiente.
                  </p>
                </div>
                <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
                  <a
                    href="#"
                    download="/"
                    className="group rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                  >
                    <span>Download</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m17 13l-5 5m0 0l-5-5m5 5V6"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/tailus-ui"
                    className="group flex items-center rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center"
                  >
                    <span className="sr-only">Source Code</span>
                    <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]">
              <div
                aria-hidden="true"
                className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-warning-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5"
              />
              <div className="relative">
                <div className="border border-warning-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[calc(var(--card-border-radius)/2)] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc((var(--card-border-radius)/2)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-warning-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.73em"
                    height="1em"
                    viewBox="0 0 256 351"
                  >
                    <defs>
                      <filter
                        id="logosFirebase0"
                        width="200%"
                        height="200%"
                        x="-50%"
                        y="-50%"
                        filterUnits="objectBoundingBox"
                      >
                        <feGaussianBlur
                          in="SourceAlpha"
                          result="shadowBlurInner1"
                          stdDeviation="17.5"
                        />
                        <feOffset
                          in="shadowBlurInner1"
                          result="shadowOffsetInner1"
                        />
                        <feComposite
                          in="shadowOffsetInner1"
                          in2="SourceAlpha"
                          k2={-1}
                          k3={1}
                          operator="arithmetic"
                          result="shadowInnerInner1"
                        />
                        <feColorMatrix
                          in="shadowInnerInner1"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                        />
                      </filter>
                      <filter
                        id="logosFirebase1"
                        width="200%"
                        height="200%"
                        x="-50%"
                        y="-50%"
                        filterUnits="objectBoundingBox"
                      >
                        <feGaussianBlur
                          in="SourceAlpha"
                          result="shadowBlurInner1"
                          stdDeviation="3.5"
                        />
                        <feOffset
                          dx={1}
                          dy={-9}
                          in="shadowBlurInner1"
                          result="shadowOffsetInner1"
                        />
                        <feComposite
                          in="shadowOffsetInner1"
                          in2="SourceAlpha"
                          k2={-1}
                          k3={1}
                          operator="arithmetic"
                          result="shadowInnerInner1"
                        />
                        <feColorMatrix
                          in="shadowInnerInner1"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                        />
                      </filter>
                      <path
                        id="logosFirebase2"
                        d="m1.253 280.732l1.605-3.131l99.353-188.518l-44.15-83.475C54.392-1.283 45.074.474 43.87 8.188z"
                      />
                      <path
                        id="logosFirebase3"
                        d="m134.417 148.974l32.039-32.812l-32.039-61.007c-3.042-5.791-10.433-6.398-13.443-.59l-17.705 34.109l-.53 1.744z"
                      />
                    </defs>
                    <path
                      fill="#ffc24a"
                      d="m0 282.998l2.123-2.972L102.527 89.512l.212-2.017L58.48 4.358C54.77-2.606 44.33-.845 43.114 6.951z"
                    />
                    <use
                      fill="#ffa712"
                      fillRule="evenodd"
                      href="#logosFirebase2"
                    />
                    <use filter="url(#logosFirebase0)" href="#logosFirebase2" />
                    <path
                      fill="#f4bd62"
                      d="m135.005 150.38l32.955-33.75l-32.965-62.93c-3.129-5.957-11.866-5.975-14.962 0L102.42 87.287v2.86z"
                    />
                    <use
                      fill="#ffa50e"
                      fillRule="evenodd"
                      href="#logosFirebase3"
                    />
                    <use filter="url(#logosFirebase1)" href="#logosFirebase3" />
                    <path
                      fill="#f6820c"
                      d="m0 282.998l.962-.968l3.496-1.42l128.477-128l1.628-4.431l-32.05-61.074z"
                    />
                    <path
                      fill="#fde068"
                      d="m139.121 347.551l116.275-64.847l-33.204-204.495c-1.039-6.398-8.888-8.927-13.468-4.34L0 282.998l115.608 64.548a24.126 24.126 0 0 0 23.513.005"
                    />
                    <path
                      fill="#fcca3f"
                      d="M254.354 282.16L221.402 79.218c-1.03-6.35-7.558-8.977-12.103-4.424L1.29 282.6l114.339 63.908a23.943 23.943 0 0 0 23.334.006z"
                    />
                    <path
                      fill="#eeab37"
                      d="M139.12 345.64a24.126 24.126 0 0 1-23.512-.005L.931 282.015l-.93.983l115.607 64.548a24.126 24.126 0 0 0 23.513.005l116.275-64.847l-.285-1.752z"
                    />
                  </svg>
                </div>
                <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <p className="text-gray-700 dark:text-gray-300">
                    Amet praesentium deserunt ex commodi tempore fuga
                    voluptatem. Sit, sapiente.
                  </p>
                </div>
                <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
                  <a
                    href="#"
                    download="/"
                    className="group rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                  >
                    <span>Download</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m17 13l-5 5m0 0l-5-5m5 5V6"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/tailus-ui"
                    className="group flex items-center rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center"
                  >
                    <span className="sr-only">Source Code</span>
                    <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden p-[--card-padding] rounded-[--card-border-radius] bg-white border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color] dark:bg-[--card-dark-bg]">
              <div
                aria-hidden="true"
                className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-info-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-0 dark:group-hover:opacity-5"
              />
              <div className="relative">
                <div className="border border-info-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[calc(var(--card-border-radius)/2)] dark:bg-gray-900 dark:border-white/15 before:rounded-[calc((var(--card-border-radius)/2)-1px)] before:absolute before:inset-0 before:border-t before:border-white before:from-info-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#0080ff"
                      d="M64.142 102.96H39.24V78.522h24.903ZM39.24 122.131H20.373v-19.173H39.24Zm-18.866-19.173H4.53V87.167h15.843Zm43.394 24.814v-24.814c26.41 0 46.784-25.94 36.597-53.388c-3.775-10.15-11.694-18.42-22.26-22.181c-27.167-9.772-53.2 10.527-53.2 36.468H0c0-41.354 40.37-74.064 84.52-60.53c19.242 6.017 34.334 21.055 40.37 40.23c13.581 43.985-19.245 84.214-61.123 84.214Zm0 0"
                    />
                  </svg>
                </div>
                <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                  <p className="text-gray-700 dark:text-gray-300">
                    Amet praesentium deserunt ex commodi tempore fuga
                    voluptatem. Sit, sapiente.
                  </p>
                </div>
                <div className="flex gap-3 -mb-[--card-padding] py-4 border-t border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
                  <a
                    href="#"
                    download="/"
                    className="group rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center"
                  >
                    <span>Download</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m17 13l-5 5m0 0l-5-5m5 5V6"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/tailus-ui"
                    className="group flex items-center rounded-[--btn-border-radius] disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 size-8 justify-center"
                  >
                    <span className="sr-only">Source Code</span>
                    <svg
                      className="size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="py-36">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="text-center">
            <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">
              Loved by the Community
            </h2>
            <p className="mt-6 text-gray-700 dark:text-gray-300">
              Harum quae dolore orrupti aut temporibus ariatur.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="space-y-3">
              <div className="p-[--card-padding] rounded-[--card-border-radius] border bg-white border-[--ui-light-border-color] dark:bg-[--card-dark-bg] dark:border-[--ui-dark-border-color] group">
                <div className="flex gap-3">
                  <span className="relative block rounded-[--avatar-border-radius] text-lg size-10">
                    <img
                      className="h-full w-full rounded-[--avatar-border-radius] object-cover"
                      alt="John Doe"
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      loading="lazy"
                      width={120}
                      height={120}
                    />
                  </span>
                  <div className="w-[calc(100%-3.25rem)]">
                    <h3 className="font-medium text-gray-950 dark:text-white">
                      Jonathan Yombo
                    </h3>
                    <span className="block text-sm tracking-wide text-gray-600 dark:text-gray-400">
                      Software Ingeneer
                    </span>
                    <blockquote className="mt-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Tailus is really extraordinary and very practical, no
                        need to break your head. A real gold mine.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="p-[--card-padding] rounded-[--card-border-radius] border bg-white border-[--ui-light-border-color] dark:bg-[--card-dark-bg] dark:border-[--ui-dark-border-color] group">
                <div className="flex gap-3">
                  <span className="relative block rounded-[--avatar-border-radius] text-lg size-10">
                    <img
                      className="h-full w-full rounded-[--avatar-border-radius] object-cover"
                      alt="John Doe"
                      src="https://randomuser.me/api/portraits/men/6.jpg"
                      loading="lazy"
                      width={120}
                      height={120}
                    />
                  </span>
                  <div className="w-[calc(100%-3.25rem)]">
                    <h3 className="font-medium text-gray-950 dark:text-white">
                      Yves Kalume
                    </h3>
                    <span className="block text-sm tracking-wide text-gray-600 dark:text-gray-400">
                      GDE - Android
                    </span>
                    <blockquote className="mt-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        With no experience in webdesign I just redesigned my
                        entire website in a few minutes with tailwindcss thanks
                        to Tailus.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="p-[--card-padding] rounded-[--card-border-radius] border bg-white border-[--ui-light-border-color] dark:bg-[--card-dark-bg] dark:border-[--ui-dark-border-color] group">
                <div className="flex gap-3">
                  <span className="relative block rounded-[--avatar-border-radius] text-lg size-10">
                    <img
                      className="h-full w-full rounded-[--avatar-border-radius] object-cover"
                      alt="John Doe"
                      src="https://randomuser.me/api/portraits/men/7.jpg"
                      loading="lazy"
                      width={120}
                      height={120}
                    />
                  </span>
                  <div className="w-[calc(100%-3.25rem)]">
                    <h3 className="font-medium text-gray-950 dark:text-white">
                      Yucel Faruksahan
                    </h3>
                    <span className="block text-sm tracking-wide text-gray-600 dark:text-gray-400">
                      Tailkits Creator
                    </span>
                    <blockquote className="mt-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Great work on tailfolio template. This is one of the
                        best personal website that I have seen so far :)
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="p-[--card-padding] rounded-[--card-border-radius] border bg-white border-[--ui-light-border-color] dark:bg-[--card-dark-bg] dark:border-[--ui-dark-border-color] group">
                <div className="flex gap-3">
                  <span className="relative block rounded-[--avatar-border-radius] text-lg size-10">
                    <img
                      className="h-full w-full rounded-[--avatar-border-radius] object-cover"
                      alt="John Doe"
                      src="https://randomuser.me/api/portraits/men/8.jpg"
                      loading="lazy"
                      width={120}
                      height={120}
                    />
                  </span>
                  <div className="w-[calc(100%-3.25rem)]">
                    <h3 className="font-medium text-gray-950 dark:text-white">
                      Anonymous author
                    </h3>
                    <span className="block text-sm tracking-wide text-gray-600 dark:text-gray-400">
                      Doing something
                    </span>
                    <blockquote className="mt-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        I am really new to Tailwind and I want to give a go to
                        make some page on my own. I searched a lot of hero pages
                        and blocks online. However, most of them are not giving
                        me a clear view or needed some HTML/CSS coding
                        background to make some changes from the original or too
                        expensive to have. I downloaded the one of Tailus
                        template which is very clear to understand at the start
                        and you could modify the codes/blocks to fit perfectly
                        on your purpose of the page.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {/* Start of Testimonial 3 */}
              <div className="p-[--card-padding] rounded-[--card-border-radius] border bg-white border-[--ui-light-border-color] dark:bg-[--card-dark-bg] dark:border-[--ui-dark-border-color] group">
                <div className="flex gap-3">
                  <span className="relative block rounded-[--avatar-border-radius] text-lg size-10">
                    <img
                      className="h-full w-full rounded-[--avatar-border-radius] object-cover"
                      alt="John Doe"
                      src="https://randomuser.me/api/portraits/men/4.jpg"
                      loading="lazy"
                      width={120}
                      height={120}
                    />
                  </span>
                  <div className="w-[calc(100%-3.25rem)]">
                    <h3 className="font-medium text-gray-950 dark:text-white">
                      Shekinah Tshiokufila
                    </h3>
                    <span className="block text-sm tracking-wide text-gray-600 dark:text-gray-400">
                      Senior Software Ingeneer
                    </span>
                    <blockquote className="mt-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Tailus is redefining the standard of web design, with
                        these blocks it provides an easy and efficient way for
                        those who love beauty but may lack the time to implement
                        it. I can only recommend this incredible wonder.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              {/* Start of Testimonial 4 */}
              <div className="p-[--card-padding] rounded-[--card-border-radius] border bg-white border-[--ui-light-border-color] dark:bg-[--card-dark-bg] dark:border-[--ui-dark-border-color] group">
                <div className="flex gap-3">
                  <span className="relative block rounded-[--avatar-border-radius] text-lg size-10">
                    <img
                      className="h-full w-full rounded-[--avatar-border-radius] object-cover"
                      alt="John Doe"
                      src="https://randomuser.me/api/portraits/men/2.jpg"
                      loading="lazy"
                      width={120}
                      height={120}
                    />
                  </span>
                  <div className="w-[calc(100%-3.25rem)]">
                    <h3 className="font-medium text-gray-950 dark:text-white">
                      Oketa Fred
                    </h3>
                    <span className="block text-sm tracking-wide text-gray-600 dark:text-gray-400">
                      Fullstack Developer
                    </span>
                    <blockquote className="mt-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        I absolutely love Tailus! The component blocks are
                        beautifully designed and easy to use, which makes
                        creating a great-looking website a breeze.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              {/* Start of Testimonial 5 */}
              <div className="p-[--card-padding] rounded-[--card-border-radius] border bg-white border-[--ui-light-border-color] dark:bg-[--card-dark-bg] dark:border-[--ui-dark-border-color] group">
                <div className="flex gap-3">
                  <span className="relative block rounded-[--avatar-border-radius] text-lg size-10">
                    <img
                      className="h-full w-full rounded-[--avatar-border-radius] object-cover"
                      alt="John Doe"
                      src="https://randomuser.me/api/portraits/men/5.jpg"
                    />
                  </span>
                  <div className="w-[calc(100%-3.25rem)]">
                    <h3 className="font-medium text-gray-950 dark:text-white">
                      Zeki
                    </h3>
                    <span className="block text-sm tracking-wide text-gray-600 dark:text-gray-400">
                      Founder of ChatExtend
                    </span>
                    <blockquote className="mt-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Using TailsUI has been like unlocking a secret design
                        superpower. It's the perfect fusion of simplicity and
                        versatility, enabling us to create UIs that are as
                        stunning as they are user-friendly.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="p-[--card-padding] rounded-[--card-border-radius] border bg-white border-[--ui-light-border-color] dark:bg-[--card-dark-bg] dark:border-[--ui-dark-border-color] group">
                <div className="flex gap-3">
                  <span className="relative block rounded-[--avatar-border-radius] text-lg size-10">
                    <img
                      className="h-full w-full rounded-[--avatar-border-radius] object-cover"
                      alt="John Doe"
                      src="https://randomuser.me/api/portraits/men/9.jpg"
                      loading="lazy"
                      width={120}
                      height={120}
                    />
                  </span>
                  <div className="w-[calc(100%-3.25rem)]">
                    <h3 className="font-medium text-gray-950 dark:text-white">
                      Joseph Kitheka
                    </h3>
                    <span className="block text-sm tracking-wide text-gray-600 dark:text-gray-400">
                      Fullstack Developer
                    </span>
                    <blockquote className="mt-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Tailus has transformed the way I develop web
                        applications. Their extensive collection of UI
                        components, blocks, and templates has significantly
                        accelerated my workflow. The flexibility to customize
                        every aspect allows me to create unique user
                        experiences. Tailus is a game-changer for modern web
                        development!
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-[--card-padding] rounded-[--card-border-radius] border bg-white border-[--ui-light-border-color] dark:bg-[--card-dark-bg] dark:border-[--ui-dark-border-color] group">
                <div className="flex gap-3">
                  <span className="relative block rounded-[--avatar-border-radius] text-lg size-10">
                    <img
                      className="h-full w-full rounded-[--avatar-border-radius] object-cover"
                      alt="John Doe"
                      src="https://randomuser.me/api/portraits/men/10.jpg"
                      loading="lazy"
                      width={120}
                      height={120}
                    />
                  </span>
                  <div className="w-[calc(100%-3.25rem)]">
                    <h3 className="font-medium text-gray-950 dark:text-white">
                      Khatab Wedaa
                    </h3>
                    <span className="block text-sm tracking-wide text-gray-600 dark:text-gray-400">
                      MerakiUI Creator
                    </span>
                    <blockquote className="mt-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Tailus is an elegant, clean, and responsive tailwind css
                        components it's very helpfull to start fast with your
                        project.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="p-[--card-padding] rounded-[--card-border-radius] border bg-white border-[--ui-light-border-color] dark:bg-[--card-dark-bg] dark:border-[--ui-dark-border-color] group">
                <div className="flex gap-3">
                  <span className="relative block rounded-[--avatar-border-radius] text-lg size-10">
                    <img
                      className="h-full w-full rounded-[--avatar-border-radius] object-cover"
                      alt="John Doe"
                      src="https://randomuser.me/api/portraits/men/11.jpg"
                      loading="lazy"
                      width={120}
                      height={120}
                    />
                  </span>
                  <div className="w-[calc(100%-3.25rem)]">
                    <h3 className="font-medium text-gray-950 dark:text-white">
                      Rodrigo Aguilar
                    </h3>
                    <span className="block text-sm tracking-wide text-gray-600 dark:text-gray-400">
                      TailwindAwesome Creator
                    </span>
                    <blockquote className="mt-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        I love Tailus ❤️. The component blocks are
                        well-structured, simple to use, and beautifully
                        designed. It makes it really easy to have a good-looking
                        website in no time.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="p-[--card-padding] rounded-[--card-border-radius] border bg-white border-[--ui-light-border-color] dark:bg-[--card-dark-bg] dark:border-[--ui-dark-border-color] group">
                <div className="flex gap-3">
                  <span className="relative block rounded-[--avatar-border-radius] text-lg size-10">
                    <img
                      className="h-full w-full rounded-[--avatar-border-radius] object-cover"
                      alt="John Doe"
                      src="https://randomuser.me/api/portraits/men/12.jpg"
                      loading="lazy"
                      width={120}
                      height={120}
                    />
                  </span>
                  <div className="w-[calc(100%-3.25rem)]">
                    <h3 className="font-medium text-gray-950 dark:text-white">
                      Eric Ampire
                    </h3>
                    <span className="block text-sm tracking-wide text-gray-600 dark:text-gray-400">
                      Mobile Engineer at @BRPNews • @GoogleDevExpert for Android{" "}
                    </span>
                    <blockquote className="mt-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Tailus templates are the perfect solution for anyone who
                        wants to create a beautiful and functional website
                        without any web design experience. The templates are
                        easy to use, customizable, and responsive, and the
                        support team is always available to help. I highly
                        recommend Tailus templates to anyone who is looking to
                        create a website.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="p-[--card-padding] rounded-[--card-border-radius] border bg-white border-[--ui-light-border-color] dark:bg-[--card-dark-bg] dark:border-[--ui-dark-border-color] group">
                <div className="flex gap-3">
                  <span className="relative block rounded-[--avatar-border-radius] text-lg size-10">
                    <img
                      className="h-full w-full rounded-[--avatar-border-radius] object-cover"
                      alt="John Doe"
                      src="https://randomuser.me/api/portraits/men/13.jpg"
                      loading="lazy"
                      width={120}
                      height={120}
                    />
                  </span>
                  <div className="w-[calc(100%-3.25rem)]">
                    <h3 className="font-medium text-gray-950 dark:text-white">
                      Roland Tubonge
                    </h3>
                    <span className="block text-sm tracking-wide text-gray-600 dark:text-gray-400">
                      Software Engineer
                    </span>
                    <blockquote className="mt-3">
                      <p className="text-gray-700 dark:text-gray-300">
                        Tailus is so well designed that even with a very poor
                        knowledge of web design you can do miracles. Let
                        yourself be seduced!
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="pb-36">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="text-center">
            <h2 className="text-3xl text-gray-950 dark:text-white font-semibold">
              Built by the Community <br /> for the Community
            </h2>
            <p className="mt-6 text-gray-700 dark:text-gray-300">
              Harum quae dolore orrupti aut temporibus ariatur.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto flex justify-center flex-wrap gap-3">
            <a
              href="https://github.com/meschacirung"
              target="_blank"
              title="Méschac Irung"
              className="size-16 rounded-full border border-gray-950/5 dark:border-white/5"
            >
              <img
                alt="John Doe"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                className="rounded-full"
                loading="lazy"
                width={120}
                height={120}
              />
            </a>
            <a
              href="https://github.com/meschacirung"
              target="_blank"
              title="Méschac Irung"
              className="size-16 rounded-full border border-gray-950/5 dark:border-white/5"
            >
              <img
                alt="John Doe"
                src="https://randomuser.me/api/portraits/men/2.jpg"
                className="rounded-full"
                loading="lazy"
                width={120}
                height={120}
              />
            </a>
            <a
              href="https://github.com/meschacirung"
              target="_blank"
              title="Méschac Irung"
              className="size-16 rounded-full border border-gray-950/5 dark:border-white/5"
            >
              <img
                alt="John Doe"
                src="https://randomuser.me/api/portraits/men/3.jpg"
                className="rounded-full"
                loading="lazy"
                width={120}
                height={120}
              />
            </a>
            <a
              href="https://github.com/meschacirung"
              target="_blank"
              title="Méschac Irung"
              className="size-16 rounded-full border border-gray-950/5 dark:border-white/5"
            >
              <img
                alt="John Doe"
                src="https://randomuser.me/api/portraits/men/4.jpg"
                className="rounded-full"
                loading="lazy"
                width={120}
                height={120}
              />
            </a>
            <a
              href="https://github.com/meschacirung"
              target="_blank"
              title="Méschac Irung"
              className="size-16 rounded-full border border-gray-950/5 dark:border-white/5"
            >
              <img
                alt="John Doe"
                src="https://randomuser.me/api/portraits/men/5.jpg"
                className="rounded-full"
                loading="lazy"
                width={120}
                height={120}
              />
            </a>
            <a
              href="https://github.com/meschacirung"
              target="_blank"
              title="Méschac Irung"
              className="size-16 rounded-full border border-gray-950/5 dark:border-white/5"
            >
              <img
                alt="John Doe"
                src="https://randomuser.me/api/portraits/men/6.jpg"
                className="rounded-full"
                loading="lazy"
                width={120}
                height={120}
              />
            </a>
            <a
              href="https://github.com/meschacirung"
              target="_blank"
              title="Méschac Irung"
              className="size-16 rounded-full border border-gray-950/5 dark:border-white/5"
            >
              <img
                alt="John Doe"
                src="https://randomuser.me/api/portraits/men/7.jpg"
                className="rounded-full"
                loading="lazy"
                width={120}
                height={120}
              />
            </a>
            <a
              href="https://github.com/meschacirung"
              target="_blank"
              title="Méschac Irung"
              className="size-16 rounded-full border border-gray-950/5 dark:border-white/5"
            >
              <img
                alt="John Doe"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                className="rounded-full"
                loading="lazy"
                width={120}
                height={120}
              />
            </a>
            <a
              href="https://github.com/meschacirung"
              target="_blank"
              title="Méschac Irung"
              className="size-16 rounded-full border border-gray-950/5 dark:border-white/5"
            >
              <img
                alt="John Doe"
                src="https://randomuser.me/api/portraits/men/8.jpg"
                className="rounded-full"
                loading="lazy"
                width={120}
                height={120}
              />
            </a>
            <a
              href="https://github.com/meschacirung"
              target="_blank"
              title="Méschac Irung"
              className="size-16 rounded-full border border-gray-950/5 dark:border-white/5"
            >
              <img
                alt="John Doe"
                src="https://randomuser.me/api/portraits/men/9.jpg"
                className="rounded-full"
                loading="lazy"
                width={120}
                height={120}
              />
            </a>
            <a
              href="https://github.com/meschacirung"
              target="_blank"
              title="Méschac Irung"
              className="size-16 rounded-full border border-gray-950/5 dark:border-white/5"
            >
              <img
                alt="John Doe"
                src="https://randomuser.me/api/portraits/men/10.jpg"
                className="rounded-full"
                loading="lazy"
                width={120}
                height={120}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer className="rounded-xl border border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
    <div className="max-w-6xl mx-auto space-y-16 px-6 py-16 text-gray-600 2xl:px-0">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8 border-[--ui-light-border-color] dark:border-[--ui-dark-border-color]">
        <a href="/" aria-label="tailus logo">
          <svg
            className="text-gray-950 dark:text-white h-7"
            viewBox="0 0 298 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M107 30.7857H113.6V16.3429H122.686V30.7857H131.386V38.5H122.686V53.5429C122.686 55.4286 123 56.8429 123.629 57.7857C124.286 58.7286 125.214 59.2 126.414 59.2C127.414 59.2 128.2 59.0143 128.771 58.6429C129.371 58.2714 129.729 58.0143 129.843 57.8714L133.229 64.5143C133.057 64.6857 132.557 64.9714 131.729 65.3714C130.9 65.7714 129.829 66.1429 128.514 66.4857C127.2 66.8286 125.7 67 124.014 67C121.043 67 118.557 66.1143 116.557 64.3429C114.586 62.5714 113.6 59.8 113.6 56.0286V38.5H107V30.7857ZM167.156 65.9714V59.4571C166.928 60.1429 166.27 61.0857 165.185 62.2857C164.128 63.4857 162.67 64.5714 160.813 65.5429C158.985 66.5143 156.813 67 154.299 67C151.013 67 148.056 66.2143 145.428 64.6429C142.799 63.0714 140.728 60.8857 139.213 58.0857C137.699 55.2857 136.942 52.0571 136.942 48.4C136.942 44.7429 137.699 41.5143 139.213 38.7143C140.728 35.9143 142.799 33.7286 145.428 32.1571C148.056 30.5571 151.013 29.7571 154.299 29.7571C156.756 29.7571 158.885 30.1857 160.685 31.0429C162.485 31.9 163.928 32.8857 165.013 34C166.128 35.1143 166.813 36.0857 167.07 36.9143V30.7857H176.156V65.9714H167.156ZM145.985 48.4C145.985 50.6571 146.485 52.6286 147.485 54.3143C148.485 56 149.785 57.3 151.385 58.2143C153.013 59.1286 154.756 59.5857 156.613 59.5857C158.613 59.5857 160.385 59.1143 161.928 58.1714C163.499 57.2286 164.728 55.9286 165.613 54.2714C166.528 52.5857 166.985 50.6286 166.985 48.4C166.985 46.1714 166.528 44.2286 165.613 42.5714C164.728 40.8857 163.499 39.5714 161.928 38.6286C160.385 37.6571 158.613 37.1714 156.613 37.1714C154.756 37.1714 153.013 37.6429 151.385 38.5857C149.785 39.5 148.485 40.8 147.485 42.4857C146.485 44.1714 145.985 46.1429 145.985 48.4ZM186.271 65.9714V30.7857H195.4V65.9714H186.271ZM190.943 20.2429C189.4 20.2429 188.071 19.6857 186.957 18.5714C185.871 17.4571 185.329 16.1286 185.329 14.5857C185.329 13.0429 185.871 11.7143 186.957 10.6C188.071 9.45714 189.4 8.88571 190.943 8.88571C191.971 8.88571 192.914 9.15714 193.771 9.7C194.657 10.2143 195.357 10.9 195.871 11.7571C196.414 12.5857 196.686 13.5286 196.686 14.5857C196.686 16.1286 196.129 17.4571 195.014 18.5714C193.9 19.6857 192.543 20.2429 190.943 20.2429ZM215.437 65.9714H206.222V7H215.437V65.9714ZM234.044 48.0571C234.044 51.4857 234.744 54.2143 236.144 56.2429C237.572 58.2714 239.815 59.2857 242.872 59.2857C245.958 59.2857 248.201 58.2714 249.601 56.2429C251.001 54.2143 251.701 51.4857 251.701 48.0571V30.7857H260.787V49.2143C260.787 52.7571 260.087 55.8714 258.687 58.5571C257.287 61.2143 255.258 63.2857 252.601 64.7714C249.944 66.2571 246.701 67 242.872 67C239.072 67 235.844 66.2571 233.187 64.7714C230.53 63.2857 228.501 61.2143 227.101 58.5571C225.701 55.8714 225.001 52.7571 225.001 49.2143V30.7857H234.044V48.0571ZM284.016 29.7571C285.988 29.7571 287.816 29.9429 289.502 30.3143C291.188 30.6857 292.631 31.1286 293.831 31.6429C295.031 32.1571 295.859 32.5857 296.316 32.9286L292.973 38.5857C292.402 38.1 291.373 37.5429 289.888 36.9143C288.431 36.2857 286.788 35.9714 284.959 35.9714C283.131 35.9714 281.588 36.3 280.331 36.9571C279.073 37.6143 278.445 38.6 278.445 39.9143C278.445 41.2 279.102 42.2286 280.416 43C281.759 43.7714 283.573 44.4143 285.859 44.9286C287.745 45.3571 289.545 45.9571 291.259 46.7286C292.973 47.4714 294.373 48.5429 295.459 49.9429C296.573 51.3143 297.131 53.1571 297.131 55.4714C297.131 57.6714 296.659 59.5143 295.716 61C294.802 62.4571 293.573 63.6286 292.031 64.5143C290.488 65.4 288.773 66.0286 286.888 66.4C285.031 66.8 283.159 67 281.273 67C278.959 67 276.888 66.7714 275.059 66.3143C273.259 65.8571 271.759 65.3286 270.559 64.7286C269.359 64.1 268.502 63.5714 267.988 63.1429L271.331 56.8C272.073 57.5143 273.288 58.2714 274.973 59.0714C276.659 59.8429 278.545 60.2286 280.631 60.2286C282.859 60.2286 284.645 59.8 285.988 58.9429C287.331 58.0857 288.002 56.9429 288.002 55.5143C288.002 54.4571 287.673 53.6 287.016 52.9429C286.388 52.2857 285.516 51.7571 284.402 51.3571C283.288 50.9571 282.045 50.6 280.673 50.2857C279.388 49.9714 278.088 49.5714 276.773 49.0857C275.488 48.5714 274.302 47.9143 273.216 47.1143C272.131 46.2857 271.259 45.2571 270.602 44.0286C269.945 42.8 269.616 41.3571 269.616 39.7C269.616 37.5857 270.288 35.7857 271.631 34.3C272.973 32.8143 274.745 31.6857 276.945 30.9143C279.145 30.1429 281.502 29.7571 284.016 29.7571Z"
              fill="currentColor"
            />
            <path
              d="M53.6523 31.5142C53.6523 28.5967 51.2872 26.2316 48.3697 26.2316C45.4522 26.2316 43.0871 28.5967 43.0871 31.5142C43.0871 34.4317 45.4522 36.7968 48.3697 36.7968C51.2872 36.7968 53.6523 34.4317 53.6523 31.5142Z"
              fill="currentColor"
            />
            <path
              d="M42.6502 36.769C42.5195 36.7593 42.3875 36.7543 42.2543 36.7543C39.3572 36.7543 37.0087 39.1029 37.0087 42C37.0087 44.8971 39.3572 47.2457 42.2543 47.2457C45.1514 47.2457 47.5 44.8971 47.5 42C47.5 40.92 47.1736 39.9162 46.6141 39.0819C45.0637 38.7237 43.691 37.9013 42.6502 36.769Z"
              fill="currentColor"
            />
            <path
              d="M34.8047 39.7898C34.5971 40.4904 34.4857 41.2322 34.4857 42C34.4857 42.7679 34.5971 43.5097 34.8047 44.2102C33.969 46.0163 32.1408 47.2693 30.02 47.2693C27.1098 47.2693 24.7507 44.9102 24.7507 42C24.7507 39.0899 27.1098 36.7308 30.02 36.7308C32.1408 36.7308 33.969 37.9837 34.8047 39.7898Z"
              fill="currentColor"
            />
            <path
              d="M48.3708 47.2122C51.2834 47.2122 53.6445 49.5733 53.6445 52.4859C53.6445 55.3984 51.2834 57.7595 48.3708 57.7595C45.4583 57.7595 43.0971 55.3984 43.0971 52.4859C43.0971 51.4104 43.4191 50.4101 43.9718 49.5761C45.5507 49.2193 46.9472 48.3816 47.9994 47.225C48.1221 47.2165 48.246 47.2122 48.3708 47.2122Z"
              fill="currentColor"
            />
            <path
              d="M59.7461 42C59.7461 39.0938 57.3901 36.7378 54.4838 36.7378C54.3567 36.7378 54.2306 36.7423 54.1057 36.7512C53.0573 37.8988 51.6691 38.7307 50.1003 39.0877C49.9504 39.3129 49.8173 39.5503 49.703 39.7982C49.909 40.4962 50.0195 41.2352 50.0195 42C50.0195 42.7648 49.909 43.5038 49.703 44.2019C49.8173 44.4497 49.9504 44.6872 50.1003 44.9124C51.6691 45.2694 53.0573 46.1013 54.1057 47.2489C54.2306 47.2578 54.3567 47.2623 54.4838 47.2623C57.3901 47.2623 59.7461 44.9063 59.7461 42Z"
              fill="currentColor"
            />
            <path
              d="M40.6028 52.4859C40.6028 51.718 40.7143 50.9761 40.9219 50.2755C40.809 50.0315 40.678 49.7976 40.5306 49.5755C38.9544 49.2187 37.56 48.3825 36.5088 47.2283C36.3856 47.2197 36.2612 47.2153 36.1358 47.2153C36.0102 47.2153 35.8855 47.2197 35.7621 47.2284C34.7111 48.3823 33.317 49.2184 31.7411 49.5753C31.1877 50.4093 30.8653 51.4099 30.8653 52.4859C30.8653 55.3967 33.225 57.7564 36.1358 57.7564C38.2573 57.7564 40.0861 56.503 40.9219 54.6962C40.7143 53.9957 40.6028 53.2538 40.6028 52.4859Z"
              fill="currentColor"
            />
            <path
              d="M40.5094 34.4263C40.6608 34.1992 40.795 33.9595 40.9102 33.7094C40.705 33.0126 40.595 32.2752 40.595 31.512C40.595 30.7489 40.705 30.0115 40.9102 29.3147C40.0777 27.5058 38.2492 26.25 36.1274 26.25C33.2213 26.25 30.8654 28.6059 30.8654 31.512C30.8654 32.5894 31.1892 33.5912 31.7448 34.4253C33.3117 34.7828 34.6983 35.6141 35.7457 36.7605C35.8718 36.7695 35.9991 36.7741 36.1274 36.7741C36.2572 36.7741 36.3858 36.7694 36.5132 36.7602C37.5596 35.615 38.9445 34.7843 40.5094 34.4263Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42 84C65.196 84 84 65.196 84 42C84 18.804 65.196 0 42 0C18.804 0 0 18.804 0 42C0 65.196 18.804 84 42 84ZM42 74.518C24.0408 74.518 9.48201 59.9592 9.48201 42C9.48201 24.0408 24.0408 9.48201 42 9.48201C59.9592 9.48201 74.518 24.0408 74.518 42C74.518 59.9592 59.9592 74.518 42 74.518Z"
              fill="currentColor"
            />
          </svg>
        </a>
        <div className="flex gap-3">
          <a
            href="https://github.com/tailus-ui"
            target="blank"
            aria-label="github"
            className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
          >
            <svg
              className="size-5"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/tailus_ui"
            target="blank"
            aria-label="twitter"
            className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
          >
            <svg
              className="size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
              />
            </svg>
          </a>
          <a
            href="https://youtube.com/@tailus-ui"
            target="blank"
            aria-label="medium"
            className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
          >
            <svg
              className="size-5"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        <div>
          <span className="font-medium text-gray-950 dark:text-white">
            Enterprise
          </span>
          <ul className="mt-4 list-inside space-y-4">
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                Customers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                Enterprise
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                Partners
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                Jobs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-sm font-medium text-gray-950 dark:text-white">
            Product
          </span>
          <ul className="mt-4 list-inside space-y-4">
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                Security
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                Customization
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                Enterprise
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                Partners
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-sm font-medium text-gray-950 dark:text-white">
            Docs
          </span>
          <ul className="mt-4 list-inside space-y-4">
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                Introduction
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                Installation
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                Utils
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                Principles
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                Jargon
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                Plugin
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                Customizer
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                Boilerplates
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-sm font-medium text-gray-950 dark:text-white">
            Community
          </span>
          <ul className="mt-4 list-inside space-y-4">
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                Slack
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
              >
                X / Twitter
              </a>
            </li>
          </ul>
          <form className="mt-12 max-w-xs w-full">
            <div className="space-y-2.5 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-gray-950 dark:text-white has-[:disabled]:has-[:where(label,span)]:text-gray-600 dark:has-[:disabled]:has-[:where(label,span)]:text-gray-400">
              <label className="block font-medium text-sm" htmlFor="email">
                Subscribe to our newsletter
              </label>
              <input
                className="w-full focus:outline rounded-[--field-border-radius] appearance-none transition duration-300 peer border shadow focus:outline-2 focus:-outline-offset-1 focus:border-transparent disabled:shadow-none bg-transparent outline-primary-600 shadow-gray-700/5 border-[--field-light-border-color] hover:border-[--field-light-border-hover-color] placeholder-gray-400 text-gray-700 dark:bg-[--field-dark-bg] dark:focus:bg-[--field-dark-focus-bg] dark:outline-primary-500 dark:shadow-gray-950/40 dark:border-[--field-dark-border-color] dark:hover:border-[--field-dark-border-hover-color] dark:placeholder-gray-600 dark:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:placeholder-gray-300 dark:disabled:bg-gray-600/10 dark:disabled:border-gray-600/20 dark:disabled:text-gray-600 dark:disabled:placeholder-gray-700 text-base h-9 px-3"
                placeholder="Your email"
                type="email"
                id="email"
                required=""
                name="email"
              />
              <span className="hidden peer-disabled:text-gray-600 dark:peer-disabled:text-gray-400 text-gray-500 dark:text-gray-400 text-sm">
                Helper message
              </span>
            </div>
            <button
              type="submit"
              className="mt-3 w-full h-9 lg:w-fit group flex items-center relative border rounded-[--btn-border-radius] *:select-none [&>*:not(.sr-only)]:relative before:rounded-[calc(var(--btn-border-radius)-1px)] before:absolute before:inset-0 before:border before:bg-gradient-to-b *:disabled:opacity-20 disabled:text-gray-950/40 disabled:border-gray-200 disabled:bg-gray-100 disabled:*:text-gray-300 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:before:border-0 dark:before:border-t dark:before:shadow-inner dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 disabled:dark:*:text-gray-700 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none dark:*:disabled:!text-white text-white border-gray-950 bg-gray-600 before:border-gray-600 before:from-gray-800 hover:bg-gray-900 active:bg-gray-950 dark:text-gray-950 dark:before:border-gray-200 dark:before:from-gray-200 dark:bg-white dark:before:shadow-white/10 dark:hover:bg-gray-100 dark:active:bg-gray-300 dark:active:before:from-gray-200 lg:text-sm lg:h-8 px-3 justify-center"
            >
              <span>Subscribe</span>
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-md bg-gray-100 px-6 py-3 dark:bg-gray-900">
        <span className="text-gray-600 dark:text-gray-400">
          © tailus 2021 - Present
        </span>
        <a
          href="#"
          className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
        >
          Licence
        </a>
      </div>
    </div>
  </footer>
</>

    </div>
  )
}

export default  Home
