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
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Weather in {weatherData.name}</h1>
        <div className="bg-blue-100 p-4 rounded shadow text-black">
          <p>Temperature: {weatherData.temp}°C</p>
          <p>Condition: {weatherData.condition}</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind Speed: {weatherData.wind} m/s</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div className="p-8 text-red-500">Failed to load weather data.</div>;
  }
};

export default CityWeatherPage;