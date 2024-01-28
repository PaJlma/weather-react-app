
import { all } from 'redux-saga/effects';
import fetchWeatherDataWatcher from './getWeatherDataSaga';

function* rootSaga() {
    yield all([fetchWeatherDataWatcher()]);
}

export default rootSaga;