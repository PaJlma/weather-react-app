import { put, takeEvery, call } from 'redux-saga/effects';
import { actionCreators, FETCH_WEATHER_DATA } from './../reducers/actions';

const OPEN_WEATHER_KEY = "8d24c9e287fbcb3e0ff18319bd2248bb";

// https://jsonplaceholder.typicode.com/posts
// https://api.openweathermap.org/data/2.5/weather?q=${'Rostov-on-Don'}&appid=${OPEN_WEATHER_KEY}

function* fetchWeatherDataWorker(action) {
    const response = yield call(() => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=${OPEN_WEATHER_KEY}`));
    const data = yield call(() => new Promise(resolve => resolve(response.json())));
    yield put(actionCreators.setWeatherData(data));
}

function* fetchWeatherDataWatcher() {
    yield takeEvery(FETCH_WEATHER_DATA, fetchWeatherDataWorker);
}

export default fetchWeatherDataWatcher;