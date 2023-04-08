import React from 'react';
import '../contact.css';

const Contact = () => {
  return (
    <div className="contact" style={{ backgroundImage: 'url("./images/image-woman-waterbottle.png")' }}>
      <div className="contact-content">
        <h2>Book a free trial</h2>
        <p>Tell us about your preferences and we offer you a tailored plan for a healthier life</p>
        <form>
          <div>
            <label className="nameinput" htmlFor="name">Name:
              <input
                type="text"
                id="name"
                name="name"
                required />
            </label>
          </div>
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
