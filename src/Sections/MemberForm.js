import React from 'react';
import styled from 'styled-components';
import memberStripes from '../assets/member-stripes.svg';
import logoABlack from '../assets/logo-A-black.svg';
import { ButtonHover } from '../components/ButtonHover';
import sendBtn from '../assets/button-send.svg';
import sendBtnHover from '../assets/button-send-hover.svg';
import memberImage from '../assets/member-image.svg';

const ImageAndFormWrapper = styled.div`
  width: 100%;
  background-color:#B9F615;
  display: flex;
  flex-direction:column;
  align-items:center;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    width:100vw;
  }
`;

const MemberFormContainer = styled.div`
  height: fit-content;
  width: 100%;
  background-color:#B9F615;
  display: flex;
  flex-direction:column;
  align-items:center;

  @media (min-width: 768px) {
    width:50vw;
  }
`;

const MemberStripesDiv = styled.div`
  display:flex;
  position:absolute;
  height: 232.6px;
  right:0;

`

const MemberStripes = styled.img`
  width:100%;
  height: inherit;
  position:relative;
  right:0;
`;

const LogoTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;
  height: 98px;
  width: 100vw;
  margin-top: 7%;
  z-index:99;
  left:0;

  @media (min-width: 768px) {
    width:50vw;
  }
 `;

const MemberLogoA = styled.img`
  position:absolute;
  width: 54.88px;
  height: 50.96px;
  left: 0px;
  top:25%;
  transform: rotate(90deg);
`;

const MemberTitle = styled.h1`
  position:absolute;
  width: 70,3%;
  height: 98px;
  top:15%;
  left:10%;
  font-style: italic;
  font-weight: 600;
  font-size: 2.8rem;
  line-height: 98%;
  text-align: center;
  letter-spacing: -0.022em;
  color: #000000;
  margin:0;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items:center;
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  width: 90%;
  max-width:814px;
  height: 65.2%;
  top:5%;
  margin-top:7%;
  margin-bottom:15.5%;
  padding:0.3rem;
  padding-bottom:1.5rem;
 `;

const FormText = styled.p`
  margin-bottom: 8px;
  width: 80%;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 119%;
  text-align: center;
  letter-spacing: -0.022em;
  color: #000000;
`;

const FormLabel = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 154%;
  letter-spacing: -0.022em;
  color: #000000;
  width: 80%;
  text-align:left;
`;

const FormInput = styled.input`
  width: 80%;
  height:2.75rem;
  border: 1.5px solid #074EE8;
  border-radius: 15.2px;
  margin-bottom:7%;
  background: transparent;
`;

const MemberImage = styled.img`
  width: 100vw;
  height: fit-content;
  margin-bottom:10%;

  @media (min-width: 768px) {
    width:50vw;
  }
`;

export const MemberForm = () => {
  return (
    <ImageAndFormWrapper>
      <MemberFormContainer>
        <MemberStripesDiv>
          <MemberStripes src={`${memberStripes}`} alt="diagonal blue stripes" />
        </MemberStripesDiv>
        <LogoTitleContainer>
          <MemberLogoA src={`${logoABlack}`} />
          <MemberTitle>Become a member</MemberTitle>
        </LogoTitleContainer>
        <FormWrapper>
          <FormText>Leave us your information and we&apos;ll
          contact you to finish the registration.
          </FormText>

          <FormLabel htmlFor="name">Name:</FormLabel>
          <FormInput type="text" id="name" name="name" />

          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormInput type="email" id="email" name="email" />

          <FormLabel htmlFor="phone">Phone:</FormLabel>
          <FormInput type="tel" id="phone" name="phone" />

          <ButtonHover
            btnOnHover={sendBtnHover}
            btn={sendBtn}
            position="relative"
            width="20.3%"
            top="85%" />
        </FormWrapper>
      </MemberFormContainer>
      <MemberImage src={`${memberImage}`} />
    </ImageAndFormWrapper>
  );
};
