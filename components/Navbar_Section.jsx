"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// import "bootstrap/dist/css/bootstrap.min.css";

function Navbar_Section() {
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

    const handleMenu = (menu) => {
        if (isMobile) {
            setActiveMenu(activeMenu === menu ? null : menu);
        }
    };

    return (
        <section className="category-section">
            <div className="container-fluid">
                <div className="category-box">

                    {/* NAV ITEMS */}
                    <ul className="category-list">
                        <li
                            onMouseEnter={() => !isMobile && setActiveMenu("registration")}
                            onMouseLeave={() => !isMobile && setActiveMenu(null)}
                            onClick={() => handleMenu("registration")}
                        >
                            Registrations
                        </li>

                        <li
                            onMouseEnter={() => !isMobile && setActiveMenu("license")}
                            onMouseLeave={() => !isMobile && setActiveMenu(null)}
                            onClick={() => handleMenu("license")}
                        >
                            License/Certificate
                        </li>

                        <li
                            onMouseEnter={() => !isMobile && setActiveMenu("ip")}
                            onMouseLeave={() => !isMobile && setActiveMenu(null)}
                            onClick={() => handleMenu("ip")}
                        >
                            IP & Trademark
                        </li>

                        <li
                            onMouseEnter={() => !isMobile && setActiveMenu("tax")}
                            onMouseLeave={() => !isMobile && setActiveMenu(null)}
                            onClick={() => handleMenu("tax")}
                        >
                            Income Tax Filing
                        </li>

                        <li
                            onMouseEnter={() => !isMobile && setActiveMenu("gst")}
                            onMouseLeave={() => !isMobile && setActiveMenu(null)}
                            onClick={() => handleMenu("gst")}
                        >
                            GST Filing
                        </li>

                        <li
                            onMouseEnter={() => !isMobile && setActiveMenu("roc")}
                            onMouseLeave={() => !isMobile && setActiveMenu(null)}
                            onClick={() => handleMenu("roc")}
                        >
                            ROC & Compliance
                        </li>

                        <li
                            onMouseEnter={() => !isMobile && setActiveMenu("funding")}
                            onMouseLeave={() => !isMobile && setActiveMenu(null)}
                            onClick={() => handleMenu("funding")}
                        >
                            Funding/IPO
                        </li>

                        <li
                            onMouseEnter={() => !isMobile && setActiveMenu("legal")}
                            onMouseLeave={() => !isMobile && setActiveMenu(null)}
                            onClick={() => handleMenu("legal")}
                        >
                            Legal Drafting & Notices
                        </li>
                    </ul>

                    {/* MEGA MENU */}
                    {activeMenu && (
                        <div
                            className="mega-menu"
                            onMouseLeave={() => !isMobile && setActiveMenu(null)}
                        >
                            {/* REGISTRATION */}
                            {activeMenu === "registration" && (
                                <div className="menu-row">
                                    <div className="menu-col">
                                        <h4>Company Registration</h4>
                                        <p>Private Limited Company</p>
                                        <p>Limited Liability Partnership</p>
                                        <p>One Person Company</p>
                                        <p>Partnership</p>
                                        <p>Proprietorship</p>
                                        <p>Public Limited Company</p>
                                        <p>Subsidiary Company</p>
                                        <p>Producer Company</p>
                                    </div>
                                    <div className="menu-col">
                                        <h4>NGO & Trust</h4>
                                        <p>NGO Registration</p>
                                        <p>Society Registration</p>
                                        <p>Section 8 Company</p>
                                        <p>Trust Registration</p>
                                    </div>
                                    <div className="menu-col">
                                        <h4>Financial & NBFC</h4>
                                        <p>Microfinance Company</p>
                                        <p>NBFC Registration</p>
                                        <p>Insurance Company</p>
                                    </div>
                                    <div className="menu-col">
                                        <h4>Startup</h4>
                                        <p>Startup Registration</p>
                                    </div>
                                </div>
                            )}

                            {/* LICENSE */}
                            {activeMenu === "license" && (
                                <div className="menu-row">
                                    <div className="menu-col">
                                        <h4>Startup License</h4>
                                        <p>Startup India Certificate</p>
                                        <p>Shop & Establishment Act Registration</p>
                                        <p>Udyam Registration (MSME)</p>
                                        <p>Import Export Code</p>
                                        <p>RERA Registration</p>
                                        <p>Factory License</p>
                                        <p>Labor License</p>
                                        <p>Trade License</p>
                                        <p>BRN Registration</p>
                                    </div>
                                    <div className="menu-col">
                                        <h4>NGO License</h4>
                                        <p>12A Registration</p>
                                        <p>80G Registration</p>
                                        <p>12G and 80G Registration</p>
                                        <p>FCRA Registration</p>
                                        <p>NGO Darpan/Niti Aayog</p>
                                        <p>CSR-1 Registration</p>
                                    </div>
                                    <div className="menu-col">
                                        <h4>Food & Beverages</h4>
                                        <p>FSSAI Registration</p>
                                        <p>FSSAI License</p>
                                        <p>HALAL Registration</p>
                                        <p>Drug License</p>
                                        <p>APEDA Registration</p>
                                        <p>Liquor License</p>
                                        <p>Tobacco License</p>
                                    </div>
                                    <div className="menu-col">
                                        <h4>Quality & Standards</h4>
                                        <p>ISO Certificate</p>
                                        <p>BIS Registration</p>
                                        <p>Hallmark Registration</p>
                                        <p>ISI Mark Registration</p>
                                        <p>Ayush Certification</p>
                                        <p>CDSCO Licensing</p>
                                        <p>Make in India Registration</p>
                                    </div>
                                    <div className="menu-col">
                                        <h4>Other Licenses</h4>
                                        <p>ESI Registration</p>
                                        <p>PF Registration</p>
                                        <p>PERA Registration</p>
                                        <p>ICEGATE Registration</p>
                                        <p>LEI (Legal Entity Identifier)</p>
                                        <p>PSARA License</p>
                                        <p>PTEC Registration</p>
                                        <p>RNI Registration</p>
                                    </div>
                                </div>
                            )}

                            {/* IP & TRADEMARK */}
                            {activeMenu === "ip" && (
                                <div className="menu-row">
                                    <div className="menu-col">
                                        <h4>Trademark</h4>
                                        <p>Trademark Registration</p>
                                        <p>Expedited Trademark Registration</p>
                                        <p>Trademark Objection</p>
                                        <p>Trademark Opposition</p>
                                        <p>Trademark Counter Statement</p>
                                        <p>Trademark Renewal</p>
                                        <p>Trademark Hearing</p>
                                        <p>Trademark Transfer</p>
                                        <p>Trademark Rectification</p>
                                        <p>Trademark Protection</p>
                                    </div>
                                    <div className="menu-col">
                                        <h4>Copyright & Design</h4>
                                        <p>Copyright Registration</p>
                                        <p>Copyright Objection</p>
                                        <p>Design Registration</p>
                                        <p>Design Objection</p>
                                    </div>
                                    <div className="menu-col">
                                        <h4>Patent & Others</h4>
                                        <p>Patent Registration</p>
                                        <p>Logo Design</p>
                                    </div>
                                </div>
                            )}

                            {/* INCOME TAX */}
                            {activeMenu === "tax" && (
                                <div className="menu-row">
                                    <div className="menu-col">
                                        <h4>Tax Registration</h4>
                                        <p>Professional Tax Registration</p>
                                        <p>Form 10BD</p>
                                    </div>
                                    <div className="menu-col">
                                        <h4>ITR Filing</h4>
                                        <p>ITR-1 Return</p>
                                        <p>ITR-2 Return</p>
                                        <p>ITR-3 Return</p>
                                        <p>ITR-4 Return</p>
                                        <p>ITR-5 Return</p>
                                        <p>ITR-6 Return</p>
                                        <p>ITR-7 Return</p>
                                    </div>
                                    <div className="menu-col">
                                        <h4>Other Services</h4>
                                        <p>15CA-15CB Form</p>
                                        <p>Income Tax Notice</p>
                                        <p>Professional Tax Return</p>
                                    </div>
                                </div>
                            )}

                            {/* GST */}
                            {activeMenu === "gst" && (
                                <div className="menu-row">
                                    <div className="menu-col">
                                        <h4>GST Services</h4>
                                        <p>GST Registration</p>
                                        <p>GST Notice</p>
                                        <p>GST Return Filing</p>
                                        <p>GST Revocation</p>
                                        <p>GST LUT Form</p>
                                        <p>GST Amendment</p>
                                    </div>
                                </div>
                            )}

                            {/* ROC & COMPLIANCE */}
                            {activeMenu === "roc" && (
                                <div className="menu-row">
                                    <div className="menu-col">
                                        <h4>Compliance Services</h4>
                                        <p>Compliance Pvt Ltd.</p>
                                        <p>Compliance LLP</p>
                                        <p>Compliance OPC</p>
                                        <p>Compliance Nidhi</p>
                                        <p>Compliance Microfinance</p>
                                        <p>Compliance Partnership</p>
                                        <p>Compliance Proprietorship</p>
                                    </div>
                                    <div className="menu-col">
                                        <h4>Company Changes</h4>
                                        <p>Alteration of Capital</p>
                                        <p>Directors Change</p>
                                        <p>Shareholding Transfer</p>
                                        <p>DMAT Account-Company</p>
                                        <p>Registered Office Change</p>
                                        <p>DIR-3 KYC</p>
                                        <p>EPF Return</p>
                                    </div>
                                    <div className="menu-col">
                                        <h4>MOA/AOA Changes</h4>
                                        <p>MOA Alteration</p>
                                        <p>AOA Alteration</p>
                                        <p>LLP Closing</p>
                                        <p>Dormant Status Filing</p>
                                        <p>INC-20A Filing</p>
                                        <p>ADT-1 Filing</p>
                                    </div>
                                </div>
                            )}

                            {/* FUNDING/IP0 */}
                            {activeMenu === "funding" && (
                                <div className="menu-row">
                                    <div className="menu-col">
                                        <h4>Funding Services</h4>
                                        <p>Pitch Deck Preparation</p>
                                        <p>Business Valuation Report</p>
                                        <p>Financial Projections & Modelling</p>
                                        <p>Investor Documentation</p>
                                        <p>Due Diligence Assistance</p>
                                        <p>Equity Structuring & Cap Table Management</p>
                                    </div>
                                    <div className="menu-col">
                                        <h4>Loan Assistance</h4>
                                        <p>Startup India Seed Fund Assistance</p>
                                        <p>SIDBI/MSME/NABARD Loan</p>
                                        <p>CGTMSE Loan (Collateral Free)</p>
                                    </div>
                                    <div className="menu-col">
                                        <h4>IPO Services</h4>
                                        <p>IPO Readiness Assessment</p>
                                        <p>Draft Red Herring Prospectus</p>
                                        <p>SEBI Compliance</p>
                                    </div>
                                </div>
                            )}

                            {/* LEGAL DRAFTING */}
                            {activeMenu === "legal" && (
                                <div className="menu-row">
                                    <div className="menu-col">
                                        <h4>Business Agreements</h4>
                                        <p>Partnership Deed</p>
                                        <p>Founder's Agreement</p>
                                        <p>Shareholders' Agreement (SHA)</p>
                                        <p>Share Subscription Agreement (SSA)</p>
                                        <p>Joint Venture Agreement</p>
                                        <p>Franchise Agreement</p>
                                        <p>Distribution/Dealership Agreement</p>
                                        <p>Vendor/Supplier Agreement</p>
                                    </div>
                                    <div className="menu-col">
                                        <h4>Legal Documents</h4>
                                        <p>Non-Disclosure Agreement (NDA)</p>
                                        <p>Service Level Agreement (SLA)</p>
                                        <p>Consultancy/Employment Contract</p>
                                        <p>Agency/Commission Agreement</p>
                                        <p>Sale Deed/Agreement to Sell</p>
                                        <p>Lease Deed/Rent Agreement</p>
                                        <p>Gift Deed</p>
                                        <p>Property Transfer Agreement</p>
                                    </div>
                                    <div className="menu-col">
                                        <h4>Corporate & Board</h4>
                                        <p>Builder-Buyer Agreement</p>
                                        <p>Power of Attorney (POA)</p>
                                        <p>Affidavits & Undertakings</p>
                                        <p>MOA & AOA</p>
                                        <p>Board Resolutions & Minutes</p>
                                        <p>Share Allotment & Transfer Deeds</p>
                                        <p>Employment & HR Policy Documents</p>
                                        <p>ESOP Policy Documents</p>
                                    </div>
                                    <div className="menu-col">
                                        <h4>Legal Notices</h4>
                                        <p>T&C/Privacy Policy</p>
                                        <p>Legal Notice under Companies Act</p>
                                        <p>Legal Notice for Recovery of Money</p>
                                        <p>Legal Notice for Breach of Contract</p>
                                        <p>Consumer Complaint Notice</p>
                                        <p>Cheque Bounce Notice (Section 138)</p>
                                        <p>Defamation/Harassment Notice</p>
                                        <p>Arbitration Agreement/Notice</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Navbar_Section;