import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <>
      <img src="/assets/lotus.svg" alt="lotus logo" />
      <p>Radiant Roots in Abril Fatface</p>
      <p>Affiliate Links</p>
      <p>FAQ</p>
      <p>Terms & Conditions</p>
      <p>Contact</p>
      <div>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTiktok} />
        <FontAwesomeIcon icon={faTwitter} />
      </div>
    </>
  )
}