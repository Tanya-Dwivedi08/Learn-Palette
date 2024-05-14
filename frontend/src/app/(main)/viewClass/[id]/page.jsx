'use client'
import useTeacherContext from '@/app/context/TeacherContext';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react'
import { IconPlus } from '@tabler/icons-react';
import { Dialog } from '@headlessui/react';


const Viewclass = () => {

  const { id } = useParams();
  const [lectureList, setLectureList] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [classList, setclassList] = useState([]);

  const fetchclassList = async () => {
    const res = await fetch('http://localhost:5000/class/getbyid/' + id);

    console.log(res.status);
    if (res.status === 200) {
      const List = await res.json();
      console.log(List);
      setclassList(List);
    }
  };

  useEffect(() => {
    fetchclassList();
  }, []);

  const fetchLectureList = () => {
    fetch('http://localhost:5000/lecture/getbyclass/' + id)
      .then(response => response.json())
      .then(List => {
        console.log(List);
        setLectureList(List);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchLectureList();
  }, [])

  const displayLecture = () => {
    return lectureList.map((lec) => (
      <div className="flex">
        <p className="">{lec.subject}</p>
        <Link href={'/viewLecture/'+lec._id} className="p-4 bg-blue-600 text-white my-3">View</Link>
      </div>
    ))
  }

  const displayClassDetails = () => {
    if (classList !== null) {
        return <>
            {/* Hero */}
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
                            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                                {classList.createdAt}
                            </p>
                            {/* Title */}
                            <div className="mt-5 max-w-2xl">
                                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                                    {classList.name}
                                </h1>
                            </div>
                            {/* End Title */}
                            <div className="mt-5 max-w-3xl">
                                <p className="text-lg text-gray-600 dark:text-neutral-400">
                                    {classList.description}
                                </p>
                            </div>
                            {/* Buttons */}

                            {/* End Buttons */}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero */}
            {/* <div className="col-md-6">
                <h1 className=' fw-semibold fs-2 mt-3 mb-3' style={{ fontFamily: "serif" }}>{classList.subject}</h1>
                <p className='text-red-800 fs-5 fw-bold' style={{ fontFamily: "cursive" }}>{classList.description}</p>
                <p className='text-secondary mt-4 mb-4 fs-5' style={{ fontFamily: "serif" }}>{classList.topic}</p>

              </div> */}
        </>
    } else {
        return <div>Loading...</div>
    }
}

const displayLectures = () => {
    if (lectureList.length > 0) {
        return <>
            {/* Table Section */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Card */}
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
                                {/* Header */}
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                                            Classroom
                                        </h2>
                                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                                            view class details , download and more.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="inline-flex gap-x-2">
                                           
                                            </div>
                                            <div
                                                className="hs-dropdown [--placement:bottom-right] relative inline-block"
                                                List-hs-dropdown-auto-close="inside"
                                            >
                                               
                                                
                                            <button
                                                type="button"
                                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                            >
                                                Download all
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* End Header */}
                                {/* Table */}
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                    <thead className="bg-gray-50 dark:bg-neutral-800">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <button
                                                    className="group inline-flex items-center gap-x-2"
                                                    href="#"
                                                >
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Lecture Topic
                                                    </span>
                                                    <svg
                                                        className="flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="m7 15 5 5 5-5" />
                                                        <path d="m7 9 5-5 5 5" />
                                                    </svg>
                                                </button>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <button
                                                    className="group inline-flex items-center gap-x-2"
                                                    href="#"
                                                >
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Subject
                                                    </span>
                                                    <svg
                                                        className="flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="m7 15 5 5 5-5" />
                                                        <path d="m7 9 5-5 5 5" />
                                                    </svg>
                                                </button>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <button
                                                    className="group inline-flex items-center gap-x-2"
                                                    href="#"
                                                >
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Description
                                                    </span>
                                                    <svg
                                                        className="flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="m7 15 5 5 5-5" />
                                                        <path d="m7 9 5-5 5 5" />
                                                    </svg>
                                                </button>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <a
                                                    className="group inline-flex items-center gap-x-2"
                                                    href="#"
                                                >
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                                        Students
                                                    </span>
                                                    <svg
                                                        className="flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="m7 15 5 5 5-5" />
                                                        <path d="m7 9 5-5 5 5" />
                                                    </svg>
                                                </a>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-end" />
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                        {
                                            lectureList.map(lecture => (
                                                <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                                                    <td className="size-px whitespace-nowrap">
                                                        <Link className="block relative z-10" href={'/Teacher/view-lecture/'+lecture._id}>
                                                            <div className="px-6 py-2">
                                                                <div className="block text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500">
                                                                    {lecture.topic}
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </td>
                                                    <td className="h-px w-72 min-w-72">
                                                        <a className="block relative z-10" href="#">
                                                            <div className="px-6 py-2">
                                                                <p className="text-sm text-gray-500 dark:text-neutral-500">
                                                                    {lecture.description}
                                                                </p>
                                                            </div>
                                                        </a>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <a className="block relative z-10" href="#">
                                                            <div className="px-6 py-2">
                                                                <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-lg text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-900 dark:text-neutral-200">
                                                                    {lecture.subject}
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <a className="block relative z-10" href="#">
                                                            <div className="px-6 py-2 flex -space-x-2">
                                                                <div className="hs-tooltip inline-flex">
                                                                    <img
                                                                        className="hs-tooltip-toggle inline-block size-6 rounded-full ring-2 ring-white dark:ring-neutral-900"
                                                                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                                                        alt="Image Description"
                                                                    />
                                                                    <span
                                                                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                                                                        role="tooltip"
                                                                    >
                                                                        David Harrison
                                                                    </span>
                                                                </div>
                                                                <div className="hs-tooltip inline-flex">
                                                                    <img
                                                                        className="inline-block size-6 rounded-full ring-2 ring-white dark:ring-neutral-900"
                                                                        src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                                                        alt="Image Description"
                                                                    />
                                                                    <span
                                                                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                                                                        role="tooltip"
                                                                    >
                                                                        Amanda Jr.
                                                                    </span>
                                                                </div>
                                                                <div className="hs-tooltip inline-flex">
                                                                    <img
                                                                        className="inline-block size-6 rounded-full ring-2 ring-white dark:ring-neutral-900"
                                                                        src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
                                                                        alt="Image Description"
                                                                    />
                                                                    <span
                                                                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                                                                        role="tooltip"
                                                                    >
                                                                        Asia Boone
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </td>
                                                    <td className="size-px whitespace-nowrap">
                                                        <div className="px-6 py-2">
                                                            <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
                                                           <Link className="bg-[#002D74] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium" href={'/Teacher/view-lecture/'+lecture._id}>
                                                                    <div className="block text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500">
                                                                    OPEN
                                                                    </div>
                                                                    </Link>
                                                                    <div
                                                                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-40 z-20 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-neutral-700 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                                                                    aria-labelledby="hs-table-dropdown-1"
                                                                >
                                                                    
                                                                    <div className="py-2 first:pt-0 last:pb-0">
                                                                        <a
                                                                            className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                                                                            href="#"
                                                                        >
                                                                            Delete
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                {/* End Table */}
                                {/* Footer */}
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                                            <span className="font-semibold text-gray-800 dark:text-neutral-200">
                                                6
                                            </span>{" "}
                                            results
                                        </p>
                                    </div>
                                    <div>
                                        <div className="inline-flex gap-x-2">
                                        <Link className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"href={'/classroom'}>
                                                                    <div className="block text-sm text--600 decoration-2 hover:underline dark:text-blue-500">
                                                                    Prev
                                                                    </div>
                                                                    </Link> 
                                            
                                                <svg
                                                    className="flex-shrink-0 size-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="m15 18-6-6 6-6" />
                                                </svg>
                                               
                                           
                                            <Link className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"href={'/classroom'}>
                                                                    <div className="block text-sm text--600 decoration-2 hover:underline dark:text-blue-500">
                                                                    Next
                                                                    </div>
                                                                    </Link>
                                            
                                               
                                                <svg
                                                    className="flex-shrink-0 size-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="m9 18 6-6-6-6" />
                                                </svg>
                                           
                                        </div>
                                    </div>
                                </div>
                                {/* End Footer */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Card */}
            </div>
            {/* End Table Section */}
        </>

    } else {
        return <h3>No Lectures to Display</h3>
    }
}

return (
    <>

        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <Dialog.Panel>
                <Dialog.Title>Deactivate account</Dialog.Title>
                <Dialog.Description>
                    This will permanently deactivate your account
                </Dialog.Description>
                {/* <AddLecture close={() => setIsOpen(false)} classId={id} /> */}
            </Dialog.Panel>
        </Dialog>
        {displayClassDetails()}
        {displayLectures()}
    </>


)
}



export default Viewclass