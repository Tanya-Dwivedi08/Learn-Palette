import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <div>
            <div className=""> <Sidebar /></div>
           <div className="ms-64"> {children}</div>
           </div>
    )
}

export default Layout