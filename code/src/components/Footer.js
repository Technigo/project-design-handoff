import React from 'react';
import { Button } from './Button';

export const Footer = () => {
  return (
    <footer>
      <img
        src={`${process.env.PUBLIC_URL}/assets/Logo.png`}
        alt="Logo for Cross Park" />
      <h2>STAY IN TOUCH</h2>
      <h3>JOIN OUR NEWSLETTER</h3>
      <p>Subscribe to our newsletter to receive the latest news.</p>
      <input type="email" placeholder="YOUR E-MAIL" />
      <Button footerCta>Sign up!</Button>
      <h4>CONTACT</h4>
      <h5>MAIL</h5>
      <p>info@crosspark.com</p>
      <h5>PHONE NUMBER</h5>
      <p>+46 70-5800921</p>
    </footer>
  )
}