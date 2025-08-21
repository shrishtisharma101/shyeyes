import React, { useState, useRef } from "react";
import "./Nextstep.css";
import { FaCamera, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function NextStep() {
  const [dob, setDob] = useState("2007-01-10");
  const [age, setAge] = useState(18);
  const [gender, setGender] = useState("male");
  const [location, setLocation] = useState({
    street: "",
    city: "",
    state: "",
    country: ""
  });
  const [about, setAbout] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const dobRef = useRef(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate(); // ✅ React Router hook

  const handleDobChange = (e) => {
    const selectedDate = e.target.value;
    setDob(selectedDate);
    const birthDate = new Date(selectedDate);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      calculatedAge--;
    }
    setAge(calculatedAge);
  };

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignup = () => {
    // ⚡ Here you can send form data to your backend API if needed
    // For now, just redirect after "signup"
    console.log({
      dob,
      age,
      gender,
      location,
      about,
      profilePic
    });

    // ✅ redirect to login
    navigate("/login");
  };

  return (
    <div className="personal-background">
      <div className="personal-container">
        <form className="personal-form" onSubmit={(e) => e.preventDefault()}>
          <h2 className="personal-title">Personal Information</h2>

          {/* Profile Pic Upload */}
          <div
            className="profile-pic"
            onClick={() => fileInputRef.current.click()}
          >
            <div className="pic-circle">
              {profilePic ? (
                <img src={profilePic} alt="Profile" className="profile-preview" />
              ) : (
                <FaCamera className="camera-icon" />
              )}
            </div>
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleProfileUpload}
          />

          {/* Date of Birth */}
          <label>Date of Birth</label>
          <div className="dob-input">
            <input
              type="date"
              value={dob}
              onChange={handleDobChange}
              ref={dobRef}
            />
            <FaCalendarAlt
              className="calendar-icon"
              onClick={() => dobRef.current.showPicker()}
            />
          </div>

          {/* Age */}
          <label>Age</label>
          <input type="number" value={age} readOnly />

          {/* Gender */}
          <label>Gender</label>
          <div className="gender-group">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              /> Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              /> Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="transgender"
                checked={gender === "transgender"}
                onChange={(e) => setGender(e.target.value)}
              /> Transgender
            </label>
          </div>

          {/* Location */}
          <label>Location</label>
          <div className="location-group">
            <input
              type="text"
              placeholder="Street"
              value={location.street}
              onChange={(e) =>
                setLocation({ ...location, street: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="City"
              value={location.city}
              onChange={(e) => setLocation({ ...location, city: e.target.value })}
            />
            <input
              type="text"
              placeholder="State"
              value={location.state}
              onChange={(e) => setLocation({ ...location, state: e.target.value })}
            />
            <input
              type="text"
              placeholder="Country"
              value={location.country}
              onChange={(e) =>
                setLocation({ ...location, country: e.target.value })
              }
            />
          </div>

          {/* About */}
          <label>About</label>
          <textarea
            placeholder="Tell us about yourself..."
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>

          {/* Signup Button */}
          <button
            type="button"
            className="signup-btn"
            onClick={handleSignup}
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}