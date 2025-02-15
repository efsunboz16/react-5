import React from 'react'

const CountryLi = ({city}) => {
  return (
    <div>
      <li className='flex flex-row justify-between w-80 text-black p-5 bg-gray-300 rounded-[7px]'>
            <div className='flex flex-row items-center gap-2'>
            <span>{city.emoji}</span>
            <h1>{city.country}</h1>
            </div>
        </li>
    </div>
  )
}

export default CountryLi
