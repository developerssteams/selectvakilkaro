import React from "react";
// import "./LeadershipSlider.css";

const data = [
  {
    img: "https://images.unsplash.com/photo-1555374018-13a8994ab246",
    title: "Lorem Ipsum Is Not Simply Random",
    desc: "Lorem Ipsum is not simply random text. It has roots in classical literature from 45 BC."
  },
  {
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    title: "Lorem Ipsum Is Not Simply Random",
    desc: "Lorem Ipsum is not simply random text. It has roots in classical literature from 45 BC."
  },
  {
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    title: "Lorem Ipsum Is Not Simply Random",
    desc: "Lorem Ipsum is not simply random text. It has roots in classical literature from 45 BC."
  },
  {
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    title: "Lorem Ipsum Is Not Simply Random",
    desc: "Lorem Ipsum is not simply random text. It has roots in classical literature from 45 BC."
  }
];

const LeadershipSection = () => {
  return (
    <section className="leadership">

      {/* Heading */}
      <div className="leadership-heading">
        <h2>
          Stay Informed, <span>Stay Compliant Paragraph:</span>
        </h2>
        <p>
          Your definitive and comprehensive resource for decoding the complex web of laws, regulations, and strategic policies that directly influence the sustainable growth of your business and the lasting impact of your social mission.
        </p>
      </div>

      {/* Cards */}
      <div className="leadership-grid">
        {data.map((item, i) => (
          <div className="leadership-card" key={i}>

            {/* IMAGE */}
            <img src={`${item.img}?auto=format&fit=crop&w=800&q=80`} alt="" />

            {/* TEXT BELOW IMAGE */}
            <div className="leadership-content">
              <span className="tag">Lorem Ipsum is not simply random</span>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <button className="read-btn">
                Learn More <span>›</span>
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default LeadershipSection;