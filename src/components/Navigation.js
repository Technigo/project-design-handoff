import React from 'react'
import NavLinks from './NavLinks';
import Hamburger from './css/hamburger.module.css'

const Navigation = () => {
  return (
    <nav className={Hamburger.desktop}>
      <NavLinks />
    </nav>
  )
}
export default Navigation