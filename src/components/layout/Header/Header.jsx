import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";

import "./Header.css";

import logoIcon from "../../../assets/images/logos/HeaderLogo.png.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((previousValue) => !previousValue);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleCalendlyOpen = () => {
    setIsMenuOpen(false);
    setIsCalendlyOpen(true);
  };

  const handleCalendlyClose = () => {
    setIsCalendlyOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <>
      <header className={`site-header ${isMenuOpen ? "menu-active" : ""}`}>
        <div className="header-glass-layer"></div>

        <div className="header-inner">
          <a
            href="#home"
            className="header-brand"
            onClick={handleMenuClose}
            aria-label="Maverick Minds Home"
          >
            <img
              src={logoIcon}
              alt="Maverick Minds"
              className="header-logo-icon"
            />

            <div className="header-logo-text">
              <h1>
                <span>MAVERICK</span>MINDS
              </h1>

              <p>BUILDING IDEAS INTO DIGITAL REALITY</p>
            </div>
          </a>

          <div className="header-right">
            <button
              className="get-touch-btn"
              type="button"
              onClick={handleCalendlyOpen}
            >
              Get In Touch
            </button>

            <button
              className={`menu-btn ${isMenuOpen ? "menu-open" : ""}`}
              type="button"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isMenuOpen}
              onClick={handleMenuToggle}
            >
              <span className="menu-line"></span>
              <span className="menu-line"></span>
              <span className="menu-line"></span>
            </button>
          </div>
        </div>
      </header>

      {/* ================= FULL SCREEN MENU ================= */}

      <div className={`menu-overlay ${isMenuOpen ? "show-menu" : ""}`}>
        <div className="menu-overlay-background"></div>

        <div className="menu-overlay-inner">
          <nav className="menu-navigation" aria-label="Main Navigation">
            <a href="#about" onClick={handleMenuClose}>
              About Us
            </a>

            <a href="#services" onClick={handleMenuClose}>
              Services
            </a>

            <a href="#projects" onClick={handleMenuClose}>
              Projects
            </a>

            <a href="#testimonials" onClick={handleMenuClose}>
              Testimonials
            </a>

            <button
              type="button"
              className="menu-contact-link"
              onClick={handleCalendlyOpen}
            >
              Contact Us
            </button>
          </nav>

          <div className="menu-bottom-right">
            <div className="menu-newsletter">
              <p>Stay Up To Date</p>

              <form
                className="newsletter-form"
                onSubmit={(event) => event.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Subscribe With Email"
                  aria-label="Email address"
                />

                <button type="submit" aria-label="Subscribe">
                  ↗
                </button>
              </form>
            </div>

            <div className="menu-social-links">
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                X
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                ◎
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CALENDLY POPUP ================= */}

      <PopupModal
        url="https://calendly.com/_maverickminds/30min"
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

export default Header;