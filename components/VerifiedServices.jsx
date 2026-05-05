"use client";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
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
    title: "Trademark  & IP",
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

      <h1>Form Startup To Scale-Up-We Power Your Growth.</h1>
      <p>All-in-one platform for online legal consultation,business incorporation,corporate compliance,and startup-friendly solutions- <br /> tailored for every industry.</p>

      {/* TOP CARDS */}
      <div className="vs-top">
        {services.map((item, i) => (
          <div
            key={i}
            className={`vs-top-card ${active === i ? "active" : ""}`}
            onMouseEnter={() => setActive(i)}
          >
            <h3>{item.title}
              <span className="vs-arrow">
              <FiArrowUpRight />
            </span>
            </h3>
            {/* <span className="vs-arrow">
              <FiArrowUpRight />
            </span> */}
          </div>
        ))}
      </div>

      {/* BOTTOM PANEL */}
      <div className="vs-bottom">
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

    </section>
  );
};

export default VerifiedServices;