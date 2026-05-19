"use client";
import TawkTo from "@/components/TawkTo";
import Faq from "@/components/Faq";
import Listblog from "@/components/BlogList";
import ContactQuery from "@/components/ContactQuery";
import Authors from "@/components/Authors";
import Testimonialss from "@/components/testimonialss";



export default function Author() {
    return (
        <>  
            <Authors />
            <Testimonialss />
            <ContactQuery />
            <Faq />
            <TawkTo />

        </>
    );
}