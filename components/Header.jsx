"use client"
import React, { useState, useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "bootstrap/dist/css/bootstrap.min.css";

import Link from "next/link";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1200, once: false });
    }, []);

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
           

            <header className="rk-header">
                <div className="rk-box">
                    {/* Logo */}
                    <div className="rk-left">
                        <Link href="/">
                            <img src="/vakilkaro.png" alt="logo" className="rk-logo" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="rk-nav-desktop">
                        <div className="rk-menu-item"><a href="#">About Us</a></div>
                        <div className="rk-menu-item">
                            <Link href="/verified">Verified Services</Link>
                        </div>
                        <div className="rk-menu-item"><a href="#">Marketplace</a></div>
                        <div className="rk-menu-item"><a href="#">Learning</a></div>
                        <div className="rk-menu-item pill-btn"><a href="#">Become Partner</a></div>
                        <div className="rk-menu-item pill-btn"><a href="#">Contact Us</a></div>
                    </nav>

                    {/* Right Section */}
                    <div className="rk-right-desktop">
                        <div className="rk-search-box">
                            <input
                                type="text"
                                placeholder="Search Services"
                                className="rk-search-input"
                            />
                            <i className="ri-search-line rk-search-icon"></i>
                        </div>
                        <button className="rk-login-btn">Log In</button>
                    </div>

                    {/* Toggle Button - IMPROVED VERSION */}
                    <button 
                        className={`rk-toggle-btn ${menuOpen ? "active" : ""}`} 
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        <span className="toggle-icon">
                            <span className="toggle-line"></span>
                            <span className="toggle-line"></span>
                            <span className="toggle-line"></span>
                        </span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`rk-mobile-menu ${menuOpen ? "open" : ""}`}>
                    <div className="mobile-menu-content">
                        <div className="mobile-search-box">
                            <input
                                type="text"
                                placeholder="Search Services"
                                className="rk-search-input"
                            />
                            <i className="ri-search-line rk-search-icon"></i>
                        </div>

                        <nav className="rk-nav-mobile">
                            <div className="rk-menu-item"><a href="#" onClick={closeMenu}>About</a></div>
                            <div className="rk-menu-item"><Link href="/verified" onClick={closeMenu}>Verified Services</Link></div>
                            <div className="rk-menu-item"><a href="#" onClick={closeMenu}>Marketplace</a></div>
                            <div className="rk-menu-item"><a href="#" onClick={closeMenu}>Learning</a></div>
                            <div className="rk-menu-item"><a href="#" onClick={closeMenu}>Become Partner</a></div>
                            <div className="rk-menu-item"><a href="#" onClick={closeMenu}>Contact Us</a></div>
                        </nav>

                        <button className="rk-login-btn mobile-login-btn" onClick={closeMenu}>
                            Log In
                        </button>
                    </div>
                </div>

                {/* Overlay */}
                {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
            </header>
            
            
        </>
    );
}

export default Header;