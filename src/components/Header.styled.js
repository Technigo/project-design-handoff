import React from 'react';
import styled from 'styled-components';
/* import TopNav from 'components/header/navbar/Navbar'; */
import Button from 'components/Button'
import HeaderContainer from 'components/Header-container';
import logo from '../Assets/LogoMobile.png';
import jammerImg from '../Assets/Jammer.png';
import Menu from './HamburgerMenu';

const Headline = styled.h1`
margin-right: 50px;
h1 {
   font-family: 'Permanent Marker', cursive;
   display: block;
   flex-direction: column;
   margin-right: 50px;
}
`;

const JammerImg = styled.img`
img {
    display: flex;
    width: 30%;
}`

const Logo = styled.img`
    margin-top: 
    margin-bottom: 
    margin-left: 
`;

/* const Navigation = styled.nav`
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 2;
    right: 0;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  margin-bottom: 90%;
  margin-right: 20%;

  &:hover {
    text-decoration: underline;
  }
`; */

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <Button>SIGN IN</Button>
      <Menu />
      <Headline>
        <h1>UP YOUR GAME WITH FIT2DERBY!</h1>
      </Headline>
      <JammerImg src={jammerImg} />
    </HeaderContainer>
  );
};

export default Header;
