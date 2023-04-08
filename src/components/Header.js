import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
display: flex;
justify-content: space-between; 
position: relative;
margin: 55px 72px;

`

const NavContainer = styled.div`
display: flex; 
flex-direction: row; 
gap: 20px; 
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

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <svg width="35" height="48" viewBox="0 0 35 48" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.6296 4.28108C24.6296 6.93205 21.4376 8.56216 17.5 8.56216C13.5624 8.56216 10.3704 6.93205 10.3704 4.28108C10.3704 1.63011 13.5624 0 17.5 0C21.4376 0 24.6296 1.63011 24.6296 4.28108Z" fill="white" />
        <path d="M30.7752 16.8443C31.6386 20.9091 26.3423 24.5513 18.7093 26.175C11.0762 27.7987 4.88441 26.6002 4.02108 22.5355C3.15776 18.4707 8.27328 14.6017 15.9063 12.978C23.5394 11.3543 29.9119 12.7796 30.7752 16.8443Z" fill="white" />
        <path d="M35 39.4753C35 44.8295 27.4027 48 17.4171 48C7.43144 48 0 44.8295 0 39.4753C0 34.121 7.43144 30.6162 17.4171 30.6162C27.4027 30.6162 35 34.121 35 39.4753Z" fill="white" />
      </svg>

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
