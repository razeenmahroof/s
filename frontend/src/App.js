import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthGuard from './Authguard';
import LoginPage from './LoginPage';
import SyntheticDataGenerator from './SyntheticDataGenerator';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/synthetic-data-generator" element={<AuthGuard><SyntheticDataGenerator /></AuthGuard>} />
      </Routes>
    </Router>
  );
};

export default App;