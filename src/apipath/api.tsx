import axios from 'axios';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=d70eab8a7e85ea5c35cc7b9bc311b4d5`;
const apiforcast = `https://api.openweathermap.org/data/2.5/forecast?cnt=20&&appid=d70eab8a7e85ea5c35cc7b9bc311b4d5`;

export const fetchWeatherData = async (city: string) => {
  try {
    const response = await axios.get(`${apiUrl}`, {

      params: {
        q: city,
        appid: apiUrl,
        units: 'metric',
        exclude: "minutely,hourly,alerts"
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}
export const fetchForecastData = async (city: string) => {
  try {
    const response = await axios.get(`${apiforcast}`, {

      params: {
        q: city,
        appid: apiforcast,
        units: 'metric',
        exclude: "minutely,hourly,alerts"
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

