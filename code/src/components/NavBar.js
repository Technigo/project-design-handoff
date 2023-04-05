import React from 'react';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const UlElements = styled.ul`
  display: flex;
  justify-content: center;
`;

const LiElements = styled.li`
  list-style-type: none;
  margin: 3px;
`;

export const NavBar = ({ navOne, navTwo, navThree, navFour, navFive }) => {
  return (
    <StyledNavBar>
      <UlElements>
        <LiElements>
          {navOne}
        </LiElements>
        <LiElements>
          {navTwo}
        </LiElements>
        <LiElements>
          {navThree}
        </LiElements>
        <LiElements>
          {navFour}
        </LiElements>
        <LiElements>
          {navFive}
        </LiElements>
      </UlElements>
    </StyledNavBar>
  );
};
