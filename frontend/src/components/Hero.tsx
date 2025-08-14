import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/vite.svg'; // Adjust the path as necessary


const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title" style={{ fontSize: '1.2rem', fontWeight: '400', marginBottom: '1rem' }}>
          FIND YOUR EDGE TO HAVE AN EDGE
        </h1>
        <h2 className="subtitle" style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '1rem', lineHeight: '1' }}>
          <span style={{ color: 'white' }}>PEAKFLOW</span> <span style={{ color: 'white' }}>TECHNOLOGIES PRESENTS</span>
        </h2>
        <p className="subtitle" style={{ fontSize: '1.2rem', fontWeight: '400', marginBottom: '2rem' }}>
          KAIROS ZERO
        </p>
        <p className="hero-description" style={{ fontSize: '1rem', lineHeight: '1.5', marginBottom: '3rem' }}>
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
            width: '100%',
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