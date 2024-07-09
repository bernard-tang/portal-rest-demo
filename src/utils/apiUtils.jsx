// apiUtils.js

import axios from 'axios';

const baseURL = 'http://localhost:8080'; // Replace with your backend API URL

const headerPayload = {
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    
    // Add any headers you need for your requests
  },
};

// const axiosInstance = axios.create({
//   baseURL,
//   headers: {
//     'Content-Type': 'application/json',
//     // Add any headers you need for your requests
//   },
// });

// Axios interceptor to handle errors globally
// axiosInstance.interceptors.response.use(
//   (config) => {
//     const token = localStorage.getItem('jwtToken');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     console.error('API Error:', error);
//     throw error;
//   }
// );

const getHeaderPayload = () => {
  const token = localStorage.getItem('jwtToken');

  if(token){
      var tokenHeaderPayload = headerPayload;
      tokenHeaderPayload.headers.Authorization = `Bearer ${token}`
      return tokenHeaderPayload;
  }
  return headerPayload;
}

// Function to handle API errors
const handleAPIError = error => {
    // Customize error handling as needed (e.g., logging, showing error messages)
    console.error('API Error:', error);
    throw error;
  };

export const signIn = async (url, data = {}) => {
    try {
      const instance = axios.create(getHeaderPayload());
      const response = await instance.post(url, data);
      return response.data;
    } catch (error) {
      handleAPIError(error);
    }
  };

export const get = async (url, params = {}) => {
  try {
    const instance = axios.create(getHeaderPayload());
    const response = await instance.get(url, { params });
    return response.data;
  } catch (error) {
    handleAPIError(error);
  }
};

export const post = async (url, data = {}) => {
  try {
    const instance = axios.create(getHeaderPayload());
    const response = await instance.post(url, data);
    return response.data;
  } catch (error) {
    handleAPIError(error);
  }
};

// PUT method
export const put = async (url, data = {}) => {
    try {
      const instance = axios.create(getHeaderPayload());
      const response = await instance.put(url, data);
      return response.data;
    } catch (error) {
      handleAPIError(error);
    }
  };
  
  // DELETE method (example)
  export const del = async (url) => {
    try {
      const instance = axios.create(getHeaderPayload());
      const response = await instance.delete(url);
      return response.data;
    } catch (error) {
      handleAPIError(error);
    }
  };
  
  // FETCH method (example)
  export const fetchResource = async (resource, params = {}) => {
    const url = `${baseURL}/${resource}`;
    try {
      const instance = axios.create(getHeaderPayload());
      const response = await instance.get(url, { params });
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
