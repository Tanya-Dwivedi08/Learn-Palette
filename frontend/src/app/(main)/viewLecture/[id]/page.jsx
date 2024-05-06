'use client'
import { useEffect, useState } from 'react'

import { useParams } from 'next/navigation';
import Link from 'next/link';

const Viewlectures = () => {
  const { id } = useParams();

  const [lecturesList, setlecturesList] = useState([]);
  const fetchTeacherData = async () => {
    const res = await fetch('http://localhost:5000/lecture/getbyid/' + id);
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setlecturesList(data);
    }
  };

  useEffect(() => {
    fetchTeacherData();
  }, []);

  return (
    <>
      {
        lecturesList !== null ? (

          <div className="container pt-24 px-16">
            <div className="row ">
              <div className="col-md-4 block m-auto">

                <img src={'http://localhost:5000/' + lecturesList.image} onClick={window.scrollTo(0, 0)} alt="" className="  img-fluid  w-100  " />
              </div>
              <Link href="/user/whiteboard" className="w-full h-9 lg:w-fit group flex mb-3 items-center relative border rounded-[--btn-border-radius] *:select-none [&>*:not(.sr-only)]:relative before:rounded-[calc(var(--btn-border-radius)-1px)] before:absolute before:inset-0 before:border before:bg-gradient-to-b *:disabled:opacity-20 disabled:text-gray-950/40 disabled:border-gray-200 disabled:bg-gray-100 disabled:*:text-gray-300 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:before:border-0 dark:before:border-t dark:before:shadow-inner dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 disabled:dark:*:text-gray-700 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none dar k:*:disabled:!text-white text-white border-gray-950 bg-gray-600 before:border-gray-600 before:from-gray-800 hover:bg-gray-900 active:bg-gray-950 dark:text-gray-950 dark:before:border-gray-200 dark:before:from-gray-200 dark:bg-white dark:before:shadow-white/10 dark:hover:bg-gray-100 dark:active:bg-gray-300 dark:active:before:from-gray-200 lg:text-sm lg:h-8 px-3 justify-center">
                <span>whiteboard</span>
              </Link>
              <>
                <div classname="  bg-gray-100">
                  <div classname="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div classname="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                      <div classname="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        <div className='grid grid-cols-3'>
                          <div classname="group relative">
                            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                              <svg
                                className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                              </svg>
                              <a href="#">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                  Lecture
                                </h5>
                              </a>
                            </div>

                          </div>
                          <div classname="">
                            <div classname="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                              <img
                                // src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
                                src="https://png.pngtree.com/png-vector/20220302/ourmid/pngtree-whiteboard-png-image_4474605.png"
                                alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                                classname="h-full w-full object-cover object-center"
                              />
                            </div>

                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
              <div className="col-md-6">
                <h1 className=' fw-semibold fs-2 mt-3 mb-3' style={{ fontFamily: "serif" }}>{lecturesList.subject}</h1>
                <p className='text-red-800 fs-5 fw-bold' style={{ fontFamily: "cursive" }}>{lecturesList.description}</p>
                <p className='text-secondary mt-4 mb-4 fs-5' style={{ fontFamily: "serif" }}>{lecturesList.topic}</p>
             </div>
            </div>
            <div className="row pt-24">
            </div>
          </div>

        ) : (
          <div>
            Loading
          </div>
        )
      }
    </>
  )
}


export default Viewlectures
