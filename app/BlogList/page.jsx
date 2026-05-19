"use client";
import TawkTo from "@/components/TawkTo";
import Faq from "@/components/Faq";
import Listblog from "@/components/BlogList";
import ContactQuery from "@/components/ContactQuery";
import Testimonialss from "@/components/testimonialss";




export default function BLogList() {
    return (
        <>
            <Listblog />
            <Testimonialss />
            <ContactQuery />
            <Faq />
            <TawkTo />

        </>
    );
}