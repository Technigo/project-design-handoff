import React from 'react'
import styled from 'styled-components'
import LogoImg from '../images/Site-logo.png'
import MenuIcon from '../icons/Menu.png'
import SearchIcon from '../icons/Search.png'

const StyledNavBar = styled.div`
display: flex;
justify-content: space-between;
background-color: transparent;
position: absolute;
`
const StyledIcons = styled.div`
display:flex;
`

export const NavBar = () => {
  return (
    <StyledNavBar>
      <img src={LogoImg} alt="site-logo" />
      <StyledIcons>
        <img src={MenuIcon} alt="menu" />
        <img src={SearchIcon} alt="search" />
      </StyledIcons>
    </StyledNavBar>
  )
}