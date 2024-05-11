'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const Manageclassroom = () => {

    // const { currentTeacher } = useTeacherContext();
    const [currentTeacher, setCurrentTeacher] = useState(JSON.parse(sessionStorage.getItem('teacher')));
    const [classroomList, setclassroomList] = useState([]);
    const router = useRouter();
    // console.log(currentTeacher.token);

    const fetchclassroomsData = () => {
        fetch('http://localhost:5000/class/getbyteacher', {
            headers: {
                'x-auth-token': currentTeacher.token
            }
        })
            .then((response) => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setclassroomList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchclassroomsData();
    }, [])

    const deleteFunc = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/class/delete/' + id, {
            method: "DELETE"
        })
        if (res.status === 200) {
            fetchclassroomsData();
        }
    }

    const displayclassroom = () => {
        return classroomList.map(classroom => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    {classroom.name}
                </td>
         
                <td className="px-6 py-4">{classroom.description}</td>
            
                <td className="px-6 py-4">
                    <Link
                        href={`/Teacher/view-classroom/${classroom._id}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        View Classroom
                    </Link>
                </td>
                <td className="px-6 py-4">
                    <Link
                        href={`/Teacher/updateClass/${classroom._id}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        Edit
                    </Link>
                </td>
                <td className="px-6 py-4">
                    <button
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => { deleteFunc(classroom._id) }}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ))
    }

    return (

        <div>
 <div className="w-full mt-5 container  mx-auto">
            <div className="w-full flex items-center justify-between">
              <a
                className=" text-center ml-80 flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-4xl lg:text-6xl justify-center "
                href="#"
              >
                {/* Learn */}
                <span className="  bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500  text-center">
          Classroom
                </span>
              </a>
            </div>
          </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4 lg:mx-2 md:mx-2">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow max-w-L my-6 mt-6">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            
                
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                View Classroom
                            </th>
                            <th scope="col" className="px-6 py-3">
                                update
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Delete

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayclassroom()}
                    </tbody>
                </table>
              
            </div>

        </div>
    )
}

export default Manageclassroom
