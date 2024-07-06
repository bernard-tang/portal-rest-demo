// apiUtils.js

import axios from 'axios';

const baseURL = 'http://localhost:8080'; // Replace with your backend API URL

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    // Add any headers you need for your requests
  },
});

// Axios interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (config) => {
    const token = localStorage.getItem('jwtToken');
    if (token && !config.config.url.endsWith('/login')) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('API Error:', error);
    throw error;
  }
);

// Function to handle API errors
const handleAPIError = error => {
    // Customize error handling as needed (e.g., logging, showing error messages)
    console.error('API Error:', error);
    throw error;
  };

export const get = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    handleAPIError(error);
  }
};

export const post = async (url, data = {}) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    handleAPIError(error);
  }
};

// PUT method
export const put = async (url, data = {}) => {
    try {
      const response = await axiosInstance.put(url, data);
      return response.data;
    } catch (error) {
      handleAPIError(error);
    }
  };
  
  // DELETE method (example)
  export const del = async (url) => {
    try {
      const response = await axiosInstance.delete(url);
      return response.data;
    } catch (error) {
      handleAPIError(error);
    }
  };
  
  // FETCH method (example)
  export const fetchResource = async (resource, params = {}) => {
    const url = `${baseURL}/${resource}`;
    try {
      const response = await axiosInstance.get(url, { params });
      return response.data;
    } catch (error) {
      handleAPIError(error);
    }
  };

  // Function to make HTTP request
  export const httpRequest = async (method, endpoint, data = null, headers = {}) => {
    const url = `${baseURL}/${resource}`;

    try {
      const response = await axios({
        method,
        url,
        headers,
        data,
      });
      return response.data;
    } catch (error) {
      console.error(`${method} request to ${endpoint} failed:`, error);
      throw error;
    }
  };
