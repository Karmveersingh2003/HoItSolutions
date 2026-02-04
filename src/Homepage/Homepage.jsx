import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from './IMG1.jpeg'
import { 
  FaNetworkWired, 
  FaVideo, 
  FaFire, 
  FaFingerprint, 
  FaPhoneAlt, 
  FaVolumeUp, 
 
  FaCheckCircle,
  FaArrowRight,
 
 
  FaMicrochip,
  FaRocket,
 
  FaShieldAlt,

} from "react-icons/fa";
import Ap from './Ap.jpeg'
import "./Homepage.css";

const services = [
    {
      title: "Advanced Networking",
      desc: "Enterprise-grade switching, routing, and fiber optics for zero-latency connectivity.",
      icon: <FaNetworkWired />,
    },
    {
      title: "AI Surveillance",
      desc: "4K CCTV with facial recognition, night vision, and cloud-based remote monitoring.",
      icon: <FaVideo />,
    },
    {
      title: "Fire Safety",
      desc: "Smart smoke detection and auto-suppression systems to protect assets and life.",
      icon: <FaFire />,
    },
    {
      title: "Biometric Security",
      desc: "Retina, Face ID & Fingerprint access control for secure restricted areas.",
      icon: <FaFingerprint />,
    },
    {
      title: "Smart Intercom",
      desc: "Video door phones and EPBX communication systems for complexes and offices.",
      icon: <FaPhoneAlt />,
    },
    {
      title: "Pro Audio",
      desc: "Acoustic solutions and PA systems designed for clear multi-zone announcements.",
      icon: <FaVolumeUp />,
    },
  ];

