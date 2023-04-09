/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import { Logo } from './Logo'

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`
/* Makes sure the logo is hidden, but only on mobile */
const LogoWrapper = styled.div`
  visibility: hidden;
  @media (min-width: 454) {
    visibility: visible;
    margin-top: 26px;
  @media (min-width: 685px) {
    margin-top: 50px;
  } 
  }
  `

const Navbar = styled.nav`
  display: flex;
  margin: auto 5px auto 5px;
  align-items: center;
  justify-content: space-between;
  width: 390px;
  margin: auto auto 24px auto;
  @media (min-width: 454) {
    margin: 20px auto 26px auto;
  @media (min-width: 685px) {
    margin: 20px auto 48px auto;
  } 
  }
`

const NavbarItem = styled.a`
  text-decoration: none;
  font-family: 'Outfit', sans-Serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  @media (min-width: 685px) {
    font-size: 24px;
  } 
`

const LinksOuterWrapper = styled.div`
  border-top: white 1px solid;
  width: 334px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 454px) {
    width: 80%;
    max-width: 582px;
  }
`

const LinksInnerWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px auto 22px auto;
  @media (min-width: 454px) {
    margin: 24px auto 26px auto;
  }
  @media (min-width: 685px) {
    margin: 48px auto 50px auto;
  } 
`

const LinkIcon = styled.img`
width: 22px;
height: 22px;
cursor: pointer;
@media (min-width: 685px) {
  width: 32px;
  height: 32px;
} 
`

export const Footer = () => {
  return (
    <FooterWrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Navbar>
        <NavbarItem href="">Classes</NavbarItem>
        <NavbarItem href="">About</NavbarItem>
        <NavbarItem href="">Contact</NavbarItem>
      </Navbar>
      <LinksOuterWrapper>
        <LinksInnerWrapper>
          <LinkIcon src="./images/icons/instagram.svg" />
          <LinkIcon src="./images/icons/facebook.svg" />
          <LinkIcon src="./images/icons/linkedin.svg" />
          <LinkIcon src="./images/icons/twitter.svg" />
        </LinksInnerWrapper>
      </LinksOuterWrapper>
    </FooterWrapper>
  )
}