import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <section>
      <div className="register">
        <h2>Register at Raise Studio </h2>
        <h3>Create an Account to Book Barre Classes and Buy Credits.</h3>
        <p className="login">Already have an account? Login</p>
      </div>
      <div className="form">
        <form className="labels">
          <label className="name"> First Name
            <input type="text"/>
          </label>
          <label> Last Name
            <input type="text"/>
          </label>
          <label> Phone number
            <input type="number"/>
          </label>
          <label> Email (username)
            <input type="email"/>
          </label>
          <label> Password
            <input type="password"/>
          </label>
          <label>
            <input type="checkbox"/>
            I want to receive Raise Studio’s Newsletter!
          </label>
          <label>
            <input type="checkbox"/>
            I have read and understood the Terms & Conditions and Privacy Policy.
          </label>
          <button className="joinBtn2" type="button">Join Raise Studio</button>
        </form>
      </div>
    </section>
  )
}

export default Form

/*
Link for Login
https://www.w3schools.com/css/css_link.asp
*/