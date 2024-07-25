import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
});

// Add a request interceptor to include the token in the headers
axiosInstance.interceptors.request.use(config => {
  const token =JSON.parse( localStorage.getItem('token'));
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;
