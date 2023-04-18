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
        <RightContainer>
          <NavbarLinkContainer>
            <NavLink to="/"> GIFT CARDS</NavLink>
            <NavLink to="/"> JOIN US</NavLink>
          </NavbarLinkContainer>
        </RightContainer>
        <LeftContainer>
          <LogoImg height={80} />
        </LeftContainer>
      </NavbarInnerContainer>
    </NavbarContainer>
  )
}

export default Navbar;