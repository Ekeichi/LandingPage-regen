import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Community from '../components/Community';
import Header from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Community /> 
      <Footer />
    </div>
  );
};

export default Home; 