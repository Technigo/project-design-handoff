import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
    width: 15rem;
    height: 2.3rem;
    font-size: 18px;
    font-weight: 600;
    color: #000;
    background-color: #FF9F0A;
    border-radius: 15px;
    border: none;
`

export const SignUpBtn = () => {
  return (
    <StyledBtn type="button">Sign up for a class</StyledBtn>
  )
}