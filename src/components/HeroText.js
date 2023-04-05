import React from 'react';
import styled from 'styled-components';
import logoHeroA from '../assets/logo-A-blue.svg';

const HeroTextWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`
const HeroTextContent = styled.h1`
  position: absolute;
  z-index:99;
  width: 239px;
  height: 90px;
  left: 54px;
  top: 851px;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 126%;
  text-align: center;
  letter-spacing: -0.022em;
  color: #0962CF;
  `
const HeroA = styled.img`
  position: absolute;
  width: 46px;
  height: 43px;
  left: ${(props) => (props.left)};
  right: ${(props) => (props.right)};
  top: 875px;
  transform: ${(props) => (props.transform)};
`

export const HeroText = () => {
  return (
    <HeroTextWrapper>
      <HeroA src={`${logoHeroA}`} left="0" transform="rotate(90deg)" />
      <HeroTextContent>
          Physical activity is vital for the body.
          Learn how to master unique skills where you’ll develop strength,
          confidence and you&apos;ll defy yourself.
      </HeroTextContent>
      <HeroA src={`${logoHeroA}`} right="0" transform="rotate(-90deg)" />
    </HeroTextWrapper>
  )
}
