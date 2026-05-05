import React from "react";
import "./Business_Pricing.css";

export default function Business_Pricing() {
  return (
    <section className="business-section">
      <div className="container-fluid business-container">
        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-md-5 business-left">
            <h2>Set up your site,<br />pick a plan later</h2>
            <p>
              Choose the plan that’s right for your business.
              Whether you’re just getting started with email marketing.
            </p>

            <h6 className="core-title">Core</h6>

            <div className="feature-row">Name Approval Certificate</div>
            <div className="feature-row">Company Incorporation Certificate</div>
            <div className="feature-row">DIN, DSC</div>
            <div className="feature-row">MOA AOA Certificate</div>
            <div className="feature-row">PAN & TAN Registration</div>
            <div className="feature-row">Bank Account Opening Assistance</div>

            <div className="feature-row highlight">Compliance (1 year)</div>
            <div className="feature-row highlight">Billing Software</div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-7">

            <div className="card-wrapper">

              {/* CARDS */}
              <div className="row g-4 mb-4">

                <div className="col-md-4">
                  <div className="business-card">
                    <h5>Basic</h5>
                    <h6>$15 <span>/ user / mo</span></h6>
                    <p className="small">(Paid Yearly)</p>
                    <button className="btn-light w-100">Get Started</button>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="business-card active">
                    <h5>Growth</h5>
                    <h6>$15 <span>/ user / mo</span></h6>
                    <p className="small">(Paid Yearly)</p>
                    <button className="color">Get Started</button>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="business-card">
                    <h5>Premium</h5>
                    <h6>$15 <span>/ user / mo</span></h6>
                    <p className="small">(Paid Yearly)</p>
                    <button className="btn-light w-100">Get Started</button>
                  </div>
                </div>

              </div>

              {/* COMPARISON */}
              <div className="compare-row"><div>✔</div><div>✔</div><div>✔</div></div>
              <div className="compare-row"><div>✔</div><div>✔</div><div>✔</div></div>
              <div className="compare-row"><div>✔</div><div>✔</div><div>✔</div></div>
              <div className="compare-row"><div>✔</div><div>✔</div><div>✔</div></div>
              <div className="compare-row"><div>✔</div><div>✔</div><div>✔</div></div>
              <div className="compare-row"><div>✔</div><div>✔</div><div>✔</div></div>

              <div className="compare-row highlight"><div>—</div><div>—</div><div>✔</div></div>
              <div className="compare-row highlight"><div>—</div><div>—</div><div>✔</div></div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
