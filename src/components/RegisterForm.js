import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Input from './Input'

const StyledSection = styled.section``

const RegisterForm = () => {
  return (
    <StyledSection>
      <Input type="text" name="first-name" text="First Name" />
      <Input type="text" name="last-name" text="Last Name" />
      <Input type="text" name="phone-number" text="Phone number" />
      <Input type="text" name="email" text="Email (username)" />
      <Input type="text" name="password" text="Password" />
      <Input type="checkbox" name="newsletter" text="I want newsletter" />
      <Input type="checkbox" name="tac" text="Terms and conditions" />
      <Button text="Join Raise Studio" />

    </StyledSection>);
}

export default RegisterForm;