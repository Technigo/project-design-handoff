import React from 'react';
import { ConnectSection, ConnectText, IconsDiv } from './Connect.styled';
import facebookIcon from '../../assets/facebook-icon.png';
import instaIcon from '../../assets/insta-icon.png';

export const Connect = () => {
  return (
    <ConnectSection className="connect">
      <ConnectText>CONNECT WITH US!</ConnectText>
      <IconsDiv>
        <img src={facebookIcon} alt="facebook icon" />
        <img src={instaIcon} alt="instagram icon" />
      </IconsDiv>
    </ConnectSection>
  );
};
