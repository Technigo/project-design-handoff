/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Highlight } from '../styledComponents/Highlight'
import { SectionTitle, ListItem, CardText } from '../styledComponents/Texts'
import { FlexContainer, UnorderedList, BenefitContainer } from '../styledComponents/Containers'

export const BenefitsText = () => {
  return (
    <BenefitContainer>
      <CardText color="#F7FEFF">All our programs includes
        <Highlight cta> exercises to increase your endurance and
            agility as well as strengthening
            your neck muscles, core and lower body
        </Highlight>,
             all to prevent injuries and optimise your skating,
            blocking, juking and overall playing skills
      </CardText>
      <FlexContainer gap="20px">
        <SectionTitle>Examples of exercises</SectionTitle>
        <UnorderedList>
          <ListItem><Highlight color="#F7FEFF">High Intensity Interval Training </Highlight>(HIIT)</ListItem>
          <ListItem>
            <Highlight color="#F7FEFF">Mobility training </Highlight>  such as yoga movements for stretching and stability
          </ListItem>
          <ListItem>
            <Highlight color="#F7FEFF">Recommendations </Highlight> on gym classes and exercises involving gym equipment
          </ListItem>
        </UnorderedList>
      </FlexContainer>
    </BenefitContainer>
  )
}