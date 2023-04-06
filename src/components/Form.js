/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export const Form = () => {
  return (
    <form className="form">
      <h2>Become a member</h2>
      <div className="form-container">
        <p>Leave us your information and we'll contact you to finish the registration.</p>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="phone">Phone:</label>
        <input type="number" id="phone" name="phone" />
        <input type="submit" value="Submit" />
      </div>
    </form>
  )
}