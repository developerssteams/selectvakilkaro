"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Navbar.css";

function Navbar() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  const handleSearch = (value) => {
    console.log("Searching for:", value);
  };

  return (
    <section className="header-section">
      <div className="container">
        <div className="row justify-content-center text-center pt-5">
          <div className="col-md-7" data-aos="fade-up">

            {/* Rating Bar */}
            <div className="rating-bar mb-3" data-aos="fade-down">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="google" className="google-icon" />

              <div className="rating-users">
                <img src="https://i.pravatar.cc/40?img=1" alt="user" />
                <img src="https://i.pravatar.cc/40?img=2" alt="user" />
                <img src="https://i.pravatar.cc/40?img=3" alt="user" />
                <img src="https://i.pravatar.cc/40?img=4" alt="user" />
              </div>

              <div className="rating-text">
                <span className="stars">★★★★★</span>
                <span className="rating-value">4.5/5</span>
                <span className="reviews">(20k+ Reviews)</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="hero-title">
              Legal Mein Kuch Bhi karo To <br />
              {/* <span style={{ color: '#efbf04' }}>Vakilkaro</span> */}
              <span style={{ color: '#efbf04' }}>Vakilkaro</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Business Registration, Trademark, Taxation, Legal Compliance & Legal Services in few clicks.
            </p>

            {/* Search Box */}
            <div className="search-wrapper">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search services, registration..."
                  className="search-field"
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <span className="search-icon">🔍</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="hero-buttons my-5">
              <button className="hero-btn primary">View Services</button>
              <button className="hero-btn secondary">Hire Experts</button>
            </div>


          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {/* Stats Bar */}
            <div className="hero-stats-bar mb-5">
              <div className="stats-left">
                <span className="stats-icon">✓</span>
                <span className="stats-title">we have delivered some extraordinary results.</span>
              </div>

              <div className="stats-pills">
                <div className="pill"><span className="highlight">850+</span> Projects Delivered</div>
                <div className="pill"><span className="highlight">88%</span> Client Retention</div>
                <div className="pill"><span className="highlight">150+</span> Expert Team</div>
                <div className="pill"><span className="highlight">15+</span> Years Experience</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;