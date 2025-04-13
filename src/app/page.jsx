
import React from 'react';
import CurrentWeather from '../components/CurrentWeather'
import SearchBar from '../components/SearchBar';

const HomePage = () => {

  return (
    <div className="container w-full mx-auto md:p-4 flex flex-col content-center">
      <div className='w-full flex justify-between'>
        <div className='flex flex-col w-full'>
          <h1 className="text-4xl font-semibold text-gray-200 mb-4 w-full pl-[4%] pt-3">Welcome to the Weather App</h1>
          <SearchBar />
          <CurrentWeather />
        </div>
        <img className=' hidden md:block sm:pr-0 md:pr-[4%] pt-3' src="https://metro.co.uk/wp-content/uploads/2021/06/GettyImages-531889697-d80e-e1622906781395.jpg?quality=90&strip=all&resize=600,450&zoom=1" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
