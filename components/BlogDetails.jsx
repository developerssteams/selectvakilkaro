"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
    FaArrowRight,
    FaLocationArrow,
    FaEye,
    FaCalendarAlt,
    FaUser,
    FaTag,
    FaShareAlt,
} from "react-icons/fa";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import "./BlogDetails.css";

const BlogDetail = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);

    useEffect(() => {
        if (slug) {
            fetchBlog();
            fetchRelatedBlogs();
        }
    }, [slug]);

    const fetchBlog = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${slug}`);
            const result = await response.json();

            if (result.success) {
                setBlog(result.data);
            } else {
                setError("Blog not found");
            }
        } catch (err) {
            console.error("Error fetching blog:", err);
            setError("Failed to load blog");
        } finally {
            setLoading(false);
        }
    };

    const fetchRelatedBlogs = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/latest?limit=3`);
            const result = await response.json();
            if (result.success) {
                setRelatedBlogs(result.data);
            }
        } catch (err) {
            console.error("Error fetching related blogs:", err);
        }
    };

    const getImageUrl = (imagePath) => {
        if (!imagePath) return "/placeholder-blog.jpg";
        if (imagePath.startsWith("http")) return imagePath;
        return `${process.env.NEXT_PUBLIC_API_URL}/${imagePath}`;
    };

    const formatDate = (dateString) => {
        if (!dateString) return "";
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const stripHtml = (html) => {
        if (!html) return "";
        if (typeof window !== 'undefined') {
            const tmp = document.createElement("DIV");
            tmp.innerHTML = html;
            return tmp.textContent || tmp.innerText || "";
        }
        return html.replace(/<[^>]*>/g, "");
    };

    if (loading) {
        return (
            <Container className="text-center py-5">
                <Spinner animation="border" variant="primary" />
                <p className="mt-3">Loading blog...</p>
            </Container>
        );
    }

    if (error || !blog) {
        return (
            <Container className="text-center py-5">
                <h2 className="text-danger">{error || "Blog not found"}</h2>
                <Link href="/" className="btn btn-primary mt-3">
                    Back to Home
                </Link>
            </Container>
        );
    }

    return (
        <>
            {/* BLOG DETAIL */}
            <section className="blog-detail-outer">
                <div className="container-xxl">
                    <div className="section-wrapper p-0" >
                        <div className="row p-3">

                            {/* LEFT SIDEBAR - AUTHOR CARD */}
                            <div className="col-md-3">
                                <div className="blog-author-card">
                                    <img
                                        src={getImageUrl(blog.advocate?.image) || "/author.jpg"}
                                        alt={blog.author_name || blog.advocate?.name || "Author"}
                                        className="author-image"
                                    />
                                    <h3 className="mb-0">{blog.author_name || blog.advocate?.name || "Vakilkaro"}</h3>
                                    <span>Legal Expert</span>
                                    <p className="mt-4">
                                        {blog.advocate?.bio || "Experienced legal professional providing expert advice on corporate law, compliance, and registration services."}
                                    </p>
                                </div>
                            </div>

                            {/* BLOG CONTENT */}
                            <div className="col-md-6">
                                <div className="blog-detail-content">

                                    {/* Title */}
                                    <h1>{blog.title}</h1>
                                    {/* Meta Info */}
                                    <div className="blog-meta mb-3 d-flex align-items-center flex-wrap gap-2">
                                        <span className="badge me-2">
                                            {blog.category || "Legal Update"}
                                        </span>

                                        <span className="text-muted me-3">
                                            <FaCalendarAlt className="me-1" />
                                            {formatDate(blog.published_at)}
                                        </span>

                                        <span className="text-muted me-3">
                                            <FaEye className="me-1" />
                                            {blog.views_count || 0} views
                                        </span>

                                        {/* Share Button */}
                                        <a
                                            className=" text-decoration-none text-black d-flex align-items-center"
                                            onClick={() => {
                                                if (navigator.share) {
                                                    navigator.share({
                                                        title: blog.title,
                                                        text: blog.short_description,
                                                        url: window.location.href,
                                                    });
                                                } else {
                                                    navigator.clipboard.writeText(window.location.href);
                                                    alert("Link copied to clipboard!");
                                                }
                                            }}
                                        >
                                            <FaShareAlt className="me-1" />
                                            Share
                                        </a>
                                    </div>
                                    {/* Featured Image */}
                                    {blog.image && (
                                        <img
                                            src={getImageUrl(blog.image)}
                                            alt={blog.title}
                                            className="img-fluid w-100 rounded"
                                            style={{ maxHeight: "400px", objectFit: "cover" }}
                                        />
                                    )}

                                    {/* Short Description as Subtitle */}
                                    <div className="blog-short-desc p-3 bg-light rounded my-3">
                                        <p className="mb-0 fst-italic">{stripHtml(blog.short_description)}</p>
                                    </div>

                                    {/* Long Description Content */}
                                    <div
                                        className="blog-long-content"
                                        dangerouslySetInnerHTML={{ __html: blog.long_description }}
                                    />

                                    {/* Tags */}
                                    {blog.tags && (
                                        <div className="blog-tags mt-4 pt-3 border-top">
                                            <strong><FaTag className="me-2" />Tags: </strong>
                                            {blog.tags.split(",").map((tag, index) => (
                                                <Link
                                                    key={index}
                                                    href={`/blogs?tag=${tag.trim()}`}
                                                    className="badge bg-secondary text-decoration-none me-2"
                                                >
                                                    {tag.trim()}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* RIGHT SIDEBAR - LEGAL QUERIES FORM */}
                            <div className="col-md-3">
                                <div className="blog-legal-queries">
                                    <h2>Legal Queries</h2>
                                    <form action="/consult" method="POST">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            className="form-control mb-4"
                                            required
                                        />
                                        <input
                                            type="tel"
                                            name="mobile"
                                            placeholder="Mobile Number"
                                            className="form-control mb-4"
                                            required
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            className="form-control mb-4"
                                        />
                                        <input
                                            type="text"
                                            name="city"
                                            placeholder="City"
                                            className="form-control mb-4"
                                        />
                                        <select name="service" className="form-control mb-4">
                                            <option value="">Select Service</option>
                                            <option value="Company Registration">Company Registration</option>
                                            <option value="OPC Registration">OPC Registration</option>
                                            <option value="LLP Registration">LLP Registration</option>
                                            <option value="Legal Advice">Legal Advice</option>
                                        </select>
                                        <div className="text-center mt-4">
                                            <button type="submit" className="blog-legal-queries-btn">
                                                Consult an Expert
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="blog-cta mt-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-md-12">
                            <img
                                src="/cta-banner.jpg"
                                width="100%"
                                alt="Consultation Banner"
                                className="rounded"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* RELATED BLOGS SECTION */}
            <section className="blog-list mt-5 mb-5">
                <div className="container-xxl">
                    <div className="section-heading text-center mb-4">
                        <h2>Related <span>Articles</span></h2>
                        <p>You might also find these interesting</p>
                    </div>
                    <div className="row">
                        {relatedBlogs.map((relatedBlog) => (
                            <div className="col-md-4" key={relatedBlog.id}>
                                <div className="blog-list-inner">
                                    <img
                                        src={getImageUrl(relatedBlog.image)}
                                        width="100%"
                                        height="200"
                                        style={{ objectFit: "cover" }}
                                        alt={relatedBlog.title}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "/placeholder-blog.jpg";
                                        }}
                                    />
                                    <h4>{relatedBlog.title.substring(0, 60)}...</h4>
                                    <span>{relatedBlog.category || "Legal"}</span>
                                    <div className="share-read-more mt-3">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <FaLocationArrow /> {relatedBlog.views_count || 0}
                                                </Link>
                                            </li>
                                            <li className="readmore text-end">
                                                <Link href={`/blogs/${relatedBlog.slug}`} className="w-100">
                                                    Read More
                                                    <FaArrowRight className="ms-2" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogDetail;