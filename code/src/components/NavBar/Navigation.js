import React from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx';
import NavLinks from './NavLinks';
import classes from './NavBar.module.css'

const Navigation = () => {
  const handleButtonClick = () => {
    alert('Thank you for trying Self Health!');
  };
  return (
    <nav className={classes.Navigation}>
      <RxMagnifyingGlass style={{ fontSize: '2rem', color: 'white', marginRight: '10px', marginTop: '5px' }} />
      <NavLinks />
      <button className="tryforfree" type="submit" onClick={handleButtonClick}>Try for Free</button>
    </nav>
  )
}

export default Navigation;