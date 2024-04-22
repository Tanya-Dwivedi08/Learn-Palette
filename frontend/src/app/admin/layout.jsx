import React from 'react'
import AdminNavbar from './navbar/page'

const Layout = ({ children }) => {
    return (
        <>
            <AdminNavbar />
            {children}
        </>
    )
}

export default Layout