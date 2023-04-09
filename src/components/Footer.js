import React from 'react';

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-box">
        <div className="logo-and-title">
          <img alt="logo" className="logo" src="./assets/Union.svg" />
          <h1>fit parents</h1>
        </div>
        <div className="left-box-text">
          <ul>
            <li>Impressum</li>
            <li>Datenschutz</li>
          </ul>
          <h6 className="follow-us">Follow us</h6>
        </div>
        <div className="SoMe-Icons">
          <img alt="Social Media Icon" className="So-Me" src="./assets/Instagram.png" />
          <img alt="Social Media Icon" className="So-Me" src="./assets/Facebook.png" />
          <img alt="Social Media Icon" className="So-Me" src="./assets/LinkedIn.png" />
          <img alt="Social Media Icon" className="So-Me" src="./assets/Twitter.png" />
        </div>
      </div>
      <div className="right-box">
        <h1> Programs </h1>
        <ul>
          <li>Active during pregnancy</li>
          <li>Getting fit for the child</li>
          <li>Postnatal recovery</li>
          <li>Stay strong but soft</li>
          <li>Start running (again)</li>
          <li>Run better</li>
          <li>In shape nutrition-plan</li>

        </ul>
      </div>
    </div>

  )
}
