import React from 'react'
import { Wrapper, InnerContainer, ImgCardLarge } from 'components/styles/Section'
import { Tagline, Headline2 } from 'components/styles/Text'
import { Logo } from 'components/styles/Image'
import { Label, Form, TextInput, TextInputBox, LabelLogin, OrText } from 'components/styles/Input'
import { ButtonCommunity, ButtonCommunityLogin } from 'components/styles/Button'

export const Community = () => {
  return (
    <Wrapper height="100%">
      <InnerContainer flexcolumn alignscenter>
        <Tagline>COMMUNITY</Tagline>
        <Headline2>Sign up & join our community to get started today</Headline2>
        <InnerContainer grid workoutsbox flexcolumn>
          <ImgCardLarge style={{ backgroundImage: 'linear-gradient(6.08deg, #DCD2F1 7.04%, rgba(255, 255, 255, 0)  50.17%), url("./images/community-yoga.jpg")' }} workouts />
          <InnerContainer flexcolumn padding="0 44px" formpadding>
            <Headline2>Create account</Headline2>
            <Form>
              <TextInputBox>
                <Label for="fname">First name</Label>
                <TextInput type="text" id="fname" name="fname" />
              </TextInputBox>
              <TextInputBox>
                <Label for="lname">Last name</Label>
                <TextInput type="text" id="lname" name="lname" />
              </TextInputBox>
              <TextInputBox grow>
                <Label for="email">Email</Label>
                <TextInput type="email" id="email" name="email" pattern=".+@globex\.com" required />
              </TextInputBox>
              <TextInputBox grow>
                <Label for="password">Password</Label>
                <TextInput type="text" id="password" name="password" />
              </TextInputBox>
              <ButtonCommunity>Create account</ButtonCommunity>
              <TextInputBox grow>
                <LabelLogin>Already have an account?</LabelLogin>
                <ButtonCommunityLogin>Login</ButtonCommunityLogin>
              </TextInputBox>
              <OrText>Or</OrText>
              <ButtonCommunity iconBtn>
                <Logo src="./assets/apple-icon2.svg" />
                Sign in with Apple
              </ButtonCommunity>
              <ButtonCommunity iconBtn>
                <Logo src="./assets/google-icon.svg" />
                Sign in with Google
              </ButtonCommunity>
            </Form>
          </InnerContainer>
        </InnerContainer>
      </InnerContainer>
    </Wrapper>
  )
}