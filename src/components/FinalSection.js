import React from 'react';
import './FinalSection.css';
import PrimaryButtonLarge from './PrimaryButtonLarge.js';

const FinalSection = () => {
  return (
    <div className="finalSection">
      <div className="testimonalsWrapper">
        <h2 className="testimonialsTitle">Why Students Love Our Barre Classes</h2>
        <p style={{ marginBottom: '16px' }}>&quot;The instructors are amazing, the atmosphere is supportive,
            and the workouts are challenging yet fun!&quot;
        </p>
        <p style={{ marginBottom: '24px' }}>-Robyn Andersson, <span>Barre Basic Student</span></p>
        <p style={{ marginBottom: '16px' }}>&quot;I can feel the muscles working and getting stronger.
            I always feel energized at the end of the class&quot;
        </p>
        <p>-Paula Ray, <span>Barre Strong Student</span></p>
      </div>
      <div className="registerWrapper">
        <div className="topRegister">
          <h2 className="registerTitle">Register at Raise Studio</h2>
          <h3 className="accountTitle">Create an Account to Book Barre Classes and Buy Credits.</h3>
          <p className="accountText">Already have an account? <button type="button" className="logInButton">Login</button></p>
        </div>
      </div>
      <div className="bottomFormRegister">
        <form className="registrationForm">
          <label htmlFor="firstName">
            <span>First Name</span>
            <input type="text" id="firstName" name="firstName" required /><br />
          </label>
          <label htmlFor="lastName">
            <span>Last Name</span>
            <input type="text" id="lastName" name="lastName" required /><br />
          </label>
          <label htmlFor="phone">
            <span>Phone number</span>
            <input type="tel" id="phone" name="phone" required /><br />
          </label>
          <label htmlFor="email">
            <span>Email (username) </span>
            <input type="email" id="email" name="email" required /><br />
          </label>
          <label htmlFor="password">
            <span>Password</span>
            <input type="password" id="password" name="passoword" required /><br />
          </label>
          <div className="checkboxContainer">
            <label htmlFor="newsletter">
              <span>I want to receive Raise Studio&apos;s
          Newsletter!
              </span>
              <input type="checkbox" id="newsletter" name="newsletter" value="newsletter" />
            </label><br />
            <label htmlFor="termsAndConditions">
              <span>I have read and understood the
                <button type="button" className="registrationButton"> Terms & Conditions</button> and
                <button type="button" className="registrationButton"> Privacy Policy</button>
              </span>
              <input type="checkbox" id="termsAndConditions" name="termsAndConditions" value="termsAndConditions" />
            </label>
          </div>
          {/* <input type="submit" value="Submit" /> */}
          <PrimaryButtonLarge className="primaryButtonLarge" buttonText="Join Raise Studio" />
        </form>
      </div>
    </div>
  )
}

export default FinalSection;