import React from 'react';
import './css/footer.css'
import Logo from './images/VectorLogo.svg'
import Insta from './images/insta.svg'
import Face from './images/facebook.svg'
import Tweet from './images/tweet.svg'
import Rebook from './images/reebook.png'
import Powerade from './images/powerrade.png'
import UnderArmour from './images/underarmour.png'
import Adidas from './images/adidas.png'

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footLogo">
        <img src={Logo} alt="logo" />
      </div>
      <p className="contactUs">Contact us:</p>
      <p className="contact">
acrogym@sportsorg.se
      </p>
      <p className="phone">078 652 45 32</p>
      <div className="soMe">
        <img src={Insta} alt="logo" />
        <img src={Face} alt="logo" />
        <img src={Tweet} alt="logo" />
      </div>
      <div className="sponsor">
        <img src={Rebook} alt="logo" />
        <img src={Powerade} alt="logo" />
        <img src={UnderArmour} alt="logo" />
        <img src={Adidas} alt="logo" />
      </div>
    </footer>
  );
}

// A footer with relevant information