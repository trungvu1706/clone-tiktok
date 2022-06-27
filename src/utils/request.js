import axios from 'axios';

// Create an instance using the config defaults provided by the library
// At this point the timeout config value is `0` as is the default for the library
const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Add a request interceptor
request.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default request;
