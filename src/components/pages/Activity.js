import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Wrapper, OuterContainer, InnerContainer, CardsContainer, TextContainer } from 'components/styles/Section'
import { Tagline, Headline2, Headline3, BodyText } from 'components/styles/Text'
import { PhoneImage } from 'components/styles/Image'
import { TextCarousel } from 'components/parts/TextCarousel'

export const Activity = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1023px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' })

  return (
    <Wrapper id="#sectionFour" height="100%">
      <OuterContainer>
        <Tagline>ACTIVITY</Tagline>
        <Headline2>Track you activity & celebrate your progress</Headline2>
        <InnerContainer grid activity>
          {isDesktopOrLaptop && (
            <CardsContainer activitycontainer1>
              <TextContainer flexcolumn>
                <Headline3 workoutsh3>
                  Milestones
                </Headline3>
                <BodyText>
                  Don&apos;t have any personal goals yet?
                  Challenge yourself by completing our pre-made
                  milestones that definitley will keep you motivated
                </BodyText>
              </TextContainer>
              <TextContainer flexcolumn>
                <Headline3 workoutsh3>
                  Stats
                </Headline3>
                <BodyText>
                  View your general stats and keep track of your achievments
                </BodyText>
              </TextContainer>
            </CardsContainer>)}
          <PhoneImage
            src="./assets/phone.svg" />
          {isDesktopOrLaptop && (
            <CardsContainer activitycontainer2>
              <TextContainer flexcolumn>
                <Headline3 workoutsh3>
                  Schedule
                </Headline3>
                <BodyText>
                  Schedule and monitor all your workouts in the calender
                  and set up a personal reminder to keep you going
                </BodyText>
              </TextContainer>
              <TextContainer flexcolumn>
                <Headline3 workoutsh3>
                  Personal
                </Headline3>
                <BodyText>
                  Track any personal fitness activities you
                  accomplish by adding them you your calender
                </BodyText>
              </TextContainer>
            </CardsContainer>)}
          {isTabletOrMobile && <TextCarousel />}
        </InnerContainer>
      </OuterContainer>
    </Wrapper>
  )
}