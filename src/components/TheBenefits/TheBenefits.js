/* eslint-disable import/named */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Wrapper } from 'styles/Wrapper.style';
import { SectionTitle } from 'components/sectionTitle/SectionTitle';
import {
  BenefitsContainer,
  UlContainer,
  BenefitsListContainer,
  BenefitsLeftContainer,
  BenefitsRightContainer,
  TextContainer
} from './TheBenefits.style';

export const TheBenefits = () => {
  return (
    <BenefitsContainer>
      <Wrapper>
        <BenefitsListContainer>
          <SectionTitle />
          <TextContainer>
            <BenefitsLeftContainer>
              <UlContainer>
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
              </UlContainer>
            </BenefitsLeftContainer>
            <BenefitsRightContainer>
              <UlContainer>
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
              </UlContainer>
            </BenefitsRightContainer>
          </TextContainer>
        </BenefitsListContainer>
      </Wrapper>
    </BenefitsContainer>
  )
}
