import React from 'react'
import { Outlet } from 'react-router'
import CityLi from '../components/CityLi'

const CitiesList = ({cities,isLoading}) => {

if(isLoading){
    return <h1>Loading...</h1>
}

if(cities.length === 0){
    return <h1>No cities found</h1>
}

  return (
    <div className=' h-min'>
      <ul className='flex flex-col gap-3'>
        {cities.map(city => (
          <CityLi key={city.id} city={city} />
        ))}
      </ul>
    </div>
  )
}

export default CitiesList
