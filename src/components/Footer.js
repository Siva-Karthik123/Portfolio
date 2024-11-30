import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Media Links */}
        <div className="social-icons">
          <a href="https://github.com/Siva-Karthik123" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com/in/kurapati-siva-karthik" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright Info */}
        <p>© {new Date().getFullYear()} MyPortfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
