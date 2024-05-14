'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const classroom = () => {
    const [classData, setclassData] = useState([])

    const fetchclass = async () => {
        const res = await fetch('http://localhost:5000/class/getall');
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setclassData(data)
        }
    }
    useEffect(() => {
        fetchclass();
    }, []);

    const displayclasss = () => {
        return classData.map((classroom) => (

            <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-auto p-4  lg:mx-2 md:mx-2 justify-between">
                {/*Top user 1*/}
                <div className="rounded rounded-t-lg overflow-hidden shadow max-w-m my-4 mt-3">
                    <img src="https://www.learncube.com/images/blog_images/virtual_classroom_api.jpg" alt="" className="w-full" />
                    <div className="flex justify-center -mt-10">
                        <img
                            src="https://i.imgur.com/8Km9tLL.jpg"
                            alt=""
                            className="rounded-full border-solid border-white border-2 -mt-3"
                        />
                    </div>
                    <div className="text-center px-3 pb-6 pt-2">
                        <h3 className="text-white text-sm bold font-sans">{classroom.name}</h3>
                        <p className="mt-2 font-sans font-light text-grey-700">
                            {classroom.description}
                        </p>
                    </div>
                    <div className="flex justify-center pb-3 text-grey-dark">
                        <Link href={`/viewClass/${classroom._id}`}><button className="bg-purple-900 text-white px-3 py-1 rounded">View class</button>
                        </Link>  </div>
                </div>
            </div>


            // <div className='grid grid-cols-2 rows-5  mt-6 ml-3 mr-4'>
            //     <div className="max-w-sm my-9 mx-2 ms-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            //         <div className="p-7 ">
            //             <a href="#">
            //                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            //                     {classroom.name}
            //                 </h5>
            //             </a>
            //             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            //                 {classroom.description}
            //             </p>
            //             <a
            //                
            //                 className="inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            //             >

            //                 View Classroom
            //                 <svg
            //                     className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            //                     aria-hidden="true"
            //                     xmlns="http://www.w3.org/2000/svg"
            //                     fill="none"
            //                     viewBox="0 0 14 10"
            //                 >
            //                     <path
            //                         stroke="currentColor"
            //                         strokeLinecap="round"
            //                         strokeLinejoin="round"
            //                         strokeWidth={2}
            //                         d="M1 5h12m0 0L9 1m4 4L9 9"
            //                     />
            //                 </svg>
            //             </a>
            //         </div>
            //     </div>



            // </div>
        ))
    }


    return (
        <>

            <div className='grid grid-cols-4'>
                {displayclasss()}
            </div>

        </>
    )
}
export default classroom;
