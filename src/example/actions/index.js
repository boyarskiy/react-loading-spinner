import * as api from '../api/api';

export function changeSearchFormInput(value) {
  return {
    type: 'INPUT_CHANGED',
    value
  }
}

export function getWeather(city) {
  return {
    types: ['WEATCHER_INFO_REQUESTED', 'WEATCHER_INFO_RECEIVED', 'WEATCHER_INFO_FAILED'],
    promise: api.getWeatherInfo(city)
  }
}
