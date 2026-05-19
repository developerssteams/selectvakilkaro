"use client";

import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Link from "next/link";
import {
    FaArrowRight,
    FaLocationArrow,
} from "react-icons/fa";
// import "./BlogHeading.css";


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
const Authors = () => {
    return (
        <>
            <section className="header-section-padding blog-posts pt-5">
                <section
                    className="news-section"
                >
                    <Container fluid="xxl">
                        <div className="section-wrapper ">

                            {/* Heading */}
                            <Row className="align-items-center  mb-4">
                                <Col md={6}>
                                    <h6 className="text-primary fw-semibold">
                                        Welcome to Our News Hub
                                    </h6>

                                    <h2 className="fw-bold">
                                        Discover the World of Headlines
                                    </h2>
                                </Col>

                                <Col md={6} className="text-md-end mt-3 mt-md-0">
                                    <a href="#" className="blog-btn">
                                        View All News <FaArrowRight />
                                    </a>
                                </Col>
                            </Row>

                            {/* TABS */}
                            <Tab.Container defaultActiveKey="all">
                                <Nav
                                    variant="tabs"
                                    className=" pt-4 border-0 gap-2"
                                >
                                    <Nav.Item>
                                        <Nav.Link eventKey="all">All</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="tech">Tech</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="politics">
                                            Politics
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="health">Health</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="environment">
                                            Environment
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="sports">Sports</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Tab.Content>
                                    <Tab.Pane eventKey="all">
                                        {newsData.map((item, index) => (
                                            <div
                                                className="list-group-custom px-5 py-4"
                                                key={index}
                                            >
                                                <Row className="align-items-center">
                                                    {/* USER */}
                                                    <Col md={3}>
                                                        <div className="news-user-info">
                                                            <Row className="align-items-center">
                                                                <Col xs={3}>
                                                                    <img
                                                                        src="https://randomuser.me/api/portraits/men/32.jpg"
                                                                        className="rounded-circle img-fluid"
                                                                        alt="Author"
                                                                    />
                                                                </Col>

                                                                <Col xs={9}>
                                                                    <h5 className="mb-0">
                                                                        {item.author}
                                                                    </h5>

                                                                    <p className="mb-0 text-muted">
                                                                        {item.category}
                                                                    </p>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Col>

                                                    {/* CONTENT */}
                                                    <Col md={7} className="mt-4 mt-md-0">
                                                        <div className="news-tab-content">
                                                            <small>{item.date}</small>

                                                            <h3 className="fw-bold mt-2">
                                                                {item.title}
                                                            </h3>

                                                            <p className="text-muted">
                                                                {item.desc}
                                                            </p>

                                                            <span>
                                                                <FaLocationArrow /> 201
                                                            </span>
                                                        </div>
                                                    </Col>

                                                    {/* BUTTON */}
                                                    <Col
                                                        md={2}
                                                        className="text-md-end mt-4 mt-md-0"
                                                    >
                                                        <a href="#" className="blog-btn">
                                                            Read More <FaArrowRight />
                                                        </a>
                                                    </Col>
                                                </Row>
                                            </div>
                                        ))}
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="tech">
                                        <p className="px-5 py-4 text-muted">
                                            Tech tab content goes here...
                                        </p>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="politics">
                                        <p className="px-5 py-4 text-muted">
                                            Politics content...
                                        </p>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="health">
                                        <p className="px-5 py-4 text-muted">
                                            Health content...
                                        </p>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="environment">
                                        <p className="px-5 py-4 text-muted">
                                            Environment content...
                                        </p>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="sports">
                                        <p className="px-5 py-4 text-muted">
                                            Sports content...
                                        </p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>

                        </div>
                    </Container>
                </section>
            </section>
        </>
    );
};
export default Authors;