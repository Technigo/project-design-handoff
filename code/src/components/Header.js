import React from 'react';
import styled from 'styled-components';
import { NavBar } from 'components/NavBar/NavBar';
import { Button } from './Button';

const StyledHeader = styled.header`
  display: flex;
  background-image: url(${process.env.PUBLIC_URL}./assets/woman-running-black-white.png);
  background-position: center; 
  background-size: 380%;
  background-position-x: 63%;
  background-repeat: no-repeat;
  height: 100vh;

  @media (min-width: 570px) {
    background-size: 300%;
  }
`;

const StyledHeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: flex-end;
    margin-bottom: 67px;

  @media (min-width: 570px) {
    margin-bottom: 222px;
    align-items: flex-start;
    padding-left: 24px;
  }
`;

const HeaderTitle = styled.h1`
  color: var(--primary-color-4);
  font-size: 3rem;
  font-weight: 800;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 30px;
  padding-left: 0%;

  @media (min-width: 570px) {
    font-size: 6rem;
  }
`;

export const Header = ({ title }) => {
  return (
    <StyledHeader>
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