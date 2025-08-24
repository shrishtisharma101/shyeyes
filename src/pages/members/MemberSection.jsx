import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from '../../assets/images/member/01.jpg';
import img2 from '../../assets/images/member/01.jpg';
import img3 from '../../assets/images/member/01.jpg';
import img4 from '../../assets/images/member/01.jpg';
import img5 from '../../assets/images/member/01.jpg';
import img6 from '../../assets/images/member/01.jpg';
import def from '../../assets/images/profile/Women-Avtar.jpg';

// ✅ Dummy members if not logged in
const dummyMembers = [
  { id: 1, name: "Aarav Sharma", image: img1 },
  { id: 2, name: "Priya Singh", image: img2 },
  { id: 3, name: "Rahul Verma", image: img3 },
  { id: 4, name: "Ananya Desai", image: img4 },
  { id: 5, name: "Rohan Kapoor", image: img5 },
  { id: 6, name: "Simran Kaur", image: img6 },
];

const MemberSection = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
   const isLogin = !!token;
  // ✅ Fetch members from API or fallback to dummy
  const fetchMembers = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        // No login → show dummy
        setMembers(dummyMembers);
        setLoading(false);
        return;
      }

      const res = await fetch("https://chat.bitmaxtest.com/admin/api/active-users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok && data.status) {
         const formattedUsers = data.data.map((user) => ({
                  id: user.id,
                  name: user.name,
                  age: user.age || "21 Years Old", // API doesn’t provide age → fallback
                  image: user.image || def,
                  online: true,
                }));
        setMembers(formattedUsers);
      } else {
        console.error("Error fetching members:", data.message || "Unknown error");
        setMembers(dummyMembers); // fallback dummy if API fails
      }
    } catch (error) {
      console.error("Fetch failed:", error);
      setMembers(dummyMembers); // fallback dummy on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <section className="member-section padding-tb">
      <div className="container">
        <div className="section-header">
          <h4 className="theme-color">Meet Exciting Singles Near You!</h4>
          <h2>New Members in India</h2>
        </div>

        <div className="section-wrapper">
          {loading ? (
            <p className="text-center">Loading members...</p>
          ) : (
            <div className="row justify-content-center g-3 g-md-4">
              {members.length > 0 ? (
                members.slice(0, 10).map((member) => (
                  <div
                    className="col-xl-2 col-lg-3 col-md-4 col-6"
                    key={member.id}
                  >
                    <div className="lab-item member-item style-1">
                      <div className="lab-inner">
                        <div className="lab-thumb">
                          {isLogin ? (
                            <Link to="/profile">
                              <img src={member.image} alt={member.name} />
                            </Link>
                          ) : (
                            <Link to="/login">
                              <img src={member.image} alt={member.name} />
                            </Link>
                          )}
                        </div>
                        <div className="lab-content">
                          <h6>
                            <Link to="/login">{member.name}</Link>
                          </h6>
                          <p>Active Now</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">No members found</p>
              )}
            </div>
          )}

          <div className="member-button-group d-flex flex-wrap justify-content-center">
            <Link to="/register" className="lab-btn">
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
