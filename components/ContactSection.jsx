// JourneyMap.jsx
"use client";

import React from "react";
import "./ContactSection.css";
import Image from "next/image";

const timeline = [
  {
    year: "Oct 2017",
    text: "We Started Our Operations from Gohana, Haryana on 17th Oct 2017 & worked on a pilot test for early user feedback",
    color: "#f5c542",

  },
  {
    year: "Dec 2018",
    text: "Opened 2nd Office at Civil Lines, Jaipur, Rajasthan, & also formed a private limited company & finalized the name Vakilkaro.com",
    color: "#f5c542",
  },
  {
    year: "March 2021",
    text: "Achieved a milestone of Rs. 1 crore revenue evidencing good management and timely services to customers.",
    color: "#f5c542",
  },
  {
    year: "March 2023",
    text: "Completed 8,000 plus subscribers on YouTube proving our strong online presence with doubled revenue.",
    color: "#f5c542",
  },
  {
    year: "March 2024",
    text: "Completed 8,000 plus subscribers on YouTube proving our strong online presence with doubled revenue.",
    color: "#f5c542",
  },
  {
    year: "March 2025",
    text: "Completed 8,000 plus subscribers on YouTube proving our strong online presence with doubled revenue.",
    color: "#f5c542",
  },
  {
    year: "March 2026",
    text: "Completed 8,000 plus subscribers on YouTube proving our strong online presence with doubled revenue.",
    color: "#f5c542",
  },
];

const JourneyMap = () => {
  return (
    <section className="journey-section">

      {/* TOP CIRCLE */}
      <div className="top-circle">
        <div className="top-inner">
          <Image
            src="/logo.jpeg"
            alt="Vakilkaro Logo"
            width={120}
            height={120}
            className="top-logo-img"
            priority
          />
        </div>
      </div>

      {/* SVG LINES */}
      {/* SVG LINES */}
      <svg
        className="timeline-svg"
        viewBox="0 0 1600 320"
        preserveAspectRatio="none"
      >

        {/* LEFT SIDE */}

        {/* 1 */}
        <path d="M800 20 L800 60 L120 60 L120 120" />

        {/* 2 */}
        <path d="M800 20 L800 70 L340 70 L340 130" />

        {/* 3 */}
        <path d="M800 20 L800 80 L560 80 L560 135" />

        {/* CENTER */}
        <path d="M800 20 L800 150" />

        {/* RIGHT SIDE */}

        {/* 5 */}
        <path d="M800 20 L800 80 L1040 80 L1040 135" />

        {/* 6 */}
        <path d="M800 20 L800 70 L1260 70 L1260 130" />

        {/* 7 */}
        <path d="M800 20 L800 60 L1480 60 L1480 120" />

      </svg>

      {/* TIMELINE */}
      <div className="timeline-row">
        {timeline.map((item, index) => (
          <div className="timeline-item" key={index}>

            <div
              className="circle"
              style={{ background: item.color }}
            >
              <div className="circle-inner">
                <h3>{item.year}</h3>
              </div>
            </div>

            <div
              className="dot-line"
              style={{ background: item.color }}
            >
              <span></span>
            </div>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JourneyMap;