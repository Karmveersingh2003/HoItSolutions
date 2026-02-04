import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import "./CompanyBrief.css";

const CompanyBrief = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 50 });
  }, []);

  return (
    <section className="brief-kinetic-wrapper">
      
      {/* Animated Background Grid */}
      <div className="kinetic-bg"></div>

      {/* Kinetic Text Wall */}
      <div className="kinetic-text-wall">
        <h2 className="kinetic-line line-1" data-aos="fade-left">
          <span className="outline">We</span> <span className="solid">Engineer</span>
        </h2>
        <h2 className="kinetic-line line-2" data-aos="fade-right">
          <span className="solid">Digital</span> <span className="outline">Fortresses</span>
        </h2>
        <h2 className="kinetic-line line-3" data-aos="fade-left">
          <span className="outline">We</span> <span className="solid">Build</span> <span className="outline">Connections</span>
        </h2>
      </div>

      {/* Main Content Card - Appears after the kinetic text */}
      <div className="brief-content-card" data-aos="zoom-in" data-aos-delay="1500">
        <div className="card-shine-effect"></div>
        <div className="card-header">
          <div className="logo-mark">HO</div>
          <h3>HO IT SOLUTIONS</h3>
        </div>
        
        <p className="card-description">
          We are the architects of modern infrastructure. Fusing <strong>AI-driven security</strong> with <strong>hyper-speed networking</strong>, 
          we transform your spaces into intelligent, secure, and seamlessly connected environments.
        </p>

        <button className="card-cta-button">
          Discover Our Process <FaArrowRight className="arrow-icon" />
        </button>
      </div>

    </section>
  );
};

export default CompanyBrief;