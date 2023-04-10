import React from 'react';
import Menu from './Menu';
import HeroImage from './HeroImage';
import './general.css';
import './hero-image.css';
import './menu.css';
import './responsive.css';

const Header = () => {
  return (
    <header className="header">
      <Menu />
      <HeroImage />
    </header>
  );
};

export default Header;