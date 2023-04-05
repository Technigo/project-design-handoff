import React from 'react';
import styled from 'styled-components';
/* import GirlHeroIMG from '../../assets/GirlHero.svg' */

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
position: absolute;
top: 60%;
left: 3%;`

const Beyond = styled.h3`
font-family: 'Kulim Park';
font-style: italic;
font-weight: 600;
font-size: 39.9506px;
line-height: 47px;
letter-spacing: -0.022em;
color: #B9F615;
margin: 0;
position: absolute;
left: 5%;
top: 79%;
`

const The = styled.h3`
font-family: 'Kulim Park';
font-style: italic;
font-weight: 600;
font-size: 44.0651px;
line-height: 52px;
letter-spacing: -0.022em;
color: #B9F615;
margin: 0;
position: absolute;
left: 24%;
top: 84%;
`

const Limits = styled.h2`
font-family: 'Kulim Park';
font-style: italic;
font-weight: 600;
font-size: 55.0281px;
line-height: 65px;
letter-spacing: -0.022em;
color: #B9F615;
margin: 0;
position: absolute;
right: 5%;
top: 83%;
`

export const Slogan = () => {
  return (
    <SloganWrapper>
      {/* <GirlHero src={`${GirlHeroIMG}`} /> */}
      <Go>GO</Go>
      <Beyond>BEYOND</Beyond>
      <The>THE</The>
      <Limits>LIMITS</Limits>
    </SloganWrapper>
  )
}