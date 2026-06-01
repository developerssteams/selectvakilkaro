"use client";

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "./News.css";

const NewsSection = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch news from API
    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/active`);
                const result = await response.json();
                
                if (result.success) {
                    setNews(result.data);
                } else {
                    setError(result.message);
                }
            } catch (err) {
                setError('Failed to fetch news');
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    // Format date function
    const formatDate = (dateString) => {
        if (!dateString) return "No date";
        const date = new Date(dateString);
        return {
            day: date.getDate(),
            month: date.toLocaleString('default', { month: 'short' }),
            year: date.getFullYear()
        };
    };

    // Loading state
    if (loading) {
        return (
            <section className="news-section pt-5">
                <div className="container-xxl">
                    <div className="text-center py-5">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="mt-3">Loading news...</p>
                    </div>
                </div>
            </section>
        );
    }

    // Error state
    if (error) {
        return (
            <section className="news-section pt-5">
                <div className="container-xxl">
                    <div className="text-center py-5">
                        <p className="text-danger">Error: {error}</p>
                        <button 
                            className="btn btn-primary mt-2" 
                            onClick={() => window.location.reload()}
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="news-section pt-5">
            <div className="container-xxl">
                <div className="section-wrapper">
                    {/* HEADING */}
                    <div className="news-heading text-center">
                        <h2>VakilKaro In News</h2>
                        <p className="">
                            See how VakilKaro is making headlines and redefining the legal-tech landscape through
                            innovation, transparency, and excellence. Catch up on our latest features, press releases
                        </p>
                    </div>

                    {/* CARDS */}
                    <Row className="g-4 justify-content-center">
                        {news.length === 0 ? (
                            <div className="text-center py-5">
                                <p>No news available at the moment.</p>
                            </div>
                        ) : (
                            news.map((item) => {
                                const { day, month, year } = formatDate(item.created_at);
                                return (
                                    <Col lg={3} md={6} key={item.id}>
                                        <div className="news-card">
                                            {/* IMAGE */}
                                            <div className="news-img-wrapper">
                                                <img
                                                    src={item.full_image_url || item.image_url || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"}
                                                    alt={item.title}
                                                    onError={(e) => {
                                                        e.target.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80";
                                                    }}
                                                />

                                                {/* DATE */}
                                                <div className="news-date">
                                                    {day} <br />
                                                    {month} <br />
                                                    {year}
                                                </div>
                                            </div>

                                            {/* CONTENT */}
                                            <div className="news-content">
                                                <h3>{item.title}</h3>
                                                <p>{item.description?.substring(0, 100)}...</p>
                                                
                                                {item.read_more_link ? (
                                                    <a 
                                                        href={item.read_more_link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="news-read"
                                                    >
                                                        Read More
                                                    </a>
                                                ) : (
                                                    <span className="news-read">
                                                        Read More
                                                    </span>
                                                )}

                                                {item.live_chat_link && (
                                                    <a 
                                                        href={item.live_chat_link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="news-chat ms-2"
                                                    >
                                                        Live Chat
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </Col>
                                );
                            })
                        )}
                    </Row>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;