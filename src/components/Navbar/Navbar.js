import React from 'react';
import { ReactComponent as LogoImg } from 'assets/logos/logo4+2_fit_main.svg';
import {
  LeftContainer,
  NavbarContainer,
  // NavbarExtendedContainer,
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
          <LogoImg height={100} />
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <NavLink to="/"> GIFT CARDS</NavLink>
            <NavLink to="/"> JOIN US</NavLink>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {/* <NavbarExtendedContainer>
        { /* OUTCOMMENTED FOR NOW
      <NavbarExtendedContainer> */}
      {/* </NavbarExtendedContainer> */}
    </NavbarContainer>
  )
}

export default Navbar;