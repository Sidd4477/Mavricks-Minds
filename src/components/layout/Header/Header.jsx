import "./Header.css";

import logo from "../../../assets/images/logos/logoMv.png.png";

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <img src={logo} alt="Maverick Minds" className="header-logo" />

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