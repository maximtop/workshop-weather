import getProvider from './providers';

class Weather {
  constructor(api) {
    this.api = api;
  }

  getWeatherByCity(city = '') {
    return this.api.getWeatherByCity(city);
  }
}

export default Weather;
