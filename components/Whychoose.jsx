"use client";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "./Whychoose.css";

const contentData = [
  {
    title: "LARGEST NETWORK",
    icon: "./Whychoose/lergestnetwork.jpg",
    description:
      "Affordable pricing with premium quality legal solutions for startups and businesses",

    image:
      "./Whychoose/lergestnetwork.jpg",

    topics: [
      {
        title: "Practical Business Guidance",
        progress: 100,
        color: "#2f37ff",
      },
      {
        title: "Network of Professionals",
        progress: 90,
        color: "#37b24d",
      },
      {
        title: "Dedicated Relationship Support",
        progress: 100,
        color: "#a61eeb",
      },
    ],
  },

  {
    title: "BEST PRICE GUARANTEE",
    icon: "./Whychoose/bestpriceguarantee.jpg",
    description:
      "Affordable pricing with premium quality legal solutions for startups and businesses.",

    image:
      "./Whychoose/bestpriceguarantee.jpg",

    topics: [
      {
        title: "Affordable Service Pricing",
        progress: 95,
        color: "#ff6b00",
      },
      {
        title: "Transparent Costing",
        progress: 92,
        color: "#20c997",
      },
      {
        title: "Premium Value Delivery",
        progress: 98,
        color: "#845ef7",
      },
    ],
  },

  {
    title: "PROFESSIONAL TEAM",
    icon: "./Whychoose/professionalteam.jpg",
    description:
      "Experienced legal experts and professionals helping your business grow smoothly.",

    image:
      "./Whychoose/professionalteam.jpg",

    topics: [
      {
        title: "Experienced Legal Experts",
        progress: 100,
        color: "#228be6",
      },
      {
        title: "Business Compliance Team",
        progress: 93,
        color: "#40c057",
      },
      {
        title: "Client Satisfaction",
        progress: 99,
        color: "#be4bdb",
      },
    ],
  },

  {
    title: "24/7 SUPPORT",
    icon: "./Whychoose/24_7support.jpg",
    description:
      "Round the clock support system for all your legal and business requirements.",

    image:
      "./Whychoose/24_7support.jpg",

    topics: [
      {
        title: "Instant Query Resolution",
        progress: 100,
        color: "#364fc7",
      },
      {
        title: "Customer Assistance",
        progress: 97,
        color: "#2b8a3e",
      },
      {
        title: "Always Available Team",
        progress: 100,
        color: "#9c36b5",
      },
    ],
  },
];

const Whychoose = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const DURATION = 3000;

  useEffect(() => {
    setProgress(0);

    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / DURATION) * 100;

      if (newProgress >= 100) {
        setProgress(100);

        setTimeout(() => {
          setActiveIndex((prev) => (prev + 1) % contentData.length);
        }, 100);

        clearInterval(interval);
      } else {
        setProgress(newProgress);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const currentContent = contentData[activeIndex];

  return (
    <section className="why-section pt-5">
      <div className="container-xxl">

        <div className="why-wrapper">
          {/* TOP */}
          <div className="why-top">
            <h1>
              Why Thousands Trust <span>VakilKaro ?</span>
            </h1>
          </div>

          <Row className="align-items-center gy-4">
            {/* LEFT SIDE */}
            <Col lg={4}>
              <div className="why-left">
                {contentData.map((item, index) => (
                  <div
                    key={index}
                    className={`why-item ${activeIndex === index ? "active" : ""
                      }`}
                    onClick={() => {
                      setActiveIndex(index);
                      setProgress(0);
                    }}
                  >
                    <div className="why-item-top">
                      <span className="icon-box">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="why-icon-img"
                        />
                      </span>

                      <h3>{item.title}</h3>
                    </div>

                    {activeIndex === index && (
                      <div className="progress-line">
                        <div
                          className="progress-fill"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Col>

            {/* MIDDLE */}
            <Col lg={5}>
              <div className="why-middle">
                <p className="middle-desc">{currentContent.description}</p>

                <div className="topics-box">
                  <h4>Strongest Topics</h4>

                  {currentContent.topics.map((topic, idx) => (
                    <div className="topic-item" key={idx}>
                      <div className="topic-top">
                        <div className="topic-left">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            alt=""
                          />

                          <span>{topic.title}</span>
                        </div>

                        <strong>{topic.progress}%</strong>
                      </div>

                      <div className="topic-progress">
                        <div
                          className="topic-fill"
                          style={{
                            width: `${topic.progress}%`,
                            background: topic.color,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={3}>
              <div className="why-image">
                <img src={currentContent.image} alt="why choose" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;