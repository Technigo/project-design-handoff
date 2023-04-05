import React from 'react';
import styled from 'styled-components';
import SignUpBtn from './SignUpBtn';

const HeaderSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const HeaderImg = styled.img`
height: 100%;
width: auto;
background-size: cover;
`
const HeaderText = styled.p`
color: white;
font-size: 16px;
position: absolute;
align-self: center;
`
const SloganText = styled.h1`
color: white;
font-size: 25px;
position: absolute;
margin-top: 200px;

`
const KnowMoreText = styled.h1`
color: white;
font-size: 16px;
position: absolute;
margin-top: 350px;
`

const Header = () => {
  return (
    <HeaderSection>
      <HeaderImg src="./images/headeryoga.png" alt="person doing yoga" />
      <HeaderText>
        <p>Santulan Power Yoga Stockholm</p>
      </HeaderText>
      <SloganText>
        <h1>Move your body</h1>
        <h1>Rest your mind</h1>
      </SloganText>
      <SignUpBtn />
      <KnowMoreText>
        <p>Want to know more about us?</p>
      </KnowMoreText>
    </HeaderSection>
  )
}

export default Header;