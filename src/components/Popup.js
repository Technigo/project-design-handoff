import React, { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import styled from "styled-components";
import { Trial } from "./Trial";
import { CTA } from "./CTA";

const Overlay = styled.div`
position: fixed;
height: 100vh;
width: 100vw;
z-index: 2;
top: 0;
background-color: rgba(0, 0, 0, 0.2);
`

const StyledPopup = styled.div`
position: fixed;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
height: 80vh;
width: 80vw;
background: #F5F5F5;
box-shadow: 0px 0px 113px 775px rgba(0, 0, 0, 0.45);
border-radius: 12px;
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
padding-bottom: 3rem;
overflow-y: scroll;
z-index: 3;

@media(min-width: 768px) and (max-width: 1024px) {
  gap: 1.5rem;   
}

`

const ExitWrapper = styled.div`
display: flex;
gap: 11px;
align-items: center;
position: absolute;
right: 3%;
top: 1%;
cursor: pointer;
`

const ExitIcon = styled.img`
width: 21px;
`

const ExitText = styled.p`
font-size: 10px;
`

const StyledHeader = styled.h1`
font-size: 32px;
margin-left: 24px;
margin-top: 32px;
font-weight: 700;
color: #02393F;
align-self: flex-start;
width: 85%;
margin: auto;
`

const StyledForm = styled.form`
display: flex;
width: 85%;
flex-direction: column;
gap: 1rem;
align-items: center;

@media(min-width: 768px) and (max-width: 1024px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
`
const SecondRow = styled.div`
@media(min-width: 768px) and (max-width: 1024px) {
  grid-row: 2;
  grid-column: 1 / span 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
`

const StyledInput = styled.input`
font-family: 'Libre Baskerville', serif;
height: 3.3rem;
width: 100%;
background: #FFFFFF;
border: 1.5px solid #A8A8A8;
box-shadow: 0px 0px 8px #A8A8A8;
border-radius: 12px;
padding: 1rem;
`

const StyledButtonWrapper = styled.div`
display: flex;
width: 85%;
gap: 1rem;
justify-content: center;
padding-bottom: 40px;

@media(min-width: 768px) and (max-width: 1024px) {
  grid-column: 2;
  width: 100%;
}
`

const SignUpBtn = styled.button`
font-family: 'Libre Baskerville', serif;
width: 134px;
font-weight: 700;
font-size: 16px;
border: 0.3px solid #000000;
background-color: transparent;
border-radius: 12px;
padding: 12px 20px;
color: #02393F;

&:disabled {
background-color: #8A8A8A;
color: #F5F5F5;
border: none;
}

@media(min-width: 768px) and (max-width: 1024px) {
  padding: 12px 40px;
  width: 146px;
}
`

const Popup = ({ setIsShowing }) => {
  const isMobile = useMediaQuery('(max-width: 767px)'); // Hook to check screen size.
  const [isOpen, setIsOpen] = useState(true);

  // Locking scrolling under the popup.
  // Could be done with CSS classes
  // but since I'm stubborn this is a styled component
  // so I'm solving it like this

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handling clicking outside of the popup (the overlay)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsShowing(false);
    }
  };

  return (
    <Overlay onMouseDown={handleOverlayClick}>
      <StyledPopup>
        <ExitWrapper>
          {isMobile ?  null : <ExitText
            onClick={() => {
              setIsOpen(false)
              setIsShowing(false)
            }}>Cancel</ExitText>}
          <ExitIcon 
            src="/icons/exitbtn.svg" 
            alt ="" 
            onClick={() => {
              setIsOpen(false)
              setIsShowing(false)
            }}/>
        </ExitWrapper>
        {isMobile ?  null : <Trial selected small>Cancel</Trial>
        // Alright here we go again with the media query, this time I'm
        // rendering in the trial box with the prop selected to get the correct
        // background color and small to not have the CTA. On tablet and up.
        }
        {isMobile ?  null : <CTA small>Change billing plan</CTA>
        // Also I need the button for changing billing plan
        }
        <StyledHeader>Register here</StyledHeader>
        <StyledForm>
          <StyledInput id="firstname" type="text" placeholder="First Name" />
          <StyledInput id="secondname" type="text" placeholder="Last Name" />
          <SecondRow>
            <StyledInput id="email" type="text" placeholder="Email Adress" />
            <StyledInput id="password" placeholder="Password" />
          </SecondRow>
          <StyledButtonWrapper>
            <SignUpBtn>Login</SignUpBtn>
            <SignUpBtn disabled>Sign up</SignUpBtn>
          </StyledButtonWrapper>
        </StyledForm>
        {isMobile ? <Trial /> : null
        // Conditional rendering of the trial box for mobile only 
        }
      </StyledPopup>
    </Overlay>
  )
}

export default Popup;
