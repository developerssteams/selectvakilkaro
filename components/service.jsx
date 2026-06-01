
'use client';

import React, { useEffect, useState } from 'react';
import './service.css';
import { useParams } from 'next/navigation';
import Steps from "@/components/Steps";
import { Row, Col } from "react-bootstrap";


const ServicePage = () => {

    const { slug } = useParams();

    const [service, setService] = useState(null);

    const [reviews, setReviews] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);
    const [faqs, setFaqs] = useState([]);

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    /*
    |--------------------------------------------------------------------------
    | BODY CLASS
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        document.body.classList.add('service-page-bg');

        return () => {

            document.body.classList.remove('service-page-bg');

        };

    }, []);

    /*
    |--------------------------------------------------------------------------
    | FETCH SERVICE DATA
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        const fetchService = async () => {

            try {

                setLoading(true);
                setError(null);

                // Service API
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/service/${slug}`
                );

                const result = await response.json();

                if (!response.ok) {

                    throw new Error(
                        result.message || 'Service fetch failed'
                    );

                }

                if (result.status) {

                    setService(result.data);

                    setReviews(result.data.reviews || []);

                    // FAQ API
                    try {

                        const faqResponse = await fetch(
                            `${process.env.NEXT_PUBLIC_API_URL}/service-faqs/${result.data.id}`
                        );

                        const faqResult = await faqResponse.json();

                        if (faqResult.status) {

                            setFaqs(faqResult.faqs || []);

                        }

                    } catch (faqError) {

                        console.log('FAQ Error:', faqError);

                    }

                } else {

                    setError('Service Not Found');

                }

            } catch (err) {

                console.log(err);

                setError('Something went wrong');

            } finally {

                setLoading(false);

            }

        };

        if (slug) {

            fetchService();

        }

    }, [slug]);

    /*
    |--------------------------------------------------------------------------
    | ACTIVE SECTION SCROLL
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        if (!service?.sections?.length) return;

        const sections =
            document.querySelectorAll('.service-content-block');

        const navLinks =
            document.querySelectorAll('.service-nav-link');

        const handleScroll = () => {

            let currentSection = '';

            sections.forEach((section) => {

                const top =
                    section.offsetTop - 200;

                const height =
                    section.clientHeight;

                if (
                    window.scrollY >= top &&
                    window.scrollY < top + height
                ) {

                    currentSection =
                        section.getAttribute('id');

                }

            });

            navLinks.forEach((link) => {

                link.classList.remove('active');

                if (
                    link.getAttribute('href') ===
                    `#${currentSection}`
                ) {

                    link.classList.add('active');

                }

            });

        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {

            window.removeEventListener(
                'scroll',
                handleScroll
            );

        };

    }, [service]);

    /*
    |--------------------------------------------------------------------------
    | LOADING
    |--------------------------------------------------------------------------
    */

    if (loading) {

        return (

            <div className="container-xxl py-5 text-center">

                <h3>Loading service...</h3>

            </div>

        );

    }

    /*
    |--------------------------------------------------------------------------
    | ERROR
    |--------------------------------------------------------------------------
    */

    if (error) {

        return (

            <div className="container-xxl py-5 text-center">

                <h3>{error}</h3>

            </div>

        );

    }

    /*
    |--------------------------------------------------------------------------
    | NO SERVICE
    |--------------------------------------------------------------------------
    */

    if (!service) {

        return null;

    }

    return (

        <>

            {/* HERO SECTION */}

            <section className="service-detail">

                <div className="container-xxl">

                    <div className="service-detail-card">

                        <div className="row align-items-center">

                            {/* LEFT */}

                            <div className="col-lg-7 mb-4 mb-lg-0">

                                <h1 className="service-title">

                                    {service?.name}

                                </h1>

                                <div
                                    className="service-description"
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            service?.short_description || ''
                                    }}
                                />

                                {/* BULLETS */}

                                <div className="service-bullets mt-4">

                                    {service?.service_banner_bullets?.length > 0 ? (

                                        service.service_banner_bullets.map(
                                            (item, index) => (

                                                <div
                                                    key={index}
                                                    className="bullet-item"
                                                >

                                                    ✔ {item}

                                                </div>

                                            )
                                        )

                                    ) : (

                                        <div className="bullet-item">

                                            No Bullet Points

                                        </div>

                                    )}

                                </div>

                                {/* MILESTONES */}

                                <div className="service-milestones">

                                    <div className="milestone-box">

                                        <i className="fa fa-star"></i>

                                        <div className="service-detail-milestone">

                                            <h2>4.9/5 Rating</h2>

                                            <p>500+ Google Reviews</p>

                                        </div>

                                    </div>

                                    <div className="milestone-box">

                                        <i className="fa fa-star"></i>

                                        <div className="service-detail-milestone">

                                            <h2>10,000+</h2>

                                            <p>Registrations Completed</p>

                                        </div>

                                    </div>

                                    <div className="milestone-box">

                                        <i className="fa fa-star"></i>

                                        <div className="service-detail-milestone">

                                            <h2>15,000+</h2>

                                            <p>Entrepreneurs Trusted Us</p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* RIGHT FORM */}

                            <div className="col-lg-5">

                                <div className="service-detail-from">

                                    <div className="form-card">

                                        <div className="logo-box">

                                            <img
                                                src="https://www.vakilkaro.com/images/Images/logo/Logo.png"
                                                alt="logo"
                                            />

                                        </div>

                                        <p className="small-text">

                                            {service?.starting_price_heading}

                                            <span>

                                                {service?.starting_price}

                                            </span>

                                        </p>

                                        <h2>

                                            Get started with
                                            <strong>
                                                {' '}your phone number
                                            </strong>

                                        </h2>

                                        <div className="phone-wrapper">

                                            <div className="country-code">

                                                +91

                                            </div>

                                            <input
                                                type="text"
                                                className="form-control phone-input"
                                                placeholder="ENTER YOUR PHONE NUMBER"
                                            />

                                        </div>

                                        <button className="service-from-submit-btn">

                                            SUBMIT YOUR QUERY

                                        </button>

                                        <p className="footer-text">

                                            By continuing you agree to our

                                            <a href="#">
                                                {' '}privacy policy
                                            </a>

                                            and

                                            <a href="#">
                                                {' '}terms of use
                                            </a>

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* REVIEWS */}

            <section className="service-review">

                <div className="container-xxl">

                    <div className="row">

                        <div className="col-lg-8 text-center mx-auto">

                            <h2 className="review-heading">

                                ISO Accredited & Google-Trusted — Vakilkaro

                            </h2>

                        </div>

                    </div>

                    <div className="review-slider-wrapper">

                        {reviews?.length > 0 ? (

                            reviews.map((item) => (

                                <div
                                    key={item.id}
                                    className="review-card"
                                >

                                    <div className="review-stars">

                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>

                                    </div>

                                    <p className="review-text">

                                        {item.description}

                                    </p>

                                    <h4 className="review-user">

                                        {item.name}

                                    </h4>

                                </div>

                            ))

                        ) : (

                            <div className="text-center w-100 py-5">

                                <h4>No Reviews Found</h4>

                            </div>

                        )}

                    </div>

                </div>

            </section>
            <section className="promo-banner-section">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-md-8">

                            <div className="promo-main-card">

                                <div className="promo-content">

                                    <h2>
                                        {service?.showcase_description}
                                    </h2>

                                    <a href="#" className="promo-btn">
                                        Know More
                                    </a>

                                </div>

                                <div className="promo-image">

                                    <img src="announce.png" alt="Megaphone" />

                                </div>

                            </div>

                        </div>
                        <div className="col-md-4">

                            <div className="promo-offer-card">

                                <div>
                                    <h3>Showcase</h3>

                                    <p>
                                        Get inspired by the creative ways
                                        our customers attract talent with
                                        Homerun.
                                    </p>
                                </div>

                                <div className="offer-price">
                                    <span>50%</span>
                                    OFF
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <Steps />

            {/* STICKY NAVBAR */}

            {service?.sections?.length > 0 && (

                <section className="service-sticky-navbar mt-5">

                    <div className="container-xxl">

                        <div className="service-nav-wrapper">

                            {service.sections.map((item) => (

                                <a
                                    key={item.id}
                                    href={`#${item.section_slug}`}
                                    className="service-nav-link"
                                >

                                    {item.menu_title}

                                </a>

                            ))}

                        </div>

                    </div>

                </section>

            )}

            {/* CONTENT SECTION */}

            <section className="service-content-section">

                <div className="container-xxl">

                    {service?.sections?.length > 0 ? (

                        service.sections.map((section) => (

                            <div
                                key={section.id}
                                id={section.section_slug}
                                className="service-content-block"
                            >

                                <div
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            section.description || ''
                                    }}
                                />

                            </div>

                        ))

                    ) : (

                        <div className="text-center py-5">

                            <h4>No Sections Found</h4>

                        </div>

                    )}

                </div>

            </section>

            <section className="faq-section pt-5">
                <div className="container-xxl">

                    <div className="faq-main">

                        <Row className="align-items-center">

                            {/* LEFT CONTENT */}

                            <Col lg={5}>

                                <div className="faq-left">

                                    <h1>
                                        Frequently <br />
                                        <span>Asked Questions</span>
                                    </h1>

                                    <p className="faq-subtitle">
                                        Find answers to the most common questions related
                                        to this service.
                                    </p>

                                </div>

                            </Col>

                            {/* RIGHT FAQ */}

                            <Col lg={7}>

                                <div className="faq-container">

                                    {faqs?.length > 0 ? (

                                        faqs.map((faq, index) => (

                                            <div
                                                key={faq.id}
                                                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                                            >

                                                <div
                                                    className="faq-question"
                                                    onClick={() => toggleFAQ(index)}
                                                >

                                                    <span className="qus">
                                                        {faq.question}
                                                    </span>

                                                    <span className="faq-icon">
                                                        {activeIndex === index ? "−" : "+"}
                                                    </span>

                                                </div>

                                                {activeIndex === index && (

                                                    <div
                                                        className="faq-answer"
                                                        dangerouslySetInnerHTML={{
                                                            __html: faq.answer
                                                        }}
                                                    />

                                                )}

                                            </div>

                                        ))

                                    ) : (

                                        <div className="text-center py-4">

                                            <h5>No FAQs Found</h5>

                                        </div>

                                    )}

                                </div>

                            </Col>

                        </Row>

                    </div>

                </div>
            </section>

        </>

    );

};

export default ServicePage;
