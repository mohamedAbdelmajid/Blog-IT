import React from 'react'
import { Outlet } from "react-router-dom";


import NavigationBar from '../navbar/navbar'
import Footer from '../footer/footer'

const Layout = () => {
    return (
        <div>
            <NavigationBar />

            <Outlet />
            
            <Footer />
        </div>
    );
}

export default Layout;