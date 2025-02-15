import React from 'react'
import CountryLi from '../components/CountryLi'





const CitiesList = ({cities,isLoading}) => {

if(isLoading){
    return <h1>Loading...</h1>
}

if(cities.length === 0){
    return <h1>No cities found</h1>
}

const countries = cities.reduce((arr, city) => {
  if (!arr.map(country => country.country).includes(city.country)) {
    return [...arr, { country: city.country, emoji: city.emoji }]
  }
  return arr
}, [])

  return (
    <div className=' h-min'>
      <ul className='flex flex-col gap-3'>
        {countries.map(city => (
          <CountryLi key={city.country} city={city} />
        ))}
      </ul>
    </div>
  )
}

export default CitiesList
