import React from 'react';
import styles from './Main.module.css';
import WeatherInfo from './WeatherInfo/WeatherInfo';

const Main = (props) => {
    return (
        <div className={styles.body}>
            <WeatherInfo />
        </div>
     );
}

export default Main;