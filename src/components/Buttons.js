import React from 'react';
import styled from 'styled-components';

const StyledSignBtn = styled.button`
    width: 15rem;
    height: 2.4rem;
    font-size: 18px;
    font-weight: 600;
    color: #000;
    background-color: #FF9F0A;
    border-radius: 15px;
    border: none;
    margin-top: 30px;
    margin-bottom: 10px;
`

const StyledClassBtn = styled.button`
    width: 15rem;
    height: 2.4rem;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    background-color: #888585;
    border-radius: 15px;
    border: none;
    margin: 0 0 8px 0 ;
`

export const SignUpBtn = () => {
  return (
    <StyledSignBtn type="button">Sign up for a class</StyledSignBtn>
  )
}

export const ClassBtn = () => {
  return (
    <>
      <StyledClassBtn type="button">Power Yoga 60</StyledClassBtn>
      <StyledClassBtn type="button">Power Yoga 75</StyledClassBtn>
      <StyledClassBtn type="button">Yoga Strong</StyledClassBtn>
    </>
  )
}