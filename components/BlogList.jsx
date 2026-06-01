"use client";

import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import {
    FaArrowRight,
    FaLocationArrow,
} from "react-icons/fa";
import Link from "next/link"; // ✅ IMPORT ADD KARO
// import "./BlogList.css";

const blogList = [
    {
        img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
        title: "The Vakilkaro Brief: Bombay High Court’s Landmark Ruling on...",
        category: "Politics",
        slug: "bombay-high-court-landmark-ruling", // ✅ ADD SLUG
    },
    {
        img: "https://images.unsplash.com/photo-1495020689067-958852a7765e",
        title: "SEBI Proposes Revival of Open Market Buybacks Framework",
        category: "Environment",
        slug: "sebi-open-market-buybacks", // ✅ ADD SLUG
    },
    {
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        title: "Corporate Governance Rules Get Major Compliance Updates",
        category: "Business",
        slug: "corporate-governance-rules", // ✅ ADD SLUG
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
                                                {/* ✅ FIXED: Use a proper slug */}
                                                <Link href={`/blogs/sebi-open-market-buybacks`} className="blog-btn">
                                                    Read More <FaArrowRight />
                                                </Link>
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
                                                {/* ✅ FIXED: Dynamic slug from item */}
                                                <Link href={`/blogs/${item.slug}`} className="blog-btn">
                                                    Read More <FaArrowRight />
                                                </Link>
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
                                                {/* ✅ FIXED: Dynamic slug from item */}
                                                <Link href={`/blogs/${item.slug}`} className="blog-btn">
                                                    Read More <FaArrowRight />
                                                </Link>
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