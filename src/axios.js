import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000'
});


// request interceptor
instance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// response interceptor
instance.interceptors.response.use(function (response) {
    console.log('Axios response interceptor')
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

export default instance;