import React from 'react';
import styled from 'styled-components';
import logo from '../../Assets/LogoMobile.png';
import herobackground from '../../Assets/herobackground.jpg';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-image: url( ${herobackground});
  background-repeat: no-repeat;
  background-size: cover;

`;

const Headline = styled.h1`
h1 {
   font-family: 'Permanent Marker', cursive;
}
`;

const Logo = styled.img`
  height: 50px;
`;

const Navigation = styled.nav`
  display: flex;
`;

const NavItem = styled.a`
  margin-left: 20px;
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <Navigation>
        <NavItem href="#">Our Vision</NavItem>
        <NavItem href="#">Our Programs</NavItem>
        <NavItem href="#">Price Plans</NavItem>
        <NavItem href="#">Contact Us</NavItem>
      </Navigation>
      <Headline>
        <h1>UP YOUR GAME WITH FIT2DERBY!</h1>
      </Headline>
    </HeaderContainer>
  );
};

export default Header;
