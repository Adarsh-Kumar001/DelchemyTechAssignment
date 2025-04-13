<<<<<<< HEAD
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const router = useRouter();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      router.push(`/weather/${city.trim()}`);
    }

    //saving the city to local storage for search history
    let searches = JSON.parse(localStorage.getItem('searchedCities')) || []
    if (!searches.includes(city)) {
      searches.push(city)
      localStorage.setItem('searchedCities', JSON.stringify(searches))
    }


  };

  return (
    <div className='w-full pl-[4%] pt-3'>
    <h2>Search for weather status in any city</h2>
    <form onSubmit={handleSubmit} className="flex mb-4 mx-auto">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 border border-gray-300 rounded mr-2"
      />
      <button type="submit" className="bg-blue-600 hover:cursor-pointer hover:bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </form>
    </div>
  );
};

export default SearchBar;
=======
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      router.push(`/weather/${city.trim()}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 border border-gray-300 rounded mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
>>>>>>> f16b5df80552c492ff608c31c40a52b1c2cc4fd4
