import React, { useEffect, useState } from "react";
import "./Navbar_Section.css";
import Link from "next/link";

function Navbar_Section() {

    const [activeMenu, setActiveMenu] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    // ✅ Detect device
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
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
                {/* 🔥 SINGLE MEGA MENU */}
                {activeMenu && (
                    <div
                        className="mega-menu"
                        onMouseLeave={() => setActiveMenu(null)}
                    >

                        {/* REGISTRATION */}
                        {activeMenu === "registration" && (
                            <div className="menu-left">

                                <div className="menu-column">
                                    <Link href="/Startupregistration">
                                        <p>Startup Registration</p>
                                    </Link>
                                    <p>Private Limited Company</p>
                                    <p>Limited Liability Partnership</p>
                                    <p>One Person Company</p>
                                    <p>Partnership</p>
                                    <p>Proprietorship</p>
                                </div>

                                <div className="menu-column">
                                    <p>NGO Registration</p>
                                    <p>Society Registration</p>
                                    <p>Section 8 Company</p>
                                    <p>Trust Registration</p>
                                    <p>Microfinance Company</p>
                                </div>

                                <div className="menu-column">
                                    <p>NBFC Registration</p>
                                    <p>Producer Company</p>
                                    <p>Public Limited Company</p>
                                    <p>Subsidiary Company</p>
                                    <p>Insurance Company</p>
                                </div>

                            </div>
                        )}

                        {/* LICENSE */}
                        {activeMenu === "license" && (
                            <div className="menu-left">

                                <div className="menu-column">
                                    <p style={{ fontWeight: 'bold' }}>Startup License</p>
                                    <p>Startup India Certificate</p>
                                    <p>Shop & Establishment Act Registration (Gumasta License)</p>
                                    <p>Udyam Registration(MSME)</p>
                                    <p>Import Export Code</p>
                                    <p>RERA Registration</p>
                                    <p>Factory License</p>
                                    <p>Labor License</p>
                                    <p>Trade License</p>
                                    <p>BRN Registration(SAN In Rajasthan)</p>
                                </div>

                                <div className="menu-column">
                                    <p style={{ fontWeight: 'bold' }}>NGO License</p>
                                    <p>12A Registration</p>
                                    <p>80G Registration</p>
                                    <p>12G and 80G Registration</p>
                                    <p>FCRA Registration</p>
                                    <p>NGO Darpan/ Niti Aayog</p>
                                    <p>CSR-1 Registration</p>
                                </div>

                                <div className="menu-column">
                                    <p style={{ fontWeight: 'bold' }} >Food & Beverages License</p>
                                    <p>FSSAI Registration</p>
                                    <p>FFSAI License</p>
                                    <p>HALAL Registration</p>
                                    <p>Drug License</p>
                                    <p>APEDA Registration(RCMR Registration)</p>
                                    <p>Liquor License</p>
                                    <p>Tobacco License</p>
                                </div>
                                <div className="menu-column">
                                    <p style={{ fontWeight: 'bold' }} >Quality & Standard License</p>
                                    <p>ISO Certificate</p>
                                    <p>BIS Registration</p>
                                    <p>Hallmark Registration</p>
                                    <p>ISI Mark Regisration</p>
                                    <p>Ayush Certification</p>
                                    <p>CDSCO Licensing</p>
                                    <p>Make in India Registration</p>
                                </div>
                                <div className="menu-column">
                                    <p style={{ fontWeight: 'bold' }} >Quality & Standard License</p>
                                    <p>ESI Registration</p>
                                    <p>PF Registration</p>
                                    <p>ESI & PF Registration</p>
                                    <p>PERA Regisration</p>
                                    <p>ICEGATE Registration</p>
                                    <p>LEI(Legal Entity Identifier)</p>
                                    <p>PSARA License</p>
                                    <p>Professional Tex Enrollment Certificate(PTEC)</p>
                                    <p>RNI Registration</p>
                                </div>

                            </div>
                        )}

                        {/* IP */}
                        {activeMenu === "ip" && (
                            <div className="menu-left">

                                <div className="menu-column">
                                    <p>Trademark Registration</p>
                                    <p>Expedited Trademark Registration</p>
                                    <p>Trademark Objection</p>
                                    <p>Treademark Opposition</p>
                                    <p>Trademarl Counter Statement</p>
                                    <p>Trademark Renewal</p>
                                </div>

                                <div className="menu-column">
                                    <p>Trademark Hearing</p>
                                    <p>Trademark Transfer</p>
                                    <p>Trademark Rectification</p>
                                    <p>Trademark Protection</p>
                                </div>

                                <div className="menu-column">
                                    <p>Copyright Registration</p>
                                    <p>Copyright Objection</p>
                                    <p>Design Registration</p>
                                    <p>Design Objection</p>
                                </div>
                                <div className="menu-column">
                                    <p>Patent Registration</p>
                                    <p>Logo Design</p>
                                </div>
                            </div>
                        )}
                        {activeMenu === "tax" && (
                            <div className="menu-left">

                                <div className="menu-column">
                                    <p>Professional Tax Registration</p>
                                    <p>Form 10BD</p>
                                    <p>ITR-1 Return</p>
                                    <p>ITR-2 Return</p>
                                    <p>ITR-3 Return</p>
                                    <p>ITR-4 Return</p>
                                    <p>ITR-5 Return</p>

                                </div>

                                <div className="menu-column">
                                    <p>ITR-6 Return</p>
                                    <p>ITR-7 Return</p>
                                    <p>15CA-15CB Form</p>
                                    <p>Income Tax Notice</p>
                                    <p>Professional Tax Return</p>
                                </div>
                            </div>
                        )}
                        {activeMenu === "gst" && (
                            <div className="menu-left">

                                <div className="menu-column">
                                    <p>GST Registration</p>
                                    <p>GST Notice</p>
                                </div>

                                <div className="menu-column">
                                    <p>GST Return Filling</p>
                                    <p>GST Revocation</p>
                                </div>
                                <div className="menu-column">
                                    <p>GST LUT Form</p>
                                    <p>GST Amendment</p>
                                </div>
                            </div>
                        )}
                        {activeMenu === "roc" && (
                            <div className="menu-left">

                                <div className="menu-column">
                                    <p>Compliance Pvt Ltd.</p>
                                    <p>Compliance LLP</p>
                                    <p>Compliance OPC</p>
                                    <p>Compliance Nidhi</p>
                                    <p>Compliance Microfinance</p>
                                    <p>Compliance Partnership</p>
                                    <p>Compliance Proprietorship</p>
                                </div>

                                <div className="menu-column">
                                    <p>Alteration of Capital</p>
                                    <p>Directors Change</p>
                                    <p>Shareholding Transfer</p>
                                    <p>DMAT Account-Company</p>
                                    <p>Registered Office Change</p>
                                    <p>DIR-3 KYC</p>
                                    <p>EPF Return</p>
                                </div>
                                <div className="menu-column">
                                    <p>MOA Alteration</p>
                                    <p>Directors Change</p>
                                    <p>LLP Closing</p>
                                    <p>Dormant Status Filling</p>
                                    <p>INC-20A Filing</p>
                                    <p>ADT-1 Filing</p>
                                    <p>EPF Return</p>
                                </div>
                                <div className="menu-column">
                                    <p>AOA Alteration</p>
                                    <p>LLP</p>
                                    <p>LLP Closing</p>
                                    <p>Dormant Status Filling</p>
                                    <p>INC-20A Filing</p>
                                    <p>ADT-1 Filing</p>
                                    <p>EPF Return</p>
                                </div>
                            </div>
                        )}
                        {activeMenu === "funding" && (
                            <div className="menu-left">

                                <div className="menu-column">
                                    <p>Pitch Deck Preparation</p>
                                    <p>Business Valuation Report</p>
                                    <p>Financial Projections & Modelling</p>
                                    <p>Investor Documentation</p>
                                    <p>Dua Dillgence Assistance</p>
                                    <p>Equity Structuring & Cap Table Management</p>
                                    <p>Startup India Seed Fund Assistance</p>
                                    <p>SIDBI/MSME/NABARD Loan </p>
                                    <p>CGTMSE Loan (Collateral Fees)</p>
                                    <p>SIDBI/MSME/NABARD Loan </p>
                                </div>

                                <div className="menu-column">
                                    <p>Alteration of Capital</p>
                                    <p>Directors Change</p>
                                    <p>Shareholding Transfer</p>
                                    <p>DMAT Account-Company</p>
                                    <p>Registered Office Change</p>
                                    <p>DIR-3 KYC</p>
                                    <p>EPF Return</p>
                                </div>
                                <div className="menu-column">
                                    <p>MOA Alteration</p>
                                    <p>Directors Change</p>
                                    <p>LLP Closing</p>
                                    <p>Dormant Status Filling</p>
                                    <p>INC-20A Filing</p>
                                    <p>ADT-1 Filing</p>
                                    <p>EPF Return</p>
                                </div>
                                <div className="menu-column">
                                    <p>AOA Alteration</p>
                                    <p>LLP</p>
                                    <p>LLP Closing</p>
                                    <p>Dormant Status Filling</p>
                                    <p>INC-20A Filing</p>
                                    <p>ADT-1 Filing</p>
                                    <p>EPF Return</p>
                                </div>
                            </div>
                        )}
                        {activeMenu === "legal" && (
                            <div className="menu-left">

                                <div className="menu-column">
                                    <p>Partnership Deed</p>
                                    <p>Founder's Agreement</p>
                                    <p>Shareholders'Agreement(SHA)</p>
                                    <p>Share Subscription Agreement(SSA)</p>
                                    <p>Joint Venture Agreement</p>
                                    <p>Franchise Agreement</p>
                                    <p>Distribution / Dealership Agreement</p>
                                    <p>Vender / Supplier Agreement </p>
                                    <p>Non-Disclosure Agreement(NDA)</p>
                                    <p>Service Level Agreement(SLA)</p>
                                    <p>Consultancy/ Employment Contact</p>
                                </div>

                                <div className="menu-column">
                                    <p>Agency / Commission Agreement</p>
                                    <p>Sale Deed / Agreement to Sell</p>
                                    <p>Lease Deed / Rent Agreement</p>
                                    <p>Gift Deed</p>
                                    <p>Property Transfer Agreement</p>
                                    <p>Builder-Buyer Agreement</p>
                                    <p>Power of Attorney (POA-General/Special)</p>
                                    <p>Affidavits & Undertakings</p>
                                    <p>Memorandum & Articles of Association(MOA & AOA)</p>
                                    <p>Board Resolutions & Minutes</p>
                                </div>
                                <div className="menu-column">
                                    <p>Share Allotment & Transfer Deeds</p>
                                    <p>Employment & HR Policy Documents</p>
                                    <p>ESOP Policy Documents </p>
                                    <p>T&C / Privacy Policy(for website & apps)</p>
                                    <p>Legal Notices under Companies Act or LLP Act</p>
                                    <p>Legal Notice for Recovery of Money</p>
                                    <p>Legal Notice for Breach of Contact</p>
                                    <p>Consumer Complaint Notice</p>
                                    <p>Property Possession / Eviction Notice</p>
                                    <p>Cheque Bounce Notice(u/s 138 NI Act)</p>
                                </div>
                                <div className="menu-column">
                                    <p>Defamation/Harassment Notice</p>
                                    <p>Matrimonial/Divorce/Maintenance Notice</p>
                                    <p>Declaration/Indemnity Bond</p>
                                    <p>Loan Agreement / Promissory Note</p>
                                    <p>MOU (Memorandum of Understanding)</p>
                                    <p>Settlement Deed / Compromise Agreement</p>
                                    <p>Arbitration Agreement / Notice</p>
                                    <p>Undertakings, Declarations, or Consent Letters</p>
                                </div>
                            </div>
                        )}
                    </div>
                )}

            </div>
        </section>
    );
}

export default Navbar_Section;