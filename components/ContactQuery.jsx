"use client";

import React, { useState } from "react";
// import "./ContactQuery.css";

const ContactQuery = () => {

    const [formData, setFormData] = useState({
        name: "",
        location: "",
        email: "",
        phone: "",
        concern: "",
    });

    const [loading, setLoading] = useState(false);

    /* ✅ Input Change */
    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    /* ✅ Submit Form */
    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const response = await fetch(
                "http://localhost/blog_system/send-mail.php",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        ...formData,

                        /* ✅ Current Page URL */
                        slug: window.location.href,
                    }),
                }
            );

            const data = await response.json();

            if (data.success) {

                alert("Query Sent Successfully ✅");

                setFormData({
                    name: "",
                    location: "",
                    email: "",
                    phone: "",
                    concern: "",
                });

            } else {

                alert(data.message);
            }

        } catch (error) {

            console.log(error);

            alert("Server Error");

        } finally {

            setLoading(false);
        }
    };

    return (
        <section className="contact-section pt-5">
            <div className="container-xxl">

                <div className="contact-wrapper">

                    {/* LEFT FORM */}
                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <h2>Let’s Solve Your Legal Queries</h2>

                        <div className="row g-4 mb-4">

                            <div className="col-md-6">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="text"
                                    placeholder="Location"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        </div>

                        <div className="row g-4 mb-4">

                            <div className="col-md-6">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        </div>

                        <textarea
                            placeholder="About Your Concern"
                            name="concern"
                            value={formData.concern}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <div className="form-bottom">

                            <label className="checkbox">

                                <input
                                    type="checkbox"
                                    required
                                />

                                <span>
                                    By sending this form, you agree to our{" "}
                                    <a href="#">Privacy Policy</a>
                                </span>

                            </label>

                        </div>

                        <button
                            className="contact-submit-btn"
                            type="submit"
                            disabled={loading}
                        >
                            {
                                loading
                                    ? "Sending..."
                                    : "Request A Callback"
                            }
                        </button>

                    </form>

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
            </div>
        </section>
    );
};

export default ContactQuery;