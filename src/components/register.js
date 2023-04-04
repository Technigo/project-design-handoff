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
      <h1>Register for Membership</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
