import React from 'react'
import { CgMenu } from 'react-icons/cg'
import NavLinks from './NavLinks'
import Classes from './css/classes.module.css'

const Mobile = () => {
  return (
    <nav className={Classes.MobileNavigation}>
      <CgMenu className={Classes.Hamburger} size="40px" color="white" />
      <NavLinks />
    </nav>
  )
}
export default Mobile
