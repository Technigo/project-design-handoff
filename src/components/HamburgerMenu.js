import React from 'react';
import styled from 'styled-components';

const HamburgerButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 50px;
    width: 50px;
    background-color: black;
    position: absolute;
    margin-top: 20px;
    top: 16px;
    right: 16px;
    span {
        height: 4px;
        background-color: #FFFFFF;
        position: relative;
        width: 38px;
        margin: auto;
        display: block;
        border-radius: 15px;
    }
    span::before, span::after {
        content: "";
        height: 4px;
        width: 38px;
        background-color: #FFFFFF;
        position: absolute;
        display: block;
        border-radius: 15px;
    }
    span::after {
        top: calc(100% - 14px);
    }
    span::before {
        top: 10px;
    }
    .active {
        /* position:absolute; */
       /*  top: 50%;
        right: 50%;
        transform: translate(50%, -50%) rotate(45deg); */
    }
 /*    .active::before, .active::after {
        position:absolute; */
        /* top: 50%;
        right: 50%;
        transform: translate(50%, -50%) rotate(270deg); */
    }
    @media (min-width: 1025px) {
        display: none
}
`
const MenuBackground = styled.div`
    position: absolute;
    top: 0;
    margin-top: 0%;
    right: 0;
    height: 100vw;
    @media (min-width: 1025px) {
        width: auto;
        height: auto;
}
`
const Navigation = styled.nav`
  /*   margin: 90px auto auto 45px; */
/*     flex-direction: column; */
     display: flex;
    justify-content: flex-end;
    /* position: absolute; */
    /* top: 2; */
    right: 0;
    @media (min-width: 1025px) {
        width: auto;
        padding: 35px 60px;
        flex-direction: row;
        height: auto;
        
        margin-top: 20px;
}
`
const NavItem = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  margin-bottom: 90%;
  margin-right: 30%;
  margin-top: 40px;
  

  &:hover {
    text-decoration: underline;
  }
      @media (max-width: 1025px) {
   display: none;
}
`;
const Menu = () => {
  return (
    <MenuBackground>
      <HamburgerButton type="button">
        <span className="active" />
      </HamburgerButton>
      <Navigation>
        <NavItem href="#">Our Vision</NavItem>
        <NavItem href="#">Our Programs</NavItem>
        <NavItem href="#">Price Plans</NavItem>
        <NavItem href="#">Contact Us</NavItem>
      </Navigation>
    </MenuBackground>
  )
}

export default Menu;