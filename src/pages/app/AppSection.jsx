import React from 'react';

const AppSection = () => {
  return (
    <section className="app-section bg-pink">
      <div className="container">
        <div className="section-wrapper padding-tb">
          <div className="app-content">
            <h4>Download the Shy-Eyes App</h4>
            <h2>Connect With Genuine People Instantly</h2>
            <p>Join India's most trusted private dating and networking platform. Over 5,00,000+ users have already started their journey towards meaningful connections. With Shy-Eyes, safety, privacy, and real conversations come first.</p>
            <ul className="app-download d-flex flex-wrap">
              <li>
                <a href="#" className="d-flex flex-wrap align-items-center">
                  <div className="app-thumb">
                    <img src="assets/images/app/apple.png" alt="apple" />
                  </div>
                  <div className="app-content">
                    <p>Download on the</p>
                    <h4>App Store</h4>
                  </div>
                </a>
              </li>
              <li className="d-inline-block">
                <a href="#" className="d-flex flex-wrap align-items-center">
                  <div className="app-thumb">
                    <img src="assets/images/swipe-down.png" style={{width: "30px"}} alt="Download App" />
                  </div>
                  <div className="app-content">
                    <p>Get it on APK File</p>
                    <h4>Download App</h4>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="mobile-app">
            <img src="assets/images/app/mobile-view.png" alt="Shy-Eyes Mobile Preview" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;