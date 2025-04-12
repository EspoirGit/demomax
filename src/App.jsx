import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Statistiques from './pages/Statistiques';
import Login from './pages/Login';
import './index.css';

// Mock authentication function
const isAuthenticated = () => {
  return !!localStorage.getItem('authToken'); // Check if authToken exists in localStorage
};

// Protected route wrapper
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/statistiques" element={<ProtectedRoute element={<Statistiques />} />} />
        <Route path="*" element={<Navigate to={isAuthenticated() ? "/statistiques" : "/login"} />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default App;