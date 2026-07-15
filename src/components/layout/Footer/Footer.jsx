import { useState } from "react";
import { PopupModal } from "react-calendly";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import "./Footer.css";
import headerLogo from "../../../assets/images/logos/HeaderLogo.png.png";

const Footer = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const CALENDLY_URL =
    "https://calendly.com/YOUR-USERNAME/30-minute-meeting";

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleCalendlyOpen = () => {
    setIsCalendlyOpen(true);
  };

  const handleCalendlyClose = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <>
      <footer className="footer-section">
        <div className="footer-box">
          <div className="footer-bg"></div>
          <div className="footer-dark-overlay"></div>
          <div className="footer-bottom-fade"></div>

          <h1 className="footer-bg-text">MAVERICK</h1>

          <div className="footer-content">
            <div className="footer-brand">
              <img
                src={headerLogo}
                alt="Maverick Minds"
                className="footer-brand-icon"
              />

              <div className="footer-brand-text">
                <div className="footer-brand-name">
                  <span>MAVERICK</span>MINDS
                </div>

                <p>BUILDING IDEAS INTO DIGITAL REALITY</p>
              </div>
            </div>

            <div className="footer-cta">
              <h2>Why Sleep On A Great Idea?</h2>

              <button
                type="button"
                className="footer-btn"
                onClick={handleCalendlyOpen}
              >
                <span className="footer-btn-text">
                  Book A Free 30 Min Call
                </span>

                <span className="footer-btn-icon">↗</span>
              </button>
            </div>

            <div className="footer-links">
              <div className="footer-col">
                <h4>Services</h4>

                <p>UI/UX Design</p>
                <p>Development</p>
                <p>Marketing</p>
                <p>SEO</p>
                <p>Ad Campaigns</p>
              </div>

              <div className="footer-col">
                <h4>Navigation</h4>

                <p
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollToSection("home")}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      scrollToSection("home");
                    }
                  }}
                >
                  Home
                </p>

                <p
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollToSection("process")}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      scrollToSection("process");
                    }
                  }}
                >
                  Process
                </p>

                <p
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollToSection("projects")}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      scrollToSection("projects");
                    }
                  }}
                >
                  Projects
                </p>

                <p
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollToSection("testimonials")}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      scrollToSection("testimonials");
                    }
                  }}
                >
                  Testimonials
                </p>

                <p
                  role="button"
                  tabIndex={0}
                  onClick={() => scrollToSection("faq")}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      scrollToSection("faq");
                    }
                  }}
                >
                  FAQ
                </p>
              </div>

              <div className="footer-col">
                <h4>Contact</h4>

                <p>+91 99965-24562</p>
                <p>+91 88168-24562</p>

                <p>
                  Address:
                  <br />
                  Maverick Minds,
                  <br />
                  Building 02, Floor 2,
                  <br />
                  Kunjpura Road,
                  <br />
                  Karnal, Haryana - 132001
                </p>
              </div>
            </div>

           <div className="footer-socials">
  <a
    href="https://x.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X"
  >
    <FaXTwitter />
  </a>

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://www.linkedin.com/company/maverick-mindss/posts/?feedView=all"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://www.instagram.com/maverickminds.2024?igsh=MTB3dGhhanBxZWMxbg=="
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>
</div>

            <div className="footer-bottom">
              <p>Copyright © Maverick Minds</p>

              <div className="footer-policy">
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <PopupModal
        url={"https://calendly.com/_maverickminds/30min"}
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

export default Footer;