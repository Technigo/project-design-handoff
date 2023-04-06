import React from 'react'
import NavLinks from './NavLinks'
import Classes from './css/classes.module.css'

const Mobile = () => {
  return (
    <nav className={Classes.MobileNavigation}>
      <NavLinks />
    </nav>
  )
}
export default Mobile
