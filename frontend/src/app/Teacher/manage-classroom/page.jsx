'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'


const Manageclassroom = () => {

  
    const [classroomList, setclassroomList] = useState([]);
    const router = useRouter();

    const fetchclassroomsData = () => {
        fetch('http://localhost:5000/class/getall')
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
         const res = await fetch ('http://localhost:5000/class/delete/' + id ,{
            method: "DELETE"
         })
         if (res.status ===200){
            fetchclassroomsData();
         }
    }

    const displayclassrooms = () => {
        return classroomList.map(classroom => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    {classroom.name}
                </th>
                <td className="px-6 py-4">{classroom.description}</td>
                <td className="px-6 py-4">{classroom.tags}</td>
                <td className="px-6 py-4">{classroom.cover}</td>
                <td className="px-6 py-4">{classroom.icons}</td>
                <td className="px-6 py-4">
                    <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        Edit
                    </a>
                </td>
                <td className="px-6 py-4">
                    <button
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => {deleteFunc(classroom._id)}}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ))
    }

    return (
      
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                              Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tags
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Cover
                            </th>
                            <th scope="col" className="px-6 py-3">
                               icon
                            </th>
                            <th scope="col" className="px-6 py-3">
                               CreatedAt
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
                        {displayclassrooms()}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Manageclassroom
