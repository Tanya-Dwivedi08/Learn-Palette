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
              <Link href="/user/whiteboard" className="w-full h-9 lg:w-fit group flex items-center relative border rounded-[--btn-border-radius] *:select-none [&>*:not(.sr-only)]:relative before:rounded-[calc(var(--btn-border-radius)-1px)] before:absolute before:inset-0 before:border before:bg-gradient-to-b *:disabled:opacity-20 disabled:text-gray-950/40 disabled:border-gray-200 disabled:bg-gray-100 disabled:*:text-gray-300 disabled:before:border-transparent disabled:before:bg-gray-100 disabled:before:from-transparent dark:border-0 dark:before:border-0 dark:before:border-t dark:before:shadow-inner dark:disabled:border dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 disabled:dark:*:text-gray-700 dark:disabled:before:bg-gray-900 dark:disabled:before:from-gray-900 dark:disabled:before:shadow-none dar k:*:disabled:!text-white text-white border-gray-950 bg-gray-600 before:border-gray-600 before:from-gray-800 hover:bg-gray-900 active:bg-gray-950 dark:text-gray-950 dark:before:border-gray-200 dark:before:from-gray-200 dark:bg-white dark:before:shadow-white/10 dark:hover:bg-gray-100 dark:active:bg-gray-300 dark:active:before:from-gray-200 lg:text-sm lg:h-8 px-3 justify-center">
                <span>whiteboard</span>
              </Link>
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
