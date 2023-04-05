import React from 'react';
import styled from 'styled-components';
/* import GirlHeroIMG from '../assets/GirlHero.svg' */

const SloganWrapper = styled.div`
display:flex;
width: 100vw;
justify-content: center;
flex-wrap: wrap;
flex-direction: column;
`

/* const GirlHero = styled.img`
` */

const Go = styled.h1`
font-family: 'Kulim Park';
font-style: italic;
font-weight: 600;
font-size: 142.936px;
line-height: 169px;
letter-spacing: -0.022em;
color: #B9F615;
margin: 0;
margin-top: 80%;`

const Beyond = styled.h3`
font-family: 'Kulim Park';
font-style: italic;
font-weight: 600;
font-size: 39.9506px;
line-height: 47px;
letter-spacing: -0.022em;
color: #B9F615;
`
const SloganBot = styled.div`
display:flex;`

const The = styled.h3`
font-family: 'Kulim Park';
font-style: italic;
font-weight: 600;
font-size: 44.0651px;
line-height: 52px;
letter-spacing: -0.022em;
color: #B9F615;
`

const Limits = styled.h2`
font-family: 'Kulim Park';
font-style: italic;
font-weight: 600;
font-size: 55.0281px;
line-height: 65px;
letter-spacing: -0.022em;
color: #B9F615;
`

export const Slogan = () => {
  return (
    <SloganWrapper>
      {/* <GirlHero src={`${GirlHeroIMG}`} /> */}
      <Go>GO</Go>
      <Beyond>BEYOND</Beyond>
      <SloganBot>
        <The>THE</The>
        <Limits>LIMITS</Limits>
      </SloganBot>
    </SloganWrapper>
  )
}