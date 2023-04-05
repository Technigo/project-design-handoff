import React from 'react';
import styled from 'styled-components';
import acroBtn from '../assets/button-acrobatics.svg';
import acroImg from '../assets/acrobat.svg';
import acroBg from '../assets/acrobatics-background.svg';
import ourClassesBtn from '../assets/button-our-classes.svg';

const ParentDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${acroBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 3048.82px;
  left: -836px;
  top: 800px;
`;
const AcrobaticsButton = styled.img`
  position: absolute;
  width: 290px;
  height: 35.6px;
  left: 0px;
  top: 983.41px;
`;

const AcrobaticsImage = styled.img`
  position: absolute;
  width: 100vw;
  height: 400.82px;
  left: 18px;
  top: 1018px;
`;

const AcrobaticsText = styled.p`
  position: absolute;
  width: 313px;
  height: 334px;
  left: 30px;
  top: 1467px;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 155%;
  text-align: justify;
  letter-spacing: -0.022em;
  color: #000000;
`;

const OurClassesButton = styled.img`
  position: relative;
  width: 165px;
  height: 37.24px;
  top: 35%;
`;

export const Acrobatics = () => {
  return (
    <ParentDiv>
      <AcrobaticsButton src={`${acroBtn}`} />
      <AcrobaticsImage src={`${acroImg}`} />
      <AcrobaticsText>
        Acrobaticsis is the performance of human feats of balance, agility, and
        motor coordination. Acrobatic skills are used in performing arts,
        sporting events, and martial arts. Extensive use of acrobatic skills are
        most often performed in acro dance, circus, gymnastics, and freerunning
        and to a lesser extent in other athletic activities including ballet,
        slacklining and diving. Although acrobatics is most commonly associated
        with human body performance, t he term is used to describe other types
        of performance, such as aerobatics.
      </AcrobaticsText>
      <OurClassesButton src={`${ourClassesBtn}`} />
    </ParentDiv>
  );
};
