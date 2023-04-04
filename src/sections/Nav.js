import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/logo/VectorSmall.png'
import MenuIcon from '../assets/icons/Menu.png'
import SearchIcon from '../assets/icons/Search.png'

const StyledNav = styled.div`
display: flex;
justify-content: space-between;
background-color: transparent;
position: absolute;
`

const StyledIcon = styled.div`
display: flex;
`

export const Nav = () => {
  return (
    <StyledNav>
      <img src={Logo} alt="site-logo" />
      <StyledIcon>
        <img src={MenuIcon} alt="menu" />
        <img src={SearchIcon} alt="search" />
      </StyledIcon>
    </StyledNav>
  )
}