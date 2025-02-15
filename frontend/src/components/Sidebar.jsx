import React from 'react'
import Appnav from './Appnav'
import Logo from './Logo'
import { Outlet } from 'react-router'
import CitiesList from '../pages/CitiesList'

const Sidebar = () => {
    return (
        <div className='flex flex-col w-1/3 h-screen bg-gray-800 text-white pt-10 gap-5 items-center'>
            <Logo />
            <Appnav />
            <Outlet />
        </div>
    )
}

export default Sidebar
