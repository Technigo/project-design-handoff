import React from 'react';
import styled from 'styled-components';
import FindUsImg from '../images/find-us.jpg'
import { Image } from './ImageSlider';

const FindUsWrapper = styled.div`
display: flex; 
flex-direction: row;
align-items: center;
background-color: #66A1AE;
margin: 16px;
height: 192px;
`
const FindUsText = styled.div`
font-size: 1.5;
font-weight: 500;
color: #FFFFFF;
padding: 16px;
line-height: 20.88px;

`

export const FindUs = () => {
  return (
    <FindUsWrapper>
      <Image src={FindUsImg} alt="houses" />
      <FindUsText>Find us at: <br />Fridhemsplansgatan No. 10 <br />Stockholm Sweden</FindUsText>
    </FindUsWrapper>
  )
}