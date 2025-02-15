import React from 'react'
import { Link, Outlet } from 'react-router'

const Logo = () => {
  return (
    <div>
      <Link to='/'><img src="logo.png" alt="logo" className='w-15' /></Link>
    </div>
  )
}

export default Logo
