/* eslint-disable react/no-unused-class-component-methods */
import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import '../react-burger-menu/dist/react-burger-menu.css';

class HamburgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu
        right
        styles={{
        }}
        customBurgerIcon={<img src="../assets/burger-menu.svg" alt="hamburger menu" />}
        customCrossIcon={<img src="../assets/cross.svg" alt="closing cross" />}>
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
