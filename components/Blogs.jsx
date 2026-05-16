"use client";

import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
// import "./Blogs.css";

const blogs = [
    {
        img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
        title: "Lorem Ipsum Is Not Simply Random",
        desc: "Lorem Ipsum is not simply random text. It has roots in classical literature from 45 BC."
    },
    {
        img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
        title: "Lorem Ipsum Is Not Simply Random",
        desc: "Lorem Ipsum is not simply random text. It has roots in classical literature from 45 BC."
    },
    {
        img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
        title: "Lorem Ipsum Is Not Simply Random",
        desc: "Lorem Ipsum is not simply random text. It has roots in classical literature from 45 BC."
    },
    {
        img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        title: "Lorem Ipsum Is Not Simply Random",
        desc: "Lorem Ipsum is not simply random text. It has roots in classical literature from 45 BC."
    }
];

const BlogSection = () => {
    return (
        <section className="blog-section pt-5">

            <div className="container-xxl">

                <div className="blog-wrapper">

                    {/* Heading */}
                    <div className="blog-heading mb-5">
                        <h2>
                            Stay Informed, <span>Stay Compliant</span>
                        </h2>

                        <p>
                            Your definitive and comprehensive resource for decoding the
                            complex web of laws, regulations, and strategic policies that
                            directly influence the sustainable growth of your business and
                            the lasting impact of your social mission.
                        </p>
                    </div>

                    {/* Blog Cards */}
                    <Row className="g-4">
                        {blogs.map((item, i) => (
                            <Col lg={3} md={6} key={i}>
                                <Card className="blog-card border-0 h-100">

                                    {/* Image */}
                                    <div className="blog-img-wrapper">
                                        <Card.Img
                                            variant="top"
                                            src={`${item.img}?auto=format&fit=crop&w=800&q=80`}
                                            className="blog-img"
                                        />
                                    </div>

                                    {/* Content */}
                                    <Card.Body className="blog-content">
                                        <span className="blog-tag">
                                            Lorem Ipsum is not simply random
                                        </span>

                                        <Card.Title>{item.title}</Card.Title>

                                        <Card.Text>{item.desc}</Card.Text>

                                        <Button variant="link" className="read-btn p-0">
                                            Learn More <span>›</span>
                                        </Button>
                                    </Card.Body>

                                </Card>
                            </Col>
                        ))}
                    </Row>

                </div>
            </div>
        </section>
    );
};

export default BlogSection;