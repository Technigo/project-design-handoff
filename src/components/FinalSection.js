import React from 'react';
import './FinalSection.css';

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
        <form>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required /><br />
          <label htmlFor="newsletter">I want to receive Raise Studio%apos;s
          Newsletter!
          </label><br />
          <input type="checkbox" id="newsletter" name="newsletter" value="newsletter" />
          <label htmlFor="termsAndConditions">I have read and understood the
            <button type="button">Terms & Conditions</button> and
            <button type="button">Privacy Policy</button>
          </label>
          <input type="checkbox" id="termsAndConditions" name="termsAndConditions" value="termsAndConditions" />
          <input type="submit" value="Submit" />
          <button type="submit" className="joinUsButton...">Join Raise Studio</button>
        </form>
      </div>
    </div>
  )
}

export default FinalSection;