import React from 'react';
import styled from 'styled-components';
import Review from 'components/Review'

const JoinUsSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #66A1AE;
height: 431px;
`
const JoinHeader = styled.h1`
margin-top: -10px;
color: black;
font-size: 24px;
`
const JoinText = styled.p`
color: white;
font-size: 16px;
margin-top: -30px;
`

const Join = () => {
  return (
    <JoinUsSection>
      <JoinHeader>
        <h1>Come join us!</h1>
      </JoinHeader>
      <JoinText>
        <p>Discover all the benefits of Poweryoga and<br />
        become a part of our amazing community!
        </p>
      </JoinText>
      <Review />
    </JoinUsSection>
  )
}

export default Join;