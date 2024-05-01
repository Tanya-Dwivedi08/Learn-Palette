'use client';
import useTeacherContext from '@/app/context/TeacherContext';
import React, { useEffect, useState } from 'react'

const Managevideo = () => {

    const [videoList, setvideoList] = useState([]);
const {currentTeacher} = useTeacherContext();
    const fetchvideosData = () => {
        fetch('http://localhost:5000/video/getall',{
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": currentTeacher.token,
              },
            })
            .then((response) => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setvideoList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchvideosData();
    }, [])

    const deleteFunc = async (id) => {
        console.log(id);
         const res = await fetch ('http://localhost:5000/video/delete/' + id ,{
            method: "DELETE"
         })
         if (res.status ===200){
            fetchvideosData();
         }
    }


    const displayvideos = () => {
        return videoList.map(video => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    {video.fname}
                </th>
                <td className="px-6 py-4">{video.lname}</td>
                <td className="px-6 py-4">{video.email}</td>
                <td className="px-6 py-4">{video.password}</td>
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
                        onClick={() => {deleteFunc(video._id)}}
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
                               First name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Last name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Password
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
                        {displayvideos()}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Managevideo
