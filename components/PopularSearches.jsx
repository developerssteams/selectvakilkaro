import React from "react";
import "../App.css";

function PopularSearches() {
  const searches = [
    "Partnership", "Limited Liability Partnership", "Digital Signature", "Copyright Registration",
    "Unified Portal", "PAN Card Download", "Flipkart Seller", "Caste Certificate", "IAY",
    "Udyog Aadhaar", "PF Withdrawal", "Instant PAN Card", "E PAN Card", "Income Certificate",
    "Marriage Certificate", "Passport Renewal", "MSME Registration", "Experience Certificate",
    "Trademark Status", "Trade License", "eMitra", "Resignation Letter Format", "Ration Card", "LLP Compliance", "Form 16",
    "eAadhaar Download", "Linking Aadhaar To Bank Accounts", "mAadhaar",
    "PAN Card Apply"
  ];

  return (
    <section className="popular-searches container my-5">
      <div className="popular-box">
        <h3 className="popular-heading">Popular Searches</h3>
        <div className="search-tags">
          {searches.map((item, index) => (
            <a href="#" key={index} className="search-tag">{item}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularSearches;
