import React from 'react'
import { Wrapper, InnerContainer, TextContainer } from 'components/styles/Section'
import { Tagline, Headline2, BodyText } from 'components/styles/Text'
import { PhoneImage } from 'components/styles/Image'

export const Activity = () => {
  return (
    <Wrapper>
      <InnerContainer flexcolumn alignscenter>
        <Tagline>ACTIVITY</Tagline>
        <Headline2>Track you activity & celebrate your progress</Headline2>
        <InnerContainer grid grid3>
          <InnerContainer flexcolumn maxwidth="287px" justifyself="flex-end" center>
            <TextContainer flexcolumn>
              <Headline2>
                Milestones
              </Headline2>
              <BodyText>
                Don&apos;t have any personal goals yet?
                Challenge yourself by completing our pre-made
                milestones that definitley will keep you motivated
              </BodyText>
            </TextContainer>
            <TextContainer flexcolumn>
              <Headline2>
                Stats
              </Headline2>
              <BodyText>
                View your general stats and keep track of your achievments
              </BodyText>
            </TextContainer>
          </InnerContainer>
          <PhoneImage src="./assets/phone.svg" />
          <InnerContainer flexcolumn maxwidth="287px" center>
            <TextContainer flexcolumn>
              <Headline2>
                Schedule
              </Headline2>
              <BodyText>
                Schedule and monitor all your workouts in the calender
                and set up a personal reminder to keep you going
              </BodyText>
            </TextContainer>
            <TextContainer flexcolumn>
              <Headline2>
                Personal
              </Headline2>
              <BodyText>
                Track any personal fitness activities you
                accomplish by adding them you your calender
              </BodyText>
            </TextContainer>
          </InnerContainer>
        </InnerContainer>
      </InnerContainer>
    </Wrapper>
  )
}