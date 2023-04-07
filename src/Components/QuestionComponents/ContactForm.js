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
      <label htmlFor="email">
        Enter your email address
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="email@domain.com" />
      </label>

      <label htmlFor="message">Enter your message
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleMessageChange}
          placeholder="Your message here" />
      </label>

      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
