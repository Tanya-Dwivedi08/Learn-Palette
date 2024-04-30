'use client'
import React, { useEffect, useState } from 'react'

const classroom = () => {
   const [classData, setclassData] = useState([])

const fetchclass = async () => {
const res= await fetch('http://localhost:5000/class/getall');
console.log(res.status);
if(res.status === 200) {
    const data = await res.json();
    console.log(data);
    setclassData(data)
}}
useEffect(() => {
    fetchclass();
  }, []);

  const displayclasss = () => {
     return classData.map((classroom) => (
        <div className='grid grid-cols-2 rows-5 mb-2 mt-6 ml-3 mr-4'>
        <div className="max-w-sm my-9 mx-2 ms-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          
            <div className="p-7 ">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                       {classroom.name}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                 {classroom.description}
                </p>
                <a
                    href={`/viewClass/${classroom._id}`}
                    className="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    View Classroom
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a>
            </div>
        </div>
   


</div>
     ))
  }


  return (
    <>
    
    <div className='grid grid-cols-3'>
           {displayclasss()}
        </div>
    
    </>
  )
}
export default classroom;
