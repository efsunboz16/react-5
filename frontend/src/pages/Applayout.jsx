import React from 'react'
import Sidebar from '../components/Sidebar'
import Map from '../components/Map'
import { Outlet } from 'react-router'

const Applayout = () => {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <Map />
    </div>
  )
}

export default Applayout
