import React from 'react'
import styled from 'styled-components'
import HeaderLogo from '../assets/header-logo.svg'

const StyledWrapper = styled.div`
  border-bottom: 0.2px solid #9ad4d6;
  background-color: var(--secondary-bg-color);
  height: 64px;
  `

const StyledContainer = styled.div`
height: 64px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: auto 16px;
`

const Header = () => {
  return (
    <StyledWrapper>

      <StyledContainer>

        <img src={HeaderLogo} alt="Logo" />

        <h1>=</h1>
      </StyledContainer>
    </StyledWrapper>
  );
}

export default Header;