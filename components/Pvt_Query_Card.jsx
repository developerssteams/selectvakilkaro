"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./Pvt_Query_Card.css";

const Pvt_Query_Card = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState(0);

    const card = {
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
    };

    return (
        <section className="pvt_query_wrapper">

            <div className="pvt_query_card">

                {/* LEFT */}
                <div className="pvt_query_left">
                    <h2>{card.title}</h2>

                    <div className="pvt_query_tabs">
                        {card.tabs.map((tab, i) => (
                            <button
                                key={i}
                                className={activeTab === i ? "active-tab" : ""}
                                onClick={() => {
                                    if (tab.link) {
                                        router.push(tab.link);
                                    } else {
                                        setActiveTab(i);
                                    }
                                }}
                            >
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    <div className="pvt_query_form">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Location" />
                        <input type="email" placeholder="Email Address" />
                        <input type="text" placeholder="Phone Number" />

                        <button className="pvt_query_btn">
                            Submit Your Query
                        </button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="pvt_query_right">
                    <img
                        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
                        alt="library"
                    />
                </div>

            </div>

            {/* ✅ VIDEO FIX */}
            <div className="pvt_query_video">
                <iframe
                    key={activeTab}   // 🔥 important re-render fix
                    src={card.tabs[activeTab].video}
                    title="video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>

        </section>
    );
};

export default Pvt_Query_Card;