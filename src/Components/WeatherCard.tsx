import React, { useEffect } from 'react';
import weatherstyle from "../UI/WeatherCard.module.css";
import { Col, Row } from 'antd';
import { WiSunrise, WiSunset } from 'react-icons/wi';
import { HumidityIcon, PressureIcon, UVIcon, WindSpeed } from './icons';
import sunny from "../Assets/clear 1.png";
import clouds from "../Assets/clouds.png";
import rain from "../Assets/rain.png";
import mist from "../Assets/mist.png";
import drizzle from "../Assets/drizzle.png";

import { useSelector } from 'react-redux';
import { useWeatherContent } from '../weatheractions';
const WeatherCard: React.FC<{}> = React.memo(() => {
    const { WeatherHandler } = useWeatherContent();

    const weatherData = useSelector((state: any) => state.weather.weatherData);
    const sunrise = weatherData?.sys?.sunrise;
    const sunset = weatherData?.sys?.sunset;
    const sunriseDate = new Date(sunrise * 1000);
    const sunsetDate = new Date(sunset * 1000);
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const formattedTime = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });
    const formattedSunrise = sunriseDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    const formattedSunset = sunsetDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });
    useEffect(() => {
        WeatherHandler("bangalore");
    }, [WeatherHandler]);
    return (
        <>
            <Row gutter={[{ xs: 12, sm: 12, md: 12, xl: 24 }, 24]} justify={"space-between"}>
                <Col xs={24} lg={8} xl={8}>
                    <div className={weatherstyle["weather-card"]}>
                        <div className={weatherstyle["weather--card--one"]}>
                            <h1 className={weatherstyle["loaction"]}>{weatherData?.name}</h1>
                            <div>
                                <h2 className={weatherstyle["card--time--one"]}>{formattedTime}</h2>
                                <h3>{formattedDate}</h3></div>
                        </div>

                    </div></Col>
                <Col xs={24} lg={15} xl={15}  >

                    <Row className={weatherstyle["weather--card--two"]}>
                        <Col xs={24} sm={12} xl={6} xxl={6}>
                            <div>
                                <h2 className={weatherstyle["temperature"]}>{weatherData?.main?.temp}°C</h2>
                                <p className={weatherstyle["feel--temp"]}>Feels like: {weatherData?.main?.feels_like}°C</p>
                            </div>
                            <div className={weatherstyle["weather--info-main"]}>
                                <div className={weatherstyle["weather-info--sub"]}>
                                    <WiSunrise className={weatherstyle["sunrise--icons"]} />
                                    <div>

                                        <span>Sunrise</span><br />
                                        <span>{formattedSunrise}</span>
                                    </div>

                                </div>
                                <div className={weatherstyle["weather-info--sub"]}>
                                    <WiSunset className={weatherstyle["sunrise--icons"]} />
                                    <div>
                                        <span>Sunset</span><br />
                                        <span>{formattedSunset}</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col style={{ textAlign: "center" }} xs={24} sm={12} xl={7} xxl={7}>
                            <div className={weatherstyle["sun--icon"]}>
                                <img src={weatherData?.weather[0]?.main === "Clouds" ? clouds :
                                    weatherData?.weather[0]?.main === "Rain" ? rain :
                                        weatherData?.weather[0]?.main === "Sunny" ?
                                            sunny : weatherData?.weather[0]?.main === "Mist" ? mist :
                                                weatherData?.weather[0]?.main === "Drizzle" ? drizzle :
                                                    sunny} className={weatherstyle["sunny--iconn-two"]} alt='sunny' />
                                <p className={weatherstyle["feel--temp"]} >{weatherData?.weather[0]?.main}</p>
                            </div></Col>
                        <Col xs={24} xl={9} xxl={9}><Row gutter={[24, 24]} justify={"center"} className={weatherstyle["humidity--row"]}>

                            <Col xs={12} sm={6} xl={11} >
                                <HumidityIcon className={weatherstyle["card--two--icons"]} />
                                <p>{weatherData?.main?.humidity}%</p>
                                <p>Humidity</p>
                            </Col>
                            <Col xs={12} sm={6} xl={11} >
                                <WindSpeed className={weatherstyle["card--two--icons"]} />
                                <p>{weatherData?.wind?.speed} km/h</p>
                                <p>Wind Speed</p>
                            </Col>
                            <Col xs={12} sm={6} xl={12} >
                                <PressureIcon className={weatherstyle["card--two--icons"]} />
                                <p>{weatherData?.main?.pressure} hPa</p>
                                <p>Pressure</p>
                            </Col>
                            <Col xs={12} sm={6} xl={12}>
                                <UVIcon className={weatherstyle["card--two--icons"]} />
                                <p>{weatherData?.main?.temp_max}°C</p>
                                <p>Max-temp</p>
                            </Col>
                        </Row>
                        </Col>
                    </Row>
                </Col>
            </Row >
        </>


    );
});

export default WeatherCard;