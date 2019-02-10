import { request, validateCityName } from '../helpers';

class OpenWeatherMap {
  constructor() {
    this.searchUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
    this.apiKey = process.env.OPEN_WEATHER_API_KEY;
  }

  async getWeatherByCity(city) {
    // TODO how to make it better???
    let validatedCityName;
    try {
      validatedCityName = validateCityName(city);
    } catch (e) {
      return Promise.reject(e);
    }
    const weatherUrl = `${this.searchUrl}${validatedCityName}&appid=${this.apiKey}&units=metric`;
    console.log(weatherUrl);
    const { data } = await request(weatherUrl);
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
  }
}

export default OpenWeatherMap;
