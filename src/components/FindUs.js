import React from 'react';
import styled from 'styled-components';
import FindUsImg from '../images/find-us.jpg'

const FindUsWrapper = styled.div`
display: flex; 
flex-direction: row;
align-items: center;
background-color: #66A1AE;
margin: 16px;
`
const FindUsText = styled.div`
font-size: 1;
font-weight: 500;
color: #FFFFFF;
line-height: 20.88px;
padding: 8px;

`

const Image = styled.img`
  width: 185px; 
  height: 192px;
  object-fit: cover;
`;

export const FindUs = () => {
  return (
    <FindUsWrapper>
      <Image src={FindUsImg} alt="houses" />
      <FindUsText>Find us at: <br />Fridhemsplansgatan No. 10 <br />Stockholm Sweden</FindUsText>
    </FindUsWrapper>
  )
}