'use client'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react'



const ViewLecture = () => {
  const { id } = useParams();

  const [LectureList, setLectureList] = useState([]);
  const fetchLectureData = async () => {
    const res = await fetch('http://localhost:5000/lecture/getbyid/' + id);
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setLectureList(data);
    }
  };

  useEffect(() => {
    fetchLectureData();
  }, []);

  return (
    <>
      {
        LectureList !== null ? (

          <div className="container pt-24 px-16">
            <div className="grid grid-cols-2 ">
              <div className="">
                <Link href="/user/manage-lecture" type='button' className='bg-blue-600 text-white px-4 me-3 py-2 mb-3 rounded-xl'>Manage</Link>
                <Link href="/user/add-lecture" type='button' className='bg-red-600 text-white px-4 py-2 mb-3 rounded-xl'>Add</Link>
                <div className="bg-gray-300  text-center rounded py-4">
                  <p className=' font-semibold fs-2 mt-3 mb-3 text-2xl' style={{ fontFamily: "serif" }}>{LectureList.topic}</p>
                  <p className="">{LectureList.createdAt}</p>
                </div>
              </div>
              <div>
        <p className="">Students</p>
        </div>
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


export default ViewLecture