import Weather from '../src';
import { validateCityName } from '../src/helpers';

test('getWeatherByCity correctly returns data corresponding to city', async () => {
  const weatherDataByCity = {
    berlin: {
      weather_state_name: 'Sunny',
      min_temp: 5,
      max_temp: 10,
      wind_speed: 7,
    },
    miami: {
      weather_state_name: 'Cloudy',
      min_temp: 22,
      max_temp: 25,
      wind_speed: 14,
    },
  };

  class Api {
    getWeatherByCity(city) {
      // TODO how to make it better???
      let validatedCityName;
      try {
        validatedCityName = validateCityName(city);
      } catch (e) {
        return Promise.reject(e);
      }
      const weatherData = weatherDataByCity[validatedCityName];
      return new Promise((resolve) => {
        resolve(weatherData);
      });
    }
  }

  const api = new Api();
  const weather = new Weather(api);

  expect(await weather.getWeatherByCity('berlin')).toBe(weatherDataByCity.berlin);
  expect(await weather.getWeatherByCity('miami')).toBe(weatherDataByCity.miami);

  await expect(weather.getWeatherByCity()).rejects.toEqual(new Error('Please specify city name'));
});
