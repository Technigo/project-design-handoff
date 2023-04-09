/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react'
import { Button } from 'components/styledComponents/Button'
import { Navbar, Logo, HamburgerIcon, NavbarOptions, NavbarOption, ContainerNavbar } from './NavbarCSS'
import logo from '../../images/logo.svg'
import hamburger from '../../images/hamburger.svg'

export const NavbarSection = () => {
  const [show, setShow] = useState(false)
  return (
    <Navbar>
      <Logo src={logo} />
      <ContainerNavbar>
        <HamburgerIcon onClick={() => setShow(!show)} show={show}>
          <img src={hamburger} alt="hamburger icon" />
        </HamburgerIcon>
        <NavbarOptions show={show}>
          <NavbarOption>Our Vision</NavbarOption>
          <NavbarOption>Our Programs</NavbarOption>
          <NavbarOption>Price plans</NavbarOption>
          <NavbarOption>Contact us</NavbarOption>
        </NavbarOptions>
        <Button fontSize="0.8em" width="80px" login>Log in</Button>
      </ContainerNavbar>
    </Navbar>
  )
}