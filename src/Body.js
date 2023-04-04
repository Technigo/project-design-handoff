import React from 'react';
import styled from 'styled-components';

const MainText = styled.div`
max-width: 380px;
margin: 0 auto;
text-align: left;
`

const H1 = styled.h1`
font-size: 32px;
line-height: 160%;
font-weight: bold;
color: #F5F5F5;
font-family: 'Libre Baskerville';
`

const P = styled.p`
font-size: 21px;
line-height: 160%;
font-weight: bold;
color: #F5F5F5;
font-family: 'Libre Baskerville';
`

const Hero = () => {
  return (
    <MainText>
      <H1>The health revolution begins with you</H1>
      <P>Access 100+ yoga classes and receive personalized nutrition plan for - for holistic
health anytime, anywhere. Achieve optimal health and balance through
our comprehensive wellness program.
      </P>
    </MainText>
  );
}

export default Hero;