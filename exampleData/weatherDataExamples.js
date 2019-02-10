export const openWeatherMapDataExample = {
  miami: {
    coord: { lon: -80.19, lat: 25.77 },
    weather:
      [{
        id: 500, main: 'Rain', description: 'light rain', icon: '10d',
      }],
    base: 'stations',
    main:
      {
        temp: 22.82,
        pressure: 1025,
        humidity: 73,
        temp_min: 22.2,
        temp_max: 23.3,
      },
    visibility: 16093,
    wind: { speed: 6.2, deg: 80 },
    rain: { '1h': 0.25 },
    clouds: { all: 75 },
    dt: 1549802520,
    sys:
      {
        type: 1,
        id: 4452,
        message: 0.0042,
        country: 'US',
        sunrise: 1549799950,
        sunset: 1549840268,
      },
    id: 4164138,
    name: 'Miami',
    cod: 200,
  },
  berlin: {
    coord: { lon: 13.39, lat: 52.52 },
    weather:
      [{
        id: 500, main: 'Rain', description: 'light rain', icon: '10d',
      }],
    base: 'stations',
    main:
      {
        temp: 7, pressure: 994, humidity: 87, temp_min: 7, temp_max: 7,
      },
    visibility: 10000,
    wind: { speed: 7.2, deg: 170 },
    clouds: { all: 75 },
    dt: 1549799400,
    sys:
      {
        type: 1,
        id: 1275,
        message: 0.0038,
        country: 'DE',
        sunrise: 1549780325,
        sunset: 1549815001,
      },
    id: 2950159,
    name: 'Berlin',
    cod: 200,
  },
};

export const metaWeatherDataExample = {
  berlin:
    [{
      title: 'Berlin',
      location_type: 'City',
      woeid: 638242,
      latt_long: '52.516071,13.376980',
    }],
  miami: [{
    title: 'Miami',
    location_type: 'City',
    woeid: 2450022,
    latt_long: '25.728979,-80.237419',
  }],
  638242: {
    consolidated_weather:
      [
        {
          id: 4692691564625920,
          weather_state_name: 'Heavy Rain',
          weather_state_abbr: 'hr',
          wind_direction_compass: 'SSW',
          created: '2019-02-10T13:54:54.695802Z',
          applicable_date: '2019-02-10',
          min_temp: 3.8533333333333335,
          max_temp: 8.413333333333334,
          the_temp: 7.33,
          wind_speed: 12.922609111369601,
          wind_direction: 192.5139105491228,
          air_pressure: 1000.2049999999999,
          humidity: 86,
          visibility: 2.955552075876879,
          predictability: 77,
        },
      ],
  },
  2450022: {
    consolidated_weather:
      [
        {
          id: 6594260082098176,
          weather_state_name: 'Showers',
          weather_state_abbr: 's',
          wind_direction_compass: 'E',
          created: '2019-02-10T11:35:38.432720Z',
          applicable_date: '2019-02-10',
          min_temp: 22.240000000000002,
          max_temp: 24.67,
          the_temp: 23.595,
          wind_speed: 11.906909082194646,
          wind_direction: 87.33431218602841,
          air_pressure: 1030.175,
          humidity: 75,
          visibility: 10.85193718682892,
          predictability: 73,
        },
      ],
  },
};
