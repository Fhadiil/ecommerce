import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProductList from './pages/ProductList';
// import Profile from './pages/Profile';
// import Dashboard from './pages/Dashboard';
// import ErrorPage from './pages/ErrorPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<ProductList/>} />
      {/* <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;
