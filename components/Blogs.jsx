"use client";

import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button, Spinner } from "react-bootstrap";
import Link from "next/link";
// import "./Blogs.css";


const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch blogs from API
    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            // const response = await fetch(`http://127.0.0.1:8000/api/blogs/latest?limit=4`);
            const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/blogs/latest?limit=4`;
            const response = await fetch(apiUrl);
            const result = await response.json();

            if (result.success) {
                setBlogs(result.data);
            } else {
                setError("Failed to load blogs");
            }
        } catch (err) {
            console.error("Error fetching blogs:", err);
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    // Helper function to get image URL
    const getImageUrl = (imagePath) => {
        if (!imagePath) {
            return "/placeholder-blog.jpg";
        }

        if (imagePath.startsWith("http")) {
            return imagePath;
        }

        return `${process.env.NEXT_PUBLIC_IMAGE_URL}/${imagePath}`;
    };

    // Strip HTML tags for description
    const stripHtml = (html) => {
        if (!html) return "";
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    if (loading) {
        return (
            <section className="blog-section pt-5">
                <div className="container-xxl text-center py-5">
                    <Spinner animation="border" variant="primary" />
                    <p className="mt-3">Loading blogs...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="blog-section pt-5">
                <div className="container-xxl text-center py-5">
                    <p className="text-danger">{error}</p>
                </div>
            </section>
        );
    }

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
                        {blogs.map((blog) => (
                            <Col lg={3} md={6} key={blog.id}>
                                <Card className="blog-card border-0 h-100">
                                    {/* Image */}
                                    <div className="blog-img-wrapper">
                                        <Card.Img
                                            variant="top"
                                            src={getImageUrl(blog.image)}
                                            alt={blog.title}
                                            className="blog-img"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "/placeholder-blog.jpg";
                                            }
                                            }
                                        />
                                    </div>

                                    {/* Content */}
                                    <Card.Body className="blog-content">
                                        <span className="blog-tag">
                                            {blog.category || "Legal Update"}
                                        </span>

                                        <Card.Title>{blog.title}</Card.Title>

                                        <Card.Text>
                                            {stripHtml(blog.short_description).substring(0, 100)}...
                                        </Card.Text>

                                        <Link href={`/blogs/${blog.slug}`} className="read-btn p-0" style={{ textDecoration: 'none' }}>
                                            Learn More <span>›</span>
                                        </Link>
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