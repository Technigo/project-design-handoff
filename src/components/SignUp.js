import React from 'react';
import './SignUp.css'

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signupform">
        <p>Form for sign up</p>
        <form>
          <input type="text" placeholder="First Lastname" />
          <input type="text" placeholder="example@email.com" />
          <input type="text" placeholder="+46 123 11 22 33" />
          <select>
            <option value="" selected>Classes</option>
            <option value="Beginner class">Beginner class</option>
            <option value="Intermediate class">Intermediate class</option>
            <option value="Expert class">Expert class</option>
          </select>
          <h3 className="radio-text">Do you have any prior experience with aerial silks?</h3>
          <div className="radio-div">
            <input type="radio" />
            <p>Yes</p>
            <input type="radio" />
            <p>No</p>
            <input type="radio" />
            <p>I do not know</p>
          </div>
          <h3 className="radio-text">Do you want us to contact you for any other inquiries?</h3>
          <div className="radio-div">
            <input type="radio" />
            <p>Yes</p>
            <input type="radio" />
            <p>No</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;