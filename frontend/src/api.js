import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// https://pfdjl4uba0.execute-api.ap-south-1.amazonaws.com/dev
const api = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your backend URL
});

export const getToken = () => {
  return localStorage.getItem('token');
};
const removeToken = () => {
    return localStorage.removeItem('token')
}


api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    //console.log('Token in request:', config.headers.Authorization); // Debugging line
    return config;
  },
  (error) => {
    console.error('Error generating synthetic data:', error);
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log("Error in interceptors: ", error);
      if (error.response && error.response.status === 401) {
        // Token is expired or invalid, remove it
        removeToken();
  
        window.location.href = "/login"
  
        console.error('Token expired, redirecting to login');
      }
  
      return Promise.reject(error);
    }
  );

export default api;