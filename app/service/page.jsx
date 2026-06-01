"use client";
import TawkTo from "@/components/TawkTo";
import Faq from "@/components/Faq";
import ContactQuery from "@/components/ContactQuery";
import Testimonialss from "@/components/testimonialss";
import ServiceDetails from "@/components/service";




export default function servicedetails() {
    return (
        <>
            <ServiceDetails />
            <Testimonialss />
            <ContactQuery />
            <Faq />
            <TawkTo />

        </>
    );
}