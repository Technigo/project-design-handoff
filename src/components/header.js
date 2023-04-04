import React, { useState } from 'react';
import { slide as BurgerMenu } from 'react-burger-menu'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) { // 13 is the code for the "Enter" key
      toggleDropdown();
    }
  }
  return (
    <BurgerMenu>
      <h1>Acrobatics</h1>
      <a className="menu-item" href="/">
      Home
      </a>
      <a className="menu-item" href="/about">
      About
      </a>
      <a className="menu-item" href="/contact">
      Contact
      </a>
      <div className="dropdown">
        <div className="dropdown-icon" onClick={toggleDropdown} onKeyDown={handleKeyDown} tabIndex={0} role="button" aria-label="Toggle dropdown">
          <i className="fas fa-angle-down" />
        </div>
        {isDropdownOpen && (
          <Dropdown
            options={['Option 1', 'Option 2', 'Option 3']}
            onChange={(option) => console.log(option)} />
        )}
      </div>
    </BurgerMenu>
  );
}

// A header section with a logotype and navigation