import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
display: flex;
flex-direction: row;
gap: 16px;
align-items: center;

`
const StyledLabel = styled.label`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #252525;
`

const StyledCheckbox = styled.input`
min-width: 24px;
min-height: 24px;
background: #FFFFFF;
border: 1px solid #B3B5BD;
border-radius: 4px;
`

const Checkbox = (props) => {
  return (
    <StyledContainer>
      <StyledCheckbox type="checkbox" name={props.name} />
      <StyledLabel htmlFor={props.name}>
        {props.text}
      </StyledLabel>
    </StyledContainer>
  );
}

export default Checkbox;