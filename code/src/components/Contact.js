import React from 'react';
import backgroundImage from '../images/image-woman-waterbottle.png'
import '../contact.css';

const Contact = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`
  };
  return (
    <div className="contact" style={backgroundStyle}>
      <div className="contact-content">
        <h2>Book a free trial</h2>
        <p>Tell us about your preferences and we offer you a tailored plan for a healthier life</p>
        <form>
          <label className="nameinput" htmlFor="name">Name:
            <input
              type="text"
              id="name"
              name="name"
              required />
          </label>
          <label className="emailinput" htmlFor="email">Email:
            <input
              type="email"
              id="email"
              name="email"
              required />
          </label>

          <label className="phoneinput" htmlFor="phone">Phone:
            <input
              type="tel"
              id="phone"
              name="phone"
              required />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
