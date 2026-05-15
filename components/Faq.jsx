"use client";

import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
// import "./Faq.css";

const faqs = [
  {
    question: "How to register a private limited company in India?",
    answer:
      "To register a private limited company in India, you need DSC, DIN, name approval through SPICe+ Part A, and company incorporation through SPICe+ Part B on the MCA portal."
  },
  {
    question: "What is the cost of private limited company registration in India?",
    answer:
      "The cost depends on authorized capital, professional fees, and government charges."
  },
  {
    question: "How long does it take for company registration in India?",
    answer:
      "Usually it takes around 7–10 working days depending on approvals."
  },
  {
    question: "What are the documents required for private limited company registration?",
    answer:
      "PAN Card, Aadhaar Card, address proof, passport-size photos, and office proof are required."
  },
  {
    question: "What is the minimum capital required for private limited company?",
    answer:
      "There is no minimum capital requirement after Companies Amendment Act."
  },
  {
    question: "How many directors are required for private limited company registration?",
    answer:
      "Minimum 2 directors are required for a private limited company."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section pt-5">
      <div className="container-xxl">
        <div className="faq-main">

          <Row className="align-items-center">

            {/* LEFT CONTENT */}
            <Col lg={5}>
              <div className="faq-left">
                <h1>
                  Frequently <br />
                  <span>Asked Questions</span>
                </h1>

                <p className="faq-subtitle">
                  Your definitive and comprehensive resource for decoding the
                  complex web of laws, regulations, and strategic policies that
                  directly influence the sustainable growth of your business.
                </p>
              </div>
            </Col>

            {/* RIGHT FAQ */}
            <Col lg={7}>
              <div className="faq-container">

                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`faq-item ${activeIndex === index ? "active" : ""
                      }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="faq-question">

                      <span className="qus">
                        {faq.question}
                      </span>

                      <span className="faq-icon">
                        {activeIndex === index ? "−" : "+"}
                      </span>

                    </div>

                    {activeIndex === index && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}

                  </div>
                ))}

              </div>
            </Col>

          </Row>

        </div>
      </div>
    </section>
  );
};

export default Faq;