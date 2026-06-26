import "./Home.css";

import Header from "../../components/layout/Header/Header";
import Hero from "../../components/home/Hero/Hero";
import Services from "../../components/home/Services/Services";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
    </>
  );
};

export default Home;