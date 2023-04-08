import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LogoBig from '../images/logo-big.svg'
import { Detailtext, TitleFooter, Pfooter, IntroButtonP, FooterContactSubtitles, BookButtonP } from './Typography'
import { FooterButton } from './Button'
import FbIcon from '../images/fb-icon.svg'
import InstaIcon from '../images/insta-icon.svg'

const FooterSection = styled.footer`
  background-color: #4E80D5;
`
const FooterMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.44% 4.1%;

  @media (min-width: 667px){
    padding: 6.79% 15.26% 9.3% 15.26%;
  }

  @media (min-width: 1024px){
    padding: 9.06% 12.12% 17.6% 11.11%;
  }
`

const Logo = styled.img`
  width: 40.77%;
  margin-bottom: 52px;

  @media (min-width: 1024px) {
    width: 11.04%;
  }
`

const LogoDetailwrapperTablet = styled.div`
  display:none;
  @media (min-width: 667px) {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    width: 76.77%:
  }
`

const LogoWrapper = styled.div`
width: 22.1%;
display: none;
flex-wrap: wrap;
gap: 10px;

img {
  width: 46%;
}

@media (min-width: 667px) {
  display:flex;
}

@media (min-width: 1024px) {
  width: 11.42%;
  flex-direction: column;
  flex-wrap: nowrap;
}
`
const StyledForm = styled.form`
width: 95%;
margin-top: 32px;
margin-bottom: 52px;
display: flex;
flex-direction: column;
gap: 10px;

input {
  height: 39px;
  width: 100%;
  padding: 10px 0px 10px 10px;
  margin-bottom: 22px;
}

@media (min-width: 1024px) {
  display:none;
}
`
const DesktopStyledForm = styled.form`
width: 29.16%;
margin-bottom: 52px;
display: none;
flex-direction: column;
gap: 10px;

input {
  height: 39px;
  width: 100%;
  padding: 10px 0px 10px 10px;
  margin-bottom: 22px;
}

@media (min-width: 1024px) {
  display:flex;
}
`
const ContactDetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 667px) {
    display:none;
  }
`
const TabletContactDetailsDiv = styled.div`
  display: none;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 667px) {
    display:flex;
  }

  @media (min-width: 1024px) {
    width: 17.15%:
  }
`

export const Footer = () => {
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {
    if (window.innerWidth <= 666) {
      setButtonText('Sign up!');
    } else {
      setButtonText('Send');
    }
  }, []);

  return (
    <FooterSection>
      <FooterMainWrapper>
        <Logo src={LogoBig} />
        <LogoDetailwrapperTablet>
          <LogoWrapper>
            <Detailtext>Follow us</Detailtext>
            <div>
              <img src={FbIcon} alt="Facebook logo" />
              <img src={InstaIcon} alt="Instagram logo" />
            </div>
          </LogoWrapper>
          <DesktopStyledForm>
            <Detailtext>STAY IN TOUCH</Detailtext>
            <TitleFooter>JOIN OUR NEWSLETTER</TitleFooter>
            <Pfooter>Subscribe our newsletter to receive the latest news.</Pfooter>
            <input type="text" placeholder="E-MAIL" />
            <FooterButton><IntroButtonP>{buttonText}</IntroButtonP></FooterButton>
          </DesktopStyledForm>
          <TabletContactDetailsDiv>
            <Detailtext>CONTACT</Detailtext>
            <div>
              <FooterContactSubtitles>MAIL</FooterContactSubtitles>
              <BookButtonP>info@crosspark.com</BookButtonP>
            </div>
            <div>
              <FooterContactSubtitles>PHONE NUMBER</FooterContactSubtitles>
              <BookButtonP>+46 70-5800921</BookButtonP>
            </div>
          </TabletContactDetailsDiv>
        </LogoDetailwrapperTablet>
        <StyledForm>
          <Detailtext>STAY IN TOUCH</Detailtext>
          <TitleFooter>JOIN OUR NEWSLETTER</TitleFooter>
          <Pfooter>Subscribe our newsletter to receive the latest news.</Pfooter>
          <input type="text" placeholder="E-MAIL" />
          <FooterButton><IntroButtonP>{buttonText}</IntroButtonP></FooterButton>
        </StyledForm>
        <ContactDetailsDiv>
          <Detailtext>CONTACT</Detailtext>
          <div>
            <FooterContactSubtitles>MAIL</FooterContactSubtitles>
            <BookButtonP>info@crosspark.com</BookButtonP>
          </div>
          <div>
            <FooterContactSubtitles>PHONE NUMBER</FooterContactSubtitles>
            <BookButtonP>+46 70-5800921</BookButtonP>
          </div>
        </ContactDetailsDiv>
      </FooterMainWrapper>
    </FooterSection>
  )
}