import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "./News.css";

const data = [
    {
        img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
        date: "30 Nov 2021",
        title: "New technology awareness.",
        desc: "Delightful remarkably mr on announcing themselves entreaties favourable.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Dainik_Bhaskar_Logo.png"
    },
    {
        img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
        date: "30 Nov 2021",
        title: "New technology awareness.",
        desc: "Delightful remarkably mr on announcing themselves entreaties favourable.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/The_Times_of_India_logo.png"
    },
    {
        img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
        date: "30 Nov 2021",
        title: "New technology awareness.",
        desc: "Delightful remarkably mr on announcing themselves entreaties favourable.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Dainik_Bhaskar_Logo.png"
    },
    {
        img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        date: "30 Nov 2021",
        title: "New technology awareness.",
        desc: "Delightful remarkably mr on announcing themselves entreaties favourable.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/The_Times_of_India_logo.png"
    }
];

const NewsSection = () => {
    return (
        <section className="news-section">
            <Container>
                {/* Heading */}
                <div className="news-heading text-center">
                    <h2>
                        VakilKaro <span>In News</span>
                    </h2>
                    <p className="mx-auto" style={{ maxWidth: "600px" }}>
                        We've simplified legal assistance for you. From consultation to resolution,
                        our process is designed to be seamless and efficient.
                    </p>
                </div>

                {/* Grid */}
                <Row className="news-grid justify-content-center mt-5">
                    {data.map((item, i) => (
                        <Col key={i} lg={3} md={6} sm={12} className="mb-4">
                            <div className="news-card">
                                {/* IMAGE WRAPPER */}
                                <div className="news-img-wrapper">
                                    <img src={`${item.img}?auto=format&fit=crop&w=800&q=80`} alt="news" />
                                    
                                    {/* DATE BADGE */}
                                    <div className="news-date">
                                        30 <br /> Nov <br /> 2021
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="news-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <span className="news-read">Read More</span>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default NewsSection;