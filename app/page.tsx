import Navbar from "@/components/Navbar";
import Servicess from "@/components/Servicess";
import Whychoose from "@/components/Whychoose";
import News from "@/components/News";
import Professional from "@/components/Professional";
// import JourneyMap from "@/components/JourneyMap";
import Faq from "@/components/Faq";
import TawkTo from "@/components/TawkTo";
import Footer from "@/components/Footer";
import "../app/globals.css";
import Header from "@/components/Header";
import Steps from "@/components/Steps";
import Testimonialss from "@/components/testimonialss";
import TrustedSection from "@/components/TrustedSection"
import CallToAction from "@/components/CallToAction";
import ContactQuery from "@/components/ContactQuery";
export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <TrustedSection />
      <Servicess />
      <Steps />
      <Whychoose />
      <CallToAction />
      <Professional />
      <News />
      {/* <JourneyMap /> */}
      <ContactQuery />
      <Faq />
      <Testimonialss />
      <TawkTo />
      <Footer />
    </>
  );
}