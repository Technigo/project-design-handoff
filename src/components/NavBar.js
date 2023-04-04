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
const StyledIcons = styled.div`
display:flex;
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
`

export const NavBar = () => {
  return (
    <StyledNavBar>
      <Logo src={LogoImg} alt="site-logo" />
      <StyledIcons>
        <Icon src={MenuIcon} alt="menu" />
        <Icon src={SearchIcon} alt="search" />
      </StyledIcons>
    </StyledNavBar>
  )
}