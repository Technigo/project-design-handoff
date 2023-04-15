import React from 'react'
import './NavBarCss.css'
import Namnlost from '../assets/Namnlost.svg'
import Fit from '../assets/Fit.svg'
import LogoTablet from '../assets/logo-tablet.png'
import HeroBox from './HeroBox'

const NavBar = () => {
  return (
    <section className="nav-container">
      <nav className="nav-bar">
        <div className="icons-container">
          <img
            src={Namnlost}
            alt="Logo"
            className="picture" />
          <img
            src={Fit}
            alt="Logotyp"
            className="picture" />
          <div className="logo-tablet-container">
            <img
              src={LogoTablet}
              alt="Logotyp"
              className="picture-tablet-vector" />
          </div>
        </div>
        <div className="menu-container">
          <ul className="nav-bar-list">
            <li><a href="#">Gift cards</a></li>
            <li><a href="#">Join us</a></li>
          </ul>
          <div className="hamburger-sign">
            <span className="bar1" />
            <span className="bar2" />
            <span className="bar3" />
          </div>
        </div>
      </nav>
      <HeroBox />
    </section>
  )
}

export default NavBar;