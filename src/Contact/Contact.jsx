import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUserTie, 
  FaBuilding, FaPaperPlane, FaBars, FaTimes, 
  FaLinkedin, FaWhatsapp, FaInstagram 
} from "react-icons/fa";
import "./Contact.css";

const App = () => {
  const [hoNavActive, setHoNavActive] = useState(false);
  const [hoMobileOpen, setHoMobileOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
    
    const handleScroll = () => {
      setHoNavActive(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="ho-main-wrapper">
      
    

      {/* --- CONTACT HERO SECTION --- */}
      <section id="ho-contact" className="ho-contact-section">
        <div className="ho-bg-blobs">
          <div className="ho-blob ho-blob-1"></div>
          <div className="ho-blob ho-blob-2"></div>
          <div className="ho-blob ho-blob-3"></div>
        </div>

        <div className="ho-container">
          <div className="ho-contact-header" data-aos="zoom-in">
            <h4 className="ho-sub-tag">Get in Touch</h4>
            <h1 className="ho-main-title">Let's Secure Your <span className="ho-gradient-text">Future Together</span></h1>
            <p className="ho-header-desc">Have a project in mind? Reach out to the experts at HO IT Solutions.</p>
          </div>

          <div className="ho-contact-grid">
            
            {/* LEFT: DIRECT CONNECT CARDS */}
            <div className="ho-info-side">
              
              <div className="ho-info-card ho-card-primary" data-aos="fade-right" data-aos-delay="100">
                <div className="ho-icon-box"><FaUserTie /></div>
                <div className="ho-card-content">
                  <h3>Director Connect</h3>
                  <p className="ho-person-name">Hariom Jangid</p>
                  <a href="tel:9636570297" className="ho-contact-link">+91 96365 70297</a>
                </div>
              </div>

              <div className="ho-info-card ho-card-secondary" data-aos="fade-right" data-aos-delay="200">
                <div className="ho-icon-box"><FaBuilding /></div>
                <div className="ho-card-content">
                  <h3>Office Support</h3>
                  <a href="tel:9667600683" className="ho-contact-link">+91 96676 00683</a>
                </div>
              </div>

              <div className="ho-info-card ho-card-cyan" data-aos="fade-right" data-aos-delay="300">
                <div className="ho-icon-box"><FaEnvelope /></div>
                <div className="ho-card-content">
                  <h3>Official Email</h3>
                  <a href="mailto:info@hoitsolutions.com" className="ho-email-link">info@hoitsolutions.com</a>
                  <a href="mailto:hoitsolutions826@gmail.com" className="ho-email-link">hoitsolutions826@gmail.com</a>
                </div>
              </div>

              <div className="ho-info-card ho-card-dark" data-aos="fade-right" data-aos-delay="400">
                <div className="ho-icon-box"><FaMapMarkerAlt /></div>
                <div className="ho-card-content">
                  <h3>Visit Our Office</h3>
                  <p>267 Anand Vihar Vijaypura Road Jaipur, Rajasthan - 302012</p>
                  <span className="ho-gst-badge">GST: 08BSHPJ2482D1ZT</span>
                </div>
              </div>
            </div>

            {/* RIGHT: INTERACTIVE CONTACT FORM */}
            <div className="ho-form-side" data-aos="fade-left">
              <div className="ho-glass-form-container">
                <h2 className="ho-form-title">Send a Message</h2>
                <form className="ho-actual-form">
                  <div className="ho-form-group">
                    <input type="text" placeholder="Full Name" required className="ho-input" />
                  </div>
                  <div className="ho-form-group">
                    <input type="email" placeholder="Email Address" required className="ho-input" />
                  </div>
                  <div className="ho-form-group">
                    <select className="ho-input ho-select">
                      <option>Select Service</option>
                      <option>CCTV Surveillance</option>
                      <option>Networking Solutions</option>
                      <option>Fire Alarm Systems</option>
                      <option>Biometric Access</option>
                    </select>
                  </div>
                  <div className="ho-form-group">
                    <textarea placeholder="Tell us about your requirements..." rows="5" className="ho-input ho-textarea"></textarea>
                  </div>
                  <button type="submit" className="ho-btn-submit">
                    Send Message <FaPaperPlane />
                  </button>
                </form>

                <div className="ho-social-strip">
                  <p>Follow Us:</p>
                  <div className="ho-social-icons">
                    <a href="#" className="ho-s-icon"><FaLinkedin /></a>
                    <a href="#" className="ho-s-icon"><FaWhatsapp /></a>
                    <a href="#" className="ho-s-icon"><FaInstagram /></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="ho-map-section" data-aos="fade-up">
        <div className="ho-map-overlay">
          <h3>Location: Rajasthan, Code: 08</h3>
        </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.87654321!2d75.8123456!3d26.9123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjQiTiA3NcKwNDgnNDQuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy"
          className="ho-google-map"
        ></iframe>
      </section>

    </div>
  );
};

export default App;