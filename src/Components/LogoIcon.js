import React from 'react';
import styled from 'styled-components';
import Logo from '../Assets/Icons/Logo.svg';
import Logoandname from '../Assets/Icons/Logoandname.svg';

const DesktopDiv = styled.div`
@media (max-width: 687px) {
    display: none;
}

img {
  padding-left: 50px;
}`

const MobileDiv = styled.div`
@media (min-width: 687px) {
    display: none;
}`

export const LogoIcon = () => {
  return (
    <div>
      <MobileDiv>
        <img className="logo" src={Logo} alt="Santulan Yoga Logo" />
      </MobileDiv>
      <DesktopDiv>
        <img src={Logoandname} alt="Santulan Yoga Logo and name" />
      </DesktopDiv>
    </div>
  )
}