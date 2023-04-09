/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import { Logo } from './Logo'

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100vw;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 1%, rgba(0, 0, 0, 0.04) 9.9%, rgba(0, 0, 0, 0.23) 35.94%, rgba(0, 0, 0, 0.4) 80.21%);
  @media (min-width: 454px) {
    height: 80px;
  }
  @media (min-width: 685px) {
    height: 138px;
  } 
`

const HeaderInnerWrapper = styled.div`
  margin: auto 16px auto 16px;
  padding-top: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 454px) {
    margin: auto 56px auto 56px;
    padding-top: 20px;
  }
 
`

const Navbar = styled.nav`
  display: none;
  margin: auto 5px auto 5px;
  align-items: center;
  justify-content: space-around;
  flex-grow: 2;
  @media (min-width: 685px) {
   display: flex;

  }
`

const NavbarItem = styled.a`
  text-decoration: none;
  font-family: 'Outfit', sans-Serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 13px;
`

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
`

const SearchIcon = styled.img`
  height: 25px;
  width: 25px;
  cursor: pointer;
`

const DropdownMenu = styled.img`
  height: 33px;
  width: 33px;
  cursor: pointer;
  margin-left: 34px;
  @media (min-width: 685px) {
    display: none;
  } 
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInnerWrapper>
        <Logo />
        <Navbar>
          <NavbarItem href="">Our Gym</NavbarItem>
          <NavbarItem href="">Workout</NavbarItem>
          <NavbarItem href="">About Us</NavbarItem>
          <NavbarItem href="">Contact</NavbarItem>
        </Navbar>
        <IconsWrapper>
          <SearchIcon src="./images/icons/search.png" />
          <DropdownMenu src="./images/icons/hamburgermenu.svg" />
        </IconsWrapper>
      </HeaderInnerWrapper>
    </HeaderWrapper>
  )
}