import React from "react";
import styled from "styled-components";
import { Trial } from "./Trial";

const Overlay = styled.div`
position: fixed;
height: 100vh;
width: 100vw;
z-index: 0;
top: 0;
background-color: rgba(0, 0, 0, 0.2);
`

const StyledPopup = styled.div`
position: fixed;
left: 50%;
overflow-x: hidden;
overflow-y: auto;
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
padding: 16px;
`

const StyledButtonWrapper = styled.div`
display: flex;
width: 85%;
gap: 1rem;
justify-content: center;
padding-bottom: 40px;
`

const SignUpBtn = styled.button`
font-family: 'Libre Baskerville', serif;
width: 134px;
font-weight: 700;
font-size: 16px;
border: 0.3px solid #000000;
background: #F5F5F5;
border-radius: 12px;
padding: 12px 20px;
color: #02393F;
`

const Popup = ({ setIsShowing }) => {
  return (
    <Overlay onClick={() => setIsShowing(false)}>
      <StyledPopup>
        <ExitIcon 
          src="/icons/exitbtn.svg" 
          alt ="" 
          onClick={() => setIsShowing(false)}/>
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
        <Trial />
      </StyledPopup>
    </Overlay>
  )
}

export default Popup;
