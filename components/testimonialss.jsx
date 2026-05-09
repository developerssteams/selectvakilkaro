"use client";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./testimonialss.css";

const testimonials = [
  {
    name: "Dr. Luqman Khan",
    rating: 4,
    text: "I am the partner of the Medrix Records Management Services LLP and working with Ujjwal. Our experience is very good and would like to continue in future.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ajayraj Infratech Pvt. Ltd.",
    rating: 4,
    text: "All team members are very helpful and experienced. Filing GST & other compliances was smooth and well managed.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Seshasayana Reddy",
    rating: 5,
    text: "They provide seamless service and support. GST filings and compliance were handled with least follow-ups.",
    img: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const Testimonialss = () => {
  return (
    <section className="partner-section">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <h1>
            Testimonials That Speak for <span>Us</span>
          </h1>
        </div>

        {/* Testimonials Grid */}
        <Row className="partner-container justify-content-center">
          {testimonials.map((item, index) => (
            <Col key={index} lg={4} md={6} sm={12} className="mb-4">
              <div className="partner-card">
                <div className="partner-user">
                  <img src={item.img} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p className="partner-rating mb-0">
                      {"★".repeat(item.rating)}
                      {"☆".repeat(5 - item.rating)} {item.rating}/5
                    </p>
                  </div>
                </div>
                <p className="partner-text mb-0">{item.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonialss;