import React from 'react'
import styled from 'styled-components';

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 8px;`

const StyledInput = styled.input`
background: #FFFFFF;
border: 1px solid #B3B5BD;
border-radius: 4px;
height: 48px;
width: 328px;
`

const StyledLabel = styled.label`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: #252525;
`

const StyledDescription = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #777986;`

const Input = (props) => {
  return (
    <StyledContainer>
      <StyledLabel htmlFor={props.name}>{props.text}
        <StyledInput type={props.type} name={props.name} />
      </StyledLabel>
      <StyledDescription>{props.description}</StyledDescription>
    </StyledContainer>
  )
}

export default Input;