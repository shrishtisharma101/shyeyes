import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import menuData from './menuData';
import Logo from '../../assets/images/logo/shylogo.png';
import { Logout, Notifications } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

const Header = () => {
  const navigate = useNavigate();   // ✅ at top level
  const token = localStorage.getItem("token");
  const isLogin = !!token;
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const userData = user?.data || null;

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await fetch("https://chat.bitmaxtest.com/admin/api/profile", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "application/json",
        },
      });

      const data = await response.json();
      if (response.ok) {
        setUser(data.user || data);
      } else {
        console.error("Error:", data);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  
  const goToNotifications = () => {
    navigate("/notifications");   // ✅ now works
  };

  return (
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
              {/* ✅ menuOpen se class toggle kar diya */}
              <ul className={`menu ${menuOpen ? "active" : ""}`}>
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
 
                {/* ✅ Yaha Login/Register ko bhi menu ke andar show kara */}
                {!isLogin && (
                  <>
                    <li>
                      <Link to="/login" className="login-btn">
                        <i className="icofont-user"></i> Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" className="register-btn">
                        <i className="icofont-users"></i> Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
 
              {/* ✅ Right side ke buttons (only jab login hoga) */}
              {isLogin && (
                <div className='justify-space-between align-items-center d-flex gap-2'>
                  <Link to="/profile" state={{ userData }} className="profile-link">
                    <div className="profile-icon">
                      <img src={userData?.image_url} alt="Profile" />
                      {userData?.isOnline && <span className="status-dot"></span>}
                    </div>
                    <span className="profile-name">{userData?.f_name}</span>
                  </Link>

                  <IconButton type="button" style={{ borderRadius: '50%' }} color="error" onClick={handleLogout}>
                    <Logout />
                  </IconButton>

                  <IconButton type="button" style={{ borderRadius: '50%' }} color="error" onClick={goToNotifications}>
                    <Notifications />
                  </IconButton>
                </div>
              )}
 
              {/* ✅ Mobile Menu Toggle */}
              <div
                className={`header-bar d-lg-none ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
 
              <div _className_="ellepsis-bar d-lg-none">
                <i _className_="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
