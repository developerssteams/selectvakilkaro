import React from "react";
// import "./StartupDocument.css";

const StartupDocument = () => {

  const documents = [
    "Aadhar Card",
    "PAN Card",
    "Passport-size photographs",
    "Recent utility bills or bank statements",
    "Mobile Number",
    "Email ID",
    "Company Name",
    "Office Address Proof"
  ];

  return (
    <section className="startupdocument-section">
      <div className="startupdocument-container">

        <h2 className="startupdocument-heading">
          Documents <span>You’ll Need.</span>
        </h2>

        <div className="startupdocument-card">
          <div className="startupdocument-grid">
            {documents.map((item, index) => (
              <div className="startupdocument-item" key={index}>
                <div className="startupdocument-icon">📄</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default StartupDocument;