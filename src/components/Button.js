import React from 'react'
import styled from 'styled-components'

const StyledButtonHeader = styled.button`
  height: 67px;
  background-color: #FAC75D;
  border-radius: 50px;
  text-align: center;
  border: none;

  p {
    font-weight: 400;
    font-size: 2rem;
  }

  @media (min-width: 570px) {
    width: 41%;
  }
`

export const Button = () => {
  return (
    <StyledButtonHeader>
      <p>Join us today!</p>
    </StyledButtonHeader>
  )
}