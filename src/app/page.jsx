
import React from 'react';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Welcome to the Weather App</h1>
      <SearchBar />
    </div>
  );
};

export default HomePage;
