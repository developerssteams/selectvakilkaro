"use client";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const TawkTo = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsApp = () => {
    if (!name.trim()) return alert("Enter your name");
    if (!email.trim()) return alert("Enter your email");
    if (!message.trim()) return alert("Enter your message");

    const phone = "919079225635";

    const fullMessage = `${name}
${email}
${message}`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(fullMessage)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* FLOATING LIVE CHAT BUTTON */}
      <div className="wa-launch-btn" onClick={() => setOpen(!open)}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
        <span>Live Chat</span>
      </div>

      {/* CHAT BOX */}
      <div className={`wa-widget-box ${open ? "open" : ""}`}>
        {/* Header */}
        <div className="wa-header">
          <span className="back-arrow" onClick={() => setOpen(false)}>
            ❮
          </span>
          <div>
            <h6 className="mb-0">WhatsApp Support</h6>
            <small>Typically replies instantly</small>
          </div>
        </div>

        {/* Body */}
        <div className="wa-body">
          <div className="wa-new-chat-box">
            <h6>Start a conversation</h6>
            <p>We’ll reply on WhatsApp</p>
          </div>

          {/* NAME */}
          {/* <label className="form-label">Your Name</label> */}
          <input
            type="text"
            className="form-control wa-input"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          {/* EMAIL */}
          {/* <label className="form-label mt-3">Your Email</label> */}
          <input
            type="email"
            className="form-control wa-input"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          {/* MESSAGE */}
          {/* <label className="form-label mt-3">Your Message</label> */}
          <textarea
            className="form-control wa-input"
            rows="3"
            placeholder="How can we help you?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button className="wa-send-btn" onClick={sendWhatsApp}>
            💬 Start Chat on WhatsApp
          </button>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        /* Floating Button */
        .wa-launch-btn {
          position: fixed;
          bottom: 40px;
          right: 25px;
          background: #25D366;
          color: #fff;
          padding: 12px 18px;
          border-radius: 40px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(0,0,0,.3);
          z-index: 9999;
          transition: .3s;
        }
        .wa-launch-btn:hover {
          transform: scale(1.05);
        }
        .wa-launch-btn img {
          width: 26px;
          height: 26px;
        }
        .wa-launch-btn span {
          font-weight: 600;
        }

        /* Chat Box */
        .wa-widget-box {
          position: fixed;
          bottom: 90px;
          right: 30px;
          width: 360px;
          height: 520px;
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(0,0,0,.25);
          overflow: hidden;
          opacity: 0;
          transform: translateY(120%);
          transition: .4s ease;
          z-index: 99999;
        }
        .wa-widget-box.open {
          opacity: 1;
          transform: translateY(0);
        }

        /* Header */
        .wa-header {
          background: #075E54;
          color: #fff;
          padding: 14px;
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .back-arrow {
          font-size: 22px;
          cursor: pointer;
        }
        .wa-header small {
          font-size: 12px;
          opacity: .9;
        }

        /* Body */
        .wa-body {
          padding: 16px;
          height: calc(100% - 60px);
          overflow-y: auto;
        }

        .wa-new-chat-box {
          background: #f1fdf6;
          padding: 12px;
          border-radius: 12px;
          margin-bottom: 15px;
          border-left: 4px solid #25D366;
        }

        .wa-input {
          border-radius: 10px;
          padding: 10px;
        }

        .wa-send-btn {
          width: 100%;
          margin-top: 15px;
          padding: 12px;
          border-radius: 30px;
          border: none;
          background: #25D366;
          color: #fff;
          font-weight: bold;
          font-size: 16px;
          cursor: pointer;
        }
        .wa-send-btn:hover {
          background: #1ebe5d;
        }
      `}</style>
    </>
  );
};

export default TawkTo;
