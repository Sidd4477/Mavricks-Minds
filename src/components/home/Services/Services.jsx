import "./Services.css";

import userExperienceImg from "../../../assets/images/logos/UserExperience.png.png";
import brandIdentityImg from "../../../assets/images/logos/BrandIdentity.png.png";
import gameDesignImg from "../../../assets/images/logos/GameDedsign.png.png";
import frontendImg from "../../../assets/images/logos/Frontend.png.png";
import backendImg from "../../../assets/images/logos/Backend.png.png";
import digitalMarketingImg from "../../../assets/images/logos/Digital Marketing.png.png";

const services = [
  {
    number: "01",
    title: "User Experience Designing",
    text: "We design interfaces that guide, delight and stay invisible – so users think less and connect more.",
    image: userExperienceImg,
  },
  {
    number: "02",
    title: "Brand Identity And Communication",
    text: "We shape brand identities and communication that are clear, compelling, and built to leave a lasting impact.",
    image: brandIdentityImg,
  },
  {
    number: "03",
    title: "I Gaming Design",
    text: "We help Hypercasual Games grow fast with performance-driven user acquisition and high-quality players.",
    image: gameDesignImg,
  },
  {
    number: "04",
    title: "Frontend Development",
    text: "We build the powerful foundation behind your product, ensuring everything runs securely, reliably, and effortlessly.",
    image: frontendImg,
  },
  {
    number: "05",
    title: "Backend Development",
    text: "We build reliable backend systems that are secure, scalable, and engineered to power seamless digital experiences.",
    image: backendImg,
  },
  {
    number: "06",
    title: "Digital Marketing",
    text: "We shape brand identities and communication that are clear, compelling, and built to leave a lasting impact.",
    image: digitalMarketingImg,
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-bg-icon services-bg-icon-left">m</div>
      <div className="services-bg-icon services-bg-icon-right">m</div>

      <div className="services-content">
        <div className="services-title-box">
          <h2>
            Crafting Experiences
            <br />
            That Feel Effortless
          </h2>

          <p>
            We Bring Ideas To Life Through Thoughtful Experiences That Inspire,
            Engage, And Drive Growth.
            <br />
            Here's How We Help Brands Move Forward.
          </p>
        </div>

        <div className="services-list">
          {services.map((service) => (
            <div className="service-card" key={service.number}>
              <div className="service-card-text">
                <span>{service.number}</span>
                <h3>{service.title}</h3>

                <div className="service-card-line"></div>

                <p>{service.text}</p>
              </div>

              <div className="service-card-image-wrap">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-card-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;