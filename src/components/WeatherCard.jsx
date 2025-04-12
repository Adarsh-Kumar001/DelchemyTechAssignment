
import React from 'react';

const WeatherCard = ({ data }) => {
  return (
    <div className="bg-blue-100 p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{data.name}, {data.sys.country}</h2>
      <p className="text-lg">Temperature: {data.main.temp}°C</p>
      <p className="text-lg">Humidity: {data.main.humidity}%</p>
      <p className="text-lg">Weather: {data.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
