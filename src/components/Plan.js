/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../index.css'

const Plan = ({ title, buttonsTexts, buttonText, finishingText, onClick }) => {
  return (
    <section className="plan-section">
      <h2>{title}</h2>
      <div className="plan-buttons">
        {buttonsTexts.map((text) => (
          <button type="button" key={text} className="plan-button">
            <span className="plan-button-line1">{text.line1}</span>
            <span className="plan-button-line2">{text.line2}</span>
          </button>
        ))}
      </div>
      <form className="plan-form">
        <div className="plan-form-name">
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" />
        </div>
        <div className="plan-form-lastname">
          <label htmlFor="surname">Surname</label>
          <input type="text" id="surname" />
        </div>
        <div className="plan-form-email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="plan-form-pwd">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="button" className="create-account" onClick={onClick}>{buttonText}</button>
      </form>
      <p className="plan-finishing-text">{finishingText}</p>
    </section>
  );
};

export default Plan;
