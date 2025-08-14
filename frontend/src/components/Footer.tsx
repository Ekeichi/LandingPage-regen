import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">PEAKFLOW TECHNOLOGIES</div>
          <div className="copyright">© 2025 PeakFlow Technologies</div>
        </div>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 