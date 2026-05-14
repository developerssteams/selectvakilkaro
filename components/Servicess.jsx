"use client";

import { useState } from "react";
import { FiCommand, FiFileText } from "react-icons/fi";
import { Container, Row, Col } from "react-bootstrap";
// import "./Servicess.css";

const services = [
  {
    title: "Company\nRegistration",
    content: [
      "Private Limited Company Registration",
      "Limited Liability Partnership Registration",
      "One Person Company Registration",
      "Sole Proprietorship Registration",
      "Producer Company Registration",
      "Partnership Firm Registration",
      "Startup India Registration",
      "NGO Registration",
      "Fundraising for startup",
    ],
  },

  {
    title: "Tax\nServices",
    content: [
      "GST Filing",
      "Income Tax Filing",
      "ROC Compliance",
      "TDS Return Filing",
      "Accounting Services",
      "Tax Consultation",
    ],
  },

  {
    title: "Trademark\nRegistration",
    content: [
      "Trademark Registration",
      "Copyright Registration",
      "Patent Registration",
      "IP Infringement",
      "Design Registration",
      "Legal Documents",
    ],
  },

  {
    title: "License/\nCertificate",
    content: [
      "GST Registration",
      "Company Address Change",
      "Director Replacement",
      "Annual Filings",
      "Labour Compliance",
      "Accounting & Tax",
    ],
  },
];

const Servicess = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="vs-section">
      <Container fluid>
        <div className="vs-wrapper">
          {/* HEADING */}
          <div className="text-center">
            <h1 className="hhh">
              From Startup to Scale-Up —{" "}
              <span className="highlightt">
                We
                <br />
                Power Your Growth.
              </span>
            </h1>

            <p className="hhhh mx-auto">
              All-in-one platform for online legal consultation, business
              incorporation, corporate compliance, and startup-friendly
              solutions—tailored for every industry.
            </p>
          </div>

          {/* DESKTOP CARDS */}
          <Row className="vs-top d-none d-md-flex">
            {services.map((item, i) => (
              <Col md={3} key={i}>
                <div
                  className={`vs-top-card ${
                    active === i ? "active" : ""
                  }`}
                  onMouseEnter={() => setActive(i)}
                >
                  <div className="vs-card-inner">
                    <div className="vs-icon">
                      <FiCommand />
                    </div>

                    <h3>
                      {item.title.split("\n").map((line, idx) => (
                        <span key={idx}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </h3>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {/* MOBILE SELECT */}
          <div className="d-md-none mt-4">
            <select
              className="form-select vs-mobile-select"
              value={active}
              onChange={(e) => setActive(Number(e.target.value))}
            >
              {services.map((item, i) => (
                <option key={i} value={i}>
                  {item.title.replace("\n", " ")}
                </option>
              ))}
            </select>
          </div>

          {/* BOTTOM */}
          <div className="vs-bottom">
            {/* LEFT */}
            <div className="vs-bottom-left">
              <div className="vs-text">
                <p>☑ 100 % Safety</p>
                <p>☑ 2x Fast service</p>
                <p>☑ Protected Documents</p>
              </div>

              <div className="vs-left-image">
                <img src="/1199.png" alt="service" />
              </div>
            </div>

            {/* RIGHT */}
            <div className="vs-bottom-right">
              {services[active].content.map((item, i) => (
                <p key={i}>
                  <FiFileText className="doc-icon" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Servicess;