import React from 'react'
import { Wrapper, InnerContainer, TextOnImageContainer, ImgContainer, Gradient1, Gradient2, Gradient3, Gradient4 } from 'components/styles/Section'
import { Tagline, Headline2, Headline3, BodyText } from 'components/styles/Text'
import { ImageBenefits1, ImageBenefits2, ImageBenefits3, ImageBenefits4 } from 'components/styles/Image'
import { Button } from 'components/styles/Button'

export const Benefits = () => {
  return (
    <Wrapper height="100%">
      <InnerContainer flexcolumn alignscenter justifycenter gap="10px">
        <Tagline>BENEFITS</Tagline>
        <Headline2>Healthy doesn&apos;t have to be hard. We make it easy
        </Headline2>
        <InnerContainer wrap justifycenter margin="74px 0 52px 0">
          <ImgContainer>
            <ImageBenefits1 />
            <Gradient1 />
            <TextOnImageContainer flexcolumn>
              <Headline3>Apartment
                friendly workouts
              </Headline3>
              <BodyText white>
                No matter where you are or the size of you space, we got a class for you.
              </BodyText>
            </TextOnImageContainer>
          </ImgContainer>
          <ImgContainer>
            <ImageBenefits2 />
            <Gradient2 />
            <TextOnImageContainer flexcolumn>
              <Headline3>Structured
                workout programs
              </Headline3>
              <BodyText white>
                We&apos;ve got different programs for all levels & result to suit everyone.
              </BodyText>
            </TextOnImageContainer>
          </ImgContainer>
          <ImgContainer>
            <ImageBenefits3 />
            <Gradient3 />
            <TextOnImageContainer flexcolumn>
              <Headline3>Designed to
                keep you focused
              </Headline3>
              <BodyText white>
                Track your activity & earn badges for completing workouts.
              </BodyText>
            </TextOnImageContainer>
          </ImgContainer>
          <ImgContainer>
            <ImageBenefits4 />
            <Gradient4 />
            <TextOnImageContainer flexcolumn>
              <Headline3>Healthy
                recipies & more
              </Headline3>
              <BodyText white>
                Search among our recipies & get inspired for a healthy inside.
              </BodyText>
            </TextOnImageContainer>
          </ImgContainer>
        </InnerContainer>
        <Button>Download app</Button>
      </InnerContainer>
    </Wrapper>
  )
}