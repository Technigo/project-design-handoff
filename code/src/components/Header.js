import React from 'react';
import logo from '../assets/logos/Vector.png';
import menuicon from '../assets/icons/Menu.png';
import searchicon from '../assets/icons/Search.png';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="Gracious moments logo" />
      <div className="icons">
        <img src={menuicon} alt="menu" />
        <img src={searchicon} alt="search" />
      </div>
    </div>
  );
};

export default Header;
