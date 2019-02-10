import axios from 'axios';

export const request = (url) => {
  return axios.get(url, {
    validateStatus: status => status === 200,
  });
};

export const validateCityName = (city) => {
  const preparedCityName = city.trim().toLowerCase();
  if (preparedCityName.length < 1) {
    throw new Error('Please specify city name');
  }
  return preparedCityName;
};
