#!/usr/bin/env node
import program from 'commander';
import Weather from '..';
import pjson from '../../package';
import getProvider from '../providers';

program
  .version(pjson.version)
  .arguments('<city>')
  .option('-p, --provider <provider>', 'choose one of weather providers: metaweather, openweathermap')
  .action(async (city) => {
    const Provider = getProvider(program.provider);
    const providerApi = new Provider();
    const weather = new Weather(providerApi);
    const weatherData = await weather.getWeatherByCity(city);
    console.log(weatherData);
  })
  .parse(process.argv);
