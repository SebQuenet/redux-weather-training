import axios from 'axios';

const API_KEY = '507b172ccbbb9e52013410dcb05a4590';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},fr`;
    const request = axios.get(url);
    console.log(request);
    return {
        type: FETCH_WEATHER,
        payload: request,
    };
}
