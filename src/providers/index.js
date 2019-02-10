import MetaWeather from './MetaWeather';
import OpenWeatherMap from './OpenWeatherMap';

const listOfProviders = { metaweather: MetaWeather, openweathermap: OpenWeatherMap };

const getProvider = (providerName) => {
  if (listOfProviders[providerName] === 'undefined') {
    throw new Error('We do not work with this Weather provider');
  }
  return listOfProviders[providerName];
};

export default getProvider;
