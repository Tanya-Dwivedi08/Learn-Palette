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
                                            Teams
                                        </h2>
                                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                                            Create teams, edit, download and more.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
                                                <button
                                                    id="hs-as-table-table-export-dropdown"
                                                    type="button"
                                                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                                >
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
                                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                        <polyline points="7 10 12 15 17 10" />
                                                        <line x1={12} x2={12} y1={15} y2={3} />
                                                    </svg>
                                                    Export
                                                </button>
                                                <div
                                                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-48 z-20 bg-white shadow-md rounded-lg p-2 mt-2 dark:divide-neutral-700 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                                                    aria-labelledby="hs-as-table-table-export-dropdown"
                                                >
                                                    <div className="py-2 first:pt-0 last:pb-0">
                                                        <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-neutral-600">
                                                            Options
                                                        </span>
                                                        <a
                                                            className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                                                            href="#"
                                                        >
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
                                                                <rect
                                                                    width={8}
                                                                    height={4}
                                                                    x={8}
                                                                    y={2}
                                                                    rx={1}
                                                                    ry={1}
                                                                />
                                                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                                            </svg>
                                                            Copy
                                                        </a>
                                                        <a
                                                            className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                                                            href="#"
                                                        >
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
                                                                <polyline points="6 9 6 2 18 2 18 9" />
                                                                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                                                                <rect width={12} height={8} x={6} y={14} />
                                                            </svg>
                                                            Print
                                                        </a>
                                                    </div>
                                                    <div className="py-2 first:pt-0 last:pb-0">
                                                        <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-neutral-600">
                                                            Download options
                                                        </span>
                                                        <a
                                                            className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                                                            href="#"
                                                        >
                                                            <svg
                                                                className="size-4"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z" />
                                                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                            </svg>
                                                            Excel
                                                        </a>
                                                        <a
                                                            className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                                                            href="#"
                                                        >
                                                            <svg
                                                                className="size-4"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.517 14.841a1.13 1.13 0 0 0 .401.823c.13.108.289.192.478.252.19.061.411.091.665.091.338 0 .624-.053.859-.158.236-.105.416-.252.539-.44.125-.189.187-.408.187-.656 0-.224-.045-.41-.134-.56a1.001 1.001 0 0 0-.375-.357 2.027 2.027 0 0 0-.566-.21l-.621-.144a.97.97 0 0 1-.404-.176.37.37 0 0 1-.144-.299c0-.156.062-.284.185-.384.125-.101.296-.152.512-.152.143 0 .266.023.37.068a.624.624 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.092 1.092 0 0 0-.2-.566 1.21 1.21 0 0 0-.5-.41 1.813 1.813 0 0 0-.78-.152c-.293 0-.551.05-.776.15-.225.099-.4.24-.527.421-.127.182-.19.395-.19.639 0 .201.04.376.122.524.082.149.2.27.352.367.152.095.332.167.539.213l.618.144c.207.049.361.113.463.193a.387.387 0 0 1 .152.326.505.505 0 0 1-.085.29.559.559 0 0 1-.255.193c-.111.047-.249.07-.413.07-.117 0-.223-.013-.32-.04a.838.838 0 0 1-.248-.115.578.578 0 0 1-.255-.384h-.765ZM.806 13.693c0-.248.034-.46.102-.633a.868.868 0 0 1 .302-.399.814.814 0 0 1 .475-.137c.15 0 .283.032.398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.441 1.441 0 0 0-.489-.272 1.838 1.838 0 0 0-.606-.097c-.356 0-.66.074-.911.223-.25.148-.44.359-.572.632-.13.274-.196.6-.196.979v.498c0 .379.064.704.193.976.131.271.322.48.572.626.25.145.554.217.914.217.293 0 .554-.055.785-.164.23-.11.414-.26.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.799.799 0 0 1-.118.363.7.7 0 0 1-.272.25.874.874 0 0 1-.401.087.845.845 0 0 1-.478-.132.833.833 0 0 1-.299-.392 1.699 1.699 0 0 1-.102-.627v-.495Zm8.239 2.238h-.953l-1.338-3.999h.917l.896 3.138h.038l.888-3.138h.879l-1.327 4Z"
                                                                />
                                                            </svg>
                                                            .CSV
                                                        </a>
                                                        <a
                                                            className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                                                            href="#"
                                                        >
                                                            <svg
                                                                className="size-4"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width={16}
                                                                height={16}
                                                                fill="currentColor"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
                                                                <path d="M4.603 14.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.697 19.697 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.712 5.712 0 0 1-.911-.95 11.651 11.651 0 0 0-1.997.406 11.307 11.307 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.266.266 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.71 12.71 0 0 1 1.01-.193 11.744 11.744 0 0 1-.51-.858 20.801 20.801 0 0 1-.5 1.05zm2.446.45c.15.163.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.876 3.876 0 0 0-.612-.053zM8.078 7.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z" />
                                                            </svg>
                                                            .PDF
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="hs-dropdown [--placement:bottom-right] relative inline-block"
                                                List-hs-dropdown-auto-close="inside"
                                            >
                                                <button
                                                    id="hs-as-table-table-filter-dropdown"
                                                    type="button"
                                                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                                >
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
                                                        <path d="M3 6h18" />
                                                        <path d="M7 12h10" />
                                                        <path d="M10 18h4" />
                                                    </svg>
                                                    Filter
                                                    <span className="inline-flex items-center gap-1.5 py-0.5 px-1.5 rounded-full text-xs font-medium border border-gray-300 text-gray-800 dark:border-neutral-700 dark:text-neutral-300">
                                                        2
                                                    </span>
                                                </button>
                                                <div
                                                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-48 z-20 bg-white shadow-md rounded-lg mt-2 dark:divide-neutral-700 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                                                    aria-labelledby="hs-as-table-table-filter-dropdown"
                                                >
                                                    <div className="divide-y divide-gray-200 dark:divide-neutral-700">
                                                        <label
                                                            htmlFor="hs-as-filters-dropdown-frequency"
                                                            className="flex py-2.5 px-3"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                id="hs-as-filters-dropdown-frequency"
                                                                defaultChecked=""
                                                            />
                                                            <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">
                                                                Frequency
                                                            </span>
                                                        </label>
                                                        <label
                                                            htmlFor="hs-as-filters-dropdown-status"
                                                            className="flex py-2.5 px-3"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                id="hs-as-filters-dropdown-status"
                                                                defaultChecked=""
                                                            />
                                                            <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">
                                                                Status
                                                            </span>
                                                        </label>
                                                        <label
                                                            htmlFor="hs-as-filters-dropdown-created"
                                                            className="flex py-2.5 px-3"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                id="hs-as-filters-dropdown-created"
                                                            />
                                                            <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">
                                                                Created
                                                            </span>
                                                        </label>
                                                        <label
                                                            htmlFor="hs-as-filters-dropdown-due-date"
                                                            className="flex py-2.5 px-3"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                id="hs-as-filters-dropdown-due-date"
                                                            />
                                                            <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">
                                                                Due Date
                                                            </span>
                                                        </label>
                                                        <label
                                                            htmlFor="hs-as-filters-dropdown-amount"
                                                            className="flex py-2.5 px-3"
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                                id="hs-as-filters-dropdown-amount"
                                                            />
                                                            <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">
                                                                Amount
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
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
                                                                <button
                                                                    id="hs-table-dropdown-1"
                                                                    type="button"
                                                                    className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                                                                >
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
                                                                        <circle cx={12} cy={12} r={1} />
                                                                        <circle cx={19} cy={12} r={1} />
                                                                        <circle cx={5} cy={12} r={1} />
                                                                    </svg>
                                                                </button>
                                                                <div
                                                                    className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-40 z-20 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-neutral-700 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                                                                    aria-labelledby="hs-table-dropdown-1"
                                                                >
                                                                    <div className="py-2 first:pt-0 last:pb-0">
                                                                        <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-neutral-600">
                                                                            Actions
                                                                        </span>
                                                                        <a
                                                                            className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                                                                            href="#"
                                                                        >
                                                                            Rename team
                                                                        </a>
                                                                        <a
                                                                            className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                                                                            href="#"
                                                                        >
                                                                            Add to favorites
                                                                        </a>
                                                                        <a
                                                                            className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                                                                            href="#"
                                                                        >
                                                                            Archive team
                                                                        </a>
                                                                    </div>
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
                                            <button
                                                type="button"
                                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                            >
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
                                                Prev
                                            </button>
                                            <button
                                                type="button"
                                                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                            >
                                                Next
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
                                            </button>
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