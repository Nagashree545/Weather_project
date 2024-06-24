
import { fetchWeatherData } from '../src/apipath/api';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weatherData: null,
  },
  reducers: {
    WeatherDataSlice: (state:any, action:any) => {
      state.weatherData = action.payload;
    },
    ForecastDataSlice: (state:any, action:any) => {
      state.forcastData = action.payload;
    },
  },
});

export const { WeatherDataSlice , ForecastDataSlice } = weatherSlice.actions;
export default weatherSlice.reducer;

