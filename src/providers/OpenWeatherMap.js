import { validateCityName } from '../helpers';
import WeatherService from './WeatherService';

class OpenWeatherMap extends WeatherService {
  constructor(httpClient) {
    super(httpClient);
    this.searchUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
    this.apiKey = process.env.OPEN_WEATHER_API_KEY;
  }

  async getWeatherByCity(city) {
    const validatedCityName = validateCityName(city);
    const weatherUrl = `${this.searchUrl}${validatedCityName}&appid=${this.apiKey}&units=metric`;
    const { data } = await this.makeRequest(weatherUrl);
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
