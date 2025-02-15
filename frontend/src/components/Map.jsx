import React from 'react'
import { useNavigate } from 'react-router';

const Map = () => {

let navigate = useNavigate();


  return (
    <div className='w-2/3 h-screen bg-gray-200' onClick={() => navigate('form')}>
        map
    </div>
  )
}

export default Map