import { useState } from "react";
import { PopupModal } from "react-calendly";

import "./CTA.css";

const CTA = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleCalendlyOpen = () => {
    setIsCalendlyOpen(true);
  };

  const handleCalendlyClose = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <>
      <section className="cta-section">
        <span className="cta-orbit cta-orbit-left-top cta-yellow">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt=""
          />
        </span>

        <span className="cta-orbit cta-orbit-left-bottom cta-green">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt=""
          />
        </span>

        <span className="cta-orbit cta-orbit-top cta-blue">
          <img
            src="https://randomuser.me/api/portraits/men/46.jpg"
            alt=""
          />
        </span>

        <span className="cta-orbit cta-orbit-right-top cta-purple">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt=""
          />
        </span>

        <span className="cta-orbit cta-orbit-right-mid cta-orange">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt=""
          />
        </span>

        <div className="cta-content">
          <p>
            We Don’t Create For The Sake Of Aesthetics Alone. Every Decision We
            Make Is Rooted In Insight, Intention, And Functionality. Because
            Exceptional Experiences Aren’t Defined By Appearance—They’re
            Defined By The Value They Bring And The Problems They Solve.
          </p>

          <button type="button" onClick={handleCalendlyOpen}>
            Let’s Connect
          </button>
        </div>
      </section>

      <PopupModal
        url={"https://calendly.com/jhasiddharth495/30min"}
        open={isCalendlyOpen}
        onModalClose={handleCalendlyClose}
        rootElement={document.getElementById("root")}
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "6f46be",
          textColor: "080318",
        }}
      />
    </>
  );
};

export default CTA;