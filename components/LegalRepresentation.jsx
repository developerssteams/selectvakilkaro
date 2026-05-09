"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./LegalRepresentation.css";

// 4 Titles ka content
const contentData = [
  {
    title: "LARGEST NETWORK",
    icon: "₹",
    heading: "Obtain Authorization from Government Regulatory Authorities",
    description: "Get your business registered and authorized by the government with our expert network of 5000+ legal professionals.",
    logos: ["/iso.jpeg", "/iso.jpeg", "/iso.jpeg", "/iso.jpeg"]
  },
  {
    title: "BEST PRICE GUARANTEE",
    icon: "📄",
    heading: "Affordable Legal Services with Price Match Guarantee",
    description: "Found a lower price elsewhere? We'll match it. Quality legal services at the best rates in the industry.",
    logos: ["/iso.jpeg", "/iso.jpeg", "/iso.jpeg", "/iso.jpeg"]
  },
  {
    title: "PROFESSIONAL TEAM",
    icon: "🎧",
    heading: "Expert Lawyers & Chartered Accountants at Your Service",
    description: "Our team of experienced professionals ensures your compliance and legal needs are handled with precision.",
    logos: ["/iso.jpeg", "/iso.jpeg", "/iso.jpeg", "/iso.jpeg"]
  },
  {
    title: "24/7 SUPPORT",
    icon: "⏱",
    heading: "Round the Clock Legal Assistance & Query Resolution",
    description: "Need help anytime? Our support team is available 24/7 to answer your questions and guide you.",
    logos: ["/iso.jpeg", "/iso.jpeg", "/iso.jpeg", "/iso.jpeg"]
  }
];

const partners = [
  { img: "https://www.vakilkaro.com/_next/static/media/Client-1.76ed41a6.png" },
  { img: "https://www.vakilkaro.com/_next/static/media/Client-6.3e6fc804.png" },
  { img: "https://www.vakilkaro.com/_next/static/media/Client-1.76ed41a6.png" },
  { img: "https://www.vakilkaro.com/_next/static/media/Client-12.2842a11b.png" },
];

const LegalRepresentation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const DURATION = 5000;

  useEffect(() => {
    setProgress(0);
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / DURATION) * 100;

      if (newProgress >= 100) {
        setProgress(100);
        setTimeout(() => {
          setActiveIndex((prev) => (prev + 1) % contentData.length);
        }, 50);
        clearInterval(interval);
      } else {
        setProgress(newProgress);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const currentContent = contentData[activeIndex];

  return (
    <section className="why-section">
      <Container>
        {/* HEADER */}
        <div className="why-top text-center">
          <h1>
            Why Thousands Trust <span style={{ color: "#efbf04", fontWeight: "700" }}>VakilKaro</span> ?
          </h1>
          <p className="mx-auto" style={{ maxWidth: "700px" }}>
            Choose Vakilkaro for unmatched legal expertise, premium experience and a
            strong professional network that ensures your business grows without legal hurdles.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <Row className="why-container mt-5">
          {/* LEFT BOX - 4 Titles */}
          <Col lg={4} md={12} className="mb-4 mb-lg-0">
            <div className="why-left">
              {contentData.map((item, index) => (
                <div
                  key={index}
                  className={`why-item ${activeIndex === index ? "active" : ""}`}
                  onClick={() => {
                    setActiveIndex(index);
                    setProgress(0);
                  }}
                >
                  <p>
                    <span>{item.icon}</span>
                    {item.title}
                  </p>
                  {activeIndex === index && (
                    <div className="item-progress-bar">
                      <div
                        className="item-progress-fill"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Col>

          {/* RIGHT BOX - Dynamic Content */}
          <Col lg={8} md={12}>
            <div className="why-right">
              <h2>{currentContent.heading}</h2>
              <p className="description">{currentContent.description}</p>
              <div className="logo-row">
                {currentContent.logos.map((logo, idx) => (
                  <img key={idx} src={logo} alt="certification" />
                ))}
              </div>
            </div>
          </Col>
        </Row>

        {/* TRUSTED PARTNERS SLIDER */}
        <div className="trusted-partners mt-5">
          <h2 className="trusted-title text-center">
            Our Trusted <span style={{ color: "#efbf04" }}>Partners</span>
          </h2>
          <div className="slider mt-4">
            <div className="slide-track">
              {[...partners, ...partners].map((item, index) => (
                <div className="slide" key={index}>
                  <img src={item.img} alt="partner logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LegalRepresentation;