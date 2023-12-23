import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>Email: contact@skyvisit.com</p>
            <p>Phone: +91 (044) 456-7890</p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-light">About Us</a>
              </li>
              <li>
                <a href="/services" className="text-light">Services</a>
              </li>
              <li>
                <a href="/contact" className="text-light">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">Facebook</a>
              </li>
              <li>
                <a href="#" className="text-light">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-light">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
