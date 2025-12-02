import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Don't show navbar on login/signup pages
  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }
  
  return (
    <div className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <nav className='navbar'>
        <div className='logo'>
          <Link to="/">
            <img src="/logofinal.png" alt="upfund Logo" className="logo-image" />
          </Link>
        </div>
        
        <button className={`menu-button ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" className='nav-items' onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="/#about" className='nav-items' onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="/#Features" className='nav-items' onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="/#emi-calculator" className='nav-items' onClick={() => setIsMenuOpen(false)}>Calculator</a>
          <a href="/#contact-main" className='nav-items' onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          <Link to="/login" className='nav-items' onClick={() => setIsMenuOpen(false)}>Login</Link>
          <Link to="/signup" className="btn-apply-navbar" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
