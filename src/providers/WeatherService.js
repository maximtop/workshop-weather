import axios from 'axios';

class WeatherService {
  constructor(httpClient = axios) {
    this.httpClient = httpClient;
  }

  makeRequest(url) {
    return this.httpClient.get(url, {
      validateStatus: status => status === 200,
    });
  }
}

export default WeatherService;
