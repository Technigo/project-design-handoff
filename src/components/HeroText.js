import React from 'react';
import styled from 'styled-components';
import logoHeroA from '../assets/logo-A-blue.svg';

const HeroTextWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  
  @media (min-width: 768px) {
    display: none;
  }
  
`;
export const HeroTextContent = styled.h1`
  z-index:99;
  width: 70%;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 126%;
  text-align: center;
  letter-spacing: -0.022em;
  color: #0962CF;
  display:${(props) => (props.display)};
 
  @media ((min-width: 768px)) {
    display: flex;
    color: #FFFFFF;
    font-size: 1.5rem;
    position:absolute;
    width:45%;
    top:58%;
    right:5%;
    text-align:left;
  }
`
const HeroA = styled.img`
  width: 12.7%;
  transform: ${(props) => (props.transform)};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HeroText = () => {
  return (
    <HeroTextWrapper>
      <HeroA src={`${logoHeroA}`} transform="rotate(90deg)" />
      <HeroTextContent>
          Physical activity is vital for the body.
          Learn how to master unique skills where you’ll develop strength,
          confidence and you&apos;ll defy yourself.
      </HeroTextContent>
      <HeroA src={`${logoHeroA}`} transform="rotate(-90deg)" />
    </HeroTextWrapper>
  )
}
