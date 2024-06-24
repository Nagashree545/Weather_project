import axios from 'axios';

// const apiKey = 'https://api.openweathermap.org/data/2.5/weather?q=cty&appid=Api_key&units=metric';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=d70eab8a7e85ea5c35cc7b9bc311b4d5`;
const apiforcast = `https://api.openweathermap.org/data/2.5/forecast?cnt=20&&appid=d70eab8a7e85ea5c35cc7b9bc311b4d5`;
export interface RootState {
  // Define your RootState interface here
}
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

// import axios from 'axios';

// // Define your API key
// const apiKey = 'bb169ea4fcb537a3d54c1614284c2396';
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// export interface RootState {
//   // Define your RootState interface here
// }

// export const fetchWeatherData = async (city: string) => {
//   try {
//     const response = await axios.get(apiUrl, {
//       params: {
//         q: city,
//         appid: apiKey,
//         units: 'metric',
//         exclude: "minutely,hourly,alerts"
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//     throw error;
//   }
// };
// import axios from 'axios';

// // Define your API key
// const apiKey = 'bb169ea4fcb537a3d54c1614284c2396';
// const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

// export interface RootState {
//   // Define your RootState interface here
// }

// export const fetchWeatherData = async (city: string) => {
//   try {
//     const response = await axios.get(apiUrl, {
//       params: {
//         q: city,
//         appid: apiKey,
//         units: 'metric',
//         cnt: 8 
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//     throw error;
//   }
// };
