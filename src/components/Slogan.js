import React from 'react';
import styled from 'styled-components';

const SloganContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const HeroTitleGO = styled.h1`
  position:absolute;
  width: 58.3%;
  top:62%;
  left: 2.8%;
  font-style: italic;
  font-weight: 600;
  font-size: 8.8rem;
  line-height: 119%;
  letter-spacing: -0.022em;
  color: #B9F615;
  margin:0;
`

const HeroTitleBEYOND = styled.h1`
  position: absolute;
  width: 39.4%;
  left: 5%;
  top: 79.2%;
  font-style: italic;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 119%;
  letter-spacing: -0.022em;
  color: #b9f615;
  margin:0;
`;

const HeroTitleTHE = styled.h1`
position: absolute;
width: 20.3%;
left: 23%;
top: 84.4%;
font-style: italic;
font-weight: 600;
font-size: 2.75rem;
line-height: 119%;
letter-spacing: -0.022em;
color: #B9F615;
margin:0;
`;

const HeroTitleLIMITS = styled.h1`
position: absolute;
width: 41.9%;
height: 66px;
left: 53.1%;
top: 83.0%;
font-style: italic;
font-weight: 600;
font-size: 3.4rem;
line-height: 119%;
letter-spacing: -0.022em;
color: #B9F615;
margin:0;
`;

export const Slogan = () => {
  return (
    <SloganContainer>
      <HeroTitleGO>GO</HeroTitleGO>
      <HeroTitleBEYOND>BEYOND</HeroTitleBEYOND>
      <HeroTitleTHE>THE</HeroTitleTHE>
      <HeroTitleLIMITS>LIMITS</HeroTitleLIMITS>
    </SloganContainer>
  )
}
