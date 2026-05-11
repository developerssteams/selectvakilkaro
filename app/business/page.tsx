"use client";

import TawkTo from "@/components/TawkTo";

import Faq from "@/components/Faq";
import Query_Card from "@/components/Query_Card";
import Trademark_Registration from "@/components/Trademark_Registration";
import StartupDocument from "@/components/StartupDocument";
import VerifiedServicescontent from "@/components/VerifiedServicescontent";
import LeadershipSlider from "@/components/LeadershipSlider";
import Navbar from "@/components/Navbar";
import Navbar_Section from "@/components/Navbar_Section";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Business_Pricing from "@/components/Business_Pricing";
import Pvt_Query_Card from "@/components/Pvt_Query_Card";
import PvtServicescontent from "@/components/PvtServicescontent";

export default function PVT() {
    return (
        <>
            <Header />
            <Navbar_Section />
            <Pvt_Query_Card />
            <Business_Pricing />
            <Trademark_Registration />
            <StartupDocument />
            {/* <VerifiedServicescontent /> */}
            <PvtServicescontent />  
            <LeadershipSlider />

            {/* Optional */}
            {/* <Story /> */}

            <Testimonials />
            <ContactSection />
            <Faq />

            <TawkTo />
            <Footer />
        </>
    );
}