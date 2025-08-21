import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import menuData from './menuData';
import Logo from '../../assets/images/logo/shylogo.png';

const Header = () => {
  const token = localStorage.getItem("token"); // ✅ check token in localStorage
  const isLogin = !!token; // convert to true/false
  const [user, setUser] = useState(null);

  const userData = user?.data || null;
  console.log("userData profile", userData?.email);
  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await fetch("https://bitmaxtest.com/shyeyes/api/profile", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/json",
        },
      });

      const data = await response.json();
      console.log("Profile Data:", data);
      if (response.ok) {
        setUser(data.user || data); 
      } else {
        console.error("Error:", data);
      }
    };

    fetchProfile();
  }, []);



  return (
    <>
      <header className="header-section">
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo">
                <Link to="/">
                  <img src={Logo} alt="logo" style={{ marginTop: 5 }} />
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
                    
               <div>
      {isLogin ? (
        <Link to="/profile" className="profile-link">
          <div className="profile-icon">
            <img
              src={userData?.image_url}
              alt="Profile"
            />
            {userData?.isOnline && <span className="status-dot"></span>}
          </div>
          <span className="profile-name">{userData?.f_name}</span>
        </Link>
      ) : (
        <div>
          <Link to="/login" className="login">
            <i className="icofont-user"></i> <span>LOG IN</span>
          </Link>
          <Link to="/register" className="signup">
            <i className="icofont-users"></i> <span>REGISTER</span>
          </Link>
        </div>
      )}
    </div>


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
