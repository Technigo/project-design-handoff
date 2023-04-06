import React from 'react'
import styled from 'styled-components'
import { Form } from 'components/Form'
import { Button } from './Button'

const StyledFormSite = styled.div`
height: 773px;
display: flex;
flex-direction: column;
align-items: center;
padding: 32px 0px 32px 0px;
background-color: #D7C3E2;

@media (min-width:641px) and (max-width:1024px) {
  height: 1200px;
}
`
const WhiteDiv = styled.div`
height: 120px;
background-color: white;
`

export const FormSite = () => {
  return (
    <>
      <WhiteDiv />
      <StyledFormSite>
        <Form />
        <Button textBtn>Sign up today</Button>
      </StyledFormSite>
    </>
  )
}