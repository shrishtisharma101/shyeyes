import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/member/01.jpg';
import img2 from '../../assets/images/member/02.jpg';   
import img3 from '../../assets/images/member/03.jpg';
import img4 from '../../assets/images/member/04.jpg';

import img5 from '../../assets/images/member/05.jpg';
import img6 from '../../assets/images/member/06.jpg';

const members = [
  { id: 1, name: "Aarav Sharma", active: "1 Day", image: img1 },
  { id: 2, name: "Priya Singh", active: "2 Days", image: img2 },
  { id: 3, name: "Rahul Verma", active: "3 Days", image: img3 },
  { id: 4, name: "Ananya Desai", active: "5 Days", image: img4 },
  { id: 5, name: "Rohan Kapoor", active: "1 Day", image: img5 },
  { id: 6, name: "Simran Kaur", active: "1 Day", image: img6 },
];

const MemberSection = () => {
  return (
    <section className="member-section padding-tb">
      <div className="container">
        <div className="section-header">
          <h4 className="theme-color">Meet Exciting Singles Near You!</h4>
          <h2>New Members in India</h2>
        </div>
        <div className="section-wrapper">
          <div className="row justify-content-center g-3 g-md-4">
            {members.map(member => (
              <div className="col-xl-2 col-lg-3 col-md-4 col-6" key={member.id}>
                <div className="lab-item member-item style-1">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src={member.image} alt="member-img" />
                    </div>
                    <div className="lab-content">
                      <h6><Link to="/profile">{member.name}</Link></h6>
                      <p>Active {member.active}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="member-button-group d-flex flex-wrap justify-content-center">
            <Link to="/signup" className="lab-btn">
              <i className="icofont-users"></i>
              <span>Join Now & Start Dating</span>
            </Link>
            <Link to="/login" className="lab-btn">
              <i className="icofont-heart"></i>
              <span>See Who's Waiting for You ❤️</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberSection;