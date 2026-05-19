"use client";

import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import Link from "next/link";
import {
    FaArrowRight,
    FaLocationArrow,
} from "react-icons/fa";
// import "./BlogHeading.css";

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

const BlogHeading = () => {
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

                            <Col md={2} className="text-md-end mt-3 mt-md-0">

                                <Link href="/BlogList" className="blog-btn">
                                    View All Blog <FaArrowRight />
                                </Link>
                            </Col>
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

            {/* NEWS SECTION */}

            <section
                className="news-section py-5"
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
                                {/* <a href="#" className="blog-btn">
                                    View All News <FaArrowRight />
                                </a> */}
                                <Link href="/Author" className="blog-btn">
                                    View All Blog <FaArrowRight />
                                </Link>
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
        </>
    );
};

export default BlogHeading;