import Weather from '../src';
import getProvider from '../src/providers';

import { openWeatherMapDataExample, metaWeatherDataExample } from '../exampleData/weatherDataExamples';

test('that OpenWeatherMap correctly requests and handles city weather data', async () => {
  class TestHttpClient {
    get(url) {
      let data;
      if (url.includes('berlin')) {
        data = openWeatherMapDataExample.berlin;
      }
      if (url.includes('miami')) {
        data = openWeatherMapDataExample.miami;
      }
      return new Promise(resolve => resolve({ data }));
    }
  }

  const httpClient = new TestHttpClient();
  const Provider = getProvider('openweathermap');
  const openWeatherMap = new Provider(httpClient);
  const weather = new Weather(openWeatherMap);

  const prepareData = (data) => {
    const {
      weather: [{ main: weather_state_name }],
      main: { temp_min: min_temp, temp_max: max_temp },
      wind: { speed: wind_speed },
    } = data;
    return {
      weather_state_name,
      min_temp,
      max_temp,
      wind_speed,
    };
  };

  expect(await weather.getWeatherByCity('berlin')).toEqual(prepareData(openWeatherMapDataExample.berlin));
  expect(await weather.getWeatherByCity('miami')).toEqual(prepareData(openWeatherMapDataExample.miami));
  await expect(weather.getWeatherByCity()).rejects.toEqual(new Error('Please specify city name'));
});

test('that MetaWeather correctly requests and handles city weather data', async () => {
  class TestHttpClient {
    get(url) {
      let data;
      if (url.includes('?query=berlin')) {
        data = metaWeatherDataExample.berlin;
      }
      if (url.includes('?query=miami')) {
        data = metaWeatherDataExample.miami;
      }
      if (url.includes('location/638242')) {
        data = metaWeatherDataExample['638242'];
      }
      if (url.includes('location/2450022')) {
        data = metaWeatherDataExample['2450022'];
      }
      return new Promise(resolve => resolve({ data }));
    }
  }

  const httpClient = new TestHttpClient();
  const Provider = getProvider('metaweather');
  const openWeatherMap = new Provider(httpClient);
  const weather = new Weather(openWeatherMap);

  const prepareData = (data) => {
    const { consolidated_weather } = data;
    const {
      weather_state_name,
      min_temp,
      max_temp,
      wind_speed,
    } = consolidated_weather[0];
    return {
      weather_state_name,
      min_temp,
      max_temp,
      wind_speed,
    };
  };

  expect(await weather.getWeatherByCity('berlin')).toEqual(prepareData(metaWeatherDataExample['638242']));
  expect(await weather.getWeatherByCity('miami')).toEqual(prepareData(metaWeatherDataExample['2450022']));
  await expect(weather.getWeatherByCity()).rejects.toEqual(new Error('Please specify city name'));
});
