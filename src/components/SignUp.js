import React from 'react'
import styled from 'styled-components'
import SignUpImage from '../images/signup-img.jpg'

const SignUpsection = styled.section`
height: 100vh;
background-color: green;
`
const SignUpWrapper = styled.div`
height: 100%;
`
const SignUpImg = styled.img`
display: none;

@media (min-width: 570px) {
  display: block;
}

@media (min-width: 769px) {
  display: block;
}
`

export const SignUp = () => {
  <SignUpsection>
    <SignUpWrapper>
      <SignUpImg src={SignUpImage} />
    </SignUpWrapper>
  </SignUpsection>
}