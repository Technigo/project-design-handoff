import React, { useState } from 'react'
import { CgMenu, CgClose } from 'react-icons/cg'
import NavLinks from './NavLinks'
import Classes from './css/classes.module.css'

const Mobile = () => {
  const [open, setOpen] = useState(false)

  const hamburgerIcon = <CgMenu
    className={Classes.Hamburger}
    size="40px"
    color="white"
    onClick={() => setOpen(!open)} />

  const closedIcon = <CgClose
    className={Classes.Hamburger}
    size="40px"
    color="white"
    onClick={() => setOpen(!open)} />

  return (
    <nav className={Classes.MobileNavigation}>
      {open ? closedIcon : hamburgerIcon}
      {open && <NavLinks />}
    </nav>
  )
}
export default Mobile
