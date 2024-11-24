import React from 'react';
import Hero from './Hero';
import CategoryHighlights from './products/CategoryHighlights';
import ProductList from './products/ProductList'

const Home = () => {
  return (
    <div>
      {/* <h1>Welcome to My E-Commerce Platform</h1>
      <p>Explore amazing products and deals!</p> */}
      <Hero />
      <CategoryHighlights/>
      <ProductList/>
    </div>
  );
};

export default Home;
