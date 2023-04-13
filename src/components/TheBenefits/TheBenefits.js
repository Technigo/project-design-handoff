import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import {
  BenefitsContainer,
  BenefitsHeaderContainer,
  BenefitsListContainer,
  BenefitsLeftContainer,
  BenefitsRightContainer
} from './TheBenefits.style';

export const TheBenefits = () => {
  return (
    <BenefitsContainer>
      <BenefitsHeaderContainer>
        <h2>BUILD HEALTHY HABITS</h2>
        <h2>FOR YOU AND YOUR DOG</h2>
      </BenefitsHeaderContainer>
      <BenefitsListContainer>
        <BenefitsLeftContainer>
          <ul style={{ listStyleType: 'none' }}>
            <li><FontAwesomeIcon icon={faCheck} />
           Work your mind, body, have fun and develop amazing skills together.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Get the most out of your time together every day.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Levels from beginner to advanced dog owner/puppy to old dog.
            </li>
          </ul>
        </BenefitsLeftContainer>
        <BenefitsRightContainer>
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Online workouts and programs.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Research based training.
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              Experienced coaches.
            </li>
          </ul>
        </BenefitsRightContainer>
      </BenefitsListContainer>
    </BenefitsContainer>
  )
}
