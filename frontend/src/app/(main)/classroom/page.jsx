"use client"
import React, { useEffect, useState } from 'react'
const classroom = () => {
<<<<<<< HEAD
const [classroom, setclassroom] = useState([])

    const fetchclassroom = async () => {
        const res= await fetch('http://localhost:5000/classroom/getall');
        console.log(res.status);
        if(res.status === 200) {
            const data = await res.json();
            console.log(data);
            setclassroom(data)
        }}
        useEffect(() => {
            fetchclassroom();
          }, []);

          
const displayclassroom = () => {
    return classroom.map((classroom) => (
        <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="/docs/images/people/profile-picture-3.jpg"
          alt=" "
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        {classroom.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
        { classroom.Description}
        </span>
        <div className="flex mt-4 md:mt-6">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add friend
          </a>
          <a
            href="#"
            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Message
          </a>
        </div>
      </div>
    ))
}
        
  return (
    <div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <div className="flex justify-end px-4 pt-4">
    <button
      id="dropdownButton"
      data-dropdown-toggle="dropdown"
      className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
      type="button"
    >
      <span className="sr-only">Open dropdown</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 3"
      >
        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
      </svg>
    </button>
    {/* Dropdown menu */}
    <div
      id="dropdown"
      className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    >
      {/* <ul className="py-2" aria-labelledby="dropdownButton">
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Edit
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Export Data
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Delete
          </a>
        </li>
      </ul> */}
    </div>
  </div>
  <div>
  {displayclassroom()}

  </div>



=======
  return (
    <div>
      <div className="flex items-center justify-center w-screen min-h-screen p-10">
  {/* Component Start */}
  <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
    {/* Tile 1 */}
    <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
      <div className="h-40 bg-gray-400 rounded-lg" />
      <div className="flex flex-col items-start mt-4">
        <h4 className="text-xl font-semibold">Heading</h4>
        <p className="text-sm">
          Some text about the thing that goes over a few lines.
        </p>
        <a
          className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase"
          href="#"
        >
          Click Here
        </a>
      </div>
    </div>
    {/* Tile 2 */}
    <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
      <div className="h-40 bg-gray-400 rounded-lg" />
      <div className="flex flex-col items-start mt-4">
        <h4 className="text-xl font-semibold">Heading</h4>
        <p className="text-sm">
          Some text about the thing that goes over a few lines.
        </p>
        <a
          className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase"
          href="#"
        >
          Click Here
        </a>
      </div>
    </div>
    {/* Tile 3 */}
    <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
      <div className="h-40 bg-gray-400 rounded-lg" />
      <div className="flex flex-col items-start mt-4">
        <h4 className="text-xl font-semibold">Heading</h4>
        <p className="text-sm">
          Some text about the thing that goes over a few lines.
        </p>
        <a
          className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase"
          href="#"
        >
          Click Here
        </a>
      </div>
    </div>
    {/* Tile 4 */}
    <div className="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
      <div className="h-40 bg-gray-400 rounded-lg" />
      <div className="flex flex-col items-start mt-4">
        <h4 className="text-xl font-semibold">Heading</h4>
        <p className="text-sm">
          Some text about the thing that goes over a few lines.
        </p>
        <a
          className="p-2 leading-none rounded font-medium mt-3 bg-gray-400 text-xs uppercase"
          href="#"
        >
          Click Here
        </a>
      </div>
    </div>
  </div>
  {/* Component End  */}
>>>>>>> 073136945c8b3f59ad279bcad9580e8fdef6fb21
</div>

    </div>
    
  )
}

<<<<<<< HEAD
export default classroom;
=======
export default classroom;
>>>>>>> 073136945c8b3f59ad279bcad9580e8fdef6fb21