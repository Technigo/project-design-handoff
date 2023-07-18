import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { StyledHero, NavBar, LotusLogo, Hexagon, Lotus } from 'components/Hero/Hero.styles';
import { Header1 } from 'styles/Global';
import { CallButton } from '../CTAButton/CallButton';

export const Hero = () => {
  return (
    <StyledHero>
      <NavBar>
        <LotusLogo>
          <Hexagon src="/assets/teal-hexagon.svg" alt="hexgon" />
          <Lotus src="/assets/white-lotus.svg" alt="lotus logo" />
          {/* <p>Radiant Roots</p> */}
        </LotusLogo>
        <FontAwesomeIcon icon={faBars} className="icon" />
      </NavBar>
      <Header1>The health revolution begins with you</Header1>
      <p>Access 100+ yoga classes and receive a personalized nutrition plan
         - for holistic health anytime, anywhere. Achieve optimal health and
         balance through our comprehensive wellness program.
      </p>
      <CallButton>Start your 7-day FREE trial</CallButton>
    </StyledHero>
  )
}