import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-section">
      <div className="header-top">
        <div className="container">
          <div className="header-top-area">
            <ul className="left">
              <li>
                <i className="icofont-ui-call"></i> <span>+00000000</span>
              </li>
              <li>
                <i className="icofont-location-pin"></i> Noida, Greater Noida
              </li>
            </ul>
            <ul className="social-icons d-flex align-items-center">
              <li>
                <p>Find us on :</p>
              </li>
              <li>
                <a href="#" className="fb"><i className="icofont-facebook-messenger"></i></a>
              </li>
              <li>
                <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
              </li>
              <li>
                <a href="#" className="vimeo"><i className="icofont-vimeo"></i></a>
              </li>
              <li>
                <a href="#" className="skype"><i className="icofont-skype"></i></a>
              </li>
              <li>
                <a href="#" className="rss"><i className="icofont-rss-feed"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link to="/">
                <img src="assets/logo/shylogo.png" alt="logo" />
              </Link>
            </div>
            <div className="menu-area">
              <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/AboutUs">About Us</Link></li>
                <li>
                  <a href="#0">Features</a>
                  <ul className="submenu">
                    <li><Link to="/members">All Members</Link></li>
                    <li><Link to="/profile2">Profiles</Link></li>
                    <li><Link to="/profile">Member Profile</Link></li>
                    <li><Link to="/pricing-plan">Pricing Plan</Link></li>
                  </ul>
                </li>
                <li>
                  <a href="#0">Blog</a>
                  <ul className="submenu">
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/blog-single">Blog Single</Link></li>
                  </ul>
                </li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
              <Link to="/login" className="login"><i className="icofont-user"></i> <span>LOG IN</span></Link>
              <Link to="/register" className="signup"><i className="icofont-users"></i> <span>REGISTER</span></Link>
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
  );
};

export default Header;