import React from 'react';

export const NavBar = ({ navOne, navTwo, navThree, navFour, navFive }) => {
  return (
    <nav className="navBar">
      <ul>
        <li>
          {navOne}
        </li>
        <li>
          {navTwo}
        </li>
        <li>
          {navThree}
        </li>
        <li>
          {navFour}
        </li>
        <li>
          {navFive}
        </li>
      </ul>
    </nav>
  );
};
