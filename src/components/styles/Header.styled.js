import React from 'react';
import styled from 'styled-components';
/* import TopNav from 'components/header/navbar/Navbar'; */
import logo from '../../Assets/LogoMobile.png';
import herobackground from '../../Assets/herobackground.jpg';
import jammerImg from '../../Assets/Jammer.png';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url( ${herobackground});
  background-repeat: no-repeat;
  background-size: cover;
width: 100%;

`;
const HeaderButtons = styled.button`
    border-radius: 18px;
    height: 3rem;
    background-color: yellow;
    width: 28rem;

`
const Headline = styled.h1`
h1 {
   font-family: 'Permanent Marker', cursive;
   display: block;
   flex-direction: column;
}
`;

const JammerImg = styled.img`
img {
    display: flex;
    width: 30%;
}`

const Logo = styled.img`
    margin-top: 5%;
    margin-bottom: 44%;
    margin-left: 5%;
`;

const Navigation = styled.nav`
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
      <HeaderButtons />
      <JammerImg src={jammerImg} />
    </HeaderContainer>
  );
};

export default Header;
