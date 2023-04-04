import React from 'react';
import {
  LeftContainer,
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  RightContainer,
  NavbarLinkContainer,
  NavbarLink
} from '../styles/Navbar.style';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/"> Activities</NavbarLink>
            <NavbarLink to="/"> Contact</NavbarLink>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
LOGO
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