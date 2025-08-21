import React, { useEffect, useState } from 'react';
import './Register.css';
import { Call, Email, LocationCity, Lock, Person, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirm_password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const togglePassword = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'confirm_password') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
    console.log('Form submitted:', formData);
  };
  useEffect(() => {
    const heartContainer = document.getElementById("abcdhearts");

    const interval = setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.animationDuration = Math.random() * 5 + 3 + "s";
      heartContainer.appendChild(heart);

      setTimeout(() => heart.remove(), 8000);
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
  
    <section class="page-header-section style-1 bg-pink">
        <div class="container">
            <div class="page-header-content">
                <div class="page-header-inner">
                    <div class="page-title">
                        <h2>Shy-Eyes Register Page</h2>
                    </div>
                    <ol class="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li class="active">Register</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>
    
      <div className="signup-container">
        <h2>REGISTER</h2>
        <form className="account-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <Person className='material-icons'/>
            <input 
              type="text" 
              placeholder="First Name" 
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <Person className='material-icons'/>
            <input 
              type="text" 
              placeholder="Last Name" 
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <Email className="material-icons"/>
            <input 
              type="email" 
              placeholder="Email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <Call className="material-icons"/>
            <input 
              type="text" 
              placeholder="Phone" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <LocationCity className="material-icons"/>
            <input 
              type="text" 
              placeholder="Address" 
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <Lock className="material-icons"/>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <i 
              className="material-icons toggle-password" 
              onClick={() => togglePassword('password')}
              style={{cursor: 'pointer'}}
            >
              {showPassword ? <Visibility/> : <VisibilityOff/>}
            </i>
          </div>
          <div className="form-group">
            <Lock className="material-icons"/>
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="Confirm Password" 
              name="confirm_password"
              id="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              required
            />
            <i 
              className="material-icons toggle-password" 
              onClick={() => togglePassword('confirm_password')}
              style={{cursor: 'pointer'}}
            >
              {showConfirmPassword ?<Visibility/> : <VisibilityOff/>}
            </i>
          </div>
          
          <Link to="/nextstep" style={{textDecoration: 'none'}}>
            <button type="submit" className="signup-btn">Next</button>
          </Link>

          <div className="login-link">
            Already have an account? <Link to="/login" style={{color: '#e43059'}}>Login</Link>
          </div>
        </form>
        
      </div>
     <div className="heart-container" id="abcdhearts"></div>
     </>
  );
};

export default RegisterForm;