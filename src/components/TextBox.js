/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'

/* These styled components are only accessible in the TextBox comp */
const Wrapper = styled.div`
  width: 50%;
  min-width: 340px;
  max-width: 580px;
  padding: 48px 5px 64px 5px;
  margin-left: auto;
  margin-right: auto;
`
const Heading = styled.h2`
  color: #FF9F0A;
  font-size: 32px;
  text-align: center;
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  margin-bottom: 8px;
  line-height: 36.32px;
`
const Paragraph = styled.p`
  color: #FFFFFF;
  font-size: 24px;
  font-family: 'Outfit', sans-serif;
  line-height: 27.24px;
  text-align: center;
  font-weight: 400;
`
/* Text Box component, in which the styled components aboce are mounted
The text is passed as props from App.js */
export const TextBox = ({ heading, text }) => {
  return (
    <Wrapper>
      <Heading>{heading}</Heading>
      <Paragraph>{text}</Paragraph>
    </Wrapper>
  )
}