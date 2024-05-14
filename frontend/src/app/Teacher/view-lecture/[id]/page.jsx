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
              {/* <Link href="/Teacher/whiteboard\[id]" className="w-full h-9 lg:w-fit group flex mb-3 items-center relative border rounded-[--btn-border-radius] *:select-none [&>*:not(.sr-only)]:relative before:rounded-[calc(var(--btn-border-radius)-1px)] before:absolute before:inset-0 before:border before:bg-gradient-to-b *:disabled:opacity-20 disabled:text-gray-950/40 disabled:border-gray-200 disabled:bg-gray-100 disabled:*:text-gray-300 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:before:border-0 dark:before:border-t dark:before:shadow-inner dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 disabled:dark:*:text-gray-700 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none dar k:*:disabled:!text-white text-white border-gray-950 bg-gray-600 before:border-gray-600 before:from-gray-800 hover:bg-gray-900 active:bg-gray-950 dark:text-gray-950 dark:before:border-gray-200 dark:before:from-gray-200 dark:bg-white dark:before:shadow-white/10 dark:hover:bg-gray-100 dark:active:bg-gray-300 dark:active:before:from-gray-200 lg:text-sm lg:h-8 px-3 justify-center">
                <span>whiteboard</span>
              </Link> */}
               <div className="relative overflow-hidden">
                {/* Gradients */}
                <div
                    aria-hidden="true"
                    className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
                >
                    <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900" />
                    <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" />
                </div>
                {/* End Gradients */}
                <div className="relative z-10">
                    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                        <div className="max-w-2xl text-center mx-auto">



                        <div classname="group relative">
                            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            
                              <a href="#">
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                  Lecture
                                </h5>
                                <hr black />
                              </a>
                              <div className="col-md-6">
                <h1 className=' fw-semibold fs-2 mt-3 mb-3' style={{ fontFamily: "serif" }}>{lecturesList.subject}</h1>
                <p className='text-red-800 fs-5 fw-bold' style={{ fontFamily: "cursive" }}>{lecturesList.description}</p>
                <p className='text-secondary mt-4 mb-4 fs-5' style={{ fontFamily: "serif" }}>{lecturesList.topic}</p>
              </div>
                            </div>

                          </div>
                        </div>
                    </div>
                </div>
            </div>
              <>
                <div classname="  bg-gray-100">
                  <div classname="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div classname="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                      <div classname="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        <div className='grid grid-cols-3'>
                          <div classname="group relative">
                          

                          </div>
                          <Link href={"/Teacher/whiteboard/"+lecturesList._id} className="w-full h-9 lg:w-fit group flex mb-3 items-center relative border rounded-[--btn-border-radius] *:select-none [&>*:not(.sr-only)]:relative before:rounded-[calc(var(--btn-border-radius)-1px)] before:absolute before:inset-0 before:border before:bg-gradient-to-b *:disabled:opacity-20 disabled:text-gray-950/40 disabled:border-gray-200 disabled:bg-gray-100 disabled:*:text-gray-300 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:before:border-0 dark:before:border-t dark:before:shadow-inner dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 disabled:dark:*:text-gray-700 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none dar k:*:disabled:!text-white text-white border-gray-950 bg-gray-600 before:border-gray-600 before:from-gray-800 hover:bg-gray-900 active:bg-gray-950 dark:text-gray-950 dark:before:border-gray-200 dark:before:from-gray-200 dark:bg-white dark:before:shadow-white/10 dark:hover:bg-gray-100 dark:active:bg-gray-300 dark:active:before:from-gray-200 lg:text-sm lg:h-8 px-3 justify-center">
                <span>whiteboard</span>
              </Link>
                          
                       
                            <div classname="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                          
                              <img
                                // src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
                                src="https://pbs.twimg.com/media/GFNBKzQWYAAvDBD?format=jpg&name=large"
                                alt="image"
                                classname="h-full w-full object-cover object-center"
                              />
                            </div>

                          

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            
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
