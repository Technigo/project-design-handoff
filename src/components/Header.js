import React from 'react';
import styled from 'styled-components';

const HeaderSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 930px;
background-image: url("/images/headeryoga.png");
background-size: cover;
min-height: 100vh;
background-repeat: no-repeat;
background-position: center;

`
const HeaderText = styled.p`
color: white;
font-size: 16px;
align-self: center;
margin-bottom: -40px;
`
const SloganText = styled.h1`
color: white;
font-size: 25px;
`
const SignBtn = styled.button`
padding: 11px, 83px, 11px, 83px;
border-radius: 20px;
border-style: none;
margin-top: 40px;
width: 324px;
height: 55px;
background-color: #FF9F0A;
color: black;
font-size: 24px;
top: 700px;
`

const KnowMoreText = styled.h1`
color: white;
font-size: 16px;
`

const Header = () => {
  return (
    <HeaderSection>
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