"use client";

import TawkTo from "@/components/TawkTo";
import Faq from "@/components/Faq";
import BlogDetail from "@/components/BlogDetails";
import ContactQuery from "@/components/ContactQuery";
import Testimonialss from "@/components/testimonialss";

export default function BlogDetailPage() {
    return (
        <>
            <BlogDetail />
            <Testimonialss />
            <ContactQuery />
            <Faq />
            <TawkTo />
        </>
    );
}