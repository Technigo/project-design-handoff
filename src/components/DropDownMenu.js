import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
width: 50%;

@media (min-width: 1024px) {
  width: 100%;
}
`

const StyledSelect = styled.select`
border: 2px solid black;

@media (min-width: 667px) {
  height: 50px;
  width: 156px;
  padding: 0px 10px 0px 24px;
}
`

const StyledOption = styled.option`
bacground-color: white;
`

export const DropDownMenu = () => {
  return (
    <StyledForm>
      <StyledSelect>
        <StyledOption>MALMÖ</StyledOption>
        <StyledOption>STOCKHOLM</StyledOption>
        <StyledOption>GÖTEBORG</StyledOption>
      </StyledSelect>
    </StyledForm>
  )
}