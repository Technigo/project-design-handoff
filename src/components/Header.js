import React from 'react';
import { Logo } from 'style/HeaderStyle';
import { H2, TagLine, BodyText } from 'style/Texts';
import { Image } from 'style/ImageStyle';
import { FlexColumn, FlexRow } from 'style/Flex';
import { Button, ButtonOutline } from 'style/ButtonsStyle';

export const Header = () => {
  return (
    <><FlexRow>
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
    <Image src="https://images.unsplash.com/photo-1633707744005-7a84dbe0035a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
    </>
  )
}
