import React, { useState } from 'react';

export const Register = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [membershipType, setMembershipType] = useState('');
  const [startDate, setStartDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Register for Membership</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Full Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label htmlFor="address">
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label htmlFor="age">
          Age:
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <label htmlFor="phone">
          Phone:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label htmlFor="email">
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="membership">
          Membership:
          <input type="text" value={membershipType} onChange={(e) => setMembershipType(e.target.value)} />
        </label>
        <label htmlFor="startDate">
          Start Date:
          <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
