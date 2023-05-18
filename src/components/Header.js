import React from 'react';
import styled from 'styled-components';

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
margin-top: 130px;
h1 {
  margin-bottom: -30px;
}
`
const SignBtn = styled.button`
padding: 11px, 83px, 11px, 83px;
border-radius: 20px;
border-style: none;
width: 324px;
height: 55px;
background-color: #FF9F0A;
color: black;
font-size: 24px;
position: absolute;
top: 700px;
`

const KnowMoreText = styled.h1`
color: white;
font-size: 16px;
position: absolute;
margin-top: 580px;
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
      <SignBtn type="button">Sign up for a class</SignBtn>
      <KnowMoreText>
        <p>Want to know more about us?</p>
      </KnowMoreText>
    </HeaderSection>
  )
}

export default Header;