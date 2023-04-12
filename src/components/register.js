/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import './css/register.css'

export const Register = () => {
  const [name, setName] = useState('');

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="register-container">
      <h1 className="titlereg">Become a member</h1>
      <form onSubmit={handleSubmit} className="form">
        <p>Leave us your information and we’ll contact you to finish the registration.</p>
        <div>
          <label htmlFor="name">Full Name:</label>
          <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Phone:</label>
          <input className="input" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input className="input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <button className="formBtn" type="submit">Submit</button>
      </form>

    </div>
  );
};
