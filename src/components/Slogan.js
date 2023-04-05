import React from 'react';
import styled from 'styled-components';

const SloganContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const HeroTitleGO = styled.h1`
  position: absolute;
  width: 210px;
  height: 170px;
  left: 10px;
  top:59.6%;
  font-style: italic;
  font-weight: 600;
  font-size: 142.936px;
  line-height: 119%;
  letter-spacing: -0.022em;
  color: #B9F615;
  margin:0;
`

const HeroTitleBEYOND = styled.h1`
  position: absolute;
  width: 142px;
  height: 48px;
  left: 18px;
  top: 79.2%;
  font-style: italic;
  font-weight: 600;
  font-size: 39.9506px;
  line-height: 119%;
  letter-spacing: -0.022em;
  color: #b9f615;
  margin:0;
`;

const HeroTitleTHE = styled.h1`
position: absolute;
width: 73px;
height: 53px;
left: 83px;
top: 84.4%;
font-style: italic;
font-weight: 600;
font-size: 44.0651px;
line-height: 119%;
letter-spacing: -0.022em;
color: #B9F615;
margin:0;
`

const HeroTitleLIMITS = styled.h1`
position: absolute;
width: 151px;
height: 66px;
left: 191px;
top: 83.0%;
font-style: italic;
font-weight: 600;
font-size: 55.0281px;
line-height: 119%;
letter-spacing: -0.022em;
color: #B9F615;
margin:0;
`

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
