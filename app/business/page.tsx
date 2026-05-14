"use client";
import TawkTo from "@/components/TawkTo";
import Faq from "@/components/Faq";
import StartupDocument from "@/components/StartupDocument";
import Navbar from "@/components/Navbar";
import Navbar_Section from "@/components/Navbar_Section";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PVT() {
    return (
        <>
            <Header />
            <Navbar_Section />
            <StartupDocument />
            <Faq />
            <TawkTo />
            <Footer />
        </>
    );
}