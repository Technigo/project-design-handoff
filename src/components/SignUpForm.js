/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from './Button.js'

const classOptions = [
  'Power Yoga 60',
  'Power Yoga 75',
  'Yoga Strong'
]

const Wrapper = styled.div`
  width: 341px;
  height: 654px;
  display: flex;
  margin: auto;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  @media (min-width: 545px) {
    height: 622px;
  }
  @media (min-width: 685px) {
    height: 722px;
  }
`

const Heading = styled.h2`
  width: 328px;
  text-align: center;
  color: #000000; 
  font-family: 'Outfit', sans-serif;
  font-weight: 700;
  font-size: 40px;
`

const Form = styled.form`
  width: 100%
`

const InputWrapper = styled.div`
  margin: 24px auto 45px auto;
`

const FormHeading = styled.h3`
  font-family: 'Outfit', sans-serif;
  color: #FF9F0A;
  font-weight: 600;
  font-size: 24px;
`

const Input = styled.input`
width: 100%;
padding: 10px;
padding-left: 18px;
border-radius: 20px;
color: #888585;
font-family: 'Outfit', sans-serif;
font-weight: 500;
font-size: 16px;
border: 1px solid #888585;
margin-top: 8px;
`

const RadioButtonWrapper = styled.div`
  margin: 24px auto 45px auto;
`

const RadioButtonLabel = styled.label`
background-color: #888585;
display: block;
width: 100%;
padding: 10px;
padding-left: 18px;
border-radius: 20px;
color: white;
text-align: center;
font-family: 'Outfit', sans-serif;
font-weight: 500;
font-size: 16px;
margin-top: 8px;
cursor: pointer;
`

const RadioButton = styled.input`
position: absolute;
opacity: 0;
displaY: inline-block;
// Missing something to make the checked button change color to #66A1AE
`

export const SignUpForm = () => {
  const [classes, setClasses] = useState('')

  return (
    <Wrapper>
      <Heading>Sign up for a class</Heading>
      <Form onSubmit={(event) => event.preventDefault()}>
        <InputWrapper>
          <FormHeading>Enter personal details*</FormHeading>
          <label aria-label="name">
            <Input name="name" type="text" placeholder="Name" />
          </label>
          <label aria-label="email">
            <Input name="email" type="email" placeholder="Email" />
          </label>
          <label aria-label="phone">
            <Input name="phone" type="phone" placeholder="Phone number" />
          </label>
        </InputWrapper>
        <RadioButtonWrapper>
          <FormHeading>Choose a class*</FormHeading>
          {classOptions.map((group) => (
            <RadioButtonLabel key={group}>
              <RadioButton
                className="radio-button"
                type="radio"
                value={group}
                onChange={(event) => setClasses(event.target.value)}
                checked={classes === group} />
              {group}
            </RadioButtonLabel>
          ))}
        </RadioButtonWrapper>
        <Button type="submit">Sign up for class</Button>
      </Form>
    </Wrapper>
  )
}