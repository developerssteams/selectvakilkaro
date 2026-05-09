import Navbar from "@/components/Navbar";
import Servicess from "@/components/Servicess";
import Whychoose from "@/components/Whychoose";
import News from "@/components/News";
import testimonialss from "@/components/testimonialss";
import Professional from "@/components/Professional";
import Story from "@/components/Story";
import WhyVakilkaro from "@/components/WhyVakilkaro";
import CallToAction from "@/components/CallToAction";
import VakilKaroWay from "@/components/VakilKaroWay";
import ExpertSlider from "@/components/LeadershipSlider";
import JourneyMap from "@/components/JourneyMap";
import Faq from "@/components/Faq";
import TawkTo from "@/components/TawkTo";
import Footer from "@/components/Footer";
import "../app/globals.css";
import Header from "@/components/Header";
import Steps from "@/components/Steps";
export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Steps />
      <Servicess />
      <Whychoose />
      <Professional />
      <News />
      <JourneyMap />
      <Faq />
      <testimonialss />
      {/* <Story /> */}
      {/* <WhyVakilkaro /> */}
      {/* <CallToAction /> */}
      {/* <VakilKaroWay /> */}
      {/* <ExpertSlider /> */}
      {/* <Testimonials /> */}
      <TawkTo />
      <Footer />
    </>
  );
}