"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
// import "./Query_Card.css";


const cards = [
  {
    title: "Business Launchpad (Registration & Startups)",
    tabs: [
      {
        name: "Pvt Ltd",
        link: "/business",
        video: "https://www.youtube.com/embed/1hHMwLxN6EM"
      },

      { name: "LLP", video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
      { name: "OPC", video: "https://www.youtube.com/embed/ysz5S6PUM-U" },
      { name: "Partnership", video: "https://www.youtube.com/embed/jNQXAC9IVRw" },
      { name: "Proprietorship", video: "https://www.youtube.com/embed/aqz-KE-bpKQ" }
    ]
  },
  {
    title: "Empowering your mission with seambless NGO compliance.",
    tabs: [
      { name: "Secction 8", video: "https://www.youtube.com/embed/1hHMwLxN6EM" },
      { name: "Trust", video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
      { name: "Society", video: "https://www.youtube.com/embed/ysz5S6PUM-U" },
      { name: "12A/80G", video: "https://www.youtube.com/embed/jNQXAC9IVRw" },
      { name: "CSR-1", video: "https://www.youtube.com/embed/aqz-KE-bpKQ" },
      { name: "NGO Darpan", video: "https://www.youtube.com/embed/aqz-KE-bpKQ" },
      { name: "FCRA", video: "https://www.youtube.com/embed/aqz-KE-bpKQ" }
    ]
  },
  {
    title: "Shield your assets and stay compliant effortlessly.",
    tabs: [
      { name: "Trademark", video: "https://www.youtube.com/embed/1hHMwLxN6EM" },
      { name: "Copyright", video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
      { name: "Design", video: "https://www.youtube.com/embed/ysz5S6PUM-U" },
      { name: "Patent", video: "https://www.youtube.com/embed/jNQXAC9IVRw" },
      { name: "Logo Design", video: "https://www.youtube.com/embed/aqz-KE-bpKQ" }
    ]
  },
  {
    title: "Finance Business",
    tabs: [
      { name: "Money Lending", video: "https://www.youtube.com/embed/1hHMwLxN6EM" },
      { name: "Microfinance", video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
      { name: "Credit Co-operative Society", video: "https://www.youtube.com/embed/ysz5S6PUM-U" },
      { name: "Insurance Marketing Firm", video: "https://www.youtube.com/embed/jNQXAC9IVRw" },
      { name: "NBFC", video: "https://www.youtube.com/embed/aqz-KE-bpKQ" }
    ]
  },
  {
    title: "Business Funding",
    tabs: [
      { name: "SME-IPO", video: "https://www.youtube.com/embed/1hHMwLxN6EM" },
      { name: "Main Board-IPO", video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
      { name: "Pitch Deck", video: "https://www.youtube.com/embed/ysz5S6PUM-U" },
      { name: "Business Valuation", video: "https://www.youtube.com/embed/jNQXAC9IVRw" },
      { name: "Private Placement", video: "https://www.youtube.com/embed/aqz-KE-bpKQ" },
      { name: "ESOP", video: "https://www.youtube.com/embed/aqz-KE-bpKQ" },
      { name: "VC Funding", video: "https://www.youtube.com/embed/aqz-KE-bpKQ" }
    ]
  },
  {
    title: "Certifications & Licenses ",
    tabs: [
      { name: "GST Registration", video: "https://www.youtube.com/embed/1hHMwLxN6EM" },
      { name: "ISO Certificate", video: "https://www.youtube.com/embed/tgbNymZ7vqY" },
      { name: "FSSAI", video: "https://www.youtube.com/embed/ysz5S6PUM-U" },
      { name: "ESI/EPF", video: "https://www.youtube.com/embed/jNQXAC9IVRw" },
      { name: "Startup India", video: "https://www.youtube.com/embed/aqz-KE-bpKQ" }
    ]
  }
];


const Query_Card = () => {
  const router = useRouter();

  const [active, setActive] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [animating, setAnimating] = useState(false);

  const wrapperRef = useRef(null);

  // 🔥 active card change hone pe tab reset
  useEffect(() => {
    setActiveTab(0);
  }, [active]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return;

    const handleWheel = (e) => {
      e.preventDefault();

      if (animating) return;

      if (e.deltaY > 0 && active < cards.length - 1) {
        setAnimating(true);
        setActive((prev) => prev + 1);
        setTimeout(() => setAnimating(false), 500);
      }

      if (e.deltaY < 0 && active > 0) {
        setAnimating(true);
        setActive((prev) => prev - 1);
        setTimeout(() => setAnimating(false), 500);
      }
    };

    if (wrapper) {
      wrapper.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener("wheel", handleWheel);
      }
    };
  }, [active, animating]);

  return (
    <section className="query-wrapper" ref={wrapperRef}>
      <div className="query-stack">
        {cards.map((item, index) => {
          const isActive = index === active;
          const isPassed = index < active;

          return (
            <div
              key={index}
              className={`query-card ${isActive ? "active" : ""} ${isPassed ? "hide" : ""}`}
              style={{
                top: `${index * 8}px`,
                zIndex: cards.length - index,
              }}
            >
              <div className="Queryleft">
                <h2>{item.title}</h2>

                <div className="tabs">
                  {item.tabs.map((tab, i) => (
                    <button
                      type="button"   // 🔥 IMPORTANT FIX
                      key={i}
                      className={activeTab === i ? "active-tab" : ""}
                      onClick={(e) => {
                        e.stopPropagation();

                        if (tab.link) {
                          router.push(tab.link); // 🔥 PAGE OPEN
                        } else {
                          setActiveTab(i);
                        }
                      }}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>

                <div className="form">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Location" />
                  <input type="email" placeholder="Email Address" />
                  <input type="text" placeholder="Phone Number" />

                  <button type="button" className="submit-btn-query">
                    Submit Your Query
                  </button>
                </div>
              </div>

              <div className="queryright">
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                  alt="library"
                />
              </div>
            </div>
          );
        })}
      </div>

      <br />

      <div className="video-section">
        <iframe

          src={cards?.[active]?.tabs?.[activeTab]?.video || ''}
          title="video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Query_Card;