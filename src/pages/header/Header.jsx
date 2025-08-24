import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import menuData from "./menuData";
import Logo from "../../assets/images/logo/shylogo.png";
import { Logout, Notifications } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

// ✅ Sub-component for logged-in user controls
const UserControls = ({ userData, onLogout, onNotifications }) => {
  return (
    <div className="user-controls d-flex align-items-center gap-2">
      <Link
        to="/profile"
        state={{ userData }}
        className="profile-link d-flex align-items-center gap-1"
      >
        <div className="profile-icon position-relative">
          <img
            src={userData?.image_url || "/default-avatar.png"}
            alt="Profile"
            onError={(e) => (e.currentTarget.src = "/default-avatar.png")}
          />
          {userData?.isOnline && <span className="status-dot"></span>}
        </div>
        <span className="profile-name">{userData?.f_name}</span>
      </Link>

      <IconButton className="logout-btn" onClick={onLogout}>
        <Logout />
      </IconButton>

      <IconButton className="notify-btn" onClick={onNotifications}>
        <Notifications />
      </IconButton>
    </div>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isLogin = !!token;
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // ✅ new state
  const userData = user?.data || user || null;

  // ✅ Fetch profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!token) return;

        const response = await fetch(
          "https://chat.bitmaxtest.com/admin/api/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );

        const data = await response.json();
        if (response.ok) {
          setUser(data?.user ?? data);
        } else {
          console.error("Profile error:", data?.message || data);
        }
      } catch (err) {
        console.error("Network error:", err);
      }
    };

    fetchProfile();
  }, [token]);

  // ✅ Handlers
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const goToNotifications = () => {
    navigate("/notifications");
  };

  const closeMenu = () => setMenuOpen(false);

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <header className="header-section">
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* Logo */}
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="logo" style={{ marginTop: 5 }} />
              </Link>
            </div>

            {/* Menu Area */}
            <div className="menu-area">
              <ul className={`menu ${menuOpen ? "active" : ""}`}>
                {menuData.map((item, index) => (
                  <li
                    key={index}
                    className={openSubmenu === index ? "submenu-open" : ""}
                  >
                    {item.path ? (
                      <Link to={item.path} onClick={closeMenu}>
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        {/* Parent button for mobile submenu toggle */}
                        <button
                          type="button"
                          className="subMenu-toggle"
                          onClick={() => toggleSubmenu(index)}
                        >
                          {item.label}
                          <span className="arrow">
                            {openSubmenu === index ? "▲" : "▼"}
                          </span>
                        </button>
                        <ul
                          className={`subMenu ${
                            openSubmenu === index ? "active" : ""
                          }`}
                        >
                          {item.subMenu?.map((sub, subIndex) => (
                            <li key={subIndex}>
                              <Link to={sub.path} onClick={closeMenu}>
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                ))}

                {/* Auth Links */}
                {!isLogin && (
                  <>
                    <li>
                      <Link
                        to="/login"
                        className="login-btn"
                        onClick={closeMenu}
                      >
                        <i className="icofont-user"></i> Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        className="register-btn"
                        onClick={closeMenu}
                      >
                        <i className="icofont-users"></i> Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>

              {/* User Controls */}
              {isLogin && (
                <UserControls
                  userData={userData}
                  onLogout={handleLogout}
                  onNotifications={goToNotifications}
                />
              )}

              {/* Mobile Menu Toggle */}
              <div
                className={`header-bar d-lg-none ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
              >
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
