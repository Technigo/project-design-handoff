/* eslint-disable react/jsx-boolean-value */
import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import NavLinks from './NavLinks';
import classes from './NavBar.module.css'

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = <HiMenu
    className={classes.Hamburger}
    size="40px"
    color="black"
    onClick={() => setOpen(!open)} />

  const closeIcon = <IoMdCloseCircleOutline
    className={classes.Hamburger}
    size="40px"
    color="black"
    onClick={() => setOpen(!open)} />

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={classes.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>

  )
}

export default MobileNavigation;