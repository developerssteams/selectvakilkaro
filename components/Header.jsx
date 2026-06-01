
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const [activeMenu, setActiveMenu] = useState(null);

    const [isMobile, setIsMobile] = useState(false);

    const [categories, setCategories] = useState([]);

    const [services, setServices] = useState([]);

    /*
    |--------------------------------------------------------------------------
    | LOAD
    |--------------------------------------------------------------------------
    */

    useEffect(() => {

        import("bootstrap/dist/js/bootstrap.bundle.min.js");

        const checkMobile = () => {

            setIsMobile(window.innerWidth < 768);

        };

        checkMobile();

        /*
        |--------------------------------------------------------------------------
        | FETCH CATEGORIES
        |--------------------------------------------------------------------------
        */

        const fetchCategories = async () => {

            try {

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/service-categories`
                );

                const data = await res.json();

                if (data.status) {

                    setCategories(data.data);

                    /*
                    |--------------------------------------------------------------------------
                    | AUTO LOAD FIRST CATEGORY SERVICES
                    |--------------------------------------------------------------------------
                    */

                    if (data.data.length > 0) {

                        fetchServices(data.data[0].id);

                    }

                }

            } catch (error) {

                console.log("Category API Error:", error);

            }

        };

        fetchCategories();

        window.addEventListener("resize", checkMobile);

        return () => {

            window.removeEventListener("resize", checkMobile);

        };

    }, []);

    /*
    |--------------------------------------------------------------------------
    | FETCH SERVICES
    |--------------------------------------------------------------------------
    */

    const fetchServices = async (id) => {
        
        try {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/services/${id}`
            );

            const data = await res.json();

            if (data.status) {

                setServices(data.data);

            } else {

                setServices([]);

            }

        } catch (error) {

            console.log("Service API Error:", error);

        }

    };

    /*
    |--------------------------------------------------------------------------
    | TOGGLE MENU
    |--------------------------------------------------------------------------
    */

    const toggleMenu = () => {

        setMenuOpen(!menuOpen);

    };

    const closeMenu = () => {

        setMenuOpen(false);

    };

    const handleMenu = (menu) => {

        if (isMobile) {

            setActiveMenu(activeMenu === menu ? null : menu);

        }

    };

    return (

        <>

            <header className="rk-header">

                <div className="container-xxl">

                    <div className="rk-box">

                        {/* LOGO */}
                        <div className="rk-left">

                            <Link href="/">

                                <img
                                    src="/vakilkaro.png"
                                    alt="logo"
                                    className="rk-logo"
                                />

                            </Link>

                        </div>

                        {/* DESKTOP MENU */}
                        <nav className="rk-nav-desktop">

                            <div className="rk-menu-item">

                                <Link href="/">
                                    Home
                                </Link>

                            </div>

                            {/* VERIFIED SERVICES */}
                            <div
                                className="verified-mega-wrapper"
                                onMouseEnter={() =>
                                    !isMobile && setActiveMenu("verified")
                                }
                                onMouseLeave={() =>
                                    !isMobile && setActiveMenu(null)
                                }
                            >

                                <div className="rk-menu-item verified-menu-trigger">

                                    <Link href="#">
                                        Verified Services
                                    </Link>

                                </div>

                                {/* MEGA MENU */}
                                {activeMenu === "verified" && !isMobile && (

                                    <div className="verified-mega-menu">

                                        <div className="mega-menu-content">

                                            {/* LEFT CATEGORY */}
                                            <div className="mega-sidebar">

                                                {categories.map((category) => (

                                                    <div
                                                        className="sidebar-item"
                                                        key={category.id}
                                                        onMouseEnter={() =>
                                                            fetchServices(category.id)
                                                        }
                                                    >

                                                        <span>
                                                            {category.name}
                                                        </span>

                                                        <span>›</span>

                                                    </div>

                                                ))}

                                            </div>

                                            {/* RIGHT SERVICES */}
                                            <div className="mega-content">

                                                {services.length > 0 ? (

                                                    services.map((service) => (

                                                        <Link
                                                            key={service.id}
                                                            href={`/${service.slug}`}
                                                            className="mega-link"
                                                        >

                                                            {service.name}

                                                        </Link>

                                                    ))

                                                ) : (

                                                    <div className="mega-link">

                                                        No Services Found

                                                    </div>

                                                )}

                                            </div>

                                        </div>

                                    </div>

                                )}

                            </div>

                            <div className="rk-menu-item">

                                <Link href="#">
                                    Marketplace
                                </Link>

                            </div>

                            <div className="rk-menu-item">

                                <Link href="#">
                                    Learning
                                </Link>

                            </div>

                            <div className="rk-menu-item pill-btn">

                                <Link href="#">
                                    Become Partner
                                </Link>

                            </div>

                            <div className="rk-menu-item pill-btn">

                                <Link href="#">
                                    Contact Us
                                </Link>

                            </div>

                        </nav>

                        {/* RIGHT */}
                        <div className="rk-right-desktop">

                            <div className="rk-search-box">

                                <input
                                    type="text"
                                    placeholder="Search Services"
                                    className="rk-search-input"
                                />

                                <i className="ri-search-line rk-search-icon"></i>

                            </div>

                            <button className="rk-login-btn">

                                Log In

                            </button>

                        </div>

                        {/* TOGGLE */}
                        <button
                            className={`rk-toggle-btn ${menuOpen ? "active" : ""}`}
                            onClick={toggleMenu}
                        >

                            <span className="toggle-icon">

                                <span className="toggle-line"></span>
                                <span className="toggle-line"></span>
                                <span className="toggle-line"></span>

                            </span>

                        </button>

                    </div>

                    {/* MOBILE MENU */}
                    <div className={`rk-mobile-menu ${menuOpen ? "open" : ""}`}>

                        <div className="mobile-menu-content">

                            <div className="mobile-top-bar">

                                <button
                                    className="mobile-back-btn"
                                    onClick={closeMenu}
                                >

                                    ← Back

                                </button>

                            </div>

                            {/* MOBILE SEARCH */}
                            <div className="mobile-search-box">

                                <input
                                    type="text"
                                    placeholder="Search Services"
                                    className="rk-search-input"
                                />

                            </div>

                            <nav className="rk-nav-mobile">

                                <div className="rk-menu-item">

                                    <Link href="/">
                                        Home
                                    </Link>

                                </div>

                                {/* MOBILE VERIFIED */}
                                <div
                                    className="rk-menu-item mobile-verified-item"
                                    onClick={() => handleMenu("verified")}
                                >

                                    <span>
                                        Verified Services
                                    </span>

                                    <span className="mobile-arrow">

                                        {activeMenu === "verified" ? "▲" : "▼"}

                                    </span>

                                </div>

                                {/* MOBILE MENU */}
                                {activeMenu === "verified" && (

                                    <div className="mobile-mega-menu">

                                        <div className="mobile-category-menu">

                                            {categories.map((category) => (

                                                <div
                                                    className="mobile-category-item"
                                                    key={category.id}
                                                >

                                                    <h4
                                                        onClick={() =>
                                                            fetchServices(category.id)
                                                        }
                                                    >

                                                        {category.name}

                                                    </h4>

                                                    <div className="mobile-submenu">

                                                        {services.length > 0 ? (

                                                            services.map((service) => (

                                                                <Link
                                                                    key={service.id}
                                                                    href={`/${service.slug}`}
                                                                >

                                                                    <p>

                                                                        {service.name}

                                                                    </p>

                                                                </Link>

                                                            ))

                                                        ) : (

                                                            <p>
                                                                No Services Found
                                                            </p>

                                                        )}

                                                    </div>

                                                </div>

                                            ))}

                                        </div>

                                    </div>

                                )}

                                <div className="rk-menu-item">

                                    <Link href="#">
                                        Marketplace
                                    </Link>

                                </div>

                                <div className="rk-menu-item">

                                    <Link href="#">
                                        Learning
                                    </Link>

                                </div>

                                <div className="rk-menu-item">

                                    <Link href="#">
                                        Become Partner
                                    </Link>

                                </div>

                                <div className="rk-menu-item">

                                    <Link href="#">
                                        Contact Us
                                    </Link>

                                </div>

                            </nav>

                            <button
                                className="rk-login-btn mobile-login-btn"
                                onClick={closeMenu}
                            >

                                Log In

                            </button>

                        </div>

                    </div>

                    {/* OVERLAY */}
                    {menuOpen && (

                        <div
                            className="menu-overlay"
                            onClick={closeMenu}
                        ></div>

                    )}

                </div>

            </header>

        </>

    );

}

export default Header;

