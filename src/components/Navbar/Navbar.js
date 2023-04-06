import React from 'react';
import { ReactComponent as LogoImg } from 'assets/logos/logo4+2_fit_main.svg';
import {
  LeftContainer,
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  RightContainer,
  NavbarLinkContainer,
  NavLink
} from './Navbar.style';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavLink to="/"> Home</NavLink>
            <NavLink to="/"> Activities</NavLink>
            <NavLink to="/"> Contact</NavLink>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <LogoImg height={100} />
        </RightContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer />
      {/* OUTCOMMENTED FOR NOW
      <NavbarExtendedContainer>
      </NavbarExtendedContainer> */}
      <ul>
        <li>Hello</li>
        <li>You</li>
      </ul>
    </NavbarContainer>
  )
}

export default Navbar;