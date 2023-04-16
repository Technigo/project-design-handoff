import React from 'react';

const FormSection = () => {
  return (
    <section className="form-section-container">
      <div className="form-text-wrapper">
        <h1 className="form-section-title">Register at Raise Studio</h1>
        <h2 className="form-section-text">Create an account to book barre classes and buy credits</h2>
        <p className="paragraph-form-section">Already have an account? Login</p>
      </div>
      <form className="register-form">
        <label htmlFor="first-name">
          <p className="input-label">First Name</p>
          <input type="text" id="first-name" />
        </label>
        <label htmlFor="last-name">
          <p className="input-label">Last name</p>
          <input type="text" is="last-name" />
        </label>
        <label htmlFor="phone-number">
          <p className="input-label">Phone number</p>
          <input type="text" id="phone-number" />
        </label>
        <label htmlFor="email">
          <p className="input-label">Email (username)</p>
          <input type="text" id="email" />
        </label>
        <label className="checkbox-wrapper" htmlFor="newsletter">
          <input type="checkbox" />
          <p className="checkbox-label">I want to receive Raise Studios newsletter!</p>
        </label>
        <label className="checkbox-wrapper" htmlFor="newsletter">
          <input type="checkbox" />
          <p className="checkbox-label">I have read and understood the Terms & Conditions and Privacy Policy</p>
        </label>
      </form>
      <button className="join-button" type="button">Join Raise Studio</button>

    </section>
  );
}

export default FormSection;