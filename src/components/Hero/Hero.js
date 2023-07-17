import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { StyledHero } from 'components/Hero/Hero.styles';
import { CallButton } from '../CTAButton/CallButton';

export const Hero = () => {
  return (
    <StyledHero>
      <div className="nav-bar">
        <div className="lotus-logo">
          <img src="/assets/teal-hexagon.svg" alt="hexgon" className="hexagon" />
          <img src="/assets/white-lotus.svg" alt="lotus logo" className="lotus" />
          {/* <p>Radiant Roots</p> */}
        </div>
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