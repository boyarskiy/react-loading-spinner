import request from 'superagent';

const API = 'http://api.openweathermap.org/data/2.5/weather?q=';

export function getWeatherInfo(city) {
  return new Promise((resolve, reject) => {
    request
      .get(API + city)
      .end(
        (err, res) => {
          if(err) {
            reject(res.body || err)
          } else {
            resolve(res.body)
          }
        }
      )
  });
}
