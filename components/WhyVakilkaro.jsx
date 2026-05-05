// import "./WhyVakilkaro.css";
import { FiArrowUpRight } from "react-icons/fi";
// import Icons1 from "Icons/1.png"; 
// import Icons2 from "Icons/2.png"; 
// import Icons3 from "Icons/3.png"; 
// import Icons4 from "Icons/4.png"; 



const WhyVakilkaro = () => {
  return (
    <section className="why-section">
      <div className="why-card">

        {/* HEADER */}
        <div className="why-header">
          <div>
            <h2>
              Why <span>Thousands Trust Vakilkaro</span>
            </h2>
            <p>
              Choose Vakilkaro for unmatched legal expertise, premium experience
              and a strong professional network that ensures your business grows
              without legal hurdles.
            </p>
          </div>

          <div className="why-arrow">
            <FiArrowUpRight />
          </div>
        </div>
        {/* FEATURES */}
        <div className="why-features">

          <div className="why-item">
            <span className="icon">
              <img src="/Icons/1.png" alt="" />
            </span>
            <h4>LARGEST NETWORK</h4>
            <p>
              Connect with India’s strongest network of legal, CA & CS experts.
            </p>
          </div>

          <div className="why-item">
            <span className="icon">
              <img src="Icons/2.png" alt="" />
            </span>
            <h4>PROFESSIONAL TEAM</h4>
            <p>
              100+ verified professionals providing premium and accurate services.
            </p>
          </div>

          <div className="why-item">
            <span className="icon">
              <img src="Icons/3.png" alt="" />
            </span>
            <h4>BEST PRICE GUARANTEE</h4>
            <p>
              Premium service quality at the most competitive price.
            </p>
          </div>

          <div className="why-item">
            <span className="icon">
              <img src="Icons/4.png" alt="" />
            </span>
            <h4>24/7 SUPPORT</h4>
            <p>
              Dedicated WhatsApp support for instant help anytime.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyVakilkaro;
