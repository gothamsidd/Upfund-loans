import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './Navbar.css';

const Navbar = ({ isScrolled, isMenuOpen, toggleMenu, setIsMenuOpen }) => {
    { isScrolled, isMenuOpen, toggleMenu, setIsMenuOpen }
    
  
    return (
    <div className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <nav className='navbar'>
        <div className='logo'>
          <a href="/">
            <img src="/logo.png" alt="upfund Logo" className="logo-image" />
          </a>
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
          <a href="/#contact-main" className='nav-items' onClick={() => setIsMenuOpen(false)}>Contact Us</a>
          <a href="/#carloanform" className="btn-apply-navbar" onClick={() => setIsMenuOpen(false)}>Apply Now</a>
        </div>
      </nav>
    </div>

  )
};

const FooterWrapper = () => {
  return <Footer />;
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <Router>
      <Navbar 
        isScrolled={isScrolled} 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu}
        setIsMenuOpen={setIsMenuOpen}
      />

      

      <FooterWrapper />
    </Router>
  )
}



export default Navbar;
