"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./Startup_Query_Card.css";

const Startup_Query_Card = () => {
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
        <section className="startup_query_wrapper">

            <div className="startup_query_card">

                {/* LEFT */}
            <section className="startup_wrapper">
  <div className="startup_card">

    {/* LEFT */}
    <div className="startup_left">
      <h2>
        Startup India Registration 2026 – Get Your DPIIT Certificate
      </h2>

      <p>
        We’ve simplified legal assistance for you. From consultation to resolution,
        our process is designed to be seamless and efficient.
      </p>

      <div className="startup_form">
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
    <div className="startup_right">
      <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216" />

      {/* BLACK INFO BAR */}
      <div className="startup_stats">
        <div>
          ⭐ <strong>4.9/5 Rating</strong>
          <span>500+ Google Reviews</span>
        </div>

        <div>
          📄 <strong>10,000+</strong>
          <span>Registrations Completed</span>
        </div>

        <div>
          🛡️ <strong>15,000+</strong>
          <span>Entrepreneurs Trusted Us</span>
        </div>
      </div>
    </div>
  </div>
</section>
            </div>
        </section>
    );
};

export default Startup_Query_Card;