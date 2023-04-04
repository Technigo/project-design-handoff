import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

// Define your styled components before the functional component
const StyledHeader = styled.header`
  /* Add your header styles here */
`;

const HeaderTitle = styled.h1`
  color: #FF90D1;
  font-size: 48px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

// Use the styled components inside the functional component
export const Header = ({ title }) => {
  return (
    <StyledHeader>
      <HeaderTitle className="header">
        {title}
      </HeaderTitle>
      <Button headerCta>Join us today!</Button>
    </StyledHeader>
  );
};