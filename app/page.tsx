import Navbar from "@/components/Navbar";
import VerifiedServices from "@/components/VerifiedServices";
import LegalRepresentation from "@/components/LegalRepresentation";
import News from "@/components/News";
import Partner from "@/components/Partner";
import Journey from "@/components/Journey";
import Story from "@/components/Story";
import WhyVakilkaro from "@/components/WhyVakilkaro";
import CallToAction from "@/components/CallToAction";
import VakilKaroWay from "@/components/VakilKaroWay";
import ExpertSlider from "@/components/LeadershipSlider";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Faq from "@/components/Faq";
import TawkTo from "@/components/TawkTo";
import Footer from "@/components/Footer";
import "../app/globals.css";
import Header from "@/components/Header";
import ITRSteps from "@/components/Steps";
export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <ITRSteps />
      <VerifiedServices />
      <LegalRepresentation />
      <Journey />
      <Partner />
      <News />
      {/* <Story /> */}
      {/* <WhyVakilkaro /> */}
      {/* <CallToAction /> */}
      {/* <VakilKaroWay /> */}
      {/* <ExpertSlider /> */}
      {/* <Testimonials /> */}
      {/* <ContactSection /> */}
      {/* <Faq /> */}
      <TawkTo />
      <Footer />
    </>
  );
}