import { validateCityName } from '../helpers';
import WeatherService from './WeatherService';

class MetaWeather extends WeatherService {
  constructor(httpClient) {
    super(httpClient);
    this.locationSearchUrl = 'https://www.metaweather.com/api/location/search/?query=';
    this.locationWeatherUrl = 'https://www.metaweather.com/api/location';
  }

  async getWoeid(searchQuery) {
    const woeidUrl = this.locationSearchUrl + searchQuery;
    const { data } = await this.makeRequest(woeidUrl);
    if (data.length < 1) {
      throw Error(`We couldn't find any city in the weather provider database corresponding to provided query: ${searchQuery}`);
    }
    // TODO in the future give user possibility to select necessary city
    const foundCityData = data[0];
    const { woeid } = foundCityData;
    return woeid;
  }

  async getWeatherByCity(city) {
    const validatedCityName = validateCityName(city);
    const woeid = await this.getWoeid(validatedCityName);
    const weatherUrl = `${this.locationWeatherUrl}/${woeid}/`;
    const { data } = await this.makeRequest(weatherUrl);
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
  }
}

export default MetaWeather;
