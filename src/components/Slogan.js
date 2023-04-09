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

  @media (min-width: 768px) {
  font-size: 10.8rem;
  top:50%;
  left:4.8%;
}

@media (min-width: 1024px) {
  font-size: 16.8rem;
  top: 11%;
  left: 8.8%;
}

@media (min-width: 1200px) {
  font-size: 20.8rem;
    top: 15%;
    left: 9.8%;
}
`;

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

  @media (min-width: 768px) {
  font-size: 4.5rem;
  top:69%;
  left:7.5%;
  }

  @media (min-width: 1024px) {
    font-size: 5.8rem;
    top: 54%;
    left: 11.8%;
  }

  @media (min-width: 1200px) {
    font-size: 6.8rem;
    top: 54%;
    left: 14.8%;
}

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

@media (min-width: 768px) {
  font-size: 4.75rem;
  top:77%;
}

@media (min-width: 1024px) {
  font-size: 5.6rem;
    top: 67%;
    left: 26.8%;
}

@media (min-width: 1200px) {
  font-size: 7.6rem;
    top: 65%;
    left: 25.8%;
}
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

@media (min-width: 768px) {
  font-size: 5.4rem;
  left:48%;
  top:76%;
}

@media (min-width: 1024px) {
  font-size: 7.6rem;
    top: 63%;
    left: 46.8%
}

@media (min-width: 1200px) {
  font-size: 10.6rem;
    top: 61%;
    left: 45.8%;
}
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
