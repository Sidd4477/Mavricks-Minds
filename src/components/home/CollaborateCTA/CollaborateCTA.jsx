import { useState } from "react";
import { PopupModal } from "react-calendly";

import "./CollaborateCTA.css";

const CollaborateCTA = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const CALENDLY_URL =
    "https://calendly.com/YOUR-USERNAME/30-minute-meeting";

  const handleCalendlyOpen = () => {
    setIsCalendlyOpen(true);
  };

  const handleCalendlyClose = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <>
      <section className="collaborate-section">
        {/* Moving Heading */}

        <div className="collaborate-marquee">
          <div className="collaborate-marquee-track">
            <span className="collaborate-star">✦</span>
            <span>Collaborate With Maverick Minds</span>

            <span className="collaborate-star">✦</span>
            <span>Let's Make It Happen</span>

            <span className="collaborate-star">✦</span>
            <span>Collaborate With Maverick Minds</span>

            <span className="collaborate-star">✦</span>
            <span>Let's Make It Happen</span>

            <span>Collaborate With Maverick Minds</span>

            <span className="collaborate-star">✦</span>
            <span>Make It Happen</span>

            <span className="collaborate-star">✦</span>
            <span>Collaborate With Maverick Minds</span>

            <span className="collaborate-star">✦</span>
            <span>Make It Happen</span>
          </div>
        </div>

        {/* CTA Card */}

        <div className="collaborate-card">
          <div className="collaborate-left">
            <span>WORK WITH THE BEST PRODUCT AGENCY</span>

            <h2>
              Ready To Make
              <br />
              An Impact?
            </h2>
          </div>

          <div className="collaborate-right">
            <p>
              We thrive on turning ambitious ideas into impactful digital
              experiences. If collaborating, innovating, and pushing boundaries
              excites you, then you're exactly the kind of mind we're looking
              for.
            </p>

            <button type="button" onClick={handleCalendlyOpen}>
              Book A Free 30 Min Call
              <span>↗</span>
            </button>
          </div>
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

export default CollaborateCTA;