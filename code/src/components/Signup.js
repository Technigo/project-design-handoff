/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
// import logo from '../assets/logos/Vector.png';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <form className="signupform">
        <h3>Form for signup</h3>
        <label htmlFor="name"><span>Name</span>
          <br />
          <input type="text" id="name" name="name" className="inputfield" placeholder="First Lastname" />
        </label>

        <label htmlFor="email"><span>Email</span>
          <br />
          <input type="email" id="email" name="email" className="inputfield" placeholder="example@email.com" />
        </label>

        <label htmlFor="phone"><span>Phone number</span>
          <br />
          <input type="tel" id="phone" name="phone" className="inputfield" placeholder="+46 123 456 789" />
        </label>

        <label htmlFor="dropdown"><span>Please choose a class</span>
          <br />
          <select id="dropdown" name="dropdown" className="inputfield">
            <option value="classes" className="optionselected" disabled selected>Classes..</option>
            <option value="beginner">Beginner Class</option>
            <option value="intermediate">Intermediate Class</option>
            <option value="expert">Expert Class</option>
          </select>
        </label>

        <div className="radiosection">
          <label htmlFor="question1" className="formquestions">Do you have any prior experience with aerial silks?</label>

          <div className="answers">
            <label htmlFor="yes1">Yes
              <input type="radio" id="yes1" name="question1" value="yes" />
            </label>

            <label htmlFor="no1">No
              <input type="radio" id="no1" name="question1" value="no" />
            </label>

            <label htmlFor="dunno1">I don’t know
              <input type="radio" id="dunno1" name="question1" value="dunno" />
            </label>
          </div>
        </div>

        <div className="radiosection">
          <label htmlFor="question2" className="formquestions">Do you have any injuries or medical conditions that may affect your ability to participate in aerial silks classes?</label>

          <div className="answers">
            <label htmlFor="yes2">Yes
              <input type="radio" id="yes2" name="question2" value="yes" />
            </label>

            <label htmlFor="no2">No
              <input type="radio" id="no2" name="question2" value="no" />
            </label>

            <label htmlFor="dunno2">I don’t know
              <input type="radio" id="dunno2" name="question2" value="dunno" />
            </label>
          </div>
        </div>

        <div className="radiosection">
          <label htmlFor="question3" className="formquestions">Do you want us to contact you for any other inquiries?</label>

          <div className="answers">
            <label htmlFor="yes3">Yes
              <input type="radio" id="yes3" name="question3" value="yes" />
            </label>

            <label htmlFor="no3">No
              <input type="radio" id="no3" name="question3" value="no" />
            </label>
          </div>
        </div>

        <input type="submit" value="Send form" className="mainbutton" />
      </form>
    </div>
  );
};

export default Signup;
