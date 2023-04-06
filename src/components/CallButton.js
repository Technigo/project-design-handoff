import React from 'react'
import { StyledCallButton } from 'styles/CallButton.styles'

export const CallButton = () => {
  const handleScroll = () => {
    const element = document.getElementById('plans');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <StyledCallButton>
      <button type="button" onClick={handleScroll}>Start your 7-day FREE trial</button>
    </StyledCallButton>
  )
}