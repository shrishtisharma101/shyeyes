import React from 'react';
import img01 from '../../assets/images/banner/01.png'

const BannerSection = () => {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="section-wrapper">
          <div className="row align-items-end">
            <div className="col-lg-6">
              <div className="banner-content">
                <div className="intro-form">
                  <div className="intro-form-inner">
                    <h3>Welcome to SHY-EYES</h3>
                    <p>Real Connections Start with <strong>SHY-EYES</strong> – Where Finding Your Perfect Match Feels Effortless and Fun.</p>
                    <form className="banner-form">
                      {/* Form fields */}
                    </form>
                    <ul className="social-list">
                      <li className="google">
                        <a href="#">
                          <img src="assets/images/banner/google.png" alt="Google" />
                          <span>Continue with Google</span>
                        </a>
                      </li>
                      <li className="facebook">
                        <a href="#">
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="#">
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-thumb">
                <img src={img01} alt="SHY-EYES Banner Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-shapes">
        {/* Banner shapes */}
      </div>
    </section>
  );
};

export default BannerSection;