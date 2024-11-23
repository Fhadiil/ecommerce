import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Toaster } from 'react-hot-toast';

// import './styles/global.css';

const App = () => {
  return (
    <Router>
    <Toaster />
      <Navbar />
      <div className="container mt-4">
        <AppRoutes />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
