import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="header-container">
        <div className="logo-and-button">
          <img className="logo" src="./images/logo/LogoSmlLgt.svg" alt="logo" />
          <button className="signInBtn" type="button">Sign In</button>
          <button className="signUpBtn" type="button">Sign Up!</button>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#" className="nav-link">Classes</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Pricing</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">About Us</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Our Studio</a>
          </li>
        </ul>
        <div className="hamburger">
          <img className="hamburger-menu" src="./images/icons_other/hamburger_menu.svg" alt="hamburger menu" />
        </div>
      </div>
    </nav>
  )
}

export default Header

//burger-menu
//https://medium.com/@mignunez/how-to-create-a-responsive-hamburger-menu-with-html-css-javascript-4dc10a45d3