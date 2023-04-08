import React, { useState } from 'react';
import styled from 'styled-components';
import LogoSmall from '../images/logosmall.svg';
import LogoBig from '../images/logobig.svg';

const HeaderWrapper = styled.header`
display: flex;
justify-content: space-between; 
position: relative;
margin: 24px 16px;

@media (min-width: 668px){
margin: 55px 56px;
}

@media (min-width: 1024px){
margin: 55px 72px;
}
`
const HeaderLogoContainer = styled.div`
display: none;

@media (max-width: 668px){
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${LogoSmall});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 48px;
  width: 35px;
}

@media (min-width: 1024px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${LogoBig});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 86px;
  width: 212px;
}
`

const NavContainer = styled.div`
display: flex; 
flex-direction: row; 
gap: 20px; 

@media (min-width: 1024px){
    display: none;
  }
`
const HamSearchIcon = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  color: white;
`;

const CloseIcon = styled.div`
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  color: white; 
  display: flex; 
  align-self: flex-end; 
  padding: 16px;
`;

const OverlayMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background-color: black;
  z-index: 9999;
  padding: 20px;
  display: flex;
  flex-direction: column; 
  align-items: right;

  @media (min-width: 1024px){
    display: none;
  }
`;

const NavigationLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding-top: 100px; 
`;

const MenuItem = styled.a`
  display: block;
  margin-bottom: 20px;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  line-height: 20.16px;
`;

const DesktopMenu = styled.div`
display: flex; 
flex-direction: row;
justify-content: center;
gap: 120px;

@media (max-width: 1023px){
  display: none;
}`

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <HeaderLogoContainer />
      <DesktopMenu>
        <MenuItem href="#">Our gym</MenuItem>
        <MenuItem href="#">Classes</MenuItem>
        <MenuItem href="#">About us</MenuItem>
        <MenuItem href="#">Contact</MenuItem>
        <HamSearchIcon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </HamSearchIcon>
      </DesktopMenu>
      <NavContainer>
        <HamSearchIcon>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </HamSearchIcon>
        {open ? (
          <OverlayMenu>
            <CloseIcon onClick={handleToggle} aria-label="close">
              <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1.18556" y1="18.4469" x2="17.6931" y2="1.93933" stroke="white" strokeWidth="3" />
                <line y1="-1.5" x2="23.3452" y2="-1.5" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 16.5076 19.5076)" stroke="white" strokeWidth="3" />
              </svg>
            </CloseIcon>
            <NavigationLinks>
              <MenuItem href="#">Our gym</MenuItem>
              <MenuItem href="#">Classes</MenuItem>
              <MenuItem href="#">About us</MenuItem>
              <MenuItem href="#">Contact</MenuItem>
            </NavigationLinks>
          </OverlayMenu>
        ) : (
          <HamSearchIcon onClick={handleToggle}>
            <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.125 16.5H28.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4.125 8.25H28.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4.125 24.75H28.875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </HamSearchIcon>
        )}
      </NavContainer>
    </HeaderWrapper>
  )
}
