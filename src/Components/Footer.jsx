import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <img src="/logo.png" alt="fg" className="footer-logo" />
          </div>

          <div className="footer-col">
            <h4>Address</h4>
            <p>Cochin University Junction</p>
            <p>Cochin </p>
            <p>Pin- 682022</p>
            <p>Email-emails@iwex.in</p>
          </div>

          <div className="footer-col">
            <h4>Help</h4>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Register</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#"><i className="fa-brands fa-facebook"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
