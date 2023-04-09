/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { SectionTitle, CardText, CardSubTitle } from '../styledComponents/Texts'
import { FlexContainer, QuestionContainer } from '../styledComponents/Containers'

export const FAQSection = () => {
  return (
    <QuestionContainer border="5px solid #FFE600">
      <SectionTitle background="#EDFDFF" color="#002A30" border="0px" shadow="0px">Frequently asked questions</SectionTitle>
      <FlexContainer>
        <CardSubTitle>Can I do a program aimed at another
            position than my current one?
        </CardSubTitle>
        <CardText>Yes of course!
            It’s up to you which program you want to follow,
            and you are free to change to a different one whenever you want.
        </CardText>
      </FlexContainer>
      <FlexContainer>
        <CardSubTitle>What target areas are included in each program?
        </CardSubTitle>
        <CardText>All programs include agility, endurance,
            strength, and prehab training, but in different
            proportions depending on the specific needs of each position.
        </CardText>
      </FlexContainer>
      <FlexContainer>
        <CardSubTitle>What is prehab training?
        </CardSubTitle>
        <CardText>Prehab training is a proactive approach
            to injury prevention that focuses on strengthening and
            conditioning specific muscles and joints to reduce the risk of injury.
        </CardText>
      </FlexContainer>
      <FlexContainer>
        <CardSubTitle>Is this program suitable for beginners?
        </CardSubTitle>
        <CardText>Yes, the program includes a specific program
            for referees/new players that is designed for
            beginners who are new to roller derby and want to improve their fitness and skills.
        </CardText>
      </FlexContainer>
      <FlexContainer>
        <CardSubTitle>Do I need any special equipment for this program?
        </CardSubTitle>
        <CardText>While some exercises may require equipment
            such as resistance bands or dumbbells,
            many exercises can be done with just bodyweight.
            Any equipment needed will be clearly outlined in the program.
        </CardText>
      </FlexContainer>
    </QuestionContainer>
  )
}