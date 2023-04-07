import React, { useState } from 'react';
import { StyledForm } from 'styles/Form.styles';
import plans from 'libraries/plans';

export const Form = ({ id }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  // eslint-disable-next-line eqeqeq
  const planMatch = plans.find((plan) => plan.id == id);

  return (
    <StyledForm>
      <h2>Register Here</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="first-name" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" onChange={handleEmailChange} value={email} placeholder="Email Address" />
        <input type="password" minLength="8" onChange={handlePasswordChange} value={password} placeholder="Password" />
        <div className="buttons">
          <button type="button" className="log-in">Log in</button>
          <button type="submit" className="submit" disabled={!email || !password}>Sign up</button>
        </div>
      </form>
      {planMatch && (
        <div className="plan-card">
          <h3>{planMatch.title}</h3>
          <p className="price">{planMatch.price}</p>
          <p className="payment">{planMatch.payment}</p>
          <p className="subtitle">{planMatch.subtitle}</p>
          <div className="plan-details">
            <p>{planMatch.recipes}</p>
            <p>{planMatch.yoga}</p>
            <p>{planMatch.discount}</p>
          </div>
          <button type="button">Choose this plan</button>
        </div>)}
    </StyledForm>
  )
}