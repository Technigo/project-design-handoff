import React from 'react'
import styled from 'styled-components'
import { P20 } from 'components/Typography'
import { Form } from 'components/Form'
import { Button } from './Button'

const StyledFormSite = styled.div`
height: 773px;
background-color: #D7C3E2;
display: flex;
flex-direction: column;
align-items: center;
padding: 32px 0px 32px 0px;
`

export const FormSite = () => {
  return (
    <StyledFormSite>
      <P20>
        Form for sign up
      </P20>
      <Form />
      <Button textBtn>Sign up</Button>
    </StyledFormSite>
  )
}