/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const LogoImage = styled.img`
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

export const Logo = () => {
  return (
    <LogoWrapper>
      <a href="">
        <LogoImage src="./images/icons/logo.svg" />
        <LogoText>Santulan<br />Power Yoga<br />Stockholm</LogoText>
      </a>
    </LogoWrapper>
  )
}