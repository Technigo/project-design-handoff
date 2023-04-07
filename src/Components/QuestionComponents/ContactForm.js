/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the email and message
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Enter your Email address</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        required
      />

      <label htmlFor="message">Enter your message:</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={handleMessageChange}
        required
      />

      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
