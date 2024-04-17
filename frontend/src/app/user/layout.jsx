import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <div>
            <div className=""> <Sidebar /></div>
            <Navbar/>
           <div className="ms-64"> {children}</div>
           </div>
    )
}

export default Layout