import "./Header.css";

import logoIcon from "../../../assets/images/logos/HeaderLogo.png.png";

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
          <button className="get-touch-btn" type="button">
            Get In Touch
          </button>

          <button className="menu-btn" type="button" aria-label="Menu">
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;