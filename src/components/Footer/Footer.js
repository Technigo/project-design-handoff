
/* eslint-disable indent */
// /////////////// IMPORT //////////////////////// //

import React from 'react';
import './Footer.css';
import { StartButton } from 'components/StartButton/StartButton';
// /////////////// COMPONENT //////////////////////// //

export const Footer = () => {
    return (
        <div className="footer-box">
            <div className="footer-buttons">
                <StartButton ctalong>Get started</StartButton>
                <StartButton outlinedlong>Download app</StartButton>
            </div>
            <div className="socialMedia">
                <a className="socialIcon" href="https://www.facebook.com" target="_blank" rel="noreferrer"><img src="/images/Facebook.svg" alt="icon" /></a>
                <a className="socialIcon" href="https://www.instagram.com" target="_blank" rel="noreferrer"><img src="/images/Instagram.svg" alt="icon" /></a>
                <a className="socialIcon" href="https://www.youtube.com" target="_blank" rel="noreferrer"><img src="/images/Youtube.svg" alt="icon" /></a>
                <a className="socialIcon" href="https://www.linkedin.com" target="_blank" rel="noreferrer"><img src="/images/LinkedIn.svg" alt="icon" /></a>
            </div>
            <div className="links-container">
                <a className="links" href="https://www.linkedin.com" target="_blank" rel="noreferrer">GIFT CARDS</a>
                <a className="links" href=" https://www.linkedin.com" target="_blank" rel="noreferrer">PROMO CODES </a>
                <a className="links" href="https://www.linkedin.com" target="_blank" rel="noreferrer">ABOUT US</a>
                <a className="links" href="https://www.linkedin.com" target="_blank" rel="noreferrer">CONTACT US</a>
            </div>
        </div>
    )
}