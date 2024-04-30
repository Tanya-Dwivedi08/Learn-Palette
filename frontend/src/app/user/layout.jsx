import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './navbar'


const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            
            <div className="ms-64"> {children}</div>
        </div>
    )
}

export default Layout