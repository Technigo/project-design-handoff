import React, { useState } from 'react';
import { PrimaryBtn, OutlinedBtn1 } from 'styling/Button';
import { Body, Headline2, Tagline } from 'styling/Text';
import '../styling/HeroSection.css';

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
      <div className="heroWrapper">
        <Tagline className="heroTagline">Feel the difference</Tagline>
        <Headline2 className="heroHeadline">Healthy made easy</Headline2>
        <Body>Join us now and try out our 5-30 min workouts that will get you motivated.</Body>
        <div className="btnWrapper">
          <PrimaryBtn>Download app</PrimaryBtn>
          <OutlinedBtn1>Create account</OutlinedBtn1>
        </div>
      </div>
      <div className="compatibleWrapper">
        <Body>Compatible with</Body>
        <img alt="apple tv logo" className="compatibleLogo" src="../images/icons/apple-tv-logo.png" />
        <img alt="roku logo" className="compatibleLogo" src="../images/icons/roku-logo.png" />
        <img alt="chromecast logo" className="compatibleLogo" src="../images/icons/chromecast-logo.png" />
      </div>
    </header>
  )
};

export default HeroSection;