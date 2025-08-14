import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Overlay pour fermer le menu */}
      {isMenuOpen && (
        <div 
          className="menu-overlay"
          onClick={closeMenu}
        />
      )}
      
      <header>
        <nav className="nav-menu">
          <div className="logo">
            <Link to="/">PEAKFLOW TECHNOLOGIES</Link>
          </div>
        </nav>
        
        {/* Menu hamburger pour mobile */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>
                KAIROS ZERO
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={closeMenu}>
                ABOUT
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar; 