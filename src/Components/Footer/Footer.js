// /////////////// IMPORT //////////////////////// //

import React from 'react';
import './Footer.css';

// /////////////// COMPONENT //////////////////////// //

export const Footer = () => {
  return (
    <div className="footer-box">
      <div className="social-media">
        <a className="socialIcon" href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src="./Pictures/instagramicon.svg" alt="icon" /></a>
        <a className="socialIcon" href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src="./Pictures/linkedinicon.svg" alt="icon" /></a>
        <a className="socialIcon" href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src="./Pictures/youtubeicon.svg" alt="icon" /></a>
        <a className="socialIcon" href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src="./Pictures/facebookicon.svg" alt="icon" /></a>
      </div>
    </div>
  )
}