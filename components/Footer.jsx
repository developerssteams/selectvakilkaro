import React from "react";
// import "./Footer.css";

const Footer = () => {
  return (
    <div className="fo">
      <footer className="footer">
        <div className="footer-container">

          {/* LEFT */}
          <div className="footer-brand">
            <div className="logo">
              Vakil<span>Karo</span>
              <small>ISO Certified 9001:2008</small>
            </div>

            <p>
              Trusted by industry leaders, VakilKaro delivers excellence.
              Recognized by Muthoot Finance, Kotak Mahindra Bank, and Dainik
              Bhaskar for outstanding services.
            </p>

            <div className="socials">
              <span>f</span>
              <span>◯</span>
              <span>🐦</span>
              <span>in</span>
            </div>
          </div>

          {/* COMPANY */}
          <div className="footer-col">
            <h4>COMPANY</h4>
            <ul>
              <li>About Us</li>
              <li>News</li>
              <li>Blogs</li>
              <li>Associate Partner</li>
              <li>Talk to an Expert</li>
            </ul>
          </div>

          {/* REGISTRATION */}
          <div className="footer-col">
            <h4>REGISTRATION SERVICES</h4>
            <ul>
              <li>Startup Kit</li>
              <li>NGO Combo</li>
              <li>OPC Registration</li>
              <li>LLP Registration</li>
              <li>FPC Registration</li>
              <li>MFC Registration</li>
              <li>NGO King</li>
              <li>NBFC Registration</li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className="footer-col">
            <h4>LEGAL SERVICES</h4>
            <ul>
              <li>Drafting of an Agreements</li>
              <li>Legal Notice</li>
              <li>Rent Agreement</li>
              <li>Divorce Petition</li>
              <li>Marriage Registration</li>
              <li>Consumer Complaints</li>
              <li>Motor Accidental Claims</li>
              <li>Lawyer’s Appointment</li>
            </ul>
          </div>

          {/* LINKS */}
          <div className="footer-col">
            <h4>USEFUL LINKS</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>Refund Policy</li>
              <li>Pricing Policy</li>
              <li>Cancelation Policy</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Copyright by IK Developers. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
