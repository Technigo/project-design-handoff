import React from 'react';

import '../index.css';
import Logo from '../images/Logo.png'
import Dads from '../images/Dads.png'
import Moms from '../images/Moms.png'
import MomsDads from '../images/MomsDads.png'
import Food from '../images/Food.png'
import Hamburger from '../images/Hamburger.png'

const Header = () => {
  return (
    <section className="header-section">
      <div className="header-logo">
        <img src={Logo} alt="page logo" />
      </div>
      <div className="header-menu">
        <div className="header-content-1">
          <img src={Dads} alt="dads" />
        </div>
        <div className="header-content-2">
          <img src={Moms} alt="moms" />
        </div>
        <div className="header-content3">
          <img src={MomsDads} alt="moms and dads" />
        </div>
        <div className="header-content-4">
          <img src={Food} alt="food" />
        </div>
      </div>
      <div className="hamburger">
        <img src={Hamburger} alt="hamburger-menu" />
      </div>
    </section>
  )
}

export default Header;