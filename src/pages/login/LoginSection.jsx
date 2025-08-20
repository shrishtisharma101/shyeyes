import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Login.css';
const LoginSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleAgreeChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  const handleProceed = () => {
    if (agreeToTerms) {
      closeModal();
      
      Swal.fire({
        title: 'Congratulations!',
        text: 'Your profile has been created successfully.',
        icon: 'success',
        confirmButtonText: 'Go to Profile',
        confirmButtonColor: '#df314d'
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirect to profile page
          window.location.href = "profile2.html";
        }
      });
    }
  };

  return (
    <>
    <section class="page-header-section style-1 bg-pink">
        <div class="container">
            <div class="page-header-content">
                <div class="page-header-inner">
                    <div class="page-title">
                        <h2>Shy-Eyes Login Page</h2>
                    </div>
                    <ol class="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li class="active">Login</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
   
    <div className="login-section padding-tb bg-ash">
      <div className="container">
        <div className="account-wrapper" style={{ backgroundColor: '#fff3f3' }}>
          <h3 className="title" style={{ color: '#e91e63' }}>Login</h3>
          <form className="account-form">
            <div className="form-group">
              <input type="text" placeholder="User Name" name="username" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" name="password" />
            </div>
            <div className="form-group">
              <div className="d-flex justify-content-between flex-wrap pt-sm-2">
                <div className="checkgroup">
                  <input type="checkbox" name="remember" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div>
                <a href="#">Forget Password?</a>
              </div>
            </div>
            <div className="form-group">
              <div style={{ textAlign: 'center', marginTop: '100px' }}>
                <button type="button" className="lab-btn" onClick={openModal}>
                  Login
                </button>
              </div>
            </div>
          </form>

          {/* Terms Modal */}
          {showModal && (
            <div className="modal" style={{ display: 'flex' }}>
              <div className="modal-content">
                <div className="close-btn" onClick={closeModal}>×</div>
                <h2>Terms & Conditions</h2>
                <h3>Welcome to Shy-Eyes – Your Trusted Dating Platform</h3>
                <p>By using our platform, you agree to the following terms and conditions. Please read them carefully before proceeding.</p>

                <p><strong>1. Age Requirement:</strong><br />
                You must be at least 18 years old to register and use Shy-Eyes. We do not permit minors on our platform.</p>

                <p><strong>2. Respectful Behavior:</strong><br />
                You agree to communicate respectfully and avoid any form of abuse, harassment, discrimination, or offensive content. Hateful speech or threats will result in immediate account suspension.</p>

                <p><strong>3. Authentic Information:</strong><br />
                You must provide accurate, current, and truthful information during registration and profile setup. Fake or misleading information is strictly prohibited.</p>

                <p><strong>4. Subscription Fee:</strong><br />
                All subscription fees are non-refundable. Once a payment is made, it cannot be reversed or returned, regardless of the level of usage or user satisfaction.</p>

                <label>
                  <input 
                    type="checkbox" 
                    id="agreeCheckbox" 
                    checked={agreeToTerms}
                    onChange={handleAgreeChange}
                  /> 
                  I agree to the terms and conditions
                </label>

                <button 
                  className={`proceed-btn ${agreeToTerms ? 'enabled' : ''}`} 
                  disabled={!agreeToTerms}
                  onClick={handleProceed}
                >
                  Proceed to Login
                </button>
              </div>
            </div>
          )}

          <div className="account-bottom">
            <span className="d-block cate pt-10">
              Don't Have any Account? <a href="register.html">Register</a>
            </span>
            <span className="or"><span>or</span></span>
            <h5 className="subtitle">Login With Social Media</h5>
            <ul className="social-media social-color lab-ul d-flex justify-content-center">
              <li>
                <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
              </li>
              <li>
                <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
              </li>
              <li>
                <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
              </li>
              <li>
                <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
              </li>
              <li>
                <a href="#" className="pinterest"><i className="icofont-pinterest"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
     </>
  );
};

export default LoginSection;