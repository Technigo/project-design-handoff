import React from "react";
import styled from "styled-components";

const StyledPopup = styled.div`
position: relative;
margin: auto;
width: 90%;
background: #F5F5F5;
box-shadow: 0px 0px 113px 775px rgba(0, 0, 0, 0.45);
border-radius: 12px;
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
padding-bottom: 48px;
`
const HeaderWrapper = styled.div`
display: grid;
width: 100%;
grid-template-columns: 1fr 1fr 1fr 48px
grid-template-rows: 48px 1fr;
`

const StyledHeader = styled.h1`
font-size: 32;
margin-left: 24px;
margin-top: 32px;
font-weight: 700;
color: #02393F;
align-self: flex-start;
`

const ExitIcon = styled.img`
position: absolute;
right: 3%;
top: 3%;
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
      <ExitIcon src="/icons/exitbtn.svg" alt =""/>
      <HeaderWrapper>
        <StyledHeader>Register here</StyledHeader>
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
