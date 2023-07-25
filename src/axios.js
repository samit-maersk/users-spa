import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000'
});


// request interceptor
instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
}, function (error) {
  return Promise.reject(error);
});

// response interceptor
instance.interceptors.response.use(function (response) {
    console.log(`Axios response interceptor ${response.status}`)
    return response;
}, function (error) {
  const eStatus = error?.response?.status
  console.log(`Axios response interceptor error: ${eStatus}`)
  if (eStatus === 401 || eStatus === 403) {
      localStorage.removeItem('token');
  }
  return Promise.reject(error);
});

export default instance;