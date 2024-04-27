'use client';
import React, { useEffect, useState } from 'react'

const Managewhiteboard = () => {

    const [whiteboardList, setwhiteboardList] = useState([]);

    const fetchwhiteboardsData = () => {
        fetch('http://localhost:5000/whiteboard/getall')
            .then((response) => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setwhiteboardList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchwhiteboardsData();
    }, [])

    const deleteFunc = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/whiteboard/delete/' + id, {
            method: "DELETE"
        })
        if (res.status === 200) {
            fetchwhiteboardsData();
        }
    }


    const displaywhiteboards = () => {
        return whiteboardList.map(whiteboard => (
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    {whiteboard.fname}
                </th>
                <td className="px-6 py-4">{whiteboard.lname}</td>
                <td className="px-6 py-4">{whiteboard.email}</td>
                <td className="px-6 py-4">{whiteboard.password}</td>
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
                        onClick={() => { deleteFunc(whiteboard._id) }}
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
                                Lecture id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                content
                            </th>
                            <th scope="col" className="px-6 py-3">
                                CreateAT
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Thumbnail
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
                        {displaywhiteboards()}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Managewhiteboard
