import React, { useState } from 'react';
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
    cursor: pointer;
`

const StyledClassBtn = styled.button`
    width: 15rem;
    height: 2.4rem;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    background-color: ${({ clicked }) => {
    return clicked ? '#66A1AE' : '#888585';
  }};
    border-radius: 15px;
    border: none;
    margin: 0 0 8px 0 ;
    cursor: pointer;
`

export const SignUpBtn = () => {
  return (
    <StyledSignBtn type="button">Sign up for a class</StyledSignBtn>
  )
}

export const ClassBtn = () => {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);

  const handleClick1 = () => {
    setClicked1(!clicked1);
  };
  const handleClick2 = () => {
    setClicked2(!clicked2);
  };
  const handleClick3 = () => {
    setClicked3(!clicked3);
  };
  return (
    <>
      <StyledClassBtn type="button" clicked={clicked1} onClick={handleClick1}>Power Yoga 60</StyledClassBtn>
      <StyledClassBtn type="button" clicked={clicked2} onClick={handleClick2}>Power Yoga 75</StyledClassBtn>
      <StyledClassBtn type="button" clicked={clicked3} onClick={handleClick3}>Yoga Strong</StyledClassBtn>
    </>
  )
}