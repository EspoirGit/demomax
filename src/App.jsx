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
        <Route
          path="/*"
          element={
            <div style={{ padding: '1rem' }}>
              {/* Adjusted layout since Navbar and other components are removed */}
              <Routes>
                <Route path="/statistiques" element={<ProtectedRoute element={<Statistiques />} />} />
              </Routes>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;