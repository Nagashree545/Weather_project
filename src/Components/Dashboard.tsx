import React, { useEffect, useState } from 'react'
import styles from "../UI/Dashboard.module.css"
import { Button, Card, Col, Input, Row, Switch } from 'antd';
import { DirectionIcon } from './icons';
import WeatherCard from './WeatherCard';
import logo from "../Assets/logo.jpg";
import { AreaChartOutlined, BellOutlined, HeartOutlined, HomeOutlined, LoginOutlined, TranslationOutlined } from '@ant-design/icons';
import { useWeatherContent } from '../weatheractions';
import { useSelector } from 'react-redux';
import sky from "../Assets/sky.jpg"
import WeatherCardTwo from './WeatherCardTwo';

const Dashboard: React.FC<{}> = (() => {
    const [isLightTheme, setIsLightTheme] = useState(false);
    const { WeatherHandler , ForecastHandler } = useWeatherContent();
    const weatherData = useSelector((state: any) => state.weather.weatherData);
    const [city, setCity] = useState('');
    const foreCastData = useSelector((state: any) => state.weather.forcastData);
    const SingleData = useSelector((state: any) => state.weather.forcastData);

    const handleThemeSwitch = () => {
        setIsLightTheme(!isLightTheme);
    };
    useEffect(() => {
        WeatherHandler("bangalore");
        ForecastHandler("bangalore")
    }, []);
    const handleSearch = (val:any) => {
        WeatherHandler(city);
        ForecastHandler(city)
    };
    return (
        <>
            <div className={`${styles["main--container"]} 
             ${isLightTheme ? styles["light-theme"] : styles["dark-theme"]}`}>
                <div className={`${styles["main--dashboard--container"]} `}>
                    <Row gutter={[{ xs: 12, sm: 12, md: 12, xl: 24 }, 24]}>
                        <Col xl={4}  >
                            <div className={styles["menubar--container"]}>
                                <Card className={`${styles["cards"]}
                                 ${isLightTheme ? styles["light-theme"] : styles["dark-theme"]}`}>
                                    <div>
                                        <img src={logo} alt='image' className={styles["logo"]} />
                                        <h3>
                                            <HomeOutlined />
                                            <span>Dashboard</span>
                                        </h3>
                                        <h3>
                                            <AreaChartOutlined />
                                            <span>Revenue</span>
                                        </h3>
                                        <h3>
                                            <BellOutlined />
                                            <span>Notifications</span>
                                        </h3>
                                        <h3>
                                            <HeartOutlined />
                                            <span>Likes</span>
                                        </h3>
                                    </div>

                                    <h3>
                                        <LoginOutlined />
                                        <span>Log out</span>
                                    </h3>
                                </Card>
                            </div>

                        </Col>
                        <Col xs={24} sm={24} xl={24} xxl={19}>
                            <Row gutter={[24, 24]} className={styles["sub--dashboard--container"]}>

                                <Col xs={2} sm={4} xl={2} >
                                    <Switch className={styles["switch--tab"]}
                                        checked={isLightTheme} onChange={handleThemeSwitch} />
                                </Col>
                                <Col xs={24} sm={20} xl={16}>
                                    <Input className={styles["search--input"]}
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        placeholder='Search for your preffered city...' />
                                </Col>
                                <Col xs={24} xl={4} className={styles["btn--col"]}>
                                    <Button className={styles["location--btn"]} onClick={handleSearch}>
                                        Search
                                    </Button>
                                </Col>


                            </Row>
                            <WeatherCard />
                            <WeatherCardTwo foreCastData={foreCastData && foreCastData.list} length={1} singleDayData={SingleData} slice={undefined}/>
                        </Col>
                    </Row>
                </div>

            </div>
        </>
    )
})



export default React.memo(Dashboard);

// function ForecastHandler(p0: string) {
//     throw new Error('Function not implemented.');
// }
