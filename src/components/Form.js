import React from 'react';
import '../css/Form.css';

const Form = () => {
  return (
    <div className="form">
      <div className="formContainer">
        <h2 className="formTitle">Register at Raise Studio</h2>
        <h3 className="formPresentation">Create an Account to Book Barre Classes and Buy Credits.</h3>
        <p className="formLogIn">Already have an account? <button type="button" className="logInBtn">Login</button></p>
      </div>
      <form className="registrationContainer">
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
            <span>I want to receive Raise Studio&apos;s Newsletter!
            </span>
            <input type="checkbox" id="newsletter" name="newsletter" value="newsletter" />
          </label><br />
          <label htmlFor="termsAndConditions">
            <span>I have read and understood the
              <button type="button" className="registrationBtn"> Terms & Conditions</button> and
              <button type="button" className="registrationBtn"> Privacy Policy</button>
            </span>
            <input type="checkbox" id="termsAndConditions" name="termsAndConditions" value="termsAndConditions" />
          </label>
        </div>
        <span>Join Raise Studio</span>
        <input type="submit" value="submit" className="joinRaiseStudioBtn" />
      </form>
    </div>
  )
}

export default Form;
