import React from 'react';
import styled from 'styled-components';

const HeaderSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const HeaderImg = styled.img`
min-height: 100vh;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`
const HeaderText = styled.h2`
color: white;
position: absolute;
`

const Header = () => {
  return (
    <HeaderSection>
      <HeaderImg src="./images/headerphoto.webp" alt="person doing yoga" />
      <HeaderText>
        <h2>Santulan Power Yoga Stockholm</h2>
        <h1>Move your body</h1>
        <h1>Rest your mind</h1>
      </HeaderText>
      <div>
        <h3>Want to know more about us?</h3>
      </div>
    </HeaderSection>
  )
}

export default Header;