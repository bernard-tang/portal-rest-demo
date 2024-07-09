// AuthContext.js

import React, { createContext, useState, useContext } from 'react';

import { post, signIn } from './apiUtils'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially not logged in

  const login = async ( username, password ) => {
    setIsLoggedIn(true);
    // You can add logic to retrieve and set JWT token here
    try {
      const response = await signIn(`/auth/login`, {
        username: username,
        password: password, // Example: Setting completed to false by default
      });
      // const newTodoData = await httpRequest('POST', '/auth/login', {
      //   username: username,
      //   password: password, // Example: Setting completed to false by default
      // });
      const token = response;
      localStorage.setItem('jwtToken', token); // Save token after successful login
      // Redirect or navigate to authenticated route

      console.log('New todo created:', response);
      return true;
    } catch (error) {
      // console.error('Error creating todo:', error);
      // Handle error state or show error message to user
      return false;
    }

  };

  const logout = async () => {
    setIsLoggedIn(false);

    try {
      const response = await post(`/auth/logout`, {});

      localStorage.removeItem('jwtToken');

      return true;
    } catch (error) {
      return false;
    }

    // You may want to clear JWT token from localStorage here
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};