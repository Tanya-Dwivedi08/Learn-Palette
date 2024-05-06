'use client'
import useTeacherContext from '@/app/context/TeacherContext';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react'
import { IconPlus } from '@tabler/icons-react';

const Viewclass = () => {

  const { id } = useParams();
  const [lectureList, setLectureList] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [classList, setclassList] = useState([]);

  const fetchclassData = async () => {
    const res = await fetch('http://localhost:5000/class/getbyid/' + id);

    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setclassList(data);
    }
  };

  useEffect(() => {
    fetchclassData();
  }, []);

  const fetchLectureData = () => {
    fetch('http://localhost:5000/lecture/getbyclass/' + id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setLectureList(data);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchLectureData();
  }, [])

  const displayLectures = () => {
    return lectureList.map((lec) => (
      <div className="flex">
        <p className="">{lec.subject}</p>
        <Link href={'/viewLecture/'+lec._id} className="p-4 bg-blue-600 text-white my-3">View</Link>
      </div>
    ))
  }

  return (
    <>


      <button
        type="button"
        onClick={e => setIsOpen(true)}
        className="mt-16 py-3 mx-2 mb-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        <IconPlus /> Add Lecture
      </button>

      {
        classList !== null ? (

          <div className="container pt-24 px-16">
            <div className="grid grid-cols-2 ">
              <div className="">
                <Link href="/Teacher/manage-lecture" type='button' className='bg-blue-600 text-white px-4 me-3 py-2 mb-3 rounded-xl'>Manage</Link>
                <Link href="/Teacher/add-lecture" type='button' className='bg-red-600 text-white px-4 py-2 mb-3 rounded-xl'>Add</Link>
                <div className="bg-gray-300  text-center rounded py-4">
                  <p className=' font-semibold fs-2 mt-3 mb-3 text-2xl' style={{ fontFamily: "serif" }}>{classList.name}</p>
                  <p className="mb-3">{classList.description}</p>
                  <p className="mb-3">{classList.tags}</p>
                  <p className="">{classList.createdAt}</p>
                </div>
                <Link href={`/viewLecture/${classList._id}`} type='button' className='bg-green-600 mt-3 text-white px-4 py-2 mb-3 rounded-xl'> Lectures</Link>

              </div>
              <div>
                <p className="text-center text-2xl font-semibold"> {displayLectures()}</p>
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


export default Viewclass