"use client";

import React from "react";
// import "./Steps.css";

const steps = [
  {
    step: "Step 1",
    title: "Consultation",
    desc: "Fill out our consultation form. Our specialists will provide personalized advice for your legal needs.",
    img: "./Consultation.jpg",
  },
  {
    step: "Step 2",
    title: "Verification",
    desc: "Submit the necessary documents through our secure portal for swift and accurate legal processing.",
    img: "./Verification.jpg",
  },
  {
    step: "Step 3",
    title: "Execution",
    desc: "Experience seamless and secure payments through our reliable gateway for hassle-free transactions.",
    img: "Execution.jpg",
  },
  {
    step: "Step 4",
    title: "Delivery",
    desc: "Our team ensures timely completion and delivers legal documents as per deadlines.",
    img: "Delivery.jpg",
  },
];

export default function Steps() {
  return (
    <section className="work-section pt-5">
      <div className="container-xxl">
        {/* TOP SECTION */}
        <div className="section-wrapper">

          <div className="row align-items-start work-top">

            <div className="col-lg-7 mb-4 mb-lg-0">
              <h2 className="work-heading">
                How Vakilkaro <br /> Works
              </h2>
            </div>

            <div className="col-lg-5">
              <div className="work-content">
                <p>
                  Manage your experience from start to finish, from integrations
                  to registration and from interactive stage elements to
                  post-event data, it’s all here.
                </p>

                <button className="package-btn">
                  View Package
                </button>
              </div>
            </div>

          </div>

          {/* CARDS */}
          <div className="row g-4">

            {steps.map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>

                <div className="work-card">

                  {/* IMAGE */}
                  <div className="work-image">
                    <img src={item.img} alt={item.title} />
                  </div>

                  {/* STEP */}
                  <span className="step-text">{item.step}</span>

                  {/* TITLE */}
                  <div className="title-row">
                    <h3>{item.title}</h3>
                    <span className="arrow">↗</span>
                  </div>

                  {/* DESC */}
                  <p>{item.desc}</p>

                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}