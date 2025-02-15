import React from 'react'
import { NavLink } from 'react-router'

const Appnav = () => {
  return (
    <div className='w-max'>
      <ul className='flex flex-row gap-10'>    
            <NavLink className={({ isActive }) =>
          isActive ? "p-2 w-40 bg-gray-500 rounded-[7px] text-black flex justify-center items-center font-extrabold" : "p-2 w-40 bg-gray-300 rounded-[7px] text-black flex justify-center items-center font-extrabold"
        } to="cities"><li>Cities</li></NavLink>
            <NavLink className={({ isActive }) =>
          isActive ? "p-2 w-40 bg-gray-500 rounded-[7px] text-black flex justify-center items-center font-extrabold" : "p-2 w-40 bg-gray-300 rounded-[7px] text-black flex justify-center items-center font-extrabold"
        } to="countries"><li>Countries</li></NavLink>
      </ul>
    </div>
  )
}

export default Appnav
