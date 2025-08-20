import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaPhoneAlt, FaCommentDots, FaVideo } from "react-icons/fa";
import UserCard from "./UserCard";

const Profile = () => {
  const navigate = useNavigate();
  const trackRef = useRef(null);


const handleClick = () => {
  window.location.href = "/chat";
}

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Jimmy Perez",
      age: "23 Years Old",
      image: "assets/images/aejaz-memon-29X9pcVHYTI-unsplash.jpg",
      online: true,
    },
    {
      id: 2,
      name: "Vanshi Chudhary",
      age: "21 Years Old",
      image: "assets/images/alexandru-zdrobau-BGz8vO3pK8k-unsplash.jpg",
      online: true,
    },
    {
      id: 3,
      name: "Amit Kumar",
      age: "21 Years Old",
      image: "assets/images/alexandru-zdrobau-BGz8vO3pK8k-unsplash.jpg",
      online: true,
    },
    {
      id: 4,
      name: "Sakshi Sharma",
      age: "21 Years Old",
      image: "assets/images/alexandru-zdrobau-BGz8vO3pK8k-unsplash.jpg",
      online: true,
    },
  ]);

  // Carousel functionality
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = track.children[0]?.offsetWidth + 20 || 320;

    const moveLeft = () => {
      track.style.transition = "transform 0.5s ease";
      track.style.transform = `translateX(-${cardWidth}px)`;
      setTimeout(() => {
        track.appendChild(track.firstElementChild);
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
      }, 500);
    };

    const moveRight = () => {
      track.insertBefore(track.lastElementChild, track.firstElementChild);
      track.style.transition = "none";
      track.style.transform = `translateX(-${cardWidth}px)`;
      requestAnimationFrame(() => {
        track.style.transition = "transform 0.5s ease";
        track.style.transform = "translateX(0)";
      });
    };

    const interval = setInterval(moveLeft, 4000);
    return () => clearInterval(interval);
  }, []);

  // SweetAlert helper
  const showSubscriptionAlert = (feature) => {
    Swal.fire({
      title: "Subscription Required",
      text: `${feature} feature is available only for subscribed users.`,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#aaa",
      confirmButtonText: "Subscribe Now",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/pricing-plan");
      }
    });
  };

  const handleRequest = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, requested: !user.requested } : user
      )
    );
  };

  return (
    <div className="profile-page">
      {/* Page Header Section */}
      <section className="page-header-section style-1 bg-pink">
        <div className="container">
          <div className="page-header-content">
            <div className="page-header-inner">
              <div className="page-title">
                <h2>Some Matches To Your Profile</h2>
              </div>
              <ol className="breadcrumb">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">Profiles</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Carousel */}
      <section className="profile-section">
        <div className="carousel-container">
          <button className="arrow-btn" onClick={() => trackRef.current && trackRef.current.lastElementChild && trackRef.current.insertBefore(trackRef.current.lastElementChild, trackRef.current.firstElementChild)}>&#10094;</button>
          <button className="arrow-btn" onClick={() => trackRef.current && trackRef.current.firstElementChild && trackRef.current.appendChild(trackRef.current.firstElementChild)}>&#10095;</button>

          <div className="card-container" ref={trackRef}>
            {users.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onChatClick={handleClick}
                onRequest={handleRequest}
                onShowAlert={showSubscriptionAlert}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Floating Lottie Animation */}
      <dotlottie-wc
        src="https://lottie.host/ee468a01-9f4c-4ccc-8c32-43eda3b6d49b/a94TBYW5n7.lottie"
        style={{
          width: "150px",
          height: "150px",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "9999",
        }}
        speed="1"
        autoplay
        loop
      ></dotlottie-wc>
    </div>
  );
};


export default Profile;