const Home = () => {

 const [scrolled, setScrolled] = useState(false);
  // Initialize Animations and Scroll Listener
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Animation happens every time you scroll up/down
      mirror: true,
      offset: 100,
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  // Service Data
  const services = [
    {
      title: "Advanced Networking",
      desc: "Structured cabling, switching, routing, and enterprise-grade Wi-Fi solutions for seamless connectivity.",
      icon: <FaNetworkWired />,
    },
    {
      title: "CCTV Surveillance",
      desc: "High-definition IP cameras and NVR systems to keep your premises secure 24/7 with remote viewing.",
      icon: <FaVideo />,
    },
    {
      title: "Fire Alarm Systems",
      desc: "State-of-the-art smoke detectors and fire suppression systems ensuring total safety compliance.",
      icon: <FaFire />,
    },
    {
      title: "Biometric Access",
      desc: "Fingerprint and face recognition systems for secure attendance and door access control.",
      icon: <FaFingerprint />,
    },
    {
      title: "EPBX / Intercom",
      desc: "Crystal clear internal communication systems for offices and residential complexes.",
      icon: <FaPhoneAlt />,
    },
    {
      title: "Pro Audio Systems",
      desc: "PA systems, conference room audio, and background music solutions for businesses.",
      icon: <FaVolumeUp />,
    },
  ];

  return (
    <div className="app-container">
   
  
      {/* 1. SUPER HERO SECTION */}
      <section className="super-hero">
        <div className="hero-bg-overlay"></div>
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        
        <div className="hero-container">
          <div className="logo-badge" data-aos="fade-down">HO IT SOLUTIONS</div>
          
          <h1 data-aos="zoom-in" data-aos-delay="200">
            Masters of <br />
            <span className="text-gradient-main">Digital Infrastructure</span>
          </h1>
          
          <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
            Networking • CCTV Surveillance • Fire Safety • Biometrics • Automation
          </p>

          <div className="hero-cards-row" data-aos="fade-up" data-aos-delay="600">
            <div className="mini-card">
              <FaNetworkWired className="icon-spin" />
              <span>Hyper Speed</span>
            </div>
            <div className="mini-card">
              <FaShieldAlt className="icon-pulse" />
              <span>Max Security</span>
            </div>
            <div className="mini-card">
              <FaMicrochip className="icon-float" />
              <span>Smart Tech</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INFINITE MARQUEE STRIP */}
      <div className="marquee-section">
        <div className="marquee-content">
          <span>STRUCTURAL CABLING</span> • <span>ENTERPRISE WIFI</span> • 
          <span>IP SURVEILLANCE</span> • <span>ACCESS CONTROL</span> • 
          <span>PUBLIC ADDRESS SYSTEMS</span> • <span>FIRE DETECTION</span> • 
          <span>STRUCTURAL CABLING</span> • <span>ENTERPRISE WIFI</span> • 
        </div>
      </div>
      {/* Hero Section */}
      <header id="home" className="hero-section">
        <div className="hero-content">
          <h2 data-aos="fade-right" data-aos-delay="100">Connect. Secure. Automate.</h2>
          <h1 data-aos="fade-right" data-aos-delay="300">
            Next-Gen <span className="text-gradient">IT Infrastructure</span> Solutions
          </h1>
          <p data-aos="fade-right" data-aos-delay="500">
            From enterprise networking to advanced security surveillance, 
            HO IT Solutions provides the backbone for your business success.
          </p>
          <div className="hero-btns" data-aos="fade-up" data-aos-delay="700">
            <a href="#services" className="btn-primary">Explore Services</a>
            <a href="#contact" className="btn-secondary">Get a Quote</a>
          </div>
        </div>
        <div className="hero-visual" data-aos="zoom-in" data-aos-delay="200">
          <div className="animated-blob"></div>
          <div className="floating-card c1"><FaNetworkWired /> Networking</div>
          <div className="floating-card c2"><FaVideo /> Security</div>
          <div className="floating-card c3"><FaFingerprint /> Access</div>
        </div>
      </header>

      {/* Stats Banner */}
      <section className="stats-section">
        <div className="stat-item" data-aos="flip-up">
          <h3>500+</h3>
          <p>Projects Done</p>
        </div>
        <div className="stat-item" data-aos="flip-up" data-aos-delay="200">
          <h3>100%</h3>
          <p>Client Satisfaction</p>
        </div>
        <div className="stat-item" data-aos="flip-up" data-aos-delay="400">
          <h3>24/7</h3>
          <p>Support Active</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-img" data-aos="fade-right">
          <img src={img1} alt="Tech Setup" />
          <div className="experience-badge" data-aos="zoom-in">
            <span>10+ Years</span>
            <small>Experience</small>
          </div>
        </div>
        <div className="about-text">
          <h4 className="sub-heading" data-aos="fade-up">Who We Are</h4>
          <h2 data-aos="fade-up" data-aos-delay="100">Leading the Way in Technical Solutions</h2>
          <p data-aos="fade-up" data-aos-delay="200">
            HO IT Solutions is a premier provider of integrated technology services. 
            We specialize in creating secure, efficient, and scalable environments for businesses of all sizes.
          </p>
          <ul className="feature-list">
            <li data-aos="fade-left" data-aos-delay="300"><FaCheckCircle /> Certified Professionals</li>
            <li data-aos="fade-left" data-aos-delay="400"><FaCheckCircle /> Latest Technology Stack</li>
            <li data-aos="fade-left" data-aos-delay="500"><FaCheckCircle /> Customized Solutions</li>
          </ul>
          <a href="#contact" className="btn-text" data-aos="fade-up" data-aos-delay="600">
            Learn More <FaArrowRight />
          </a>
        </div>
      </section>

      {/* Services Section */}
     <section className="services-modern">
      <div className="section-head" data-aos="fade-up">
        <h4>HO IT SOLUTIONS</h4>
        <h2>Our Core Ecosystem</h2>
        <p>Integrated solutions for the modern enterprise.</p>
      </div>

      <div className="service-card-grid">
        {services.map((srv, idx) => (
          <div 
            className="glass-card" 
            key={idx} 
            data-aos="zoom-in-up" 
            data-aos-delay={idx * 100}
          >
            <div className="card-blob"></div>
            <div className="icon-wrapper">{srv.icon}</div>
            <h3>{srv.title}</h3>
            <p>{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>

      {/* Why Choose Us / Parallax */}
      <section className="parallax-section">
        <div className="parallax-overlay">
          <h2 data-aos="zoom-in">Ready to Upgrade Your Infrastructure?</h2>
          <p data-aos="fade-up">We deliver quality, speed, and reliability at the best market rates.</p>
          <a href="#contact" className="btn-primary" data-aos="fade-up" data-aos-delay="200">Let's Talk</a>
        </div>
      </section>

     

      <div className="main-container">
    

      {/* 3. FEATURE HIGHLIGHT (ZIG ZAG 1) - NETWORKING */}
      <section className="feature-section">
        <div className="feature-grid">
          <div className="feature-text" data-aos="fade-right">
            <div className="accent-line"></div>
            <h3>Core Connectivity</h3>
            <h2>Enterprise Networking Solutions</h2>
            <p>
              We build the invisible backbone of your business. From intricate structured cabling 
              to deploying high-density Wi-Fi zones, our networking solutions ensure 
              zero downtime and maximum throughput.
            </p>
            <ul className="tech-list">
              <li><FaArrowRight /> Fiber Optic Splicing</li>
              <li><FaArrowRight /> Rack Management</li>
              <li><FaArrowRight /> Routing & Switching</li>
            </ul>
          </div>
          <div className="feature-visual" data-aos="fade-left">
            <div className="visual-card glass-effect">
              <div ><img src={Ap} className="big-icon" alt="" srcset="" /></div>
              <div className="visual-badge">99.9% Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURE HIGHLIGHT (ZIG ZAG 2) - CCTV */}
      <section className="feature-section alt-bg">
        <div className="feature-grid reverse">
          <div className="feature-visual" data-aos="fade-right">
            <div className="visual-card glass-effect security-theme">
              <FaVideo className="big-icon" />
              <div className="visual-badge">AI Detection</div>
            </div>
          </div>
          <div className="feature-text" data-aos="fade-left">
            <div className="accent-line"></div>
            <h3>Intelligent Eyes</h3>
            <h2>Next-Gen CCTV Surveillance</h2>
            <p>
              Security isn't just about recording; it's about intelligence. Our IP Camera 
              systems come with motion detection, night vision, and remote cloud access 
              so you can monitor your premises from anywhere in the world.
            </p>
            <ul className="tech-list">
              <li><FaArrowRight /> 4K IP Cameras</li>
              <li><FaArrowRight /> NVR & Cloud Storage</li>
              <li><FaArrowRight /> Mobile Live View</li>
            </ul>
          </div>
        </div>
      </section>

      

      {/* 6. HOW WE WORK (PROCESS) */}
      <section className="process-section">
        <div className="section-title center" data-aos="fade-down">
          <h2>Our Workflow</h2>
        </div>
        <div className="process-steps">
          <div className="step" data-aos="flip-left">
            <div className="step-number">01</div>
            <h3>Consult</h3>
            <p>We analyze your site and requirements.</p>
          </div>
          <div className="step-line"></div>
          <div className="step" data-aos="flip-left" data-aos-delay="200">
            <div className="step-number">02</div>
            <h3>Design</h3>
            <p>Blueprint creation of wiring and device placement.</p>
          </div>
          <div className="step-line"></div>
          <div className="step" data-aos="flip-left" data-aos-delay="400">
            <div className="step-number">03</div>
            <h3>Deploy</h3>
            <p>Professional installation and configuration.</p>
          </div>
          <div className="step-line"></div>
          <div className="step" data-aos="flip-left" data-aos-delay="600">
            <div className="step-number">04</div>
            <h3>Support</h3>
            <p>24/7 maintenance and troubleshooting.</p>
          </div>
        </div>
      </section>

      {/* 7. BIG NUMBERS */}
      <section className="stats-row">
        <div className="stat-pill" data-aos="fade-up">
          <h3>500+</h3>
          <span>Clients</span>
        </div>
        <div className="stat-pill" data-aos="fade-up" data-aos-delay="100">
          <h3>1200+</h3>
          <span>Cameras Installed</span>
        </div>
        <div className="stat-pill" data-aos="fade-up" data-aos-delay="200">
          <h3>10+</h3>
          <span>Years Active</span>
        </div>
      </section>

      {/* 8. FINAL CTA STRIP */}
      <section className="cta-strip">
        <div className="cta-content" data-aos="zoom-in">
          <FaRocket className="rocket-icon" />
          <h2>Ready to upgrade your infrastructure?</h2>
          <p>HO IT Solutions is ready to deploy.</p>
          <button className="btn-glow">Get Your Quote Now</button>
        </div>
      </section>

    </div>
    </div>
  );
};

export default Home;
