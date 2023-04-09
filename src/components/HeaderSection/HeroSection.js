import React from 'react'
import { Hero, Title, SecondaryTitle, ButtonContainer, ParagraphContainer, SecondaryTitleHidden } from './HeroCSS'
import { Button } from '../styledComponents/Button'
import { Highlight } from '../styledComponents/Highlight'
import { Paragraph, ParagraphHidden } from '../styledComponents/Texts'

export const HeroSection = () => {
  return (
    <Hero>
      <Title>Up your game with fit2Derby!</Title>
      <SecondaryTitleHidden>Customised online off skate programs
          for roller derby players
      </SecondaryTitleHidden>
      <SecondaryTitle>Looking to put the Power in power jam?
        Land that apex? Brace for days? With fit2Derby’s
      <Highlight cta> customised online off skate programs for roller derby players, </Highlight>
        a full time jam will feel like a breeze!
      </SecondaryTitle>
      <ParagraphHidden visible>Choose between our
        <Highlight cta> individual sign-up </Highlight> and
        <Highlight cta> Team sign-up </Highlight>
          with exclusive access to our
        <Highlight cta> Multiplayer Platform </Highlight>
      </ParagraphHidden>
      <ParagraphContainer>
        <Paragraph> <Highlight cta> Sign up as an individual </Highlight> if you are looking
            to improve your skills on your own.
        </Paragraph>
        <Paragraph> Or, <Highlight cta> sign up as a team </Highlight>
           to access our <Highlight cta> Multiplayer Platform </Highlight>
to track your own as well as your team’s progress.
        </Paragraph>
      </ParagraphContainer>
      <ButtonContainer>
        <Button fontSize="1.25em">Individual sign-up</Button>
        <Button fontSize="1.25em">Join with your team</Button>
      </ButtonContainer>
    </Hero>
  )
}