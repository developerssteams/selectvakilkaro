"use client";
import "./Journey.css";

const services = [
  {
    title: "Lawyers",
    desc: "For contract notices and litigation support.",
    img: "./men.png",
  },
  {
    title: "Chartered (CAs)",
    desc: "For tax filings, audits, and financial planning.",
    img: "./men.png",
  },
  {
    title: "Company (CSs)",
    desc: "For regulatory compliance and corporate governance.",
    img: "./subheading.png",
  },
];

export default function Journey() {
  return (
    <section className="support-section">
      <div className="card-wrap">
        {services.map((item, i) => (
          <div className="card" key={i}>
            {/* IMAGE - Bahar wala effect */}
            <div className="card-img-wrapper">
              <img className="imgcard" src={item.img} alt={item.title} />
            </div>

            {/* CONTENT */}
            <div className="card-content">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>Consult Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}