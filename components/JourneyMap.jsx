"use client";
import React from "react";
import { Container } from "react-bootstrap";
import Image from "next/image";
import "./JourneyMap.css";

const timeline = [
  {
    year: "Oct 2017",
    text: "We Started Our Operations from Gohana, Haryana on 17th Oct 2017 & worked on a pilot test for early user feedback",
  },
  {
    year: "Dec 2018",
    text: "Opened 2nd Office at Civil Lines, Jaipur, Rajasthan & finalized the name Vakilkaro.com",
  },
  {
    year: "March 2021",
    text: "Achieved a milestone of Rs. 1 crore revenue with timely customer services.",
  },
  {
    year: "March 2023",
    text: "Completed 8,000+ subscribers on YouTube proving strong online presence.",
  },
  // {
  //   year: "March 2024",
  //   text: "Expanded services and improved customer experience with strong growth.",
  // },
  {
    year: "March 2025",
    text: "Reached new business milestones with nationwide legal support services.",
  },
  {
    year: "March 2026",
    text: "Building India's most trusted legal-tech ecosystem with innovation.",
  },
];

const JourneyMap = () => {
  return (
    <section className="journey-section">

      <div className="container ">
        <div className="jouney-inner">

          {/* HEADING */}
          <div className="journey-heading">
            <h1>
              OUR <span>STORY</span>
            </h1>
          </div>

          {/* TOP LOGO */}
          <div className="top-circle-wrapper">
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
          </div>

          {/* SVG LINES */}
          <div className="svg-wrapper d-none d-lg-block">

            <svg
              className="timeline-svg"
              viewBox="0 0 1600 220"
              preserveAspectRatio="none"
            >

              {/* CENTER */}
              <path d="M800 0 L800 50" />

              {/* LEFT */}
              <path d="M800 50 L120 50 L120 140" />
              <path d="M800 50 L350 50 L350 140" />
              <path d="M800 50 L580 50 L580 140" />

              {/* RIGHT */}
              <path d="M800 50 L1020 50 L1020 140" />
              <path d="M800 50 L1250 50 L1250 140" />
              <path d="M800 50 L1480 50 L1480 140" />

            </svg>

          </div>

          {/* TIMELINE */}
          <div className="timeline-wrapper">

            <div className="timeline-row">

              {timeline.map((item, index) => (

                <div
                  className="timeline-col"
                  key={index}
                >

                  <div
                    className="timeline-item"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >

                    {/* CIRCLE */}
                    <div className="circle">

                      <div className="circle-inner">
                        <h3>{item.year}</h3>
                      </div>

                    </div>

                    {/* LINE */}
                    <div className="dot-line">
                      <span></span>
                    </div>

                    {/* TEXT */}
                    <p>{item.text}</p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default JourneyMap;