import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token from localStorage or sessionStorage
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');

    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h1>You are logged out</h1>
      <button className="btn btn-primary" onClick={handleLogout}>
        Go to Login
      </button>
    </div>
  );
};

export default Logout;
