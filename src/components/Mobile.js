import React, { useState } from 'react'
import { CgMenu, CgClose } from 'react-icons/cg'
import NavLinks from './NavLinks'
import Hamburger from './css/hamburger.module.css'

const Mobile = () => {
  const [open, setOpen] = useState(false)

  const hamburgerIcon = <CgMenu
    className={Hamburger.Hamburger}
    size="40px"
    color="white"
    onClick={() => setOpen(!open)} />

  const closedIcon = <CgClose
    className={Hamburger.Hamburger}
    size="40px"
    color="white"
    onClick={() => setOpen(!open)} />

  return (
    <nav className={Hamburger.MobileNavigation}>
      {open ? closedIcon : hamburgerIcon}
      {open && <NavLinks />}
    </nav>
  )
}
export default Mobile
