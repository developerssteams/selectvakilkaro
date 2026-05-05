"use client";
import React, { useState } from "react";
// import "./Testimonials.css";

const testimonials = [
  {
    name: "Romeena De Silva",
    role: "Janet Cosmetics",
    img: "https://i.pravatar.cc/150?img=32",
    text:
      "VakilKaro helped me find the right legal expert within minutes. The process was smooth and completely stress-free.",
  },
  {
    name: "Alex Morgan",
    role: "Business Owner",
    img: "https://i.pravatar.cc/150?img=12",
    text:
      "As a business owner, legal issues can be scary. VakilKaro connected me with the perfect lawyer at the right time.",
  },
  {
    name: "Imran Khan",
    role: "Software Engineer",
    img: "https://i.pravatar.cc/150?img=5",
    text:
      "The platform is simple, fast, and reliable. I got clear legal guidance without wasting time or money.",
  },
  {
    name: "Sara Ali",
    role: "Marketing Head",
    img: "https://i.pravatar.cc/150?img=45",
    text:
      "Excellent experience! The lawyers were professional and explained everything in a very easy way.",
  },
  {
    name: "John Carter",
    role: "Startup Founder",
    img: "https://i.pravatar.cc/150?img=18",
    text:
      "VakilKaro is a lifesaver for startups. From contracts to compliance, everything was handled perfectly.",
  },
  {
    name: "Priya Sharma",
    role: "HR Manager",
    img: "https://i.pravatar.cc/150?img=25",
    text:
      "I really appreciate how quick and transparent the consultation process was. Highly recommended!",
  },
  {
    name: "Daniel Roy",
    role: "Product Designer",
    img: "https://i.pravatar.cc/150?img=52",
    text:
      "The legal expert I spoke with was extremely knowledgeable and supportive throughout the discussion.",
  },
  {
    name: "Ayesha Khan",
    role: "Law Consultant",
    img: "https://i.pravatar.cc/150?img=33",
    text:
      "A well-organized platform that truly understands client needs. The experience was smooth and professional.",
  },
  {
    name: "Michael Lee",
    role: "Entrepreneur",
    img: "https://i.pravatar.cc/150?img=41",
    text:
      "From booking to consultation, everything worked flawlessly. VakilKaro saves time and effort.",
  },
  {
    name: "Neha Verma",
    role: "Business Analyst",
    img: "https://i.pravatar.cc/150?img=60",
    text:
      "I was impressed by the quality of legal advice. Clear, precise, and extremely helpful.",
  },
];

const Testimonials = () => {
  const [centerIndex, setCenterIndex] = useState(2);

  const prevSlide = () => {
    setCenterIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCenterIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const visibleUsers = [
    testimonials[(centerIndex - 2 + testimonials.length) % testimonials.length],
    testimonials[(centerIndex - 1 + testimonials.length) % testimonials.length],
    testimonials[centerIndex],
    testimonials[(centerIndex + 1) % testimonials.length],
    testimonials[(centerIndex + 2) % testimonials.length],
  ];

  return (
    <section className="testimonials">
      <h2>
        The Reason <span>They Choose VakilKaro</span>
      </h2>

      <p className="subtitle">
        Real feedback from people who found the right legal guidance at the right time.
      </p>

      {/* CENTER TEXT CHANGE */}
      <div className="quote-box">
        <span className="quote left">“</span>
        <p>{testimonials[centerIndex].text}</p>
        <span className="quote right">”</span>
      </div>

      <div className="users">
        {visibleUsers.map((user, index) => (
          <div
            key={index}
            className={`user-card ${index === 2 ? "active" : ""}`}
          >
            <img src={user.img} alt={user.name} />
            <div className="stars">★★★★★</div>
            <h4>{user.name}</h4>
            <span>{user.role}</span>
          </div>
        ))}
      </div>

      <button className="nav prev" onClick={prevSlide}>‹</button>
      <button className="nav next" onClick={nextSlide}>›</button>
    </section>
  );
};

export default Testimonials;
