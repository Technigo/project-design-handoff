import React from 'react';
import { Logo } from 'style/HeaderStyle';
import { H2, TagLine, BodyText } from 'style/Texts';
import { Image } from 'style/ImageStyle';
import { FlexColumn, FlexRow } from 'style/Flex';
import { Button, ButtonOutline } from 'style/ButtonsStyle';
import childpose from '../images/childpose.jpg'
import logo from '../images/EASYFITtablet_mobile.png'

export const Header = () => {
  return (
    <>
      <FlexRow>
        <Logo src={logo} alt="logo" />
      </FlexRow>
      <FlexColumn>
        <TagLine color="#fff">Feel the difference</TagLine>
        <H2 color="#fff">Healthy made easy</H2>
        <BodyText color="#fff">Join us now and try out our 5-30 min
          workouts that will get you motivated.
        </BodyText>
        <Button bg="#DCD2F1" color="#222322">Download app</Button>
        <ButtonOutline color="#fff">Create account</ButtonOutline>
        <BodyText color="#fff">Compatible with</BodyText>
      </FlexColumn>
      <Image src={childpose} />
    </>
  )
}
