"use client";
import { Container, Row, Col } from "react-bootstrap";
// import "./Professional.css";

const services = [
  {
    title: "Lawyers",
    desc: "For contracts, notices, and litigation support.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    tag: "205+ Lawyers",
  },
  {
    title: "Chartered (CAs)",
    desc: "For tax filings, audits, and financial planning.",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
    tag: "256+ CAs",
  },
  {
    title: "Company (CSs)",
    desc: "For regulatory compliance, and corporate governance",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    tag: "200+ CS",
  },
];


const brands = [
  "coda",
  "inter",
  "ATLASSIAN",
  "ClickTravel",
  "Notion",
  "etoro",
  "H&R BLOCK",
  "conl",
];

const Professional = () => {
  return (
    <section className="support-section pt-5">
      <div className="container-xxl">

        {/* Header */}
        <div className="section-wrapper">

        <div className="text-center">
          <h1>
            Professional Support on{" "}
            <span>Demand</span>
          </h1>
          <p className="sub mx-auto" style={{ maxWidth: "600px", color: "black", }}>
            We guide you through legal, financial, and compliance challenges.
          </p>
        </div>

        {/* Cards Grid */}
        <Row className="card-wrap justify-content-center mt-5">
          {services.map((item, i) => (
            <Col key={i} lg={4} md={6} sm={12} className="mb-4">
              <div className="support-card">
                <div className="img-box">
                  <img src={item.img} alt={item.title} />
                  <span className="tag">✔ {item.tag}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="desc">{item.desc}</p>
                <button className="btnn">Consult Now</button>
              </div>
            </Col>
          ))}
        </Row>
        <div className="brands-wrapper">

          <p className="brands-heading">
            TRUSTED BY +25,000 BUSSINESSES
          </p>

          <div className="brands-row">
            {brands.map((brand, index) => (
              <div className="brand-item" key={index}>
                {brand}
              </div>
            ))}
          </div>

        </div>

        </div>
      </div>
    </section>
  );
};

export default Professional;