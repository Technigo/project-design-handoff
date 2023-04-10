/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Plan.css'

export const Plan = () => {
  return (
    <div className="plan">
      <h1 className="plan-heading">Choose your Plan</h1>
      <div className="plan-buttons">
        <button className="plan-button selected-button" type="submit">
          <p>Pre-selected<br />0 CHF</p>
        </button>
        <button className="plan-button" type="submit">
          <p>3 months plan<br />XX CHF</p>
        </button>
        <button className="plan-button" type="submit">
          <p>6 months plan<br />XX CHF</p>
        </button>
        <button className="plan-button" type="submit">
          <p>12 months plan<br />XX CHF</p>
        </button>
      </div>
      <div className="signup-form">
        <h2>Become a fit parent</h2>
        <form>
          <div className="form-group">
            <div className="name-group">
              <label htmlFor="firstname name">First name:</label>
              <input type="text" id="firstname" name="firstname" required />
            </div>
            <div className="name-group">
              <label htmlFor="surname">Surname:</label>
              <input type="text" id="surname" name="surname" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="button-container-plan">
            <button className="create-account" type="submit">Create Account</button>
            <p className="create-account-text">Already have an account? <a href="#">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}