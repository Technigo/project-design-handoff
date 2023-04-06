import React from 'react';
import './TrialForm.css'

const TrialForm = () => {
  return (
    <div className="trialimg-container">
      <div className="color-overlay" />
      <img src={`${process.env.PUBLIC_URL}/img/trial.png`} alt="trial" />

      <div className="trial-content">
        <div className="title">
          <h2><span className="highlighted-text">Book </span>&nbsp;a free trial.</h2>
        </div>
        <div className="trial-text-p3">
          <p3>Tell us about your preferences and we offer
             you a tailored plan for healthier life
          </p3>
        </div>
        <form className="form-container">
          <input type="text" name="name" placeholder="Your name" />
          <input type="email" name="email" placeholder="E-mail" />
          <input type="tel" name="phone" placeholder="Phone" />
          <input type="text" name="city" placeholder="Current city/town" />

          <div className="checkbox-container">
            <label htmlFor="accept">
              <input type="checkbox" name="accept" id="accept" />
              <p>I am over 13 and accept the privacy policy, terms of service,
                 and code of conduct
              </p>
            </label>
          </div>

        </form>

        <div className="trial-button">
          <div type="submit">
            Get started free trial
          </div>
        </div>
      </div>

    </div>
  );
};

export default TrialForm;
