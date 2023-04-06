import React from 'react'
import NavLinks from './NavLinks';
import Classes from './css/classes.module.css'

const Navigation = () => {
  return (
    <nav className={Classes.desktop}>
      <NavLinks />
    </nav>
  )
}
export default Navigation