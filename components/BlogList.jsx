"use client";

import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import {
    FaArrowRight,
    FaLocationArrow,
} from "react-icons/fa";
// import "./BlogList.css";

const blogList = [
    {
        img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
        title:
            "The Vakilkaro Brief: Bombay High Court’s Landmark Ruling on...",
        category: "Politics",
    },
    {
        img: "https://images.unsplash.com/photo-1495020689067-958852a7765e",
        title:
            "SEBI Proposes Revival of Open Market Buybacks Framework",
        category: "Environment",
    },
    {
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        title:
            "Corporate Governance Rules Get Major Compliance Updates",
        category: "Business",
    },
];

const newsData = [
    {
        author: "John Techson",
        category: "Technology",
        title: "Tech Giants Announce New Product Line",
        desc: "Explore the latest innovations from tech industry leaders, unveiling new products that promise to transform the digital landscape.",
        date: "October 15, 2023",
    },
    {
        author: "Jane Smith",
        category: "Politics",
        title: "Government Introduces New Startup Policy",
        desc: "The latest startup reforms are expected to boost entrepreneurship and attract global investors.",
        date: "October 18, 2023",
    },
    {
        author: "Alex Brown",
        category: "Health",
        title: "Healthcare Sector Sees Major Innovation",
        desc: "Medical technology continues to evolve rapidly with AI-powered healthcare solutions.",
        date: "October 20, 2023",
    },
];

const Listblog = () => {
    return (
        <>
            {/* BLOG POSTS SECTION */}
            <section className="header-section-padding blog-posts pt-5">
                <Container fluid="xxl">
                    <div className="blog-section-title">

                        {/* Heading */}
                        <Row className="align-items-baseline">
                            <Col md={10}>
                                <h1 className="fw-bold mb-3">
                                    Today's Headlines: Stay Informed
                                </h1>

                                <p className="text-muted">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s.
                                </p>
                            </Col>

                            {/* <Col md={2} className="text-md-end mt-3 mt-md-0">
                                <a href="#" className="blog-btn">
                                    View All Blog <FaArrowRight />
                                </a>
                            </Col> */}
                        </Row>

                        {/* Featured Blog */}

                        <Row className="mt-5 align-items-center blog-outer">
                            <Col md={3}>
                                <img
                                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
                                    alt="blog"
                                    className="img-fluid rounded-4"
                                />
                            </Col>

                            <Col md={9}>
                                <div className="blog-post-row">
                                    <h2 className="fw-bold">
                                        SEBI Proposes Revival of Open Market Buybacks With
                                        Stricter Regulatory Framework
                                    </h2>

                                    <p className="mt-3 text-muted">
                                        SEBI's consultation paper suggests bringing back
                                        open market buybacks with stock exchanges, backed by
                                        a new compliance and governance system.
                                    </p>

                                    <ul className="blog-post-info mt-4 list-unstyled d-flex flex-wrap gap-5">
                                        <li>
                                            <span className="fw-semibold d-block">
                                                Category
                                            </span>
                                            <p>Environment</p>
                                        </li>

                                        <li>
                                            <span className="fw-semibold d-block">
                                                Publication Date
                                            </span>
                                            <p>October 10, 2026</p>
                                        </li>

                                        <li>
                                            <span className="fw-semibold d-block">
                                                Author
                                            </span>
                                            <p>Jane Smith</p>
                                        </li>
                                    </ul>

                                    <div className="share-read-more mt-4">
                                        <ul className="list-unstyled d-flex justify-content-between align-items-center">
                                            <li>
                                                <a href="#">
                                                    <FaLocationArrow /> 204
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#" className="blog-btn">
                                                    Read More <FaArrowRight />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        
                    </div>
                </Container>
            </section>

            {/* BLOG LIST */}

            <section className="blog-list py-5">
                <Container fluid="xxl">
                    <Row>
                        {blogList.map((item, index) => (
                            <Col md={4} key={index} className="mb-4">
                                <div className="blog-list-inner h-100">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="img-fluid rounded-4"
                                    />

                                    <h4 className="mt-4 fw-bold">
                                        {item.title}
                                    </h4>

                                    <span className="blog-category">
                                        {item.category}
                                    </span>

                                    <div className="share-read-more mt-4">
                                        <ul className="list-unstyled d-flex justify-content-between align-items-center">
                                            <li>
                                                <a href="#">
                                                    <FaLocationArrow /> 204
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#" className="blog-btn">
                                                    Read More <FaArrowRight />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
              <section className="blog-list py-5">
                <Container fluid="xxl">
                    <Row>
                        {blogList.map((item, index) => (
                            <Col md={4} key={index} className="mb-4">
                                <div className="blog-list-inner h-100">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="img-fluid rounded-4"
                                    />

                                    <h4 className="mt-4 fw-bold">
                                        {item.title}
                                    </h4>

                                    <span className="blog-category">
                                        {item.category}
                                    </span>

                                    <div className="share-read-more mt-4">
                                        <ul className="list-unstyled d-flex justify-content-between align-items-center">
                                            <li>
                                                <a href="#">
                                                    <FaLocationArrow /> 204
                                                </a>
                                            </li>

                                            <li>
                                                <a href="#" className="blog-btn">
                                                    Read More <FaArrowRight />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Listblog;