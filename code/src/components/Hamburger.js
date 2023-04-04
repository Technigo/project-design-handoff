/* eslint-disable react/no-unused-class-component-methods */
import React from 'react';
import { bubble as Menu } from 'react-burger-menu';

class HamburgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu
        right
        className="burger-menu"
        customBurgerIcon={<img className="burger-icon" src="../assets/burger-menu.svg" alt="hamburger menu" />}
        customCrossIcon={<img className="cross-icon" src="../assets/cross.svg" alt="closing cross" />}>
        <a className="menu-item" href="#services">
          Services
        </a>
        <a className="menu-item" href="#about">
          Coaches
        </a>
        <a className="menu-item" href="#contact">
          About
        </a>
        <a className="menu-item" href="#shop">
          Shop
        </a>
        <a className="menu-item" href="#club">
          Club
        </a>
      </Menu>
    );
  }
}

export default HamburgerMenu;
