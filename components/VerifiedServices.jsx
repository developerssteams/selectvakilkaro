"use client";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Container, Row, Col } from "react-bootstrap";
import "./VerifiedServices.css";

const services = [
  {
    title: "Business Registration",
    content: ["Private Limited Company Registration", "Limited Liability Partnership Registration", "One Person Company Registration", "Sole Proprietorship Registration", "Producer Company Registration", "Partnership Firm Registration", "Startup India Registration", "NGO Registration", "Fundraising for startup"],
  },
  {
    title: "Licenses & Certificate",
    content: ["GST Filing", "Income Tax Filing", "ROC Compliance"],
  },
  {
    title: "Trademark & IP",
    content: ["Trademark Registration", "Copyright Registration", "Patent Registration", "IP Infringement", "Design Registration", "Free Legal Documents", "Business Contracts"],
  },
  {
    title: "Legal & Compliance",
    content: ["GST Registration", "Change Company Address", "Director Replacement", "Mandatory Annual Filings", "Labour Compliance", "Shop and Establishment License", "Accounting & Tax"],
  },
];

const VerifiedServices = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="vs-section">
      <Container>
        {/* Header Section */}
        <div className="text-center">
          <h1 className="hhh">
            From Startup to Scale-Up — We Power Your
            <span className="highlightt"> Growth</span>
          </h1>
          <p className="hhhh mx-auto">
            All-in-one platform for legal consultation, business setup, and compliance solutions.
          </p>
        </div>

        {/* TOP CARDS - Desktop */}
        <Row className="vs-top d-none d-md-flex mt-5">
          {services.map((item, i) => (
            <Col key={i} md={3}>
              <div
                className={`vs-top-card ${active === i ? "active" : ""}`}
                onMouseEnter={() => setActive(i)}
              >
                <h3>
                  {item.title}
                  <span className="vs-arrow">
                    <FiArrowUpRight />
                  </span>
                </h3>
              </div>
            </Col>
          ))}
        </Row>

        {/* TOP CARDS - Mobile Dropdown */}
        <div className="d-md-none mt-4">
          <select 
            className="form-select vs-mobile-select"
            value={active}
            onChange={(e) => setActive(parseInt(e.target.value))}
          >
            {services.map((item, i) => (
              <option key={i} value={i}>{item.title}</option>
            ))}
          </select>
        </div>

        {/* BOTTOM PANEL */}
        <div className="vs-bottom mt-4">
          <div className="vs-bottom-left">
            <p>✔ 100% Safety</p>
            <p>✔ Fast Service</p>
            <p>✔ Protected Documents</p>
          </div>

          <div className="vs-bottom-right">
            {services[active].content.map((item, i) => (
              <p key={i}>📄 {item}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VerifiedServices;