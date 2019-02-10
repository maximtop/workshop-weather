export const validateCityName = (city) => {
  const preparedCityName = city.trim().toLowerCase();
  if (preparedCityName.length < 1) {
    throw new Error('Please specify city name');
  }
  return preparedCityName;
};
