import React from "react";
// import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">

        {/* LEFT FORM */}
        <div className="contact-form">
          <h2>Let’s Solve Your Legal Queries</h2>

          <div className="form-row">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Location" />
          </div>

          <div className="form-row">
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number" />
          </div>

          <textarea placeholder="About Your Concern"></textarea>

          <div className="form-bottom">
            <label className="checkbox">
              <input type="checkbox" />
              <span>
                By sending this form, you agree to our{" "}
                <a href="#">Privacy Policy</a>
              </span>
            </label>

           
          </div>

          <button className="contact-submit-btn">Request A Callback</button>
        </div>

        {/* RIGHT INFO CARD */}
        <div className="contact-info">
          <h3>
            Book a Consultation <br />
            and Connect With Our <br />
            Expert Legal Advisors
          </h3>

          <p>
            Reach out via call or enquiry form—we’ll be in touch shortly.
          </p>

          <div className="contact-person">
            <h4>Connect with Expert</h4>

            <div className="contact-details">
              <div>
                <span>Write us at</span>
                <p>help@vakilkaro.co.in</p>
              </div>
              <div>
                <span>Call us at</span>
                <p>+91 98281 23489</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
