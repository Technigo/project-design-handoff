import React from 'react';

const FormSection = () => {
  return (
    <section className="form-section-container">
      <div className="form-text-wrapper">
        <h1 className="h1-form-section">Register at Raise Studio</h1>
        <h2 className="h2-form-section">Create an account to book barre classes and buy credits</h2>
        <p className="paragraph-form-section">Already have an account? Login</p>
      </div>
      <form className="register-form">
        <label htmlFor="first-name">
          <p className="input-label">First Name</p>
          <input type="text" />
        </label>
        <label htmlFor="last-name">
          <p>Last name</p>
          <input type="text" />
        </label>
        <label htmlFor="phone-number">
          <p className="input-label">Phone number</p>
          <input type="text" />
        </label>
        <label htmlFor="email">
          <p className="input-label">Email (username)</p>
          <input type="text" />
        </label>
        <label htmlFor="newsletter">
          <p className="input-label">I want to recieve Raise Studios newsletter!</p>
          <input type="checkbox" />
        </label>
        <label htmlFor="newsletter">
          <p className="input-label">I have read and understood the Terms & Conditions and Privacy Policy</p>
          <input type="checkbox" />
        </label>
      </form>
      <button className="primary-button" type="button">Join Raise Studio</button>

    </section>
  );
}

export default FormSection;