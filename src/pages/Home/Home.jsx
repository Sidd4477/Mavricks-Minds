import "./Home.css";

import Header from "../../components/layout/Header/Header";
import Hero from "../../components/home/Hero/Hero";
import Services from "../../components/home/Services/Services";
import CTA from "../../components/home/CTA/CTA";
import MaverickWay from "../../components/home/MaverickWay/MaverickWay";
import Engines from "../../components/home/Engines/Engines";
import Testimonials from "../../components/home/Testimonials/Testimonials";
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
    </>
  );
};

export default Home;