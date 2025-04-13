'use client'
import React, { useEffect, useState } from 'react'

const CurrentWeatherCard = () => {
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords
          try {
            const res = await fetch(
              `https://backend-production-04b2.up.railway.app/api/weather/current?lat=${latitude}&lon=${longitude}`
            )
            const data = await res.json()
            setWeather(data)
          } catch (err) {
            setError('Failed to fetch weather')
          }
        },
        () => setError('Location access denied')
      )
    } else {
      setError('Geolocation not supported')
    }
  }, [])

  if (error) return <p className="text-red-600 text-center mt-4">{error}</p>
  if (!weather) return <p className="text-center mt-4">Loading current weather...</p>

  return (
    <div className="md:w-[90%] mt-3 md:ml-[4%] bg-gray-400">
      <h2 className="text-4xl font-bold mb-2 text-center pt-5">{weather.name}</h2>
      <p className='text-center text-2xl'>{weather.temp}°C</p>
      <div className='w-full flex justify-between'>
      <h5 className='bg-yellow-500 p-0.5 m-4 rounded text-[13.5px]'>Condition<p className='font-bold p-4 text-base'>{weather.condition}</p></h5>
      <h5 className='bg-red-500 p-0.5 m-4 rounded text-[13.5px]'>Humidity<p className='font-bold p-4 text-base'>{weather.humidity}%</p></h5>
      <h5 className='bg-green-500 p-0.5 m-4 rounded text-[13.5px]'>Wind Speed<p className='font-bold p-4 text-base'>{weather.wind}ms</p></h5>
      </div>
    </div>
  )
}

export default CurrentWeatherCard
