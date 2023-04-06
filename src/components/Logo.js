import React from 'react';
import styled from 'styled-components';
import logoImage from '../Assets/LogoMobile.png';

const Logo = styled.img`
  img {
   width: 50px;
   margin-top: 20px;


  }
`;

const LogoHeader = () => {
  return (
    <Logo src={logoImage} alt="Logo" />
  )
}
export default LogoHeader;

