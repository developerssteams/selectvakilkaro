"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar_Section.css";


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min.js");

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

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
                        {/* Logo */}
                        <div className="rk-left">
                            <Link href="/">
                                <img src="/vakilkaro.png" alt="logo" className="rk-logo" />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        {/* Desktop Navigation */}
                        <nav className="rk-nav-desktop">
                            <div className="rk-menu-item">
                                <a href="#">Home</a>
                            </div>

                            {/* VERIFIED MENU WRAPPER */}
                            <div
                                className="verified-mega-wrapper"
                                onMouseEnter={() => !isMobile && setActiveMenu("verified")}
                                onMouseLeave={() => !isMobile && setActiveMenu(null)}
                            >

                                <div className="rk-menu-item verified-menu-trigger">
                                    <Link href="">Verified Services</Link>
                                </div>

                                {/* Desktop Mega Menu Popup */}
                                {activeMenu === "verified" && !isMobile && (
                                    <div className="verified-mega-menu">
                                        <div className="mega-menu-content">

                                            {/* LEFT MENU */}
                                            <div className="mega-sidebar">

                                                <div className="sidebar-item active">
                                                    <span>Registrations</span>
                                                    <span>›</span>
                                                </div>

                                                <div className="sidebar-item">
                                                    <span>License/Certificate</span>
                                                    <span>›</span>
                                                </div>

                                                <div className="sidebar-item">
                                                    <span>IP& Trademark</span>
                                                    <span>›</span>
                                                </div>

                                                <div className="sidebar-item">
                                                    <span>Income Tax Filing</span>
                                                    <span>›</span>
                                                </div>

                                                <div className="sidebar-item">
                                                    <span>GST Filing</span>
                                                    <span>›</span>
                                                </div>

                                                <div className="sidebar-item">
                                                    <span>ROC & Compliance</span>
                                                    <span>›</span>
                                                </div>

                                                <div className="sidebar-item">
                                                    <span>Funding/IPO</span>
                                                    <span>›</span>
                                                </div>

                                                <div className="sidebar-item">
                                                    <span>Legal Drafting & Notices</span>
                                                    <span>›</span>
                                                </div>

                                            </div>

                                            {/* RIGHT CONTENT */}
                                            <div className="mega-content">

                                                <div className="mega-link">Private Limited Company</div>
                                                <div className="mega-link">Microfinance Company</div>

                                                <div className="mega-link">Limited Liability Partnership</div>
                                                <div className="mega-link">NBFC Registration</div>

                                                <div className="mega-link">One Person Company</div>
                                                <div className="mega-link">Producer Company</div>

                                                <div className="mega-link">Partnership</div>
                                                <div className="mega-link">Public Limited Company</div>

                                                <div className="mega-link">Proprietorship</div>
                                                <div className="mega-link">Subsidiary Company</div>

                                                <div className="mega-link">NGO Registration</div>
                                                <div className="mega-link">Insurance Company</div>

                                                <div className="mega-link">Society Registration</div>

                                                <div className="mega-link">Section 8 Company</div>

                                                <div className="mega-link">Trust Registration</div>

                                            </div>

                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="rk-menu-item">
                                <a href="#">Marketplace</a>
                            </div>

                            <div className="rk-menu-item">
                                <a href="#">Learning</a>
                            </div>

                            <div className="rk-menu-item pill-btn">
                                <a href="#">Become Partner</a>
                            </div>

                            <div className="rk-menu-item pill-btn">
                                <a href="#">Contact Us</a>
                            </div>
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

                        {/* Toggle Button */}
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

                    {/* Mobile Menu */}
                    <div className={`rk-mobile-menu ${menuOpen ? "open" : ""}`}>
                        <div className="mobile-menu-content">
                            <div className="mobile-top-bar">
                                <button className="mobile-back-btn" onClick={closeMenu}>
                                    ← Back
                                </button>
                            </div>
                            <div className="mobile-search-box">
                                <input type="text" placeholder="Search Services" className="rk-search-input" />
                            </div>
                            <nav className="rk-nav-mobile">
                                <div className="rk-menu-item"><a href="#" onClick={closeMenu}>Home</a></div>
                                <div
                                    className="rk-menu-item mobile-verified-item"
                                    onClick={() => handleMenu("verified")}
                                >
                                    <span>Verified Services</span>
                                    <span className="mobile-arrow">{activeMenu === "verified" ? "▲" : "▼"}</span>
                                </div>
                                {activeMenu === "verified" && (
                                    <div className="mobile-mega-menu">
                                        {renderMobileMenu()}
                                    </div>
                                )}
                                <div className="rk-menu-item"><a href="#" onClick={closeMenu}>Marketplace</a></div>
                                <div className="rk-menu-item"><a href="#" onClick={closeMenu}>Learning</a></div>
                                <div className="rk-menu-item"><a href="#" onClick={closeMenu}>Become Partner</a></div>
                                <div className="rk-menu-item"><a href="#" onClick={closeMenu}>Contact Us</a></div>
                            </nav>
                            <button className="rk-login-btn mobile-login-btn" onClick={closeMenu}>Log In</button>
                        </div>
                    </div>

                    {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
                </div>
            </header>

            {/* Desktop Mega Menu Popup */}

            {/* {activeMenu === "verified" && !isMobile && (
                <div className="verified-mega-menu">
                    <div className="mega-menu-content">


                        <div className="mega-sidebar">

                            <div className="sidebar-item active">
                                <span>Registrations</span>
                                <span>›</span>
                            </div>

                            <div className="sidebar-item">
                                <span>License/Certificate</span>
                                <span>›</span>
                            </div>

                            <div className="sidebar-item">
                                <span>IP& Trademark</span>
                                <span>›</span>
                            </div>

                            <div className="sidebar-item">
                                <span>Income Tax Filing</span>
                                <span>›</span>
                            </div>

                            <div className="sidebar-item">
                                <span>GST Filing</span>
                                <span>›</span>
                            </div>

                            <div className="sidebar-item">
                                <span>ROC & Compliance</span>
                                <span>›</span>
                            </div>

                            <div className="sidebar-item">
                                <span>Funding/IPO</span>
                                <span>›</span>
                            </div>

                            <div className="sidebar-item">
                                <span>Legal Drafting & Notices</span>
                                <span>›</span>
                            </div>

                        </div>


                        <div className="mega-content">

                            <div className="mega-link">Private Limited Company</div>
                            <div className="mega-link">Microfinance Company</div>

                            <div className="mega-link">Limited Liability Partnership</div>
                            <div className="mega-link">NBFC Registration</div>

                            <div className="mega-link">One Person Company</div>
                            <div className="mega-link">Producer Company</div>

                            <div className="mega-link">Partnership</div>
                            <div className="mega-link">Public Limited Company</div>

                            <div className="mega-link">Proprietorship</div>
                            <div className="mega-link">Subsidiary Company</div>

                            <div className="mega-link">NGO Registration</div>
                            <div className="mega-link">Insurance Company</div>

                            <div className="mega-link">Society Registration</div>

                            <div className="mega-link">Section 8 Company</div>

                            <div className="mega-link">Trust Registration</div>

                        </div>

                    </div>
                </div>
            )} */}
        </>
    );

    // Mobile Menu Render Function
    function renderMobileMenu() {
        return (
            <div className="mobile-category-menu">
                <div className="mobile-category-item">
                    <h4 onClick={() => handleSubmenu("registration")}>Registrations {"+"}</h4>
                    <div className="mobile-submenu">
                        <p>Private Limited Company</p>
                        <p>Limited Liability Partnership</p>
                        <p>One Person Company</p>
                        <p>Partnership</p>
                        <p>Proprietorship</p>
                        <p>NGO Registration</p>
                        <p>Section 8 Company</p>
                        <p>Trust Registration</p>
                        <p>NBFC Registration</p>
                        <p>Public Limited Company</p>
                    </div>
                </div>
                <div className="mobile-category-item">
                    <h4>License & Certificate {"+"}</h4>
                    <div className="mobile-submenu">
                        <p>Startup India Certificate</p>
                        <p>FSSAI Registration</p>
                        <p>ISO Certificate</p>
                        <p>BIS Registration</p>
                        <p>12A & 80G Registration</p>
                    </div>
                </div>
                <div className="mobile-category-item">
                    <h4>IP & Trademark {"+"}</h4>
                    <div className="mobile-submenu">
                        <p>Trademark Registration</p>
                        <p>Copyright Registration</p>
                        <p>Patent Registration</p>
                        <p>Design Registration</p>
                    </div>
                </div>
                <div className="mobile-category-item">
                    <h4>Tax & GST {"+"}</h4>
                    <div className="mobile-submenu">
                        <p>Income Tax Filing</p>
                        <p>GST Registration</p>
                        <p>GST Return Filing</p>
                        <p>Professional Tax</p>
                    </div>
                </div>
                <div className="mobile-category-item">
                    <h4>ROC & Compliance {"+"}</h4>
                    <div className="mobile-submenu">
                        <p>Annual Compliance</p>
                        <p>Director Change</p>
                        <p>MOA Alteration</p>
                        <p>EPF/ESI Return</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;