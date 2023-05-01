import React from 'react';
import styled from 'styled-components';
import logo from '../Images/logo.png';

export const Navbar = () => {
  return (
    <Navbardiv>
      <Logo src={logo} />
      <ContainerNavbar>
        <Options>
          <Option>Our Vision</Option>
          <Option>Our Programs</Option>
          <Option>Price plans</Option>
          <Option>Contact us</Option>
        </Options>
        <LogInButton>Log in</LogInButton>
      </ContainerNavbar>
    </Navbardiv>
  )
}

export const Logo = styled.img`
height:3.6em;
`;

export const Navbardiv = styled.div`
display: flex;
width: 90%;
height:63px;
`;

export const Options = styled.div`
display:flex;
flex-direction:row;
color: #F7FEFF;
gap:3em;
`;

export const Option = styled.a`
font-size:1.3rem;
`;

export const ContainerNavbar = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items:center;
width:100%;
gap:34px;
`;

export const LogInButton = styled.button`
font-Size:"0.8em"; 
min-width:max-content;
box-sizing:border-box;
background: #FFE600;
color: #002A30;
margin: 0.625rem;
padding: 0.5em 1em;
border-radius: 50px;
box-shadow: 0px 2.24635px 2.24635px rgba(0, 0, 0, 0.25);
`;
