"use client";
import React from "react";
import "./Steps.css";

const steps = [
    {
        title: "Request a Quote",
        desc: "Fill out our consultation form. Our specialists will provide personalized advice for your legal needs.",
        icon: "📝",
    },
    {
        title: "Document Submission",
        desc: "Submit the necessary documents through our secure portal for swift and accurate legal processing.",
        icon: "📂",
    },
    {
        title: "Payment Processing",
        desc: "Experience seamless and secure payments through our reliable gateway for hassle-free transactions.",
        icon: "💳",
    },
    {
        title: "Receive your Work",
        desc: "Our team ensures timely completion and delivers legal documents as per deadlines.",
        icon: "📦",
    },
];

export default function Steps() {
    return (
        <section className="itr-section">
            <div className="container">

            <div className="itr-header">
                <div className="row">
                    <div className="col-md-10">
                        <span className="badge">How it works</span>

                        <h1>
                            4 Simple Steps to <span>File</span>
                        </h1>
                        <p style={{ color: "black" }}>Seeking legal help is a breeze with VakilKaro. Just a few clicks stand between you and expert guidance. Your solution is just a click away!</p>
                    </div>
                    <div className="col-md-2 text-end">

                        <button className="file-btn">File Now</button>
                    </div>
                </div>
                

                         <div className="steps-container">

                {steps.map((step, index) => (
                    <div key={index} className="step-card">

                        {/* LINE */}
                        {index !== 0 && <div className="line"></div>}

                        {/* ICON + DOT */}
                        <div className="icon-wrapper">
                            <div className="icon">{step.icon}</div>
                            <div className="dot"></div>
                        </div>

                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                    </div>
                ))}
            </div>
            </div>

   
            
            </div>
        </section>
    );
}