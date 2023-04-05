/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100vw;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0) 1%, rgba(0, 0, 0, 0.04) 9.9%, rgba(0, 0, 0, 0.23) 35.94%, rgba(0, 0, 0, 0.4) 80.21%);
  @media (min-width: 545px) {
    height: 80px;
  }
  @media (min-width: 686px) {
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
  @media (min-width: 545px) {
    margin: auto 56px auto 56px;
    padding-top: 20px;
  }
 
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  height: 48px;
  width: 35px;
  @media (min-width: 686px) {
    width: 68px;
    height: 85px;
  }
`

const LogoText = styled.h1`
  font-family: 'Outfit', sans-Serif;
  font-weight: 500;
  font-size: 24px;
  margin: 10px;
  display: none;
  @media (min-width: 686px) {
  display: inline-block;
  }
`

const Navbar = styled.nav`
  display: none;
  margin: auto 5px auto 5px;
  align-items: center;
  justify-content: space-around;
  flex-grow: 2;
  @media (min-width: 686px) {
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
  @media (min-width: 686px) {
    display: none;
  } 
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInnerWrapper>
        <LogoWrapper>
          <a href="">
            <Logo src="./images/icons/logo.svg" />
            <LogoText>Santulan<br />Power Yoga<br />Stockholm</LogoText>
          </a>
        </LogoWrapper>
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