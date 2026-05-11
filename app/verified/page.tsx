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

export default function Verified() {
    return (
        <>
            <Header />
            <Navbar_Section />
            <Query_Card />
            <Trademark_Registration />
            <StartupDocument />
            <VerifiedServicescontent />
            <LeadershipSlider />

            {/* Optional */}
            {/* <Story /> */}

          
            <Faq />
            <TawkTo />
            <Footer />
        </>
    );
}