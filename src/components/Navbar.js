import React from 'react';

const Navbar = () => {
  return (
    <div className="navWrapper">
      <img className="logo" src="../images/logoLargeOnLightBackground.svg" alt="Logo" />
      <button type="button" className="signUpButton">Sign up!</button>
    </div>
  )
}

export default Navbar;

/* <img src={`${process.env.PUBLIC_URL}/logoLargeOnLightBackground.svg`} alt="Logo" /> */