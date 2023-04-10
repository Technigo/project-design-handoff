import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Input from './Input'
import Checkbox from './Checkbox'

const StyledSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 32px 16px;
gap: 24px;
background: #FFFFFF;
border-radius: 0px 0px 8px 8px;
margin-bottom: 36px;
`

const StyledInputSection = styled.section`
display: flex;
flex-direction: column;
gap: 12px;`

const RegisterForm = () => {
  return (
    <StyledSection>
      <StyledInputSection>

        <Input type="text" name="first-name" text="First Name" description="Description." />
        <Input type="text" name="last-name" text="Last Name" />
        <Input type="text" name="phone-number" text="Phone number" />
        <Input type="text" name="email" text="Email (username)" />
        <Input type="text" name="password" text="Password" />
      </StyledInputSection>
      <Checkbox name="newsletter" text="I want to receive Raise Studio’s Newsletter!" />
      <Checkbox name="tac" text="I have read and understood the Terms & Conditions and Privacy Policy. " />
      <Button text="Join Raise Studio" />

    </StyledSection>
  );
}

export default RegisterForm;