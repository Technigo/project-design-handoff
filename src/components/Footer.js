import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="logo-container">
        <img src="./logo2.svg" alt="logo" className="footer_logo" />
      </div>
      <div className="text-container">
        <p>Contact us:</p>
        <p>acrogym@sportsorg.se</p>
        <p>mob: 078 652 45 32</p>
      </div>
      <div className="social-media-container">
        <img src="./ig.svg" alt="logo" className="social_media_logo" />
        <img src="./fb.svg" alt="logo" className="social_media_logo" />
        <img src="./tw.svg" alt="logo" className="social_media_logo" />
      </div>
      <div className="company-container">
        <div><img src="./UA.png" alt="logo" className="company_logo inverted" /></div>
        <div><img src="./Reebok.png" alt="logo" className="company_logo inverted" /></div>
        <div><img src="./Adidas.png" alt="logo" className="company_logo inverted" /></div>
      </div>
    </div>
  )
}

export default Footer
