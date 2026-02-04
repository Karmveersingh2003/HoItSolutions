import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaCheckCircle, 
  FaRocket, 
  FaQuoteLeft, 

  FaLinkedin,
  FaShieldAlt,
  FaCogs,
 
  FaUsers
} from "react-icons/fa";
import "./About.css";
import ho from './it.jpeg'
import it from './ho.jpeg'
import CompanyBrief from "../CompanyBrief/CompanyBrief";
import hariom from './hariom.png'
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100 });
  }, []);

  return (
    <section className="about-advanced-wrapper">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="about-bg-pattern"></div>
      <div className="floating-circle c-1"></div>
      <div className="floating-circle c-2"></div>

      <div className="about-container">
        
        {/* --- PART 1: TOP SPLIT (KEPT AS REQUESTED) --- */}
        <div className="about-split">
          <div className="about-text-col" data-aos="fade-right">
            <div className="badge-pill">WHO WE ARE</div>
            <h2 className="about-heading">
              Engineering the <br />
              <span className="text-gradient-scifi">Future of Security</span>
            </h2>
            <p className="about-lead">
              HO IT Solutions isn't just a vendor; we are the architects of your digital safety. 
              We fuse cutting-edge <strong>AI Surveillance</strong> with <strong>Enterprise Networking</strong>.
            </p>
            <div className="checklist-grid">
              <div className="check-item">
                <FaCheckCircle className="check-icon" />
                <div><h4>Certified Experts</h4><small>Cisco & MS Certified</small></div>
              </div>
              <div className="check-item">
                <FaRocket className="check-icon" />
                <div><h4>Rapid Deployment</h4><small>48hr Turnaround</small></div>
              </div>
            </div>
          </div>
          <div className="about-visual-col" data-aos="fade-left">
            <div className="image-composition">
              <img src={it} alt="Tech" className="img-main" />
              <img src={ho} alt="Engineer" className="img-accent" />
              <div className="exp-badge-floating">
                <span className="years">10+</span>
                <span className="label" style={{color:'white'}}>Years of<br/>Innovation</span>
              </div>
            </div>
          </div>
        </div>
 <CompanyBrief/>
        {/* --- PART 2: DIRECTOR'S MESSAGE (NEW & STUNNING) --- */}
        <div className="director-section">
          <div className="director-card" data-aos="zoom-in-up">
            <div className="director-img-wrapper">
              <img 
                src={hariom}
                alt="Director" 
                className="director-photo" 
              />
              <div className="img-border-effect"></div>
            </div>
            
            <div className="director-content">
              <FaQuoteLeft className="quote-icon" />
              <h3 className="vision-title">A Message from Leader</h3>
              <h2 className="director-quote">
                "We don't just build infrastructure; we build <span className="highlight-text">Trust</span>. 
                In a connected world, your security is the foundation of your growth."
              </h2>
              <p className="director-body">
                At HO IT Solutions, our mission has always been clear: simplify complexity. 
                Whether it's a massive corporate network or a secure home automation system, 
                we bring the same level of passion and precision to every wire we lay.
              </p>
              
              <div className="director-footer">
                <div className="signature-block">
                  <span className="signature-font">Mr. Hariom Jangid</span>
                  <span className="designation">Founder & CEO</span>
                </div>
                <div className="social-connect">
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- PART 3: 3D HOLOGRAPHIC PILLARS (REPLACED MIDDLE) --- */}
        <div className="pillars-section">
          <div className="section-header-center" data-aos="fade-down">
            <span className="sub-tag">Our DNA</span>
            <h2>Why We Lead</h2>
          </div>
          
          <div className="pillars-grid">
            {/* Card 1 */}
            <div className="pillar-card" data-aos="flip-left">
              <div className="pillar-inner">
                <div className="pillar-front">
                  <FaShieldAlt className="p-icon" />
                  <h3>Iron-Clad Security</h3>
                </div>
                <div className="pillar-back">
                  <p>We use military-grade encryption and AI analytics to ensure your premises are impenetrable.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="pillar-card" data-aos="flip-left" data-aos-delay="100">
              <div className="pillar-inner">
                <div className="pillar-front">
                  <FaCogs className="p-icon" />
                  <h3>Smart Automation</h3>
                </div>
                <div className="pillar-back">
                  <p>Systems that think for themselves. Automated alerts, self-healing networks, and smart controls.</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="pillar-card" data-aos="flip-left" data-aos-delay="200">
              <div className="pillar-inner">
                <div className="pillar-front">
                  <FaUsers className="p-icon" />
                  <h3>Client Obsession</h3>
                </div>
                <div className="pillar-back">
                  <p>24/7 dedicated support teams. We don't just install; we maintain relationships.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- PART 4: LIVE DASHBOARD STATS (REPLACED BOTTOM) --- */}
        <div className="dashboard-stats" data-aos="fade-up">
          <div className="dashboard-overlay"></div>
          <div className="stat-unit">
            <div className="counter-wrapper">
              <span className="counter">500</span><span className="plus">+</span>
            </div>
            <span className="label">Active Projects</span>
            <div className="loading-bar"><div className="fill w-90"></div></div>
          </div>

          <div className="stat-unit">
            <div className="counter-wrapper">
              <span className="counter">99.9</span><span className="plus">%</span>
            </div>
            <span className="label">Uptime Guarantee</span>
            <div className="loading-bar"><div className="fill w-100"></div></div>
          </div>

          <div className="stat-unit">
            <div className="counter-wrapper">
              <span className="counter">12</span><span className="plus">K</span>
            </div>
            <span className="label">Sensors Deployed</span>
            <div className="loading-bar"><div className="fill w-80"></div></div>
          </div>

          <div className="stat-unit">
            <div className="counter-wrapper">
              <span className="counter">24</span><span className="plus">/7</span>
            </div>
            <span className="label">Support Team</span>
            <div className="loading-bar"><div className="fill w-100"></div></div>
          </div>
        </div>

      </div>
     
    </section>
  );
};

export default About;
