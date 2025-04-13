'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const HistoryPage = () => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    const storedCities = JSON.parse(localStorage.getItem('searchedCities')) || []
    setCities(storedCities.reverse()) 
  }, [])

  const clearHistory = () => {
    if(confirm("Are You Sure?")){
      localStorage.removeItem('searchedCities')
    setCities([])
    }
  }


  return (
    <div className="w-full m-0">
      <div className='w-full flex justify-between p-6'>
      <h1 className="text-2xl font-semibold mb-4">Search History</h1>
      <button onClick={clearHistory} className='bg-red-700 p-1.5 rounded-md hover:bg-red-600 hover:cursor-pointer'>Clear History</button>
      </div>
      {cities.length === 0 ? (
        <p className='pl-6'>No recent searches.</p>
      ) : (
        <ul className="list-disc pl-9 space-y-2 w-full">
          {cities.map((city, index) => (
            <li key={index} onClick={(e)=>{window.location.href=`/weather/${city}`}} className='bg-gray-700 mr-9 hover:cursor-pointer h-[2.3rem] hover:bg-gray-600'>
                <p className='pt-1.5 pl-3'>{city}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default HistoryPage
