import "./Hero.css";

import hero1 from "../../../assets/images/hero/hero1.png.png";
import hero2 from "../../../assets/images/hero/hero2.png.png";
import hero3 from "../../../assets/images/hero/hero3.png.png";
import hero4 from "../../../assets/images/hero/hero4.png.png";
import mmIcon from "../../../assets/images/hero/mmicons.png.png";

import companyLogo1 from "../../../assets/images/logos/Company Logo1.png.png";
import companyLogo2 from "../../../assets/images/logos/Company Logo2.png.png";
import companyLogo3 from "../../../assets/images/logos/Company Logo3.png.png";
import companyLogo4 from "../../../assets/images/logos/Company Logo4.png.png";
import companyLogo5 from "../../../assets/images/logos/Company Logo5.png.png";

const Hero = () => {
  const heroImages = [hero1, hero2, hero3, hero4];

  const companyLogos = [
    companyLogo1,
    companyLogo2,
    companyLogo3,
    companyLogo4,
    companyLogo5,
  ];

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-title-wrap">
          <span className="hero-title-line"></span>

          <h1>
            If You're Building Something Big,
            <br />
            You're In The Right Place
            <span className="red-underline"></span>
          </h1>
        </div>

        <p>
          Maverick Mind Is A Global UX And Web Design Agency, Helping Brands
          Redefine Experiences And Empower Business Growth.
        </p>

        <div className="hero-actions">
          <button className="hero-btn">Get In Touch</button>

          <img src={mmIcon} alt="Maverick icon" className="mm-icon" />

          <div className="hero-rating">
            <div>
              <strong>4.9</strong>
              <span>★★★★★</span>
            </div>
            <small>Based On 49 Maverick Reviews</small>
          </div>
        </div>
      </div>

      <div className="hero-image-marquee">
        <div className="hero-image-track">
          {[...heroImages, ...heroImages].map((img, index) => (
            <div className="hero-img-card" key={index}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="trusted-section">
        <p>Trusted by Companies</p>

        <div className="trusted-logo-marquee">
          <div className="trusted-logo-track">
            {[...companyLogos, ...companyLogos].map((logo, index) => (
              <img src={logo} alt="" key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;