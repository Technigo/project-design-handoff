import React from 'react';
import styled from 'styled-components';

const FindUsSection = styled.div`
background-color: #66A1AE;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
margin-left: 10px;
margin-top: 20px;
width: 400px;
`
const FindUsImage = styled.img`
width: 185px;
height: 192px;
`
const FindUsText = styled.p`
color: white;
font-size: 16px;
margin-left: 16px;

`

const Find = () => {
  return (
    <FindUsSection>
      <FindUsImage src="./images/house.avif" alt="a house" />
      <FindUsText>
        <p>Find us at:</p>
        <p>Fridhemsplansgatan No.10</p>
        <p>Stockholm, Sweden</p>
      </FindUsText>
    </FindUsSection>
  )
}

export default Find;