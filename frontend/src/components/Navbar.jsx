import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router'

const Navbar = () => {
return (
    <div className='w-full bg-transparent text-white p-5 flex justify-between items-center'>
       <Logo />
        <ul className='flex gap-20 items-center w-1/3'>
            <li className='text-gray-50 hover:text-gray-400' ><Link to="/product">Product</Link></li>
            <li className='text-gray-50 hover:text-gray-400' ><Link to="/pricing">Pricing</Link></li>
            <li ><Link to="/login"><button className='rounded border-2 p-2 px-5 hover:bg-black hover:border-black cursor-pointer'>Login</button></Link></li>
        </ul>
    </div>
)
}

export default Navbar
