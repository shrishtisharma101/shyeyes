import React, { useState } from "react";
import Swal from "sweetalert2";
import "./Login.css";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginSection = () => {
  // State
  const [showModal, setShowModal] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // ✅ user state added
  const [user, setUser] = useState(null);

  // ✅ password toggle state
  const [showPassword, setShowPassword] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Open Terms Modal
  const openModal = () => {
    if (!formData.email || !formData.password) {
      Swal.fire({
        title: "Error!",
        text: "Please enter email and password",
        icon: "error",
        confirmButtonColor: "#df314d",
      });
      return;
    }
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => setShowModal(false);

  // Checkbox toggle
  const handleAgreeChange = () => setAgreeToTerms(!agreeToTerms);

  // Proceed → API call
  const handleProceed = async () => {
    if (!agreeToTerms) return;

    try {
      const res = await fetch("https://chat.bitmaxtest.com/admin/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Save token & username/email in localStorage
        if (data.token) {
          localStorage.setItem("token", data.token);
        }
        if (data.username) {
          localStorage.setItem("username", data.username);
          setUser({ username: data.username }); // ✅ state update
        } else if (data.email) {
          localStorage.setItem("username", data.email);
          setUser({ username: data.email });
        }

        closeModal();
        Swal.fire({
          title: "Congratulations!",
          text: "You have logged in successfully.",
          icon: "success",
          confirmButtonText: "Go to Profile",
          confirmButtonColor: "#df314d",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/";
          }
        });
      } else {
        Swal.fire({
          title: "Login Failed!",
          text: data.message || "Invalid email or password",
          icon: "error",
          confirmButtonColor: "#df314d",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#df314d",
      });
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="page-header-section style-1 bg-pink">
        <div className="container">
          <div className="page-header-content">
            <div className="page-header-inner">
              <div className="page-title">
                <h2>Shy-Eyes Login Page</h2>
              </div>
              <ol className="breadcrumb">
                <li><a href="/">Home</a></li>
                <li className="active">Login</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Login Form */}
      <div className="login-section padding-tb bg-ash">
        <div className="container">
          <div className="account-wrapper" style={{ backgroundColor: "#fff3f3" }}>
            <h3 className="title" style={{ color: "#e91e63" }}>Login</h3>

            <form className="account-form" onSubmit={(e) => e.preventDefault()}>
              {/* Email */}
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="form-group password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <span
                  className={`toggle-eye ${showPassword ? "active" : ""}`}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* Remember Me + Forget Password */}
              <div className="form-group">
                <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <a href="#">Forget Password?</a>
                </div>
              </div>

              {/* Login Button */}
              <div className="form-group" style={{ textAlign: "center", marginTop: "100px" }}>
                <button type="button" className="lab-btn" onClick={openModal}>
                  Login
                </button>
              </div>
            </form>

            {/* Terms Modal */}
            {showModal && (
              <div className="modal" style={{ display: "flex" }}>
                <div className="modal-content">
                  <div className="close-btn" onClick={closeModal}>×</div>
                  <h2>Terms & Conditions</h2>
                  <h3>Welcome to Shy-Eyes – Your Trusted Dating Platform</h3>
                  <p>By using our platform, you agree to the following terms and conditions.</p>
                  <p><strong>1. Age Requirement:</strong> Must be 18+ to register.</p>
                  <p><strong>2. Respectful Behavior:</strong> No harassment or abuse.</p>
                  <p><strong>3. Authentic Information:</strong> Provide truthful information.</p>
                  <p><strong>4. Subscription Fee:</strong> Non-refundable.</p>

                  <label>
                    <input
                      type="checkbox"
                      checked={agreeToTerms}
                      onChange={handleAgreeChange}
                    /> I agree to the terms and conditions
                  </label>

                  <button
                    className={`proceed-btn ${agreeToTerms ? "enabled" : ""}`}
                    disabled={!agreeToTerms}
                    onClick={handleProceed}
                  >
                    Proceed to Login
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Section */}
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Don't Have any Account? <Link to="/register">Register</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSection;