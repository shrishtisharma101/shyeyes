import React, { useState, useEffect, useRef } from "react";

import DefaultImage from "../../../assets/images/profile/cover.jpg"; 

const EditProfile = () => {
  const [formData, setFormData] = useState({
    f_name: "",
    l_name: "",
    phone: "",
    age: "",
    gender: "",
    location: "",
    dob: "",
    about: "",
  });

  const [profileImage, setProfileImage] = useState(DefaultImage);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  // 🔹 Floating hearts
  useEffect(() => {
    const container = document.querySelector(".hearts-container");

    const createHeart = () => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 4 + Math.random() * 3 + "s";
      heart.style.transform = `scale(${Math.random() * 0.7 + 0.4}) rotate(45deg)`;
      container.appendChild(heart);

      setTimeout(() => heart.remove(), 7000);
    };

    const interval = setInterval(createHeart, 500);
    return () => clearInterval(interval);
  }, []);

  // 🔹 Fetch profile data on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("❌ No token found in localStorage");
          return;
        }

        const res = await fetch("https://chat.bitmaxtest.com/admin/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const text = await res.text();
        let data;
        try {
          data = JSON.parse(text);
        } catch {
          throw new Error("Invalid response format (not JSON)");
        }

        if (!res.ok) throw new Error(data.message || "Failed to fetch profile");

        setFormData({
          f_name: data.f_name || "",
          l_name: data.l_name || "",
          phone: data.phone || "",
          age: data.age || "",
          gender: data.gender || "",
          location: data.location || "",
          dob: data.dob || "",
          about: data.about || "",
        });

        if (data.img) setProfileImage(data.img);
      } catch (err) {
        console.error("❌ Failed to fetch profile:", err);
      }
    };

    fetchProfile();
  }, []);

  // 🔹 Handle input change
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // 🔹 Handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // 🔹 Submit form (update backend)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("⚠️ You are not logged in!");
        return;
      }

      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key]) form.append(key, formData[key]);
      });

      if (fileInputRef.current?.files[0]) {
        form.append("img", fileInputRef.current.files[0]);
      }

      const res = await fetch(
        "https://chat.bitmaxtest.com/admin/api/profile/update",
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` }, // don't add content-type
          body: form,
        }
      );

      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Invalid response format (not JSON)");
      }

      if (!res.ok) throw new Error(data.message || "Update failed");

      alert("✅ Profile updated successfully!");
      console.log("Updated profile:", data);
    } catch (err) {
      console.error("❌ Error updating profile:", err);
      alert("Something went wrong! Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edit-container">
      {/* floating hearts */}
      <div className="hearts-container"></div>

      <div className="edit-header">
        <span className="back-arrow">←</span>
        <h2>Edit Profile</h2>
      </div>

      <div className="edit-card">
        <div className="profile-pic-container">
          <img src={profileImage} alt="Profile" className="profile-pic" />
          <span
            className="edit-icon"
            onClick={() => fileInputRef.current.click()}
          >
            ✎
          </span>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>

        <form className="edit-form" onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            name="f_name"
            value={formData.f_name}
            onChange={handleChange}
          />

          <label>Last Name</label>
          <input
            type="text"
            name="l_name"
            value={formData.l_name}
            onChange={handleChange}
          />

          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />

          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />

          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />

          <label>About</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Updating..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
