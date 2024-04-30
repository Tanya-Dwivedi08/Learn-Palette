'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Managelecture = () => {

    const [lectureList, setlectureList] = useState([]);

    const fetchlecturesData = () => {
        fetch('http://localhost:5000/lecture/getall')
            .then((response) => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setlectureList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    
    useEffect(() => {
        fetchlecturesData();
    }, [])

    


    const deleteFunc = async (id) => {
        console.log(id);
         const res = await fetch ('http://localhost:5000/lecture/delete/' + id ,{
            method: "DELETE"
         })
         if (res.status ===200){
            fetchlecturesData();
         }
    }


    const displaylectures = () => {
        return lectureList.map(lecture => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4">{lecture._id}</td>
              
                <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    {lecture.subject}
                </td>
                <td className="px-6 py-4">{lecture.description}</td>
                <td className="px-6 py-4">{lecture.topic}</td>
                <td className="px-6 py-4">{lecture.thumbnail}</td>
                {/* <td className="px-6 py-4">{lecture.createdAt}</td> */}
                <td className="px-6 py-4">
                    <Link href={`/Teacher/updateLecture/${lecture._id}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                        Edit
                    </Link>
                </td>
                <td className="px-6 py-4">
                    <button
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => {deleteFunc(lecture._id)}}
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
                              Lecture ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Subject
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Topic
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Thumbnail
                            </th>
                            {/* <th scope="col" className="px-6 py-3">
                               CreateAT
                            </th> */}
                            <th scope="col" className="px-6 py-3">
                                update
                            </th>
                            
                            <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {displaylectures()}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Managelecture
