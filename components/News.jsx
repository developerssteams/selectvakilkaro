"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "./News.css";

const data = [
    {
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        date: "30 Nov 2021",
        title: "New technology awarness.",
        desc: "Delightful remarkably mr on announcing themselves entreaties favourable.",
    },
    {
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        date: "30 Nov 2021",
        title: "New technology awarness.",
        desc: "Delightful remarkably mr on announcing themselves entreaties favourable.",
    },
    {
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        date: "30 Nov 2021",
        title: "New technology awarness.",
        desc: "Delightful remarkably mr on announcing themselves entreaties favourable.",
    },
    {
        img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        date: "30 Nov 2021",
        title: "New technology awarness.",
        desc: "Delightful remarkably mr on announcing themselves entreaties favourable.",

    }
];

const NewsSection = () => {
    return (
        <section className="news-section pt-5">
            <div className="container-xxl">

                <div className="section-wrapper">
                    {/* HEADING */}
                    <div className="news-heading text-center">

                        <h2>
                            VakilKaro In News
                        </h2>

                        <p className="">
                            See how VakilKaro is making headlines and redefining the legal-tech landscape through
                            innovation, transparency, and excellence. Catch up on our latest features, press releases
                        </p>

                    </div>

                    {/* CARDS */}
                    <Row className="g-4 justify-content-center">

                        {data.map((item, i) => (

                            <Col lg={3} md={6} key={i}>

                                <div className="news-card">

                                    {/* IMAGE */}
                                    <div className="news-img-wrapper">

                                        <img
                                            src={`${item.img}?auto=format&fit=crop&w=900&q=80`}
                                            alt="news"
                                        />

                                        {/* DATE */}
                                        <div className="news-date">
                                            30 <br />
                                            Nov <br />
                                            2021
                                        </div>




                                    </div>

                                    {/* CONTENT */}
                                    <div className="news-content">

                                        <h3>{item.title}</h3>

                                        <p>{item.desc}</p>

                                        <span className="news-read">
                                            Read More
                                        </span>

                                    </div>

                                </div>

                            </Col>

                        ))}

                    </Row>

                </div>
            </div>
        </section>
    );
};

export default NewsSection;