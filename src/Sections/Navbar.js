import React from 'react';
import styled from 'styled-components';
import { LogoIcon } from '../Components/LogoIcon';
import { NavbarIcons } from '../Components/NavbarIcons';

export const Navbar = () => {
  return (
    <NavSection>
      <LogoIcon />
      <NavbarIcons />
    </NavSection>
  )
}

const NavSection = styled.nav`
display: flex;
padding: 16px;
justify-content: space-between;
`