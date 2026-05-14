"use client";
import "./CallToAction.css";
import { FiArrowUpRight } from "react-icons/fi";
// import ctaImg from "call_to_action1.png";

const CallToAction = () => {
    return (
        <section className="cta-section">
            <div className="cta-inner">

                <div className="cta-content">
                    <h2>
                        Expert Advice,<br />
                        <span>Just a Call Away</span>
                    </h2>

                    <p>
                        Get immediate answers to your legal questions from our top-tier team.
                    </p>

                    <div className="cta-buttons">
                        <button className="cta-btn-primary">Call Us</button>

                        <button className="cta-btn-outline">
                            Whatsapp
                            <span className="cta-icon">
                                <FiArrowUpRight />
                            </span>
                        </button>
                    </div>
                </div>

                <div className="cta-image">
                    <img src="/call_to_action1.png" alt="Expert Support" />
                </div>

            </div>
        </section>
    );
};

export default CallToAction;