import React, { useState } from 'react';
import { PrimaryBtn } from 'styling/Button';

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 150) {
      setVisible(true)
    } else if (scrolled <= 150) {
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <header className="sectionHero" style={{ backgroundImage: 'url("../images/childpose.jpg")' }}>
      <nav className="navBar">
        <p className="logo">Easyfit</p>
        <div className={visible ? 'menuBarScroll' : 'menuBarTop'}>
          <a href="#benefits">Benefits</a>
          <a href="#workouts">Workouts</a>
          <a href="#activity">Activity</a>
          <a href="#community">Community</a>
        </div>
        <PrimaryBtn>Download app</PrimaryBtn>
        <img alt="menu icon" className="burgerMenu" src="../images/icons/menu.png" />
      </nav>
    </header>
  )
};

export default HeroSection;