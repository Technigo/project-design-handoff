import React from 'react';
import NavLinks from './NavLinks';
import classes from './NavBar.module.css'

const Navigation = () => {
  const handleButtonClick = () => {
    alert('Thank you for trying Self Health!');
  };
  return (
    <nav className={classes.Navigation}>
      <NavLinks />
      <button className="tryforfree" type="submit" onClick={handleButtonClick}>Try for Free</button>
    </nav>
  )
}

export default Navigation;