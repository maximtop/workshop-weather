import { request, validateCityName } from '../helpers';

class MetaWeather {
  constructor() {
    this.locationSearchUrl = 'https://www.metaweather.com/api/location/search/?query=';
    this.locationWeatherUrl = 'https://www.metaweather.com/api/location';
  }

  async getWoeid(searchQuery) {
    const woeidUrl = this.locationSearchUrl + searchQuery;
    const { data } = await request(woeidUrl);
    if (data.length < 1) {
      throw Error(`We couldn't find any city in the weather provider database corresponding to provided query: ${searchQuery}`);
    }
    // TODO in the future give user possibility to select necessary city
    const foundCityData = data[0];
    const { woeid } = foundCityData;
    return woeid;
  };

  async getWeatherByCity(city) {
    // TODO how to make it better???
    let validatedCityName;
    try {
      validatedCityName = validateCityName(city);
    } catch (e) {
      return Promise.reject(e);
    }
    const woeid = await this.getWoeid(validatedCityName);
    const weatherUrl = `${this.locationWeatherUrl}/${woeid}/`;
    const { data } = await request(weatherUrl);
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
