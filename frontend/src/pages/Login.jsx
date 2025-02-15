import React from 'react'
import Navbar from '../components/Navbar'

const Login = () => {
  return (
<div className='bg-gray-500 h-screen w-full bg-linear-to-b from-black/70 to-black/20'>
    <div className='bg-black-80 h-screen w-full flex flex-col items-center'>
    <Navbar />
    <div className='m-15 flex flex-col items-center justify-center w-max h-min p-10 bg-white rounded-4xl shadow-2xl shadow-black'>
        <h1 className='text-black text-4xl font-bold pb-10'>Login</h1>
        <label className='text-black'>Username</label>
        <input className='bg-gray-400 m-2 w-65 rounded-[7px] shadow-2xs shadow-black pl-1' type="text" />
        <label className='text-black'>Password</label>
        <input className='bg-gray-400 m-2 w-65 rounded-[7px] shadow-2xs shadow-black pl-1' type="password" />
        <button className='rounded border-2 p-2 px-5 mt-5 hover:bg-black hover:text-white hover:border-black cursor-pointer'>Login</button>
    </div>
       
    
    </div>
</div>
  )
}

export default Login
