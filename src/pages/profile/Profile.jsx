import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';


const Profile = () => {
    // Carousel functionality
useEffect(() => {
  const track = document.getElementById('carouselTrack');
  if (!track) return;
  
  const cardWidth = track.children[0]?.offsetWidth + 25 || 315;
  
  const moveLeft = () => {
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(-${cardWidth}px)`;
    setTimeout(() => {
      track.appendChild(track.firstElementChild);
      track.style.transition = 'none';
      track.style.transform = 'translateX(0)';
    }, 500);
  };

  const moveRight = () => {
    track.insertBefore(track.lastElementChild, track.firstElementChild);
    track.style.transition = 'none';
    track.style.transform = `translateX(-${cardWidth}px)`;
    requestAnimationFrame(() => {
      track.style.transition = 'transform 0.5s ease';
      track.style.transform = 'translateX(0)';
    });
  };

  const leftBtn = document.querySelector('.arrow-left');
  const rightBtn = document.querySelector('.arrow-right');
  
  if (leftBtn) leftBtn.addEventListener('click', moveRight);
  if (rightBtn) rightBtn.addEventListener('click', moveLeft);
  
  const interval = setInterval(moveLeft, 4000);
  
  return () => {
    if (leftBtn) leftBtn.removeEventListener('click', moveRight);
    if (rightBtn) rightBtn.removeEventListener('click', moveLeft);
    clearInterval(interval);
  };
}, []);

// Handle subscription popups
const handleAudioClick = () => {
  Swal.fire({
    title: 'Subscription Required',
    text: "Audio feature is available only for subscribed users.",
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#aaa',
    confirmButtonText: 'Subscribe Now'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = '/pricing-plan';
    }
  });
};

const handleVideoClick = () => {
  Swal.fire({
    title: 'Subscription Required',
    text: "Video feature is available only for subscribed users.",
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#aaa',
    confirmButtonText: 'Subscribe Now'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = '/pricing-plan';
    }
  });
};

const handleChatClick = () => {
  window.location.href = "/chat";
};
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Jimmy Perez",
      age: "23 Years Old",
      image: "assets/images/aejaz-memon-29X9pcVHYTI-unsplash.jpg",
      online: true
    },
    {
      id: 2,
      name: "Vanshi Chudhary",
      age: "21 Years Old",
      image: "assets/images/alexandru-zdrobau-BGz8vO3pK8k-unsplash.jpg",
      online: true
    },
    {
      id: 2,
      name: "Amit Kumar",
      age: "21 Years Old",
      image: "assets/images/alexandru-zdrobau-BGz8vO3pK8k-unsplash.jpg",
      online: true
    },
    {
      id: 2,
      name: "Sakshi Sharma",
      age: "21 Years Old",
      image: "assets/images/alexandru-zdrobau-BGz8vO3pK8k-unsplash.jpg",
      online: true
    },
  ]);

  const handleRequest = (id) => {
    // Handle friend request logic
    setUsers(users.map(user => 
      user.id === id ? {...user, requested: !user.requested} : user
    ));
  };

  return (
    <div className="profile-page">
      <Header />
      
      {/* Page Header Section */}
      <section className="page-header-section style-1 bg-pink">
        <div className="container">
          <div className="page-header-content">
            <div className="page-header-inner">
              <div className="page-title">
                <h2>Some Matchs To Your Profile</h2>
              </div>
              <ol className="breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li className="active">Profiles</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section with Carousel */}
      <section className="profile-section">
        <div className="carousel-container">
          <button className="arrow-btn arrow-left">&#10094;</button>
          <button className="arrow-btn arrow-right">&#10095;</button>
          
          <div className="card-container" id="carouselTrack">
            {users.map(user => (
              <UserCard 
                key={user.id} 
                user={user} 
                onRequest={handleRequest} 
              />
            ))}
          </div>
        </div>
        
        <div id="popup" className="popup">Request Sent Successfully !</div>
      </section>

      {/* Lottie Animation */}
      <dotlottie-wc 
        src="https://lottie.host/ee468a01-9f4c-4ccc-8c32-43eda3b6d49b/a94TBYW5n7.lottie" 
        style={{
          width: "150px", 
          height: "150px", 
          position: "fixed", 
          bottom: "20px", 
          right: "20px", 
          zIndex: "9999"
        }} 
        speed="1" 
        autoplay 
        loop
      ></dotlottie-wc>
    </div>
  );
};

// User Card Component
const UserCard = ({ user, onRequest }) => {
  return (
    <div className="user-card">
      <div className="user-image">
        <img src={user.image} alt={user.name} />
        <div className="hover-overlay">
          <Link to="#" className="more-link">More</Link>
        </div>
      </div>
      <div className="user-info">
        <button 
          className={`send-btn ${user.requested ? 'sent' : ''}`}
          onClick={() => onRequest(user.id)}
        >
          {user.requested ? "Cancel Request" : "Send Request"}
        </button>
        
        {user.online ? (
          <div className="name-container">
            <h4>{user.name}</h4>
            <span className="online-dot"></span>
          </div>
        ) : (
          <h4 className="offline-status">{user.name}</h4>
        )}
        
        <p>{user.age}</p>
        <div className="btn-group">
          <button className="chat-btn" >
            <i className="fas fa-phone"></i>
          </button>
          <button className="chat-btn" >
            <i className="fas fa-comment-dots"></i>
          </button>
          <button className="chat-btn" >
            <i className="bi bi-camera-video-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;