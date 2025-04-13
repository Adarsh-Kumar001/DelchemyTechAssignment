const CityWeatherPage = async ({ params }) => {
  const { city } = params;

  try {
    const res = await fetch(`https://backend-production-04b2.up.railway.app/api/weather?city=${city}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch weather for ${city}`);
    }

    const weatherData = await res.json();

    return (
      <div className="md:w-[40%] w-[95%] place-self-center mt-14 bg-gray-400">
        <h2 className="text-4xl font-bold mb-2 text-center pt-5">{weatherData.name}</h2>
        <p className='text-center text-2xl'>{weatherData.temp}°C</p>
        <div className='w-full flex justify-between'>
          <h5 className='bg-yellow-500 p-0.5 m-4 rounded text-[13.5px]'>Condition<p className='font-bold p-4 text-base'>{weatherData.condition}</p></h5>
          <h5 className='bg-red-500 p-0.5 m-4 rounded text-[13.5px]'>Humidity<p className='font-bold p-4 text-base'>{weatherData.humidity}%</p></h5>
          <h5 className='bg-green-500 p-0.5 m-4 rounded text-[13.5px]'>Wind Speed<p className='font-bold p-4 text-base'>{weatherData.wind}ms</p></h5>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div className="p-8 text-red-500">Failed to load weather data.</div>;
  }
};

export default CityWeatherPage;