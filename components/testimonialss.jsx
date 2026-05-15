"use client";

import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import {
  FaQuoteLeft,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonials = [
  {
    name: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    text: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Sophia Turner",
    role: "Marketing Director",
    text: "Amazing experience with the team. Everything was handled professionally and on time.",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "David Miller",
    role: "Startup Founder",
    text: "Very smooth process and excellent customer support throughout the project execution.",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Emma Wilson",
    role: "Business Consultant",
    text: "Their services are reliable and efficient. I would definitely recommend them to others.",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "James Anderson",
    role: "Finance Manager",
    text: "Professional communication and transparent workflow made everything stress free.",
    img: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    name: "Olivia Brown",
    role: "HR Specialist",
    text: "Great support and excellent guidance from start to finish. Truly impressed.",
    img: "https://randomuser.me/api/portraits/women/49.jpg",
  },
  {
    name: "Liam Johnson",
    role: "CEO, TechCorp",
    text: "Quick responses and quality work delivery exceeded our expectations completely.",
    img: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Ava Martinez",
    role: "Operations Head",
    text: "Everything was perfectly organized and handled with professionalism and care.",
    img: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    name: "Noah Williams",
    role: "Project Manager",
    text: "Highly recommended for businesses looking for reliable and modern solutions.",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

/* CUSTOM ARROWS */

const PrevArrow = ({ onClick }) => {
  return (
    <button className="testimonials-arrow left" onClick={onClick}>
      <FaArrowLeft />
    </button>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button className="testimonials-arrow right" onClick={onClick}>
      <FaArrowRight />
    </button>
  );
};

const Testimonials = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonials-section py-5">
      <div className="container-xxl ">
        <div className="section-wrapper">
          <div className="text-center testimonials-heading">
            <h2>
              What our Clients are <br />
              saying about us!
            </h2>
          </div>
          {/* SLIDER */}
          <Slider {...settings}>

            {testimonials.map((item, index) => (

              <div key={index} className="testimonials-slide">

                <div className="testimonials-card">

                  {/* QUOTE */}
                  <div className="testimonials-quote">
                    <FaQuoteLeft />
                  </div>

                  {/* TEXT */}
                  <p className="testimonials-text">
                    {item.text}
                  </p>

                  {/* LINE */}
                  <div className="testimonials-line"></div>

                  {/* USER */}
                  <div className="testimonials-user">

                    <img src={item.img} alt={item.name} />

                    <div>
                      <h4>{item.name}</h4>
                      <span>{item.role}</span>
                    </div>

                  </div>

                </div>

              </div>

            ))}

          </Slider>


        </div>
      </div>

    </section>
  );
};

export default Testimonials;