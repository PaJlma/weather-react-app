import React from 'react';
import styles from './WeatherInfo.module.css';
import { useSelector } from 'react-redux';

import sunny from '../../../assets/weather/sunny.svg';
import cloud from '../../../assets/weather/cloud.svg';
import mist from '../../../assets/weather/mist.svg';
import rain from '../../../assets/weather/rain.svg';
import thunder from '../../../assets/weather/thunder.svg';

import wind from '../../../assets/images/wind.svg';
import humidity from '../../../assets/images/humidity.svg';
import pressure from '../../../assets/images/pressure.svg';

const WeatherInfo = (props) => {
    const { townToSearch, weatherData } = useSelector(state => state.root);

    const fromKelvinToCels = (entry) => Math.floor(+entry - 273.15);

    let weatherType = {
        Clear: <img className={styles.weatherIco} src={sunny} alt="Sunny" />,
        Clouds: <img className={styles.weatherIco} src={cloud} alt="Clouds" />,
        Mist: <img className={styles.weatherIco} src={mist} alt="Mist" />,
        Haze: <img className={styles.weatherIco} src={mist} alt="Mist" />,
        Rain: <img className={styles.weatherIco} src={rain} alt="Rain" />,
        Thunder: <img className={styles.weatherIco} src={thunder} alt="Thunder" />,
    };

    return (
        <div className={styles.body}>
            <div className={styles.main}>
                <p className={styles.place}>{ weatherData.name }</p>
                <p className={styles.temperature}>{ `${fromKelvinToCels(weatherData.main.temp)} °С` }</p>
            </div>

            {weatherType[weatherData.weather[0].main]}
            {/* <img className={styles.weatherIco} src={weatherType} alt="Sunny" /> */}
            {/* Clear, Cloud, Mist, Rain, Thunder */}

            <div className={styles.additional}>
                <p className={styles.feelsLike}>{ `Ощущается как: ${fromKelvinToCels(weatherData.main.feels_like)} °С` }</p>
                <div className={styles.additionalBlock}>
                    <img src={wind} alt="wind" />
                    <p>{ `${weatherData.wind.speed} м/с` }</p>
                </div>
                <div className={styles.additionalBlock}>
                    <img src={humidity} alt="humidity" />
                    <p>{ `${weatherData.main.humidity}%` }</p>
                </div>
                <div className={styles.additionalBlock}>
                    <img src={pressure} alt="pressure" />
                    <p>{ `${weatherData.main.pressure} мм рт. ст.` }</p>
                </div>
            </div>
        </div>
     );
}

export default WeatherInfo;