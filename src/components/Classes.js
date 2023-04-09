import React from 'react';
import styled from 'styled-components';

import acrobatics from '../assets/carousel/carousel-acrobatics.svg';
import cheerleading from '../assets/carousel/carousel-cheerleading.svg';
import trampoline from '../assets/carousel/carousel-trampoline.svg';
import aerialCircus from '../assets/carousel/carousel-aerial.svg';
import tumble from '../assets/carousel/carousel-tumble.svg';
import parkour from '../assets/carousel/carousel-parkour.svg';
import learnMoreBtn from '../assets/carousel/button-learnMore.svg';
import { ButtonLearn } from './Carousel';

const ClassesContainer = styled.div`
  display: none;
  flex-direction: column;
  height: fit-content;
  width: 100vw;

  @media (min-width: 768px) {
  display: flex;
}
`;

const GroupOfThree = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap:wrap;
  width: 100vw;
  margin-top:5%;
  gap:1rem;
`;
const SingleClassWrapper = styled.div`
    display:display;
    flex-direction:column;
    width:40%;
`

const SlideImage = styled.img`
    height:300px;
`;

export const Classes = () => {
  return (
    <ClassesContainer>
      <GroupOfThree>
        <SingleClassWrapper>
          <SlideImage src={acrobatics} alt="" />
          <ButtonLearn src={learnMoreBtn} />
          <p>Acrobatics</p>
        </SingleClassWrapper>

        <SingleClassWrapper>
          <SlideImage src={cheerleading} alt="" />
          <ButtonLearn src={learnMoreBtn} />
          <p>Cheerleading</p>
        </SingleClassWrapper>

        <SingleClassWrapper>
          <SlideImage src={trampoline} alt="" />
          <ButtonLearn src={learnMoreBtn} />
          <p>Trampoline</p>
        </SingleClassWrapper>
      </GroupOfThree>
      <GroupOfThree>
        <SingleClassWrapper>
          <SlideImage src={aerialCircus} alt="" />
          <ButtonLearn src={learnMoreBtn} />
          <p>Aerial Circus</p>
        </SingleClassWrapper>

        <SingleClassWrapper>
          <SlideImage src={tumble} alt="" />
          <ButtonLearn src={learnMoreBtn} />
          <p>Tumble</p>
        </SingleClassWrapper>

        <SingleClassWrapper>
          <SlideImage src={parkour} alt="" />
          <ButtonLearn src={learnMoreBtn} />
          <p>Parkour</p>
        </SingleClassWrapper>
      </GroupOfThree>
    </ClassesContainer>
  )
}
