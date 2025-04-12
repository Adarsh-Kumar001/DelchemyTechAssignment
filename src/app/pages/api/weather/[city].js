
import axios from 'axios';

export default async function handler(req, res) {
  const { city } = req.query;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=79404401fdd9b067c89933c9c2f86fea&units=metric`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
}

