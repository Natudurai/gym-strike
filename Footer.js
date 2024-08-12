import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4>Strike</h4>
        <p>&copy; strike@gmial.com </p>
        <p>
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
        </p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook" className="fab fa-facebook-f"></a>
          <a href="#" aria-label="Twitter" className="fab fa-twitter"></a>
          <a href="#" aria-label="LinkedIn" className="fab fa-linkedin-in"></a>
          <a href="#" aria-label="Instagram" className="fab fa-instagram"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
