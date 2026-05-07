import React from "react";
import "./ContactSection.css";

const JourneyMap = () => {
  const milestones = [
    {
      year: "Oct 2017",
      title: "We Started",
      description: "Operations from Gohana, Haryana",
      location: "Gohana",
      revenue: "₹0",
      left: "2%",
      bottom: "8%"
    },
    {
      year: "Dec 2018",
      title: "First Expansion",
      description: "2nd Office at Civil Lines",
      location: "Jaipur",
      revenue: "₹25L",
      left: "20%",
      bottom: "18%"
    },
    {
      year: "March 2021",
      title: "Revenue Milestone",
      description: "Good management & timely service",
      location: "Jaipur",
      revenue: "₹1 Cr",
      left: "38%",
      bottom: "30%"
    },
    {
      year: "March 2023",
      title: "Bigger Office",
      description: "Spacious office at Murlipur",
      location: "Murlipur, Jaipur",
      revenue: "₹2.5 Cr",
      left: "56%",
      bottom: "42%"
    },
    {
      year: "March 2024",
      title: "Digital Stronghold",
      description: "8,000+ YouTube subscribers",
      location: "Multiple Locations",
      revenue: "₹5 Cr+",
      left: "74%",
      bottom: "54%"
    },
    {
      year: "March 2026",
      title: "Future Vision",
      description: "Pan-India presence",
      location: "Multiple Cities",
      revenue: "₹20 Cr+",
      left: "90%",
      bottom: "66%"
    }
  ];

  return (
    <section className="journey-section">
      <div className="journey-container">
        <div className="journey-header">
          <h1>
            Our <span className="gold">Journey</span>
          </h1>
          <p className="year-range">2017 — 2026</p>
        </div>

        <div className="timeline-container">
          {/* Base Line */}
          <div className="timeline-base"></div>
          <div className="timeline-dash"></div>

          {/* Milestones */}
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="milestone"
              style={{ left: item.left, bottom: item.bottom }}
            >
              <div className="dot"></div>
              <div className="card">
                <div className="year">{item.year}</div>
                <div className="title">{item.title}</div>
                <div className="location">📍 {item.location}</div>
                <div className="revenue">{item.revenue}</div>
              </div>
            </div>
          ))}

          {/* Walking Character */}
          <div className="walking-man">
            <div className="man">
              <div className="man-head"></div>
              <div className="man-body"></div>
              <div className="man-legs">
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="talk">🚀 Growing...</div>
          </div>

          {/* Arrow */}
          <div className="growth-arrow">📈 GROWTH →</div>
        </div>

        {/* Stats */}
        <div className="stats-row">
          <div className="stat">
            <span className="stat-num">8,000+</span>
            <span className="stat-text">YouTube Subs</span>
          </div>
          <div className="stat">
            <span className="stat-num">₹5 Cr+</span>
            <span className="stat-text">Revenue</span>
          </div>
          <div className="stat">
            <span className="stat-num">3+</span>
            <span className="stat-text">Offices</span>
          </div>
          <div className="stat">
            <span className="stat-num">20K+</span>
            <span className="stat-text">Happy Clients</span>
          </div>
        </div>

        {/* Button */}
        <div className="btn-wrap">
          <button className="journey-btn">Start Your Journey</button>
        </div>
      </div>
    </section>
  );
};

export default JourneyMap;