import React from 'react';
import styled from 'styled-components';

const JoinUsSection = styled.div`
display: flex;
flex-direction: column;
background-color: #66A1AE;
height: 431px;
`
const JoinHeader = styled.h1`
color: black;
font-size: 24px;
`
const JoinText = styled.p`
color: white;
font-size: 16px;
`

const Join = () => {
  return (
    <JoinUsSection>
      <JoinHeader>
        <h1>Come join us!</h1>
      </JoinHeader>
      <JoinText>
        <p>Discover all the benefits of Poweryoga and become a part of our amazing community!</p>
      </JoinText>
    </JoinUsSection>
  )
}

export default Join;