import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000'
});


// request interceptor
instance.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// response interceptor
instance.interceptors.response.use(function (response) {
    console.log('Axios response interceptor')
    return response;
  }, function (error) {
    
    console.log(`Axios response interceptor error: ${error.response.status}`)
    
    if (error.response.status === 401 || error.response.status === 403) {
        localStorage.removeItem('token');
        //window.location.href = '/login';
    }
    return Promise.reject(error);
  });

export default instance;