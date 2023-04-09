/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Button } from '../styledComponents/Button'
import { SectionTitle, CardText, Input, Label } from '../styledComponents/Texts'
import { FlexContainer, Form, QuestionContainer } from '../styledComponents/Containers'

export const FormSection = ({ email, setEmail, text, setText }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${text}\nEmail: ${email}`);
  }
  return (
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
  )
}