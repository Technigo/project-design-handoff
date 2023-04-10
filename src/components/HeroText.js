import React from 'react';
import styled from 'styled-components';
import logoHeroA from '../assets/logo/logo-A-blue.svg';

const HeroTextWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  max-width: 100vw;
  
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

  @media ((min-width: 1024px)) {
    top:38%;
    width:35%;
  }
`
const HeroA = styled.img`
  width: 12.7%;
  transform: ${(props) => (props.transform)};
  margin-right: ${(props) => (props.right)};
  padding:0;
  margin:0;

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
