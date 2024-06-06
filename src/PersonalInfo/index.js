import React, { useState, useEffect } from 'react';
import './styles.css';

const PersonalInfo = () => {

  const [formData, setFormData] = useState({
    firstName: localStorage.getItem('firstName') || '',
    lastName: localStorage.getItem('lastName') || '',
    email: localStorage.getItem('email') || '',
    phoneNumber: localStorage.getItem('phoneNumber') || '',
    password: localStorage.getItem('password') || '',
    confirmPassword: localStorage.getItem('confirmPassword') || '',
  });

  useEffect(() => {
    localStorage.setItem('firstName', formData.firstName);
    localStorage.setItem('lastName', formData.lastName);
    localStorage.setItem('email', formData.email);
    localStorage.setItem('phoneNumber', formData.phoneNumber);
    localStorage.setItem('password', formData.password);
    localStorage.setItem('confirmPassword', formData.confirmPassword);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    // Handle the navigation to the next component
    console.log('Next Step button clicked');
  };

  const handleBackToLogin = () => {
    // Handle the navigation to the login page
    console.log('Back to Login button clicked');
  };

  return (
    <>
      <br></br>
      <div className="background">
      <div className="haeder-text">
        <h2 style={{ textAlign: 'center' }}>Create New Account</h2>
        <p style={{ textAlign: 'right',marginTop:'25px' }}>Contact Us</p>
      </div>
      
        <div className="card">
          <div className="steps">
            <div className="step active">1. Your Profile</div>
            <div className="step">2. Business Information</div>
            <div className="step">3. Additional Users</div>
          </div>
          <br></br>
          <p>Step 1</p>
          <h1>Your Profile</h1>
          <p>Enter the login information for Your Account, you will</p>
          <p>be able to create additional users after registering.</p>
          <br></br>
          <div className="form">
            <div className="form-row">
              <div className="form-group">
                <label>First Name*</label>

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Input Your First Name"
              
                />
              </div>
              <div className="form-group">
                <label>Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Input Your Last Name"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Input Your Email"
                />
              </div>
              <div className="form-group">
                <label>Phone Number*</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Input Your Phone Number"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Password*</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create Password"
                />
              </div>
              <div className="form-group">
                <label>Confirm Password*</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Your Password"
                />
              </div>
            </div>
          </div>

        </div>
        <div className="buttons">
            <button className="back-button" onClick={handleBackToLogin}>{"< "}Back to Login</button>
            <button className="next-button" onClick={handleNextStep}>Next Step {" >"}</button>
          </div>
      </div>
    </>
  );
};

export default PersonalInfo;
