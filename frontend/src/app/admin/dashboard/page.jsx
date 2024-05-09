import Link from 'next/link'
import React from 'react'

const AdminDashboard = () => {
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Dashboard</title>
  <meta name="author" content="name" />
  <meta name="description" content="description here" />
  <meta name="keywords" content="keywords,here" />
  <Link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
  />
  <Link
    rel="stylesheet"
    href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
  />{" "}
  {/*Replace with your tailwind.css once created*/}
  <Link
    href="https://afeld.github.io/emoji-css/emoji.css"
    rel="stylesheet"
  />{" "}
  {/*Totally optional :) */}
  <header>
    {/*Nav*/}
    <nav
      aria-label="menu nav"
      className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0"
    >
      <div className="flex flex-wrap items-center">
        <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
          {/* <Link href="#" aria-label="Home">
            <span className="text-xl pl-2">
              <i className="em em-grinning" />
            </span>
          </Link> */}
          <Link
                className="inline-block py-6 px-8 text-white no-underline"
                href="/student-signup"
              >
              LEARN PALETTE
              </Link>
        </div>
        <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
          <span className="relative w-full">
            <input
              aria-label="search"
              type="search"
              id="search"
              placeholder="Search"
              className="w-full bg-gray-700 text-white transition border border-transparent focus:outline-none focus:border-gray-300 rounded py-3 px-2 pl-10 appearance-none leading-normal"
            />
            
            <div
              className="absolute search-icon"
              style={{ top: "1rem", left: ".8rem" }}
            >
              <svg
                className="fill-current pointer-events-none text-white w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
            </div>
          </span>
        </div>
        <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="flex-1 md:flex-none md:mr-3">
              <Link
                className="inline-block py-2 px-4 text-white no-underline"
                href="/teacher-signup"
              >
               Signup
              </Link>
            </li>
            <li className="flex-1 md:flex-none md:mr-3">
              <Link
                className="inline-block text-gray-400 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                href="/teacher-login"
              >
              Login
              </Link>
            </li>
            <li className="flex-1 md:flex-none md:mr-3">
              <div className="relative inline-block">
                <button
                  onclick="toggleDD('myDropdown')"
                  className="drop-button text-white py-2 px-2"
                >
                  {" "}
                  <span className="pr-2">
                    <i className="em em-robot_face" />
                  </span>{" "}
                  Hi, User{" "}
                  <svg
                    className="h-3 fill-current inline"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </button>
                <div
                  id="myDropdown"
                  className="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible"
                >
                  <input
                    type="text"
                    className="drop-search p-2 text-gray-600"
                    placeholder="Search.."
                    id="myInput"
                    onkeyup="filterDD('myDropdown','myInput')"
                  />
                  <Link
                    href="/admin/profile"
                    className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                  >
                    <i className="fa fa-user fa-fw" /> Profile
                  </Link>
                  <Link
                    href="#"
                    className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                  >
                    <i className="fa fa-cog fa-fw" /> Settings
                  </Link>
                  <div className="border border-gray-800" />
                  <Link
                    href="#"
                    className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                  >
                    <i className="fas fa-sign-out-alt fa-fw" /> Log Out
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main>
  <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
  <a href="#">
    <img
      className="w-auto h-6 sm:h-7"
      src="https://merakiui.com/images/logo.svg"
      alt=""
    />
  </a>
  <div className="relative mt-6">
    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    <input
      type="text"
      className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
      placeholder="Search"
    />
  </div>
  <div className="flex flex-col justify-between flex-1 mt-6">
    <nav>
      <a
        className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200"
        href="#"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="mx-4 font-medium">Dashboard</span>
      </a>
      <a
        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="mx-4 font-medium">Accounts</span>
      </a>
      <a
        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="mx-4 font-medium">Tickets</span>
      </a>
      <a
        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="mx-4 font-medium">Settings</span>
      </a>
      <hr className="my-6 border-gray-200 dark:border-gray-600" />
      <a
        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="mx-4 font-medium">Tickets</span>
      </a>
      <a
        className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="mx-4 font-medium">Settings</span>
      </a>
    </nav>
    <a href="#" className="flex items-center px-4 -mx-2">
      <img
        className="object-cover mx-2 rounded-full h-9 w-9"
        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        alt="avatar"
      />
      <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
        John Doe
      </span>
    </a>
  </div>
</aside>

  </main>
</>

    </div>
  )
}

export default AdminDashboard
