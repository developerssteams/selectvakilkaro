"use client";
import React, { useState } from "react";
// import "./Faq.css";

const faqs = [
  {
    question: "Can I use Spline for free?",
    answer:
      "Yes, totally! The Basic plan is free. You can have unlimited personal files and file viewers. Maximum 1 team project can be created with 2 team editors."
  },
  {
    question: "Why should I upgrade to Super or Super Team?",
    answer:
      "Upgrading gives you more team members, private projects, and advanced export options."
  },
  {
    question: "What payment methods can I use?",
    answer:
      "We accept all major credit cards, debit cards, and online payment methods."
  },
  {
    question: "How does team billing work?",
    answer:
      "Team billing is charged per seat and can be managed from your billing dashboard."
  },
  {
    question: "How can I cancel my subscription?",
    answer:
      "You can cancel anytime from your account settings. No hidden charges."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>
        Frequently <span>Asked Questions</span>
      </h2>
      <p className="faq-subtitle">
        Find quick answers to common queries about our legal services and process.
      </p>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="icon">
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
    </section>
  );
};

export default Faq;
