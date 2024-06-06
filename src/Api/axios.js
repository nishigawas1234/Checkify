import axios from 'axios';

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: "https://checkify-be.onrender.com",
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add the Authorization header to each request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
