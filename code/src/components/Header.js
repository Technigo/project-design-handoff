import React from 'react';
import styled from 'styled-components';
import { NavBar } from 'components/NavBar/NavBar';
import { Button } from './Button';

const StyledHeader = styled.header`
  display: flex;
  background-image: url(${process.env.PUBLIC_URL}/assets/woman-running-black-white.png);
  background-position: center; 
  background-size: 380%;
  background-position-x: 63%;
  background-repeat: no-repeat;
  height: 100vh;

  video {
    display: none;
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
  }

  @media (min-width: 668px) {
    background-size: 230%;
    background-position-x: 52%;
    padding: 0;
    margin: 0;
  }

  @media (min-width: 1024px) {
    background-image: none;
    
    video {
      display: block;
    }
  }
`;

const StyledHeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-end;
    margin-bottom: 67px;

  @media (min-width: 668px) {
    margin-bottom: 222px;
    align-items: flex-start;
    padding-left: 24px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 115px;
    padding-left: 69px;
  }
`;

const HeaderTitle = styled.h1`
  color: var(--primary-color-4);
  font-size: 3rem;
  font-weight: 800;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 30px;
  padding-left: 0%;
  max-width: 400px;

  @media (min-width: 668px) {
    font-size: 6rem;
  }

  @media (min-width: 1024px) {
    font-size: 8rem;
    max-width: 400px;
  }
`;

export const Header = ({ title }) => {
  return (
    <StyledHeader>
      <video autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/assets/header-video.mp4`} type="video/mp4" />
      </video>
      <NavBar navOne="Pricelist" navTwo="About us" navThree="Location" navFour="Contact" navFive="Sign in" />
      <StyledHeaderDiv>
        <HeaderTitle className="header">
          {title}
        </HeaderTitle>
        <Button headerCta>Join us today!</Button>
      </StyledHeaderDiv>
    </StyledHeader>
  );
};