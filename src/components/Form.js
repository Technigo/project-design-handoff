/* eslint-disable */
import React from 'react';
import './Form.css';

export const Form = () => {
  return (
    <section>
      <div className="register">
        <h2>Register at Raise Studio </h2>
        <h3>Create an Account to Book Barre Classes and Buy Credits.</h3>
        <p className="login">Already have an account? Login</p>
      </div>
      <div className="form">
        <form className="labels">
          <label className="name"> First Name
            <input type="text" />
          </label>
          <label className="last-name"> Last Name
            <input type="text" />
          </label>
          <label className="phone-number"> Phone number
            <input type="number" />
          </label>
          <label className="email"> Email (username)
            <input type="email" />
          </label>
          <label className="password"> Password
            <input type="password" />
          </label>
          <label className="newsletter">
            <input type="checkbox" />
            I want to receive Raise Studio’s Newsletter!
          </label>
          <label className="terms">
            <input type="checkbox" />
            I have read and understood the Terms & Conditions and Privacy Policy.
          </label>
          <button className="joinBtn2" type="button">Join Raise Studio</button>
        </form>
      </div>
    </section>
  );
}