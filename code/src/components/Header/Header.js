import React from 'react';
import { NavBar } from 'components/Navbar/Navbar';
import { Button } from '../Button';
import { StyledHeader, StyledHeaderDiv, HeaderTitle } from './Header.styled';
import heroVideo from '../../assets/hero-video.mp4';

export const Header = ({ title }) => {
  return (
    <StyledHeader>
      <video autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
      </video>
      <NavBar />
      <StyledHeaderDiv>
        <HeaderTitle className="header">{title}</HeaderTitle>
        <Button headerCta>Join us today!</Button>
      </StyledHeaderDiv>
    </StyledHeader>
  );
};
