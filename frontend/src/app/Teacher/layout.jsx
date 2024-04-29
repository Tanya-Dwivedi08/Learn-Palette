import React from 'react'
import Sidebar from './Sidebar';


const Teacher = ({ children }) => {
    return (
        <>

            {/* <Sidebar /> */}
            <div className='ms-72'>{children}</div>
        </>
    )
}

export default Teacher;