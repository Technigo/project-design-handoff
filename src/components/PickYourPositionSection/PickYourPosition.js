/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Highlight } from 'components/styledComponents/Highlight';
import { SectionTitle, CardText } from '../styledComponents/Texts'
import { FlexContainer, ContainerForMobile, ContainerForBiggerScreens } from '../styledComponents/Containers'
import { Carousel } from './Carousel'
import ProgramDeck from '../../images/ProgramDeck.png'
import { PositionImage, PositionImageContainer } from './Positions';
import DesktopcardsPivot from '../../images/DesktopcardsPivot.png'
import DesktopcardsJammer from '../../images/DesktopcardsJammer.png'
import DesktopcardsBlocker from '../../images/DesktopcardsBlocker.png'
import DesktopcardsFreneso from '../../images/DesktopcardsFreneso.png'

export const PickYourPositionSection = () => {
  return (
    <FlexContainer background="#045661" maxWidth="500px" gap="1em">
      <SectionTitle background="#EDFDFF" color="#002A30">Pick your position</SectionTitle>
      <FlexContainer gap="20px">
        <FlexContainer borderRadius="0px 23px 23px 23px" background="#EDFDFF" width="91%" padding="0px 8px 8px 0px">
          <SectionTitle alignSelf="flex-start" background="#004852">About the programs</SectionTitle>
          <CardText>
            <Highlight>Pick a position to access programs tailored to
            your favoured role on the track.
            </Highlight>
            Programs vary in focus, such as more endurance for jammers and strength for blockers.
            All programs prioritize safety and success on and off the track.
          </CardText>
        </FlexContainer>
        <CardText background="#EDFDFF" width="77%" alignSelf="flex-end"><Highlight>Referee, NSO or new to the game? </Highlight>
            Try FRENeSO. A well-rounded program to prevent injuries
            and prepare you for the track's intensity.
        </CardText>
      </FlexContainer>
      <ContainerForMobile mobile flexDirection="row" background="#128F9F" borderRadius="8px" border="1px solid #128F9F">
        <img src={ProgramDeck} alt="name" />
        <CardText color="#EDFDFF">Check out our <Highlight color="#FFE600"> deck of program cards </Highlight>below!</CardText>
      </ContainerForMobile>
      <ContainerForMobile>
        <Carousel />
      </ContainerForMobile>
      <ContainerForBiggerScreens padding="20px" background="#19737F" borderRadius="23px">
        <PositionImageContainer>
          <PositionImage src={DesktopcardsPivot} />
        </PositionImageContainer>
        <PositionImageContainer>
          <PositionImage src={DesktopcardsJammer} />
        </PositionImageContainer>
        <PositionImageContainer>
          <PositionImage src={DesktopcardsBlocker} />
        </PositionImageContainer>
        <PositionImageContainer>
          <PositionImage src={DesktopcardsFreneso} />
        </PositionImageContainer>
      </ContainerForBiggerScreens>
    </FlexContainer>
  )
}