import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className="header-container">
      <div className="topnav">
        <img className="logo" src="./images/logo/LogoSmlLgt.svg" alt="logo" />
        <button className="sign-in" type="button">Sign In</button> 
        <button className="sign-up" type="button">Sign Up!</button>
      </div>
      <div className="nav-links">
        <p>Classes</p>
        <p>Pricing</p>
        <p>About Us</p>
        <p>Our Studio</p>
      </div>
    </section>
  )
}

export default Header

//burger-menu
//se Jennies video
//https://medium.com/@mignunez/how-to-create-a-responsive-hamburger-menu-with-html-css-javascript-4dc10a45d3