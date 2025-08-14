import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/image.png'; // Adjust the path as necessary


const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content relative z-10">

        {/* Titre principal avec effet gradient */}
        <h1 className="hero-title text-xl md:text-2xl font-light mb-4 text-gray-300 tracking-wide">
          Kairos 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium"> ZERO</span>
        </h1>

        {/* Titre principal avec animation */}
        <h2 className="subtitle text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-none">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-100 hover:from-blue-200 hover:via-white hover:to-blue-200 transition-all duration-700">
            Find Your EDGE To have an edge
          </span>
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </h2>

        {/* Sous-titre entreprise */}
        <p className="subtitle text-lg md:text-xl font-light mb-8 text-blue-200/80">
          By <span className="font-medium text-white">PeakFlow Technologies</span>
        </p>

        {/* Description avec plus de punch */}
        <p className="hero-description text-base md:text-lg leading-relaxed mb-12 text-gray-300 max-w-2xl mx-auto">
          The ultimate tool to predict and plan like a pro.
        </p>
        <div className="hero-buttons" style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/signup" className="btn primary" style={{ fontSize: '1.2rem', fontWeight: '400' }}>
           EARLY ACCESS
          </Link>
        </div>
      </div>
      <img
        src={image}
        alt="Running athletes"
        style={{
          width: '50%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          filter: 'grayscale(100%) contrast(120%)'
        }}
      />
    </section>
  );
};

export default Hero;