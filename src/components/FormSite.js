import React from 'react'
import styled from 'styled-components'
import { Form } from 'components/Form'

const StyledFormSite = styled.div`
height: 773px;
display: flex;
flex-direction: column;
align-items: center;
padding: 32px 0px 32px 0px;
background-color: #D7C3E2;

@media (min-width:641px) and (max-width:1024px) {
  height: 1200px;
  padding: 224px 80px 96px 80px;
  background-color: white;
}
@media (min-width:641px) {
background-color: white;
}
`
const WhiteDiv = styled.div`
height: 120px;
background-color: white;

@media (min-width:641px) {
  height: 0px;

`

export const FormSite = () => {
  return (
    <>
      <WhiteDiv />
      <StyledFormSite>
        <Form />
      </StyledFormSite>
    </>
  )
}