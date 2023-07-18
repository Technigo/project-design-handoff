/* eslint-disable */
import React from 'react';
import './Form.css';

export const Form = () => {
  return (
    <section>
      <div className="registerWrapper">
        <div className="registerTop" >
        <h2 className="registerText">Register at Raise Studio </h2>
        <h3 className="accountText">Create an Account to Book Barre Classes and Buy Credits.</h3>
        <p className="loginText">Already have an account? 
        <button type="button" className="loginBtn">Login</button></p>
      </div>
      <div className="registerMain">
        <form className="registerForm">
          <label htmlFor="firstName">
            <span>First Name</span>
            <input type="text" id="firstName" name="firstName" required /><br />
          </label>
          <label htmlFor="lastName">
            <span>Last Name</span>
            <input type="text" id="lastName" name="lastName" required /><br /> 
          </label>
          <label htmlFor="phoneNumber">
            <span>Phone number</span>
            <input type="tel" id="phoneNumber" name="phoneNumber" required /><br />
          </label>
          <label htmlFor="email">
            <span>Email (username)</span>
            <input type="email" id="email" name="email" required /><br />
          </label>
          <label htmlFor="password">
            <span>Password</span>
            <input type="password" id="password" name="password" required /><br />
          </label>
          <div className="checkboxContainer">
            <label htmlFor="newsletter">
              <input type="checkbox" id="newsletter" name="newsletter" value="newsletter" />
             <span>I want to receive Raise Studio&apos;s Newsletter!</span>
            </label><br />
            <label htmlFor="terms">
              <input type="checkbox" id="terms" name="terms" value="terms" />
             <span>I have read and understood the 
              <button type="button" className="registerBtn">Terms & Conditions</button> and
              <button type="button" className="registerBtn">Privacy Policy.</button>
             </span>
            </label>
            </div>
            <div className="joinBtnWrapper">
              <button className="joinBtn2" type="button">Join Raise Studio</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}