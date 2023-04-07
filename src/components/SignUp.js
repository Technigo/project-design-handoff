/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import './SignUp.css'
import { MainButton } from 'button/MainButton';

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signupform">
        <h3>Form for sign up</h3>
        <form>
          <p>Name</p>
          <input type="text" placeholder="First Lastname" />
        </form>
        <form>
          <p>Email</p>
          <input type="text" placeholder="example@email.com" />
        </form>
        <form>
          <p>Phone number</p>
          <input type="text" placeholder="+46 123 11 22 33" />
        </form>
        <form>
          <p>Please choose class</p>
          <select>
            <option value="" selected>Classes</option>
            <option value="Beginner class">Beginner class</option>
            <option value="Intermediate class">Intermediate class</option>
            <option value="Expert class">Expert class</option>
          </select>
        </form>
        <div className="radio-div">
          <p>Do you have any prior experience with aerial silks?</p>
          <form>
            <p>Yes</p>
            <input type="radio" />
          </form>
          <form>
            <p>No</p>
            <input type="radio" />
          </form>
          <form>
            <p>I do not know</p>
            <input type="radio" />
          </form>
        </div>
        <div className="radio-div">
          <p>Do you have any injuries or medical
            conditions that may affect your ability to participate in aerial silks classes?</p>
          <div className="radio-div">
            <form>
              <p>Yes</p>
              <input type="radio" />
            </form>
            <form>
              <p>No</p>
              <input type="radio" />
              <MainButton>Send now</MainButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;