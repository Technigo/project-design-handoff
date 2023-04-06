import React from 'react';
import { RxMagnifyingGlass } from 'react-icons/rx'
import classes from './NavBar.module.css'
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <RxMagnifyingGlass style={{ fontSize: '2rem', color: 'white', marginRight: '10px', marginTop: '5px' }} />
      <Navigation />
      <MobileNavigation />
    </div>
  )
}

export default NavBar;