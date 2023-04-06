import React from 'react'

const Header = () => {
  return (
    <div className="header">

      <div className="navBar">
        <img className="logo" alt="Raise Studio Logo" />
        <div className="menu">
          <span>Classes</span>
          <span>Pricing</span>
          <span>About us</span>
          <span>Our studio</span>
          <button type="button" className="signInBtn">Sign in</button>
          <button type="button" className="signUpBtn">Sign up!</button>
          <img className="hamburgerMenu" src="../images/HamburgerMenu.svg" alt="Menu icon - click to expand navigation menu" />
        </div>
      </div>

    </div>
  )
}
export default Header;