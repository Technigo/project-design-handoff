/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { BackgroundColor } from 'components/styledComponents/Backgrounds'
import { SectionTitle, CardText } from '../styledComponents/Texts'
import { FlexContainer, ContainerForBiggerScreens } from '../styledComponents/Containers'
import reviewLogo1 from '../../images/reviewLogo1.png'
import reviewLogo2 from '../../images/reviewLogo2.png'
import reviewLogo3 from '../../images/reviewLogo3.png'
import BenefitsStarpass from '../../images/BenefitsStarpass.png'
import { Image } from '../styledComponents/Images'

export const ReviewSection = () => {
  return (
    <FlexContainer gap="20px" maxWidth="1000px" review>
      <BackgroundColor />
      <SectionTitle background="#004852">Team reviews</SectionTitle>
      <ContainerForBiggerScreens>
        <Image review src={BenefitsStarpass} />
      </ContainerForBiggerScreens>
      <FlexContainer background="#096B78" flexDirection="row" alignItems="flex-start" padding="2%" gap="5px" borderRadius="0px 10px 10px 10px" maxWidth="700px">
        <img src={reviewLogo1} alt="name" />
        <FlexContainer alignItems="flex-end" borderRadius="0px 8px 8px 8px" background="#EDFDFF">
          <CardText>"Fit2Derby has helped us see quick improvements on the track.
        We have better endurance, faster recovery from falls, and increased strength and agility.
        The program's challenging exercises and customization options
        have made us a more confident and capable roller derby team.
        Thanks, Fit2Derby!"
          </CardText>
          <cite>-Bear city Roller Derby</cite>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer background="#096B78" flexDirection="row" alignItems="flex-start" padding="2%" gap="5px" borderRadius="0px 10px 10px 10px" maxWidth="700px">
        <img src={reviewLogo2} alt="name" />
        <FlexContainer alignItems="flex-end" borderRadius="0px 8px 8px 8px" background="#EDFDFF">
          <CardText>"Using a team platform to track our progress has been an excellent
            addition to our training routine.
            It allows us to keep track of our individual and team progress,
            identify areas of improvement,
            and adjust our
            training accordingly.
            This way, we can continue to push ourselves and achieve our
            fitness goals while becoming an
            even stronger team."
          </CardText>
          <cite>-London Roller Derby</cite>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer background="#096B78" flexDirection="row" alignItems="flex-start" padding="2%" gap="5px" borderRadius="0px 10px 10px 10px" maxWidth="700px">
        <img src={reviewLogo3} alt="name" />
        <FlexContainer alignItems="flex-end" borderRadius="0px 8px 8px 8px" background="#EDFDFF">
          <CardText>"Fit2Derby is a game-changer for our league.
            The program is designed for roller derby
            athletes and offers challenging yet fun workouts.
            We appreciate the variety and user-friendly platform.
            As a team, we feel more connected and have seen fewer injuries
            since starting the program. Thanks to Fit2Derby, we feel stronger, faster,
            and more prepared for the roller derby track."
          </CardText>
          <cite>-Northern Beaches Roller Derby </cite>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  )
}