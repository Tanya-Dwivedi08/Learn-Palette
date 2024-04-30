import React from 'react'
import Sidebar from './Sidebar';


const classroom = ({ children }) => {
    return (
        <>
         
            <Sidebar />
             <div className='ms-72'>{children}</div>
        </>
    )
}

export default classroom;