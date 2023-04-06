import React from 'react'
import styled from 'styled-components'
import LogoImg from '../images/Site-logo.png'
import MenuIcon from '../icons/Menu.png'
import SearchIcon from '../icons/Search.png'

const StyledNavBar = styled.div`
display: flex;
width: 100vw;
justify-content: space-between;
background-color: transparent;
position: absolute;
top: 32px;
`
const DesktopHeader = styled.header`
display: flex;
width: 65vw;
justify-content: space-between;

@media (max-width:1024px) {
  display: none;
}

ul {
  display:flex;
  flex-direction: row;
  gap: 56px;
  list-style-type: none;
}

li,p {
  font-size: 24px;
  letter-spacing: 1px;
}

p {
  margin-right: 47px;
  display: flex;
 justify-self: end;
}
`

const StyledIcons = styled.div`
display:flex;

@media (min-width: 1025px) {
  display: none;
}
`
const Icon = styled.img`
width: 40px;
height: 40px;
padding-right: 16px;
`
const Logo = styled.img`
width: 96px;
height: 29px;
padding-left: 16px;

@media (min-width: 641px) and (max-width: 1024px){
width: 128px;
height: 38px;
padding-left: 32px;
}

@media (min-width: 1025px) {
  width: 160px;
  height: 48px;
  padding-left: 64px;
  }
`

export const NavBar = () => {
  return (
    <StyledNavBar>
      <Logo src={LogoImg} alt="site-logo" />
      <StyledIcons>
        <Icon src={MenuIcon} alt="menu" />
        <Icon src={SearchIcon} alt="search" />
      </StyledIcons>
      <DesktopHeader>
        <ul>
          <li>Classes</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <p>Search</p>
      </DesktopHeader>
    </StyledNavBar>
  )
}