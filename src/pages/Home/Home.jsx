import "./Home.css";

import Header from "../../components/layout/Header/Header";
import Hero from "../../components/home/Hero/Hero";
import Services from "../../components/home/Services/Services";
import CTA from "../../components/home/CTA/CTA";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <CTA />
    </>
  );
};

export default Home;