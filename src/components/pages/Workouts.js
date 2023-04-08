import React from 'react'
import { Wrapper, InnerContainer, TextOnImageContainer, TextBlock, ImgCardLarge, TextContainer } from 'components/styles/Section'
import { Tagline, Headline2, Headline3, BodyText, LineBreak } from 'components/styles/Text'
import { Button } from 'components/styles/Button'

export const Workouts = () => {
  return (
    <Wrapper height="100%">
      <InnerContainer flexcolumn alignscenter>
        <Tagline>WORKOUTS</Tagline>
        <Headline2>One 5 min workout is better than none.</Headline2>
        <InnerContainer grid gridrow="652.281px" workoutsbox wrap>
          <ImgCardLarge
            workoutsbox
            relative
            style={{ background: 'linear-gradient(6.64deg, #DCBAF9 2.22%, rgba(255, 255, 255, 0) 45.49%), url("./images/workout-yoga.jpg")',
              backgroundPosition: 'center',
              backgroundSize: 'cover' }}>
            <TextOnImageContainer alignscenter workoutstext>
              <TextContainer flexcolumn gap="8px">
                <Headline3 workoutsh3>5 min warm up
                </Headline3>
                <BodyText>
                  For at home or the gym
                </BodyText>
              </TextContainer>
              <Button secondary>View more</Button>
            </TextOnImageContainer>
          </ImgCardLarge>
          <InnerContainer flexcolumn workoutsbox>
            <TextBlock large grey flexcolumn>
              <Headline2 workoutsh2>Healthy
                made easy
              </Headline2>
              <BodyText>
                Choose a workout or try out any of our weekly challenges.
                All our exercises range between 5 to 30 min.
                Each exercise is accompanied by a detailed written description
                and video to help you understand and perfect each move.
              </BodyText>
            </TextBlock>
            <InnerContainer workoutscolumn>
              <TextBlock purple flexcolumn half workoutscolumn>
                <Headline3 workoutsh3>
                  <LineBreak>AB</LineBreak>
                  workouts
                </Headline3>
                <BodyText>
                  For at home or the gym
                </BodyText>
              </TextBlock>
              <TextBlock green flexcolumn half workoutscolumn>
                <Headline3 workoutsh3>
                  <LineBreak>Cardio</LineBreak>
                  workouts
                </Headline3>
                <BodyText>
                  And so much more...
                </BodyText>
              </TextBlock>
            </InnerContainer>
          </InnerContainer>
        </InnerContainer>
      </InnerContainer>
    </Wrapper>
  )
}