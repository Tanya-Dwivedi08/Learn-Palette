"use client"
import React, { useEffect, useState } from 'react'
const Lecture = () => {
const [lecture, setlecture] = useState([])

const fetchlectures = async () => {
const res= await fetch('http://localhost:5000/lecture/getall');
console.log(res.status);
if(res.status === 200) {
    const data = await res.json();
    console.log(data);
    setlecture(data)
}}
useEffect(() => {
    fetchlectures();
  }, []);

  const displayLectures = () => {
     return lecture.map((lec) => (
        <a
        className="hover:translate-y-1"
        href=""
      >
        <div className="overflow-hidden shadow m-3 p-3 rounded-md bg-white-100">
          <div className="aspect-w-3 aspect-h-2">
            <img
              className="h-full w-full object-cover object-center"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQGthH36J0moHB-NKWhWNszudRstLAon6Iz_KvNq8Cxn5Sq9ZRJoNnAc1LXSl85ltKTM&usqp=CAU"
              alt="Image post 4"
              loading="lazy"
            />
          </div>
          <div className="px-3 pt-4 pb-6 text-center">
            <h2 className="text-xl font-semibold">{lec.subject}</h2>
            <div className="mt-1 text-xs text-gray-400">{lec.createdAt}</div>
            <div className="mt-2 text-sm">
             {lec.topic}
            </div>
          </div>
          <div className="text-center"> 
          <a
                 href={'/viewLecture/' + lec._id}
               className="inline-flex items-center  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
             >
                 Read more
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
      </a>
    //     <div className="max-w-sm  bg-white border mb-5 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
     
    //     <div className="p-5">
    //     <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-500 dark:text-white">
    //               {lec.subject}
    //             </h5>
    //         <a href="#">
    //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //               {lec.topic}
    //             </h5>
    //         </a>
           
               
         
    //         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //             {lec.description}
    //         </p>
    //         
    //     </div>
    // </div>
     ))
  }


  return (
    <>
    
    <div className='grid grid-cols-4'>
           {displayLectures()}
        </div>
    
    </>
  )
}

export default Lecture