import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { StyledHero } from 'styles/Hero.styles';
import { CallButton } from './CallButton';

export const Hero = () => {
  return (
    <StyledHero>
      <div>
        <img src="/assets/lotus.svg" alt="lotus logo" />
        {/* <p>Radiant Roots</p> */}
        <FontAwesomeIcon icon={faBars} className="icon" />
      </div>
      <h1>The health revolution begins with you</h1>
      <p>Access 100+ yoga classes and receive a personalized nutrition plan
         - for holistic health anytime, anywhere. Achieve optimal health and
         balance through our comprehensive wellness program.
      </p>
      <CallButton>Start your 7-day FREE trial</CallButton>
    </StyledHero>
  )
}