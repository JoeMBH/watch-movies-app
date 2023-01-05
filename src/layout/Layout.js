import React from 'react'
import Header from "./header/Header"
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function Layout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout