import React from 'react'
import { Wrapper, InnerContainer, TextOnImageContainer, ImgCardSmall } from 'components/styles/Section'
import { Tagline, Headline2, Headline3, BodyText } from 'components/styles/Text'
import { Button } from 'components/styles/Button'

export const Card = ({ color, img, headlineTitle, bodyText }) => {
  return (
    <ImgCardSmall style={{ backgroundImage: `linear-gradient(13.26deg, ${color} 17.53%, rgba(255, 255, 255, 0) 51.7%), url(${img})` }}>
      <TextOnImageContainer flexcolumn>
        <Headline3>{headlineTitle}</Headline3>
        <BodyText white>{bodyText}</BodyText>
      </TextOnImageContainer>
    </ImgCardSmall>
  )
};

export const Benefits = () => {
  return (
    <Wrapper height="100%">
      <InnerContainer flexcolumn alignscenter justifycenter gap="10px">
        <Tagline>BENEFITS</Tagline>
        <Headline2>Healthy doesn&apos;t have to be hard. We make it easy
        </Headline2>
        <InnerContainer grid columns="repeat(4,1fr)" benefitsgrid margin="74px 0 52px 0">
          <Card
            color="#DCBAF9"
            img="./images/yoga-benefits1.jpg"
            headlineTitle="Apartment friendly workouts"
            bodyText="No matter where you are or the size of your space, we got a class for you." />
          <Card
            color="#F4DDAB"
            img="./images/yoga-benefits2.jpg"
            headlineTitle="Structured workout programs"
            bodyText="We've got different programs for all levels & result to suit everyone." />
          <Card
            color="#ABD1F4"
            img="./images/yoga-benefits3.jpg"
            headlineTitle="Designed to keep you focused"
            bodyText="Track your activity & earn badges for completing workouts." />
          <Card
            color="#CAD7BA"
            img="./images/yoga-benefits4.jpg"
            headlineTitle="Healthy recipies & more"
            bodyText="Search among our recipies & get inspired for a healthy inside." />
        </InnerContainer>
        <Button>Download app</Button>
      </InnerContainer>
    </Wrapper>
  )
}