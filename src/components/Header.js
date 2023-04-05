import React from 'react';
import { Logo } from 'style/HeaderStyle';
import { H2, TagLine, BodyText } from 'style/Texts';
import { Image } from 'style/ImageStyle';
import { FlexColumn, FlexRow } from 'style/Flex';
import { Button, ButtonOutline } from 'style/ButtonsStyle';

export const Header = () => {
  return (
    <>
      <FlexRow>
        <Logo src="./images/EASYFITtablet_mobile.png" alt="logo" />
      </FlexRow>
      <FlexColumn>
        <TagLine color="#fff">Feel the difference</TagLine>
        <H2 color="#fff">Healthy made easy</H2>
        <BodyText color="#fff">Join us now and try out our 5-30 min
          workouts that will get you motivated.
        </BodyText>
        <Button bg="#DCD2F1" color="#222322">Download app</Button>
        <ButtonOutline color="#fff">Create account</ButtonOutline>
      </FlexColumn>
      <Image src="./images/childpose.jpg" />
    </>
  )
}
