/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { BackgroundColor } from 'components/styledComponents/Backgrounds'
import { ImagePlank } from 'components/styledComponents/Images'
import { Button } from '../styledComponents/Button'
import { SectionTitle, CardText, CardSubTitle, Input, Label } from '../styledComponents/Texts'
import { FlexContainer, Form, Container, QuestionContainer } from '../styledComponents/Containers'
import PlankBalance from '../../images/PlankBalance.png'

export const QuestionSection = () => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${text}\nEmail: ${email}`);
  }
  return (
    <FlexContainer
      gap="20px"
      marginBottom="200px">
      <BackgroundColor background="#004852" width="100vw" />
      <ImagePlank review src={PlankBalance} />
      <SectionTitle>
       Question corner
      </SectionTitle>
      <Container question>
        <QuestionContainer border="5px solid #FFE600">
          <SectionTitle background="#EDFDFF" color="#002A30" border="0px" shadow="0px">Frequently asked questions</SectionTitle>
          <FlexContainer>
            <CardSubTitle>Can I do a program aimed at another
            position than my current one?
            </CardSubTitle>
            <CardText>Yes of course!
            It’s up to you which program you want to follow,
            and you are free to change to a different one whenever you want.
            </CardText>
          </FlexContainer>
          <FlexContainer>
            <CardSubTitle>What target areas are included in each program?
            </CardSubTitle>
            <CardText>All programs include agility, endurance,
            strength, and prehab training, but in different
            proportions depending on the specific needs of each position.
            </CardText>
          </FlexContainer>
          <FlexContainer>
            <CardSubTitle>What is prehab training?
            </CardSubTitle>
            <CardText>Prehab training is a proactive approach
            to injury prevention that focuses on strengthening and
            conditioning specific muscles and joints to reduce the risk of injury.
            </CardText>
          </FlexContainer>
          <FlexContainer>
            <CardSubTitle>Is this program suitable for beginners?
            </CardSubTitle>
            <CardText>Yes, the program includes a specific program
            for referees/new players that is designed for
            beginners who are new to roller derby and want to improve their fitness and skills.
            </CardText>
          </FlexContainer>
          <FlexContainer>
            <CardSubTitle>Do I need any special equipment for this program?
            </CardSubTitle>
            <CardText>While some exercises may require equipment
            such as resistance bands or dumbbells,
            many exercises can be done with just bodyweight.
            Any equipment needed will be clearly outlined in the program.
            </CardText>
          </FlexContainer>
        </QuestionContainer>
        <QuestionContainer form border="5px solid #045661">
          <SectionTitle background="#EDFDFF" color="#002A30" border="0px" shadow="0px" alignSelf="stretch">Got questions? Curious?</SectionTitle>
          <CardText>Great! Please contact us!
            Use the form below to send us an email and we will get back to you shortly.
            You can also <a href="facebook.com" target="_blank"> follow us on social media </a> and contact us there!
          </CardText>
          <Form onSubmit={handleSubmit}>
            <FlexContainer>
              <Label>
        Enter your email address
              </Label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@domain.com" />
            </FlexContainer>

            <FlexContainer>
              <Label>
        Enter your message
              </Label>
              <Input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your message" height="242.06px" />
            </FlexContainer>

            <Button type="submit">Submit</Button>
          </Form>
          <FlexContainer />
        </QuestionContainer>
      </Container>
    </FlexContainer>
  )
}