import React from "react";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaLinkedinIn, 
  FaWhatsapp, 
  FaInstagram, 
  FaChevronRight,
  FaShieldAlt
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="ho-footer-wrapper">
      {/* --- UNIQUE CENTER CURVE SVG --- */}
      <div className="ho-footer-curve">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="ho-curve-fill"></path>
        </svg>
      </div>

      <div className="ho-footer-container">
        <div className="ho-footer-grid">
          
          {/* COLUMN 1: BRANDING */}
          <div className="ho-footer-col ho-col-brand">
            <div className="ho-footer-logo">
              <span className="ho-logo-main">HO IT</span>
              <span className="ho-logo-sub">Solutions</span>
            </div>
            <p className="ho-brand-desc">
              Transforming spaces into intelligent environments with world-class Networking, 
              CCTV Surveillance, and Smart Automation solutions.
            </p>
            <div className="ho-social-links">
              <a href="https://wa.me/9636570297" className="ho-social-item ho-fb"><FaLinkedinIn /></a>
              <a href="https://wa.me/9636570297" className="ho-social-item ho-wa"><FaWhatsapp /></a>
              <a href="https://wa.me/9636570297" className="ho-social-item ho-ig"><FaInstagram /></a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="ho-footer-col">
            <h4 className="ho-footer-title">Quick Links</h4>
            <ul className="ho-footer-list">
              <li><a href="/home"><FaChevronRight className="ho-list-icon" /> Home</a></li>
              <li><a href="/about"><FaChevronRight className="ho-list-icon" /> About Us</a></li>
              <li><a href="https://wa.me/9636570297ho-services"><FaChevronRight className="ho-list-icon" /> Our Services</a></li>
              <li><a href="/contact"><FaChevronRight className="ho-list-icon" /> Contact Page</a></li>
            </ul>
          </div>

          {/* COLUMN 3: SERVICES */}
          <div className="ho-footer-col">
            <h4 className="ho-footer-title">Expertise</h4>
            <ul className="ho-footer-list">
              <li><a href="https://wa.me/9636570297"><FaChevronRight className="ho-list-icon" /> CCTV Security</a></li>
              <li><a href="https://wa.me/9636570297"><FaChevronRight className="ho-list-icon" /> IT Networking</a></li>
              <li><a href="https://wa.me/9636570297"><FaChevronRight className="ho-list-icon" /> Biometrics</a></li>
              <li><a href="https://wa.me/9636570297"><FaChevronRight className="ho-list-icon" /> Fire Alarms</a></li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFO */}
          <div className="ho-footer-col ho-col-contact">
            <h4 className="ho-footer-title">Official Contact</h4>
            <div className="ho-contact-info">
              <div className="ho-contact-item">
                <FaMapMarkerAlt className="ho-contact-icon" />
                <span>267 Anand Vihar Vijaypura Road Jaipur, Rajasthan</span>
              </div>
              <div className="ho-contact-item">
                <FaPhoneAlt className="ho-contact-icon" />
                <div className="ho-phones">
                  <a href="tel:9636570297">96365 70297</a>
                  <a href="tel:9667600683">96676 00683</a>
                </div>
              </div>
              <div className="ho-contact-item">
                <FaEnvelope className="ho-contact-icon" />
                <div className="ho-emails">
                  <a href="mailto:info@hoitsolutions.com">info@hoitsolutions.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- FOOTER BOTTOM BAR --- */}
        <div className="ho-footer-bottom">
          <div className="ho-bottom-content">
            <p className="ho-copyright">
              © 2024 <span className="ho-highlight">HO IT Solutions</span>. Crafted by <span className="ho-director">Hariom Jangid</span>
            </p>
            <div className="ho-gst-pill">
              <FaShieldAlt /> GSTIN: 08BSHPJ2482D1ZT
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
