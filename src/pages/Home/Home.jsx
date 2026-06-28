import "./Home.css";

import Header from "../../components/layout/Header/Header";
import Hero from "../../components/home/Hero/Hero";
import Services from "../../components/home/Services/Services";
import CTA from "../../components/home/CTA/CTA";
import MaverickWay from "../../components/home/MaverickWay/MaverickWay";
import Engines from "../../components/home/Engines/Engines";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import CollaborateCTA from "../../components/home/CollaborateCTA/CollaborateCTA";
import FAQ from "../../components/home/FAQ/FAQ";
import Footer from "../../components/layout/Footer/Footer";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <CTA />
      <MaverickWay />
      <Engines />
      <Testimonials />
      <CollaborateCTA />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;