import "./Footer.css";
import headerLogo from "../../../assets/images/logos/HeaderLogo.png.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-box">
        <div className="footer-brand">
          <img src={headerLogo} alt="Maverick Minds" className="footer-brand-icon" />

          <div className="footer-brand-text">
            <div className="footer-brand-name">
              <span>MAVERICK</span>MINDS
            </div>
            <p>BUILDING IDEAS INTO DIGITAL REALITY</p>
          </div>
        </div>

        <h2>Why Sleep On A Great Idea?</h2>

        <button type="button" className="footer-btn">
          Get in Touch
        </button>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Services</h4>
            <p>UI/UX</p>
            <p>Development</p>
            <p>Marketing</p>
            <p>SEO</p>
            <p>Ad Campaigns</p>
          </div>

          <div className="footer-col">
            <h4>Navigation</h4>
            <p>Home</p>
            <p>Process</p>
            <p>Projects</p>
            <p>Testimonials</p>
            <p>FAQ</p>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>+91 99965-24562</p>
            <p>Address</p>
          </div>
        </div>

        <h1 className="footer-bg-text">Maverick</h1>

        <div className="footer-bottom">
          <p>Copyright © MaverickMinds</p>

          <div className="footer-socials">
            <span>𝕏</span>
            <span>f</span>
            <span>in</span>
            <span>◎</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;