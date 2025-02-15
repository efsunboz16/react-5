import React from 'react'
import { Link } from 'react-router'

const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(date))
}

const CityLi = ({city}) => {

const {cityName, country, emoji, date, id, position} = city

  return (
    <div>
        <li >
            <Link className='flex flex-row justify-between w-80 text-black p-5 bg-gray-300 rounded-[7px]' to={`${id}?lat=${position.lat}&lng=${position.lng}`} >
            <div className='flex flex-row items-center gap-2'>
            <span>{emoji}</span>
            <h1>{cityName}</h1>
            </div>
            <div className='flex flex-row items-center gap-3'>
                {formatDate(date)}
                <button className='w-5 h-5 rounded-[50%] flex flex-row justify-center items-center bg-black text-white cursor-pointer'>&times;</button>
            </div>
            </Link>
        </li>
    </div>
  )
}

export default CityLi
