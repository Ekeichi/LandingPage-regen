import React from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';

const About: React.FC = () => {

  return (
    <> 
    <Header />
    <div style={{
      minHeight: '100vh',
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      color: 'var(--color-text)',
      lineHeight: '1.6'
    }}>
      {/* Our Mission */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{
          marginTop: '4rem',
          fontSize: '2rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
          color: 'var(--color-text)'
        }}>
          Our Mission
        </h2>
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '1.5rem',
          color: 'var(--color-text-secondary)',
          fontFamily: 'Arial, Helvetica, sans-serif'
        }}>
          At PeakFlow Technologies, we are redefining what's possible in running performance.
          Our mission is simple yet ambitious: to give every runner — from weekend joggers to elite athletes — access to advanced performance tools once reserved for professionals.
        </p>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--color-text-secondary)',
          fontFamily: 'Arial, Helvetica, sans-serif'
        }}>
         The first release in our Kairos collection, Kairos Zero, marks a major milestone in this vision. It's a precision pacing tool designed to help runners optimize their strategy, push their limits, and achieve their personal best on race day.
        </p>
      </section>

      {/* The Technology */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
          color: 'var(--color-text)'
        }}>
          The Technology
        </h2>
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '1.5rem',
          color: 'var(--color-text-secondary)',
          fontFamily: 'Arial, Helvetica, sans-serif'
        }}>
         At the heart of Kairos Zero lies a breakthrough mathematical model inspired by the minimal power theory in human performance. Built on peer-reviewed scientific research, this model maps the relationship between metabolic power and running speed with exceptional accuracy.
        </p>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--color-text-secondary)',
          fontFamily: 'Arial, Helvetica, sans-serif'
        }}>
          Our platform integrates:
          <ul style={{
            marginTop: '1rem',
            marginBottom: '1rem',
            listStyleType: 'disc',
            paddingLeft: '2rem',
            fontSize: '1.1rem',
            color: 'var(--color-text-secondary)',
            fontFamily: 'Arial, Helvetica, sans-serif'
          }}>
            <li>Advanced power analysis algorithms</li>
            <li>GPX route and elevation processing</li>
            <li>Weather impact prediction</li>
            <li>Personal performance profiling</li>
          </ul>
          Through machine learning, PeakFlow continuously adapts and improves its predictions — learning from each run, each race, and each user’s unique physiology.
        </p>
      </section>

      {/* Contact Us */}
      <section style={{
        padding: '2rem',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '15px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '600',
          marginBottom: '1.5rem',
          color: 'var(--color-text)'
        }}>
          Contact Us
        </h2>
        <p style={{
          fontSize: '1.1rem',
          marginBottom: '1.5rem',
          color: 'var(--color-text-secondary)',
          fontFamily: 'Arial, Helvetica, sans-serif'
        }}>
          We’re committed to making PeakFlow the most accurate and valuable tool for runners worldwide.
          If you have feedback, questions, or ideas, we’d love to hear from you at
          {' '}
          <a 
            href="mailto:peakflow.corp@gmail.com"
            style={{
              color: '#667eea',
              textDecoration: 'none',
              fontWeight: '600',
              fontFamily: 'Arial, Helvetica, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textDecoration = 'underline';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textDecoration = 'none';
            }}
          >
            peakflow.corp@gmail.com
          </a>.
        </p>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--color-text-secondary)',
          fontFamily: 'Arial, Helvetica, sans-serif'
        }}>
          Together, we can push the limits of human performance — one stride at a time.
        </p>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default About;   