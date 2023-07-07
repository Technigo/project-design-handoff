import React from 'react';
import styled from 'styled-components';
import { NavLink } from './Fonts';

export const NavLinks = () => {
  return (
    <Nav>
      <NavLink>Our Gym</NavLink>
      <NavLink>Workout</NavLink>
      <NavLink>About us</NavLink>
      <NavLink>Contact</NavLink>
    </Nav>
  )
}

const Nav = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 100%;
gap: 20px;

@media (max-width: 1023px) {
    display: none;
}
`