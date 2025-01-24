import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from './api';

const AuthGuard = ({ children }) => {
  const token = getToken();

  if (!token) {
    return <Navigate to="/login" />;
  }
// Log if token is found

  return children;
};

export default AuthGuard;