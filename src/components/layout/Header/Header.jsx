import "./Header.css";

import logoIcon from "../../../assets/images/hero/mmicons.png.png";

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-brand">
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
        </div>

        <div className="header-right">
          <button className="get-touch-btn">Get In Touch</button>

          <button className="menu-btn" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;