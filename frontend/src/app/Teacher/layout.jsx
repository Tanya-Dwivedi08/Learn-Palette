import React from 'react'
import Sidebar from './Sidebar';


const Teacher = ({ children }) => {
    return (
        <>
                    {children}
            {/* <div className='grid grid-cols-12'>
                <div className="col-span-2">
                    <Sidebar />
                </div>
                <div className="col-span-10">
                </div>
            </div> */}
        </>
    )
}

export default Teacher;