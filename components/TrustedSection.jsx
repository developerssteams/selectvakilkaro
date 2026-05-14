"use client";
import React from "react";
// import "./TrustedSection.css";

const TrustedSection = () => {
    const brands = [
        "coda",
        "inter",
        "ATLASSIAN",
        "ClickTravel",
        "Notion",
        "etoro",
        "H&R BLOCK",
        "conl",
    ];

    return (
        <section className="trusted-section">
            <div className="container-fluid">
                <div className="trusted-wrapper">

                    {/* TOP AREA */}
                    <div className="row align-items-center gy-4">

                        {/* LEFT TEXT */}
                        <div className="col-lg-6">
                            <h2 className="trusted-title">
                                India's #1 Legal-Tech Platform:
                                <br />
                                on Google — <span>Vakilkaro,</span>
                                <br />
                                <span>
                                    ISO Certified & Google Trusted</span>
                            </h2>
                        </div>

                        {/* RIGHT LOGOS */}
                        <div className="col-lg-6">
                            <div className="trusted-right">

                                {/* GOOGLE */}
                                <div className="google-box">
                                    <h1 className="google-logo">
                                        <span className="blue">G</span>
                                        <span className="red">o</span>
                                        <span className="yellow">o</span>
                                        <span className="blue">g</span>
                                        <span className="green">l</span>
                                        <span className="red">e</span>
                                    </h1>

                                    <div className="review-text">
                                        Reviews ⭐⭐⭐⭐⭐
                                    </div>

                                    <p className="rating-text">
                                        4.9/5 Rating (500+)
                                    </p>
                                </div>

                                {/* ISO */}
                                <div className="iso-box">
                                    <img
                                        src="/iso.png"
                                        alt="ISO"
                                        className="iso-img"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* BOTTOM BRANDS */}
                    <div className="brands-wrapper">

                        <p className="brands-heading">
                            MAKE YOUR BRAND AS THE MOST FAMOUS BRAND
                        </p>

                        <div className="brands-row">
                            {brands.map((brand, index) => (
                                <div className="brand-item" key={index}>
                                    {brand}
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrustedSection;