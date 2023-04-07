/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export const Form = () => {
  return (
    <>
      <form className="form">
        <img className="blue-stripes" alt="blue stripes" src="./icons/blue-lines.png" />
        <h2>Become a member</h2>
        <svg className="left-black" width="486" height="523" viewBox="0 0 486 523" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M292.118 522.016H366.954L237.658 244.715L200.795 326.22L292.118 522.016Z" fill="#000" />
          <path d="M357.138 412.71H357.324L406.597 522H485.508L242.847 0L183.571 127.444L146.153 207.837L0 522H78.9113L128.185 412.71H128.555L184.126 289.897L221.174 208.392L242.847 160.786L357.138 412.71Z" fill="#000" />
        </svg>
        <div className="form-container">
          <p>Leave us your information and we'll contact you to finish the registration.</p>
          <div className="input-fields">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="phone">Phone:</label>
            <input type="number" id="phone" name="phone" />
          </div>
          <input type="submit" value="Send" className="submit-btn" />
        </div>
      </form>
      <img className="last-img" alt="man hanging from rings" src="./images/akram-huseyn-38LbVfMANUM-unsplash 2.png" />
    </>
  )
}