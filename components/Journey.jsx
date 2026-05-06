"use client";
import "./Journey.css";

const services = [
  {
    title: "Lawyers",
    desc: "For contracts, notices, and litigation support.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",

    tag: "205+ Lawyers",
  },
  {
    // title: "Chartered Accountants (CAs)",
    title: "Chartered  (CAs)",
    desc: "For tax filings, audits, and financial planning.",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c",
    tag: "256+ CAs",
  },
  {
    // title: "Company Secretaries (CSs)",
    title: "Company  (CSs)",
    desc: "For regulatory compliance, and corporate governance",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    tag: "200+ CS",
  },
];

const Journey = () => {
  return (
    <section className="support-section">
      <h1>
        Professional Support on{" "}
        <span>Demand</span>
      </h1>
      <p className="sub">
        We guide you through legal, financial, and compliance challenges.
      </p>

      <div className="card-wrap">
        {services.map((item, i) => (
          <div className="support-card" key={i}>
            <div className="img-box">
              <img src={item.img} alt="" />
              <span className="tag">✔ {item.tag}</span>
            </div>
            <h2>{item.title}</h2>
            <p className="desc">{item.desc}</p>

            <button className="btn">Consult Now</button>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;