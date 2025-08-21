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
  const [file, setFile] = useState(null); // ✅ added back

  const dobRef = useRef(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

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
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile); // ✅ keep file for API
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(uploadedFile);
    }
  };

  // const handleSignup = async () => {
  //   try {
  //     const userId = localStorage.getItem("user_id");
  //     if (!userId) {
  //       alert("User ID not found! Please complete Step 1.");
  //       return;
  //     }

  //     // ✅ Convert DOB to "d F Y" format
  //     const birthDate = new Date(dob);
  //     const formattedDob = birthDate.toLocaleDateString("en-GB", {
  //       day: "2-digit",
  //       month: "long",
  //       year: "numeric",
  //     });

  //     const formData = new FormData();
  //     formData.append("user_id", userId);
  //     if (file !== null) formData.append("img", file); // ✅ safe check
  //     formData.append("dob", formattedDob);
  //     formData.append("age", age);
  //     formData.append("gender", gender);
  //     formData.append(
  //       "location",
  //       `${location.street}, ${location.city}, ${location.state}, ${location.country}`
  //     );
  //     formData.append("about", about);

  //     const response = await fetch(
  //       "https://bitmaxtest.com/shyeyes/api/register/step2",
  //       {
  //         method: "POST",
  //         body: formData,
  //       }
  //     );

  //     const data = await response.json();
  //     console.log("API Response:", data);

  //     if (response.ok && data.status) {
  //       alert(data.message);
  //       localStorage.setItem("user", JSON.stringify(data.user));
  //       navigate("/login");
  //     } else {
  //       alert(data.message || "Step 2 failed!");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     alert("Server error. Please try again later.");
  //   }
  // };
const handleSignup = async (e) => {
  if (e) e.preventDefault();

  try {
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("token"); // Step1 must store this

    if (!userId || !token) {
      alert("Missing User ID or Token. Please complete Step 1 first.");
      return;
    }

    if (file && file.size > 2 * 1024 * 1024) {
      alert("Profile image must be less than 2MB.");
      return;
    }

    // Format DOB -> d F Y
    const birthDate = new Date(dob);
    const formattedDob = `${birthDate.getDate().toString().padStart(2, "0")} ${birthDate.toLocaleString("en-GB", { month: "long" })} ${birthDate.getFullYear()}`;

    const formData = new FormData();
    formData.append("user_id", userId);
    if (file) formData.append("img", file);
    formData.append("dob", formattedDob);
    formData.append("age", age);
    formData.append("gender", gender);

    const locationString = [location.street, location.city, location.state, location.country]
      .filter(Boolean)
      .join(", ");
    formData.append("location", locationString);
    formData.append("about", about);

    const response = await fetch("https://bitmaxtest.com/shyeyes/api/register/step2", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    let data = {};
    try {
      data = await response.json();
    } catch {
      console.error("Non-JSON response from API");
    }

    console.log("API Response:", data);

    if (response.ok && data.status) {
      alert(data.message);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/login");
    } else {
      if (response.status === 422 && data.errors) {
        alert("Validation error: " + JSON.stringify(data.errors));
      } else {
        alert(data.message || "Step 2 failed!");
      }
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Server error. Please try again later.");
  }
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
                value="other"
                checked={gender === "other"}
                onChange={(e) => setGender(e.target.value)}
              /> Other
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
              onChange={(e) =>
                setLocation({ ...location, state: e.target.value })
              }
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
