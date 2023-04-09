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
        <h1><span style={{ color: '#62CABC' }}>Book</span> <span style={{ color: 'white' }}>a free trial</span></h1>
        <p>Tell us about your preferences and we offer you a tailored plan for a healthier life</p>
        <form>
          <label className="nameinput" htmlFor="name">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required />
          </label>
          <label className="emailinput" htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              required />
          </label>

          <label className="phoneinput" htmlFor="phone">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone"
              required />
          </label>

          <label className="locationinput" htmlFor="location">
            <input
              type="text"
              id="location"
              name="location"
              required
              placeholder="Your current location (city)" />
          </label>

          <button type="submit">Get started free trial</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
