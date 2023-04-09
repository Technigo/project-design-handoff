import React from 'react';
import styled from 'styled-components';
import { HeroText } from 'components/HeroText';
import Gallery from 'components/Carousel';
import acroBtn from '../assets/button-acrobatics.svg';
import acroImg from '../assets/acrobat.svg';
import acroBg from '../assets/acrobatics-background.svg';
import ourClassesBtn from '../assets/button-our-classes.svg';
import classesBookBtn from '../assets/classes-book.svg';
import classesBookBtnHover from '../assets/classes-book-hover.svg';
import { ButtonHover } from '../components/ButtonHover';

const AcrobaticsContainer = styled.div`
  display: flex;
  flex-direction:column;
  height: fit-content;
  width: 100vw;
  background-image: url(${acroBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  
`;
const AcrobaticsButton = styled.img`
  width: 80%;
`;

const AcrobaticsImage = styled.img`
  width: 100%;
`;

const AcrobaticsText = styled.p`
  width: 85.9%;
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  line-height: 155%;
  text-align: justify;
  letter-spacing: -0.022em;
  color: #000000;
  margin-left:1rem;
`;

const OurClassesButton = styled.img`
  width:50%;
`;

const ButtonDiv = styled.div`
display:flex;
justify-content: center;
margin-bottom: 7%;
`;

const CarouselContainer = styled.div`
display:flex;
position:relative;
top:65.6%;
`

export const BookClasses = () => {
  return (
    <AcrobaticsContainer>
      <HeroText />
      <AcrobaticsButton src={acroBtn} />
      <AcrobaticsImage src={`${acroImg}`} />
      <AcrobaticsText>
        Acrobatics is is the performance of human feats of balance, agility, and
        motor coordination. Acrobatic skills are used in performing arts,
        sporting events, and martial arts. Extensive use of acrobatic skills are
        most often performed in acro dance, circus, gymnastics, and freerunning
        and to a lesser extent in other athletic activities including ballet,
        slacklining and diving. Although acrobatics is most commonly associated
        with human body performance, t he term is used to describe other types
        of performance, such as aerobatics.
      </AcrobaticsText>
      <OurClassesButton src={`${ourClassesBtn}`} />
      <CarouselContainer>
        <Gallery />
      </CarouselContainer>
      <ButtonDiv>
        <ButtonHover
          btnOnHover={classesBookBtnHover}
          btn={classesBookBtn}
          width="67%" />
      </ButtonDiv>
    </AcrobaticsContainer>
  );
};
