import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUserTie, 
  FaBuilding, FaPaperPlane, FaBars, FaTimes, 
  FaLinkedin, FaWhatsapp, FaInstagram 
} from "react-icons/fa";
export default function Navbar() {
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
    <div>  {/* --- MODERN CENTERED CURVED NAVBAR --- */}
      <nav className={`ho-navbar-container ${hoNavActive ? "ho-nav-scrolled" : ""}`}>
        <div className="ho-navbar-inner">
          <div className="ho-nav-logo">
            <span className="ho-logo-text">HO IT</span>
            <span className="ho-logo-sub">Solutions</span>
          </div>

          <div className={`ho-nav-links ${hoMobileOpen ? "ho-mobile-active" : ""}`}>
            <a href="/" className="ho-link" onClick={() => setHoMobileOpen(false)}>Home</a>
            <a href="/about" className="ho-link" onClick={() => setHoMobileOpen(false)}>About</a>
           
            <a href="/contact" className="ho-link ho-active-pill" onClick={() => setHoMobileOpen(false)}>Contact</a>
          </div>

          <div className="ho-nav-toggle" onClick={() => setHoMobileOpen(!hoMobileOpen)}>
            {hoMobileOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav></div>
  )
}
