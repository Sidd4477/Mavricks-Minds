import "./Home.css";

import Header from "../../components/layout/Header/Header";
import Hero from "../../components/home/Hero/Hero";
import Services from "../../components/home/Services/Services";
import CTA from "../../components/home/CTA/CTA";
import RecentWork from "../../components/home/RecentWork/RecentWork";
import MaverickWay from "../../components/home/MaverickWay/MaverickWay";
import Engines from "../../components/home/Engines/Engines";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import CollaborateCTA from "../../components/home/CollaborateCTA/CollaborateCTA";
import FAQ from "../../components/home/FAQ/FAQ";
import Footer from "../../components/layout/Footer/Footer";
import Chatbot from "../../components/common/Chatbot/Chatbot";

const Home = () => {
  return (
    <>
      <Header />

      <main className="home-page">
        <div id="home">
          <Hero />
        </div>

        <div id="services">
          <Services />
        </div>

        <CTA />

        <div id="projects">
          <RecentWork />
        </div>

        <div id="process">
          <MaverickWay />
        </div>

        <Engines />

        <div id="testimonials">
          <Testimonials />
        </div>

        <CollaborateCTA />

        <div id="faq">
          <FAQ />
        </div>
      </main>

      <Footer />
      <Chatbot />
    </>
  );
};

export default Home;