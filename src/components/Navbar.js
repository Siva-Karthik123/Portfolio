import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Kurapati Siva Karthik
          </motion.span>
        </Link>
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <motion.div
          className="nav-item"
          whileHover={{ scale: 1.1, color: '#3498db' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link to="/">Home</Link>
        </motion.div>
        <motion.div
          className="nav-item"
          whileHover={{ scale: 1.1, color: '#3498db' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link to="/about">About</Link>
        </motion.div>
        <motion.div
          className="nav-item"
          whileHover={{ scale: 1.1, color: '#3498db' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link to="/projects">Projects</Link>
        </motion.div>
        <motion.div
          className="nav-item"
          whileHover={{ scale: 1.1, color: '#3498db' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Link to="/contact">Contact</Link>
        </motion.div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
