import React from 'react';
import styled from 'styled-components';
import { TopDescription } from './TopDescription'
import ParkourImgBkgrnd from '../../assets/ParkourImgBkgrnd.svg'
import { ButWhatBanner } from './ButWhatBanner'
import { RingAcroArt } from './RingAcroArt'

const BCPageWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: fit-content;
background-image: url(${ParkourImgBkgrnd});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`

const AcroPromoText = styled.p`
font-family: 'Kulim Park';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 25px;
text-align: justify;
letter-spacing: -0.022em;
color: #000000;
padding-left: 23.5px;
padding-right: 23.5px;
margin-top: 450px;
`

export const BookClassPage = () => {
  return (
    <BCPageWrapper>
      <TopDescription />
      <ButWhatBanner />
      <RingAcroArt />
      <AcroPromoText>
      Acrobaticsis is the performance of human feats of balance,
      agility, and motor coordination. Acrobatic skills are used
      in performing arts, sporting events, and martial arts.
      Extensive use of acrobatic skills are most often performed
      in acro dance, circus, gymnastics, and freerunning and to
      a lesser extent in other athletic activities including ballet,
      slacklining and diving. Although acrobatics is most commonly
      associated with human body performance, the term is used to
      describe other types of performance, such as aerobatics.
      </AcroPromoText>
    </BCPageWrapper>

  )
}