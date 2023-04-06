import React from "react";
import styled from "styled-components";

const StyledPopup = styled.div`
margin: auto;
width: 90%;
background: #F5F5F5;
box-shadow: 0px 0px 113px 775px rgba(0, 0, 0, 0.45);
border-radius: 12px;
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
`
const HeaderWrapper = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr)
grid-template-rows: 1fr 1fr;
`

const StyledHeader = styled.h1`
font-size: 32;
font-weight: 700;
color: #02393F;
padding-left: 1rem;
grid-column: 1 / span 4;
grid-row: 2;
`

const ExitIcon = styled.img`
width: 24px;
grid-row: 1;
grid-column: 4;
margin: 24px;
`

const StyledForm = styled.form`
display: flex;
width: 85%;
flex-direction: column;
gap: 1rem;
align-items: center;
`
const StyledInput = styled.input`
font-family: 'Libre Baskerville', serif;
height: 3.3rem;
width: 100%;
background: #FFFFFF;
border: 1.5px solid #A8A8A8;
box-shadow: 0px 0px 8px #A8A8A8;
border-radius: 12px;
`

const StyledButtonWrapper = styled.div`
display: flex;
gap: 1rem;
justify-content: center;
`

const SignUpBtn = styled.button`
width: 8.5rem;
font-family: 'Libre Baskerville', serif;
`

const Popup = () => {
  return (
    <StyledPopup>
      <HeaderWrapper>
        <StyledHeader>Register here</StyledHeader>
        <ExitIcon src="/icons/exitbtn.svg" alt =""/>
      </HeaderWrapper>
      <StyledForm>
        <StyledInput type="text" placeholder="First Name" />
        <StyledInput type="text" placeholder="Last Name" />
        <StyledInput type="text" placeholder="Email Adress" />
        <StyledInput type="text" placeholder="Password" />
      </StyledForm>
      <StyledButtonWrapper>
        <SignUpBtn>Login</SignUpBtn>
        <SignUpBtn>Sign up</SignUpBtn>
      </StyledButtonWrapper>
    </StyledPopup>
  );
};

export default Popup;
