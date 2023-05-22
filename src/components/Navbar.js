import React from 'react';
import styled from 'styled-components';

const NavbarSection = styled.div`
display: flex;
flex-direction: row;
position: absolute;
left: 20px;
top: 15px;
`
const LogoImage = styled.img`
width: 35px;
height: 48px;
`

const Navbar = () => {
  return (
    <NavbarSection>
      <LogoImage src="./images/Logo (2).png" />
      <i className="fa-regular fa-bars" />
    </NavbarSection>
  )
}

export default Navbar;