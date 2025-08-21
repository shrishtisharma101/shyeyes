import React from 'react';
import { Link } from 'react-router-dom';
import menuData from './menuData';
import Logo from '../../assets/images/logo/shylogo.png';
// Adjust the path as necessary
const Header = () => {
  return (
    <>
    <header className="header-section">
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="logo" style={{marginTop:5}}/>
              </Link>
            </div>
           <div className="menu-area">
      <ul className="menu">
        {menuData.map((item, index) => (
          <li key={index}>
            {item.path ? (
              <Link to={item.path}>{item.label}</Link>
            ) : (
              <>
                <a href="#0">{item.label}</a>
                <ul className="submenu">
                  {item.subMenu?.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link to={sub.path}>{sub.label}</Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* Login / Register */}
      <Link to="/login" className="login">
        <i className="icofont-user"></i> <span>LOG IN</span>
      </Link>
      <Link to="/register" className="signup">
        <i className="icofont-users"></i> <span>REGISTER</span>
      </Link>

      {/* Mobile icons */}
      <div className="header-bar d-lg-none">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="ellepsis-bar d-lg-none">
        <i className="icofont-info-square"></i>
      </div>
    </div>

          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;